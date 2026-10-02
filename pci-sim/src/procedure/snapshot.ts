/** Per-frame snapshot of the procedure: plain flags derived from the sim state. Pure. */
import { WIRE } from '../config/anatomy';
import { angDiff, wrapDeg } from '../math/vec3';
import { atRoot, facingLeft, facingRight } from '../physics/guide';
import { wirePath } from '../physics/wire';
import { toLocal, rangeOnVessel } from '../physics/route';
import { isOut, isInflated, workingRange, type CathState } from '../physics/balloon';
import { distalFlow, timiFromFlow } from '../physics/flow';
import type { VesselId } from '../anatomy/vesselTree';
import { coverageMargins } from '../anatomy/lumen';
import type { SimState } from './sim';
import type { ToolId } from '../tools/tools';

export interface Margins {
  prox: number;
  dist: number;
}

export interface Snapshot {
  t: number;
  stage: number;
  tool: ToolId;
  // guide
  guideS: number;
  guideInserted: boolean;
  guidePastElbow: boolean;
  guideInChest: boolean;
  guideInAorta: boolean;
  guideAtRoot: boolean;
  guideFacingLeft: boolean;
  guideFacingRight: boolean;
  guideEngaged: boolean;
  /** Signed rotation from the left cusp (deg). */
  guideCuspOffset: number;
  // imaging
  xrayActive: boolean;
  lookedOnFluoro: boolean;
  diagAngio: boolean;
  injections: number;
  contrastMl: number;
  fluoroTime: number;
  // drugs
  heparin: boolean;
  act: number;
  // wire
  wireOut: boolean;
  wirePos: number;
  wireVessel: VesselId | null;
  wireLocal: number;
  wireInLAD: boolean;
  wireInLCX: boolean;
  wireInDiag: boolean;
  wireInLesion: boolean;
  wireCrossed: boolean;
  wireDistal: boolean;
  wireBuckling: boolean;
  wireRisk: number;
  // balloon
  balloonOut: boolean;
  balloonInflated: boolean;
  balloonPressure: number;
  balloonMargins: Margins | null;
  balloonAcross: boolean;
  predilInflated: boolean;
  predilated: boolean;
  // stent
  qcaUsed: boolean;
  qcaAfterPredil: boolean;
  stentLoaded: boolean;
  stentOut: boolean;
  stentInflated: boolean;
  stentPressure: number;
  stentMargins: Margins | null;
  stentCovers: boolean;
  stentCovered: boolean;
  stentsDeployed: number;
  deployedAndDeflated: boolean;
  finalViews: number;
  finalDistinct: boolean;
  // patient / flow
  occluded: boolean;
  ladFlow: number;
  timi: number;
  ischaemia: number;
  occlusionTime: number;
  unstable: boolean;
  dissections: number;
  dissectionUnsealed: boolean;
}

function margins(sim: SimState, c: CathState): Margins | null {
  if (!isOut(c)) return null;
  const path = wirePath(sim.anat, sim.wire);
  const [a, b] = workingRange(c);
  const r = rangeOnVessel(path, a, b, sim.anat.lesion.vessel);
  if (!r) return null;
  const m = coverageMargins(r, [sim.anat.lesion.s0, sim.anat.lesion.s1]);
  return { prox: m.prox, dist: m.dist };
}

export function buildSnapshot(sim: SimState): Snapshot {
  const { guide: g, wire: w, anat } = sim;
  const lesion = anat.lesion;
  const path = wirePath(anat, w);
  const loc = w.pos > 0 ? toLocal(path, w.pos) : null;
  const bm = margins(sim, sim.balloon);
  const sm = margins(sim, sim.stent);
  const ladFlow = distalFlow(sim.flow, 'LAD');
  const fv = sim.flags.finalViews;
  let distinct = false;
  for (let i = 0; i < fv.length && !distinct; i++)
    for (let j = i + 1; j < fv.length; j++)
      if (Math.hypot(wrapDeg(fv[i].lao - fv[j].lao), fv[i].cra - fv[j].cra) >= 20) {
        distinct = true;
        break;
      }
  const distinctViews = (() => {
    const kept: { lao: number; cra: number }[] = [];
    for (const v of fv) if (!kept.some((k) => Math.hypot(wrapDeg(k.lao - v.lao), k.cra - v.cra) < 20)) kept.push(v);
    return kept.length;
  })();
  return {
    t: sim.t,
    stage: sim.stages.current,
    tool: sim.tool,
    guideS: g.s,
    guideInserted: g.s > 0,
    guidePastElbow: g.s > sim.landmarks.elbowS,
    guideInChest: g.s > sim.landmarks.chestS,
    guideInAorta: g.s > sim.landmarks.aortaEntryS,
    guideAtRoot: atRoot(g, sim.routeLength),
    guideFacingLeft: facingLeft(g, anat.root),
    guideFacingRight: facingRight(g, anat.root),
    guideEngaged: g.engaged,
    guideCuspOffset: wrapDeg(g.rot - anat.root.leftCusp),
    xrayActive: sim.xray.active,
    lookedOnFluoro: sim.flags.lookedOnFluoro,
    diagAngio: sim.flags.diagAngio,
    injections: sim.contrast.injections.length,
    contrastMl: sim.contrast.totalMl,
    fluoroTime: sim.xray.fluoroTime,
    heparin: sim.heparinGiven,
    act: sim.phys.act,
    wireOut: w.pos > 0,
    wirePos: w.pos,
    wireVessel: loc ? loc.vessel : null,
    wireLocal: loc ? loc.s : 0,
    wireInLAD: w.chain.includes('LAD'),
    wireInLCX: w.chain.includes('LCX'),
    wireInDiag: w.chain.includes('D1') || w.chain.includes('D2'),
    wireInLesion: !!loc && loc.vessel === lesion.vessel && loc.s >= lesion.s0 && loc.s <= lesion.s1,
    wireCrossed: w.crossed,
    wireDistal: !!loc && loc.vessel === 'LAD' && loc.s >= lesion.s1 + WIRE.distalPark,
    wireBuckling: w.buckle > 0.2,
    wireRisk: w.maxRisk,
    balloonOut: isOut(sim.balloon),
    balloonInflated: isInflated(sim.balloon),
    balloonPressure: sim.balloon.pressure,
    balloonMargins: bm,
    balloonAcross: !!bm && bm.prox >= -(lesion.s1 - lesion.s0) / 2 && bm.dist >= -(lesion.s1 - lesion.s0) / 2,
    predilInflated: sim.flags.predilInflated,
    predilated: sim.flags.predilated,
    qcaUsed: sim.flags.qcaUsed,
    qcaAfterPredil: sim.flags.qcaAfterPredil,
    stentLoaded: sim.flags.stentLoaded,
    stentOut: isOut(sim.stent),
    stentInflated: isInflated(sim.stent),
    stentPressure: sim.stent.pressure,
    stentMargins: sm,
    stentCovers: !!sm && sm.prox >= 0 && sm.dist >= 0,
    stentCovered: sim.flags.stentCovered,
    stentsDeployed: sim.stents.length,
    deployedAndDeflated: sim.flags.deployedAndDeflated,
    finalViews: distinctViews,
    finalDistinct: distinct,
    occluded: sim.occluded,
    ladFlow,
    timi: timiFromFlow(ladFlow),
    ischaemia: sim.phys.ischaemia,
    occlusionTime: sim.phys.occlusion,
    unstable: sim.phys.unstable,
    dissections: sim.dissections.length,
    dissectionUnsealed: sim.dissections.some((d) => !d.sealed),
  };
}

export const facingOffsetText = (deg: number) => `${Math.round(Math.abs(deg))}° ${deg > 0 ? 'clockwise' : 'counter-clockwise'} of the left cusp`;
export const angleClose = (a: number, b: number, tol: number) => angDiff(a, b) <= tol;
