/** Synthetic V2 ECG (values in mm at 10 mm/mV). Pure. */

const g = (t: number, c: number, w: number, a: number) => a * Math.exp(-((t - c) * (t - c)) / (2 * w * w));
const smooth = (e0: number, e1: number, x: number) => {
  const u = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return u * u * (3 - 2 * u);
};

/**
 * ECG lead V2 at time `t` seconds after the beat start.
 * Normal beat: P, small r, deep S, ST segment raised by `st` mm, T wave (hyperacute with ischaemia).
 * PVC: no P wave, wide bizarre QRS with discordant T.
 */
export function ecgV2(t: number, rr: number, st: number, pvc: boolean): number {
  if (t < 0) return 0;
  if (pvc) {
    return g(t, 0.08, 0.035, 13) + g(t, 0.16, 0.04, -7) + g(t, 0.36, 0.08, -4.5);
  }
  // scale late waves a little with heart rate
  const k = Math.min(1, Math.max(0.7, rr / 0.9));
  const p = g(t, 0.06, 0.022, 1.2);
  const q = g(t, 0.155, 0.008, -0.6);
  const r = g(t, 0.172, 0.011, 5.5);
  const s = g(t, 0.198, 0.013, -11);
  const stSeg = st * smooth(0.215, 0.245, t) * (1 - smooth(0.37 * k + 0.06, 0.5 * k + 0.08, t));
  const tw = g(t, 0.38 * k + 0.05, 0.055 * k, 3.6 + st * 0.6);
  return p + q + r + s + stSeg + tw;
}
