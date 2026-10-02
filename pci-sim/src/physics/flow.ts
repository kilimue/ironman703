/** Coronary flow & contrast transit: flow factor, TIMI grade, contrast arrival per ring. Pure. */
import { CONTRAST, FLOW } from '../config/anatomy';
import { smoothstep } from '../math/vec3';
import type { VesselId } from '../anatomy/vesselTree';

/**
 * Relative flow for a diameter stenosis (0..1): 1 below 60%, falling steeply to 0 at >= 98%.
 */
export function flowFactor(ds: number): number {
  if (ds <= FLOW.stenosisOnset) return 1;
  if (ds >= FLOW.stenosisOcclusion) return 0;
  const x = (ds - FLOW.stenosisOnset) / (FLOW.stenosisOcclusion - FLOW.stenosisOnset);
  return 1 - x * x;
}

/** TIMI flow grade from a relative flow factor. */
export function timiFromFlow(f: number): 0 | 1 | 2 | 3 {
  if (f >= FLOW.timi3) return 3;
  if (f >= FLOW.timi2) return 2;
  if (f > FLOW.timi1) return 1;
  return 0;
}

export interface FlowVessel {
  id: VesselId;
  parent?: VesselId;
  parentS?: number;
  ds: number;
  lumen: number[];
  ref: number[];
}

export interface FlowObstruction {
  vessel: VesselId;
  /** Flow stops from this local arc length on (inflated balloon). */
  s: number;
}

export interface FlowDissection {
  vessel: VesselId;
  s0: number;
  sealed: boolean;
}

export interface VesselFlow {
  /** Relative flow factor per ring. */
  factor: number[];
  /** Contrast front arrival time per ring (s since injection at the vessel tree origin); Infinity = never. */
  arrival: number[];
}

export type FlowResult = Partial<Record<VesselId, VesselFlow>>;

/**
 * Propagate flow down a vessel tree. Vessels must be ordered parents-first.
 * Speed is limited by the tightest narrowing upstream (inherited by branches); an inflated balloon
 * stops flow beyond its proximal edge; an unsealed dissection multiplies downstream flow.
 */
export function computeFlow(
  vessels: FlowVessel[],
  velocity: number,
  obstructions: FlowObstruction[] = [],
  dissections: FlowDissection[] = [],
): FlowResult {
  const out: FlowResult = {};
  for (const v of vessels) {
    const n = v.lumen.length;
    const factor = new Array<number>(n);
    const arrival = new Array<number>(n);
    let cap = 1;
    let t0 = 0;
    if (v.parent && out[v.parent]) {
      const pv = vessels.find((x) => x.id === v.parent)!;
      const pi = Math.min(out[v.parent]!.factor.length - 1, Math.round((v.parentS ?? 0) / pv.ds));
      cap = out[v.parent]!.factor[pi];
      t0 = out[v.parent]!.arrival[pi];
    }
    const obs = obstructions.filter((o) => o.vessel === v.id).map((o) => o.s);
    const obsAt = obs.length ? Math.min(...obs) : Infinity;
    const dis = dissections.filter((d) => d.vessel === v.id && !d.sealed).map((d) => d.s0);
    let limit = 1;
    let mult = 1;
    const applied = new Set<number>();
    for (let i = 0; i < n; i++) {
      const s = i * v.ds;
      const ds = Math.max(0, 1 - v.lumen[i] / v.ref[i]);
      limit = Math.min(limit, flowFactor(ds));
      dis.forEach((d0, k) => {
        if (!applied.has(k) && s >= d0) {
          applied.add(k);
          mult *= FLOW.dissectionPenalty;
        }
      });
      const f = s >= obsAt ? 0 : Math.min(cap, limit * mult);
      factor[i] = f;
      if (i === 0) arrival[i] = f > 0 ? t0 : Infinity;
      else arrival[i] = f > 0 && isFinite(arrival[i - 1]) ? arrival[i - 1] + v.ds / (velocity * f) : Infinity;
    }
    out[v.id] = { factor, arrival };
  }
  return out;
}

/** Flow factor at the distal end of a vessel. */
export function distalFlow(r: FlowResult, id: VesselId): number {
  const f = r[id]?.factor;
  return f && f.length ? f[f.length - 1] : 0;
}

/**
 * Contrast intensity (0..1) at a ring with front arrival time `arrival` at time `tau` since the
 * injection started. Dye fills between the front and a washout tail; slow flow washes out later.
 */
export function contrastAt(arrival: number, tau: number, bolus: number, factor: number): number {
  if (!isFinite(arrival) || tau < arrival) return 0;
  const rise = smoothstep(arrival, arrival + 0.15, tau);
  const f = Math.max(0.15, Math.min(1, factor));
  const washStart = arrival + bolus * (1 + (1 - f) * 1.6);
  const fade = 0.7 / f;
  return rise * (1 - smoothstep(washStart, washStart + fade, tau));
}

/** How long a cine run should last so the slowest filling ring is seen filling and washing out. */
export function cineLength(arrivals: number[], bolus: number, minFactor: number): number {
  let maxA = 0;
  for (const a of arrivals) if (isFinite(a)) maxA = Math.max(maxA, a);
  const f = Math.max(0.15, Math.min(1, minFactor));
  const total = maxA + bolus * (1 + (1 - f) * 1.6) + 0.7 / f + 0.4;
  return Math.max(CONTRAST.minCine, Math.min(CONTRAST.maxCine, total));
}
