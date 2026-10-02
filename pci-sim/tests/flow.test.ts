import { describe, expect, it } from 'vitest';
import { flowFactor, timiFromFlow, computeFlow, contrastAt, distalFlow, type FlowVessel } from '../src/physics/flow';
import { buildAnatomy, type VesselId } from '../src/anatomy/vesselTree';
import { FLOW } from '../src/config/anatomy';
import { createSim, stepSim, emptyInput, rebuildLumen } from '../src/procedure/sim';
import { DT, simAtDemoStep, STEP, runUntil, runFor } from './helpers';

describe('flow factor & TIMI', () => {
  it('is 1 below 60% and 0 at >= 98%', () => {
    expect(flowFactor(0)).toBe(1);
    expect(flowFactor(0.59)).toBe(1);
    expect(flowFactor(0.98)).toBe(0);
    expect(flowFactor(0.995)).toBe(0);
  });
  it('is monotonically non-increasing and falls steeply', () => {
    let prev = 1;
    for (let ds = 0; ds <= 1; ds += 0.01) {
      const f = flowFactor(ds);
      expect(f).toBeLessThanOrEqual(prev + 1e-12);
      prev = f;
    }
    expect(flowFactor(0.9) - flowFactor(0.95)).toBeGreaterThan(0.15);
  });
  it('TIMI grade thresholds and monotonicity', () => {
    expect(timiFromFlow(1)).toBe(3);
    expect(timiFromFlow(0.8)).toBe(3);
    expect(timiFromFlow(0.79)).toBe(2);
    expect(timiFromFlow(0.25)).toBe(2);
    expect(timiFromFlow(0.2)).toBe(1);
    expect(timiFromFlow(0.02)).toBe(0);
    let prev = 3;
    for (let ds = 0; ds <= 1; ds += 0.01) {
      const g = timiFromFlow(flowFactor(ds));
      expect(g).toBeLessThanOrEqual(prev);
      prev = g;
    }
  });
  it('a 90% stenosis gives TIMI 2', () => {
    expect(timiFromFlow(flowFactor(0.9))).toBe(2);
  });
});

function treeFrom(lumenOverride: Partial<Record<VesselId, number[]>> = {}): FlowVessel[] {
  const a = buildAnatomy();
  return (['LM', 'LAD', 'LCX', 'D1', 'D2'] as VesselId[]).map((id) => ({
    id,
    parent: a.vessels[id].parent,
    parentS: a.vessels[id].parentS,
    ds: a.vessels[id].ds,
    lumen: lumenOverride[id] ?? a.vessels[id].baseD,
    ref: a.vessels[id].refD,
  }));
}

describe('contrast transit', () => {
  const a = buildAnatomy();
  const lad = a.vessels.LAD;
  const iBefore = Math.round((a.lesion.s0 - 5) / lad.ds);
  const iAfter = Math.round((a.lesion.s1 + 5) / lad.ds);
  const span = Math.round(10 / lad.ds);
  const mm = span * lad.ds;

  it('slows beyond the lesion (and the untreated LAD is TIMI 2)', () => {
    const r = computeFlow(treeFrom(), FLOW.coronaryVelocity);
    const arr = r.LAD!.arrival;
    const slopeBefore = (arr[iBefore] - arr[iBefore - span]) / mm;
    const slopeAfter = (arr[iAfter + span] - arr[iAfter]) / mm;
    expect(slopeAfter).toBeGreaterThan(slopeBefore * 2);
    expect(timiFromFlow(distalFlow(r, 'LAD'))).toBe(2);
    // D2 (beyond) inherits the limitation, D1 (before) does not
    expect(r.D2!.factor[0]).toBeLessThan(0.8);
    expect(r.D1!.factor[0]).toBe(1);
    expect(timiFromFlow(distalFlow(r, 'LCX'))).toBe(3);
  });
  it('stops behind an inflated balloon - D2 too, D1 not', () => {
    const r = computeFlow(treeFrom(), FLOW.coronaryVelocity, [{ vessel: 'LAD', s: a.lesion.s0 - 1 }]);
    expect(r.LAD!.arrival[iAfter]).toBe(Infinity);
    expect(r.D2!.arrival.every((x) => x === Infinity)).toBe(true);
    expect(isFinite(r.D1!.arrival[r.D1!.arrival.length - 1])).toBe(true);
    expect(isFinite(r.LCX!.arrival[10])).toBe(true);
    expect(distalFlow(r, 'LAD')).toBe(0);
  });
  it('recovers after the lumen is restored', () => {
    const r = computeFlow(treeFrom({ LAD: lad.refD.slice() }), FLOW.coronaryVelocity);
    expect(timiFromFlow(distalFlow(r, 'LAD'))).toBe(3);
    const arr = r.LAD!.arrival;
    const slopeBefore = (arr[iBefore] - arr[iBefore - span]) / mm;
    const slopeAfter = (arr[iAfter + span] - arr[iAfter]) / mm;
    expect(slopeAfter).toBeCloseTo(slopeBefore, 3);
  });
  it('unsealed dissection penalises downstream flow; sealed does not', () => {
    const open = computeFlow(treeFrom({ LAD: lad.refD.slice() }), FLOW.coronaryVelocity, [], [{ vessel: 'LAD', s0: 50, sealed: false }]);
    expect(distalFlow(open, 'LAD')).toBeCloseTo(FLOW.dissectionPenalty, 6);
    expect(open.LAD!.factor[Math.round(40 / lad.ds)]).toBe(1);
    expect(timiFromFlow(distalFlow(open, 'LAD'))).toBe(2);
    const sealed = computeFlow(treeFrom({ LAD: lad.refD.slice() }), FLOW.coronaryVelocity, [], [{ vessel: 'LAD', s0: 50, sealed: true }]);
    expect(distalFlow(sealed, 'LAD')).toBe(1);
  });
  it('contrast fills between front and washout tail', () => {
    expect(contrastAt(1, 0.5, 1.5, 1)).toBe(0);
    expect(contrastAt(1, 1.5, 1.5, 1)).toBeCloseTo(1, 3);
    expect(contrastAt(1, 6, 1.5, 1)).toBe(0);
    expect(contrastAt(Infinity, 3, 1.5, 1)).toBe(0);
    // slow flow washes out later
    expect(contrastAt(1, 3.2, 1.5, 0.3)).toBeGreaterThan(contrastAt(1, 3.2, 1.5, 1));
  });
});

describe('flow in the running simulation', () => {
  it('balloon inflation occludes, stent restores TIMI 3', () => {
    const sim = simAtDemoStep(STEP.balloonCentred);
    expect(sim.snapshot.timi).toBe(2);
    runUntil(sim, { inflate: true }, (s) => s.balloon.pressure > 8, 10);
    expect(sim.occluded).toBe(true);
    expect(sim.snapshot.timi).toBe(0);
    expect(distalFlow(sim.flow, 'D2')).toBe(0);
    expect(distalFlow(sim.flow, 'D1')).toBe(1);
  });
  it('transit recovers after stenting', () => {
    const sim = simAtDemoStep(99);
    const arr = sim.flow.LAD!.arrival;
    const lad = sim.anat.vessels.LAD;
    const i0 = Math.round((sim.anat.lesion.s0 - 8) / lad.ds);
    const i1 = Math.round((sim.anat.lesion.s1 + 8) / lad.ds);
    const i2 = Math.round((sim.anat.lesion.s1 + 28) / lad.ds);
    const before = (arr[i0] - arr[0]) / (i0 * lad.ds);
    const after = (arr[i2] - arr[i1]) / ((i2 - i1) * lad.ds);
    expect(after).toBeLessThan(before * 1.3);
    expect(sim.snapshot.timi).toBe(3);
    expect(distalFlow(sim.flow, 'D2')).toBeGreaterThan(0.8);
  });
  it('a dissection reduces flow until a stent seals it', () => {
    const sim = createSim();
    sim.dissections.push({ id: 99, vessel: 'LAD', s0: 36, s1: 46, cause: 'balloon', at: 0, sealed: false, stain: 0.5 });
    sim.lumen.LAD = sim.anat.vessels.LAD.refD.slice();
    sim.needFlow = true;
    stepSim(sim, emptyInput(), DT);
    expect(distalFlow(sim.flow, 'LAD')).toBeCloseTo(FLOW.dissectionPenalty, 5);
    sim.stents.push({ id: 100, vessel: 'LAD', s0: 33, s1: 51, d: 3, l: 18, expandedD: 3.07, maxPressure: 12, at: 0 });
    rebuildLumen(sim);
    runFor(sim, {}, 0.1);
    expect(sim.dissections[0].sealed).toBe(true);
    expect(sim.snapshot.timi).toBe(3);
  });
});
