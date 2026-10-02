/** Device meshes (guide, wire, balloon / stent catheters, deployed stents, dissections) for both scenes. */
import * as THREE from 'three';
import { FLUORO, GUIDE, STENT, BALLOON, WIRE, type Vec3 } from '../config/anatomy';
import { add, addScaled, cross, mat4ApplyPoint, norm, orthoNorm, smoothstep, DEG, type Mat4 } from '../math/vec3';
import { pathPoint, pointOnVessel, type Path } from '../physics/route';
import { wirePath } from '../physics/wire';
import { currentDiameter, workingRange, type CathState } from '../physics/balloon';
import { rootDir, wireRef, idxAt } from '../anatomy/vesselTree';
import type { SimState, Dissection, DeployedStent } from '../procedure/sim';
import { DynamicTube } from './tube';
import { shellXray, tubeXray } from './xrayMaterials';
import type { VesselMesh } from './anatomyMeshes';

function strutTexture(): THREE.CanvasTexture {
  const W = 128;
  const H = 256;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d')!;
  g.fillStyle = '#000';
  g.fillRect(0, 0, W, H);
  g.strokeStyle = '#fff';
  g.lineWidth = 7;
  g.lineJoin = 'round';
  const crowns = 8;
  for (const u0 of [0.25, 0.75]) {
    g.beginPath();
    for (let k = 0; k <= crowns * 2; k++) {
      const v = (k / (crowns * 2)) * H;
      const u = (u0 + (k % 2 ? 0.17 : -0.17)) * W;
      if (k === 0) g.moveTo(u, v);
      else g.lineTo(u, v);
    }
    g.stroke();
  }
  // connectors
  g.lineWidth = 5;
  for (let k = 0; k < crowns; k += 2) {
    const v = ((2 * k + 1) / (crowns * 2)) * H;
    g.beginPath();
    g.moveTo(0.42 * W, v);
    g.lineTo(0.58 * W, v);
    g.stroke();
    g.beginPath();
    g.moveTo(0.92 * W, v + H / crowns);
    g.lineTo(1.08 * W, v + H / crowns);
    g.stroke();
    g.beginPath();
    g.moveTo(-0.08 * W, v + H / crowns);
    g.lineTo(0.08 * W, v + H / crowns);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

interface Pair {
  tube: DynamicTube;
  m3: THREE.Mesh;
  mx: THREE.Mesh;
}

function pair(rings: number, radial: number, mat3: THREE.Material, matX: THREE.Material | null, g3: THREE.Object3D, gx: THREE.Object3D): Pair {
  const tube = new DynamicTube(rings, radial);
  const m3 = new THREE.Mesh(tube.geometry, mat3);
  m3.frustumCulled = false;
  g3.add(m3);
  const mx = new THREE.Mesh(tube.geometry, matX ?? mat3);
  mx.frustumCulled = false;
  if (matX) gx.add(mx);
  return { tube, m3, mx };
}

function hide(p: Pair) {
  p.tube.update([], 0);
  p.m3.visible = false;
  p.mx.visible = false;
}
function show(p: Pair) {
  p.m3.visible = true;
  p.mx.visible = true;
}

interface CathMeshes {
  shaft: Pair;
  balloon: Pair;
  tip: Pair;
  mk1: Pair;
  mk2: Pair;
  stent: Pair | null;
  balloonMat: THREE.MeshStandardMaterial;
  balloonX: THREE.ShaderMaterial;
}

interface StentMesh {
  pair: Pair;
  d: number;
}

interface DissectionMesh {
  flap: THREE.Mesh;
  stain: Pair;
  stainX: THREE.ShaderMaterial;
}

export class DeviceMeshes {
  readonly group3d = new THREE.Group();
  readonly groupX = new THREE.Group();
  private guide: Pair;
  private guideTip: Pair;
  private wireBody: Pair;
  private wireTip: Pair;
  private caths: Record<'balloon' | 'stent', CathMeshes>;
  private stents = new Map<number, StentMesh>();
  private dissections = new Map<number, DissectionMesh>();
  private stentMat3: THREE.MeshStandardMaterial;
  private stentMatX: THREE.ShaderMaterial;
  /** World positions of device tips (for camera follow). */
  tips: Partial<Record<'guide' | 'wire' | 'balloon' | 'stent', THREE.Vector3>> = {};

  constructor(
    private beat3d: THREE.Group,
    private beatX: THREE.Group,
    private vessels: VesselMesh[],
  ) {
    const guideMat = new THREE.MeshStandardMaterial({ color: 0x8fc6e8, roughness: 0.35, metalness: 0.1 });
    const guideX = tubeXray({ muContrast: FLUORO.muGuide });
    this.guide = pair(170, 12, guideMat, guideX, this.group3d, this.groupX);
    this.guideTip = pair(26, 12, guideMat, guideX, this.group3d, this.groupX);
    const wireMat = new THREE.MeshStandardMaterial({ color: 0xd0d6dc, roughness: 0.25, metalness: 0.85 });
    const wireTipMat = new THREE.MeshStandardMaterial({ color: 0xe0b44c, roughness: 0.3, metalness: 0.8, emissive: 0x2a1a00 });
    this.wireBody = pair(140, 6, wireMat, tubeXray({ muContrast: FLUORO.muWireBody, extra: 0.22 }), this.group3d, this.groupX);
    this.wireTip = pair(70, 6, wireTipMat, tubeXray({ muContrast: FLUORO.muWireTip, extra: 0.3 }), this.group3d, this.groupX);

    const tex = strutTexture();
    this.stentMat3 = new THREE.MeshStandardMaterial({
      color: 0xc9d1d9,
      metalness: 0.9,
      roughness: 0.25,
      alphaMap: tex,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
      transparent: false,
    });
    this.stentMatX = shellXray(FLUORO.muStent);

    const mkCath = (): CathMeshes => {
      const shaftMat = new THREE.MeshStandardMaterial({ color: 0xe8eef2, roughness: 0.4 });
      const balloonMat = new THREE.MeshStandardMaterial({ color: 0xf4f6f8, roughness: 0.2, transparent: true, opacity: 0.55, depthWrite: false });
      const balloonX = tubeXray({ muContrast: FLUORO.muContrast * 0.85, muWall: 0.02 });
      const markerMat = new THREE.MeshStandardMaterial({ color: 0x9aa3ab, metalness: 0.95, roughness: 0.2 });
      const markerX = tubeXray({ muContrast: FLUORO.muMarker, extra: 0.25 });
      return {
        shaft: pair(80, 8, shaftMat, tubeXray({ muContrast: 0.12 }), this.group3d, this.groupX),
        balloon: pair(60, 16, balloonMat, balloonX, this.group3d, this.groupX),
        tip: pair(10, 8, shaftMat, tubeXray({ muContrast: 0.05 }), this.group3d, this.groupX),
        mk1: pair(4, 10, markerMat, markerX, this.group3d, this.groupX),
        mk2: pair(4, 10, markerMat, markerX, this.group3d, this.groupX),
        stent: null,
        balloonMat,
        balloonX,
      };
    };
    this.caths = { balloon: mkCath(), stent: mkCath() };
    this.caths.stent.stent = pair(70, 24, this.stentMat3, this.stentMatX, this.group3d, this.groupX);
  }

  /** Points along a path, beat-transformed where they ride on the heart. */
  private samplePath(sim: SimState, path: Path, a: number, b: number, n: number, M: Mat4, offset?: (s: number, rest: Vec3) => Vec3): Vec3[] {
    const out: Vec3[] = [];
    for (let i = 0; i < n; i++) {
      const s = a + ((b - a) * i) / Math.max(1, n - 1);
      const pp = pathPoint(sim.anat, path, s);
      let p = pp.p;
      if (offset) p = offset(s, p);
      out.push(pp.beats ? mat4ApplyPoint(M, p) : p);
    }
    return out;
  }

  update(sim: SimState, M: Mat4) {
    this.updateGuide(sim, M);
    this.updateWire(sim, M);
    this.updateCath(sim, sim.balloon, this.caths.balloon, M);
    this.updateCath(sim, sim.stent, this.caths.stent, M);
    this.updateStents(sim);
    this.updateDissections(sim);
  }

  private updateGuide(sim: SimState, M: Mat4) {
    const g = sim.guide;
    if (g.s <= 0.5) {
      hide(this.guide);
      hide(this.guideTip);
      delete this.tips.guide;
      return;
    }
    show(this.guide);
    const r = GUIDE.outerDiameter / 2;
    const a = Math.max(0, g.s - 700);
    const pts = this.samplePath(sim, sim.access, a, g.s, 170, M);
    this.guide.tube.update(pts, r);
    this.guide.tube.setContrast(1);
    // pre-shaped tip
    const k = smoothstep(sim.landmarks.aortaEntryS + 5, sim.landmarks.aortaEntryS + 60, g.s);
    const end = pathPoint(sim.anat, sim.access, g.s);
    let tipEnd: Vec3 = end.p;
    if (k > 0.02) {
      show(this.guideTip);
      const T = end.t;
      const root = sim.anat.root;
      const D = orthoNorm(rootDir(root, g.rot), T);
      let endDir = D;
      if (g.engaged) {
        const lm = pointOnVessel(sim.anat, 'LM', 2.5 + GUIDE.seatDepth);
        tipEnd = mat4ApplyPoint(M, lm.p);
        endDir = lm.t;
      } else {
        tipEnd = add(addScaled(end.p, T, 23 * k), [0, 0, 0]);
        tipEnd = addScaled(tipEnd, D, 12.5 * k);
      }
      const B0 = end.p;
      const B1 = addScaled(end.p, T, 11 * k);
      const B2 = addScaled(tipEnd, endDir, -7 * k);
      const tip: Vec3[] = [];
      for (let i = 0; i < 24; i++) {
        const u = i / 23;
        const w0 = (1 - u) ** 3,
          w1 = 3 * (1 - u) ** 2 * u,
          w2 = 3 * (1 - u) * u * u,
          w3 = u ** 3;
        tip.push([
          B0[0] * w0 + B1[0] * w1 + B2[0] * w2 + tipEnd[0] * w3,
          B0[1] * w0 + B1[1] * w1 + B2[1] * w2 + tipEnd[1] * w3,
          B0[2] * w0 + B1[2] * w1 + B2[2] * w2 + tipEnd[2] * w3,
        ]);
      }
      this.guideTip.tube.update(tip, tip.map((_, i) => (i > 20 ? r * 0.9 : r)));
      this.guideTip.tube.setContrast(1);
    } else hide(this.guideTip);
    this.tips.guide = new THREE.Vector3(...tipEnd);
  }

  private updateWire(sim: SimState, M: Mat4) {
    const w = sim.wire;
    if (w.pos <= 0.2) {
      hide(this.wireBody);
      hide(this.wireTip);
      delete this.tips.wire;
      return;
    }
    const path = wirePath(sim.anat, w);
    const tip = pathPoint(sim.anat, path, w.pos);
    const T = tip.t;
    const N = wireRef(sim.anat.frame, T);
    const Bv = norm(cross(T, N));
    const rot = w.rot * DEG;
    const D: Vec3 = [N[0] * Math.cos(rot) + Bv[0] * Math.sin(rot), N[1] * Math.cos(rot) + Bv[1] * Math.sin(rot), N[2] * Math.cos(rot) + Bv[2] * Math.sin(rot)];
    const buckleDir = orthoNorm(cross(T, D), T);
    const offset = (s: number, p: Vec3): Vec3 => {
      let q = p;
      const fromTip = w.pos - s;
      if (fromTip < 3) {
        const u = 1 - fromTip / 3;
        q = addScaled(q, D, 1.1 * u * u);
      }
      if (w.buckle > 0.01 && fromTip > 2 && fromTip < 20) {
        const v = (fromTip - 2) / 18;
        q = addScaled(q, buckleDir, w.buckle * 2.4 * Math.sin(Math.PI * v));
      }
      return q;
    };
    const split = Math.max(0, w.pos - WIRE.radiopaqueTip);
    const rr = WIRE.diameter / 2;
    if (split > 0.3) {
      show(this.wireBody);
      this.wireBody.tube.update(this.samplePath(sim, path, 0, split, 140, M, offset), rr);
      this.wireBody.tube.setContrast(1);
    } else hide(this.wireBody);
    show(this.wireTip);
    const tipPts = this.samplePath(sim, path, split, w.pos, 70, M, offset);
    this.wireTip.tube.update(tipPts, tipPts.map((_, i) => (i > 66 ? rr * 0.85 : rr)));
    this.wireTip.tube.setContrast(1);
    this.tips.wire = new THREE.Vector3(...tipPts[tipPts.length - 1]);
  }

  private updateCath(sim: SimState, c: CathState, m: CathMeshes, M: Mat4) {
    const parts = [m.shaft, m.balloon, m.tip, m.mk1, m.mk2, ...(m.stent ? [m.stent] : [])];
    if (c.pos <= 0.2) {
      parts.forEach(hide);
      delete this.tips[c.kind];
      return;
    }
    const path = wirePath(sim.anat, sim.wire);
    const [a, b] = workingRange(c);
    const taper = 1.0;
    const shaftR = 0.42;
    // shaft
    const shaftEnd = Math.max(0, a - taper);
    if (shaftEnd > 0.3) {
      show(m.shaft);
      m.shaft.tube.update(this.samplePath(sim, path, 0, shaftEnd, 80, M), shaftR);
    } else hide(m.shaft);
    // balloon
    const inflated = c.pressure > 0.05;
    const rB = inflated ? currentDiameter(c) / 2 : (c.kind === 'balloon' ? BALLOON.profile : STENT.profile) / 2;
    const b0 = Math.max(0, a - taper);
    const b1 = b + taper;
    if (b1 - b0 > 0.3) {
      show(m.balloon);
      const n = 60;
      const pts = this.samplePath(sim, path, b0, b1, n, M);
      const radii = pts.map((_, i) => {
        const s = b0 + ((b1 - b0) * i) / (n - 1);
        const w = s < a ? smoothstep(a - taper, a, s) : s > b ? 1 - smoothstep(b, b + taper, s) : 1;
        return shaftR + (rB - shaftR) * w;
      });
      m.balloon.tube.update(pts, radii);
      m.balloon.tube.setContrast(inflated ? Math.min(1, c.pressure / 2) : 0);
      const col = inflated ? new THREE.Color(0xf2d230) : new THREE.Color(0xf4f6f8);
      m.balloonMat.color.copy(col);
      m.balloonMat.opacity = inflated ? 0.75 : 0.5;
      if (c.ruptured) m.balloonMat.color.set(0x8a6d5a);
    } else hide(m.balloon);
    // tip
    show(m.tip);
    m.tip.tube.update(this.samplePath(sim, path, b1, c.pos, 10, M), [0.42, 0.4, 0.38, 0.36, 0.34, 0.32, 0.3, 0.28, 0.25, 0.2]);
    // markers
    for (const [mk, s] of [
      [m.mk1, a + 0.5],
      [m.mk2, b - 0.5],
    ] as [Pair, number][]) {
      if (s <= 0.2) {
        hide(mk);
        continue;
      }
      show(mk);
      mk.tube.update(this.samplePath(sim, path, s - 0.45, s + 0.45, 4, M), 0.5);
      mk.tube.setContrast(1);
    }
    // stent on the delivery balloon
    if (m.stent) {
      if (c.kind === 'stent' && !c.deployed && b > 0.3) {
        show(m.stent);
        const s0 = Math.max(0.05, a);
        const pts = this.samplePath(sim, path, s0, b, 70, M);
        m.stent.tube.update(pts, Math.max(STENT.crimpedRadius, rB + 0.03), 2.6);
      } else hide(m.stent);
    }
    const tp = this.samplePath(sim, path, c.pos, c.pos, 1, M)[0];
    this.tips[c.kind] = new THREE.Vector3(...tp);
  }

  private updateStents(sim: SimState) {
    for (const st of sim.stents) {
      let sm = this.stents.get(st.id);
      if (!sm) {
        const v = sim.anat.vessels[st.vessel];
        const n = Math.max(2, Math.round((st.s1 - st.s0) / v.ds) + 1);
        sm = { pair: pair(n + 1, 24, this.stentMat3, this.stentMatX, this.beat3d, this.beatX), d: -1 };
        this.stents.set(st.id, sm);
      }
      if (sm.d !== st.expandedD) {
        sm.d = st.expandedD;
        this.buildStentGeometry(sim, st, sm.pair);
      }
    }
  }

  private buildStentGeometry(sim: SimState, st: DeployedStent, p: Pair) {
    const v = sim.anat.vessels[st.vessel];
    const n = p.tube.maxRings;
    const pts: Vec3[] = [];
    for (let i = 0; i < n; i++) pts.push(pointOnVessel(sim.anat, st.vessel, st.s0 + ((st.s1 - st.s0) * i) / (n - 1)).p);
    void v;
    p.tube.update(pts, (st.expandedD * (1 - STENT.recoil)) / 2 + 0.05, 2.6);
  }

  private updateDissections(sim: SimState) {
    for (const d of sim.dissections) {
      let dm = this.dissections.get(d.id);
      if (!dm) {
        dm = this.buildDissection(sim, d);
        this.dissections.set(d.id, dm);
      }
      dm.stain.tube.setContrast(Math.min(1.3, d.stain));
    }
  }

  private buildDissection(sim: SimState, d: Dissection): DissectionMesh {
    const vm = this.vessels.find((x) => x.id === d.vessel)!;
    const v = sim.anat.vessels[d.vessel];
    const i0 = idxAt(v, d.s0);
    const i1 = Math.max(i0 + 2, idxAt(v, d.s1));
    const N = vm.tube.normals;
    const B = vm.tube.binormals;
    // flap ribbon
    const pos: number[] = [];
    const idx: number[] = [];
    const stainPts: Vec3[] = [];
    const stainR: number[] = [];
    for (let i = i0; i <= i1; i++) {
      const c = v.pts[i];
      const r = v.refD[i] / 2;
      const u = (i - i0) / (i1 - i0);
      const wave = Math.sin(u * Math.PI * 3) * 0.15 * r;
      const ctr = addScaled(addScaled(c, N[i], 0.2 * r + wave), B[i], 0);
      pos.push(...addScaled(ctr, B[i], 0.6 * r), ...addScaled(ctr, B[i], -0.6 * r));
      if (i > i0) {
        const k = (i - i0) * 2;
        idx.push(k - 2, k - 1, k, k - 1, k + 1, k);
      }
      stainPts.push(addScaled(c, N[i], r * 1.3));
      stainR.push(r * 0.8 * Math.sin(Math.PI * (0.1 + 0.8 * u)));
    }
    const geo = new THREE.BufferGeometry();
    geo.setIndex(idx);
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    const flap = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x3a0d08, roughness: 0.8, side: THREE.DoubleSide }));
    flap.frustumCulled = false;
    this.beat3d.add(flap);
    const stainX = tubeXray({ muContrast: FLUORO.muContrast * 1.1 });
    const stain = pair(stainPts.length, 10, new THREE.MeshBasicMaterial({ visible: false }), stainX, new THREE.Group(), this.beatX);
    stain.tube.update(stainPts, stainR);
    return { flap, stain, stainX };
  }

  /** Remove everything (new case). */
  dispose() {
    const kill = (o: THREE.Object3D) => {
      o.parent?.remove(o);
      if ((o as THREE.Mesh).geometry) (o as THREE.Mesh).geometry.dispose();
    };
    this.stents.forEach((s) => {
      kill(s.pair.m3);
      kill(s.pair.mx);
    });
    this.dissections.forEach((d) => {
      kill(d.flap);
      kill(d.stain.mx);
    });
    this.group3d.parent?.remove(this.group3d);
    this.groupX.parent?.remove(this.groupX);
  }
}
