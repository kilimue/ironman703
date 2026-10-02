import { describe, expect, it } from 'vitest';
import { balloonDiameter, makeCath, stepCath, setSize, deflate, specOf, workingRange, type CathState } from '../src/physics/balloon';
import { BALLOON, STENT } from '../src/config/anatomy';

const ctx = (over: Partial<Parameters<typeof stepCath>[2]> = {}) => ({ t: 0, dt: 1 / 60, wireTip: 120, wireOut: true, otherOut: false, ...over });

function run(c: CathState, inp: Partial<Parameters<typeof stepCath>[1]>, seconds: number, t0 = 0) {
  let cath = c;
  let t = t0;
  const evs = [];
  for (let i = 0; i < Math.round(seconds * 60); i++) {
    t += 1 / 60;
    const r = stepCath(cath, { delta: 0, inflate: false, fine: false, ...inp }, ctx({ t }));
    cath = r.cath;
    evs.push(r.ev);
  }
  return { cath, evs, t };
}

describe('pressure-diameter', () => {
  it('balloon: nominal at 8 atm, +1.5%/atm, smaller while unfolding', () => {
    const sp = specOf('balloon');
    expect(balloonDiameter(2.5, 8, sp)).toBeCloseTo(2.5, 9);
    expect(balloonDiameter(2.5, 12, sp)).toBeCloseTo(2.5 * (1 + 0.015 * 4), 9);
    expect(balloonDiameter(3.0, 4, sp)).toBeCloseTo(3.0 * (1 - 0.015 * 4), 9);
    expect(balloonDiameter(2.5, 1, sp)).toBeLessThan(balloonDiameter(2.5, 2, sp));
    expect(balloonDiameter(2.5, 0, sp)).toBe(BALLOON.profile);
    // monotonic
    let prev = 0;
    for (let p = 0; p <= 18; p += 0.5) {
      const d = balloonDiameter(3, p, sp);
      expect(d).toBeGreaterThanOrEqual(prev);
      prev = d;
    }
  });
  it('stent: nominal at 10 atm, +1.2%/atm', () => {
    const sp = specOf('stent');
    expect(balloonDiameter(3.0, 10, sp)).toBeCloseTo(3.0, 9);
    expect(balloonDiameter(3.0, 12, sp)).toBeCloseTo(3.0 * 1.024, 9);
    expect(sp.rbp).toBe(16);
    expect(STENT.deployPressure).toBe(6);
  });
});

describe('balloon catheter', () => {
  it('sizes can only be changed in the guide', () => {
    const c = makeCath('balloon');
    expect(setSize(c, 3.0, 20).cath.d).toBe(3.0);
    const out = { ...c, pos: 30 };
    const r = setSize(out, 3.0, 20);
    expect(r.cath.d).toBe(c.d);
    expect(r.msg?.level).toBe('warn');
  });
  it('advances over the wire but stays behind the tip', () => {
    const { cath } = run(makeCath('balloon'), { delta: 1 }, 3);
    expect(cath.pos).toBeLessThanOrEqual(119);
    expect(cath.pos).toBeGreaterThan(100);
  });
  it('cannot leave the guide without a wire', () => {
    const r = stepCath(makeCath('balloon'), { delta: 30, inflate: false, fine: false }, ctx({ wireOut: false }));
    expect(r.cath.pos).toBeLessThanOrEqual(0);
  });
  it('does not move while inflated and records the inflation', () => {
    let c: CathState = { ...makeCath('balloon'), pos: 50 };
    const a = run(c, { inflate: true }, 3);
    c = a.cath;
    expect(c.pressure).toBeCloseTo(9, 0);
    const before = c.pos;
    const m = stepCath(c, { delta: 1, inflate: false, fine: false }, ctx({ t: a.t }));
    expect(m.cath.pos).toBe(before);
    expect(m.ev.msgs.some((x) => /Deflate/.test(x.text))).toBe(true);
    c = deflate(m.cath);
    const b = run(c, {}, 3, a.t);
    const rec = b.evs.find((e) => e.record)?.record;
    expect(rec).toBeDefined();
    expect(rec!.maxPressure).toBeGreaterThan(8.5);
    expect(rec!.duration).toBeGreaterThan(2.5);
    expect(rec!.range[1] - rec!.range[0]).toBe(c.l);
    expect(b.cath.pressure).toBe(0);
  });
  it('warns above RBP and ruptures at RBP + 4', () => {
    const c: CathState = { ...makeCath('balloon'), pos: 50 };
    const a = run(c, { inflate: true }, 6.5);
    expect(a.evs.some((e) => e.msgs.some((m) => m.key === 'rbp'))).toBe(true);
    expect(a.evs.some((e) => e.ruptured)).toBe(true);
    expect(a.cath.ruptured).toBe(true);
    expect(a.cath.pressure).toBe(0);
    // cannot re-inflate a ruptured balloon
    const b = run(a.cath, { inflate: true }, 1, a.t);
    expect(b.cath.pressure).toBe(0);
  });
  it('stent deploys at >= 6 atm and a fresh stent is loaded after withdrawal', () => {
    const c: CathState = { ...makeCath('stent'), pos: 50, everOut: true };
    const a = run(c, { inflate: true }, 2.2);
    expect(a.evs.some((e) => e.deployedNow)).toBe(true);
    expect(a.cath.deployed).toBe(true);
    const d = run(deflate(a.cath), {}, 2, a.t);
    const w = run(d.cath, { delta: -1 }, 1, d.t);
    expect(w.cath.pos).toBeLessThanOrEqual(0);
    expect(w.cath.deployed).toBe(false);
    expect(w.evs.some((e) => e.reloaded)).toBe(true);
  });
  it('working length sits proximal to the tip', () => {
    const c = { ...makeCath('balloon'), pos: 60, l: 15 };
    expect(workingRange(c)).toEqual([60 - BALLOON.tipLength - 15, 60 - BALLOON.tipLength]);
  });
});
