/** Bootstrap, render loop, keyboard / mouse wiring. */
import './styles.css';
import { Store } from './state/store';
import {
  stepSim,
  selectTool,
  inject,
  giveHeparin,
  setPedal,
  cyclePreset,
  nudgeCarm,
  deflate,
  addWheel,
  setCathSize,
  emptyInput,
  type InputState,
} from './procedure/sim';
import { makeDemo, stepDemo } from './procedure/demo';
import { buildDebrief, summarize } from './procedure/debrief';
import { FLUORO } from './config/anatomy';
import { SceneManager } from './scene/renderer';
import { Picker } from './tools/picking';
import type { ToolId } from './tools/tools';
import { h, $ } from './ui/dom';
import { CURSORS } from './ui/icons';
import { svgCursor } from './ui/dom';
import { buildStartScreen } from './ui/startScreen';
import { Hud } from './ui/hud';
import { Toolbar } from './ui/toolbar';
import { Checklist } from './ui/checklist';
import { Mentor } from './ui/mentor';
import { Vitals } from './ui/vitals';
import { DevicePanel, type HoldState } from './ui/devicePanel';
import { Messages } from './ui/messages';
import { buildDebriefView } from './ui/debrief';
import { buildPause, buildHelp, FluoroOverlay, HoverReadout } from './ui/overlays';
import { MonitorAudio } from './audio/audio';

const store = new Store();
const app = $('#app');
const canvas = $('#view') as HTMLCanvasElement;
const overlay = $('#overlay');

// ------------------------------------------------------------------ scene
let scene: SceneManager;
try {
  scene = new SceneManager(canvas, overlay, store.sim);
} catch (err) {
  app.innerHTML = '';
  app.append(h('div', { class: 'fatal' }, h('h1', {}, 'WebGL is not available'), h('p', {}, 'This simulator needs a browser with WebGL enabled.'), h('pre', {}, String(err))));
  throw err;
}
const picker = new Picker();
const audio = new MonitorAudio();
const hold: HoldState = { advance: 0, rotate: 0, inflate: false };
const keys = new Set<string>();

// ------------------------------------------------------------------ actions
function doSelect(id: ToolId) {
  const sim = store.sim;
  if (id === 'fluoro') return;
  const before = sim.tool;
  const ok = selectTool(sim, id);
  if (ok && id === 'contrast') onInjected();
  if (ok && sim.tool !== before) onToolChanged();
}

function onToolChanged() {
  const t = store.sim.tool;
  canvas.style.cursor = CURSORS[t] ? svgCursor(CURSORS[t], 14, 14, 'crosshair') : '';
  if (!store.ui.follow) {
    if (t === 'wire' || t === 'balloon' || t === 'stent' || t === 'measure') scene.focusHeart(store.sim, t === 'measure' ? 120 : 150);
    else if (t === 'guide') scene.overview();
  }
  store.emit('tool');
}

function onInjected() {
  if (store.ui.view === '3d' && store.sim.contrast.current && store.sim.t - store.sim.contrast.current.t0 < 0.1) {
    setView('xray');
    messages.push({ level: 'info', text: 'Switched to the X-ray monitor to watch the angiogram (Tab for 3D).', key: 'auto-xray' });
  }
}

function doInject() {
  const n = store.sim.contrast.injections.length;
  inject(store.sim);
  if (store.sim.contrast.injections.length > n) onInjected();
}

function setView(v: '3d' | 'xray') {
  store.ui.view = v;
  scene.view = v;
  app.classList.toggle('xray-view', v === 'xray');
  store.emit('view');
}

function toggleView() {
  setView(store.ui.view === '3d' ? 'xray' : '3d');
}

function togglePause(force?: boolean) {
  if (!store.ui.started || store.ui.debrief) return;
  store.ui.paused = force ?? !store.ui.paused;
  pauseEl.style.display = store.ui.paused ? '' : 'none';
  if (store.ui.paused) {
    keys.clear();
    setPedal(store.sim, false);
  }
}

function toggleHelp(force?: boolean) {
  store.ui.help = force ?? !store.ui.help;
  helpEl.style.display = store.ui.help ? '' : 'none';
}

function stopDemo(silent = false) {
  if (!store.ui.demo) return;
  const wasRunning = !store.ui.demo.done;
  store.ui.demo = null;
  setPedal(store.sim, false);
  if (wasRunning && !silent) messages.push({ level: 'info', text: 'Demo stopped - you have control. Carry on from here.', key: 'demo-stop' });
  store.emit('demo');
}

let debriefEl: HTMLElement | null = null;
function openDebrief() {
  if (debriefEl) return;
  stopDemo(true);
  const d = buildDebrief(summarize(store.sim));
  setPedal(store.sim, false);
  store.ui.debrief = true;
  debriefEl = buildDebriefView(
    d,
    store.sim.log,
    () => {
      closeDebrief();
    },
    () => {
      closeDebrief();
      newCase(false);
    },
  );
  app.appendChild(debriefEl);
  (debriefEl.querySelector('.btn.primary') as HTMLElement)?.focus({ preventScroll: true });
  const modal = debriefEl.querySelector('.modal') as HTMLElement;
  if (modal) modal.scrollTop = 0;
}
function closeDebrief() {
  debriefEl?.remove();
  debriefEl = null;
  store.ui.debrief = false;
}

function newCase(demo: boolean) {
  store.newCase();
  scene.resetCase(store.sim);
  messages.clear();
  checklist.reset();
  mentor.reset();
  vitals.reset();
  devicePanel.reset();
  setView('3d');
  scene.follow = store.ui.follow = false;
  scene.overview();
  onToolChanged();
  if (demo) {
    store.ui.demo = makeDemo();
    store.emit('demo');
  }
}

// ------------------------------------------------------------------ UI
const messages = new Messages();
const hud = new Hud(store, { toggleView, help: () => toggleHelp(), pause: () => togglePause(), endCase: () => openDebrief(), stopDemo: () => stopDemo() });
const toolbar = new Toolbar(store, { select: (id) => doSelect(id), pedal: (on) => setPedal(store.sim, on) });
const checklist = new Checklist(store);
const mentor = new Mentor(store, () => {
  store.ui.mentorOpen = !store.ui.mentorOpen;
});
const vitals = new Vitals(store, {
  heparin: () => giveHeparin(store.sim),
  sound: () => toggleSound(),
});
const devicePanel = new DevicePanel(store, hold, {
  deflate: () => deflate(store.sim),
  fineToggle: () => (store.ui.fineLatch = !store.ui.fineLatch),
  inject: () => doInject(),
});
const fluoroOverlay = new FluoroOverlay(store);
const hoverReadout = new HoverReadout(store);
const pauseEl = buildPause(
  () => togglePause(false),
  () => toggleHelp(true),
  () => {
    togglePause(false);
    openDebrief();
  },
);
pauseEl.style.display = 'none';
const helpEl = buildHelp(() => toggleHelp(false));
helpEl.style.display = 'none';

function toggleSound() {
  store.ui.sound = !store.ui.sound;
  audio.enabled = store.ui.sound;
}

overlay.append(fluoroOverlay.el, hoverReadout.el);
app.append(
  hud.el,
  checklist.el,
  h('div', { class: 'right-col' }, vitals.el, mentor.el),
  h('div', { class: 'bottom' }, messages.el, h('div', { class: 'bottom-row' }, devicePanel.el, toolbar.el)),
  pauseEl,
  helpEl,
);

const start = buildStartScreen(
  () => begin(false),
  () => begin(true),
);
app.appendChild(start);
($('#btn-start') as HTMLElement).focus();

function begin(demo: boolean) {
  audio.unlock();
  audio.enabled = store.ui.sound;
  start.remove();
  store.ui.started = true;
  newCase(demo);
  messages.push(
    demo
      ? { level: 'info', text: 'Demo running - press any key, click or scroll to take over at any time.', key: 'demo-start' }
      : { level: 'info', text: 'Select the guide catheter (1) and advance it with W or the mouse wheel.', key: 'welcome' },
  );
}

// ------------------------------------------------------------------ input
function userInput(): InputState {
  const inp = emptyInput();
  inp.advance = (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0) + hold.advance;
  inp.rotate = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0) + hold.rotate;
  inp.fine = keys.has('ShiftLeft') || keys.has('ShiftRight') || store.ui.fineLatch;
  inp.inflate = keys.has('KeyE') || hold.inflate;
  return inp;
}

function takeOverFromDemo(): boolean {
  if (store.ui.demo && !store.ui.demo.done) {
    stopDemo();
    return true;
  }
  return false;
}

window.addEventListener('keydown', (e) => {
  if (!store.ui.started) return;
  const target = e.target as HTMLElement;
  if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
  if (debriefEl) {
    if (e.code === 'Escape') closeDebrief();
    return;
  }
  if (takeOverFromDemo()) {
    e.preventDefault();
    return;
  }
  if (e.code === 'Escape') {
    if (store.ui.help) toggleHelp(false);
    else togglePause();
    e.preventDefault();
    return;
  }
  if (store.ui.paused) return;
  if (e.code === 'Tab') {
    e.preventDefault();
    toggleView();
    return;
  }
  if (e.code === 'Space' || e.code === 'Digit6' || e.code === 'Numpad6') {
    e.preventDefault();
    setPedal(store.sim, true);
    keys.add(e.code);
    return;
  }
  if (e.repeat && !['KeyW', 'KeyS', 'KeyA', 'KeyD', 'KeyE', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.code)) return;
  keys.add(e.code);
  const tools: Record<string, ToolId> = { Digit1: 'guide', Digit2: 'wire', Digit3: 'balloon', Digit4: 'stent', Digit5: 'contrast', Digit7: 'measure' };
  const numpad: Record<string, ToolId> = { Numpad1: 'guide', Numpad2: 'wire', Numpad3: 'balloon', Numpad4: 'stent', Numpad5: 'contrast', Numpad7: 'measure' };
  const tool = tools[e.code] ?? numpad[e.code];
  if (tool) {
    doSelect(tool);
    return;
  }
  const fine = e.shiftKey ? 0.5 : 1;
  switch (e.code) {
    case 'KeyC':
      doInject();
      break;
    case 'KeyG':
      giveHeparin(store.sim);
      break;
    case 'KeyQ':
      deflate(store.sim);
      break;
    case 'KeyV':
      cyclePreset(store.sim);
      messages.push({ level: 'info', text: `C-arm: ${FLUORO.presets[store.sim.carm.preset].name}`, key: 'carm' });
      break;
    case 'ArrowLeft':
      nudgeCarm(store.sim, -FLUORO.fineStepDeg * fine, 0);
      e.preventDefault();
      break;
    case 'ArrowRight':
      nudgeCarm(store.sim, FLUORO.fineStepDeg * fine, 0);
      e.preventDefault();
      break;
    case 'ArrowUp':
      nudgeCarm(store.sim, 0, FLUORO.fineStepDeg * fine);
      e.preventDefault();
      break;
    case 'ArrowDown':
      nudgeCarm(store.sim, 0, -FLUORO.fineStepDeg * fine);
      e.preventDefault();
      break;
    case 'KeyF':
      scene.follow = store.ui.follow = !store.ui.follow;
      messages.push({ level: 'info', text: `Camera follow ${store.ui.follow ? 'on' : 'off'}.`, key: 'follow' });
      break;
    case 'KeyL':
      store.ui.labels = !store.ui.labels;
      scene.showLabels = store.ui.labels;
      break;
    case 'KeyH':
      toggleHelp();
      break;
    case 'KeyM':
      store.ui.mentorOpen = !store.ui.mentorOpen;
      break;
    case 'KeyN':
      toggleSound();
      messages.push({ level: 'info', text: `Monitor sound ${store.ui.sound ? 'on' : 'off'}.`, key: 'sound' });
      break;
  }
});

window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'Space' || e.code === 'Digit6' || e.code === 'Numpad6') {
    if (!keys.has('Space') && !keys.has('Digit6') && !keys.has('Numpad6')) setPedal(store.sim, false);
  }
});
window.addEventListener('blur', () => {
  keys.clear();
  if (store.ui.started) setPedal(store.sim, false);
});

canvas.addEventListener(
  'wheel',
  (e) => {
    if (!store.ui.started) return;
    e.preventDefault();
    if (takeOverFromDemo()) return;
    if (store.ui.paused) return;
    if (e.ctrlKey || e.metaKey) {
      if (store.ui.view === '3d') scene.rig.zoom(Math.exp(e.deltaY * 0.0015));
      return;
    }
    const notch = Math.sign(-e.deltaY) * (e.shiftKey ? 1 : 3);
    addWheel(store.sim, notch);
  },
  { passive: false },
);
app.addEventListener(
  'pointerdown',
  (e) => {
    if (!store.ui.started) return;
    const t = e.target as HTMLElement;
    if (t.closest('.demo-badge') || t.closest('.modal-backdrop')) return;
    takeOverFromDemo();
  },
  true,
);
canvas.addEventListener('pointermove', (e) => {
  if (store.sim.tool !== 'measure' || store.ui.view !== '3d') {
    store.ui.hover = null;
    return;
  }
  store.ui.hover = picker.pick(store.sim, scene.cam3d, scene.vessels, e.clientX, e.clientY, canvas.getBoundingClientRect());
});
canvas.addEventListener('pointerleave', () => (store.ui.hover = null));

// ------------------------------------------------------------------ resize
function resize() {
  const w = canvas.clientWidth || window.innerWidth;
  const hh = canvas.clientHeight || window.innerHeight;
  scene.resize(w, hh);
}
window.addEventListener('resize', resize);
resize();
onToolChanged();

// ------------------------------------------------------------------ loop
let last = performance.now();
let uiAcc = 0;
let lastBeat = 0;
let completedAt: number | null = null;

function frame(now: number) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const sim = store.sim;
  const running = store.ui.started && !store.ui.paused && !store.ui.debrief;
  if (running) {
    let left = dt;
    while (left > 1e-6) {
      const h = Math.min(1 / 60, left);
      left -= h;
      const demo = store.ui.demo;
      let inp: InputState;
      if (demo && !demo.done) {
        const prevIdx = demo.index;
        const prevTool = sim.tool;
        const prevInj = sim.contrast.injections.length;
        stepDemo(demo, sim, h);
        inp = demo.input;
        if (sim.tool !== prevTool) onToolChanged();
        if (sim.contrast.injections.length > prevInj) onInjected();
        if (demo.index !== prevIdx && !demo.done) {
          const v = demo.steps[demo.index].view;
          if (v && v !== store.ui.view) setView(v);
        }
      } else inp = userInput();
      stepSim(sim, inp, h);
    }
    for (const m of sim.outbox) messages.push(m);
    sim.outbox.length = 0;
    if (sim.beatCount !== lastBeat) {
      lastBeat = sim.beatCount;
      audio.beep(sim.phys.spo2);
    }
    audio.setAlarm(sim.phys.unstable);
    audio.tick();
    // auto debrief after the final stage (once the last cine is over)
    if (sim.stages.current >= 6 && !store.ui.debriefShownForCompletion) {
      if (completedAt === null || sim.xray.mode === 'cine') completedAt = now;
      if (now - completedAt > 1500) {
        store.ui.debriefShownForCompletion = true;
        completedAt = null;
        openDebrief();
      }
    }
  } else audio.setAlarm(false);

  scene.update(sim, running ? dt : 0);
  scene.backgroundAcquire(sim);
  scene.render(sim);
  vitals.update(dt);
  messages.tick();
  hoverReadout.update();
  fluoroOverlay.update(scene.post.hasImage);
  uiAcc += dt;
  if (uiAcc > 0.09) {
    uiAcc = 0;
    hud.update();
    toolbar.update();
    checklist.update();
    mentor.update();
    devicePanel.update();
    app.classList.toggle('demo-on', !!store.ui.demo && !store.ui.demo.done);
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// expose for debugging in the console
(window as unknown as { pci: unknown }).pci = {
  store,
  scene,
  /** Debug: run the simulation (and demo, if active) forward instantly by `sec` seconds. */
  fastForward(sec: number) {
    const sim = store.sim;
    const h = 1 / 60;
    for (let t = 0; t < sec; t += h) {
      const demo = store.ui.demo;
      if (demo && !demo.done) {
        const prevTool = sim.tool;
        stepDemo(demo, sim, h);
        if (sim.tool !== prevTool) onToolChanged();
        stepSim(sim, demo.input, h);
      } else stepSim(sim, emptyInput(), h);
    }
    for (const m of sim.outbox) messages.push(m);
    sim.outbox.length = 0;
  },
  setView,
  /** Debug: run with a fixed input for `sec` seconds, optionally until `until(sim)` is true. */
  run(sec: number, input: Partial<InputState>, until?: (s: typeof store.sim) => boolean) {
    const sim = store.sim;
    for (let t = 0; t < sec; t += 1 / 60) {
      if (until && until(sim)) break;
      stepSim(sim, { ...emptyInput(), ...input }, 1 / 60);
    }
    for (const m of sim.outbox) messages.push(m);
    sim.outbox.length = 0;
  },
  act: { select: doSelect, setCathSize: (k: "balloon" | "stent", d: number, l: number) => setCathSize(store.sim, k, d, l), inject: doInject, deflate: () => deflate(store.sim), cyclePreset: () => cyclePreset(store.sim) },
};
