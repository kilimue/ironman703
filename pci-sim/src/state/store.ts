/** Single in-memory app state (simulation + UI flags) with a tiny subscribe/emit. */
import { createSim, type SimState } from '../procedure/sim';
import type { DemoState } from '../procedure/demo';
import type { HoverInfo } from '../tools/picking';
import type { ViewMode } from '../scene/renderer';

export interface UIState {
  started: boolean;
  paused: boolean;
  view: ViewMode;
  demo: DemoState | null;
  mentorOpen: boolean;
  labels: boolean;
  sound: boolean;
  follow: boolean;
  help: boolean;
  debrief: boolean;
  debriefShownForCompletion: boolean;
  hover: HoverInfo | null;
  /** Fine mode toggled by the on-screen button. */
  fineLatch: boolean;
}

export type StoreEvent = 'tool' | 'view' | 'pause' | 'demo' | 'case' | 'ui' | 'debrief';

export class Store {
  sim: SimState;
  ui: UIState = {
    started: false,
    paused: false,
    view: '3d',
    demo: null,
    mentorOpen: window.innerWidth > 760,
    labels: true,
    sound: true,
    follow: false,
    help: false,
    debrief: false,
    debriefShownForCompletion: false,
    hover: null,
    fineLatch: false,
  };
  private subs = new Map<StoreEvent, Set<() => void>>();

  constructor() {
    this.sim = createSim(Math.floor(Math.random() * 1e9));
  }

  subscribe(ev: StoreEvent, fn: () => void): () => void {
    if (!this.subs.has(ev)) this.subs.set(ev, new Set());
    this.subs.get(ev)!.add(fn);
    return () => this.subs.get(ev)!.delete(fn);
  }

  emit(ev: StoreEvent) {
    this.subs.get(ev)?.forEach((fn) => fn());
  }

  newCase(seed = Math.floor(Math.random() * 1e9)) {
    this.sim = createSim(seed);
    this.ui.debrief = false;
    this.ui.debriefShownForCompletion = false;
    this.ui.demo = null;
    this.ui.paused = false;
    this.ui.hover = null;
    this.emit('case');
  }
}
