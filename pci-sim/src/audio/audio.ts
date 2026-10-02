/** Monitor sounds via Web Audio: QRS beep (pitch tracks SpO2) and a two-tone alarm. */
export class MonitorAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  enabled = true;
  private alarmOn = false;
  private nextAlarm = 0;

  /** Must be called from a user gesture (start button). */
  unlock() {
    if (this.ctx) {
      void this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.18;
    this.master.connect(this.ctx.destination);
  }

  private tone(freq: number, start: number, dur: number, vol = 1, type: OscillatorType = 'sine') {
    if (!this.ctx || !this.master) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(vol, start + 0.005);
    g.gain.setValueAtTime(vol, start + dur - 0.02);
    g.gain.linearRampToValueAtTime(0, start + dur);
    o.connect(g).connect(this.master);
    o.start(start);
    o.stop(start + dur + 0.02);
  }

  /** QRS beep: higher pitch with higher saturation (like a real monitor). */
  beep(spo2: number) {
    if (!this.enabled || !this.ctx) return;
    const f = 880 - (100 - spo2) * 22;
    this.tone(f, this.ctx.currentTime + 0.01, 0.07, 0.6);
  }

  setAlarm(on: boolean) {
    this.alarmOn = on;
  }

  /** Call every frame. */
  tick() {
    if (!this.ctx || !this.enabled || !this.alarmOn) return;
    const now = this.ctx.currentTime;
    if (now >= this.nextAlarm) {
      for (let i = 0; i < 2; i++) {
        this.tone(988, now + i * 0.5, 0.22, 0.55, 'square');
        this.tone(784, now + i * 0.5 + 0.25, 0.22, 0.55, 'square');
      }
      this.nextAlarm = now + 2.2;
    }
  }
}
