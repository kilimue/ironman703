import { describe, expect, it } from 'vitest';
import { buildAnatomy } from '../src/anatomy/vesselTree';
import { makeGuide, stepGuide, facingLeft } from '../src/physics/guide';
import { makeWire, stepWire, branchChoice, wireHint, type WireState } from '../src/physics/wire';
import { GUIDE, WIRE } from '../src/config/anatomy';
import { accessPath } from '../src/physics/route';
import { AORTA } from '../src/config/anatomy';
import { makeRng } from '../src/math/vec3';

const anat = buildAnatomy();
const L = accessPath(anat, AORTA.guideParkHeight).length;
const gctx = (wireOut = false) => ({ dt: 1 / 60, routeLength: L, root: anat.root, wireOut });

describe('guide catheter', () => {
  it('advances from the wrist and stops at the aortic root', () => {
    let g = makeGuide(anat.root);
    for (let i = 0; i < 60 * 20; i++) g = stepGuide(g, { delta: 1, dRot: 0 }, gctx()).guide;
    expect(g.s).toBeCloseTo(L, 6);
    expect(g.engaged).toBe(false);
  });
  it('engages only when facing the left cusp and advanced gently', () => {
    let g = { ...makeGuide(anat.root), s: L };
    expect(facingLeft(g, anat.root)).toBe(false);
    // not facing: no engagement
    for (let i = 0; i < 120; i++) g = stepGuide(g, { delta: 0.2, dRot: 0 }, gctx()).guide;
    expect(g.engaged).toBe(false);
    // face the left cusp
    g = { ...g, rot: anat.root.leftCusp + 10 };
    // too fast -> no engagement
    const fast = stepGuide(g, { delta: 2, dRot: 0 }, gctx());
    expect(fast.guide.engaged).toBe(false);
    expect(fast.msgs.some((m) => m.key === 'seat-fast')).toBe(true);
    // gentle
    let engaged = false;
    for (let i = 0; i < 120 && !engaged; i++) {
      const r = stepGuide(g, { delta: GUIDE.fineSpeed / 60, dRot: 0 }, gctx());
      g = r.guide;
      engaged = g.engaged;
    }
    expect(engaged).toBe(true);
  });
  it('gives a specific message when facing the right cusp', () => {
    const g = { ...makeGuide(anat.root), s: L, rot: anat.root.rightCusp };
    const r = stepGuide(g, { delta: 0.2, dRot: 0 }, gctx());
    expect(r.msgs.some((m) => m.key === 'right-cusp')).toBe(true);
    expect(r.guide.engaged).toBe(false);
  });
  it('pops out with more than 40° of torque', () => {
    let g = { ...makeGuide(anat.root), s: L, rot: anat.root.leftCusp, engaged: true, engagedRot: anat.root.leftCusp };
    g = stepGuide(g, { delta: 0, dRot: 30 }, gctx()).guide;
    expect(g.engaged).toBe(true);
    const r = stepGuide(g, { delta: 0, dRot: 15 }, gctx());
    expect(r.guide.engaged).toBe(false);
    expect(r.poppedOut).toBe(true);
  });
  it('cannot move while the wire is out', () => {
    const g = { ...makeGuide(anat.root), s: 100 };
    const r = stepGuide(g, { delta: 5, dRot: 10 }, gctx(true));
    expect(r.guide.s).toBe(100);
    expect(r.guide.rot).toBe(g.rot);
  });
});

const wctx = { dt: 1 / 60, anat, cathOut: false, guideEngaged: true, rng: makeRng(3) };
function advanceWire(w: WireState, speed: number, seconds: number, rotate = 0, ctx = wctx) {
  let wire = w;
  const msgs: string[] = [];
  let dissection = false;
  for (let i = 0; i < Math.round(seconds * 60); i++) {
    const r = stepWire(wire, { delta: speed / 60, dRot: rotate / 60, fine: false }, ctx);
    wire = r.wire;
    msgs.push(...r.ev.msgs.map((m) => m.key ?? ''));
    if (r.ev.dissection) dissection = true;
  }
  return { wire, msgs, dissection };
}

describe('guidewire steering', () => {
  const lad = anat.branches.find((b) => b.child === 'LAD')!;
  const lcx = anat.branches.find((b) => b.child === 'LCX')!;
  const d1 = anat.branches.find((b) => b.child === 'D1')!;
  it('tip rotation picks LAD vs LCx at the LM bifurcation', () => {
    const toLAD = advanceWire({ ...makeWire(), pos: 0, rot: lad.angle }, 10, 3);
    expect(toLAD.wire.chain).toEqual(['LM', 'LAD']);
    const toLCX = advanceWire({ ...makeWire(), pos: 0, rot: lcx.angle }, 10, 3);
    expect(toLCX.wire.chain).toEqual(['LM', 'LCX']);
    expect(branchChoice(anat, 'LM', anat.vessels.LM.length, lad.angle + 20)).toBe('LAD');
  });
  it('diagonals are captured within ±50°', () => {
    expect(branchChoice(anat, 'LAD', d1.s, d1.angle + 45)).toBe('D1');
    expect(branchChoice(anat, 'LAD', d1.s, d1.angle + 60)).toBe(null);
    const w = advanceWire({ ...makeWire(), pos: 15, chain: ['LM', 'LAD'], rot: d1.angle }, 10, 3);
    expect(w.wire.chain).toEqual(['LM', 'LAD', 'D1']);
    // retracting out of the diagonal pops it from the chain
    const back = advanceWire(w.wire, -10, 2);
    expect(back.wire.chain).toEqual(['LM', 'LAD']);
  });
  it('shows an upcoming-branch hint', () => {
    const h = wireHint(anat, { ...makeWire(), pos: anat.vessels.LM.length + d1.s - 6, chain: ['LM', 'LAD'], rot: d1.angle });
    expect(h.next?.name).toMatch(/diagonal/i);
    expect(h.next?.enter).toBe(true);
  });
  const atLesion = (): WireState => ({ ...makeWire(), pos: anat.vessels.LM.length + anat.lesion.s0 - 1, chain: ['LM', 'LAD'], rot: lad.angle });
  it('crossing gently builds no dissection risk', () => {
    const r = advanceWire(atLesion(), WIRE.fineSpeed, 6);
    expect(r.wire.everCrossed).toBe(true);
    expect(r.wire.maxRisk).toBe(0);
    expect(r.dissection).toBe(false);
    expect(r.msgs).not.toContain('buckle');
  });
  it('forcing the lesion buckles the wire and builds dissection risk', () => {
    const r = advanceWire(atLesion(), 25, 4);
    expect(r.msgs).toContain('buckle');
    expect(r.wire.maxRisk).toBeGreaterThan(0.2);
    expect(r.wire.forcedTime).toBeGreaterThan(0.3);
  });
  it('a forced crossing can dissect (random roll against the risk)', () => {
    let any = false;
    for (let seed = 1; seed < 12 && !any; seed++) {
      const r = advanceWire(atLesion(), 25, 6, 0, { ...wctx, rng: makeRng(seed) });
      expect(r.wire.everCrossed).toBe(true);
      any = r.dissection;
    }
    expect(any).toBe(true);
  });
  it('torque raises the safe crossing speed', () => {
    const plain = advanceWire(atLesion(), 10, 2, 0);
    const torqued = advanceWire(atLesion(), 10, 2, 40);
    expect(plain.wire.maxRisk).toBeGreaterThan(0);
    expect(torqued.wire.maxRisk).toBe(0);
  });
  it('warns at the vessel end and cannot be retracted with a balloon on it', () => {
    const lcxWire = { ...makeWire(), pos: anat.vessels.LM.length + anat.vessels.LCX.length - 6, chain: ['LM', 'LCX'] as WireState['chain'] };
    const r = advanceWire(lcxWire, 10, 1.5);
    expect(r.msgs.some((m) => m === 'wire-near-end' || m === 'wire-end')).toBe(true);
    const blocked = stepWire(lcxWire, { delta: -1, dRot: 0, fine: false }, { ...wctx, cathOut: true });
    expect(blocked.wire.pos).toBe(lcxWire.pos);
  });
});
