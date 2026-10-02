/** Lumen profiles: stenosis shape, treatments (balloon / stent), QCA. Pure functions. */
import { LESION, TREATMENT } from '../config/anatomy';

export interface LesionSpec {
  center: number;
  length: number;
  stenosis: number;
  plateau: number;
}

/** Diameter stenosis (0..1) at arc length s: cosine-tapered with a short central plateau. */
export function stenosisAt(s: number, l: LesionSpec = LESION): number {
  const half = l.length / 2;
  const d = Math.abs(s - l.center);
  if (d >= half) return 0;
  const ph = l.plateau / 2;
  if (d <= ph) return l.stenosis;
  const taper = half - ph;
  const u = (d - ph) / taper; // 0 at plateau edge, 1 at lesion end
  return l.stenosis * 0.5 * (1 + Math.cos(Math.PI * u));
}

export function lesionRange(l: LesionSpec = LESION): [number, number] {
  return [l.center - l.length / 2, l.center + l.length / 2];
}

/** Base lumen diameters (with stenosis) from a reference profile. */
export function stenosedProfile(ref: number[], ds: number, l: LesionSpec | null): number[] {
  return ref.map((r, i) => (l ? r * (1 - stenosisAt(i * ds, l)) : r));
}

export interface LumenTreatment {
  s0: number;
  s1: number;
  /** Diameter held open inside [s0, s1]. */
  diameter: number;
}

/** Weight 1 inside [s0,s1], smooth cosine fall-off over `taper` mm outside. */
export function treatmentWeight(s: number, s0: number, s1: number, taper = TREATMENT.taper): number {
  if (s >= s0 && s <= s1) return 1;
  const d = s < s0 ? s0 - s : s - s1;
  if (d >= taper) return 0;
  return 0.5 * (1 + Math.cos((Math.PI * d) / taper));
}

/** Apply treatments: lumen = max(base, each treatment's tapered target). */
export function computeLumen(base: number[], ds: number, treatments: LumenTreatment[]): number[] {
  const out = base.slice();
  for (const tr of treatments) {
    const i0 = Math.max(0, Math.floor((tr.s0 - TREATMENT.taper) / ds));
    const i1 = Math.min(out.length - 1, Math.ceil((tr.s1 + TREATMENT.taper) / ds));
    for (let i = i0; i <= i1; i++) {
      const w = treatmentWeight(i * ds, tr.s0, tr.s1);
      if (w <= 0) continue;
      // taper blends from the existing lumen towards the treated diameter
      const target = out[i] + (Math.max(out[i], tr.diameter) - out[i]) * w;
      if (target > out[i]) out[i] = target;
    }
  }
  return out;
}

export interface QCA {
  referenceD: number;
  mld: number;
  /** Diameter stenosis 0..1 */
  ds: number;
  lesionLength: number;
  mldAt: number;
}

/**
 * Quantitative coronary angiography around a segment: reference = interpolated healthy reference
 * diameter at the MLD, MLD = minimal lumen diameter, lesion length = shoulder-to-shoulder extent
 * where the lumen is >1% narrower than reference.
 */
export function measureQCA(lumen: number[], ref: number[], ds: number, from: number, to: number): QCA {
  const i0 = Math.max(0, Math.floor(from / ds));
  const i1 = Math.min(lumen.length - 1, Math.ceil(to / ds));
  let mi = i0;
  for (let i = i0; i <= i1; i++) if (lumen[i] < lumen[mi]) mi = i;
  const referenceD = ref[mi];
  const mld = lumen[mi];
  const dsFrac = Math.max(0, 1 - mld / referenceD);
  let a = mi;
  let b = mi;
  const narrowed = (i: number) => lumen[i] < ref[i] * 0.99;
  if (narrowed(mi)) {
    while (a > i0 && narrowed(a - 1)) a--;
    while (b < i1 && narrowed(b + 1)) b++;
  }
  const lesionLength = narrowed(mi) ? (b - a + 1) * ds : 0;
  return { referenceD, mld, ds: dsFrac, lesionLength, mldAt: mi * ds };
}

/** Maximum diameter stenosis (0..1) over a range. */
export function maxStenosis(lumen: number[], ref: number[], ds: number, from = 0, to = Infinity): number {
  let worst = 0;
  const i0 = Math.max(0, Math.floor(from / ds));
  const i1 = Math.min(lumen.length - 1, Math.ceil(to / ds));
  for (let i = i0; i <= i1; i++) worst = Math.max(worst, 1 - lumen[i] / ref[i]);
  return Math.max(0, worst);
}

/**
 * Coverage margins of a device range over a lesion range (both in the same vessel coordinates).
 * Positive margins = device extends beyond the lesion edge; negative = part of the lesion uncovered.
 */
export function coverageMargins(device: [number, number], lesion: [number, number]): { prox: number; dist: number; covered: boolean } {
  const prox = lesion[0] - device[0];
  const dist = device[1] - lesion[1];
  return { prox, dist, covered: prox >= 0 && dist >= 0 };
}
