/** 3D anatomy labels as HTML elements; dimmed when behind the heart, with tooltip descriptions. */
import * as THREE from 'three';
import { mat4ApplyPoint, type Mat4 } from '../math/vec3';
import type { Anatomy } from '../anatomy/vesselTree';
import { pointOnVessel } from '../physics/route';

interface LabelEl {
  el: HTMLDivElement;
  vessel: string;
  s: number;
  beats: boolean;
  behind: boolean;
}

export class Labels {
  readonly root: HTMLDivElement;
  private items: LabelEl[] = [];
  private ray = new THREE.Raycaster();
  private frame = 0;
  visible = true;

  constructor(
    container: HTMLElement,
    private anat: Anatomy,
  ) {
    this.root = document.createElement('div');
    this.root.className = 'labels';
    container.appendChild(this.root);
    for (const l of anat.labels) {
      const el = document.createElement('div');
      el.className = 'label' + (l.id === 'lesion' ? ' lesion' : '');
      el.textContent = l.text;
      el.dataset.tip = l.description;
      el.setAttribute('aria-label', `${l.text}: ${l.description}`);
      this.root.appendChild(el);
      this.items.push({ el, vessel: l.vessel, s: l.s, beats: anat.vessels[l.vessel].kind === 'coronary', behind: false });
    }
  }

  update(cam: THREE.PerspectiveCamera, M: Mat4, occluders: THREE.Object3D[], w: number, h: number, show: boolean) {
    this.root.style.display = show && this.visible ? '' : 'none';
    if (!show || !this.visible) return;
    this.frame++;
    const v = new THREE.Vector3();
    for (const it of this.items) {
      const p = pointOnVessel(this.anat, it.vessel as never, it.s).p;
      const q = it.beats ? mat4ApplyPoint(M, p) : p;
      v.set(q[0], q[1], q[2]);
      const world = v.clone();
      v.project(cam);
      if (v.z > 1 || v.z < -1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1) {
        it.el.style.display = 'none';
        continue;
      }
      it.el.style.display = '';
      const x = (v.x * 0.5 + 0.5) * w;
      const y = (-v.y * 0.5 + 0.5) * h;
      it.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      if (this.frame % 6 === 0) {
        const dir = world.clone().sub(cam.position);
        const dist = dir.length();
        this.ray.set(cam.position, dir.normalize());
        this.ray.far = dist - 3;
        it.behind = this.ray.intersectObjects(occluders, false).length > 0;
        it.el.classList.toggle('dim', it.behind);
      }
    }
  }
}
