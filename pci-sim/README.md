# PCI Sim – educational cath-lab simulator

Browser-based **educational** simulator of percutaneous coronary intervention (PCI): stenting a
90% mid-LAD stenosis via right radial access, for medical students.

> **For education and demonstration only.** This is a simplified teaching model. It is not
> clinical training, not a validated simulator and not medical advice.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck (tsc --noEmit) + production build into dist/
npm test         # Vitest unit tests (pure simulation logic, incl. a headless demo run)
```

Stack: Vite + TypeScript (strict) + Three.js, Web Audio for monitor sounds, Vitest. No backend –
all state is in memory.

## The case

68-year-old, 80 kg, exertional angina despite medical therapy, anterior ischaemia on stress
testing, 14 mm / 90% diameter stenosis in the mid LAD between D1 and D2 (reference ≈ 2.95 mm).

Six stages with latching sub-tasks:

1. Advance the 6F guide to the aortic root (past the elbow, into the aorta, check on fluoro, reach root)
2. Engage the left main (face the left cusp, seat gently, diagnostic angiogram)
3. Cross the lesion (heparin, wire out, into the LAD not the LCx, cross gently, park distally)
4. Pre-dilate (markers across the lesion, ≥ 6 atm, deflate)
5. Deploy a stent (QCA, load stent, cover the whole lesion, deploy & deflate)
6. Final angiogram (inject after stenting, second distinct projection)

A debrief (score, grade and teaching points) opens after stage 6 or via **End case**.
**Watch a demo first** runs an autopilot through the same input path as the learner (it ends
with an *Excellent* debrief); any key, click or scroll hands control back.

## Controls

| Key | Action |
| --- | --- |
| 1–7 | Tools: guide, wire, balloon, stent, contrast, fluoro, measure |
| W / S, mouse wheel | Advance / retract the active device (hold Shift = fine) |
| A / D | Rotate the guide / wire tip |
| E (hold) / Q | Inflate / deflate balloon or stent |
| G | Heparin |
| C or 5 | Inject contrast |
| Space or 6 (hold) | Fluoroscopy pedal |
| Tab | 3D view ↔ X-ray monitor |
| V, arrow keys | C-arm presets, fine-tune LAO/RAO & CRA/CAU |
| F, L, H, M, N, Esc | Follow tip, labels, help, mentor, sound, pause |
| Drag, right-drag, Ctrl+wheel | Orbit, pan, zoom the 3D view |

Touch: use the toolbar and the hold buttons in the device panel.

## Code map

```
src/main.ts             bootstrap, render loop, keyboard/mouse wiring
src/config/anatomy.ts   every anatomy / lesion / fluoro / contrast / device / physiology / flow constant (1 unit = 1 mm)
src/state/store.ts      single in-memory app state + tiny subscribe/emit
src/anatomy/            procedural heart, vessel tree, lumen profiles & QCA, fluoro-only skeleton
src/physics/            route (1D rail), guide, guidewire, balloon/stent catheter, flow (contrast transit + TIMI),
                        physiology, synthetic ECG
src/tools/              tool definitions & unlock rules, device input controller, hover picking
src/procedure/          simulation core, stages & mentor hints, snapshot, debrief, demo autopilot
src/scene/              renderer, cameras & C-arm, X-ray materials, fluoro post-process, anatomy & device meshes, labels
src/ui/                 start screen, HUD, toolbar, device panel, checklist, mentor, vitals monitor, debrief, overlays
src/audio/              monitor beep + two-tone alarm
tests/                  unit tests
```

Simulation logic (sizing, flow, scoring, stages, devices, physiology, demo) is plain TypeScript with
no Three.js or DOM, so it runs headless in the tests. In the browser console, `pci.store` exposes
the live state for exploration.
