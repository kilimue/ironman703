/** 3D orbit camera helper and the fluoroscopy (C-arm) camera. */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FLUORO } from '../config/anatomy';

/** Beam direction (iso -> detector) for LAO/RAO (+ = LAO) and cranial/caudal (+ = cranial) angles. */
export function carmDirection(lao: number, cra: number): THREE.Vector3 {
  const a = THREE.MathUtils.degToRad(lao);
  const c = THREE.MathUtils.degToRad(cra);
  return new THREE.Vector3(Math.sin(a) * Math.cos(c), Math.sin(c), Math.cos(a) * Math.cos(c)).normalize();
}

/** Position the fluoro camera at the detector looking through the isocentre. */
export function aimFluoroCamera(cam: THREE.PerspectiveCamera, iso: THREE.Vector3, lao: number, cra: number, aspect: number) {
  const dir = carmDirection(lao, cra);
  const D = FLUORO.sourceToIso;
  cam.position.copy(iso).addScaledVector(dir, D);
  cam.up.set(0, 1, 0);
  if (Math.abs(dir.y) > 0.98) cam.up.set(0, 0, -1);
  cam.lookAt(iso);
  // the collimated square spans the field of view; account for portrait screens
  const field = FLUORO.fieldOfView / FLUORO.collimation;
  const vertical = aspect >= 1 ? field : field / aspect;
  cam.fov = THREE.MathUtils.radToDeg(2 * Math.atan(vertical / 2 / D));
  cam.aspect = aspect;
  cam.near = 100;
  cam.far = D + 800;
  // shift the image up so the bottom toolbar does not hide the field
  const W = 1000;
  const H = Math.round(W / aspect);
  cam.setViewOffset(W, H, 0, Math.round(H * FLUORO.imageShift), W, H);
  cam.updateProjectionMatrix();
}

export class OrbitRig {
  readonly controls: OrbitControls;
  private goalTarget: THREE.Vector3 | null = null;
  private goalDist: number | null = null;
  private tweenT = 0;

  constructor(
    readonly camera: THREE.PerspectiveCamera,
    dom: HTMLElement,
  ) {
    this.controls = new OrbitControls(camera, dom);
    this.controls.enableZoom = false; // Ctrl+wheel zoom handled manually (wheel advances devices)
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.12;
    this.controls.rotateSpeed = 0.7;
    this.controls.screenSpacePanning = true;
  }

  get distance() {
    return this.camera.position.distanceTo(this.controls.target);
  }

  setDistance(d: number) {
    const dir = this.camera.position.clone().sub(this.controls.target).normalize();
    this.camera.position.copy(this.controls.target).addScaledVector(dir, THREE.MathUtils.clamp(d, 25, 2200));
  }

  zoom(factor: number) {
    this.goalDist = null;
    this.setDistance(this.distance * factor);
  }

  /** Smoothly move the orbit target (and optionally distance). */
  focus(target: THREE.Vector3, dist?: number) {
    this.goalTarget = target.clone();
    this.goalDist = dist ?? null;
    this.tweenT = 0;
  }

  /** Follow a moving point directly (camera follow). */
  follow(p: THREE.Vector3, dt: number) {
    const k = Math.min(1, dt * 6);
    const delta = p.clone().sub(this.controls.target).multiplyScalar(k);
    this.controls.target.add(delta);
    this.camera.position.add(delta);
  }

  update(dt: number) {
    if (this.goalTarget) {
      this.tweenT += dt;
      const k = Math.min(1, dt * 4.5);
      const delta = this.goalTarget.clone().sub(this.controls.target).multiplyScalar(k);
      this.controls.target.add(delta);
      this.camera.position.add(delta);
      if (this.goalDist !== null) this.setDistance(THREE.MathUtils.lerp(this.distance, this.goalDist, k));
      if (this.tweenT > 1.6) {
        this.goalTarget = null;
        this.goalDist = null;
      }
    }
    this.controls.update();
  }
}
