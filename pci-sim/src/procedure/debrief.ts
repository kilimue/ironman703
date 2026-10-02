/** Case evaluation: summary extraction + pure buildDebrief(summary) -> score, grade, items. */
import { EVAL, TREATMENT } from '../config/anatomy';
import { computeFlow, distalFlow, timiFromFlow } from '../physics/flow';
import { maxStenosis } from '../anatomy/lumen';
import { idxAt, type VesselId } from '../anatomy/vesselTree';
import type { SimState } from './sim';
import { STAGES } from './stages';
import { FLOW } from '../config/anatomy';

export interface DebriefSummary {
  stagesCompleted: number;
  stentDeployed: boolean;
  /** Worst diameter stenosis (0..1) over the lesion segment at the end. */
  residualStenosis: number;
  timi: number;
  /** Stent expanded diameter / reference diameter (null = no stent over the lesion). */
  stentRatio: number | null;
  /** Coverage margins (mm); null when no stent touches the lesion. */
  margins: { prox: number; dist: number } | null;
  geographicMiss: boolean;
  stentCount: number;
  heparin: boolean;
  predilated: boolean;
  qcaUsed: boolean;
  dissections: { sealed: boolean; cause: string }[];
  wireForcing: number;
  balloonRuptures: number;
  longestInflation: number;
  contrastMl: number;
  fluoroSec: number;
  finalViews: number;
}

export type ItemStatus = 'ok' | 'warn' | 'bad';
export interface DebriefItem {
  id: string;
  label: string;
  value: string;
  status: ItemStatus;
  teaching: string;
  penalty: number;
}
export type Grade = 'Excellent' | 'Good' | 'Acceptable' | 'Needs work' | 'Incomplete';
export interface Debrief {
  score: number;
  grade: Grade;
  headline: string;
  items: DebriefItem[];
}

const pct = (x: number) => `${Math.round(x * 100)}%`;

export function buildDebrief(s: DebriefSummary): Debrief {
  const items: DebriefItem[] = [];
  const add = (id: string, label: string, value: string, status: ItemStatus, penalty: number, teaching: string) =>
    items.push({ id, label, value, status, penalty: status === 'ok' ? 0 : penalty, teaching });

  // residual stenosis
  {
    const r = s.residualStenosis;
    const st: ItemStatus = r <= EVAL.residualOk ? 'ok' : r <= EVAL.residualWarn ? 'warn' : 'bad';
    add('residual', 'Residual stenosis', pct(r), st, st === 'warn' ? 8 : 20,
      st === 'ok'
        ? 'Optimal angiographic result: less than 10% residual narrowing in the treated segment.'
        : 'A residual narrowing remains. Post-dilate inside the stent with a non-compliant balloon, or cover any untreated diseased segment.');
  }
  // TIMI
  {
    const st: ItemStatus = s.timi >= 3 ? 'ok' : 'bad';
    add('timi', 'Final TIMI flow', `TIMI ${s.timi}`, st, s.timi === 2 ? 15 : 22,
      st === 'ok'
        ? 'TIMI 3: brisk, complete filling and washout of the distal vessel.'
        : 'Reduced flow at the end of a case is a warning sign (dissection, residual lesion, no-reflow). Find and fix the cause before leaving the lab.');
  }
  // stent sizing
  if (s.stentRatio === null) {
    add('sizing', 'Stent diameter vs reference', 'no stent', 'bad', 0, 'No stent was deployed over the lesion.');
  } else {
    const r = s.stentRatio;
    const st: ItemStatus =
      r >= EVAL.stentRatioOk[0] && r <= EVAL.stentRatioOk[1] ? 'ok' : r >= EVAL.stentRatioWarn[0] && r <= EVAL.stentRatioWarn[1] ? 'warn' : 'bad';
    add('sizing', 'Stent diameter vs reference', `${r.toFixed(2)} x`, st, st === 'warn' ? 5 : 10,
      st === 'ok'
        ? 'Well sized: the expanded stent matches the reference diameter (0.95-1.15x).'
        : r < 1
          ? 'Undersized: risk of malapposition and stent thrombosis. Post-dilate to the reference diameter.'
          : `Oversized: more than ${TREATMENT.dissectionRatio}x the reference risks edge dissection or perforation.`);
  }
  // coverage
  if (!s.margins || s.geographicMiss) {
    add('coverage', 'Lesion coverage', s.margins ? `prox ${s.margins.prox.toFixed(1)} / dist ${s.margins.dist.toFixed(1)} mm` : 'not covered', 'bad', 15,
      'Geographic miss: part of the diseased segment is not covered by stent. Choose a length = lesion + ~2 mm each side and centre it with the markers.');
  } else {
    const ok = s.margins.prox >= TREATMENT.goodMargin && s.margins.dist >= TREATMENT.goodMargin;
    add('coverage', 'Lesion coverage', `prox ${s.margins.prox.toFixed(1)} / dist ${s.margins.dist.toFixed(1)} mm`, ok ? 'ok' : 'warn', 4,
      ok ? 'Whole lesion covered with healthy margins at both ends.' : 'Covered, but with thin margins. Edges landing in plaque are prone to edge restenosis - aim for ≥ 1.5 mm.');
  }
  // extra stents
  {
    const extra = Math.max(0, s.stentCount - 1);
    add('extra', 'Extra stents', String(extra), extra === 0 ? 'ok' : 'warn', Math.min(10, extra * 5),
      extra === 0 ? 'One stent for one lesion - economical and fewer metal layers.' : 'Additional stents add cost and long-term risk. Accurate sizing first time usually avoids them (bailout stenting is still right when needed).');
  }
  add('heparin', 'Heparin before wiring', s.heparin ? 'given' : 'not given', s.heparin ? 'ok' : 'bad', 15,
    s.heparin ? 'Anticoagulation before the wire enters the coronary prevents thrombus on devices.' : 'Always give heparin (target ACT > 250 s) before wiring a coronary.');
  add('predil', 'Pre-dilation', s.predilated ? 'done' : 'not done', s.predilated ? 'ok' : 'warn', 5,
    s.predilated ? 'Lesion preparation helps the stent cross and expand fully.' : 'Pre-dilating a tight lesion helps stent delivery and expansion.');
  add('qca', 'QCA used', s.qcaUsed ? 'yes' : 'no', s.qcaUsed ? 'ok' : 'warn', 4,
    s.qcaUsed ? 'Measuring rather than eyeballing reduces sizing errors.' : 'Visual estimation is notoriously inaccurate - measure the reference diameter and lesion length.');
  // dissection
  if (!s.dissections.length) add('dissection', 'Dissection', 'none', 'ok', 0, 'No vessel injury.');
  else {
    const unsealed = s.dissections.filter((d) => !d.sealed).length;
    add('dissection', 'Dissection', `${s.dissections.length} (${unsealed ? unsealed + ' unsealed' : 'sealed'})`, unsealed ? 'bad' : 'warn', unsealed ? 20 : 5,
      unsealed
        ? 'An uncovered dissection can propagate and close the vessel. Cover it with a stent while the wire is still across.'
        : 'Dissection occurred but was sealed by a stent. Avoid oversizing and forcing to prevent it.');
  }
  add('forcing', 'Wire forcing', s.wireForcing > 0.05 ? 'forced' : 'gentle', s.wireForcing > 0.05 ? 'warn' : 'ok', 4,
    s.wireForcing > 0.05 ? 'Pushing hard against resistance makes the wire buckle and enter the vessel wall. Slow down and torque gently.' : 'The lesion was crossed gently - the wire stayed in the true lumen.');
  add('rupture', 'Balloon rupture', String(s.balloonRuptures), s.balloonRuptures ? 'bad' : 'ok', 10,
    s.balloonRuptures ? 'Never exceed the rated burst pressure: ruptures can dissect or perforate the vessel.' : 'Pressures stayed within the rated burst pressure.');
  {
    const t = s.longestInflation;
    const st: ItemStatus = t <= EVAL.inflationOk ? 'ok' : t <= EVAL.inflationWarn ? 'warn' : 'bad';
    add('inflation', 'Longest inflation', `${t.toFixed(0)} s`, st, st === 'warn' ? 5 : 10,
      st === 'ok' ? 'Short inflations limit ischaemia.' : 'Long occlusions cause ischaemia, arrhythmias and hypotension. Deflate and let the heart recover between inflations.');
  }
  {
    const v = s.contrastMl;
    const st: ItemStatus = v <= EVAL.contrastOk ? 'ok' : v <= EVAL.contrastWarn ? 'warn' : 'bad';
    add('contrast', 'Contrast volume', `${v} ml`, st, st === 'warn' ? 5 : 10,
      st === 'ok' ? 'Economical contrast use protects the kidneys.' : 'High contrast volume raises the risk of contrast-induced nephropathy. Use selective injections and plan each shot.');
  }
  {
    const v = s.fluoroSec;
    const st: ItemStatus = v <= EVAL.fluoroOk ? 'ok' : v <= EVAL.fluoroWarn ? 'warn' : 'bad';
    add('fluoro', 'Fluoroscopy time', `${Math.floor(v / 60)}:${String(Math.round(v % 60)).padStart(2, '0')} min`, st, st === 'warn' ? 5 : 10,
      st === 'ok' ? 'ALARA: radiation kept as low as reasonably achievable.' : 'Long fluoro times increase radiation to the patient and the team. Use short taps and last-image-hold.');
  }
  add('views', 'Final views', String(s.finalViews), s.finalViews >= 2 ? 'ok' : s.finalViews === 1 ? 'warn' : 'bad', s.finalViews === 1 ? 5 : 8,
    s.finalViews >= 2 ? 'Two distinct projections confirm the result.' : 'One view can hide an edge dissection or residual stenosis - always check in at least two projections.');

  const penalty = items.reduce((a, i) => a + i.penalty, 0);
  const score = Math.max(0, Math.min(100, Math.round(100 - penalty)));
  let grade: Grade;
  if (!s.stentDeployed) grade = 'Incomplete';
  else if (score >= 90) grade = 'Excellent';
  else if (score >= 75) grade = 'Good';
  else if (score >= 60) grade = 'Acceptable';
  else grade = 'Needs work';
  const bad = items.filter((i) => i.status === 'bad');
  const headline =
    grade === 'Incomplete'
      ? `Case ended after ${s.stagesCompleted} of ${STAGES.length} stages - no stent was deployed.`
      : grade === 'Excellent'
        ? 'Excellent result: well-sized stent, full coverage, TIMI 3 flow and an economical procedure.'
        : grade === 'Good'
          ? 'Good result with a few points to refine.'
          : grade === 'Acceptable'
            ? 'Acceptable, but several aspects need attention.'
            : `Needs work: ${bad.map((b) => b.label.toLowerCase()).slice(0, 3).join(', ')}.`;
  return { score, grade, headline, items };
}

/** Extract the evaluation summary from a sim. */
export function summarize(sim: SimState): DebriefSummary {
  const V = sim.anat.vessels;
  const l = sim.anat.lesion;
  const lad = V.LAD;
  const residual = maxStenosis(sim.lumen.LAD, lad.refD, lad.ds, l.s0 - 2, l.s1 + 2);
  // final flow without any balloon inflated
  const vessels = (['LM', 'LAD', 'LCX', 'D1', 'D2'] as VesselId[]).map((id) => ({
    id,
    parent: V[id].parent,
    parentS: V[id].parentS,
    ds: V[id].ds,
    lumen: sim.lumen[id],
    ref: V[id].refD,
  }));
  const flow = computeFlow(vessels, FLOW.coronaryVelocity, [], sim.dissections.map((d) => ({ vessel: d.vessel, s0: d.s0, sealed: d.sealed })));
  const timi = timiFromFlow(distalFlow(flow, 'LAD'));
  const ladStents = sim.stents.filter((s) => s.vessel === 'LAD' && s.s1 > l.s0 && s.s0 < l.s1);
  let stentRatio: number | null = null;
  let margins: DebriefSummary['margins'] = null;
  let miss = true;
  if (ladStents.length) {
    const ref = lad.refD[idxAt(lad, l.center)];
    stentRatio = Math.max(...ladStents.map((s) => s.expandedD)) / ref;
    // merge overlapping stents into a covered interval around the lesion
    const iv = ladStents.map((s) => [s.s0, s.s1]).sort((a, b) => a[0] - b[0]);
    const merged: number[][] = [];
    for (const r of iv) {
      const last = merged[merged.length - 1];
      if (last && r[0] <= last[1] + 0.2) last[1] = Math.max(last[1], r[1]);
      else merged.push(r.slice());
    }
    const cover = merged.find((m) => m[0] <= l.s0 && m[1] >= l.s1);
    if (cover) {
      miss = false;
      margins = { prox: l.s0 - cover[0], dist: cover[1] - l.s1 };
    } else {
      const m = merged.reduce((a, b) => (b[1] - b[0] > a[1] - a[0] ? b : a));
      margins = { prox: l.s0 - m[0], dist: m[1] - l.s1 };
    }
  }
  const longest = Math.max(
    0,
    ...sim.inflations.map((r) => r.duration),
    ...[sim.balloon, sim.stent].filter((c) => c.inflStart !== null).map((c) => sim.t - (c.inflStart as number)),
  );
  return {
    stagesCompleted: sim.stages.current,
    stentDeployed: sim.stents.length > 0,
    residualStenosis: residual,
    timi,
    stentRatio,
    margins,
    geographicMiss: miss,
    stentCount: sim.stents.length,
    heparin: sim.heparinGiven,
    predilated: sim.flags.predilated,
    qcaUsed: sim.flags.qcaUsed,
    dissections: sim.dissections.map((d) => ({ sealed: d.sealed, cause: d.cause })),
    wireForcing: sim.wire.maxRisk,
    balloonRuptures: sim.flags.ruptures,
    longestInflation: longest,
    contrastMl: sim.contrast.totalMl,
    fluoroSec: sim.xray.fluoroTime,
    finalViews: sim.snapshot.finalViews,
  };
}
