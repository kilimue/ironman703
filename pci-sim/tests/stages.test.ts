import { describe, expect, it } from 'vitest';
import { createSim, selectTool, giveHeparin } from '../src/procedure/sim';
import { toolLock } from '../src/tools/tools';
import { STAGES, makeStageProgress, progressStages } from '../src/procedure/stages';
import { buildSnapshot } from '../src/procedure/snapshot';
import { runUntil, simAtDemoStep, STEP } from './helpers';

describe('stage progression', () => {
  it('has the six stages in order', () => {
    expect(STAGES.map((s) => s.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('latches sub-tasks and completes stage 1 when the guide reaches the root with a fluoro look', () => {
    const sim = createSim();
    runUntil(sim, { advance: 1 }, (s) => s.snapshot.guideInAorta, 30);
    expect(sim.stages.done['1:elbow']).toBe(true);
    expect(sim.stages.current).toBe(0); // no fluoro look yet
    sim.xray.pedal = true;
    runUntil(sim, { advance: 1 }, (s) => s.snapshot.guideAtRoot, 10);
    sim.xray.pedal = false;
    runUntil(sim, {}, () => false, 0.1);
    expect(sim.stages.current).toBe(1);
    expect(sim.stages.completedAt[0]).toBeGreaterThan(0);
    // latched: retracting the guide does not undo the tasks
    runUntil(sim, { advance: -1 }, () => false, 2);
    expect(sim.stages.done['1:root']).toBe(true);
  });
  it('only latches tasks of the current stage', () => {
    const sim = createSim();
    const snap = { ...buildSnapshot(sim), heparin: true };
    const r = progressStages(makeStageProgress(), snap, 1);
    expect(r.progress.done['3:heparin']).toBeUndefined();
  });
  it('the demo path passes through all stages', () => {
    const sim = simAtDemoStep(99);
    expect(sim.stages.current).toBe(6);
    expect(sim.stages.completedAt.every((t) => t !== null)).toBe(true);
  });
});

describe('tool unlocking', () => {
  it('locks the wire until engagement, angiogram and heparin', () => {
    const sim = createSim();
    expect(toolLock('wire', sim.snapshot)).toMatch(/Engage/);
    expect(selectTool(sim, 'wire')).toBe(false);
    expect(sim.tool).toBe('guide');
    const s2 = simAtDemoStep(STEP.engaged);
    expect(toolLock('wire', s2.snapshot)).toMatch(/angiogram/);
    const s3 = simAtDemoStep(STEP.angioDone);
    expect(toolLock('wire', s3.snapshot)).toMatch(/heparin/i);
    giveHeparin(s3);
    runUntil(s3, {}, () => false, 0.05);
    expect(toolLock('wire', s3.snapshot)).toBeNull();
  });
  it('balloon needs the wire distal; stent needs pre-dilation and the balloon out', () => {
    const s = simAtDemoStep(STEP.heparinDone + 1);
    expect(toolLock('balloon', s.snapshot)).toMatch(/distal/);
    const d = simAtDemoStep(STEP.wireDistal);
    expect(toolLock('balloon', d.snapshot)).toBeNull();
    expect(toolLock('stent', d.snapshot)).toMatch(/Pre-dilate/);
    const p = simAtDemoStep(STEP.predilated);
    expect(p.snapshot.predilated).toBe(true);
    expect(p.snapshot.balloonOut).toBe(true);
    expect(toolLock('stent', p.snapshot)).toMatch(/Withdraw/);
    const w = simAtDemoStep(STEP.balloonWithdrawn);
    expect(toolLock('stent', w.snapshot)).toBeNull();
  });
  it('contrast needs the guide in the aorta; measure needs an angiogram', () => {
    const sim = createSim();
    expect(toolLock('contrast', sim.snapshot)).not.toBeNull();
    expect(toolLock('measure', sim.snapshot)).not.toBeNull();
    expect(toolLock('fluoro', sim.snapshot)).toBeNull();
    expect(toolLock('guide', sim.snapshot)).toBeNull();
  });
});
