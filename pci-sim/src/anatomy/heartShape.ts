/**
 * Procedural heart: a deformed ellipsoid in a tilted heart frame.
 * Surface parameters: t in [tMin, 1] along base->apex, theta (deg) around the long axis
 * (0 = anterior, +90 = lateral LV wall, -90 = right ventricle / acute margin).
 */
import { HEART } from '../config/anatomy';
import { type Vec3, type Mat4, add, addScaled, cross, norm, orthoNorm, sub, DEG, smoothstep, wrapDeg } from '../math/vec3';

export interface HeartFrame {
  center: Vec3;
  /** base -> apex */
  axis: Vec3;
  /** anterior, perpendicular to axis */
  ant: Vec3;
  /** lateral (patient left / LV free wall), perpendicular to both */
  lat: Vec3;
  base: Vec3;
  apex: Vec3;
  length: number;
}

export function heartFrame(): HeartFrame {
  const axis = norm(HEART.axis);
  const ant = orthoNorm([0, 0, 1], axis);
  const lat = norm(cross(ant, axis));
  const base = addScaled(HEART.center, axis, -HEART.length * 0.42);
  const apex = addScaled(base, axis, HEART.length);
  return { center: HEART.center, axis, ant, lat, base, apex, length: HEART.length };
}

/** Radius fraction of the ventricular mass at parameter t. */
export function heartProfile(t: number): number {
  const m = HEART.maxAt;
  if (t >= m) {
    const x = Math.min(1, (t - m) / (1 - m));
    return Math.pow(Math.max(0, 1 - x * x), 0.72);
  }
  const x = Math.min(1, (m - t) / (m - HEART.tMin));
  return Math.pow(Math.max(0, 1 - x * x), 0.5);
}

/** Radial scale for angle theta (deg) at t: ellipse + right-ventricular bulge. */
function radialAt(t: number, thetaDeg: number): { rAnt: number; rLat: number } {
  const r = HEART.radius * heartProfile(t);
  const d = wrapDeg(thetaDeg - HEART.rvBulgeAngle) / HEART.rvBulgeWidth;
  const bulge = 1 + HEART.rvBulge * Math.exp(-d * d) * smoothstep(-0.05, 0.12, t) * (1 - smoothstep(0.6, 0.9, t));
  return { rAnt: r * HEART.apRatio * bulge, rLat: r * bulge };
}

/** Surface point at (t, theta) offset outward by `offset` mm along the surface normal. */
export function heartSurface(f: HeartFrame, t: number, thetaDeg: number, offset = 0): Vec3 {
  const p = rawSurface(f, t, thetaDeg);
  if (offset === 0) return p;
  return addScaled(p, heartNormal(f, t, thetaDeg), offset);
}

function rawSurface(f: HeartFrame, t: number, thetaDeg: number): Vec3 {
  const { rAnt, rLat } = radialAt(t, thetaDeg);
  const th = thetaDeg * DEG;
  const c = addScaled(f.base, f.axis, t * f.length);
  return add(c, add(addScaled([0, 0, 0], f.ant, Math.cos(th) * rAnt), addScaled([0, 0, 0], f.lat, Math.sin(th) * rLat)));
}

export function heartNormal(f: HeartFrame, t: number, thetaDeg: number): Vec3 {
  const e = 0.004;
  const dt = sub(rawSurface(f, Math.min(1, t + e), thetaDeg), rawSurface(f, Math.max(HEART.tMin, t - e), thetaDeg));
  const dth = sub(rawSurface(f, t, thetaDeg + 0.5), rawSurface(f, t, thetaDeg - 0.5));
  let n = norm(cross(dth, dt));
  // make sure it points outward
  const c = addScaled(f.base, f.axis, t * f.length);
  const out = sub(rawSurface(f, t, thetaDeg), c);
  if (n[0] * out[0] + n[1] * out[1] + n[2] * out[2] < 0) n = [-n[0], -n[1], -n[2]];
  if (!isFinite(n[0])) n = norm(out);
  return n;
}

/** Epicardial fat weight (0..1) used for vertex colours: AV groove + both interventricular grooves. */
export function fatWeight(t: number, thetaDeg: number): number {
  const av = Math.exp(-Math.pow((t - HEART.avGrooveT) / 0.07, 2));
  const a = wrapDeg(thetaDeg - HEART.antIVGroove) / 14;
  const p = wrapDeg(thetaDeg - HEART.postIVGroove) / 16;
  const iv = (Math.exp(-a * a) + Math.exp(-p * p)) * (1 - smoothstep(0.75, 1.0, t) * 0.6);
  const baseFat = t < 0 ? 0.35 : 0;
  return Math.min(1, av + iv * 0.85 + baseFat);
}

/** Systolic contraction curve (0 = diastole, 1 = peak systole) for a beat phase in [0,1). */
export function contraction(phase: number): number {
  const sf = HEART.systoleFraction;
  const peak = sf * 0.62;
  if (phase < peak) return smoothstep(0, peak, phase);
  if (phase < sf) return 1 - smoothstep(peak, sf, phase) * 0.85;
  return 0.15 * (1 - smoothstep(sf, sf + 0.12, phase));
}

/**
 * Beat transform (column-major 4x4): non-uniform scale in the heart frame about a pivot near the
 * aortic root / base so the coronary ostia barely move while the apex moves most.
 */
export function beatMatrix(f: HeartFrame, c: number, pivot: Vec3): Mat4 {
  const sr = 1 - (1 - HEART.systolicRadialScale) * c;
  const sa = 1 - (1 - HEART.systolicAxialScale) * c;
  // M = T(p) * R * S * R^T * T(-p), R columns = (ant, axis, lat)
  const R = [f.ant, f.axis, f.lat];
  const S = [sr, sa, sr];
  const m: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      let acc = 0;
      for (let k = 0; k < 3; k++) acc += R[k][i] * S[k] * R[k][j];
      m[i][j] = acc;
    }
  // translation: p - M p
  const tx = pivot[0] - (m[0][0] * pivot[0] + m[0][1] * pivot[1] + m[0][2] * pivot[2]);
  const ty = pivot[1] - (m[1][0] * pivot[0] + m[1][1] * pivot[1] + m[1][2] * pivot[2]);
  const tz = pivot[2] - (m[2][0] * pivot[0] + m[2][1] * pivot[1] + m[2][2] * pivot[2]);
  return [m[0][0], m[1][0], m[2][0], 0, m[0][1], m[1][1], m[2][1], 0, m[0][2], m[1][2], m[2][2], 0, tx, ty, tz, 1];
}
