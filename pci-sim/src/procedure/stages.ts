/** The six procedure stages, latching sub-tasks, progression and situation-specific mentor hints. Pure. */
import type { Snapshot } from './snapshot';
import type { Msg } from '../physics/messages';

export interface TaskDef {
  id: string;
  label: string;
  done: (s: Snapshot) => boolean;
}

export interface StageDef {
  id: number;
  title: string;
  goal: string;
  why: string;
  tasks: TaskDef[];
}

export const STAGES: StageDef[] = [
  {
    id: 1,
    title: 'Advance guide to aortic root',
    goal: 'Take the 6F guide catheter from the right radial artery up the arm and down into the aortic root.',
    why: 'Radial access has fewer bleeding complications than femoral access. The guide is the "highway" every other device travels through, and it must reach the aortic root before it can engage a coronary. Short fluoro taps confirm position without wasting radiation.',
    tasks: [
      { id: 'elbow', label: 'Advance past the elbow', done: (s) => s.guidePastElbow },
      { id: 'aorta', label: 'Enter the aorta', done: (s) => s.guideInAorta },
      { id: 'look', label: 'Check position on fluoro', done: (s) => s.lookedOnFluoro },
      { id: 'root', label: 'Reach the aortic root', done: (s) => s.guideAtRoot || s.guideEngaged },
    ],
  },
  {
    id: 2,
    title: 'Engage left main',
    goal: 'Rotate the pre-shaped tip to face the left coronary cusp and seat it gently in the left main ostium, then take a diagnostic angiogram.',
    why: 'Coaxial engagement gives backup support for pushing devices and lets you inject selectively. The diagnostic angiogram is your road map: it confirms the lesion, its length, the side branches and the baseline flow.',
    tasks: [
      { id: 'face', label: 'Face the left coronary cusp', done: (s) => (s.guideAtRoot && s.guideFacingLeft) || s.guideEngaged },
      { id: 'seat', label: 'Seat the guide in the LM', done: (s) => s.guideEngaged },
      { id: 'angio', label: 'Diagnostic angiogram', done: (s) => s.diagAngio },
    ],
  },
  {
    id: 3,
    title: 'Cross the LAD lesion',
    goal: 'Give heparin, advance the 0.014" wire into the LAD (not the circumflex or diagonals), cross the lesion gently and park the tip distally.',
    why: 'A coronary wire without anticoagulation risks thrombus on the wire. The wire is the rail for every balloon and stent, so it must be in the true lumen of the target vessel and parked far enough distal to give support - but not jammed into the tip of the vessel.',
    tasks: [
      { id: 'heparin', label: 'Heparin given (ACT up)', done: (s) => s.heparin },
      { id: 'wireout', label: 'Wire out of the guide', done: (s) => s.wireOut },
      { id: 'lad', label: 'Into the LAD (not LCx)', done: (s) => s.wireInLAD },
      { id: 'cross', label: 'Cross the lesion gently', done: (s) => s.wireCrossed },
      { id: 'park', label: 'Park the tip distally', done: (s) => s.wireDistal },
    ],
  },
  {
    id: 4,
    title: 'Pre-dilate',
    goal: 'Position an undersized balloon (about 0.8-0.9x the reference diameter) across the lesion using its markers, inflate to at least 6 atm, then deflate.',
    why: 'Pre-dilation "prepares" the lesion so the stent can cross and expand fully. An undersized balloon cracks the plaque with a low risk of dissection. Watch the ECG: the vessel is occluded while the balloon is up.',
    tasks: [
      { id: 'markers', label: 'Balloon markers across the lesion', done: (s) => s.balloonAcross },
      { id: 'inflate', label: 'Inflate ≥ 6 atm over the lesion', done: (s) => s.predilInflated },
      { id: 'deflate', label: 'Deflate', done: (s) => s.predilated },
    ],
  },
  {
    id: 5,
    title: 'Deploy stent',
    goal: 'Measure the lesion (QCA), choose a stent ~1:1 with the reference diameter and long enough to cover the lesion with margins, deploy it and deflate.',
    why: 'Drug-eluting stents scaffold the vessel and prevent recoil and restenosis. Undersizing risks malapposition and thrombosis, oversizing risks edge dissection. Leaving diseased segment uncovered ("geographic miss") is a common cause of restenosis.',
    tasks: [
      { id: 'qca', label: 'Measure the lesion (QCA)', done: (s) => s.qcaAfterPredil },
      { id: 'load', label: 'Load a stent', done: (s) => s.stentLoaded },
      { id: 'cover', label: 'Cover the whole lesion', done: (s) => s.stentCovered },
      { id: 'deploy', label: 'Deploy and deflate', done: (s) => s.deployedAndDeflated },
    ],
  },
  {
    id: 6,
    title: 'Final angiogram',
    goal: 'Withdraw the delivery balloon and inject contrast after stenting, in at least two distinct projections.',
    why: 'A single view can hide residual stenosis, edge dissection or a compromised side branch. Two orthogonal-ish views confirm TIMI 3 flow and a good angiographic result before you finish.',
    tasks: [
      { id: 'inject', label: 'Inject after the stent', done: (s) => s.finalViews >= 1 },
      { id: 'second', label: 'Second, distinct projection', done: (s) => s.finalDistinct },
    ],
  },
];

export interface StageProgress {
  /** Index into STAGES of the current stage (STAGES.length = all done). */
  current: number;
  done: Record<string, boolean>;
  completedAt: (number | null)[];
  /** Sim time each stage started. */
  startedAt: (number | null)[];
}

export function makeStageProgress(): StageProgress {
  return { current: 0, done: {}, completedAt: STAGES.map(() => null), startedAt: STAGES.map((_, i) => (i === 0 ? 0 : null)) };
}

export const taskKey = (stage: number, task: string) => `${stage}:${task}`;

/** Latch sub-tasks of the current stage and advance when all are done. */
export function progressStages(p0: StageProgress, s: Snapshot, t: number): { progress: StageProgress; msgs: Msg[]; completed: number[] } {
  let p = p0;
  const msgs: Msg[] = [];
  const completed: number[] = [];
  let guard = 0;
  while (p.current < STAGES.length && guard++ < STAGES.length) {
    const st = STAGES[p.current];
    let changed = false;
    const done = { ...p.done };
    for (const task of st.tasks) {
      const k = taskKey(st.id, task.id);
      if (!done[k] && task.done(s)) {
        done[k] = true;
        changed = true;
      }
    }
    if (changed) p = { ...p, done };
    const all = st.tasks.every((task) => p.done[taskKey(st.id, task.id)]);
    if (!all) break;
    const completedAt = p.completedAt.slice();
    completedAt[p.current] = t;
    const startedAt = p.startedAt.slice();
    if (p.current + 1 < STAGES.length) startedAt[p.current + 1] = t;
    completed.push(p.current);
    msgs.push({ level: 'ok', text: `Stage ${st.id} complete: ${st.title}.`, key: 'stage-' + st.id });
    p = { ...p, current: p.current + 1, completedAt, startedAt };
  }
  return { progress: p, msgs, completed };
}

export function stageProgressPct(p: StageProgress, stage: number): number {
  const st = STAGES[stage];
  if (!st) return 100;
  const n = st.tasks.filter((task) => p.done[taskKey(st.id, task.id)]).length;
  return Math.round((n / st.tasks.length) * 100);
}

/** Calm, situation-specific hint for the mentor panel. */
export function mentorHint(s: Snapshot): string {
  if (s.unstable) return 'The patient is unstable - deflate now (Q) and let the myocardium recover before anything else.';
  if (s.occlusionTime > 30) return 'The vessel has been occluded for a while - consider deflating soon. ST elevation should resolve after reperfusion.';
  if (s.dissectionUnsealed) return 'There is an unsealed dissection. Stay calm: keep the wire in place - a stent that covers the flap will seal it and restore flow.';
  switch (s.stage) {
    case 0:
      if (s.tool !== 'guide') return 'Select the guide catheter (1).';
      if (!s.guideInserted) return 'Hold W (or scroll) to advance the guide catheter from the wrist.';
      if (!s.guidePastElbow) return 'Keep advancing up the forearm. The radial artery is small - smooth, steady advancement.';
      if (!s.guideInChest) return 'Continue up the brachial and axillary arteries towards the shoulder.';
      if (!s.lookedOnFluoro) return 'Tap the fluoro pedal (hold Space briefly) to check the catheter position - short taps save radiation.';
      if (!s.guideInAorta) return 'Through the subclavian and brachiocephalic trunk into the aortic arch.';
      return 'Advance down the ascending aorta until the guide stops at the aortic root.';
    case 1:
      if (!s.guideAtRoot && !s.guideEngaged) return 'Bring the guide back down to the aortic root.';
      if (!s.guideEngaged && !s.guideFacingLeft) {
        if (s.guideFacingRight) return 'The tip faces the right cusp (RCA). Rotate with A/D toward the left cusp - watch the dial.';
        return `Rotate the tip (A/D) until the dial shows it facing the LEFT cusp (currently ${Math.round(Math.abs(s.guideCuspOffset))}° off).`;
      }
      if (!s.guideEngaged) return 'Facing the left cusp. Now advance gently (Shift + W) to seat the tip in the LM ostium.';
      return 'Engaged. Inject contrast (C) for the diagnostic angiogram - try an RAO cranial view (V) to open up the LAD.';
    case 2:
      if (!s.heparin) return 'Give heparin (G) before any wire goes into the coronary.';
      if (s.tool !== 'wire') return 'Select the coronary wire (2).';
      if (!s.wireOut) return 'Advance the wire out of the guide into the left main.';
      if (s.wireInLCX) return 'The wire went into the circumflex. Pull back (S) into the LM, rotate the tip toward the LAD and re-advance.';
      if (s.wireInDiag) return 'The wire is in a diagonal. Pull back and rotate the tip away from the side branch.';
      if (!s.wireInLAD) return 'Before the LM bifurcation, rotate the tip (A/D) toward the LAD - the device panel shows which branch it will take.';
      if (s.wireBuckling) return 'The wire is buckling. Slow down (hold Shift) and add a little torque - let the tip find the channel.';
      if (s.wireInLesion) return 'In the lesion: advance slowly (Shift) with gentle rotation.';
      if (!s.wireCrossed) return 'Approach the lesion; slow down (Shift) before you reach it.';
      return 'Lesion crossed. Keep advancing into the distal LAD to park the tip - stop before the vessel end.';
    case 3:
      if (s.tool !== 'balloon') return 'Select the balloon (3). A 2.5 mm balloon is about 0.85x the 2.95 mm reference.';
      if (!s.balloonOut) return 'Choose a size while the balloon is in the guide, then advance it over the wire.';
      if (!s.balloonAcross) return 'Position the balloon so its two markers straddle the lesion (see the margins in the device panel).';
      if (!s.predilInflated) return 'Hold E to inflate to 8-10 atm. Watch the ECG and pain - the LAD is occluded while the balloon is up.';
      return 'Deflate (Q) - aim for an inflation of 10-20 s.';
    case 4:
      if (s.balloonOut) return 'Withdraw the balloon (S) back into the guide.';
      if (!s.qcaAfterPredil) return 'Select Measure (7) to read the QCA: reference diameter and lesion length guide your stent choice.';
      if (s.tool !== 'stent') return 'Select the stent (4). Diameter ~1:1 with the reference, length = lesion + ~2 mm each side.';
      if (!s.stentOut) return 'Check the stent size, then advance it over the wire to the lesion.';
      if (!s.stentCovers && s.stentsDeployed === 0) {
        if (s.stentMargins && (s.stentMargins.prox < 0 || s.stentMargins.dist < 0))
          return 'The stent does not yet cover the whole lesion - adjust so both margins are positive (ideally ≥ 1.5 mm).';
        return 'Advance the stent until it is centred on the lesion.';
      }
      if (s.stentsDeployed === 0) return 'Good position. Hold E to deploy at nominal pressure (~10-12 atm).';
      return 'Deployed. Deflate (Q).';
    case 5:
      if (s.stentOut) return 'Withdraw the delivery balloon into the guide (S) before the final shots.';
      if (s.finalViews === 0) return 'Inject contrast (C) to see the result.';
      return 'Change projection (V) by at least 20° and inject again.';
    default:
      return 'All stages complete - open the debrief with End case, or keep exploring.';
  }
}
