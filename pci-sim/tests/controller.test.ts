import { describe, expect, it } from 'vitest';
import { deviceCommand } from '../src/tools/controller';
import { GUIDE, WIRE } from '../src/config/anatomy';

describe('device controller', () => {
  const dt = 1 / 60;
  it('maps advance / rotate to device speeds, Shift = fine', () => {
    const n = deviceCommand('wire', { advance: 1, rotate: -1, fine: false }, 0, dt);
    expect(n.delta).toBeCloseTo(WIRE.speed * dt);
    expect(n.dRot).toBeCloseTo(-WIRE.rotateSpeed * dt);
    const f = deviceCommand('wire', { advance: 1, rotate: 0, fine: true }, 0, dt);
    expect(f.delta).toBeCloseTo(WIRE.fineSpeed * dt);
    expect(deviceCommand('guide', { advance: -1, rotate: 0, fine: false }, 0, dt).delta).toBeCloseTo(-GUIDE.speed * dt);
  });
  it('consumes wheel travel at the device speed', () => {
    let wheel = 6;
    let moved = 0;
    for (let i = 0; i < 60 && wheel > 0; i++) {
      const c = deviceCommand('wire', { advance: 0, rotate: 0, fine: false }, wheel, dt);
      moved += c.delta;
      wheel = c.wheelLeft;
    }
    expect(moved).toBeCloseTo(6);
    expect(deviceCommand('wire', { advance: 0, rotate: 0, fine: false }, 6, dt).delta).toBeCloseTo(WIRE.speed * dt);
  });
  it('non-device tools do not move anything', () => {
    const c = deviceCommand('measure', { advance: 1, rotate: 1, fine: false }, 5, dt);
    expect(c).toEqual({ delta: 0, dRot: 0, wheelLeft: 0 });
  });
});
