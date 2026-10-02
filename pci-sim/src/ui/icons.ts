/** Small inline SVG icons for the toolbar and cursors (24x24, stroke-based). */
const wrap = (body: string) =>
  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const ICONS: Record<string, string> = {
  guide: wrap('<path d="M3 21 C 9 15, 10 9, 14 6 C 17 4, 20 5, 20 8 C 20 10, 18 11, 16 10"/>'),
  wire: wrap('<path d="M3 21 L 15 9 C 17 7, 19 6, 20 4"/><circle cx="20" cy="4" r="1" fill="currentColor"/>'),
  balloon: wrap('<path d="M2 12 H5"/><rect x="5" y="8" width="13" height="8" rx="4"/><path d="M18 12 H22"/><path d="M7.5 8 V16 M15.5 8 V16"/>'),
  stent: wrap('<path d="M2 12 H4 M20 12 H22"/><path d="M4 8 L7 16 L10 8 L13 16 L16 8 L19 16 M4 16 L7 8 L10 16 L13 8 L16 16 L19 8"/>'),
  contrast: wrap('<path d="M12 3 C 8 9, 6 12, 6 15 a6 6 0 0 0 12 0 c0 -3 -2 -6 -6 -12z"/><path d="M9 15 a3 3 0 0 0 3 3"/>'),
  fluoro: wrap('<path d="M12 2 L12 6 M4.5 6.5 L7 9 M19.5 6.5 L17 9"/><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M9 16 h6"/>'),
  measure: wrap('<path d="M3 17 L17 3 L21 7 L7 21 Z"/><path d="M7 13 l2 2 M10 10 l2 2 M13 7 l2 2"/>'),
  play: wrap('<path d="M7 4 L19 12 L7 20 Z"/>'),
  pause: wrap('<path d="M8 4 V20 M16 4 V20"/>'),
};

const cur = (body: string, color = '#7fe0ff') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"><g filter="drop-shadow(0 0 1px #000)">${body}</g></svg>`;

export const CURSORS: Record<string, string> = {
  guide: cur('<circle cx="14" cy="14" r="5"/><path d="M14 2 V8 M14 20 V26 M2 14 H8 M20 14 H26"/>'),
  wire: cur('<path d="M4 24 L16 12 C 19 9, 22 8, 24 5"/><circle cx="24" cy="5" r="1.5" fill="#ffd36b" stroke="#ffd36b"/>'),
  balloon: cur('<rect x="6" y="10" width="16" height="8" rx="4" stroke="#ffd94a"/><path d="M14 4 V24" stroke-dasharray="2 2"/>'),
  stent: cur('<path d="M5 10 L8 18 L11 10 L14 18 L17 10 L20 18 L23 10" stroke="#d8e2ea"/><path d="M14 4 V24" stroke-dasharray="2 2"/>'),
  measure: cur('<path d="M14 3 V11 M14 17 V25 M3 14 H11 M17 14 H25"/><circle cx="14" cy="14" r="2"/>', '#9dffb0'),
};
