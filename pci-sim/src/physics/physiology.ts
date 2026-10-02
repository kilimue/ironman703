/** Patient physiology: ischaemia, ST elevation, haemodynamics, beats, ACT. Pure. */
import { PHYSIOLOGY as P } from '../config/anatomy';
import type { Msg } from './messages';

export interface PhysState {
  ischaemia: number;
  /** Continuous occlusion time (s). */
  occlusion: number;
  maxOcclusion: number;
  hr: number;
  sys: number;
  dia: number;
  spo2: number;
  st: number;
  act: number;
  heparinAt: number | null;
  pain: boolean;
  hypotension: boolean;
  unstable: boolean;
  everUnstable: boolean;
  beatStart: number;
  beatRR: number;
  beatPVC: boolean;
  nextPVC: boolean;
  beats: number;
  pvcs: number;
}

export function makePhysiology(): PhysState {
  return {
    ischaemia: 0,
    occlusion: 0,
    maxOcclusion: 0,
    hr: P.baseHR,
    sys: P.baseSys,
    dia: P.baseDia,
    spo2: P.spo2,
    st: 0,
    act: P.actBaseline,
    heparinAt: null,
    pain: false,
    hypotension: false,
    unstable: false,
    everUnstable: false,
    beatStart: 0,
    beatRR: 60 / P.baseHR,
    beatPVC: false,
    nextPVC: false,
    beats: 0,
    pvcs: 0,
  };
}

export interface PhysInput {
  t: number;
  dt: number;
  /** Target-territory flow is stopped (inflated balloon / occlusion). */
  occluded: boolean;
  /** Lowest distal flow factor in the left system (0..1). */
  flow: number;
}

/** ACT after a heparin bolus given at time `at` (s). */
export function actAt(t: number, at: number | null): number {
  if (at === null || t < at) return P.actBaseline;
  return P.actBaseline + (P.actHeparin - P.actBaseline) * (1 - Math.exp(-(t - at) / P.actTau));
}

export function stepPhysiology(p0: PhysState, inp: PhysInput, rng: () => number): { phys: PhysState; msgs: Msg[]; beat: boolean } {
  const p: PhysState = { ...p0 };
  const msgs: Msg[] = [];
  const { dt, t } = inp;

  // ---- ischaemia
  if (inp.occluded) {
    p.occlusion += dt;
    p.ischaemia = Math.min(1, p.ischaemia + dt / P.ischaemiaRise);
  } else {
    p.occlusion = 0;
    const target = inp.flow < P.poorFlowThreshold ? P.poorFlowIschaemia * (1 - inp.flow / P.poorFlowThreshold) : 0;
    if (p.ischaemia > target) p.ischaemia += (target - p.ischaemia) * Math.min(1, dt / P.recoveryTau);
    else p.ischaemia = Math.min(target, p.ischaemia + dt / (P.ischaemiaRise * 2));
  }
  p.maxOcclusion = Math.max(p.maxOcclusion, p.occlusion);
  p.st = P.maxSTmm * p.ischaemia;

  const pain = p.ischaemia > P.painThreshold;
  if (pain && !p.pain) msgs.push({ level: 'warn', text: 'Patient: "I\'m getting the chest pain again..." - anterior ST elevation on V2.', key: 'pain' });
  p.pain = pain;

  const hypo = p.occlusion > P.hypotensionAfter;
  if (hypo && !p.hypotension) msgs.push({ level: 'warn', text: 'Occlusion > 40 s: blood pressure falling, ventricular ectopics.', key: 'hypo' });
  p.hypotension = hypo;
  const unstable = p.occlusion > P.unstableAfter;
  if (unstable && !p.unstable) msgs.push({ level: 'danger', text: 'Haemodynamically UNSTABLE - DEFLATE NOW!', key: 'unstable' });
  p.unstable = unstable;
  if (unstable) p.everUnstable = true;

  // ---- vitals (smoothed)
  const hrT = P.baseHR + P.ischaemiaHR * p.ischaemia + (unstable ? P.unstableHR : 0);
  p.hr += (hrT - p.hr) * Math.min(1, dt / 2.5);
  const drop = (hypo ? P.hypotensionDrop : 0) + (unstable ? P.unstableDrop : 0) + 6 * p.ischaemia;
  const k = Math.min(1, dt / (P.baseSys - drop < p.sys ? 3 : 7));
  p.sys += (P.baseSys - drop - p.sys) * k;
  p.dia += (P.baseDia - drop * 0.55 - p.dia) * k;
  p.spo2 += ((unstable ? P.spo2 - 4 : P.spo2) - p.spo2) * Math.min(1, dt / 4);

  // ---- ACT
  p.act = actAt(t, p.heparinAt);

  // ---- beats
  let beat = false;
  if (t >= p.beatStart + p.beatRR) {
    beat = true;
    p.beats++;
    p.beatStart = t;
    const rr = 60 / p.hr;
    if (p.nextPVC) {
      p.beatPVC = true;
      p.pvcs++;
      p.nextPVC = false;
      p.beatRR = rr * 1.4;
    } else {
      p.beatPVC = false;
      if (hypo && rng() < P.pvcChance) {
        p.nextPVC = true;
        p.beatRR = rr * 0.62;
      } else p.beatRR = rr;
    }
  }
  return { phys: p, msgs, beat };
}
