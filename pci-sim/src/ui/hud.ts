/** Top HUD: view, X-ray state, fluoro time, contrast, help, pause, end case. */
import { h, setText, fmtTime } from './dom';
import type { Store } from '../state/store';

export interface HudActions {
  toggleView: () => void;
  help: () => void;
  pause: () => void;
  endCase: () => void;
  stopDemo: () => void;
}

export class Hud {
  readonly el: HTMLElement;
  private viewBtn: HTMLButtonElement;
  private xray: HTMLElement;
  private fluoro: HTMLElement;
  private contrast: HTMLElement;
  private demo: HTMLElement;

  constructor(
    private store: Store,
    a: HudActions,
  ) {
    this.viewBtn = h('button', { class: 'hud-btn view', title: 'Switch 3D / X-ray (Tab)', onclick: () => a.toggleView() }, '3D');
    this.xray = h('span', { class: 'xray-lamp', title: 'X-ray beam' }, 'X-RAY OFF');
    this.fluoro = h('span', { class: 'hud-num' }, '0:00');
    this.contrast = h('span', { class: 'hud-num' }, '0 ml');
    this.demo = h('button', { class: 'demo-badge', title: 'Demo running - press any key to take control', onclick: () => a.stopDemo() }, 'DEMO');
    this.el = h(
      'header',
      { class: 'hud' },
      h('div', { class: 'brand' }, h('span', { class: 'brand-mark' }, '♥'), h('span', { class: 'brand-text' }, 'PCI Sim'), h('span', { class: 'edu' }, 'EDU')),
      this.demo,
      h('div', { class: 'hud-group' }, this.viewBtn, this.xray),
      h('div', { class: 'hud-group stats' }, h('span', { class: 'hud-label' }, 'Fluoro'), this.fluoro, h('span', { class: 'hud-label' }, 'Contrast'), this.contrast),
      h(
        'div',
        { class: 'hud-group right' },
        h('button', { class: 'hud-btn', title: 'Keys & help (H)', onclick: () => a.help() }, '?'),
        h('button', { class: 'hud-btn', title: 'Pause (Esc)', onclick: () => a.pause() }, 'II'),
        h('button', { class: 'hud-btn end', title: 'End the case and open the debrief', onclick: () => a.endCase() }, 'End case'),
      ),
    );
  }

  update() {
    const { sim, ui } = this.store;
    setText(this.viewBtn, ui.view === '3d' ? '3D view' : 'X-ray');
    this.viewBtn.classList.toggle('xr', ui.view === 'xray');
    const mode = sim.xray.mode;
    setText(this.xray, mode === 'off' ? 'X-RAY OFF' : mode === 'cine' ? 'CINE' : 'FLUORO');
    this.xray.classList.toggle('on', mode !== 'off');
    setText(this.fluoro, fmtTime(sim.xray.fluoroTime));
    setText(this.contrast, `${sim.contrast.totalMl} ml`);
    this.contrast.classList.toggle('warn', sim.contrast.totalMl > 120);
    this.demo.style.display = ui.demo && !ui.demo.done ? '' : 'none';
  }
}
