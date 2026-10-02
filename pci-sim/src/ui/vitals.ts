/** Patient monitor: sweeping synthetic V2 ECG + arterial pressure, numerics, heparin & sound buttons. */
import { h, setText } from './dom';
import { ecgV2 } from '../physics/ecg';
import type { Store } from '../state/store';

interface Beat {
  t: number;
  rr: number;
  pvc: boolean;
  st: number;
  sys: number;
  dia: number;
}

export class Vitals {
  readonly el: HTMLElement;
  private cv: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private beats: Beat[] = [];
  private lastBeatCount = -1;
  private x = 0;
  private lastT = 0;
  private prevE: number | null = null;
  private prevP: number | null = null;
  private hr: HTMLElement;
  private bp: HTMLElement;
  private bpUnit!: HTMLElement;
  private spo2: HTMLElement;
  private st: HTMLElement;
  private act: HTMLElement;
  private hepBtn: HTMLButtonElement;
  private sndBtn: HTMLButtonElement;
  private alarm: HTMLElement;
  private w = 300;
  private hgt = 120;

  constructor(
    private store: Store,
    actions: { heparin: () => void; sound: () => void },
  ) {
    this.cv = h('canvas', { class: 'ecg', 'aria-label': 'ECG lead V2 and arterial pressure' });
    this.ctx = this.cv.getContext('2d')!;
    this.hr = h('span', { class: 'v-num hr' }, '--');
    this.bp = h('span', { class: 'v-num bp' }, '--');
    this.spo2 = h('span', { class: 'v-num spo2' }, '--');
    this.st = h('span', { class: 'v-num st' }, '--');
    this.act = h('span', { class: 'v-num act' }, '--');
    this.alarm = h('div', { class: 'alarm-banner', role: 'alert' }, '');
    this.hepBtn = h('button', { class: 'v-btn', title: 'Give heparin (G)', onclick: () => actions.heparin() }, 'Heparin (G)');
    this.sndBtn = h('button', { class: 'v-btn', title: 'Monitor sound (N)', onclick: () => actions.sound() }, 'Sound (N)');
    const cell = (label: string, el: HTMLElement, unit: string, cls: string) => {
      const u = h('span', { class: 'v-unit' }, unit);
      if (cls === 'bp') this.bpUnit = u;
      return h('div', { class: 'v-cell ' + cls }, h('span', { class: 'v-label' }, label), el, u);
    };
    this.el = h(
      'section',
      { class: 'vitals panel', 'aria-label': 'Patient monitor' },
      h('div', { class: 'v-trace' }, h('span', { class: 'v-lead' }, 'V2'), h('span', { class: 'v-lead art' }, 'ART'), this.cv),
      h(
        'div',
        { class: 'v-nums' },
        cell('HR', this.hr, 'bpm', 'hr'),
        cell('ART', this.bp, 'mmHg', 'bp'),
        cell('SpO₂', this.spo2, '%', 'spo2'),
        cell('ST V2', this.st, 'mm', 'st'),
        cell('ACT', this.act, 's', 'act'),
      ),
      h('div', { class: 'v-actions' }, this.hepBtn, this.sndBtn),
      this.alarm,
    );
  }

  private resize() {
    const r = this.cv.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(100, Math.round(r.width * dpr));
    const hh = Math.max(60, Math.round(r.height * dpr));
    if (w !== this.cv.width || hh !== this.cv.height) {
      this.cv.width = w;
      this.cv.height = hh;
      this.w = w;
      this.hgt = hh;
      this.ctx.fillStyle = '#020806';
      this.ctx.fillRect(0, 0, w, hh);
      this.x = 0;
      this.prevE = this.prevP = null;
    }
  }

  reset() {
    this.beats = [];
    this.lastBeatCount = -1;
    this.lastT = 0;
    this.x = 0;
    this.prevE = this.prevP = null;
    this.ctx.fillStyle = '#020806';
    this.ctx.fillRect(0, 0, this.cv.width, this.cv.height);
  }

  private valueAt(t: number): { e: number; p: number } {
    let b: Beat | undefined;
    for (let i = this.beats.length - 1; i >= 0; i--)
      if (this.beats[i].t <= t) {
        b = this.beats[i];
        break;
      }
    if (!b) return { e: 0, p: 80 };
    const dt = t - b.t;
    const e = ecgV2(dt, b.rr, b.st, b.pvc);
    // arterial waveform: upstroke ~0.18 s after R, dicrotic notch, diastolic decay
    const pulse = b.pvc ? 0.55 : 1;
    const u = dt - 0.17;
    let p: number;
    if (u < 0) p = b.dia + (b.sys - b.dia) * 0.08 * Math.exp(u * 6);
    else {
      const up = 1 - Math.exp(-u / 0.035);
      const decay = Math.exp(-Math.max(0, u - 0.08) / 0.32);
      const notch = -0.1 * Math.exp(-Math.pow((u - 0.3) / 0.025, 2));
      p = b.dia + (b.sys - b.dia) * pulse * (up * (0.25 + 0.75 * decay) + notch);
    }
    return { e, p };
  }

  update(dt: number) {
    const { sim } = this.store;
    const ph = sim.phys;
    this.resize();
    if (sim.beatCount !== this.lastBeatCount) {
      this.lastBeatCount = sim.beatCount;
      this.beats.push({ t: ph.beatStart, rr: ph.beatRR, pvc: ph.beatPVC, st: ph.st, sys: ph.sys, dia: ph.dia });
      if (this.beats.length > 12) this.beats.shift();
    }
    // sweep: 4 s across the canvas
    const speed = this.w / 4;
    const t1 = sim.t;
    const t0 = Math.min(this.lastT, t1);
    const span = t1 - t0;
    const px = Math.min(this.w, Math.round(span * speed));
    const ctx = this.ctx;
    const H = this.hgt;
    const eY = (e: number) => H * 0.36 - e * (H * 0.022);
    const pY = (p: number) => H * 0.97 - ((p - 40) / 120) * H * 0.34;
    for (let i = 1; i <= px; i++) {
      const t = t0 + (span * i) / px;
      const x = (this.x + 1) % this.w;
      if (x < this.x) {
        this.prevE = this.prevP = null;
      }
      ctx.fillStyle = '#020806';
      ctx.fillRect(x, 0, Math.max(6, Math.round(this.w * 0.025)), H);
      const v = this.valueAt(t);
      const ye = eY(v.e);
      const yp = pY(v.p);
      ctx.lineWidth = Math.max(1.5, H / 70);
      ctx.strokeStyle = '#43f08a';
      ctx.beginPath();
      ctx.moveTo(x - 1, this.prevE ?? ye);
      ctx.lineTo(x, ye);
      ctx.stroke();
      ctx.strokeStyle = '#ff5a5a';
      ctx.beginPath();
      ctx.moveTo(x - 1, this.prevP ?? yp);
      ctx.lineTo(x, yp);
      ctx.stroke();
      this.prevE = ye;
      this.prevP = yp;
      this.x = x;
    }
    this.lastT = t1;
    void dt;

    setText(this.hr, String(Math.round(ph.hr)));
    const map = Math.round(ph.dia + (ph.sys - ph.dia) / 3);
    setText(this.bp, `${Math.round(ph.sys)}/${Math.round(ph.dia)}`);
    setText(this.bpUnit, `(${map}) mmHg`);
    setText(this.spo2, String(Math.round(ph.spo2)));
    setText(this.st, `${ph.st >= 0.05 ? '+' : ''}${ph.st.toFixed(1)}`);
    setText(this.act, String(Math.round(ph.act)));
    this.st.parentElement!.classList.toggle('alarm', ph.st > 1);
    this.bp.parentElement!.classList.toggle('alarm', ph.hypotension);
    this.act.parentElement!.classList.toggle('ok', ph.act >= 250);
    this.hepBtn.classList.toggle('given', sim.heparinGiven);
    setText(this.hepBtn, sim.heparinGiven ? 'Heparin given' : 'Heparin (G)');
    setText(this.sndBtn, this.store.ui.sound ? 'Sound on (N)' : 'Sound off (N)');
    this.sndBtn.classList.toggle('off', !this.store.ui.sound);
    const alarmText = ph.unstable ? 'UNSTABLE - DEFLATE NOW' : ph.hypotension ? 'HYPOTENSION · PVCs' : ph.pain ? 'Chest pain · ST elevation' : '';
    setText(this.alarm, alarmText);
    this.alarm.className = 'alarm-banner' + (ph.unstable ? ' danger' : alarmText ? ' warn' : '');
    this.el.classList.toggle('unstable', ph.unstable);
  }
}
