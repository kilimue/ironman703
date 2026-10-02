/** 0.014" coronary guidewire: branch selection by tip rotation, lesion crossing & forcing. Pure. */
import { WIRE } from '../config/anatomy';
import { angDiff, wrapDeg } from '../math/vec3';
import type { Anatomy, BranchPoint, VesselId } from '../anatomy/vesselTree';
import { coronaryPath, toLocal, type Path } from './route';
import type { Msg } from './messages';

export interface WireState {
  /** Tip position along the coronary path (0 = guide tip / LM ostium; <= 0 inside the guide). */
  pos: number;
  rot: number;
  chain: VesselId[];
  /** Tip currently beyond the lesion. */
  crossed: boolean;
  everCrossed: boolean;
  /** Hidden dissection risk accumulated while forcing the lesion. */
  risk: number;
  maxRisk: number;
  /** Visual / meter: 0..1 */
  buckle: number;
  /** Lesion resistance meter 0..1 */
  resistance: number;
  speed: number;
  forcedTime: number;
  /** Time since last rotation input (torque helps crossing). */
  sinceRotate: number;
  wrongBranchEntries: number;
}

export function makeWire(): WireState {
  return {
    pos: WIRE.minPos,
    rot: WIRE.initialRotation,
    chain: ['LM'],
    crossed: false,
    everCrossed: false,
    risk: 0,
    maxRisk: 0,
    buckle: 0,
    resistance: 0,
    speed: 0,
    forcedTime: 0,
    sinceRotate: 99,
    wrongBranchEntries: 0,
  };
}

export const wirePath = (anat: Anatomy, w: WireState): Path => coronaryPath(anat, w.chain);
export const wireOut = (w: WireState) => w.pos > 0;

/** Which child a branch point leads to with the current rotation (null = stay on the parent). */
export function branchChoice(anat: Anatomy, parent: VesselId, s: number, rot: number): VesselId | null {
  const here = anat.branches.filter((b) => b.parent === parent && Math.abs(b.s - s) < 1e-6);
  if (!here.length) return null;
  if (here.every((b) => !b.side)) {
    // true bifurcation: closest angle wins
    let best = here[0];
    for (const b of here) if (angDiff(rot, b.angle) < angDiff(rot, best.angle)) best = b;
    return best.child;
  }
  const side = here.find((b) => angDiff(rot, b.angle) <= WIRE.branchCapture);
  return side ? side.child : null;
}

export interface WireContext {
  dt: number;
  anat: Anatomy;
  /** A balloon/stent catheter is out on the wire. */
  cathOut: boolean;
  guideEngaged: boolean;
  rng: () => number;
}

export interface WireEvents {
  msgs: Msg[];
  crossedNow?: boolean;
  dissection?: boolean;
  enteredBranch?: VesselId;
}

/** Next branch decision point ahead of the tip on the current last vessel. */
export function nextBranch(anat: Anatomy, w: WireState): { b: BranchPoint; dist: number; choice: VesselId | null } | null {
  const path = wirePath(anat, w);
  const k = path.segs.length - 1;
  const last = w.chain[k];
  const tipLocal = w.pos - path.starts[k];
  const ahead = anat.branches.filter((b) => b.parent === last && b.s > tipLocal + 1e-6).sort((a, b) => a.s - b.s);
  if (!ahead.length) return null;
  const b = ahead[0];
  return { b, dist: b.s - tipLocal, choice: branchChoice(anat, last, b.s, w.rot) };
}

export function stepWire(w0: WireState, inp: { delta: number; dRot: number; fine: boolean }, ctx: WireContext): { wire: WireState; ev: WireEvents } {
  const w: WireState = { ...w0, chain: w0.chain.slice() };
  const ev: WireEvents = { msgs: [] };
  const { anat } = ctx;
  const lesion = anat.lesion;

  if (inp.dRot !== 0) {
    w.rot = wrapDeg(w.rot + inp.dRot);
    w.sinceRotate = 0;
  } else w.sinceRotate += ctx.dt;

  let delta = inp.delta;
  if (delta < 0 && ctx.cathOut) {
    ev.msgs.push({ level: 'warn', text: 'Cannot retract the wire while a balloon/stent catheter is on it - withdraw the catheter first.', key: 'wire-retract-blocked' });
    delta = 0;
  }
  if (delta > 0 && !ctx.guideEngaged && w.pos + delta > 0) {
    ev.msgs.push({ level: 'warn', text: 'Engage the guide in the left main before advancing the wire out.', key: 'wire-no-guide' });
    delta = Math.max(0, -w.pos);
  }

  const commanded = Math.abs(delta) / Math.max(ctx.dt, 1e-4);
  let path = wirePath(anat, w);
  const inLesion = (pos: number) => {
    if (pos <= 0) return false;
    const loc = toLocal(path, pos);
    return loc.vessel === lesion.vessel && loc.s >= lesion.s0 - 0.5 && loc.s <= lesion.s1;
  };

  // ---- lesion resistance
  let buckling = false;
  if (delta > 0 && !w.crossed && inLesion(w.pos + 0.01)) {
    const safe = WIRE.safeLesionSpeed * (w.sinceRotate < 0.35 ? WIRE.torqueBonus : 1);
    w.resistance = Math.min(1, w.resistance + ctx.dt * 2 * Math.max(0.3, commanded / safe));
    if (commanded > safe) {
      buckling = true;
      const actual = delta * WIRE.buckleProgress;
      w.risk = Math.min(WIRE.maxRisk, w.risk + WIRE.riskPerMm * actual * (commanded / safe));
      w.maxRisk = Math.max(w.maxRisk, w.risk);
      w.forcedTime += ctx.dt;
      delta = actual;
      ev.msgs.push({
        level: 'warn',
        text: 'Wire is buckling against the lesion - slow down (Shift) and torque gently.',
        key: 'buckle',
      });
    }
  } else {
    w.resistance = Math.max(0, w.resistance - ctx.dt * 1.5);
  }
  w.buckle = buckling ? Math.min(1, w.buckle + ctx.dt * 4) : Math.max(0, w.buckle - ctx.dt * 2);

  // ---- move, choosing branches on the way
  let remaining = delta;
  let guard = 0;
  while (Math.abs(remaining) > 1e-9 && guard++ < 10) {
    path = wirePath(anat, w);
    if (remaining > 0) {
      const nb = nextBranch(anat, w);
      const distToBranch = nb ? nb.dist : Infinity;
      const distToEnd = nb ? Infinity : path.length - 0.5 - w.pos;
      const step = Math.min(remaining, distToBranch, Math.max(0, distToEnd));
      w.pos += step;
      remaining -= step;
      if (nb && Math.abs(nb.dist - step) < 1e-9 && remaining >= 0) {
        // at a decision point
        if (nb.choice) {
          w.chain.push(nb.choice);
          ev.enteredBranch = nb.choice;
          const name = anat.vessels[nb.choice].name;
          const wanted = nb.choice === 'LAD';
          if (!wanted) w.wrongBranchEntries++;
          ev.msgs.push({
            level: wanted ? 'ok' : 'warn',
            text: wanted ? `Wire entered the ${name}.` : `Wire entered the ${name} - not the target. Pull back and rotate.`,
            key: 'branch-' + nb.choice,
          });
        }
        // nudge past the decision point so it isn't re-evaluated
        if (remaining <= 1e-9) {
          w.pos += 1e-6;
        }
        continue;
      }
      if (step < remaining || distToEnd <= 0) {
        remaining = 0;
        ev.msgs.push({ level: 'danger', text: 'Wire tip at the end of the vessel - stop! Perforation risk.', key: 'wire-end' });
      }
    } else {
      w.pos = Math.max(WIRE.minPos, w.pos + remaining);
      remaining = 0;
      // pop vessels we have retracted out of
      for (;;) {
        const p = wirePath(anat, w);
        if (w.chain.length > 1 && w.pos < p.starts[p.starts.length - 1] - 1e-9) w.chain.pop();
        else break;
      }
    }
  }
  path = wirePath(anat, w);
  w.speed = w.speed + (Math.abs(delta) / Math.max(ctx.dt, 1e-4) - w.speed) * Math.min(1, ctx.dt / 0.2);

  // end-of-vessel warning
  if (w.pos > 0 && !nextBranch(anat, w) && path.length - w.pos < WIRE.endWarning && inp.delta > 0) {
    ev.msgs.push({ level: 'warn', text: 'Wire tip near the end of the vessel - perforation risk. Do not push further.', key: 'wire-near-end' });
  }

  // ---- lesion crossing
  const loc = w.pos > 0 ? toLocal(path, w.pos) : null;
  const beyond = !!loc && loc.vessel === lesion.vessel && loc.s > lesion.s1;
  const onLesionVesselBefore = !!loc && loc.vessel === lesion.vessel && loc.s < lesion.s0;
  if (beyond && !w.crossed) {
    w.crossed = true;
    w.everCrossed = true;
    ev.crossedNow = true;
    if (w.risk > 0 && ctx.rng() < w.risk) {
      ev.dissection = true;
      ev.msgs.push({ level: 'danger', text: 'The lesion was crossed with force - a DISSECTION has formed.', key: 'wire-dissection' });
    } else {
      ev.msgs.push({ level: 'ok', text: 'Lesion crossed. Park the wire tip in the distal LAD.', key: 'crossed' });
    }
    w.risk = 0;
    w.resistance = 0;
  } else if (w.crossed && (onLesionVesselBefore || !loc || loc.vessel !== lesion.vessel)) {
    if (!loc || !(loc.vessel === 'D2')) w.crossed = false;
  }
  return { wire: w, ev };
}

export interface WireHint {
  location: string;
  next?: { name: string; dist: number; enter: boolean; angleOff: number; side: boolean };
}

/** Human description of the tip location + the upcoming branch decision. */
export function wireHint(anat: Anatomy, w: WireState): WireHint {
  if (w.pos <= 0) return { location: 'Inside the guide catheter' };
  const path = wirePath(anat, w);
  const loc = toLocal(path, w.pos);
  let location = anat.vessels[loc.vessel].name;
  if (loc.vessel === 'LAD') {
    const l = anat.lesion;
    location =
      loc.s < l.s0 ? 'Proximal LAD (before the lesion)' : loc.s <= l.s1 ? 'In the LAD lesion' : loc.s < 75 ? 'Mid LAD (beyond the lesion)' : 'Distal LAD';
  }
  const nb = nextBranch(anat, w);
  if (!nb || nb.dist > WIRE.hintDistance) return { location };
  const others = anat.branches.filter((b) => b.parent === nb.b.parent && Math.abs(b.s - nb.b.s) < 1e-6);
  if (!nb.b.side) {
    const target = others.find((b) => b.child === 'LAD') ?? nb.b;
    return {
      location,
      next: {
        name: 'LM bifurcation (LAD / LCx)',
        dist: nb.dist,
        enter: nb.choice === 'LAD',
        angleOff: wrapDeg(target.angle - w.rot),
        side: false,
      },
    };
  }
  return {
    location,
    next: { name: anat.vessels[nb.b.child].name, dist: nb.dist, enter: nb.choice === nb.b.child, angleOff: wrapDeg(nb.b.angle - w.rot), side: true },
  };
}
