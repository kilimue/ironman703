/** Debrief modal: score, grade, headline, teaching items, case log; Keep exploring / New case. */
import { h, fmtTime } from './dom';
import type { Debrief } from '../procedure/debrief';
import type { LogEntry } from '../procedure/sim';

export function buildDebriefView(d: Debrief, log: LogEntry[], onKeep: () => void, onNew: () => void): HTMLElement {
  const gradeCls = d.grade.toLowerCase().replace(/\s+/g, '-');
  const r = 46;
  const C = 2 * Math.PI * r;
  const ring = `<svg viewBox="0 0 120 120" class="score-ring" aria-hidden="true"><circle cx="60" cy="60" r="${r}" class="sr-track"/><circle cx="60" cy="60" r="${r}" class="sr-val" stroke-dasharray="${((C * d.score) / 100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 60 60)"/></svg>`;
  const icon = { ok: '✓', warn: '!', bad: '✗' } as const;
  const list = h(
    'ul',
    { class: 'db-items' },
    ...d.items.map((it) =>
      h(
        'li',
        { class: 'db-item ' + it.status },
        h('span', { class: 'db-icon', 'aria-label': it.status }, icon[it.status]),
        h('div', { class: 'db-main' }, h('div', { class: 'db-row' }, h('span', { class: 'db-label' }, it.label), h('span', { class: 'db-value' }, it.value)), h('p', { class: 'db-teach' }, it.teaching)),
      ),
    ),
  );
  const logEl = h(
    'details',
    { class: 'db-log' },
    h('summary', {}, `Case log (${log.length} events)`),
    h('ol', {}, ...log.slice(-80).map((e) => h('li', { class: e.level }, h('span', { class: 't' }, fmtTime(e.t)), ' ', e.text))),
  );
  return h(
    'div',
    { class: 'modal-backdrop', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'db-title' },
    h(
      'div',
      { class: 'modal debrief ' + gradeCls },
      h(
        'div',
        { class: 'db-head' },
        h('div', { class: 'db-score', html: ring + `<span class="sr-num">${d.score}</span>` }),
        h('div', {}, h('div', { class: 'db-kicker' }, 'Debrief'), h('h2', { id: 'db-title', class: 'db-grade' }, d.grade), h('p', { class: 'db-headline' }, d.headline)),
      ),
      list,
      logEl,
      h('p', { class: 'small disclaimer-inline' }, 'Scores reflect this teaching model only - not clinical competence.'),
      h('div', { class: 'modal-actions' }, h('button', { class: 'btn', onclick: () => onKeep() }, 'Keep exploring'), h('button', { class: 'btn primary', onclick: () => onNew() }, 'New case')),
    ),
  );
}
