/** Procedural anatomy meshes for the 3D view and the fluoroscopy scene. */
import * as THREE from 'three';
import { FLUORO, HEART, ACCESS, type Vec3 } from '../config/anatomy';
import { heartSurface, heartNormal, fatWeight } from '../anatomy/heartShape';
import type { Anatomy, VesselId } from '../anatomy/vesselTree';
import { catmullRom } from '../anatomy/spline';
import { skeletonSpec } from '../anatomy/skeleton';
import { DynamicTube } from './tube';
import { solidXray, tubeXray } from './xrayMaterials';

export function heartGeometry(anat: Anatomy, nt = 56, nth = 72): THREE.BufferGeometry {
  const f = anat.frame;
  const pos: number[] = [];
  const nor: number[] = [];
  const col: number[] = [];
  const idx: number[] = [];
  const myo = new THREE.Color(0.58, 0.13, 0.11);
  const fat = new THREE.Color(0.86, 0.72, 0.38);
  const c = new THREE.Color();
  for (let i = 0; i <= nt; i++) {
    const t = HEART.tMin + ((1 - HEART.tMin) * i) / nt;
    for (let j = 0; j <= nth; j++) {
      const th = (360 * j) / nth;
      const p = heartSurface(f, t, th);
      const n = i === 0 ? f.axis.map((x) => -x) : i === nt ? f.axis : heartNormal(f, t, th);
      pos.push(...p);
      nor.push(...(n as number[]));
      const w = fatWeight(t, th);
      const mottle = 0.94 + 0.06 * Math.sin(th * 0.37 + t * 23) * Math.cos(t * 41 - th * 0.11);
      c.copy(myo).lerp(fat, w).multiplyScalar(mottle);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < nt; i++)
    for (let j = 0; j < nth; j++) {
      const a = i * (nth + 1) + j;
      const b = a + nth + 1;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  const g = new THREE.BufferGeometry();
  g.setIndex(idx);
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeBoundingSphere();
  return g;
}

export interface VesselMesh {
  id: VesselId;
  tube: DynamicTube;
  mesh3d: THREE.Mesh;
  meshXray: THREE.Mesh;
  /** Lumen version last uploaded. */
  version: number;
  baseColor: THREE.Color;
}

const VESSEL_COLOR: Record<string, [number, number, number]> = {
  coronary: [0.78, 0.16, 0.14],
  aorta: [0.72, 0.18, 0.16],
  access: [0.75, 0.2, 0.18],
};

export function buildVessels(anat: Anatomy): VesselMesh[] {
  const out: VesselMesh[] = [];
  for (const v of Object.values(anat.vessels)) {
    const radial = v.kind === 'aorta' ? 28 : v.kind === 'coronary' ? 14 : 10;
    const tube = new DynamicTube(v.pts.length, radial, true);
    tube.update(v.pts, v.baseD.map((d) => d / 2));
    const base = new THREE.Color(...VESSEL_COLOR[v.kind]);
    tube.setColors(() => [base.r, base.g, base.b]);
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.45,
      metalness: 0.05,
      transparent: true,
      opacity: v.kind === 'aorta' ? 0.32 : v.kind === 'coronary' ? 0.62 : 0.5,
      depthWrite: v.kind === 'coronary',
      side: THREE.DoubleSide,
    });
    const mesh3d = new THREE.Mesh(tube.geometry, mat);
    mesh3d.renderOrder = v.kind === 'aorta' ? 3 : 2;
    mesh3d.userData.vessel = v.id;
    const meshXray = new THREE.Mesh(
      tube.geometry,
      tubeXray({ muContrast: FLUORO.muContrast, muWall: v.kind === 'aorta' ? 0.0004 : v.kind === 'coronary' ? FLUORO.muVesselWall : 0.002 }),
    );
    meshXray.frustumCulled = false;
    mesh3d.frustumCulled = false;
    out.push({ id: v.id, tube, mesh3d, meshXray, version: -1, baseColor: base });
  }
  return out;
}

function ellipsoid(center: Vec3, radii: Vec3, mat: THREE.Material, seg = 40): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, seg, Math.round(seg * 0.75)), mat);
  m.position.set(...center);
  m.scale.set(...radii);
  m.frustumCulled = false;
  return m;
}

function tubeMesh(points: Vec3[], radius: number | number[], mat: THREE.Material, radial = 10): THREE.Mesh {
  const t = new DynamicTube(points.length, radial);
  t.update(points, radius);
  t.setContrast(1);
  const m = new THREE.Mesh(t.geometry, mat);
  m.frustumCulled = false;
  return m;
}

/** Fluoro-only skeleton, chest soft tissue, diaphragm and arm (geometry from anatomy/skeleton.ts). */
export function buildXrayBody(): THREE.Group {
  const sk = skeletonSpec();
  const g = new THREE.Group();
  g.add(ellipsoid(sk.chest.center, sk.chest.radii, solidXray(FLUORO.muSoftTissue, sk.chest.radii[2], 0.6)));
  g.add(ellipsoid(sk.mediastinum.center, sk.mediastinum.radii, solidXray(FLUORO.muSoftTissue * 1.6, 40, 0.8)));
  for (const d of sk.diaphragm) g.add(ellipsoid(d.center, d.radii, solidXray(FLUORO.muDiaphragm, d.radii[2], 0.45)));
  const vb = solidXray(FLUORO.muSpine, 20, 0.7);
  const pe = solidXray(FLUORO.muSpine * 0.8, 9, 0.7);
  for (const v of sk.vertebrae) {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(v.radius - 1, v.radius + 1, v.height, 24), vb);
    body.position.set(...v.center);
    body.frustumCulled = false;
    g.add(body);
  }
  for (const p of sk.posteriorElements) g.add(ellipsoid(p.center, p.radii, pe, 16));
  const rib = tubeXray({ muContrast: FLUORO.muRib });
  for (const r of sk.ribs) g.add(tubeMesh(r, 4.2, rib, 8));
  const bone = tubeXray({ muContrast: FLUORO.muBone });
  for (const c of sk.clavicles) g.add(tubeMesh(c, 6.5, bone, 10));
  g.add(tubeMesh(sk.arm.line, sk.arm.radii, tubeXray({ muContrast: FLUORO.muSoftTissue * 1.2 }), 16));
  g.add(tubeMesh(sk.humerus, 9, bone, 10));
  g.add(tubeMesh(sk.radius, 5.5, bone, 8));
  g.add(tubeMesh(sk.ulna, 5, bone, 8));
  return g;
}

/** Faint skin silhouette for context in the 3D view. */
export function buildBodyShell(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xd9a58a, transparent: true, opacity: 0.07, depthWrite: false, roughness: 0.9, side: THREE.DoubleSide });
  g.add(ellipsoid([0, -30, -15], [160, 265, 120], mat, 48));
  const armLine = catmullRom([...ACCESS.radial, ...ACCESS.brachial.slice(1), ...ACCESS.axillary.slice(1)] as Vec3[], 8);
  const t = new DynamicTube(armLine.length, 20);
  t.update(armLine, armLine.map((_, i) => 26 + (i / armLine.length) * 16));
  const arm = new THREE.Mesh(t.geometry, mat);
  arm.frustumCulled = false;
  g.add(arm);
  return g;
}
