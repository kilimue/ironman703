/**
 * Simulation core: one mutable SimState advanced by stepSim(). No Three.js / DOM.
 * Sizing, flow, scoring and stage logic live in pure helper modules; this file wires them together.
 */
import { AORTA, CONTRAST, FLOW, FLUORO, GUIDE, PHYSIOLOGY, TREATMENT, WIRE, BALLOON, STENT } from '../config/anatomy';
import { buildAnatomy, type Anatomy, type VesselId, CORONARY_IDS, idxAt } from '../anatomy/vesselTree';
import { computeLumen, type LumenTreatment, measureQCA, type QCA } from '../anatomy/lumen';
import { accessPath, rangesOnPath, type Path } from '../physics/route';
import { makeGuide, stepGuide, type GuideState } from '../physics/guide';
import { makeWire, stepWire, wirePath, type WireState } from '../physics/wire';
import {
  makeCath,
  stepCath,
  setSize,
  deflate as deflateCath,
  isOut,
  isInflated,
  currentDiameter,
  workingRange,
  type CathKind,
  type CathState,
  type InflationRecord,
} from '../physics/balloon';
import { computeFlow, cineLength, distalFlow, type FlowResult, type FlowVessel, type FlowObstruction } from '../physics/flow';
import { makePhysiology, stepPhysiology, type PhysState } from '../physics/physiology';
import type { Msg } from '../physics/messages';
import { makeRng, wrapDeg, clamp } from '../math/vec3';
import { TOOLS, toolLock, type ToolId } from '../tools/tools';
import { buildSnapshot, type Snapshot } from './snapshot';
import { makeStageProgress, progressStages, type StageProgress } from './stages';

export interface InputState {
  /** -1..1 (W/S keys or auto input) */
  advance: number;
  /** -1..1 (A/D) */
  rotate: number;
  fine: boolean;
  inflate: boolean;
}

export const emptyInput = (): InputState => ({ advance: 0, rotate: 0, fine: false, inflate: false });

export interface DeployedStent {
  id: number;
  vessel: VesselId;
  s0: number;
  s1: number;
  d: number;
  l: number;
  /** Largest balloon diameter achieved inside it (deployment + post-dilation). */
  expandedD: number;
  maxPressure: number;
  at: number;
}

export interface BalloonTreatment {
  vessel: VesselId;
  s0: number;
  s1: number;
  diameter: number;
}

export interface Dissection {
  id: number;
  vessel: VesselId;
  s0: number;
  s1: number;
  cause: 'wire' | 'balloon' | 'stent-edge' | 'rupture';
  at: number;
  sealed: boolean;
  /** Contrast staining level (0..1+), decays slowly. */
  stain: number;
}

export interface Injection {
  t0: number;
  kind: 'selective' | 'aortic';
  bolus: number;
  duration: number;
  arrival: Partial<Record<VesselId, number[]>>;
  factor: Partial<Record<VesselId, number[]>>;
  intensity: Partial<Record<VesselId, number>>;
  /** Only aorta rings below this arc length fill (reflux). */
  aortaLimit: number;
  lao: number;
  cra: number;
  afterStent: boolean;
}

export interface LogEntry {
  t: number;
  text: string;
  level: Msg['level'];
}

export interface SimState {
  t: number;
  anat: Anatomy;
  access: Path;
  routeLength: number;
  landmarks: { elbowS: number; chestS: number; aortaEntryS: number };
  guide: GuideState;
  wire: WireState;
  balloon: CathState;
  stent: CathState;
  tool: ToolId;
  balloonTx: BalloonTreatment[];
  stents: DeployedStent[];
  dissections: Dissection[];
  /** Permanent lumen per vessel. */
  lumen: Record<VesselId, number[]>;
  /** Live lumen (includes a balloon stretching the vessel). */
  live: Record<VesselId, number[]>;
  lumenVersion: number;
  flow: FlowResult;
  occluded: boolean;
  phys: PhysState;
  contrast: { totalMl: number; injections: Injection[]; current: Injection | null };
  xray: { pedal: boolean; cineUntil: number; fluoroTime: number; active: boolean; everImaged: boolean; mode: 'off' | 'fluoro' | 'cine' };
  carm: { lao: number; cra: number; preset: number };
  heparinGiven: boolean;
  flags: {
    lookedOnFluoro: boolean;
    diagAngio: boolean;
    qcaUsed: boolean;
    qcaAfterPredil: boolean;
    predilInflated: boolean;
    predilated: boolean;
    stentLoaded: boolean;
    stentCovered: boolean;
    deployedAndDeflated: boolean;
    finalViews: { lao: number; cra: number }[];
    ruptures: number;
    /** dissection already triggered in the current inflation */
    inflDissected: boolean;
  };
  inflations: InflationRecord[];
  stages: StageProgress;
  /** Queue of messages for the UI (drained by the UI). */
  outbox: Msg[];
  log: LogEntry[];
  rng: () => number;
  /** Pending wheel travel (mm). */
  wheel: number;
  ended: boolean;
  /** Lumen / dissections changed: recompute flow on the next step. */
  needFlow: boolean;
  nextId: number;
  snapshot: Snapshot;
  /** Increments on each heartbeat (for audio / monitor). */
  beatCount: number;
}

const ALL_IDS: VesselId[] = ['radial', 'brachial', 'axillary', 'subclavian', 'brachiocephalic', 'aorta', 'LM', 'LAD', 'D1', 'D2', 'LCX', 'RCA'];
const LEFT_TREE: VesselId[] = ['LM', 'LAD', 'LCX', 'D1', 'D2'];

export function createSim(seed = 20240917): SimState {
  const anat = buildAnatomy();
  const access = accessPath(anat, AORTA.guideParkHeight);
  const V = anat.vessels;
  const lumen = {} as Record<VesselId, number[]>;
  for (const id of ALL_IDS) lumen[id] = V[id].baseD.slice();
  const sim: SimState = {
    t: 0,
    anat,
    access,
    routeLength: access.length,
    landmarks: {
      elbowS: V.radial.length + 4,
      chestS: V.radial.length + V.brachial.length + V.axillary.length,
      aortaEntryS: access.starts[5],
    },
    guide: makeGuide(anat.root),
    wire: makeWire(),
    balloon: makeCath('balloon'),
    stent: makeCath('stent'),
    tool: 'guide',
    balloonTx: [],
    stents: [],
    dissections: [],
    lumen,
    live: Object.fromEntries(ALL_IDS.map((id) => [id, lumen[id].slice()])) as Record<VesselId, number[]>,
    lumenVersion: 0,
    flow: {},
    occluded: false,
    phys: makePhysiology(),
    contrast: { totalMl: 0, injections: [], current: null },
    xray: { pedal: false, cineUntil: -1, fluoroTime: 0, active: false, everImaged: false, mode: 'off' },
    carm: { lao: FLUORO.presets[5].lao, cra: FLUORO.presets[5].cra, preset: 5 },
    heparinGiven: false,
    flags: {
      lookedOnFluoro: false,
      diagAngio: false,
      qcaUsed: false,
      qcaAfterPredil: false,
      predilInflated: false,
      predilated: false,
      stentLoaded: false,
      stentCovered: false,
      deployedAndDeflated: false,
      finalViews: [],
      ruptures: 0,
      inflDissected: false,
    },
    inflations: [],
    stages: makeStageProgress(),
    outbox: [],
    log: [],
    rng: makeRng(seed),
    wheel: 0,
    ended: false,
    needFlow: true,
    nextId: 1,
    snapshot: undefined as unknown as Snapshot,
    beatCount: 0,
  };
  sim.flow = flowFor(sim, sim.lumen, []);
  sim.snapshot = buildSnapshot(sim);
  return sim;
}

// ------------------------------------------------------------------ messaging

export function say(sim: SimState, m: Msg, log = true) {
  sim.outbox.push(m);
  if (log && (m.level !== 'info' || !m.key)) sim.log.push({ t: sim.t, text: m.text, level: m.level });
}
function logOnly(sim: SimState, text: string, level: Msg['level'] = 'info') {
  sim.log.push({ t: sim.t, text, level });
}

// ------------------------------------------------------------------ lumen & flow

function flowVessels(sim: SimState, lumen: Record<VesselId, number[]>): FlowVessel[] {
  const V = sim.anat.vessels;
  return [...LEFT_TREE, 'RCA' as VesselId].map((id) => ({
    id,
    parent: V[id].parent,
    parentS: V[id].parentS,
    ds: V[id].ds,
    lumen: lumen[id],
    ref: V[id].refD,
  }));
}

function flowFor(sim: SimState, lumen: Record<VesselId, number[]>, obstructions: FlowObstruction[]): FlowResult {
  return computeFlow(
    flowVessels(sim, lumen),
    FLOW.coronaryVelocity,
    obstructions,
    sim.dissections.map((d) => ({ vessel: d.vessel, s0: d.s0, sealed: d.sealed })),
  );
}

/** Rebuild the permanent lumen from native disease + balloon results + stents. */
export function rebuildLumen(sim: SimState) {
  const V = sim.anat.vessels;
  for (const id of CORONARY_IDS) {
    const tx: LumenTreatment[] = [
      ...sim.balloonTx.filter((b) => b.vessel === id).map((b) => ({ s0: b.s0, s1: b.s1, diameter: b.diameter })),
      ...sim.stents.filter((s) => s.vessel === id).map((s) => ({ s0: s.s0, s1: s.s1, diameter: s.expandedD * (1 - STENT.recoil) })),
    ];
    sim.lumen[id] = computeLumen(V[id].baseD, V[id].ds, tx);
  }
  updateSealing(sim);
  sim.needFlow = true;
}

function updateSealing(sim: SimState) {
  for (const d of sim.dissections) {
    const len = d.s1 - d.s0;
    let covered = 0;
    // union coverage over stents in the same vessel (sampled)
    const n = 40;
    for (let i = 0; i < n; i++) {
      const s = d.s0 + ((i + 0.5) / n) * len;
      if (sim.stents.some((st) => st.vessel === d.vessel && s >= st.s0 && s <= st.s1)) covered++;
    }
    const was = d.sealed;
    d.sealed = covered / n >= FLOW.sealCoverage;
    if (d.sealed && !was) say(sim, { level: 'ok', text: 'The dissection is now covered by a stent (sealed).', key: 'sealed-' + d.id });
  }
}

/** The catheter currently being used on the wire (balloon or stent), if out. */
function activeCaths(sim: SimState): CathState[] {
  return [sim.balloon, sim.stent];
}

function updateLiveLumenAndFlow(sim: SimState) {
  const path = wirePath(sim.anat, sim.wire);
  const live = {} as Record<VesselId, number[]>;
  for (const id of ALL_IDS) live[id] = sim.lumen[id];
  const obstructions: FlowObstruction[] = [];
  for (const c of activeCaths(sim)) {
    if (!isOut(c) || c.pressure <= 0) continue;
    const d = currentDiameter(c);
    const [a, b] = workingRange(c);
    for (const r of rangesOnPath(path, a, b)) {
      const V = sim.anat.vessels[r.vessel];
      live[r.vessel] = computeLumen(live[r.vessel], V.ds, [{ s0: r.s0, s1: r.s1, diameter: d }]);
      if (isInflated(c)) obstructions.push({ vessel: r.vessel, s: r.s0 });
    }
  }
  sim.live = live;
  sim.flow = flowFor(sim, live, obstructions);
  sim.occluded = obstructions.some((o) => LEFT_TREE.includes(o.vessel));
  sim.lumenVersion++;
}

// ------------------------------------------------------------------ device events

function addDissection(sim: SimState, vessel: VesselId, s0: number, s1: number, cause: Dissection['cause']) {
  const V = sim.anat.vessels[vessel];
  const d: Dissection = {
    id: sim.nextId++,
    vessel,
    s0: clamp(s0, 0, V.length),
    s1: clamp(s1, 0, V.length),
    cause,
    at: sim.t,
    sealed: false,
    stain: 0.4,
  };
  if (d.s1 - d.s0 < 1) d.s1 = Math.min(V.length, d.s0 + 3);
  sim.dissections.push(d);
  updateSealing(sim);
  sim.needFlow = true;
  const where = vessel === 'LAD' ? 'LAD' : sim.anat.vessels[vessel].name;
  const causeText =
    cause === 'wire'
      ? 'wire forcing'
      : cause === 'stent-edge'
        ? 'stent oversizing (edge dissection)'
        : cause === 'rupture'
          ? 'balloon rupture'
          : 'balloon oversizing';
  say(sim, {
    level: 'danger',
    text: `Coronary DISSECTION in the ${where} from ${causeText}.${d.sealed ? '' : ' Flow is reduced until a stent covers it.'}`,
    key: 'dissection-' + d.id,
  });
}

function handleInflationTick(sim: SimState, c: CathState) {
  if (!isOut(c) || !isInflated(c)) return;
  const path = wirePath(sim.anat, sim.wire);
  const [a, b] = workingRange(c);
  const d = currentDiameter(c);
  for (const r of rangesOnPath(path, a, b)) {
    // stents under this balloon are expanded / post-dilated
    for (const st of sim.stents) {
      if (st.vessel !== r.vessel) continue;
      const ov = Math.min(st.s1, r.s1) - Math.max(st.s0, r.s0);
      if (ov > 1 && d > st.expandedD) {
        st.expandedD = d;
        st.maxPressure = Math.max(st.maxPressure, c.pressure);
      }
    }
    // oversizing -> dissection (once per inflation)
    const V = sim.anat.vessels[r.vessel];
    const ref = V.refD[idxAt(V, (r.s0 + r.s1) / 2)];
    if (!sim.flags.inflDissected && V.kind === 'coronary' && d > TREATMENT.dissectionRatio * ref) {
      sim.flags.inflDissected = true;
      if (c.kind === 'stent') {
        addDissection(sim, r.vessel, r.s1 + 0.3, r.s1 + 0.3 + TREATMENT.edgeDissectionLength, 'stent-edge');
      } else addDissection(sim, r.vessel, r.s0, r.s1, 'balloon');
    }
  }
  rebuildLumen(sim);
}

function deployStent(sim: SimState, c: CathState) {
  const path = wirePath(sim.anat, sim.wire);
  const [a, b] = workingRange(c);
  const pieces = rangesOnPath(path, a, b);
  for (const r of pieces) {
    sim.stents.push({
      id: sim.nextId++,
      vessel: r.vessel,
      s0: r.s0,
      s1: r.s1,
      d: c.d,
      l: c.l,
      expandedD: currentDiameter(c),
      maxPressure: c.pressure,
      at: sim.t,
    });
  }
  rebuildLumen(sim);
  say(sim, { level: 'ok', text: `Stent ${c.d.toFixed(2)} x ${c.l} mm deployed (permanent). Hold to nominal pressure, then deflate.`, key: 'deployed-' + sim.stents.length });
}

function handleInflationRecord(sim: SimState, rec: InflationRecord) {
  sim.inflations.push(rec);
  sim.flags.inflDissected = false;
  logOnly(
    sim,
    `${rec.kind === 'balloon' ? 'Balloon' : 'Stent balloon'} ${rec.d}x${rec.l}: ${rec.maxPressure.toFixed(1)} atm max, Ø ${rec.maxDiameter.toFixed(2)} mm, ${rec.duration.toFixed(0)} s`,
  );
  if (rec.kind === 'balloon') {
    const path = wirePath(sim.anat, sim.wire);
    for (const r of rangesOnPath(path, rec.range[0], rec.range[1])) {
      sim.balloonTx.push({ vessel: r.vessel, s0: r.s0, s1: r.s1, diameter: rec.maxDiameter * (1 - BALLOON.recoil) });
    }
    rebuildLumen(sim);
  }
  if (rec.duration > 45) say(sim, { level: 'warn', text: `That inflation lasted ${rec.duration.toFixed(0)} s - keep inflations short to limit ischaemia.`, key: 'long-infl' });
}

// ------------------------------------------------------------------ actions (shared by UI and demo)

export function selectTool(sim: SimState, id: ToolId): boolean {
  const lock = toolLock(id, sim.snapshot);
  if (lock) {
    say(sim, { level: 'warn', text: lock, key: 'lock-' + id }, false);
    return false;
  }
  const def = TOOLS.find((t) => t.id === id)!;
  if (id === 'contrast') {
    inject(sim);
    return true;
  }
  if (!def.selectable) return true;
  sim.tool = id;
  if (id === 'measure') {
    sim.flags.qcaUsed = true;
    if (sim.flags.predilated) sim.flags.qcaAfterPredil = true;
  }
  if (id === 'stent') sim.flags.stentLoaded = true;
  return true;
}

export function giveHeparin(sim: SimState) {
  if (sim.heparinGiven) {
    say(sim, { level: 'info', text: `Heparin already given - ACT ${Math.round(sim.phys.act)} s.`, key: 'heparin-again' }, false);
    return;
  }
  sim.heparinGiven = true;
  sim.phys = { ...sim.phys, heparinAt: sim.t };
  say(sim, { level: 'ok', text: 'Unfractionated heparin 70-100 IU/kg IV given. ACT will rise to ~285 s.', key: 'heparin' });
}

export function setPedal(sim: SimState, on: boolean) {
  sim.xray.pedal = on;
}

export function setProjection(sim: SimState, lao: number, cra: number, preset = -1) {
  sim.carm.lao = clamp(lao, -90, 90);
  sim.carm.cra = clamp(cra, -45, 45);
  sim.carm.preset = preset;
}

export function cyclePreset(sim: SimState) {
  const i = (sim.carm.preset + 1 + FLUORO.presets.length) % FLUORO.presets.length;
  const p = FLUORO.presets[i];
  setProjection(sim, p.lao, p.cra, i);
}

export function nudgeCarm(sim: SimState, dLao: number, dCra: number) {
  setProjection(sim, sim.carm.lao + dLao, sim.carm.cra + dCra, -1);
}

export function setCathSize(sim: SimState, kind: CathKind, d: number, l: number) {
  const c = kind === 'balloon' ? sim.balloon : sim.stent;
  const r = setSize(c, d, l);
  if (r.msg) say(sim, r.msg, false);
  if (kind === 'balloon') sim.balloon = r.cath;
  else sim.stent = r.cath;
}

export function deflate(sim: SimState) {
  const pick: CathState[] =
    sim.tool === 'balloon' ? [sim.balloon] : sim.tool === 'stent' ? [sim.stent] : [sim.balloon, sim.stent];
  for (const c of pick) {
    if (c.pressure > 0) {
      if (c.kind === 'balloon') sim.balloon = deflateCath(c);
      else sim.stent = deflateCath(c);
    }
  }
}

export function addWheel(sim: SimState, mm: number) {
  sim.wheel = clamp(sim.wheel + mm, -30, 30);
}

export function projectionDistinct(a: { lao: number; cra: number }, b: { lao: number; cra: number }) {
  return Math.hypot(wrapDeg(a.lao - b.lao), a.cra - b.cra) >= FLUORO.distinctProjectionDeg;
}

export function inject(sim: SimState) {
  const g = sim.guide;
  if (g.s < sim.landmarks.aortaEntryS) {
    say(sim, { level: 'warn', text: 'Advance the guide into the aorta first - nothing to inject through yet.', key: 'inject-no-guide' }, false);
    return;
  }
  const selective = g.engaged;
  const kind: Injection['kind'] = selective ? 'selective' : 'aortic';
  const ml = selective ? CONTRAST.selectiveMl : CONTRAST.aorticMl;
  sim.contrast.totalMl += ml;
  const bolus = selective ? CONTRAST.bolusSelective : CONTRAST.bolusAortic;
  const V = sim.anat.vessels;
  const arrival: Injection['arrival'] = {};
  const factor: Injection['factor'] = {};
  const intensity: Injection['intensity'] = {};
  const offset = selective ? 0 : 0.08;
  const coronaries: VesselId[] = selective ? LEFT_TREE : [...LEFT_TREE, 'RCA'];
  let minF = 1;
  const allArr: number[] = [];
  for (const id of coronaries) {
    const f = sim.flow[id];
    if (!f) continue;
    arrival[id] = f.arrival.map((a) => a + offset);
    factor[id] = f.factor.slice();
    intensity[id] = selective ? 1 : CONTRAST.aorticCoronaryIntensity;
    allArr.push(...arrival[id]!);
    if (id === 'LAD' || id === 'LCX') minF = Math.min(minF, Math.max(0.15, distalFlow(sim.flow, id) || 0.15));
  }
  const ao = V.aorta;
  arrival.aorta = ao.pts.map((_, i) => (selective ? 0.05 : (i * ao.ds) / FLOW.aorticVelocity));
  factor.aorta = ao.pts.map(() => 1);
  intensity.aorta = selective ? CONTRAST.refluxIntensity : 1;
  const duration = cineLength(allArr, bolus, minF);
  const afterStent = sim.stents.length > 0 && sim.flags.deployedAndDeflated;
  const inj: Injection = {
    t0: sim.t,
    kind,
    bolus,
    duration,
    arrival,
    factor,
    intensity,
    aortaLimit: selective ? CONTRAST.refluxLength : Infinity,
    lao: sim.carm.lao,
    cra: sim.carm.cra,
    afterStent,
  };
  sim.contrast.injections.push(inj);
  sim.contrast.current = inj;
  sim.xray.cineUntil = sim.t + duration;
  for (const d of sim.dissections) {
    const a = arrival[d.vessel];
    if (a && isFinite(a[idxAt(V[d.vessel], d.s0)])) d.stain = Math.min(1.6, d.stain + 0.7);
  }
  if (selective) sim.flags.diagAngio = true;
  if (afterStent && selective) {
    sim.flags.finalViews.push({ lao: sim.carm.lao, cra: sim.carm.cra });
  }
  const proj = projectionName(sim.carm.lao, sim.carm.cra);
  say(sim, {
    level: 'info',
    text: `${selective ? 'Selective left coronary injection' : 'Aortic root flush'} (${ml} ml) - cine ${duration.toFixed(1)} s in ${proj}.`,
    key: 'inject-' + sim.contrast.injections.length,
  });
  if (sim.contrast.totalMl > CONTRAST.safeTotalMl && sim.contrast.totalMl - ml <= CONTRAST.safeTotalMl)
    say(sim, { level: 'warn', text: `Contrast total above ${CONTRAST.safeTotalMl} ml - think of the kidneys.`, key: 'contrast-high' });
}

export function projectionName(lao: number, cra: number): string {
  const a = Math.round(lao);
  const c = Math.round(cra);
  const side = a === 0 ? 'AP' : a > 0 ? `LAO ${a}°` : `RAO ${-a}°`;
  const tilt = c === 0 ? '' : c > 0 ? ` CRA ${c}°` : ` CAU ${-c}°`;
  return side + tilt;
}

export function endCase(sim: SimState) {
  sim.ended = true;
}

// ------------------------------------------------------------------ main step

/** Device controller: turn input into movement of the active device. */
function controlDevices(sim: SimState, input: InputState, dt: number) {
  const tool = sim.tool;
  const speeds: Record<string, [number, number, number, number]> = {
    guide: [GUIDE.speed, GUIDE.fineSpeed, GUIDE.rotateSpeed, GUIDE.fineRotateSpeed],
    wire: [WIRE.speed, WIRE.fineSpeed, WIRE.rotateSpeed, WIRE.fineRotateSpeed],
    balloon: [BALLOON.speed, BALLOON.fineSpeed, 0, 0],
    stent: [STENT.speed, STENT.fineSpeed, 0, 0],
  };
  const sp = speeds[tool];
  let delta = 0;
  let dRot = 0;
  if (sp) {
    const v = input.fine ? sp[1] : sp[0];
    const wheelStep = clamp(sim.wheel, -v * dt, v * dt);
    sim.wheel -= wheelStep;
    delta = clamp(input.advance, -1, 1) * v * dt + wheelStep;
    delta = clamp(delta, -v * dt, v * dt);
    dRot = clamp(input.rotate, -1, 1) * (input.fine ? sp[3] : sp[2]) * dt;
  } else {
    sim.wheel = 0;
  }
  const wireIsOut = sim.wire.pos > 0;
  const cathOut = isOut(sim.balloon) || isOut(sim.stent);

  // guide
  if (tool === 'guide') {
    const r = stepGuide(sim.guide, { delta, dRot }, { dt, routeLength: sim.routeLength, root: sim.anat.root, wireOut: wireIsOut });
    sim.guide = r.guide;
    r.msgs.forEach((m) => say(sim, m));
  } else {
    sim.guide = { ...sim.guide, speed: sim.guide.speed * Math.max(0, 1 - dt * 6) };
  }

  // wire
  if (tool === 'wire') {
    const r = stepWire(sim.wire, { delta, dRot, fine: input.fine }, { dt, anat: sim.anat, cathOut, guideEngaged: sim.guide.engaged, rng: sim.rng });
    sim.wire = r.wire;
    r.ev.msgs.forEach((m) => say(sim, m));
    if (r.ev.dissection) addDissection(sim, 'LAD', sim.anat.lesion.s0, sim.anat.lesion.s1 + 2, 'wire');
  } else {
    const w = sim.wire;
    if (w.buckle > 0 || w.resistance > 0 || w.speed > 0)
      sim.wire = { ...w, buckle: Math.max(0, w.buckle - dt * 2), resistance: Math.max(0, w.resistance - dt * 1.5), speed: w.speed * Math.max(0, 1 - dt * 6), sinceRotate: w.sinceRotate + dt };
  }

  // balloon & stent catheters (pressure keeps evolving even when not the active tool)
  for (const kind of ['balloon', 'stent'] as CathKind[]) {
    const c = kind === 'balloon' ? sim.balloon : sim.stent;
    const other = kind === 'balloon' ? sim.stent : sim.balloon;
    const active = tool === kind;
    const r = stepCath(
      c,
      { delta: active ? delta : 0, inflate: active && input.inflate, fine: input.fine },
      { t: sim.t, dt, wireTip: sim.wire.pos, wireOut: sim.wire.pos > 0, otherOut: isOut(other) },
    );
    if (kind === 'balloon') sim.balloon = r.cath;
    else sim.stent = r.cath;
    r.ev.msgs.forEach((m) => say(sim, m));
    if (r.ev.deployedNow) deployStent(sim, r.cath);
    if (r.ev.ruptured) {
      sim.flags.ruptures++;
      if (sim.rng() < TREATMENT.ruptureDissectionChance) {
        const path = wirePath(sim.anat, sim.wire);
        const [a, b] = workingRange(r.cath);
        const rr = rangesOnPath(path, a, b).find((x) => sim.anat.vessels[x.vessel].kind === 'coronary');
        if (rr) addDissection(sim, rr.vessel, rr.s0, rr.s1, 'rupture');
      }
    }
    if (r.ev.record) handleInflationRecord(sim, r.ev.record);
  }
}

/** Advance the whole simulation by dt seconds. */
export function stepSim(sim: SimState, input: InputState, dt: number) {
  if (sim.ended) return;
  sim.t += dt;
  const wasInflated = sim.balloon.pressure > 0 || sim.stent.pressure > 0;

  controlDevices(sim, input, dt);

  // lumen & flow while a balloon is up (or just went down)
  const inflatedNow = sim.balloon.pressure > 0 || sim.stent.pressure > 0;
  if (inflatedNow) {
    handleInflationTick(sim, sim.balloon);
    handleInflationTick(sim, sim.stent);
  }
  if (inflatedNow || wasInflated || sim.needFlow) {
    updateLiveLumenAndFlow(sim);
    sim.needFlow = false;
  }

  // physiology
  const leftFlow = Math.min(distalFlow(sim.flow, 'LAD'), distalFlow(sim.flow, 'LCX'));
  const ph = stepPhysiology(sim.phys, { t: sim.t, dt, occluded: sim.occluded || leftFlow <= FLOW.timi1, flow: leftFlow }, sim.rng);
  sim.phys = ph.phys;
  ph.msgs.forEach((m) => say(sim, m));
  if (ph.beat) sim.beatCount++;

  // x-ray
  const cine = sim.t < sim.xray.cineUntil;
  sim.xray.active = sim.xray.pedal || cine;
  sim.xray.mode = cine ? 'cine' : sim.xray.pedal ? 'fluoro' : 'off';
  if (sim.xray.active) {
    sim.xray.fluoroTime += dt;
    sim.xray.everImaged = true;
  }
  for (const d of sim.dissections) d.stain = Math.max(0.15, d.stain - dt / 40);

  // derived flags
  const s0 = buildSnapshot(sim);
  if (sim.xray.active && sim.guide.s > sim.landmarks.chestS) sim.flags.lookedOnFluoro = true;
  if (s0.balloonAcross && sim.balloon.pressure >= 6) sim.flags.predilInflated = true;
  if (sim.flags.predilInflated && !sim.flags.predilated && sim.balloon.pressure === 0) {
    sim.flags.predilated = true;
    say(sim, { level: 'ok', text: 'Pre-dilation done. Withdraw the balloon, measure (QCA) and choose a stent.', key: 'predilated' });
  }
  if (s0.stentCovers && !sim.stent.deployed && isOut(sim.stent)) sim.flags.stentCovered = true;
  if (sim.stents.length > 0 && sim.stent.pressure === 0 && !sim.flags.deployedAndDeflated) {
    sim.flags.deployedAndDeflated = true;
    say(sim, { level: 'ok', text: 'Stent balloon deflated. Withdraw it and take final angiograms in two projections.', key: 'deployed-deflated' });
  }

  sim.snapshot = buildSnapshot(sim);
  const pr = progressStages(sim.stages, sim.snapshot, sim.t);
  sim.stages = pr.progress;
  for (const m of pr.msgs) say(sim, m);
}

// ------------------------------------------------------------------ QCA helper for UI / demo

export function qcaNow(sim: SimState): QCA {
  const V = sim.anat.vessels.LAD;
  const l = sim.anat.lesion;
  return measureQCA(sim.lumen.LAD, V.refD, V.ds, l.s0 - 6, l.s1 + 6);
}

export const PHYS = PHYSIOLOGY;
