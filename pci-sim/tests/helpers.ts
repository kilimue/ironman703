import { createSim, stepSim, emptyInput, type InputState, type SimState } from '../src/procedure/sim';
import { makeDemo, stepDemo } from '../src/procedure/demo';

export const DT = 1 / 60;

/** Step the sim with a constant (or computed) input until cond() or maxT seconds. */
export function runUntil(sim: SimState, input: Partial<InputState> | ((s: SimState) => Partial<InputState>), cond: (s: SimState) => boolean, maxT = 60): boolean {
  const end = sim.t + maxT;
  while (sim.t < end) {
    if (cond(sim)) return true;
    const inp = { ...emptyInput(), ...(typeof input === 'function' ? input(sim) : input) };
    stepSim(sim, inp, DT);
    sim.outbox.length = 0;
  }
  return cond(sim);
}

export function runFor(sim: SimState, input: Partial<InputState>, seconds: number) {
  runUntil(sim, input, () => false, seconds);
}

/** Play the demo autopilot until it reaches step `index` (fresh sim). */
export function simAtDemoStep(index: number, seed?: number): SimState {
  const sim = createSim(seed);
  const demo = makeDemo();
  let guard = 0;
  while (demo.index < index && !demo.done && guard++ < 60 * 600) {
    stepDemo(demo, sim, DT);
    stepSim(sim, demo.input, DT);
    sim.outbox.length = 0;
  }
  return sim;
}

/** Demo step indices (see src/procedure/demo.ts). */
export const STEP = {
  guideAtRoot: 4,
  engaged: 6,
  angioDone: 7,
  heparinDone: 8,
  wireDistal: 13,
  balloonCentred: 15,
  predilated: 17,
  balloonWithdrawn: 18,
  stentLoaded: 20,
  stentCentred: 21,
} as const;
