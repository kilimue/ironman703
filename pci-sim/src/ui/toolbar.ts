/** Bottom toolbar (1-7) with lock state, rules tooltips and hold behaviour for the fluoro pedal. */
import { h } from './dom';
import { ICONS } from './icons';
import { TOOLS, toolLock, type ToolId } from '../tools/tools';
import type { Store } from '../state/store';

export interface ToolbarActions {
  select: (id: ToolId) => void;
  pedal: (on: boolean) => void;
}

export class Toolbar {
  readonly el: HTMLElement;
  private btns = new Map<ToolId, HTMLButtonElement>();
  private tip: HTMLElement;

  constructor(
    private store: Store,
    a: ToolbarActions,
  ) {
    this.tip = h('div', { class: 'tool-tip', role: 'tooltip' });
    this.el = h('nav', { class: 'toolbar', 'aria-label': 'Tools' });
    for (const t of TOOLS) {
      const b = h(
        'button',
        { class: 'tool', 'data-tool': t.id, 'aria-label': `${t.label} (${t.key})` },
        h('span', { class: 'tool-key' }, t.key),
        h('span', { class: 'tool-icon', html: ICONS[t.id] }),
        h('span', { class: 'tool-label' }, h('span', { class: 'long' }, t.label), h('span', { class: 'short' }, t.short)),
        h('span', { class: 'tool-lock', 'aria-hidden': 'true' }, '🔒'),
      );
      if (t.id === 'fluoro') {
        const on = (e: Event) => {
          e.preventDefault();
          a.pedal(true);
          b.classList.add('held');
        };
        const off = () => {
          a.pedal(false);
          b.classList.remove('held');
        };
        b.addEventListener('pointerdown', on);
        b.addEventListener('pointerup', off);
        b.addEventListener('pointerleave', off);
        b.addEventListener('pointercancel', off);
      } else b.addEventListener('click', () => a.select(t.id));
      b.addEventListener('pointerenter', () => this.showTip(t.id, b));
      b.addEventListener('pointerleave', () => this.tip.classList.remove('show'));
      b.addEventListener('focus', () => this.showTip(t.id, b));
      b.addEventListener('blur', () => this.tip.classList.remove('show'));
      this.btns.set(t.id, b);
      this.el.appendChild(b);
    }
    this.el.appendChild(this.tip);
  }

  private showTip(id: ToolId, b: HTMLElement) {
    const t = TOOLS.find((x) => x.id === id)!;
    const lock = toolLock(id, this.store.sim.snapshot);
    this.tip.innerHTML = '';
    this.tip.append(h('strong', {}, `${t.key} · ${t.label}`), h('p', {}, t.rules));
    if (lock) this.tip.append(h('p', { class: 'lock-reason' }, '🔒 ' + lock));
    const r = b.getBoundingClientRect();
    const pr = this.el.getBoundingClientRect();
    const x = Math.min(Math.max(8, r.left - pr.left + r.width / 2 - 140), pr.width - 288);
    this.tip.style.left = `${x}px`;
    this.tip.classList.add('show');
  }

  update() {
    const { sim } = this.store;
    for (const [id, b] of this.btns) {
      const lock = toolLock(id, sim.snapshot);
      b.classList.toggle('locked', !!lock);
      b.classList.toggle('active', sim.tool === id);
      if (id === 'fluoro') b.classList.toggle('beam', sim.xray.active);
      b.setAttribute('aria-disabled', lock ? 'true' : 'false');
    }
  }
}
