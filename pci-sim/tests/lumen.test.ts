import { describe, expect, it } from 'vitest';
import { stenosisAt, lesionRange, computeLumen, measureQCA, coverageMargins, treatmentWeight } from '../src/anatomy/lumen';
import { LESION } from '../src/config/anatomy';
import { buildAnatomy } from '../src/anatomy/vesselTree';

describe('stenosis profile', () => {
  it('is 90% on the plateau and 0 outside the 14 mm lesion', () => {
    expect(stenosisAt(LESION.center)).toBeCloseTo(0.9, 6);
    expect(stenosisAt(LESION.center + LESION.plateau / 2 - 0.01)).toBeCloseTo(0.9, 6);
    const [a, b] = lesionRange();
    expect(b - a).toBeCloseTo(14);
    expect(stenosisAt(a - 0.1)).toBe(0);
    expect(stenosisAt(b + 0.1)).toBe(0);
    expect(stenosisAt(a)).toBeCloseTo(0, 6);
  });
  it('tapers smoothly and symmetrically (cosine)', () => {
    let prev = 1;
    for (let d = LESION.plateau / 2; d <= LESION.length / 2; d += 0.25) {
      const v = stenosisAt(LESION.center + d);
      expect(v).toBeLessThanOrEqual(prev + 1e-12);
      expect(stenosisAt(LESION.center - d)).toBeCloseTo(v, 9);
      prev = v;
    }
    // half-way down the taper is half the stenosis
    const mid = LESION.plateau / 2 + (LESION.length - LESION.plateau) / 4;
    expect(stenosisAt(LESION.center + mid)).toBeCloseTo(0.45, 6);
  });
  it('LAD reference diameter at the lesion is 2.9-3.0 mm and the MLD is 10% of it', () => {
    const a = buildAnatomy();
    const lad = a.vessels.LAD;
    const i = Math.round(LESION.center / lad.ds);
    expect(lad.refD[i]).toBeGreaterThanOrEqual(2.9);
    expect(lad.refD[i]).toBeLessThanOrEqual(3.0);
    expect(lad.baseD[i] / lad.refD[i]).toBeCloseTo(0.1, 3);
    // D1 proximal and D2 distal to the lesion
    expect(a.vessels.D1.parentS!).toBeLessThan(a.lesion.s0);
    expect(a.vessels.D2.parentS!).toBeGreaterThan(a.lesion.s1);
  });
});

describe('lumen treatment', () => {
  const ds = 0.5;
  const base = Array.from({ length: 100 }, () => 1);
  it('holds the treated diameter inside the range and tapers outside', () => {
    const out = computeLumen(base, ds, [{ s0: 20, s1: 30, diameter: 3 }]);
    expect(out[50]).toBe(3);
    expect(out[40]).toBe(3);
    expect(out[60]).toBe(3);
    expect(out[30]).toBe(1);
    expect(out[39]).toBeGreaterThan(1);
    expect(out[39]).toBeLessThan(3);
    expect(treatmentWeight(31, 20, 30)).toBeGreaterThan(0);
  });
  it('never narrows the lumen', () => {
    const wide = base.map(() => 4);
    const out = computeLumen(wide, ds, [{ s0: 20, s1: 30, diameter: 3 }]);
    expect(Math.min(...out)).toBe(4);
  });
});

describe('QCA', () => {
  it('measures reference, MLD, %DS and lesion length of the native lesion', () => {
    const a = buildAnatomy();
    const lad = a.vessels.LAD;
    const q = measureQCA(lad.baseD, lad.refD, lad.ds, a.lesion.s0 - 6, a.lesion.s1 + 6);
    expect(q.ds).toBeCloseTo(0.9, 2);
    expect(q.referenceD).toBeGreaterThan(2.9);
    expect(q.mld).toBeCloseTo(q.referenceD * 0.1, 2);
    expect(q.lesionLength).toBeGreaterThan(12);
    expect(q.lesionLength).toBeLessThanOrEqual(14.5);
  });
});

describe('coverage margins', () => {
  it('reports positive margins when the device covers the lesion', () => {
    const m = coverageMargins([33, 51], [35, 49]);
    expect(m.prox).toBeCloseTo(2);
    expect(m.dist).toBeCloseTo(2);
    expect(m.covered).toBe(true);
  });
  it('flags a geographic miss with negative margins', () => {
    const m = coverageMargins([36, 48], [35, 49]);
    expect(m.prox).toBeCloseTo(-1);
    expect(m.dist).toBeCloseTo(-1);
    expect(m.covered).toBe(false);
    expect(coverageMargins([30, 42], [35, 49]).covered).toBe(false);
  });
});
