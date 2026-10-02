/** Collapsible mentor: stage title, goal, sub-task checkboxes, progress, calm hint, "Why this step?". */
import { h, setText } from './dom';
import { STAGES, mentorHint, stageProgressPct, taskKey } from '../procedure/stages';
import type { Store } from '../state/store';

export class Mentor {
  readonly el: HTMLElement;
  private title: HTMLElement;
  private goal: HTMLElement;
  private tasks: HTMLElement;
  private prog: HTMLElement;
  private progText: HTMLElement;
  private hint: HTMLElement;
  private why: HTMLDetailsElement;
  private whyText: HTMLElement;
  private badge: HTMLElement;
  private stageShown = -1;

  constructor(
    private store: Store,
    toggle: () => void,
  ) {
    this.title = h('h3', { class: 'mentor-title' });
    this.goal = h('p', { class: 'mentor-goal' });
    this.tasks = h('ul', { class: 'mentor-tasks' });
    this.prog = h('span', { class: 'mentor-prog-bar' });
    this.progText = h('span', { class: 'mentor-prog-text' });
    this.hint = h('p', { class: 'mentor-hint', 'aria-live': 'polite' });
    this.whyText = h('p', {});
    this.why = h('details', { class: 'mentor-why' }, h('summary', {}, 'Why this step?'), this.whyText);
    this.badge = h('span', { class: 'demo-chip' }, 'DEMO');
    this.el = h(
      'section',
      { class: 'mentor panel', 'aria-label': 'Mentor' },
      h('button', { class: 'panel-title mentor-toggle', 'aria-expanded': 'true', onclick: () => toggle() }, h('span', {}, 'Mentor'), this.badge, h('span', { class: 'chev' }, '▾')),
      h(
        'div',
        { class: 'mentor-body' },
        this.title,
        this.goal,
        this.tasks,
        h('div', { class: 'mentor-prog' }, h('span', { class: 'mentor-prog-track' }, this.prog), this.progText),
        this.hint,
        this.why,
      ),
    );
  }

  update() {
    const { sim, ui } = this.store;
    this.el.classList.toggle('collapsed', !ui.mentorOpen);
    (this.el.querySelector('.mentor-toggle') as HTMLElement).setAttribute('aria-expanded', String(ui.mentorOpen));
    const demoOn = !!ui.demo && !ui.demo.done;
    this.badge.style.display = ui.demo ? '' : 'none';
    const p = sim.stages;
    const i = Math.min(p.current, STAGES.length - 1);
    const st = STAGES[i];
    const allDone = p.current >= STAGES.length;
    if (this.stageShown !== p.current) {
      this.stageShown = p.current;
      setText(this.title, allDone ? 'Case complete' : `Stage ${st.id} of ${STAGES.length}: ${st.title}`);
      setText(this.goal, allDone ? 'All six stages done. Review the result, then open the debrief (End case).' : st.goal);
      setText(this.whyText, st.why);
      this.tasks.innerHTML = '';
      for (const t of st.tasks) {
        this.tasks.appendChild(h('li', { 'data-task': t.id }, h('span', { class: 'box', 'aria-hidden': 'true' }), h('span', {}, t.label)));
      }
    }
    for (const li of [...this.tasks.children] as HTMLElement[]) {
      li.classList.toggle('done', !!p.done[taskKey(st.id, li.dataset.task!)]);
    }
    const pct = allDone ? 100 : stageProgressPct(p, i);
    this.prog.style.width = `${pct}%`;
    setText(this.progText, `${pct}%`);
    const text = demoOn || (ui.demo && ui.demo.done) ? ui.demo!.narration : mentorHint(sim.snapshot);
    setText(this.hint, text);
    this.hint.classList.toggle('demo', !!ui.demo);
    this.hint.classList.toggle('alert', sim.snapshot.unstable || sim.snapshot.dissectionUnsealed);
  }

  reset() {
    this.stageShown = -1;
  }
}
