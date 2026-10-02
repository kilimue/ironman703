/** Feedback messages shown above the toolbar. */
export type MsgLevel = 'info' | 'ok' | 'warn' | 'danger';
export interface Msg {
  level: MsgLevel;
  text: string;
  /** Repeats with the same key are suppressed for a while. */
  key?: string;
}
