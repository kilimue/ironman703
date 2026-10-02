/** Device panel: rotation dial, tip location, branch hint, resistance; sizes, pressure gauge, margins; QCA. */
import { h, setText } from './dom';
import { BALLOON, STENT, WIRE } from '../config/anatomy';
import { angDiff, wrapDeg } from '../math/vec3';
import { toLocal } from '../physics/route';
import { wireHint } from '../physics/wire';
import { currentDiameter, specOf, type CathKind } from '../physics/balloon';
import { qcaNow, setCathSize, type SimState } from '../procedure/sim';
import type { Store } from '../state/store';
import { toolDef, type ToolId } from '../tools/tools';

export interface HoldState {
  advance: number;
  rotate: number;
  inflate: boolean;
}

const SVGNS = 'http://www.w3.org/2000/svg';
const svg = (tag: string, attrs: Record<string, string | number>) => {
  const el = document.createElementNS(SVGNS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  return el;
};

/** Polar point on a dial with 0 deg at the top, clockwise positive. */
const polar = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)];

function wedge(cx: number, cy: number, r: number, a0: number, a1: number) {
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${large} 1 ${x1},${y1} Z`;
}

function guideLocation(sim: SimState): string {
  const g = sim.guide;
  if (g.s <= 0) return 'Not inserted (at the wrist sheath)';
  if (g.engaged) return 'Seated in the left main ostium';
  if (sim.snapshot.guideAtRoot) return 'Aortic root';
  const loc = toLocal(sim.access, g.s);
  return `${sim.anat.vessels[loc.vessel].name}`;
}

export class DevicePanel {
  readonly el: HTMLElement;
  private body: HTMLElement;
  private title: HTMLElement;
  private shownTool: ToolId | null = null;
  private refs: Record<string, HTMLElement | SVGElement> = {};
  private controls: HTMLElement;
  private collapsed = false;

  constructor(
    private store: Store,
    private hold: HoldState,
    private actions: { deflate: () => void; fineToggle: () => void; inject: () => void },
  ) {
    this.title = h('span', {}, 'Device');
    this.body = h('div', { class: 'dp-body' });
    this.controls = this.buildControls();
    this.el = h(
      'section',
      { class: 'device-panel panel', 'aria-label': 'Device panel' },
      h(
        'button',
        {
          class: 'panel-title dp-toggle',
          onclick: () => {
            this.collapsed = !this.collapsed;
            this.el.classList.toggle('collapsed', this.collapsed);
          },
        },
        this.title,
        h('span', { class: 'chev' }, '▾'),
      ),
      h('div', { class: 'dp-content' }, this.body, this.controls),
    );
  }

  private holdBtn(label: string, aria: string, on: () => void, off: () => void, cls = ''): HTMLButtonElement {
    const b = h('button', { class: 'hold ' + cls, 'aria-label': aria, title: aria }, label);
    const start = (e: Event) => {
      e.preventDefault();
      b.classList.add('held');
      on();
    };
    const end = () => {
      b.classList.remove('held');
      off();
    };
    b.addEventListener('pointerdown', start);
    b.addEventListener('pointerup', end);
    b.addEventListener('pointerleave', end);
    b.addEventListener('pointercancel', end);
    b.addEventListener('contextmenu', (e) => e.preventDefault());
    return b;
  }

  private buildControls(): HTMLElement {
    const hd = this.hold;
    const fine = h('button', { class: 'hold fine', title: 'Fine control (Shift)', 'aria-pressed': 'false', onclick: () => this.actions.fineToggle() }, 'Fine');
    this.refs.fine = fine;
    const rot = h(
      'div',
      { class: 'ctl-group rot' },
      this.holdBtn('⟲', 'Rotate counter-clockwise (A)', () => (hd.rotate = -1), () => (hd.rotate = 0)),
      this.holdBtn('⟳', 'Rotate clockwise (D)', () => (hd.rotate = 1), () => (hd.rotate = 0)),
    );
    const infl = h(
      'div',
      { class: 'ctl-group infl' },
      this.holdBtn('Inflate', 'Hold to inflate (E)', () => (hd.inflate = true), () => (hd.inflate = false), 'inflate'),
      h('button', { class: 'hold deflate', title: 'Deflate (Q)', onclick: () => this.actions.deflate() }, 'Deflate'),
    );
    this.refs.rotGroup = rot;
    this.refs.inflGroup = infl;
    return h(
      'div',
      { class: 'dp-controls' },
      h(
        'div',
        { class: 'ctl-group move' },
        this.holdBtn('▲', 'Advance (W)', () => (hd.advance = 1), () => (hd.advance = 0)),
        this.holdBtn('▼', 'Retract (S)', () => (hd.advance = -1), () => (hd.advance = 0)),
      ),
      rot,
      infl,
      fine,
    );
  }

  private build(tool: ToolId) {
    this.refs = { fine: this.refs.fine, rotGroup: this.refs.rotGroup, inflGroup: this.refs.inflGroup };
    this.body.innerHTML = '';
    setText(this.title, toolDef(tool).label);
    const showRot = tool === 'guide' || tool === 'wire';
    const showInfl = tool === 'balloon' || tool === 'stent';
    (this.refs.rotGroup as HTMLElement).style.display = showRot ? '' : 'none';
    (this.refs.inflGroup as HTMLElement).style.display = showInfl ? '' : 'none';
    this.controls.style.display = tool === 'measure' ? 'none' : '';
    if (tool === 'guide' || tool === 'wire') this.buildDial(tool);
    else if (tool === 'balloon' || tool === 'stent') this.buildCath(tool);
    else if (tool === 'measure') this.buildQCA();
  }

  private buildDial(tool: 'guide' | 'wire') {
    const s = svg('svg', { viewBox: '0 0 120 120', class: 'dial', role: 'img', 'aria-label': 'Tip rotation dial' });
    s.appendChild(svg('circle', { cx: 60, cy: 60, r: 52, class: 'dial-face' }));
    for (let a = 0; a < 360; a += 30) {
      const [x0, y0] = polar(60, 60, 48, a);
      const [x1, y1] = polar(60, 60, 52, a);
      s.appendChild(svg('line', { x1: x0, y1: y0, x2: x1, y2: y1, class: 'dial-tick' }));
    }
    const g = svg('g', {});
    s.appendChild(g);
    const arrow = svg('g', { class: 'dial-arrow' });
    arrow.appendChild(svg('line', { x1: 60, y1: 60, x2: 60, y2: 16, 'stroke-width': 3.5 }));
    arrow.appendChild(svg('path', { d: 'M60 9 L66 20 L54 20 Z' }));
    s.appendChild(arrow);
    s.appendChild(svg('circle', { cx: 60, cy: 60, r: 4, class: 'dial-hub' }));
    this.refs.dialG = g;
    this.refs.arrow = arrow;
    const loc = h('div', { class: 'dp-loc' });
    const status = h('div', { class: 'dp-status' });
    const hint = h('div', { class: 'dp-hint' });
    this.refs.loc = loc;
    this.refs.status = status;
    this.refs.hint = hint;
    const side = h('div', { class: 'dp-side' }, loc, status, hint);
    if (tool === 'wire') {
      const bar = h('span', { class: 'meter-bar' });
      this.refs.meter = bar;
      side.appendChild(h('div', { class: 'meter', title: 'Lesion resistance' }, h('span', { class: 'meter-label' }, 'Resistance'), h('span', { class: 'meter-track' }, bar)));
    }
    this.body.append(h('div', { class: 'dp-dialrow' }, s, side));
  }

  private buildCath(kind: CathKind) {
    const sp = specOf(kind);
    const chips = (vals: number[], which: 'd' | 'l') =>
      h(
        'div',
        { class: 'chips', role: 'group', 'aria-label': which === 'd' ? 'Diameter' : 'Length' },
        h('span', { class: 'chips-label' }, which === 'd' ? 'Ø' : 'L'),
        ...vals.map((v) =>
          h(
            'button',
            {
              class: 'chip',
              'data-v': v,
              'data-k': which,
              onclick: () => {
                const sim = this.store.sim;
                const c = kind === 'balloon' ? sim.balloon : sim.stent;
                setCathSize(sim, kind, which === 'd' ? v : c.d, which === 'l' ? v : c.l);
              },
            },
            which === 'd' ? v.toFixed(v % 1 && (v * 100) % 10 ? 2 : 1) : `${v}`,
          ),
        ),
        h('span', { class: 'chips-unit' }, 'mm'),
      );
    const dChips = chips(sp.diameters, 'd');
    const lChips = chips(sp.lengths, 'l');
    this.refs.dChips = dChips;
    this.refs.lChips = lChips;
    // gauge
    const max = sp.rbp + sp.ruptureMargin;
    const G = svg('svg', { viewBox: '0 0 140 84', class: 'gauge', role: 'img', 'aria-label': 'Pressure gauge' });
    const arcPath = (a0: number, a1: number, r: number) => {
      const p0 = polar(70, 74, r, -90 + (a0 / max) * 180);
      const p1 = polar(70, 74, r, -90 + (a1 / max) * 180);
      return `M${p0[0]},${p0[1]} A${r},${r} 0 0 1 ${p1[0]},${p1[1]}`;
    };
    G.appendChild(svg('path', { d: arcPath(0, max, 60), class: 'g-track' }));
    G.appendChild(svg('path', { d: arcPath(sp.rbp, max, 60), class: 'g-danger' }));
    for (let p = 0; p <= max; p += 2) {
      const [x0, y0] = polar(70, 74, 54, -90 + (p / max) * 180);
      const [x1, y1] = polar(70, 74, 60, -90 + (p / max) * 180);
      G.appendChild(svg('line', { x1: x0, y1: y0, x2: x1, y2: y1, class: 'g-tick' }));
    }
    const tick = (p: number, cls: string, label: string) => {
      const [x0, y0] = polar(70, 74, 46, -90 + (p / max) * 180);
      const [x1, y1] = polar(70, 74, 66, -90 + (p / max) * 180);
      G.appendChild(svg('line', { x1: x0, y1: y0, x2: x1, y2: y1, class: cls }));
      const [tx, ty] = polar(70, 74, 38, -90 + (p / max) * 180);
      const t = svg('text', { x: tx, y: ty + 3, class: cls + '-t', 'text-anchor': 'middle' });
      t.textContent = label;
      G.appendChild(t);
    };
    tick(sp.nominal, 'g-nom', 'NOM');
    tick(sp.rbp, 'g-rbp', 'RBP');
    const needle = svg('line', { x1: 70, y1: 74, x2: 70, y2: 20, class: 'g-needle' });
    G.appendChild(needle);
    G.appendChild(svg('circle', { cx: 70, cy: 74, r: 4, class: 'dial-hub' }));
    this.refs.needle = needle;
    const num = (k: string, label: string, unit: string) => {
      const v = h('span', { class: 'dp-val' }, '--');
      this.refs[k] = v;
      return h('div', { class: 'dp-kv' }, h('span', { class: 'dp-k' }, label), v, h('span', { class: 'dp-u' }, unit));
    };
    const status = h('div', { class: 'dp-status' });
    const margins = h('div', { class: 'dp-margins' });
    this.refs.status = status;
    this.refs.margins = margins;
    this.body.append(
      dChips,
      lChips,
      h(
        'div',
        { class: 'dp-gaugerow' },
        G,
        h('div', { class: 'dp-kvs' }, num('press', 'Pressure', 'atm'), num('diam', 'Achieved Ø', 'mm'), num('timer', 'Inflation', 's')),
      ),
      margins,
      status,
    );
  }

  private buildQCA() {
    const row = (k: string, label: string, unit: string) => {
      const v = h('span', { class: 'dp-val' }, '--');
      this.refs[k] = v;
      return h('div', { class: 'dp-kv' }, h('span', { class: 'dp-k' }, label), v, h('span', { class: 'dp-u' }, unit));
    };
    const hint = h('div', { class: 'dp-hint' });
    this.refs.hint = hint;
    this.body.append(
      h('div', { class: 'qca-title' }, 'QCA · mid LAD'),
      h('div', { class: 'qca-grid' }, row('ref', 'Reference Ø', 'mm'), row('mld', 'MLD', 'mm'), row('ds', 'Diameter stenosis', '%'), row('len', 'Lesion length', 'mm')),
      hint,
    );
  }

  update() {
    const { sim, ui } = this.store;
    if (this.shownTool !== sim.tool) {
      this.shownTool = sim.tool;
      this.build(sim.tool);
    }
    (this.refs.fine as HTMLElement).classList.toggle('on', ui.fineLatch);
    (this.refs.fine as HTMLElement).setAttribute('aria-pressed', String(ui.fineLatch));
    switch (sim.tool) {
      case 'guide':
        return this.updateGuide(sim);
      case 'wire':
        return this.updateWire(sim);
      case 'balloon':
      case 'stent':
        return this.updateCath(sim, sim.tool);
      case 'measure':
        return this.updateQCA(sim);
    }
  }

  private setMarkers(marks: { deg: number; label: string; cls: string; wedge?: number }[]) {
    const g = this.refs.dialG as SVGGElement;
    const key = marks.map((m) => `${m.label}${Math.round(m.deg)}${m.cls}`).join('|');
    if (g.dataset.key === key) return;
    g.dataset.key = key;
    g.innerHTML = '';
    for (const m of marks) {
      if (m.wedge) g.appendChild(svg('path', { d: wedge(60, 60, 50, m.deg - m.wedge, m.deg + m.wedge), class: 'dial-wedge ' + m.cls }));
      const [x, y] = polar(60, 60, 40, m.deg);
      g.appendChild(svg('circle', { cx: x, cy: y, r: 7.5, class: 'dial-mark ' + m.cls }));
      const t = svg('text', { x, y: y + 3.2, 'text-anchor': 'middle', class: 'dial-mark-t' });
      t.textContent = m.label;
      g.appendChild(t);
    }
  }

  private updateGuide(sim: SimState) {
    const g = sim.guide;
    const root = sim.anat.root;
    const off = (a: number) => wrapDeg(a - root.leftCusp);
    this.setMarkers([
      { deg: 0, label: 'L', cls: 'left', wedge: 25 },
      { deg: off(root.rightCusp), label: 'R', cls: 'right' },
      { deg: off(root.nonCusp), label: 'N', cls: 'non' },
    ]);
    (this.refs.arrow as SVGGElement).setAttribute('transform', `rotate(${off(g.rot).toFixed(1)} 60 60)`);
    const s = sim.snapshot;
    setText(this.refs.loc as HTMLElement, `${guideLocation(sim)}${g.s > 0 && !s.guideAtRoot ? ` · ${Math.round(g.s)} mm` : ''}`);
    const status = g.engaged
      ? 'Engaged in the LM ✓'
      : s.guideAtRoot
        ? s.guideFacingLeft
          ? 'Facing the LEFT cusp - advance gently'
          : s.guideFacingRight
            ? 'Facing the RIGHT cusp (RCA)'
            : `Tip ${Math.round(Math.abs(s.guideCuspOffset))}° from the left cusp`
        : g.s > 0
          ? 'Advancing'
          : 'Ready';
    setText(this.refs.status as HTMLElement, status);
    (this.refs.status as HTMLElement).className = 'dp-status' + (g.engaged || (s.guideAtRoot && s.guideFacingLeft) ? ' ok' : '');
    setText(this.refs.hint as HTMLElement, s.guideAtRoot || g.engaged ? 'Dial: L/R/N = left, right, non-coronary cusps. The arrow is the tip direction.' : 'Rotation matters only at the aortic root.');
  }

  private updateWire(sim: SimState) {
    const w = sim.wire;
    const hint = wireHint(sim.anat, w);
    const marks: { deg: number; label: string; cls: string; wedge?: number }[] = [];
    const last = w.chain[w.chain.length - 1];
    const ahead = sim.anat.branches.filter((b) => b.parent === last);
    if (hint.next) {
      if (!hint.next.side) {
        for (const b of ahead.filter((b) => !b.side))
          marks.push({ deg: wrapDeg(b.angle), label: b.child === 'LAD' ? 'LAD' : 'Cx', cls: b.child === 'LAD' ? 'left' : 'right' });
      } else {
        const b = ahead.find((x) => x.side && sim.anat.vessels[x.child].name === hint.next!.name);
        if (b) marks.push({ deg: wrapDeg(b.angle), label: b.child, cls: 'right', wedge: WIRE.branchCapture });
      }
    }
    this.setMarkers(marks);
    (this.refs.arrow as SVGGElement).setAttribute('transform', `rotate(${wrapDeg(w.rot).toFixed(1)} 60 60)`);
    const tipMm = w.pos > 0 ? ` · ${w.pos.toFixed(0)} mm` : '';
    setText(this.refs.loc as HTMLElement, hint.location + tipMm);
    let st = '';
    let cls = 'dp-status';
    if (hint.next) {
      const n = hint.next;
      if (!n.side) {
        st = `LM bifurcation in ${n.dist.toFixed(0)} mm → tip will go to the ${n.enter ? 'LAD ✓' : 'circumflex ✗'}`;
        cls += n.enter ? ' ok' : ' warn';
      } else {
        st = `${n.name.replace(/ \(.*\)/, '')} in ${n.dist.toFixed(0)} mm → ${n.enter ? 'tip will ENTER it ✗' : 'stays in the LAD ✓'}`;
        cls += n.enter ? ' warn' : ' ok';
      }
    } else if (sim.snapshot.wireDistal) {
      st = 'Parked in the distal LAD ✓';
      cls += ' ok';
    } else if (w.buckle > 0.2) {
      st = 'Buckling! Slow down';
      cls += ' warn';
    }
    setText(this.refs.status as HTMLElement, st);
    (this.refs.status as HTMLElement).className = cls;
    setText(this.refs.hint as HTMLElement, hint.next && !hint.next.side && !hint.next.enter ? `Rotate ${Math.round(Math.abs(hint.next.angleOff))}° ${hint.next.angleOff > 0 ? 'clockwise (D)' : 'counter-clockwise (A)'}` : '');
    const bar = this.refs.meter as HTMLElement;
    if (bar) {
      bar.style.width = `${Math.round(Math.max(w.resistance * 70, w.buckle * 100))}%`;
      bar.classList.toggle('high', w.buckle > 0.2);
    }
  }

  private updateCath(sim: SimState, kind: CathKind) {
    const c = kind === 'balloon' ? sim.balloon : sim.stent;
    const sp = specOf(kind);
    const out = c.pos > 0;
    for (const [k, ref] of [
      ['d', this.refs.dChips],
      ['l', this.refs.lChips],
    ] as const) {
      for (const b of [...(ref as HTMLElement).querySelectorAll('.chip')] as HTMLButtonElement[]) {
        const v = Number(b.dataset.v);
        b.classList.toggle('sel', (k === 'd' ? c.d : c.l) === v);
        b.disabled = out || c.pressure > 0;
      }
    }
    const max = sp.rbp + sp.ruptureMargin;
    const ang = -90 + (Math.min(max, c.pressure) / max) * 180;
    (this.refs.needle as SVGLineElement).setAttribute('transform', `rotate(${(ang + 90 - 90).toFixed(1)} 70 74)`);
    (this.refs.needle as SVGLineElement).classList.toggle('over', c.pressure > sp.rbp);
    setText(this.refs.press as HTMLElement, c.pressure.toFixed(1));
    setText(this.refs.diam as HTMLElement, c.pressure > 0 ? currentDiameter(c).toFixed(2) : '-');
    const inflT = c.inflStart !== null ? sim.t - c.inflStart : 0;
    setText(this.refs.timer as HTMLElement, c.inflStart !== null ? inflT.toFixed(0) : '-');
    (this.refs.timer as HTMLElement).classList.toggle('warn', inflT > 30);
    const m = kind === 'balloon' ? sim.snapshot.balloonMargins : sim.snapshot.stentMargins;
    const mEl = this.refs.margins as HTMLElement;
    if (!out) setText(mEl, `In the guide · ${c.d.toFixed(2)} × ${c.l} mm${kind === 'stent' ? ' DES' : ''} - choose the size now`);
    else if (!m) setText(mEl, 'Not over the lesion yet');
    else {
      const f = (x: number) => `${x >= 0 ? '+' : ''}${x.toFixed(1)} mm`;
      mEl.innerHTML = '';
      const cls = (x: number) => (x >= 1.5 ? 'good' : x >= 0 ? 'thin' : 'miss');
      mEl.append(
        h('span', { class: 'm-label' }, 'Margins'),
        h('span', { class: 'm ' + cls(m.prox) }, `prox ${f(m.prox)}`),
        h('span', { class: 'm ' + cls(m.dist) }, `dist ${f(m.dist)}`),
      );
    }
    let status = '';
    if (c.ruptured) status = 'RUPTURED - withdraw to replace';
    else if (kind === 'stent' && c.deployed) status = c.pressure > 0 ? 'Stent deployed - deflate (Q)' : 'Stent deployed · withdraw the delivery balloon';
    else if (c.pressure > sp.rbp) status = `Above RBP (${sp.rbp} atm)!`;
    else if (c.pressure > 0) status = c.deflating ? 'Deflating…' : 'Inflated - flow stopped beyond the balloon';
    else if (out) status = `Over the wire · tip at ${c.pos.toFixed(0)} mm`;
    else status = `Nominal ${sp.nominal} atm · RBP ${sp.rbp} atm`;
    setText(this.refs.status as HTMLElement, status);
    (this.refs.status as HTMLElement).className = 'dp-status' + (c.ruptured || c.pressure > sp.rbp ? ' danger' : c.pressure > 0 ? ' warn' : '');
    void BALLOON;
    void STENT;
  }

  private updateQCA(sim: SimState) {
    const q = qcaNow(sim);
    setText(this.refs.ref as HTMLElement, q.referenceD.toFixed(2));
    setText(this.refs.mld as HTMLElement, q.mld.toFixed(2));
    setText(this.refs.ds as HTMLElement, String(Math.round(q.ds * 100)));
    setText(this.refs.len as HTMLElement, q.lesionLength > 0 ? q.lesionLength.toFixed(1) : '-');
    const hv = this.store.ui.hover;
    setText(
      this.refs.hint as HTMLElement,
      hv
        ? `${hv.name}: Ø ${hv.diameter.toFixed(2)} mm (ref ${hv.reference.toFixed(2)}, ${Math.round(hv.stenosis * 100)}% DS)`
        : this.store.ui.view === '3d'
          ? 'Hover a coronary in the 3D view for its local diameter.'
          : 'Switch to the 3D view (Tab) to hover vessels.',
    );
    void angDiff;
  }

  reset() {
    this.shownTool = null;
  }
}
