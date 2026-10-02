import { describe, expect, it } from 'vitest';
import { createSim, stepSim, selectTool, setCathSize, deflate, inject, setProjection } from '../src/procedure/sim';
import { makeDemo, stepDemo } from '../src/procedure/demo';
import { buildDebrief, summarize } from '../src/procedure/debrief';
import { distalFlow } from '../src/physics/flow';
import { workingRange } from '../src/physics/balloon';
import { wirePath } from '../src/physics/wire';
import { toLocal } from '../src/physics/route';
import { DT, runUntil, simAtDemoStep, STEP } from './helpers';

describe('demo autopilot', () => {
  it('completes all six stages with an Excellent debrief', () => {
    const sim = createSim();
    const demo = makeDemo();
    let guard = 0;
    while (!demo.done && guard++ < 60 * 400) {
      stepDemo(demo, sim, DT);
      stepSim(sim, demo.input, DT);
      sim.outbox.length = 0;
    }
    expect(demo.done).toBe(true);
    expect(sim.stages.current).toBe(6);
    const d = buildDebrief(summarize(sim));
    expect(d.grade).toBe('Excellent');
    expect(d.score).toBeGreaterThanOrEqual(90);
    expect(sim.dissections.length).toBe(0);
    expect(sim.snapshot.timi).toBe(3);
  });
});

describe('deliberately bad case', () => {
  it('oversized short stent at high pressure -> dissection, reduced flow, Needs work', () => {
    const sim = simAtDemoStep(STEP.balloonWithdrawn + 1);
    selectTool(sim, 'measure');
    expect(selectTool(sim, 'stent')).toBe(true);
    setCathSize(sim, 'stent', 4.0, 12);
    expect(sim.stent.d).toBe(4.0);
    // centre the short stent on the lesion
    const centre = () => {
      const [a, b] = workingRange(sim.stent);
      const loc = toLocal(wirePath(sim.anat, sim.wire), (a + b) / 2);
      return loc.vessel === 'LAD' ? loc.s : -1;
    };
    runUntil(sim, (s) => ({ advance: centre() < s.anat.lesion.center - 3 ? 1 : 0.3, fine: centre() > s.anat.lesion.center - 3 }), () => centre() >= sim.anat.lesion.center - 0.2, 40);
    // high pressure: 17 atm
    runUntil(sim, { inflate: true }, (s) => s.stent.pressure >= 17, 15);
    runUntil(sim, {}, () => false, 3);
    deflate(sim);
    runUntil(sim, {}, (s) => s.stent.pressure === 0, 10);
    runUntil(sim, { advance: -1 }, (s) => s.stent.pos <= -3, 20);
    setProjection(sim, -30, 30);
    inject(sim);
    runUntil(sim, {}, () => false, 6);
    setProjection(sim, 45, 30);
    inject(sim);
    runUntil(sim, {}, () => false, 6);

    expect(sim.dissections.length).toBeGreaterThan(0);
    expect(sim.dissections.some((d) => !d.sealed && d.cause === 'stent-edge')).toBe(true);
    expect(distalFlow(sim.flow, 'LAD')).toBeLessThan(0.8);
    const s = summarize(sim);
    expect(s.timi).toBeLessThan(3);
    expect(s.geographicMiss).toBe(true);
    const d = buildDebrief(s);
    expect(d.grade).toBe('Needs work');
  });
});
