/** Owns the WebGL renderer, the lit 3D scene, the X-ray scene, cameras and the per-frame sync from the sim. */
import * as THREE from 'three';
import { FLUORO, HEART } from '../config/anatomy';
import { beatMatrix, contraction } from '../anatomy/heartShape';
import { contrastAt } from '../physics/flow';
import { mat4ApplyPoint, mat4Identity, type Mat4 } from '../math/vec3';
import { pointOnVessel } from '../physics/route';
import type { SimState } from '../procedure/sim';
import { buildBodyShell, buildVessels, buildXrayBody, heartGeometry, type VesselMesh } from './anatomyMeshes';
import { DeviceMeshes } from './deviceMeshes';
import { aimFluoroCamera, OrbitRig } from './cameras';
import { CArm } from './carm';
import { FluoroPost } from './fluoroPost';
import { Labels } from './labels';
import { solidXray } from './xrayMaterials';

export type ViewMode = '3d' | 'xray';

export class SceneManager {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene3d = new THREE.Scene();
  readonly sceneX = new THREE.Scene();
  readonly cam3d: THREE.PerspectiveCamera;
  readonly camX = new THREE.PerspectiveCamera(16, 1, 100, 2000);
  readonly rig: OrbitRig;
  readonly beat3d = new THREE.Group();
  readonly beatX = new THREE.Group();
  readonly vessels: VesselMesh[];
  readonly heart3d: THREE.Mesh;
  private heartX: THREE.Mesh;
  private devices!: DeviceMeshes;
  private carm = new CArm();
  readonly post = new FluoroPost();
  readonly labels: Labels;
  private isoX = new THREE.Vector3(0, 10, 0);
  private lumenVersion = -1;
  private contrastActive = new Set<string>();
  beat: Mat4 = mat4Identity();
  view: ViewMode = '3d';
  follow = false;
  showLabels = true;
  private w = 1;
  private h = 1;

  constructor(
    canvas: HTMLCanvasElement,
    overlay: HTMLElement,
    sim: SimState,
  ) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.cam3d = new THREE.PerspectiveCamera(38, 1, 2, 6000);
    this.rig = new OrbitRig(this.cam3d, canvas);
    this.scene3d.background = new THREE.Color(0x0d1620);
    this.scene3d.fog = new THREE.Fog(0x0d1620, 1600, 4200);

    // lights
    this.scene3d.add(new THREE.HemisphereLight(0xdfe9ff, 0x2a1810, 0.85));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(-300, 500, 700);
    this.scene3d.add(key);
    const rim = new THREE.DirectionalLight(0x88aaff, 0.6);
    rim.position.set(400, -200, -500);
    this.scene3d.add(rim);
    const head = new THREE.PointLight(0xffffff, 0.6, 0, 0);
    this.cam3d.add(head);
    this.scene3d.add(this.cam3d);

    const anat = sim.anat;
    this.beat3d.matrixAutoUpdate = false;
    this.beatX.matrixAutoUpdate = false;
    this.scene3d.add(this.beat3d);
    this.sceneX.add(this.beatX);

    // heart
    const hg = heartGeometry(anat);
    this.heart3d = new THREE.Mesh(hg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0.02 }));
    this.beat3d.add(this.heart3d);
    this.heartX = new THREE.Mesh(hg, solidXray(FLUORO.muHeart, 40, 0.7));
    this.heartX.frustumCulled = false;
    this.beatX.add(this.heartX);

    // vessels
    this.vessels = buildVessels(anat);
    for (const v of this.vessels) {
      const coronary = anat.vessels[v.id].kind === 'coronary';
      (coronary ? this.beat3d : this.scene3d).add(v.mesh3d);
      (coronary ? this.beatX : this.sceneX).add(v.meshXray);
    }
    this.scene3d.add(buildBodyShell());
    this.sceneX.add(buildXrayBody());
    this.scene3d.add(this.carm.group);

    this.labels = new Labels(overlay, anat);
    this.resetCase(sim);
    this.overview(true);
  }

  /** New case: rebuild device meshes, reset lumen & fluoro image. */
  resetCase(sim: SimState) {
    if (this.devices) this.devices.dispose();
    this.devices = new DeviceMeshes(this.beat3d, this.beatX, this.vessels);
    this.scene3d.add(this.devices.group3d);
    this.sceneX.add(this.devices.groupX);
    this.lumenVersion = -1;
    this.post.reset();
    this.contrastActive.clear();
    for (const v of this.vessels) {
      v.tube.setContrast(0);
      v.tube.setColors(() => [v.baseColor.r, v.baseColor.g, v.baseColor.b]);
    }
    void sim;
  }

  resize(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.renderer.setSize(w, h, false);
    this.cam3d.aspect = w / h;
    this.cam3d.updateProjectionMatrix();
    const pr = this.renderer.getPixelRatio();
    this.post.setSize(Math.round(w * pr), Math.round(h * pr));
  }

  /** Lesion position in world space (at rest). */
  lesionPoint(sim: SimState): THREE.Vector3 {
    const p = pointOnVessel(sim.anat, 'LAD', sim.anat.lesion.center).p;
    return new THREE.Vector3(...p);
  }

  overview(instant = false) {
    // frame the whole route: right wrist -> arm -> aortic root -> heart
    const target = new THREE.Vector3(-75, -105, 0);
    const dir = new THREE.Vector3(-0.28, 0.22, 0.93).normalize();
    if (instant) {
      this.rig.controls.target.copy(target);
      this.cam3d.position.copy(target).addScaledVector(dir, 980);
      this.rig.controls.update();
    } else this.rig.focus(target, 980);
  }

  focusHeart(sim: SimState, dist = 150) {
    this.rig.focus(this.lesionPoint(sim), dist);
  }

  focusGuide() {
    const p = this.devices.tips.guide;
    if (p) this.rig.focus(p.clone(), 380);
  }

  activeTip(sim: SimState): THREE.Vector3 | undefined {
    const t = this.devices.tips;
    switch (sim.tool) {
      case 'guide':
        return t.guide;
      case 'wire':
        return t.wire ?? t.guide;
      case 'balloon':
        return t.balloon ?? t.wire;
      case 'stent':
        return t.stent ?? t.wire;
      default:
        return t.wire ?? t.guide;
    }
  }

  update(sim: SimState, dt: number) {
    // ---- beat
    const ph = sim.phys;
    const phase = Math.min(1, Math.max(0, (sim.t - ph.beatStart) / ph.beatRR));
    const c = contraction(phase) * (ph.beatPVC ? 0.6 : 1);
    this.beat = beatMatrix(sim.anat.frame, c, sim.anat.beatPivot);
    const m = new THREE.Matrix4().fromArray(this.beat);
    this.beat3d.matrix.copy(m);
    this.beatX.matrix.copy(m);
    this.beat3d.matrixWorldNeedsUpdate = true;
    this.beatX.matrixWorldNeedsUpdate = true;

    // ---- lumen
    if (sim.lumenVersion !== this.lumenVersion) {
      this.lumenVersion = sim.lumenVersion;
      for (const v of this.vessels) {
        const V = sim.anat.vessels[v.id];
        if (V.kind !== 'coronary') continue;
        v.tube.update(V.pts, sim.live[v.id].map((d) => d / 2));
        v.version = sim.lumenVersion;
      }
    }

    // ---- contrast
    this.updateContrast(sim);

    // ---- devices
    this.devices.update(sim, this.beat);

    // ---- C-arm iso: table follows the guide while it travels up the arm
    let isoGoal = new THREE.Vector3(0, 12, 0);
    const gt = this.devices.tips.guide;
    if (gt && sim.tool === 'guide' && !sim.snapshot.guideInAorta && sim.guide.s > 1) isoGoal = gt.clone();
    if (sim.xray.active) this.isoX.lerp(isoGoal, Math.min(1, dt * 3));
    this.carm.set(this.isoX, sim.carm.lao, sim.carm.cra, sim.xray.active);

    // ---- 3D camera
    if (this.follow) {
      const tip = this.activeTip(sim);
      if (tip) this.rig.follow(tip, dt);
    }
    this.rig.update(dt);
  }

  private updateContrast(sim: SimState) {
    const inj = sim.contrast.current;
    const tau = inj ? sim.t - inj.t0 : Infinity;
    const live = inj && tau < inj.duration + 6;
    const tint = new THREE.Color(0.2, 0.18, 0.55);
    for (const v of this.vessels) {
      const arr = live ? inj!.arrival[v.id] : undefined;
      if (!arr) {
        if (this.contrastActive.has(v.id)) {
          v.tube.setContrast(0);
          v.tube.setColors(() => [v.baseColor.r, v.baseColor.g, v.baseColor.b]);
          this.contrastActive.delete(v.id);
        }
        continue;
      }
      this.contrastActive.add(v.id);
      const fac = inj!.factor[v.id]!;
      const inten = inj!.intensity[v.id] ?? 1;
      const ds = sim.anat.vessels[v.id].ds;
      const per = new Float32Array(arr.length);
      for (let i = 0; i < arr.length; i++) {
        if (i * ds > inj!.aortaLimit && v.id === 'aorta') continue;
        per[i] = contrastAt(arr[i], tau, inj!.bolus, fac[i]) * inten;
      }
      v.tube.setContrast(per);
      const bc = v.baseColor;
      v.tube.setColors((i) => {
        const k = Math.min(1, per[i] * 1.2);
        return [bc.r + (tint.r - bc.r) * k, bc.g + (tint.g - bc.g) * k, bc.b + (tint.b - bc.b) * k];
      });
    }
  }

  render(sim: SimState) {
    if (this.view === '3d') {
      this.renderer.setRenderTarget(null);
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.render(this.scene3d, this.cam3d);
      this.labels.update(this.cam3d, this.beat, [this.heart3d], this.w, this.h, this.showLabels);
    } else {
      this.labels.update(this.cam3d, this.beat, [], this.w, this.h, false);
      this.renderer.toneMapping = THREE.NoToneMapping;
      aimFluoroCamera(this.camX, this.isoX, sim.carm.lao, sim.carm.cra, this.w / this.h);
      if (sim.xray.active) this.post.acquire(this.renderer, this.sceneX, this.camX, performance.now() / 1000, sim.xray.mode === 'cine');
      this.post.composite(this.renderer);
    }
  }

  /** Acquire fluoro frames even while the 3D view is shown (so switching shows the last image). */
  backgroundAcquire(sim: SimState) {
    if (this.view === '3d' && sim.xray.active) {
      aimFluoroCamera(this.camX, this.isoX, sim.carm.lao, sim.carm.cra, this.w / this.h);
      const tm = this.renderer.toneMapping;
      this.renderer.toneMapping = THREE.NoToneMapping;
      this.post.acquire(this.renderer, this.sceneX, this.camX, performance.now() / 1000, sim.xray.mode === 'cine');
      this.renderer.toneMapping = tm;
    }
  }

  worldOf(p: [number, number, number], beats: boolean): THREE.Vector3 {
    const q = beats ? mat4ApplyPoint(this.beat, p) : p;
    return new THREE.Vector3(q[0], q[1], q[2]);
  }
}

export const HEART_SIZE = HEART.length;
