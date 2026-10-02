import { describe, expect, it } from 'vitest';
import { makePhysiology, stepPhysiology, actAt, type PhysState } from '../src/physics/physiology';
import { ecgV2 } from '../src/physics/ecg';
import { PHYSIOLOGY } from '../src/config/anatomy';
import { makeRng } from '../src/math/vec3';

function sim(p: PhysState, seconds: number, occluded: boolean, flow = occluded ? 0 : 1, t0 = 0) {
  const rng = makeRng(1);
  let t = t0;
  let s = p;
  const msgs: string[] = [];
  for (let i = 0; i < seconds * 60; i++) {
    t += 1 / 60;
    const r = stepPhysiology(s, { t, dt: 1 / 60, occluded, flow }, rng);
    s = r.phys;
    msgs.push(...r.msgs.map((m) => m.key ?? ''));
  }
  return { s, t, msgs };
}

describe('physiology', () => {
  it('ST elevation rises with occlusion (~20 s to full) and recovers after reperfusion', () => {
    const a = sim(makePhysiology(), 10, true);
    expect(a.s.st).toBeGreaterThan(1.5);
    expect(a.s.st).toBeLessThan(PHYSIOLOGY.maxSTmm);
    const b = sim(a.s, 12, true, 0, a.t);
    expect(b.s.st).toBeCloseTo(PHYSIOLOGY.maxSTmm, 1);
    expect(b.s.hr).toBeGreaterThan(PHYSIOLOGY.baseHR + 10);
    expect(a.msgs).toContain('pain');
    const c = sim(b.s, 8, false, 1, b.t);
    expect(c.s.st).toBeLessThan(b.s.st * 0.5);
    const d = sim(c.s, 30, false, 1, c.t);
    expect(d.s.st).toBeLessThan(0.1);
  });
  it('becomes hypotensive after 40 s and unstable after 60 s of occlusion', () => {
    const a = sim(makePhysiology(), 45, true);
    expect(a.s.hypotension).toBe(true);
    expect(a.s.unstable).toBe(false);
    const b = sim(a.s, 20, true, 0, a.t);
    expect(b.s.unstable).toBe(true);
    expect(b.s.sys).toBeLessThan(PHYSIOLOGY.baseSys - 30);
    expect(b.msgs).toContain('unstable');
    expect(b.s.pvcs + a.s.pvcs).toBeGreaterThan(0);
    const c = sim(b.s, 2, false, 1, b.t);
    expect(c.s.unstable).toBe(false);
  });
  it('the untreated lesion (TIMI 2 flow) causes no ischaemia at rest', () => {
    const a = sim(makePhysiology(), 30, false, 0.38);
    expect(a.s.ischaemia).toBe(0);
  });
  it('ACT rises from 128 s to ~285 s after heparin', () => {
    expect(actAt(100, null)).toBe(PHYSIOLOGY.actBaseline);
    expect(actAt(10, 10)).toBe(PHYSIOLOGY.actBaseline);
    expect(actAt(10 + 60, 10)).toBeGreaterThan(280);
    expect(actAt(10 + 60, 10)).toBeLessThanOrEqual(285);
  });
});

describe('ECG V2', () => {
  it('shows ST elevation proportional to the ST level', () => {
    const t = 0.3;
    const base = ecgV2(t, 0.88, 0, false);
    expect(ecgV2(t, 0.88, 3, false) - base).toBeGreaterThan(2.5);
    // isoelectric baseline late in diastole
    expect(Math.abs(ecgV2(0.8, 0.88, 3, false))).toBeLessThan(0.2);
  });
  it('has a deep S wave (rS in V2) and a wide PVC morphology', () => {
    let minQRS = 0;
    let maxQRS = 0;
    for (let t = 0.14; t < 0.23; t += 0.002) {
      minQRS = Math.min(minQRS, ecgV2(t, 0.88, 0, false));
      maxQRS = Math.max(maxQRS, ecgV2(t, 0.88, 0, false));
    }
    expect(minQRS).toBeLessThan(-6);
    expect(maxQRS).toBeGreaterThan(2);
    // PVC is wide: large deflections spread over >= 130 ms
    expect(Math.abs(ecgV2(0.06, 0.88, 0, true))).toBeGreaterThan(3);
    expect(Math.abs(ecgV2(0.19, 0.88, 0, true))).toBeGreaterThan(3);
  });
});
