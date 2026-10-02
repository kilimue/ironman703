/**
 * Fluoro-only skeleton & soft tissue: vertebrae, ribs, clavicles, diaphragm domes, chest and arm.
 * Pure geometry description (mm, patient coordinates); the scene turns it into X-ray meshes.
 */
import { ACCESS, type Vec3 } from '../config/anatomy';
import { catmullRom } from './spline';

export interface Ellipsoid {
  center: Vec3;
  radii: Vec3;
}

export interface SkeletonSpec {
  chest: Ellipsoid;
  mediastinum: Ellipsoid;
  diaphragm: Ellipsoid[];
  vertebrae: { center: Vec3; radius: number; height: number }[];
  posteriorElements: Ellipsoid[];
  ribs: Vec3[][];
  clavicles: Vec3[][];
  arm: { line: Vec3[]; radii: number[] };
  humerus: Vec3[];
  radius: Vec3[];
  ulna: Vec3[];
}

const off = (p: Vec3, d: Vec3): Vec3 => [p[0] + d[0], p[1] + d[1], p[2] + d[2]];

export function skeletonSpec(): SkeletonSpec {
  const vertebrae: SkeletonSpec['vertebrae'] = [];
  const posteriorElements: Ellipsoid[] = [];
  for (let y = 190; y > -260; y -= 31) {
    vertebrae.push({ center: [0, y, -100], radius: 20, height: 23 });
    posteriorElements.push({ center: [0, y - 3, -126], radii: [16, 10, 10] });
  }
  const ribs: Vec3[][] = [];
  for (let k = 0; k < 11; k++) {
    const y0 = 172 - k * 25;
    const a = 70 + Math.min(k, 6) * 12;
    const b = 92 + Math.min(k, 5) * 4;
    const end = k < 7 ? 150 : 120 - (k - 7) * 10;
    for (const side of [-1, 1]) {
      const pts: Vec3[] = [];
      for (let deg = 8; deg <= end; deg += 6) {
        const phi = (deg * Math.PI) / 180;
        const yy = y0 + 6 * Math.sin(phi * 1.2) - 48 * Math.pow(deg / 150, 1.6);
        pts.push([side * Math.sin(phi) * a, yy, -20 - Math.cos(phi) * b]);
      }
      ribs.push(pts);
    }
  }
  const clavicles = [-1, 1].map((side) =>
    catmullRom(
      [
        [side * 18, 170, 45],
        [side * 70, 182, 30],
        [side * 140, 184, 0],
      ],
      12,
    ),
  );
  const armLine = catmullRom([...ACCESS.radial, ...ACCESS.brachial.slice(1), ...ACCESS.axillary.slice(1)].reverse() as Vec3[], 8);
  const humerus = catmullRom([off(ACCESS.axillary[1], [-14, 0, -12]), off(ACCESS.brachial[2], [-10, 0, -14]), off(ACCESS.brachial[0], [-10, 5, -10])], 10);
  const radius = catmullRom([off(ACCESS.radial[3], [-6, -5, -6]), off(ACCESS.radial[1], [-4, 0, -8]), off(ACCESS.radial[0], [-3, 0, -8])], 10);
  return {
    chest: { center: [0, -10, -15], radii: [158, 250, 118] },
    mediastinum: { center: [0, 40, -40], radii: [42, 150, 45] },
    diaphragm: [
      { center: [-55, -178, -20], radii: [115, 128, 112] },
      { center: [60, -192, -20], radii: [112, 128, 110] },
    ],
    vertebrae,
    posteriorElements,
    ribs,
    clavicles,
    arm: { line: armLine, radii: armLine.map((_, i) => 46 - (i / armLine.length) * 14) },
    humerus,
    radius,
    ulna: radius.map((p) => off(p, [-16, 0, -10])),
  };
}
