/** Balloon / stent delivery catheter: sizing, pressure-diameter, movement, inflation records. Pure. */
import { BALLOON, STENT } from '../config/anatomy';
import type { Msg } from './messages';

export type CathKind = 'balloon' | 'stent';

export interface DeviceSpec {
  diameters: number[];
  lengths: number[];
  defaultSize: { d: number; l: number };
  nominal: number;
  rbp: number;
  ruptureMargin: number;
  compliance: number;
  unfoldPressure: number;
  profile: number;
  inflateRate: number;
  fineInflateRate: number;
  deflateRate: number;
  speed: number;
  fineSpeed: number;
  tipLength: number;
  loadPos: number;
  occludePressure: number;
}

export const specOf = (k: CathKind): DeviceSpec => (k === 'balloon' ? BALLOON : STENT);

/**
 * Semi-compliant pressure-diameter curve:
 *   d = nominal x (1 + compliance x (P - Pnominal)) once unfolded (P >= unfold pressure),
 * smaller while unfolding below the unfold pressure (linear from the folded profile).
 */
export function balloonDiameter(nominalD: number, pressure: number, spec: DeviceSpec): number {
  if (pressure <= 0) return spec.profile;
  const unfolded = (p: number) => nominalD * (1 + spec.compliance * (p - spec.nominal));
  if (pressure < spec.unfoldPressure) {
    const dU = unfolded(spec.unfoldPressure);
    return spec.profile + (dU - spec.profile) * (pressure / spec.unfoldPressure);
  }
  return unfolded(pressure);
}

/** Pressure needed for a target diameter (inverse of the unfolded curve). */
export function pressureFor(nominalD: number, targetD: number, spec: DeviceSpec): number {
  return spec.nominal + (targetD / nominalD - 1) / spec.compliance;
}

export interface InflationRecord {
  kind: CathKind;
  d: number;
  l: number;
  start: number;
  duration: number;
  maxPressure: number;
  maxDiameter: number;
  /** Working length in wire-path coordinates. */
  range: [number, number];
  ruptured: boolean;
}

export interface CathState {
  kind: CathKind;
  d: number;
  l: number;
  /** Distal tip position along the wire path (mm); <= 0 means inside the guide. */
  pos: number;
  pressure: number;
  deflating: boolean;
  ruptured: boolean;
  /** Sim time the current inflation started (pressure above occlusion level), else null. */
  inflStart: number | null;
  inflMaxP: number;
  inflMaxD: number;
  /** For the stent catheter: the stent on it has been deployed (only the balloon remains). */
  deployed: boolean;
  /** Number of devices of this kind used (fresh stent loaded after a deployed one is withdrawn). */
  used: number;
  /** Has been advanced out of the guide at least once. */
  everOut: boolean;
  speed: number;
}

export function makeCath(kind: CathKind): CathState {
  const sp = specOf(kind);
  return {
    kind,
    d: sp.defaultSize.d,
    l: sp.defaultSize.l,
    pos: sp.loadPos,
    pressure: 0,
    deflating: false,
    ruptured: false,
    inflStart: null,
    inflMaxP: 0,
    inflMaxD: 0,
    deployed: false,
    used: 0,
    everOut: false,
    speed: 0,
  };
}

export const isOut = (c: CathState) => c.pos > 0;
export const isInflated = (c: CathState) => c.pressure > specOf(c.kind).occludePressure;
export const currentDiameter = (c: CathState) => balloonDiameter(c.d, c.pressure, specOf(c.kind));
/** Working length range [proximal, distal] in wire-path coordinates. */
export function workingRange(c: CathState): [number, number] {
  const sp = specOf(c.kind);
  const dist = c.pos - sp.tipLength;
  return [dist - c.l, dist];
}

export function canResize(c: CathState): string | null {
  if (c.pos > 0) return 'Sizes can only be changed while the catheter is inside the guide.';
  if (c.pressure > 0) return 'Deflate first.';
  return null;
}

export function setSize(c: CathState, d: number, l: number): { cath: CathState; msg?: Msg } {
  const why = canResize(c);
  if (why) return { cath: c, msg: { level: 'warn', text: why, key: 'resize' } };
  const sp = specOf(c.kind);
  if (!sp.diameters.includes(d) || !sp.lengths.includes(l))
    return { cath: c, msg: { level: 'warn', text: 'Size not available.', key: 'size-na' } };
  return { cath: { ...c, d, l, ruptured: false } };
}

export interface CathInput {
  /** Requested movement this step (mm, + = advance). */
  delta: number;
  inflate: boolean;
  fine: boolean;
}

export interface CathContext {
  t: number;
  dt: number;
  /** Wire tip position in path coordinates; catheter must stay behind it. */
  wireTip: number;
  /** Wire is out of the guide and the catheter can ride on it. */
  wireOut: boolean;
  /** The other balloon catheter is out of the guide. */
  otherOut: boolean;
}

export interface CathEvents {
  msgs: Msg[];
  /** Completed inflation (pressure fell below the occlusion level). */
  record?: InflationRecord;
  ruptured?: boolean;
  /** Stent reached deployment pressure on this step. */
  deployedNow?: boolean;
  /** A fresh device was loaded (after withdrawing a deployed stent / ruptured balloon). */
  reloaded?: boolean;
}

/** Advance one time step. */
export function stepCath(c0: CathState, inp: CathInput, ctx: CathContext): { cath: CathState; ev: CathEvents } {
  const sp = specOf(c0.kind);
  const c: CathState = { ...c0 };
  const ev: CathEvents = { msgs: [] };
  const name = c.kind === 'balloon' ? 'balloon' : 'stent';

  // ---------------- pressure
  if (inp.inflate && !c.ruptured) {
    if (c.pos <= 0) {
      ev.msgs.push({ level: 'warn', text: `The ${name} is still inside the guide - advance it to the lesion first.`, key: 'infl-in-guide' });
    } else {
      c.deflating = false;
      c.pressure += (inp.fine ? sp.fineInflateRate : sp.inflateRate) * ctx.dt;
    }
  } else if (inp.inflate && c.ruptured) {
    ev.msgs.push({ level: 'warn', text: 'Ruptured balloon - withdraw it into the guide to replace it.', key: 'ruptured' });
  }
  if (c.deflating) {
    c.pressure = Math.max(0, c.pressure - sp.deflateRate * ctx.dt);
    if (c.pressure === 0) c.deflating = false;
  }
  if (c.pressure > sp.rbp && !c.ruptured) {
    ev.msgs.push({
      level: 'danger',
      text: `Above rated burst pressure (${sp.rbp} atm)! Rupture risk - stop inflating.`,
      key: 'rbp',
    });
  }
  if (c.pressure >= sp.rbp + sp.ruptureMargin && !c.ruptured) {
    c.ruptured = true;
    ev.ruptured = true;
    ev.msgs.push({ level: 'danger', text: `${c.kind === 'balloon' ? 'Balloon' : 'Stent balloon'} RUPTURED at ${c.pressure.toFixed(1)} atm.`, key: 'rupture' });
    c.inflMaxP = Math.max(c.inflMaxP, c.pressure);
    c.pressure = 0;
    c.deflating = false;
  }

  // ---------------- inflation bookkeeping
  const dNow = balloonDiameter(c.d, c.pressure, sp);
  if (c.pressure > sp.occludePressure) {
    if (c.inflStart === null) {
      c.inflStart = ctx.t;
      c.inflMaxP = 0;
      c.inflMaxD = 0;
    }
    c.inflMaxP = Math.max(c.inflMaxP, c.pressure);
    c.inflMaxD = Math.max(c.inflMaxD, dNow);
    if (c.kind === 'stent' && !c.deployed && c.pressure >= STENT.deployPressure) {
      c.deployed = true;
      ev.deployedNow = true;
    }
  } else if (c.inflStart !== null) {
    ev.record = {
      kind: c.kind,
      d: c.d,
      l: c.l,
      start: c.inflStart,
      duration: ctx.t - c.inflStart,
      maxPressure: c.inflMaxP,
      maxDiameter: c.inflMaxD,
      range: workingRange(c),
      ruptured: !!ev.ruptured || c.ruptured,
    };
    c.inflStart = null;
  }

  // ---------------- movement
  let delta = inp.delta;
  if (delta !== 0 && c.pressure > 0.05) {
    ev.msgs.push({ level: 'warn', text: `Deflate the ${name} (Q) before moving it.`, key: 'move-inflated' });
    delta = 0;
  }
  if (delta > 0 && c.pos + delta > 0 && !ctx.wireOut) {
    ev.msgs.push({ level: 'warn', text: 'The wire must be out in the coronary before a balloon can follow it.', key: 'no-wire' });
    delta = Math.max(0, -c.pos);
  }
  if (delta > 0 && ctx.otherOut && c.pos + delta > 0) {
    ev.msgs.push({ level: 'warn', text: 'Only one balloon catheter at a time - withdraw the other one first.', key: 'one-at-a-time' });
    delta = Math.max(0, -c.pos);
  }
  let pos = c.pos + delta;
  const maxPos = ctx.wireTip - 1;
  if (delta > 0 && pos > maxPos) {
    pos = Math.max(c.pos, maxPos);
    ev.msgs.push({ level: 'warn', text: `The ${name} must stay behind the wire tip - advance the wire further first.`, key: 'behind-wire' });
  }
  pos = Math.max(sp.loadPos, pos);
  const moved = pos - c.pos;
  c.speed = c.speed + (Math.abs(moved) / Math.max(ctx.dt, 1e-4) - c.speed) * Math.min(1, ctx.dt / 0.2);
  c.pos = pos;
  if (c.pos > 0) c.everOut = true;

  // ---------------- withdrawn: reload a fresh device if this one is spent
  if (c.pos <= 0 && moved < 0 && c.everOut && (c.deployed || c.ruptured)) {
    c.deployed = false;
    c.ruptured = false;
    c.everOut = false;
    c.used += 1;
    ev.reloaded = true;
    ev.msgs.push({
      level: 'info',
      text: c.kind === 'stent' ? 'Delivery balloon withdrawn - a fresh stent is loaded (available for bailout).' : 'Ruptured balloon removed - a fresh balloon is loaded.',
      key: 'reload-' + c.kind,
    });
  }
  return { cath: c, ev };
}

/** Request deflation (Q). */
export function deflate(c: CathState): CathState {
  return c.pressure > 0 ? { ...c, deflating: true } : c;
}
