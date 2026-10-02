/**
 * Tube geometry with a fixed maximum ring count that can be rebuilt in place when the centreline,
 * radius profile (lumen) or contrast changes. Carries per-vertex `aContrast` and `aRadius`
 * attributes for the X-ray shaders.
 */
import * as THREE from 'three';
import type { Vec3 } from '../config/anatomy';

export class DynamicTube {
  readonly geometry = new THREE.BufferGeometry();
  readonly maxRings: number;
  readonly radial: number;
  private pos: Float32Array;
  private nor: Float32Array;
  private uv: Float32Array;
  readonly contrast: Float32Array;
  private rad: Float32Array;
  readonly colors: Float32Array | null;
  rings = 0;
  /** Last frames (for picking / overlays). */
  centers: Vec3[] = [];
  normals: Vec3[] = [];
  binormals: Vec3[] = [];

  constructor(maxRings: number, radial = 12, withColors = false) {
    this.maxRings = Math.max(2, maxRings);
    this.radial = radial;
    const nv = this.maxRings * (radial + 1);
    this.pos = new Float32Array(nv * 3);
    this.nor = new Float32Array(nv * 3);
    this.uv = new Float32Array(nv * 2);
    this.contrast = new Float32Array(nv);
    this.rad = new Float32Array(nv);
    this.colors = withColors ? new Float32Array(nv * 3) : null;
    const idx: number[] = [];
    for (let i = 0; i < this.maxRings - 1; i++)
      for (let j = 0; j < radial; j++) {
        const a = i * (radial + 1) + j;
        const b = a + radial + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    const g = this.geometry;
    g.setIndex(idx);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('normal', new THREE.BufferAttribute(this.nor, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aContrast', new THREE.BufferAttribute(this.contrast, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aRadius', new THREE.BufferAttribute(this.rad, 1).setUsage(THREE.DynamicDrawUsage));
    if (this.colors) g.setAttribute('color', new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
  }

  /**
   * Rebuild from centreline points and radii (same length, <= maxRings).
   * `uLength`: UV u coordinate scale (mm per texture repeat) - u = arc length / uLength.
   */
  update(points: Vec3[], radii: number[] | number, uLength = 0, seedNormal?: Vec3) {
    const n = Math.min(points.length, this.maxRings);
    this.rings = n;
    if (n < 2) {
      this.geometry.setDrawRange(0, 0);
      return;
    }
    // tangents
    const T: Vec3[] = [];
    for (let i = 0; i < n; i++) {
      const a = points[Math.max(0, i - 1)];
      const b = points[Math.min(n - 1, i + 1)];
      let tx = b[0] - a[0],
        ty = b[1] - a[1],
        tz = b[2] - a[2];
      const l = Math.hypot(tx, ty, tz) || 1;
      tx /= l;
      ty /= l;
      tz /= l;
      T.push([tx, ty, tz]);
    }
    // parallel transport frames
    const N: Vec3[] = [];
    const B: Vec3[] = [];
    let nx: number, ny: number, nz: number;
    const t0 = T[0];
    let s: Vec3 = seedNormal ?? (Math.abs(t0[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0]);
    let d = s[0] * t0[0] + s[1] * t0[1] + s[2] * t0[2];
    nx = s[0] - d * t0[0];
    ny = s[1] - d * t0[1];
    nz = s[2] - d * t0[2];
    let l = Math.hypot(nx, ny, nz);
    if (l < 1e-6) {
      s = Math.abs(t0[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
      d = s[0] * t0[0] + s[1] * t0[1] + s[2] * t0[2];
      nx = s[0] - d * t0[0];
      ny = s[1] - d * t0[1];
      nz = s[2] - d * t0[2];
      l = Math.hypot(nx, ny, nz);
    }
    nx /= l;
    ny /= l;
    nz /= l;
    for (let i = 0; i < n; i++) {
      const t = T[i];
      d = nx * t[0] + ny * t[1] + nz * t[2];
      let ax = nx - d * t[0],
        ay = ny - d * t[1],
        az = nz - d * t[2];
      l = Math.hypot(ax, ay, az);
      if (l < 1e-6) {
        const p: Vec3 = Math.abs(t[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
        d = p[0] * t[0] + p[1] * t[1] + p[2] * t[2];
        ax = p[0] - d * t[0];
        ay = p[1] - d * t[1];
        az = p[2] - d * t[2];
        l = Math.hypot(ax, ay, az);
      }
      nx = ax / l;
      ny = ay / l;
      nz = az / l;
      N.push([nx, ny, nz]);
      B.push([t[1] * nz - t[2] * ny, t[2] * nx - t[0] * nz, t[0] * ny - t[1] * nx]);
    }
    this.centers = points.slice(0, n);
    this.normals = N;
    this.binormals = B;
    const R = this.radial;
    let arc = 0;
    for (let i = 0; i < n; i++) {
      if (i > 0) {
        const a = points[i - 1],
          b = points[i];
        arc += Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      }
      const r = typeof radii === 'number' ? radii : radii[i];
      const c = points[i];
      const nn = N[i],
        bb = B[i];
      for (let j = 0; j <= R; j++) {
        const th = (j / R) * Math.PI * 2;
        const cs = Math.cos(th),
          sn = Math.sin(th);
        const ox = nn[0] * cs + bb[0] * sn;
        const oy = nn[1] * cs + bb[1] * sn;
        const oz = nn[2] * cs + bb[2] * sn;
        const k = i * (R + 1) + j;
        this.pos[k * 3] = c[0] + ox * r;
        this.pos[k * 3 + 1] = c[1] + oy * r;
        this.pos[k * 3 + 2] = c[2] + oz * r;
        this.nor[k * 3] = ox;
        this.nor[k * 3 + 1] = oy;
        this.nor[k * 3 + 2] = oz;
        this.uv[k * 2] = uLength > 0 ? arc / uLength : i / (n - 1);
        this.uv[k * 2 + 1] = j / R;
        this.rad[k] = r;
      }
    }
    const g = this.geometry;
    g.setDrawRange(0, (n - 1) * R * 6);
    (g.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('normal') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('uv') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aRadius') as THREE.BufferAttribute).needsUpdate = true;
  }

  /** Set per-ring contrast (0..1+) - fills all vertices of each ring. */
  setContrast(perRing: ArrayLike<number> | number) {
    const R = this.radial + 1;
    for (let i = 0; i < this.rings; i++) {
      const c = typeof perRing === 'number' ? perRing : perRing[i] ?? 0;
      for (let j = 0; j < R; j++) this.contrast[i * R + j] = c;
    }
    (this.geometry.getAttribute('aContrast') as THREE.BufferAttribute).needsUpdate = true;
  }

  /** Per-ring colour (r,g,b arrays or a function). */
  setColors(fn: (ring: number) => [number, number, number]) {
    if (!this.colors) return;
    const R = this.radial + 1;
    for (let i = 0; i < this.rings; i++) {
      const [r, g, b] = fn(i);
      for (let j = 0; j < R; j++) {
        const k = (i * R + j) * 3;
        this.colors[k] = r;
        this.colors[k + 1] = g;
        this.colors[k + 2] = b;
      }
    }
    (this.geometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
  }

  /** Ring index for a triangle index (for picking). */
  ringOfFace(faceIndex: number): number {
    return Math.floor(faceIndex / (this.radial * 2));
  }
}
