/**
 * 1D "rail" model: devices slide by arc length along paths made of vessel centreline pieces.
 * Pure functions.
 */
import type { Vec3 } from '../config/anatomy';
import { lerp3, norm, scale } from '../math/vec3';
import type { Anatomy, BranchPoint, VesselId } from '../anatomy/vesselTree';

export interface PathSeg {
  vessel: VesselId;
  /** Local arc length where this segment starts on the vessel. */
  from: number;
  /** Local arc length where it ends (may be < from for reverse traversal). */
  to: number;
}

export interface Path {
  segs: PathSeg[];
  /** Path arc length at the start of each segment. */
  starts: number[];
  length: number;
}

export function makePath(segs: PathSeg[]): Path {
  const starts: number[] = [];
  let acc = 0;
  for (const s of segs) {
    starts.push(acc);
    acc += Math.abs(s.to - s.from);
  }
  return { segs, starts, length: acc };
}

export interface PathLocal {
  vessel: VesselId;
  /** Local arc length on that vessel. */
  s: number;
  seg: number;
  /** +1 forward along vessel, -1 reverse */
  dir: number;
}

export function toLocal(path: Path, s: number): PathLocal {
  const x = Math.max(0, Math.min(path.length, s));
  let k = path.segs.length - 1;
  for (let i = 0; i < path.segs.length; i++) {
    if (x <= path.starts[i] + Math.abs(path.segs[i].to - path.segs[i].from) + 1e-9) {
      k = i;
      break;
    }
  }
  const seg = path.segs[k];
  const dir = seg.to >= seg.from ? 1 : -1;
  return { vessel: seg.vessel, s: seg.from + dir * (x - path.starts[k]), seg: k, dir };
}

export interface PathPoint {
  p: Vec3;
  /** Tangent in the direction of travel. */
  t: Vec3;
  vessel: VesselId;
  local: number;
  /** 1 when this point rides on the beating heart. */
  beats: number;
}

export function pointOnVessel(anat: Anatomy, vessel: VesselId, s: number): { p: Vec3; t: Vec3 } {
  const v = anat.vessels[vessel];
  const n = v.pts.length - 1;
  const x = Math.max(0, Math.min(n, s / v.ds));
  const i = Math.min(n - 1, Math.floor(x));
  const u = x - i;
  return { p: lerp3(v.pts[i], v.pts[i + 1], u), t: norm(lerp3(v.tangents[i], v.tangents[i + 1], u)) };
}

export function pathPoint(anat: Anatomy, path: Path, s: number): PathPoint {
  const loc = toLocal(path, s);
  const { p, t } = pointOnVessel(anat, loc.vessel, loc.s);
  const beats = anat.vessels[loc.vessel].kind === 'coronary' ? 1 : 0;
  return { p, t: loc.dir > 0 ? t : scale(t, -1), vessel: loc.vessel, local: loc.s, beats };
}

/** Sample a path between a and b (inclusive) at n points. */
export function samplePath(anat: Anatomy, path: Path, a: number, b: number, n: number): PathPoint[] {
  const out: PathPoint[] = [];
  for (let i = 0; i < n; i++) out.push(pathPoint(anat, path, a + ((b - a) * i) / Math.max(1, n - 1)));
  return out;
}

/** Portion of path range [a,b] lying on `vessel`, returned as a sorted local range, or null. */
export function rangeOnVessel(path: Path, a: number, b: number, vessel: VesselId): [number, number] | null {
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  for (let i = 0; i < path.segs.length; i++) {
    const seg = path.segs[i];
    if (seg.vessel !== vessel) continue;
    const s0 = path.starts[i];
    const s1 = s0 + Math.abs(seg.to - seg.from);
    const x0 = Math.max(lo, s0);
    const x1 = Math.min(hi, s1);
    if (x1 <= x0) continue;
    const dir = seg.to >= seg.from ? 1 : -1;
    const l0 = seg.from + dir * (x0 - s0);
    const l1 = seg.from + dir * (x1 - s0);
    return [Math.min(l0, l1), Math.max(l0, l1)];
  }
  return null;
}

/** All vessel pieces covered by path range [a,b]. */
export function rangesOnPath(path: Path, a: number, b: number): { vessel: VesselId; s0: number; s1: number }[] {
  const out: { vessel: VesselId; s0: number; s1: number }[] = [];
  for (const seg of path.segs) {
    const r = rangeOnVessel(path, a, b, seg.vessel);
    if (r && !out.some((o) => o.vessel === seg.vessel)) out.push({ vessel: seg.vessel, s0: r[0], s1: r[1] });
  }
  return out;
}

/** Path arc length of a local position on a vessel, if the path visits it. */
export function pathPosOf(path: Path, vessel: VesselId, local: number): number | null {
  for (let i = 0; i < path.segs.length; i++) {
    const seg = path.segs[i];
    if (seg.vessel !== vessel) continue;
    const lo = Math.min(seg.from, seg.to);
    const hi = Math.max(seg.from, seg.to);
    if (local < lo - 1e-6 || local > hi + 1e-6) continue;
    return path.starts[i] + Math.abs(local - seg.from);
  }
  return null;
}

// ------------------------------------------------------------------ concrete routes

/** Wrist -> brachiocephalic -> down the ascending aorta to the guide park position. */
export function accessPath(anat: Anatomy, parkHeight: number): Path {
  const V = anat.vessels;
  return makePath([
    { vessel: 'radial', from: 0, to: V.radial.length },
    { vessel: 'brachial', from: 0, to: V.brachial.length },
    { vessel: 'axillary', from: 0, to: V.axillary.length },
    { vessel: 'subclavian', from: 0, to: V.subclavian.length },
    { vessel: 'brachiocephalic', from: V.brachiocephalic.length, to: 0 },
    { vessel: 'aorta', from: anat.bcOriginS, to: parkHeight },
  ]);
}

/**
 * Coronary path for a chain of vessels, e.g. ['LM','LAD','D1'].
 * Each vessel is followed from its origin to where the next one branches (last one to its end).
 */
export function coronaryPath(anat: Anatomy, chain: VesselId[]): Path {
  const segs: PathSeg[] = [];
  for (let i = 0; i < chain.length; i++) {
    const v = anat.vessels[chain[i]];
    const next = chain[i + 1];
    const end = next ? anat.vessels[next].parentS ?? v.length : v.length;
    segs.push({ vessel: v.id, from: 0, to: Math.min(end, v.length) });
  }
  return makePath(segs);
}

/** Branch points on the last vessel of the chain, after local position `fromLocal`, sorted by distance. */
export function branchesAhead(anat: Anatomy, chain: VesselId[], fromLocal: number): BranchPoint[] {
  const last = chain[chain.length - 1];
  return anat.branches.filter((b) => b.parent === last && b.s > fromLocal - 1e-6).sort((a, b) => a.s - b.s);
}
