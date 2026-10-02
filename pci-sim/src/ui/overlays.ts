/** Pause overlay, help overlay, fluoro monitor text and hover readout. */
import { h, setText, fmtTime } from './dom';
import { projectionName } from '../procedure/sim';
import { FLUORO } from '../config/anatomy';
import type { Store } from '../state/store';

export function buildPause(onResume: () => void, onHelp: () => void, onEnd: () => void): HTMLElement {
  return h(
    'div',
    { class: 'modal-backdrop pause', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Paused' },
    h(
      'div',
      { class: 'modal small-modal' },
      h('h2', {}, 'Paused'),
      h('p', {}, 'The simulation is frozen. Take your time.'),
      h(
        'div',
        { class: 'modal-actions' },
        h('button', { class: 'btn primary', onclick: () => onResume() }, 'Resume (Esc)'),
        h('button', { class: 'btn', onclick: () => onHelp() }, 'Keys & help'),
        h('button', { class: 'btn', onclick: () => onEnd() }, 'End case'),
      ),
    ),
  );
}

export function buildHelp(onClose: () => void): HTMLElement {
  const rows: [string, string][] = [
    ['1 - 7', 'Tools: guide, wire, balloon, stent, contrast, fluoro, measure'],
    ['W / S · mouse wheel', 'Advance / retract the active device'],
    ['Shift (hold)', 'Fine control: slower movement, rotation and inflation'],
    ['A / D', 'Rotate guide or wire tip (counter-clockwise / clockwise)'],
    ['E (hold) · Q', 'Inflate · deflate the balloon or stent'],
    ['G', 'Heparin bolus'],
    ['C or 5', 'Inject contrast (cine run)'],
    ['Space or 6 (hold)', 'Fluoroscopy pedal'],
    ['Tab', 'Toggle 3D view / X-ray monitor'],
    ['V · arrow keys', 'Cycle C-arm presets · fine-tune LAO/RAO and CRA/CAU'],
    ['F', 'Camera follows the device tip'],
    ['L', 'Anatomy labels'],
    ['M', 'Mentor panel'],
    ['N', 'Monitor sound'],
    ['H', 'This help'],
    ['Esc', 'Pause'],
    ['Drag · right-drag · Ctrl+wheel', 'Orbit · pan · zoom the 3D view'],
  ];
  return h(
    'div',
    { class: 'modal-backdrop', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Help', onclick: (e: Event) => e.target === e.currentTarget && onClose() },
    h(
      'div',
      { class: 'modal' },
      h('h2', {}, 'Controls'),
      h('dl', { class: 'keys' }, ...rows.flatMap(([k, v]) => [h('dt', {}, k), h('dd', {}, v)])),
      h(
        'p',
        { class: 'small' },
        'Workflow: guide to the aortic root → face the left cusp and engage → angiogram → heparin → wire into the distal LAD → pre-dilate → QCA → stent → final shots in two projections. ',
        h('strong', {}, 'Educational model only - not medical advice.'),
      ),
      h('div', { class: 'modal-actions' }, h('button', { class: 'btn primary', onclick: () => onClose() }, 'Close (H)')),
    ),
  );
}

/** Text overlay on the fluoro monitor. */
export class FluoroOverlay {
  readonly el: HTMLElement;
  private proj: HTMLElement;
  private mode: HTMLElement;
  private fps: HTMLElement;
  private time: HTMLElement;
  private empty: HTMLElement;
  private dose: HTMLElement;

  constructor(private store: Store) {
    this.proj = h('div', { class: 'fo-proj' });
    this.mode = h('div', { class: 'fo-mode' });
    this.fps = h('div', { class: 'fo-fps' }, `${FLUORO.frameRate} fps`);
    this.time = h('div', { class: 'fo-time' });
    this.dose = h('div', { class: 'fo-dose' });
    this.empty = h('div', { class: 'fo-empty' }, 'No image yet - hold Space (fluoro) or inject contrast (C)');
    this.el = h(
      'div',
      { class: 'fluoro-overlay', 'aria-hidden': 'true' },
      h('div', { class: 'fo-tl' }, h('div', { class: 'fo-name' }, 'PCI SIM · EDU · LAD'), this.proj, this.time, this.dose),
      h('div', { class: 'fo-tr' }, this.mode, this.fps),
      h('div', { class: 'fo-br' }, 'R'),
      this.empty,
    );
  }

  update(hasImage: boolean) {
    const { sim, ui } = this.store;
    this.el.style.display = ui.view === 'xray' ? '' : 'none';
    if (ui.view !== 'xray') return;
    setText(this.proj, projectionName(sim.carm.lao, sim.carm.cra) + (sim.carm.preset >= 0 ? '' : ' (custom)'));
    const mode = sim.xray.mode === 'cine' ? 'CINE' : sim.xray.mode === 'fluoro' ? 'FLUORO' : hasImage ? 'LIH' : 'STANDBY';
    setText(this.mode, mode);
    this.mode.className = 'fo-mode ' + mode.toLowerCase();
    setText(this.time, `Fluoro ${fmtTime(sim.xray.fluoroTime)}`);
    setText(this.dose, `Contrast ${sim.contrast.totalMl} ml`);
    this.empty.style.display = hasImage ? 'none' : '';
  }
}

export class HoverReadout {
  readonly el = h('div', { class: 'hover-readout', role: 'status' });
  constructor(private store: Store) {}
  update() {
    const hv = this.store.ui.hover;
    const show = !!hv && this.store.sim.tool === 'measure' && this.store.ui.view === '3d';
    this.el.style.display = show ? '' : 'none';
    if (!show || !hv) return;
    setText(this.el, `${hv.name.replace(/ \(.*\)/, '')} · ${hv.s.toFixed(0)} mm · Ø ${hv.diameter.toFixed(2)} mm · ref ${hv.reference.toFixed(2)} · ${Math.round(hv.stenosis * 100)}% DS`);
    this.el.style.transform = `translate(${hv.x + 16}px, ${hv.y + 12}px)`;
  }
}
