/**
 * Procedural vessel tree: aorta, right radial access path and coronary arteries as centrelines
 * with reference / stenosed diameter profiles. Pure data - no Three.js.
 */
import { ACCESS, AORTA, CORONARY, HEART, LESION, type Vec3 } from '../config/anatomy';
import {
  add,
  addScaled,
  angDiff,
  cross,
  dist,
  dot,
  interpKnots,
  lerp3,
  norm,
  orthoNorm,
  scale,
  sub,
  wrapDeg,
  DEG,
} from '../math/vec3';
import { buildCenterline, catmullRom, tangentsOf, type Centerline } from './spline';
import { heartFrame, heartSurface, type HeartFrame } from './heartShape';
import { lesionRange, stenosedProfile } from './lumen';

export type VesselId =
  | 'radial'
  | 'brachial'
  | 'axillary'
  | 'subclavian'
  | 'brachiocephalic'
  | 'aorta'
  | 'LM'
  | 'LAD'
  | 'D1'
  | 'D2'
  | 'LCX'
  | 'RCA';

export const CORONARY_IDS: VesselId[] = ['LM', 'LAD', 'D1', 'D2', 'LCX', 'RCA'];
export const ACCESS_IDS: VesselId[] = ['radial', 'brachial', 'axillary', 'subclavian', 'brachiocephalic'];

export interface Vessel extends Centerline {
  id: VesselId;
  name: string;
  kind: 'access' | 'aorta' | 'coronary';
  /** Reference (healthy) diameter at each sample. */
  refD: number[];
  /** Native diameter including disease. */
  baseD: number[];
  parent?: VesselId;
  /** Arc length on the parent where this vessel starts. */
  parentS?: number;
  /** Heart-surface parameters per sample (coronaries only). */
  params?: [number, number][];
}

export interface BranchPoint {
  parent: VesselId;
  /** Arc length along the parent where the wire must choose. */
  s: number;
  child: VesselId;
  /** Direction of the child in the wire-rotation frame (deg). */
  angle: number;
  /** true for side branches (diagonals): captured within +-branchCapture; false = true bifurcation. */
  side: boolean;
}

export interface Label {
  id: string;
  text: string;
  description: string;
  vessel: VesselId;
  s: number;
  /** Optional extra offset (mm) so labels don't sit on the line. */
  offset?: Vec3;
}

export interface RootInfo {
  /** Valve centre. */
  valve: Vec3;
  /** Ascending direction at the root. */
  axis: Vec3;
  /** Reference direction for root angles (0 deg). */
  ref: Vec3;
  /** In-plane third axis (90 deg). */
  side: Vec3;
  radius: number;
  /** Angles (deg) of the left / right coronary cusps (ostia). */
  leftCusp: number;
  rightCusp: number;
  nonCusp: number;
  ostiumL: Vec3;
  ostiumR: Vec3;
  /** Centre point at ostium height. */
  ostiumCenter: Vec3;
}

export interface Anatomy {
  frame: HeartFrame;
  vessels: Record<VesselId, Vessel>;
  root: RootInfo;
  branches: BranchPoint[];
  /** Arc length of the brachiocephalic origin on the aorta. */
  bcOriginS: number;
  /** Lesion in LAD local arc length. */
  lesion: { vessel: VesselId; s0: number; s1: number; center: number };
  labels: Label[];
  /** Pivot for the beat transform. */
  beatPivot: Vec3;
}

function knotsProfile(knots: [number, number][], n: number, ds: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(interpKnots(knots, i * ds));
  return out;
}

/** Resample a dense polyline and a parallel attribute array together. */
function resampleWithParams(poly: Vec3[], params: [number, number][], ds: number) {
  const cum: number[] = [0];
  for (let i = 1; i < poly.length; i++) cum.push(cum[i - 1] + dist(poly[i - 1], poly[i]));
  const length = cum[cum.length - 1];
  const n = Math.max(1, Math.round(length / ds));
  const step = length / n;
  const pts: Vec3[] = [];
  const out: [number, number][] = [];
  let j = 0;
  for (let i = 0; i <= n; i++) {
    const s = i * step;
    while (j < cum.length - 2 && cum[j + 1] < s) j++;
    const segLen = cum[j + 1] - cum[j];
    const u = segLen > 1e-9 ? Math.min(1, Math.max(0, (s - cum[j]) / segLen)) : 0;
    pts.push(lerp3(poly[j], poly[j + 1], u));
    out.push([params[j][0] + (params[j + 1][0] - params[j][0]) * u, params[j][1] + (params[j + 1][1] - params[j][1]) * u]);
  }
  return { pts, tangents: tangentsOf(pts), ds: step, length, params: out };
}

/** Coronary following the heart surface, given (t, theta) waypoints. */
function surfaceVessel(f: HeartFrame, waypoints: [number, number][], offset: number, prefix: Vec3[] = []) {
  const ctrl: Vec3[] = waypoints.map(([t, th]) => [t, th, 0]);
  const dense = catmullRom(ctrl, 40).map((p) => [p[0], p[1]] as [number, number]);
  const poly: Vec3[] = dense.map(([t, th]) => heartSurface(f, t, th, offset));
  const params = dense.slice();
  if (prefix.length) {
    // prefix points (e.g. from the aortic ostium) are blended in with the first waypoint's params
    const pre = catmullRom([...prefix, poly[0], poly[Math.min(poly.length - 1, 30)]], 16);
    const cut = pre.length - 17; // drop the part that duplicates poly
    const prePts = pre.slice(0, cut);
    poly.unshift(...prePts);
    params.unshift(...prePts.map(() => dense[0]));
  }
  return resampleWithParams(poly, params, CORONARY.ds);
}

/** Angle of direction d in a frame with tangent T and reference N (deg). */
export function frameAngle(T: Vec3, N: Vec3, d: Vec3): number {
  const n = orthoNorm(N, T);
  const b = norm(cross(T, n));
  return Math.atan2(dot(d, b), dot(d, n)) / DEG;
}

/** Reference vector used to measure wire rotation around a coronary tangent. */
export function wireRef(f: HeartFrame, T: Vec3): Vec3 {
  const r = orthoNorm(f.ant, T);
  return r[0] === 0 && r[1] === 0 && r[2] === 0 ? orthoNorm(f.lat, T) : r;
}

export function buildAnatomy(): Anatomy {
  const f = heartFrame();

  // ------------------------------------------------------------ aorta
  const valve: Vec3 = add(
    add(addScaled(f.base, f.axis, -AORTA.rootAboveBase), scale(f.ant, AORTA.rootAnterior)),
    [-AORTA.rootRightward, 0, 0],
  );
  const aortaCtrl: Vec3[] = [
    valve,
    add(valve, [-3, 26, 7]),
    add(valve, [-5, 55, 9]),
    add(valve, [2, 80, 2]),
    add(valve, [20, 93, -16]),
    add(valve, [43, 88, -34]),
    add(valve, [58, 62, -40]),
    add(valve, [62, 0, -40]),
    add(valve, [61, -150, -36]),
  ];
  const aortaCl = buildCenterline(aortaCtrl, 2);
  const aortaRef = aortaCl.pts.map((_, i) => {
    const s = i * aortaCl.ds;
    return (
      2 *
      interpKnots(
        [
          [0, AORTA.rootRadius],
          [25, AORTA.rootRadius + 1],
          [55, AORTA.ascendingRadius],
          [110, AORTA.archRadius],
          [190, AORTA.descendingRadius],
        ],
        s,
      )
    );
  });

  // ------------------------------------------------------------ root frame, cusps
  const rootAxis = aortaCl.tangents[0];
  const ostiumCenter = addScaled(valve, rootAxis, AORTA.ostiumHeight);
  const rootRef = orthoNorm(f.ant, rootAxis);
  const rootSide = norm(cross(rootAxis, rootRef));
  const rootAngle = (d: Vec3) => Math.atan2(dot(d, rootSide), dot(d, rootRef)) / DEG;
  const dirAt = (deg: number): Vec3 =>
    norm(add(scale(rootRef, Math.cos(deg * DEG)), scale(rootSide, Math.sin(deg * DEG))));

  const lmOffset = CORONARY.lmDiameter / 2 + CORONARY.surfaceGap;
  const bif = heartSurface(f, CORONARY.lmBifurcation.t, CORONARY.lmBifurcation.theta, lmOffset);
  const leftCusp = rootAngle(orthoNorm(sub(bif, ostiumCenter), rootAxis));
  const rcaStart = heartSurface(f, CORONARY.rca.path[0][0], CORONARY.rca.path[0][1], 2);
  const rightCusp = rootAngle(orthoNorm(sub(rcaStart, ostiumCenter), rootAxis));
  const nonCusp = wrapDeg(leftCusp + wrapDeg(rightCusp - leftCusp) / 2 + 180);
  const rootR = AORTA.rootRadius;
  const ostiumL = addScaled(ostiumCenter, dirAt(leftCusp), rootR);
  const ostiumR = addScaled(ostiumCenter, dirAt(rightCusp), rootR);

  // ------------------------------------------------------------ left main
  const lmDir = dirAt(leftCusp);
  const lmCtrl: Vec3[] = [
    addScaled(ostiumL, lmDir, -2.5),
    addScaled(ostiumL, lmDir, 2),
    lerp3(addScaled(ostiumL, lmDir, 5), bif, 0.45),
    bif,
  ];
  const lmCl = buildCenterline(lmCtrl, CORONARY.ds);
  const lmRef = lmCl.pts.map(() => CORONARY.lmDiameter);

  const coronary = (
    id: VesselId,
    name: string,
    path: [number, number][],
    ref: [number, number][],
    prefix: Vec3[] = [],
    parent?: VesselId,
    parentS?: number,
  ): Vessel => {
    const off = ref[0][1] / 2 + CORONARY.surfaceGap;
    const r = surfaceVessel(f, path, off, prefix);
    const refD = knotsProfile(ref, r.pts.length, r.ds);
    return { id, name, kind: 'coronary', ...r, refD, baseD: refD.slice(), parent, parentS };
  };

  const lad = coronary('LAD', 'Left anterior descending (LAD)', CORONARY.lad.path, CORONARY.lad.ref, [], 'LM', lmCl.length);
  // lesion
  const lesionSpec = { ...LESION };
  lad.baseD = stenosedProfile(lad.refD, lad.ds, lesionSpec);
  const ladParamAt = (s: number) => lad.params![Math.min(lad.params!.length - 1, Math.round(s / lad.ds))];
  const d1 = coronary(
    'D1',
    'First diagonal (D1)',
    [ladParamAt(CORONARY.d1.at), ...CORONARY.d1.path],
    CORONARY.d1.ref,
    [],
    'LAD',
    CORONARY.d1.at,
  );
  const d2 = coronary(
    'D2',
    'Second diagonal (D2)',
    [ladParamAt(CORONARY.d2.at), ...CORONARY.d2.path],
    CORONARY.d2.ref,
    [],
    'LAD',
    CORONARY.d2.at,
  );
  const lcx = coronary('LCX', 'Left circumflex (LCx)', CORONARY.lcx.path, CORONARY.lcx.ref, [], 'LM', lmCl.length);
  const rDir = dirAt(rightCusp);
  const rca = coronary('RCA', 'Right coronary artery (RCA)', CORONARY.rca.path, CORONARY.rca.ref, [
    addScaled(ostiumR, rDir, -2.5),
    addScaled(ostiumR, rDir, 2.5),
  ]);

  // ------------------------------------------------------------ access path
  const access = (id: VesselId, name: string, ctrl: Vec3[], radius: number): Vessel => {
    const cl = buildCenterline(ctrl, 2);
    const refD = cl.pts.map(() => radius * 2);
    return { id, name, kind: 'access', ...cl, refD, baseD: refD.slice() };
  };
  const radial = access('radial', 'Right radial artery', ACCESS.radial, ACCESS.radii.radial);
  const brachial = access('brachial', 'Brachial artery', ACCESS.brachial, ACCESS.radii.brachial);
  const axillary = access('axillary', 'Axillary artery', ACCESS.axillary, ACCESS.radii.axillary);
  const subclavian = access('subclavian', 'Right subclavian artery', ACCESS.subclavian, ACCESS.radii.subclavian);
  // brachiocephalic: from the arch (origin chosen as the arch sample closest below the subclavian end) to the subclavian
  const subEnd = ACCESS.subclavian[ACCESS.subclavian.length - 1];
  let bcI = 0;
  let best = Infinity;
  for (let i = 0; i < aortaCl.pts.length; i++) {
    const s = i * aortaCl.ds;
    if (s < 50 || s > 140) continue;
    const d = dist(aortaCl.pts[i], subEnd);
    if (d < best) {
      best = d;
      bcI = i;
    }
  }
  const bcOrigin = aortaCl.pts[bcI];
  const bcCtrl: Vec3[] = [bcOrigin, lerp3(bcOrigin, subEnd, 0.4), addScaled(lerp3(bcOrigin, subEnd, 0.75), [-1, 0, 0], 3), subEnd];
  const brachiocephalic = access('brachiocephalic', 'Brachiocephalic trunk', bcCtrl, ACCESS.radii.brachiocephalic);
  brachiocephalic.parent = 'aorta';
  brachiocephalic.parentS = bcI * aortaCl.ds;

  const aorta: Vessel = {
    id: 'aorta',
    name: 'Aorta',
    kind: 'aorta',
    ...aortaCl,
    refD: aortaRef,
    baseD: aortaRef.slice(),
  };
  const lm: Vessel = {
    id: 'LM',
    name: 'Left main (LM)',
    kind: 'coronary',
    ...lmCl,
    refD: lmRef,
    baseD: lmRef.slice(),
    params: lmCl.pts.map(() => [CORONARY.lmBifurcation.t, CORONARY.lmBifurcation.theta]),
  };

  const vessels: Record<VesselId, Vessel> = {
    radial,
    brachial,
    axillary,
    subclavian,
    brachiocephalic,
    aorta,
    LM: lm,
    LAD: lad,
    D1: d1,
    D2: d2,
    LCX: lcx,
    RCA: rca,
  };

  // ------------------------------------------------------------ branch angles for wire steering
  const childDir = (v: Vessel) => norm(sub(v.pts[Math.min(v.pts.length - 1, Math.round(5 / v.ds))], v.pts[0]));
  const angleAt = (parent: Vessel, s: number, child: Vessel) => {
    const i = Math.min(parent.pts.length - 1, Math.round(s / parent.ds));
    const T = parent.tangents[i];
    return frameAngle(T, wireRef(f, T), childDir(child));
  };
  const branches: BranchPoint[] = [
    { parent: 'LM', s: lm.length, child: 'LAD', angle: angleAt(lm, lm.length, lad), side: false },
    { parent: 'LM', s: lm.length, child: 'LCX', angle: angleAt(lm, lm.length, lcx), side: false },
    { parent: 'LAD', s: CORONARY.d1.at, child: 'D1', angle: angleAt(lad, CORONARY.d1.at, d1), side: true },
    { parent: 'LAD', s: CORONARY.d2.at, child: 'D2', angle: angleAt(lad, CORONARY.d2.at, d2), side: true },
  ];
  // guarantee LAD and LCx are well separated in the rotation frame
  if (angDiff(branches[0].angle, branches[1].angle) < 90) {
    branches[1].angle = branches[0].angle + 180;
  }

  const [l0, l1] = lesionRange(lesionSpec);

  const labels: Label[] = [
    { id: 'root', text: 'Aortic root', vessel: 'aorta', s: 8, description: 'Aortic root with the three sinuses (cusps) of Valsalva. The coronary ostia arise from the left and right sinuses.' },
    { id: 'asc', text: 'Ascending aorta', vessel: 'aorta', s: 50, description: 'The guide catheter is advanced down the ascending aorta to the root.' },
    { id: 'arch', text: 'Aortic arch', vessel: 'aorta', s: 110, description: 'From the right radial approach the catheter enters the aorta via the brachiocephalic trunk at the arch.' },
    { id: 'desc', text: 'Descending aorta', vessel: 'aorta', s: 220, description: 'Descending thoracic aorta, lying left of the spine.' },
    { id: 'bct', text: 'Brachiocephalic trunk', vessel: 'brachiocephalic', s: brachiocephalic.length * 0.5, description: 'First branch of the arch; the right subclavian and right common carotid arise from it.' },
    { id: 'sub', text: 'R. subclavian', vessel: 'subclavian', s: subclavian.length * 0.5, description: 'Right subclavian artery - tortuosity here is a common cause of difficult radial access.' },
    { id: 'axi', text: 'Axillary', vessel: 'axillary', s: axillary.length * 0.5, description: 'Axillary artery (continuation of the subclavian beyond the first rib).' },
    { id: 'bra', text: 'Brachial', vessel: 'brachial', s: brachial.length * 0.5, description: 'Brachial artery in the upper arm, bifurcating at the elbow into radial and ulnar arteries.' },
    { id: 'rad', text: 'Radial (access)', vessel: 'radial', s: 6, description: 'Right radial artery at the wrist: the access site. Radial access lowers bleeding risk compared with femoral access.' },
    { id: 'lm', text: 'LM', vessel: 'LM', s: lm.length * 0.5, description: 'Left main stem: arises from the left coronary cusp and divides into the LAD and circumflex.' },
    { id: 'lad', text: 'LAD', vessel: 'LAD', s: 95, description: 'Left anterior descending artery, running in the anterior interventricular groove; supplies the anterior wall and septum.' },
    { id: 'd1', text: 'D1', vessel: 'D1', s: 22, description: 'First diagonal branch - proximal to the lesion.' },
    { id: 'd2', text: 'D2', vessel: 'D2', s: 18, description: 'Second diagonal branch - distal to the lesion, so its flow depends on the lesion too.' },
    { id: 'lcx', text: 'LCx', vessel: 'LCX', s: 40, description: 'Left circumflex artery in the left atrioventricular groove; supplies the lateral wall.' },
    { id: 'rca', text: 'RCA', vessel: 'RCA', s: 60, description: 'Right coronary artery from the right cusp, in the right AV groove. Not the target vessel today.' },
    { id: 'lesion', text: '90% lesion', vessel: 'LAD', s: LESION.center, description: 'Target: 14 mm, 90% diameter stenosis in the mid LAD between D1 and D2.' },
  ];

  return {
    frame: f,
    vessels,
    root: {
      valve,
      axis: rootAxis,
      ref: rootRef,
      side: rootSide,
      radius: rootR,
      leftCusp,
      rightCusp,
      nonCusp,
      ostiumL,
      ostiumR,
      ostiumCenter,
    },
    branches,
    bcOriginS: bcI * aortaCl.ds,
    lesion: { vessel: 'LAD', s0: l0, s1: l1, center: LESION.center },
    labels,
    beatPivot: addScaled(f.base, f.axis, -4),
  };
}

/** Root direction for an angle (deg) in the aortic root plane. */
export function rootDir(r: RootInfo, deg: number): Vec3 {
  return norm(add(scale(r.ref, Math.cos(deg * DEG)), scale(r.side, Math.sin(deg * DEG))));
}

/** Vessel sample index for arc length s. */
export function idxAt(v: Vessel, s: number): number {
  return Math.min(v.pts.length - 1, Math.max(0, Math.round(s / v.ds)));
}

export const HEART_CENTER = HEART.center;
