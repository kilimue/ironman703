/**
 * Every anatomy size, device size and physiology constant lives here.
 * Units: 1 scene unit = 1 mm, time in seconds, pressure in atm.
 *
 * Patient coordinate system (right-handed, like Three.js):
 *   +X = patient's LEFT, +Y = SUPERIOR (head), +Z = ANTERIOR.
 *
 * EDUCATIONAL MODEL ONLY - numbers are plausible teaching values, not clinical reference data.
 */

export type Vec3 = [number, number, number];

// ---------------------------------------------------------------- heart
export const HEART = {
  /** Geometric centre of the ventricles (C-arm isocentre). */
  center: [0, 0, 0] as Vec3,
  /** Base -> apex direction (apex points left, forward, down). Normalised at runtime. */
  axis: [0.62, -0.5, 0.6] as Vec3,
  /** Base-to-apex length of the ventricular mass. */
  length: 100,
  /** Max cross-sectional radius. */
  radius: 44,
  /** Fraction of length where the radius peaks (0 = base plane, 1 = apex). */
  maxAt: 0.28,
  /** Base extends a little above t = 0 (atrial / AV-groove region). */
  tMin: -0.16,
  /** Lateral vs antero-posterior ellipse ratio. */
  apRatio: 0.84,
  /** Right-ventricular bulge (fraction of radius), centred at this angle (deg, 0 = anterior, +90 = lateral LV, -90 = RV/acute margin). */
  rvBulge: 0.17,
  rvBulgeAngle: -72,
  rvBulgeWidth: 55,
  /** Interventricular grooves (deg) and AV groove (t), used for fat colouring and coronary routing. */
  antIVGroove: 12,
  postIVGroove: 192,
  avGrooveT: 0.03,
  /** Beat: systole occupies this fraction of the RR interval. */
  systoleFraction: 0.38,
  /** Systolic scale in heart frame (radial, axial). */
  systolicRadialScale: 0.91,
  systolicAxialScale: 0.95,
};

// ---------------------------------------------------------------- aorta & access
export const AORTA = {
  /** Aortic valve centre relative to the heart base centre: [along -axis (above base), anterior offset]. */
  rootAboveBase: 14,
  rootAnterior: 9,
  rootRightward: 4,
  /** Lumen radii. */
  rootRadius: 14,
  ascendingRadius: 15,
  archRadius: 12.5,
  descendingRadius: 11,
  /** Height above the valve where the coronary ostia sit. */
  ostiumHeight: 11,
  /** Where the guide catheter body stops (arc length above the valve, on the aortic centreline). */
  guideParkHeight: 34,
};

/** Access vessel control points (patient coordinates, mm). Arm abducted alongside the body, palm up. */
export const ACCESS = {
  radial: [
    [-212, -292, 62],
    [-210, -240, 52],
    [-206, -170, 38],
    [-201, -100, 24],
  ] as Vec3[],
  brachial: [
    [-201, -100, 24],
    [-196, -40, 16],
    [-186, 30, 8],
    [-168, 88, 0],
  ] as Vec3[],
  axillary: [
    [-168, 88, 0],
    [-140, 118, -6],
    [-108, 136, -10],
  ] as Vec3[],
  subclavian: [
    [-108, 136, -10],
    [-84, 150, -13],
    [-63, 155, -15],
    [-52, 151, -16],
  ] as Vec3[],
  /** Brachiocephalic trunk ends at the aortic arch (its origin point on the arch is computed). */
  radii: {
    radial: 1.35,
    brachial: 2.1,
    axillary: 3.0,
    subclavian: 4.0,
    brachiocephalic: 5.5,
  },
  /** Arc length (from wrist) landmarks are computed at runtime; elbow = end of radial artery. */
};

// ---------------------------------------------------------------- coronaries
/** Coronary paths are given in heart-surface parameters (t along base->apex, theta deg around). */
export const CORONARY = {
  /** Gap between epicardium and vessel centreline, added to the vessel radius. */
  surfaceGap: 0.2,
  lmLength: 11,
  lmDiameter: 4.4,
  /** LM bifurcation on the heart surface. */
  lmBifurcation: { t: 0.0, theta: 42 },
  lad: {
    path: [
      [0.0, 42],
      [0.06, 26],
      [0.16, 16],
      [0.32, 12],
      [0.5, 11],
      [0.7, 10],
      [0.88, 8],
      [0.99, 2],
    ] as [number, number][],
    /** Reference diameter profile (arc length mm, diameter mm), linear interpolation. */
    ref: [
      [0, 3.6],
      [24, 3.3],
      [27, 3.15],
      [42, 2.95],
      [58, 2.8],
      [61, 2.6],
      [95, 2.1],
      [140, 1.5],
    ] as [number, number][],
  },
  d1: {
    at: 25,
    path: [
      [0.4, 52],
      [0.58, 64],
      [0.74, 72],
    ] as [number, number][],
    ref: [
      [0, 2.3],
      [60, 1.3],
    ] as [number, number][],
  },
  d2: {
    at: 60,
    path: [
      [0.62, 40],
      [0.78, 50],
      [0.9, 56],
    ] as [number, number][],
    ref: [
      [0, 2.0],
      [45, 1.2],
    ] as [number, number][],
  },
  lcx: {
    path: [
      [0.0, 42],
      [0.0, 70],
      [0.02, 100],
      [0.06, 132],
      [0.14, 160],
      [0.24, 178],
    ] as [number, number][],
    ref: [
      [0, 3.2],
      [90, 2.0],
    ] as [number, number][],
  },
  rca: {
    /** Starts from the right cusp ostium; first surface point: */
    path: [
      [0.0, -30],
      [0.01, -70],
      [0.03, -110],
      [0.06, -150],
      [0.1, -185],
      [0.22, -200],
      [0.4, -205],
    ] as [number, number][],
    ref: [
      [0, 3.6],
      [150, 2.2],
    ] as [number, number][],
  },
  /** Sample spacing for coronary centrelines (mm). */
  ds: 0.5,
};

// ---------------------------------------------------------------- lesion
export const LESION = {
  vessel: 'LAD' as const,
  /** Centre of the lesion along the LAD (mm from LAD origin) - between D1 (25) and D2 (60). */
  center: 42,
  length: 14,
  /** Peak diameter stenosis (fraction). */
  stenosis: 0.9,
  /** Central plateau length (mm); remaining length is cosine taper. */
  plateau: 3,
};

// ---------------------------------------------------------------- fluoroscopy
export const FLUORO = {
  frameRate: 15,
  sourceToIso: 760,
  /** Field of view at the isocentre (mm, square). */
  fieldOfView: 210,
  /** Linear attenuation-like coefficients per mm (teaching values). */
  muContrast: 0.55,
  muVesselWall: 0.004,
  muHeart: 0.0028,
  muSpine: 0.012,
  muRib: 0.03,
  muDiaphragm: 0.004,
  muSoftTissue: 0.0012,
  muBone: 0.02,
  muGuide: 0.35,
  muWireBody: 0.5,
  muWireTip: 2.4,
  muMarker: 1.6,
  muStent: 0.22,
  noise: 0.07,
  cineNoise: 0.035,
  blur: 0.9,
  collimation: 0.94,
  /** Background brightness of an unattenuated pixel. */
  background: 0.9,
  presets: [
    { name: 'RAO 30° CRA 30°', lao: -30, cra: 30 },
    { name: 'AP CRA 35°', lao: 0, cra: 35 },
    { name: 'LAO 45° CRA 30°', lao: 45, cra: 30 },
    { name: 'LAO 45° CAU 30° (spider)', lao: 45, cra: -30 },
    { name: 'RAO 30° CAU 25°', lao: -30, cra: -25 },
    { name: 'AP', lao: 0, cra: 0 },
  ],
  /** Projections closer than this (deg, combined) are not "distinct". */
  distinctProjectionDeg: 20,
  fineStepDeg: 2,
};

// ---------------------------------------------------------------- contrast
export const CONTRAST = {
  selectiveMl: 8,
  aorticMl: 20,
  /** Bolus duration (s) - how long dye keeps arriving at a ring after the front. */
  bolusSelective: 1.6,
  bolusAortic: 1.2,
  /** Contrast intensity in coronaries during an aortic flush. */
  aorticCoronaryIntensity: 0.5,
  /** Reflux intensity into the aortic root during a selective injection. */
  refluxIntensity: 0.28,
  refluxLength: 45,
  minCine: 3,
  maxCine: 9,
  safeTotalMl: 120,
};

// ---------------------------------------------------------------- flow
export const FLOW = {
  /** Contrast front velocity in coronaries with normal flow (mm/s). */
  coronaryVelocity: 150,
  aorticVelocity: 600,
  /** Flow factor is 1 below this diameter stenosis... */
  stenosisOnset: 0.6,
  /** ...and 0 at or above this one. */
  stenosisOcclusion: 0.98,
  /** Unsealed dissection multiplies downstream flow by this. */
  dissectionPenalty: 0.45,
  timi3: 0.8,
  timi2: 0.25,
  timi1: 0.02,
  /** Fraction of a dissection that a stent must cover to seal it. */
  sealCoverage: 0.9,
};

// ---------------------------------------------------------------- devices
export const GUIDE = {
  french: 6,
  outerDiameter: 2.0,
  speed: 60,
  fineSpeed: 14,
  rotateSpeed: 70,
  fineRotateSpeed: 18,
  /** Tip must face the left cusp within this angle to engage. */
  engageTolerance: 25,
  /** Rotating more than this away from the engaged angle pops the guide out. */
  popOutTorque: 40,
  /** Max speed (mm/s) considered a "gentle" advance for engagement. */
  gentleSpeed: 22,
  /** Extra push (mm) at the root needed to seat the tip. */
  seatPush: 3,
  /** How far the seated tip sits inside the LM. */
  seatDepth: 2,
  /** Initial tip rotation offset from the left cusp (deg). */
  initialOffset: 105,
};

export const WIRE = {
  diameter: 0.36, // 0.014"
  speed: 15,
  fineSpeed: 4,
  rotateSpeed: 110,
  fineRotateSpeed: 30,
  /** Safe crossing speed in the lesion (mm/s); torquing while advancing multiplies it. */
  safeLesionSpeed: 8,
  torqueBonus: 1.5,
  /** While buckling the tip only progresses at this fraction of the commanded speed. */
  buckleProgress: 0.35,
  /** Dissection risk gained per mm advanced over the safe speed (scaled by overspeed ratio). */
  riskPerMm: 0.035,
  maxRisk: 0.85,
  /** Side branches are captured when the tip faces them within this angle. */
  branchCapture: 50,
  /** Start warning this close to the vessel end. */
  endWarning: 4,
  /** Upcoming branch hints within this distance. */
  hintDistance: 14,
  /** Wire is "distal" when this far beyond the lesion end in the LAD. */
  distalPark: 22,
  radiopaqueTip: 30,
  /** Initial tip rotation (deg). */
  initialRotation: 200,
  /** Retract limit (inside the guide). */
  minPos: -20,
};

export const BALLOON = {
  diameters: [2.0, 2.5, 3.0, 3.5],
  lengths: [12, 15, 20],
  defaultSize: { d: 2.5, l: 15 },
  nominal: 8,
  rbp: 14,
  /** Rupture at RBP + this. */
  ruptureMargin: 4,
  /** Semi-compliance: fractional diameter change per atm. */
  compliance: 0.015,
  /** Below this pressure the balloon is still unfolding. */
  unfoldPressure: 2,
  /** Folded crossing profile (mm). */
  profile: 0.9,
  inflateRate: 3,
  fineInflateRate: 0.7,
  deflateRate: 7,
  speed: 15,
  fineSpeed: 3,
  /** Catheter tip beyond the distal marker (mm). */
  tipLength: 3,
  /** Loaded position of the distal tip (mm, inside the guide). */
  loadPos: -25,
  /** Elastic recoil after plain balloon dilation. */
  recoil: 0.3,
  /** Inflated if pressure above this (stops flow). */
  occludePressure: 0.6,
};

export const STENT = {
  diameters: [2.5, 2.75, 3.0, 3.5, 4.0],
  lengths: [12, 15, 18, 23, 28],
  defaultSize: { d: 3.0, l: 18 },
  nominal: 10,
  rbp: 16,
  ruptureMargin: 4,
  compliance: 0.012,
  unfoldPressure: 2,
  profile: 1.1,
  /** Deployed once pressure reaches this. */
  deployPressure: 6,
  /** Stent recoil. */
  recoil: 0.03,
  /** Crimped stent outer radius on the delivery balloon. */
  crimpedRadius: 0.6,
  inflateRate: 3,
  fineInflateRate: 0.7,
  deflateRate: 7,
  speed: 15,
  fineSpeed: 3,
  tipLength: 3,
  loadPos: -25,
  occludePressure: 0.6,
};

/** Shared lumen-treatment constants. */
export const TREATMENT = {
  /** Smooth taper length at treated segment ends (mm). */
  taper: 1.2,
  /** Device diameter above this multiple of the reference diameter dissects. */
  dissectionRatio: 1.2,
  /** Edge dissection length beyond a stent. */
  edgeDissectionLength: 6,
  /** Chance that a balloon rupture dissects the vessel. */
  ruptureDissectionChance: 0.5,
  /** Coverage margin considered adequate (mm, each side). */
  goodMargin: 1.5,
};

// ---------------------------------------------------------------- physiology
export const PHYSIOLOGY = {
  baseHR: 68,
  ischaemiaHR: 22,
  unstableHR: 14,
  baseSys: 132,
  baseDia: 76,
  spo2: 98,
  /** Seconds of complete LAD occlusion until full ischaemia. */
  ischaemiaRise: 20,
  /** Recovery time constant after reperfusion. */
  recoveryTau: 8,
  /** Ischaemia target for very poor (TIMI 0-1) flow without occlusion. */
  poorFlowIschaemia: 0.45,
  poorFlowThreshold: 0.25,
  maxSTmm: 4,
  painThreshold: 0.3,
  /** Occlusion durations (s). */
  hypotensionAfter: 40,
  unstableAfter: 60,
  hypotensionDrop: 28,
  unstableDrop: 30,
  pvcChance: 0.22,
  actBaseline: 128,
  actHeparin: 285,
  actTau: 9,
  /** Recommended ACT before wiring (s). */
  actTarget: 250,
};

// ---------------------------------------------------------------- evaluation
export const EVAL = {
  residualOk: 0.1,
  residualWarn: 0.3,
  stentRatioOk: [0.95, 1.15] as [number, number],
  stentRatioWarn: [0.85, 1.25] as [number, number],
  inflationOk: 30,
  inflationWarn: 60,
  contrastOk: 120,
  contrastWarn: 200,
  fluoroOk: 600,
  fluoroWarn: 1200,
};
