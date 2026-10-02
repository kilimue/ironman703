/** Device controller: turns keyboard / wheel / on-screen / demo input into device motion commands. Pure. */
import { BALLOON, GUIDE, STENT, WIRE } from '../config/anatomy';
import type { ToolId } from './tools';

export interface ControlInput {
  /** -1..1 */
  advance: number;
  /** -1..1 */
  rotate: number;
  fine: boolean;
}

export interface DeviceCommand {
  /** Requested movement this step (mm, + = advance). */
  delta: number;
  /** Requested rotation this step (deg). */
  dRot: number;
  /** Wheel travel still pending after this step (mm). */
  wheelLeft: number;
}

/** [speed, fine speed, rotate speed, fine rotate speed] per manipulable device. */
export const DEVICE_SPEEDS: Partial<Record<ToolId, [number, number, number, number]>> = {
  guide: [GUIDE.speed, GUIDE.fineSpeed, GUIDE.rotateSpeed, GUIDE.fineRotateSpeed],
  wire: [WIRE.speed, WIRE.fineSpeed, WIRE.rotateSpeed, WIRE.fineRotateSpeed],
  balloon: [BALLOON.speed, BALLOON.fineSpeed, 0, 0],
  stent: [STENT.speed, STENT.fineSpeed, 0, 0],
};

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));

/**
 * Wheel notches accumulate as pending travel that is consumed at the device's speed, so a fast
 * scroll behaves like holding the key (and can still make the wire buckle in a lesion).
 */
export function deviceCommand(tool: ToolId, inp: ControlInput, wheel: number, dt: number): DeviceCommand {
  const sp = DEVICE_SPEEDS[tool];
  if (!sp) return { delta: 0, dRot: 0, wheelLeft: 0 };
  const v = inp.fine ? sp[1] : sp[0];
  const wheelStep = clamp(wheel, -v * dt, v * dt);
  const delta = clamp(clamp(inp.advance, -1, 1) * v * dt + wheelStep, -v * dt, v * dt);
  const dRot = clamp(inp.rotate, -1, 1) * (inp.fine ? sp[3] : sp[2]) * dt;
  return { delta, dRot, wheelLeft: wheel - wheelStep };
}
