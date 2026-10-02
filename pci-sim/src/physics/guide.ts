/** 6F guide catheter on the access route, with a pre-shaped tip that must face the left cusp. Pure. */
import { GUIDE } from '../config/anatomy';
import { angDiff, wrapDeg } from '../math/vec3';
import type { RootInfo } from '../anatomy/vesselTree';
import type { Msg } from './messages';

export interface GuideState {
  /** Arc length along the access route (0 = not inserted, routeLength = aortic root). */
  s: number;
  /** Tip rotation in the aortic-root frame (deg). */
  rot: number;
  engaged: boolean;
  engagedRot: number;
  /** Gentle push accumulated at the root (mm). */
  push: number;
  speed: number;
  popOuts: number;
}

export function makeGuide(root: RootInfo): GuideState {
  return { s: 0, rot: wrapDeg(root.leftCusp + GUIDE.initialOffset), engaged: false, engagedRot: 0, push: 0, speed: 0, popOuts: 0 };
}

export interface GuideInput {
  delta: number;
  dRot: number;
}
export interface GuideContext {
  dt: number;
  routeLength: number;
  root: RootInfo;
  wireOut: boolean;
}

export const atRoot = (g: GuideState, routeLength: number) => g.s >= routeLength - 0.01;
export const facingLeft = (g: GuideState, root: RootInfo) => angDiff(g.rot, root.leftCusp) <= GUIDE.engageTolerance;
export const facingRight = (g: GuideState, root: RootInfo) => angDiff(g.rot, root.rightCusp) <= GUIDE.engageTolerance;

export function stepGuide(g0: GuideState, inp: GuideInput, ctx: GuideContext): { guide: GuideState; msgs: Msg[]; engagedNow?: boolean; poppedOut?: boolean } {
  const g = { ...g0 };
  const msgs: Msg[] = [];
  let engagedNow = false;
  let poppedOut = false;
  if (ctx.wireOut && (inp.delta !== 0 || inp.dRot !== 0)) {
    msgs.push({ level: 'warn', text: 'Retract the wire into the guide before moving the guide.', key: 'guide-wire-out' });
    g.speed *= 0.8;
    return { guide: g, msgs };
  }
  // rotation
  if (inp.dRot !== 0) {
    g.rot = wrapDeg(g.rot + inp.dRot);
    if (g.engaged && angDiff(g.rot, g.engagedRot) > GUIDE.popOutTorque) {
      g.engaged = false;
      g.push = 0;
      g.popOuts++;
      poppedOut = true;
      msgs.push({ level: 'warn', text: 'Too much torque - the guide popped out of the left main. Re-align and re-engage gently.', key: 'popout' });
    }
  }
  // movement
  const speed = Math.abs(inp.delta) / Math.max(ctx.dt, 1e-4);
  g.speed = g.speed + (speed - g.speed) * Math.min(1, ctx.dt / 0.15);
  if (inp.delta !== 0) {
    if (g.engaged) {
      if (inp.delta > 0) {
        msgs.push({ level: 'info', text: 'Guide is seated in the LM - pushing further risks deep intubation.', key: 'seated' });
      } else {
        g.engaged = false;
        g.push = 0;
        msgs.push({ level: 'info', text: 'Guide disengaged from the left main.', key: 'disengaged' });
      }
    } else {
      const L = ctx.routeLength;
      const ns = g.s + inp.delta;
      if (inp.delta > 0 && ns >= L) {
        const extra = ns - L;
        g.s = L;
        if (facingLeft(g, ctx.root)) {
          if (speed <= GUIDE.gentleSpeed) {
            g.push += extra;
            if (g.push >= GUIDE.seatPush) {
              g.engaged = true;
              g.engagedRot = g.rot;
              g.push = 0;
              engagedNow = true;
              msgs.push({ level: 'ok', text: 'Guide engaged in the left main ostium. Check pressure trace & take an angiogram.', key: 'engaged' });
            }
          } else {
            g.push = 0;
            msgs.push({ level: 'warn', text: 'Too fast to seat the guide - advance gently (hold Shift).', key: 'seat-fast' });
          }
        } else if (extra < 0.1) {
          g.push = 0;
        } else if (facingRight(g, ctx.root)) {
          g.push = 0;
          msgs.push({
            level: 'info',
            text: 'The tip faces the RIGHT coronary cusp (RCA ostium). Today\'s target is the LAD - rotate toward the left cusp.',
            key: 'right-cusp',
          });
        } else {
          g.push = 0;
          msgs.push({ level: 'info', text: 'At the aortic root, but the tip is not facing a coronary ostium - rotate (A/D) toward the left cusp.', key: 'no-cusp' });
        }
      } else {
        g.s = Math.max(0, Math.min(L, ns));
        if (inp.delta < 0) g.push = 0;
      }
    }
  }
  return { guide: g, msgs, engagedNow, poppedOut };
}
