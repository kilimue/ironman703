/** Left checklist of the six stages with completion times; flashes on completion. */
import { h, setText, fmtTime } from './dom';
import { STAGES, stageProgressPct } from '../procedure/stages';
import type { Store } from '../state/store';

export class Checklist {
  readonly el: HTMLElement;
  private rows: { li: HTMLElement; time: HTMLElement; bar: HTMLElement }[] = [];
  private lastCurrent = 0;

  constructor(private store: Store) {
    const ol = h('ol', { class: 'stages' });
    STAGES.forEach((s, i) => {
      const time = h('span', { class: 'stage-time' }, '');
      const bar = h('span', { class: 'stage-bar' });
      const li = h(
        'li',
        { class: 'stage', title: s.goal },
        h('span', { class: 'stage-num' }, String(s.id)),
        h('span', { class: 'stage-title' }, s.title),
        time,
        h('span', { class: 'stage-track' }, bar),
      );
      this.rows.push({ li, time, bar });
      ol.appendChild(li);
      void i;
    });
    this.el = h('aside', { class: 'checklist panel', 'aria-label': 'Procedure checklist' }, h('h2', { class: 'panel-title' }, 'Procedure'), ol);
  }

  update() {
    const p = this.store.sim.stages;
    this.rows.forEach((r, i) => {
      const done = p.completedAt[i] !== null;
      r.li.classList.toggle('done', done);
      r.li.classList.toggle('current', i === p.current);
      setText(r.time, done ? fmtTime(p.completedAt[i]!) : i === p.current ? `${stageProgressPct(p, i)}%` : '');
      r.bar.style.width = `${done ? 100 : i === p.current ? stageProgressPct(p, i) : 0}%`;
    });
    if (p.current > this.lastCurrent) {
      const li = this.rows[p.current - 1]?.li;
      if (li) {
        li.classList.remove('flash');
        void li.offsetWidth;
        li.classList.add('flash');
      }
    }
    this.lastCurrent = p.current;
  }

  reset() {
    this.lastCurrent = 0;
  }
}
