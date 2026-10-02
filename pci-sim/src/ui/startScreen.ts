/** Start screen: disclaimer, case vignette, objectives, controls, start / demo buttons. */
import { h } from './dom';

export function buildStartScreen(onStart: () => void, onDemo: () => void): HTMLElement {
  const keys: [string, string][] = [
    ['1-7', 'Select tool: guide, wire, balloon, stent, contrast, fluoro, measure'],
    ['W / S, wheel', 'Advance / retract the active device (hold Shift = fine)'],
    ['A / D', 'Rotate the guide or wire tip'],
    ['E (hold) / Q', 'Inflate / deflate balloon or stent'],
    ['G', 'Give heparin'],
    ['C or 5', 'Inject contrast'],
    ['Space or 6 (hold)', 'Fluoroscopy pedal'],
    ['Tab', 'Switch 3D view / X-ray'],
    ['V, arrows', 'C-arm projection presets / fine-tune'],
    ['F, L', 'Camera follow tip, anatomy labels'],
    ['H, M, N, Esc', 'Help, mentor, sound, pause'],
    ['Drag, Ctrl+wheel', 'Orbit / zoom the 3D view'],
  ];
  return h(
    'div',
    { class: 'start', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'start-title' },
    h(
      'div',
      { class: 'start-card' },
      h('div', { class: 'start-kicker' }, 'Cath lab simulator · educational'),
      h('h1', { id: 'start-title' }, 'Stenting a mid-LAD stenosis'),
      h('p', { class: 'start-sub' }, 'Percutaneous coronary intervention via right radial access'),
      h(
        'div',
        { class: 'disclaimer', role: 'note' },
        h('strong', {}, 'For education and demonstration only. '),
        'This is a simplified teaching model for medical students. It is not clinical training, not a validated simulator and not medical advice. Anatomy, device behaviour and physiology are approximations.',
      ),
      h(
        'div',
        { class: 'start-grid' },
        h(
          'section',
          {},
          h('h2', {}, 'The case'),
          h(
            'p',
            {},
            'A 68-year-old man (80 kg) has exertional angina despite optimal medical therapy. Stress testing shows anterior ischaemia. Coronary angiography found a ',
            h('strong', {}, '90% stenosis in the mid left anterior descending artery (LAD)'),
            ', between the first and second diagonal branches. The heart team recommends PCI.',
          ),
          h('h2', {}, 'You will'),
          h(
            'ol',
            { class: 'you-will' },
            h('li', {}, 'Advance a 6F guide catheter from the wrist to the aortic root'),
            h('li', {}, 'Engage the left main and take a diagnostic angiogram'),
            h('li', {}, 'Give heparin and cross the lesion with a 0.014" wire'),
            h('li', {}, 'Pre-dilate with a balloon'),
            h('li', {}, 'Size, position and deploy a drug-eluting stent'),
            h('li', {}, 'Confirm the result in two projections - then read your debrief'),
          ),
        ),
        h(
          'section',
          {},
          h('h2', {}, 'Controls'),
          h('dl', { class: 'keys' }, ...keys.flatMap(([k, v]) => [h('dt', {}, k), h('dd', {}, v)])),
          h('p', { class: 'small' }, 'On touch screens use the toolbar and the on-screen hold buttons in the device panel.'),
        ),
      ),
      h(
        'div',
        { class: 'start-actions' },
        h('button', { class: 'btn primary', id: 'btn-start', onclick: () => onStart() }, 'Enter the cath lab'),
        h('button', { class: 'btn', id: 'btn-demo', onclick: () => onDemo() }, 'Watch a demo first'),
      ),
    ),
  );
}
