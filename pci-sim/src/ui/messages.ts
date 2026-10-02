/** Feedback messages above the toolbar (info / ok / warn / danger) with repeat suppression. */
import type { Msg } from '../physics/messages';
import { h } from './dom';

export class Messages {
  readonly el = h('div', { class: 'messages', 'aria-live': 'polite', role: 'status' });
  private last = new Map<string, number>();

  push(m: Msg, now = performance.now()) {
    const key = m.key ?? m.text;
    const prev = this.last.get(key);
    const quiet = m.level === 'danger' ? 3000 : 6000;
    if (prev !== undefined && now - prev < quiet) {
      // refresh the existing bubble instead of stacking a repeat
      this.last.set(key, now);
      const existing = [...this.el.children].find((c) => (c as HTMLElement).dataset.key === key) as HTMLElement | undefined;
      if (existing) existing.dataset.until = String(now + 4000);
      return;
    }
    this.last.set(key, now);
    const el = h('div', { class: `msg ${m.level}`, 'data-key': key, 'data-until': String(now + (m.level === 'danger' ? 6000 : 4200)) }, m.text);
    this.el.appendChild(el);
    while (this.el.children.length > 3) this.el.firstElementChild!.remove();
  }

  tick(now = performance.now()) {
    for (const c of [...this.el.children] as HTMLElement[]) {
      const until = Number(c.dataset.until);
      if (now > until && !c.classList.contains('out')) {
        c.classList.add('out');
        setTimeout(() => c.remove(), 400);
      }
    }
  }

  clear() {
    this.el.innerHTML = '';
    this.last.clear();
  }
}
