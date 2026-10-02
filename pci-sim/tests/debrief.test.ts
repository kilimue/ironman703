import { describe, expect, it } from 'vitest';
import { buildDebrief, type DebriefSummary } from '../src/procedure/debrief';

const perfect: DebriefSummary = {
  stagesCompleted: 6,
  stentDeployed: true,
  residualStenosis: 0.02,
  timi: 3,
  stentRatio: 1.04,
  margins: { prox: 2, dist: 2 },
  geographicMiss: false,
  stentCount: 1,
  heparin: true,
  predilated: true,
  qcaUsed: true,
  dissections: [],
  wireForcing: 0,
  balloonRuptures: 0,
  longestInflation: 14,
  contrastMl: 24,
  fluoroSec: 60,
  finalViews: 2,
};

describe('debrief scoring', () => {
  it('a textbook case scores 100 / Excellent with all items ok', () => {
    const d = buildDebrief(perfect);
    expect(d.score).toBe(100);
    expect(d.grade).toBe('Excellent');
    expect(d.items.every((i) => i.status === 'ok')).toBe(true);
    expect(d.items.every((i) => i.teaching.length > 10)).toBe(true);
    const ids = d.items.map((i) => i.id);
    for (const k of ['residual', 'timi', 'sizing', 'coverage', 'extra', 'heparin', 'predil', 'qca', 'dissection', 'forcing', 'rupture', 'inflation', 'contrast', 'fluoro', 'views'])
      expect(ids).toContain(k);
  });
  it('minor issues give Good', () => {
    const d = buildDebrief({ ...perfect, margins: { prox: 0.8, dist: 2 }, finalViews: 1, longestInflation: 40 });
    expect(d.grade).toBe('Good');
    expect(d.items.find((i) => i.id === 'coverage')!.status).toBe('warn');
  });
  it('oversized short stent with an edge dissection is Needs work', () => {
    const d = buildDebrief({
      ...perfect,
      residualStenosis: 0.38,
      timi: 2,
      stentRatio: 1.49,
      margins: { prox: -1, dist: -1 },
      geographicMiss: true,
      dissections: [{ sealed: false, cause: 'stent-edge' }],
    });
    expect(d.grade).toBe('Needs work');
    expect(d.score).toBeLessThan(60);
    expect(d.items.find((i) => i.id === 'coverage')!.status).toBe('bad');
    expect(d.items.find((i) => i.id === 'dissection')!.status).toBe('bad');
    expect(d.items.find((i) => i.id === 'sizing')!.status).toBe('bad');
  });
  it('a sealed dissection is only a warning', () => {
    const d = buildDebrief({ ...perfect, dissections: [{ sealed: true, cause: 'wire' }] });
    expect(d.items.find((i) => i.id === 'dissection')!.status).toBe('warn');
  });
  it('no stent deployed is Incomplete', () => {
    const d = buildDebrief({ ...perfect, stagesCompleted: 3, stentDeployed: false, stentRatio: null, margins: null, geographicMiss: true, stentCount: 0, finalViews: 0 });
    expect(d.grade).toBe('Incomplete');
  });
  it('contrast and fluoro thresholds', () => {
    const d = buildDebrief({ ...perfect, contrastMl: 150, fluoroSec: 1500 });
    expect(d.items.find((i) => i.id === 'contrast')!.status).toBe('warn');
    expect(d.items.find((i) => i.id === 'fluoro')!.status).toBe('bad');
  });
  it('score is bounded 0..100', () => {
    const d = buildDebrief({ ...perfect, residualStenosis: 0.9, timi: 0, stentRatio: 2, geographicMiss: true, margins: null, heparin: false, predilated: false, qcaUsed: false, dissections: [{ sealed: false, cause: 'wire' }], wireForcing: 0.8, balloonRuptures: 2, longestInflation: 120, contrastMl: 400, fluoroSec: 3000, finalViews: 0, stentCount: 4 });
    expect(d.score).toBeGreaterThanOrEqual(0);
    expect(d.grade).toBe('Needs work');
  });
});
