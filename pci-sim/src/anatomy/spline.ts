/** Centreline construction: centripetal Catmull-Rom splines resampled at uniform arc length. */
import { type Vec3, add, sub, scale, dist, norm, lerp3, cross, dot, anyPerp, orthoNorm } from '../math/vec3';

/** Evaluate a centripetal Catmull-Rom segment between p1 and p2. */
function crPoint(p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3, u: number): Vec3 {
  const alpha = 0.5;
  const t0 = 0;
  const t1 = t0 + Math.pow(Math.max(dist(p0, p1), 1e-6), alpha);
  const t2 = t1 + Math.pow(Math.max(dist(p1, p2), 1e-6), alpha);
  const t3 = t2 + Math.pow(Math.max(dist(p2, p3), 1e-6), alpha);
  const t = t1 + (t2 - t1) * u;
  const A1 = add(scale(p0, (t1 - t) / (t1 - t0)), scale(p1, (t - t0) / (t1 - t0)));
  const A2 = add(scale(p1, (t2 - t) / (t2 - t1)), scale(p2, (t - t1) / (t2 - t1)));
  const A3 = add(scale(p2, (t3 - t) / (t3 - t2)), scale(p3, (t - t2) / (t3 - t2)));
  const B1 = add(scale(A1, (t2 - t) / (t2 - t0)), scale(A2, (t - t0) / (t2 - t0)));
  const B2 = add(scale(A2, (t3 - t) / (t3 - t1)), scale(A3, (t - t1) / (t3 - t1)));
  return add(scale(B1, (t2 - t) / (t2 - t1)), scale(B2, (t - t1) / (t2 - t1)));
}

/** Dense polyline through control points (passes through every control point). */
export function catmullRom(ctrl: Vec3[], perSegment = 24): Vec3[] {
  if (ctrl.length < 2) return ctrl.slice();
  const pts: Vec3[] = [];
  const n = ctrl.length;
  const first = sub(scale(ctrl[0], 2), ctrl[1]);
  const last = sub(scale(ctrl[n - 1], 2), ctrl[n - 2]);
  for (let i = 0; i < n - 1; i++) {
    const p0 = i === 0 ? first : ctrl[i - 1];
    const p3 = i + 2 < n ? ctrl[i + 2] : last;
    for (let k = 0; k < perSegment; k++) pts.push(crPoint(p0, ctrl[i], ctrl[i + 1], p3, k / perSegment));
  }
  pts.push(ctrl[n - 1]);
  return pts;
}

export interface Centerline {
  pts: Vec3[];
  tangents: Vec3[];
  /** Uniform spacing between samples. */
  ds: number;
  length: number;
}

/** Resample a dense polyline at uniform arc-length spacing close to `ds`. */
export function resample(poly: Vec3[], ds: number): Centerline {
  const cum: number[] = [0];
  for (let i = 1; i < poly.length; i++) cum.push(cum[i - 1] + dist(poly[i - 1], poly[i]));
  const length = cum[cum.length - 1];
  const n = Math.max(1, Math.round(length / ds));
  const step = length / n;
  const pts: Vec3[] = [];
  let j = 0;
  for (let i = 0; i <= n; i++) {
    const s = i * step;
    while (j < cum.length - 2 && cum[j + 1] < s) j++;
    const segLen = cum[j + 1] - cum[j];
    const u = segLen > 1e-9 ? (s - cum[j]) / segLen : 0;
    pts.push(lerp3(poly[j], poly[j + 1], Math.min(1, Math.max(0, u))));
  }
  return { pts, tangents: tangentsOf(pts), ds: step, length };
}

export function tangentsOf(pts: Vec3[]): Vec3[] {
  const n = pts.length;
  return pts.map((_, i) => norm(sub(pts[Math.min(n - 1, i + 1)], pts[Math.max(0, i - 1)])));
}

export function buildCenterline(ctrl: Vec3[], ds: number): Centerline {
  return resample(catmullRom(ctrl), ds);
}

/** Sample a centreline at arc length s (clamped), linear between samples. */
export function sampleCenterline(c: Centerline, s: number): { p: Vec3; t: Vec3 } {
  const n = c.pts.length - 1;
  const x = Math.min(n, Math.max(0, s / c.ds));
  const i = Math.min(n - 1, Math.floor(x));
  const u = x - i;
  if (n === 0) return { p: c.pts[0], t: c.tangents[0] };
  return { p: lerp3(c.pts[i], c.pts[i + 1], u), t: norm(lerp3(c.tangents[i], c.tangents[i + 1], u)) };
}

/** Rotation-minimising frames (parallel transport) along a polyline. */
export function transportFrames(pts: Vec3[], tangents?: Vec3[], seedNormal?: Vec3): { n: Vec3[]; b: Vec3[]; t: Vec3[] } {
  const t = tangents ?? tangentsOf(pts);
  const N: Vec3[] = [];
  const B: Vec3[] = [];
  let n0 = seedNormal ? orthoNorm(seedNormal, t[0]) : anyPerp(t[0]);
  if (n0[0] === 0 && n0[1] === 0 && n0[2] === 0) n0 = anyPerp(t[0]);
  N.push(n0);
  B.push(norm(cross(t[0], n0)));
  for (let i = 1; i < pts.length; i++) {
    const prev = N[i - 1];
    let n = orthoNorm(prev, t[i]);
    if (dot(n, n) < 0.5) n = anyPerp(t[i]);
    N.push(n);
    B.push(norm(cross(t[i], n)));
  }
  return { n: N, b: B, t };
}
