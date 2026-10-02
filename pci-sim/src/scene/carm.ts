/** Virtual C-arm model shown in the 3D view. */
import * as THREE from 'three';
import { carmDirection } from './cameras';

export class CArm {
  readonly group = new THREE.Group();
  private rig = new THREE.Group();

  constructor() {
    const metal = new THREE.MeshStandardMaterial({ color: 0xc8ccd2, metalness: 0.5, roughness: 0.45, transparent: true, opacity: 0.16, depthWrite: false });
    const dark = new THREE.MeshStandardMaterial({ color: 0x8a9aae, metalness: 0.3, roughness: 0.6, transparent: true, opacity: 0.14, depthWrite: false });
    const R = 520;
    const arc = new THREE.Mesh(new THREE.TorusGeometry(R, 24, 12, 64, Math.PI), metal);
    arc.rotation.y = Math.PI / 2; // ends at +/- Z (beam axis)
    arc.rotation.x = Math.PI / 2;
    this.rig.add(arc);
    const det = new THREE.Mesh(new THREE.BoxGeometry(300, 300, 70), dark);
    det.position.z = R - 60;
    this.rig.add(det);
    const src = new THREE.Mesh(new THREE.CylinderGeometry(70, 90, 140, 24), dark);
    src.rotation.x = Math.PI / 2;
    src.position.z = -R + 60;
    this.rig.add(src);
    // beam cone (faint)
    const beam = new THREE.Mesh(
      new THREE.ConeGeometry(130, 2 * R - 150, 4, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x66aaff, transparent: true, opacity: 0.035, depthWrite: false, side: THREE.DoubleSide }),
    );
    beam.rotation.x = -Math.PI / 2;
    beam.rotation.y = Math.PI / 4;
    this.rig.add(beam);
    this.group.add(this.rig);
  }

  /** Orient so local +Z points from iso to the detector. */
  set(iso: THREE.Vector3, lao: number, cra: number, beamOn: boolean) {
    this.group.position.copy(iso);
    const dir = carmDirection(lao, cra);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    this.rig.quaternion.copy(q);
    const beam = this.rig.children[3] as THREE.Mesh;
    (beam.material as THREE.MeshBasicMaterial).opacity = beamOn ? 0.09 : 0.02;
  }
}
