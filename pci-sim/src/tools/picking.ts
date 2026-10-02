/** Hover picking of vessels in the 3D view (measure tool diameter readout). */
import * as THREE from 'three';
import type { VesselMesh } from '../scene/anatomyMeshes';
import type { SimState } from '../procedure/sim';
import type { VesselId } from '../anatomy/vesselTree';

export interface HoverInfo {
  vessel: VesselId;
  name: string;
  s: number;
  diameter: number;
  reference: number;
  stenosis: number;
  x: number;
  y: number;
}

export class Picker {
  private ray = new THREE.Raycaster();
  private ndc = new THREE.Vector2();

  pick(sim: SimState, cam: THREE.Camera, vessels: VesselMesh[], clientX: number, clientY: number, rect: DOMRect): HoverInfo | null {
    this.ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.ray.setFromCamera(this.ndc, cam);
    const meshes = vessels.filter((v) => sim.anat.vessels[v.id].kind === 'coronary').map((v) => v.mesh3d);
    const hit = this.ray.intersectObjects(meshes, false)[0];
    if (!hit || hit.faceIndex == null) return null;
    const vm = vessels.find((v) => v.mesh3d === hit.object)!;
    const ring = Math.min(vm.tube.rings - 1, vm.tube.ringOfFace(hit.faceIndex));
    const V = sim.anat.vessels[vm.id];
    const d = sim.live[vm.id][ring];
    const ref = V.refD[ring];
    return { vessel: vm.id, name: V.name, s: ring * V.ds, diameter: d, reference: ref, stenosis: Math.max(0, 1 - d / ref), x: clientX - rect.left, y: clientY - rect.top };
  }
}
