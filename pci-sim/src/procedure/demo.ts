/**
 * Demo autopilot: performs the whole case through the SAME input path as the learner
 * (an auto-input override: advance, rotate, fine, inflate) plus the same actions the UI calls.
 * No DOM - runs headless in tests.
 */
import { FLUORO, WIRE } from '../config/anatomy';
import { angDiff, wrapDeg } from '../math/vec3';
import { wirePath, nextBranch } from '../physics/wire';
import { toLocal } from '../physics/route';
import { workingRange } from '../physics/balloon';
import {
  type SimState,
  type InputState,
  emptyInput,
  selectTool,
  inject,
  giveHeparin,
  setPedal,
  setProjection,
  setCathSize,
  deflate,
} from './sim';

export interface DemoStep {
  say: string;
  /** Returns true when the step is finished. `t` = time spent in this step. */
  run: (sim: SimState, inp: InputState, t: number) => boolean;
}

export interface DemoState {
  steps: DemoStep[];
  index: number;
  stepTime: number;
  input: InputState;
  done: boolean;
  narration: string;
}

const preset = (sim: SimState, i: number) => {
  const p = FLUORO.presets[i];
  setProjection(sim, p.lao, p.cra, i);
};

/** Fluoro taps: pedal on for 0.5 s every `every` s. */
const tap = (sim: SimState, t: number, every = 3) => setPedal(sim, t % every < 0.5);

/** Turn toward a target rotation; returns |difference|. */
function steer(current: number, target: number, inp: InputState): number {
  const d = wrapDeg(target - current);
  inp.rotate = Math.abs(d) < 1.5 ? 0 : Math.sign(d);
  inp.fine = Math.abs(d) < 12;
  return Math.abs(d);
}

/** Centre of a catheter's working length in LAD local coordinates (null if not on the LAD). */
function cathCenterOnLAD(sim: SimState, kind: 'balloon' | 'stent'): number | null {
  const c = kind === 'balloon' ? sim.balloon : sim.stent;
  if (c.pos <= 0) return null;
  const [a, b] = workingRange(c);
  const loc = toLocal(wirePath(sim.anat, sim.wire), (a + b) / 2);
  return loc.vessel === 'LAD' ? loc.s : null;
}

/** Drive a catheter so its working length is centred on the lesion. */
function positionCath(sim: SimState, kind: 'balloon' | 'stent', inp: InputState): boolean {
  const target = sim.anat.lesion.center;
  const c = cathCenterOnLAD(sim, kind);
  if (c === null) {
    inp.advance = 1;
    inp.fine = false;
    return false;
  }
  const err = target - c;
  if (Math.abs(err) < 0.15) {
    inp.advance = 0;
    return true;
  }
  inp.fine = Math.abs(err) < 6;
  inp.advance = Math.sign(err) * (Math.abs(err) < 0.6 ? 0.4 : 1);
  return false;
}

function inflateTo(sim: SimState, kind: 'balloon' | 'stent', target: number, hold: number, inp: InputState, state: { reachedAt?: number }): boolean {
  const c = kind === 'balloon' ? sim.balloon : sim.stent;
  if (c.pressure < target - 0.05) {
    inp.inflate = true;
    inp.fine = c.pressure > target - 1.5;
    return false;
  }
  inp.inflate = false;
  if (c.inflStart !== null && sim.t - c.inflStart >= hold) return true;
  void state;
  return false;
}

export function makeDemo(): DemoState {
  const holdState: { reachedAt?: number } = {};
  let wait = 0;
  const steps: DemoStep[] = [
    {
      say: 'Demo: we start at the right radial artery. Select the 6F guide catheter (1).',
      run: (sim, _i, t) => {
        if (t < 0.3) return false;
        selectTool(sim, 'guide');
        return t > 1.6;
      },
    },
    {
      say: 'Advance the guide up the forearm past the elbow, with brief fluoro taps to check position.',
      run: (sim, inp, t) => {
        inp.advance = 1;
        tap(sim, t, 3.5);
        return sim.snapshot.guidePastElbow;
      },
    },
    {
      say: 'Up the brachial and axillary arteries, through the subclavian and brachiocephalic trunk into the aorta.',
      run: (sim, inp, t) => {
        inp.advance = 1;
        tap(sim, t, 3.5);
        if (sim.snapshot.guideInAorta && sim.flags.lookedOnFluoro) {
          setPedal(sim, false);
          return true;
        }
        if (sim.snapshot.guideInChest) setPedal(sim, t % 3.5 < 0.8);
        return false;
      },
    },
    {
      say: 'Down the ascending aorta until the guide reaches the aortic root.',
      run: (sim, inp) => {
        const left = sim.routeLength - sim.guide.s;
        inp.advance = 1;
        inp.fine = left < 15;
        if (sim.snapshot.guideAtRoot) {
          inp.advance = 0;
          setPedal(sim, false);
          return true;
        }
        setPedal(sim, left < 25);
        return false;
      },
    },
    {
      say: 'Rotate the pre-shaped tip (A/D) until it faces the LEFT coronary cusp - watch the dial.',
      run: (sim, inp) => {
        inp.advance = 0;
        const d = steer(sim.guide.rot, sim.anat.root.leftCusp, inp);
        if (d < 3) {
          inp.rotate = 0;
          return true;
        }
        return false;
      },
    },
    {
      say: 'Facing the left cusp: advance gently (Shift) to seat the tip in the left main ostium.',
      run: (sim, inp) => {
        inp.rotate = 0;
        inp.fine = true;
        inp.advance = 1;
        setPedal(sim, true);
        if (sim.guide.engaged) {
          inp.advance = 0;
          setPedal(sim, false);
          return true;
        }
        return false;
      },
    },
    {
      say: 'Engaged. Switch to RAO 30° CRA 30° and inject contrast for the diagnostic angiogram: note the tight mid-LAD lesion and slow (TIMI 2) distal filling.',
      run: (sim, inp, t) => {
        inp.fine = false;
        if (t < 0.6) return false;
        if (!sim.flags.diagAngio) {
          preset(sim, 0);
          inject(sim);
          wait = sim.contrast.current!.duration;
        }
        return t > wait + 1;
      },
    },
    {
      say: 'Give heparin (G) before wiring. ACT rises from ~128 s to ~285 s.',
      run: (sim, _i, t) => {
        if (!sim.heparinGiven) giveHeparin(sim);
        return t > 2;
      },
    },
    {
      say: 'Select the 0.014" wire and advance it into the left main. The tip currently points toward the circumflex...',
      run: (sim, inp, t) => {
        if (sim.tool !== 'wire') selectTool(sim, 'wire');
        if (t < 0.5) return false;
        const nb = nextBranch(sim.anat, sim.wire);
        inp.advance = 1;
        inp.fine = false;
        if (nb && nb.dist < 8) {
          inp.advance = 0;
          return true;
        }
        return false;
      },
    },
    {
      say: '...so rotate the tip toward the LAD before the bifurcation, then advance. Steer away from the diagonals.',
      run: (sim, inp) => {
        const lad = sim.anat.branches.find((b) => b.child === 'LAD')!;
        if (!sim.wire.chain.includes('LAD')) {
          const d = steer(sim.wire.rot, lad.angle, inp);
          inp.advance = d < 10 ? 1 : 0;
          inp.fine = true;
          return false;
        }
        inp.rotate = 0;
        inp.advance = 0;
        return true;
      },
    },
    {
      say: 'Advance down the proximal LAD, keeping the tip away from D1. Slow down (Shift) before the lesion.',
      run: (sim, inp) => {
        const nb = nextBranch(sim.anat, sim.wire);
        // keep the tip pointing away from upcoming side branches
        if (nb && nb.b.side && nb.dist < 12) {
          const away = nb.b.angle + 180;
          if (angDiff(sim.wire.rot, nb.b.angle) < WIRE.branchCapture + 25) {
            steer(sim.wire.rot, away, inp);
            inp.advance = 0;
            return false;
          }
        }
        inp.rotate = 0;
        const loc = sim.snapshot.wireVessel === 'LAD' ? sim.snapshot.wireLocal : 0;
        inp.fine = loc > sim.anat.lesion.s0 - 6;
        inp.advance = 1;
        return loc >= sim.anat.lesion.s0 - 1;
      },
    },
    {
      say: 'Cross the lesion slowly with gentle torque - no buckling, no forcing.',
      run: (sim, inp, t) => {
        inp.fine = true;
        inp.advance = 1;
        inp.rotate = Math.sin(t * 3) > 0 ? 0.3 : -0.3;
        if (sim.wire.crossed) {
          inp.rotate = 0;
          return true;
        }
        return false;
      },
    },
    {
      say: 'Lesion crossed. Park the wire tip in the distal LAD for support (stay clear of D2 and the vessel end).',
      run: (sim, inp) => {
        const nb = nextBranch(sim.anat, sim.wire);
        if (nb && nb.b.side && nb.dist < 12 && angDiff(sim.wire.rot, nb.b.angle) < WIRE.branchCapture + 25) {
          steer(sim.wire.rot, nb.b.angle + 180, inp);
          inp.advance = 0;
          return false;
        }
        inp.rotate = 0;
        inp.fine = false;
        inp.advance = 1;
        const loc = sim.snapshot.wireVessel === 'LAD' ? sim.snapshot.wireLocal : 0;
        if (loc >= sim.anat.lesion.s1 + WIRE.distalPark + 12) {
          inp.advance = 0;
          return true;
        }
        return false;
      },
    },
    {
      say: 'Select a 2.5 x 15 mm balloon (about 0.85x the reference) and advance it over the wire.',
      run: (sim, inp, t) => {
        inp.advance = 0;
        if (sim.tool !== 'balloon') {
          selectTool(sim, 'balloon');
          setCathSize(sim, 'balloon', 2.5, 15);
        }
        return t > 1.2;
      },
    },
    {
      say: 'Centre the balloon markers on the lesion (fine positioning near the target), confirming on fluoro.',
      run: (sim, inp, t) => {
        const ok = positionCath(sim, 'balloon', inp);
        setPedal(sim, cathCenterOnLAD(sim, 'balloon') !== null && t % 2 < 0.6);
        if (ok) setPedal(sim, false);
        return ok;
      },
    },
    {
      say: 'Inflate to 10 atm and hold ~12 s. Watch the ST segment rise and the patient report chest pain - expected during occlusion.',
      run: (sim, inp) => {
        inp.advance = 0;
        return inflateTo(sim, 'balloon', 10, 12, inp, holdState);
      },
    },
    {
      say: 'Deflate (Q). Flow returns and the ST segment settles.',
      run: (sim, inp) => {
        inp.inflate = false;
        inp.fine = false;
        if (sim.balloon.pressure > 0) deflate(sim);
        return sim.balloon.pressure === 0 && sim.flags.predilated;
      },
    },
    {
      say: 'Withdraw the balloon back into the guide.',
      run: (sim, inp) => {
        inp.advance = -1;
        if (sim.balloon.pos <= -5) {
          inp.advance = 0;
          return true;
        }
        return false;
      },
    },
    {
      say: 'Measure (QCA): reference ~2.95 mm, lesion ~13-14 mm long. Choose a 3.0 x 18 mm stent - 1:1 sizing and ≥ 2 mm margins.',
      run: (sim, _i, t) => {
        if (sim.tool !== 'measure') selectTool(sim, 'measure');
        return t > 3.5;
      },
    },
    {
      say: 'Load the 3.0 x 18 mm drug-eluting stent and advance it to the lesion.',
      run: (sim, inp, t) => {
        if (sim.tool !== 'stent') {
          selectTool(sim, 'stent');
          setCathSize(sim, 'stent', 3.0, 18);
        }
        inp.advance = 0;
        return t > 1.2;
      },
    },
    {
      say: 'Centre the stent on the lesion so both margins are about 2 mm.',
      run: (sim, inp, t) => {
        const ok = positionCath(sim, 'stent', inp);
        setPedal(sim, cathCenterOnLAD(sim, 'stent') !== null && t % 2 < 0.6);
        if (ok) setPedal(sim, false);
        return ok;
      },
    },
    {
      say: 'Deploy at 12 atm (Ø ≈ 3.07 mm) and hold ~12 s.',
      run: (sim, inp) => {
        inp.advance = 0;
        return inflateTo(sim, 'stent', 12, 12, inp, holdState);
      },
    },
    {
      say: 'Deflate the delivery balloon - the stent stays, holding the lumen open.',
      run: (sim, inp) => {
        inp.inflate = false;
        inp.fine = false;
        if (sim.stent.pressure > 0) deflate(sim);
        return sim.stent.pressure === 0 && sim.flags.deployedAndDeflated;
      },
    },
    {
      say: 'Withdraw the delivery balloon into the guide.',
      run: (sim, inp) => {
        inp.advance = -1;
        if (sim.stent.pos <= -5) {
          inp.advance = 0;
          return true;
        }
        return false;
      },
    },
    {
      say: 'Final angiogram in RAO 30° CRA 30°: brisk TIMI 3 flow, no residual stenosis.',
      run: (sim, _i, t) => {
        if (t < 0.5) return false;
        if (sim.flags.finalViews.length === 0) {
          preset(sim, 0);
          inject(sim);
          wait = sim.contrast.current!.duration;
        }
        return t > wait + 0.8;
      },
    },
    {
      say: 'Second, orthogonal view: LAO 45° CRA 30°. No edge dissection - case complete.',
      run: (sim, _i, t) => {
        if (t < 0.5) return false;
        if (sim.flags.finalViews.length === 1) {
          preset(sim, 2);
          inject(sim);
          wait = sim.contrast.current!.duration;
        }
        return t > wait + 0.8;
      },
    },
  ];
  return { steps, index: 0, stepTime: 0, input: emptyInput(), done: false, narration: steps[0].say };
}

/** Advance the demo by dt: sets demo.input for this frame (the caller feeds it to stepSim). */
export function stepDemo(demo: DemoState, sim: SimState, dt: number) {
  if (demo.done) return;
  const step = demo.steps[demo.index];
  const inp = demo.input;
  // inputs persist between frames except one-shot helpers
  const finished = step.run(sim, inp, demo.stepTime);
  demo.stepTime += dt;
  if (finished) {
    demo.index++;
    demo.stepTime = 0;
    demo.input = emptyInput();
    if (demo.index >= demo.steps.length) {
      demo.done = true;
      setPedal(sim, false);
      demo.narration = 'Demo complete. Press any key to take over, or start a new case.';
    } else demo.narration = demo.steps[demo.index].say;
  }
}
