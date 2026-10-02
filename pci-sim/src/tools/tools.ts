/** Toolbar tools, their rules and unlock conditions. Pure. */
import type { Snapshot } from '../procedure/snapshot';

export type ToolId = 'guide' | 'wire' | 'balloon' | 'stent' | 'contrast' | 'fluoro' | 'measure';

export interface ToolDef {
  id: ToolId;
  key: string;
  label: string;
  /** Compact label for narrow screens. */
  short: string;
  /** Short rules text for the tooltip. */
  rules: string;
  /** Selecting it makes it the manipulated device / mode (vs. a one-shot action). */
  selectable: boolean;
  cursor: string;
}

export const TOOLS: ToolDef[] = [
  { id: 'guide', key: '1', label: 'Guide 6F', short: 'Guide', selectable: true, cursor: 'grab', rules: 'W/S advance-retract (Shift = fine), A/D rotate the pre-shaped tip. Stops at the aortic root; face the LEFT cusp and advance gently to engage. Cannot move while the wire is out.' },
  { id: 'wire', key: '2', label: 'Wire .014"', short: 'Wire', selectable: true, cursor: 'crosshair', rules: 'Exits the guide into the LM. A/D rotates the shaped tip, which picks the branch at each bifurcation. Cross the lesion slowly (Shift), park the tip distally. Cannot be retracted while a balloon is on it.' },
  { id: 'balloon', key: '3', label: 'Balloon', short: 'Balloon', selectable: true, cursor: 'cell', rules: 'Pre-dilation balloon over the wire. Choose a size while it is in the guide. Hold E to inflate (Shift = fine), Q to deflate. Cannot move while inflated. Nominal 8 atm, RBP 14 atm.' },
  { id: 'stent', key: '4', label: 'Stent (DES)', short: 'Stent', selectable: true, cursor: 'cell', rules: 'Drug-eluting stent on its delivery balloon. Size it in the guide, cover the whole lesion with margins, deploy at >= 6 atm (nominal 10, RBP 16). Deployment is permanent.' },
  { id: 'contrast', key: '5', label: 'Contrast', short: 'Dye', selectable: false, cursor: 'pointer', rules: 'Inject contrast (C or 5). Selective (8 ml) when the guide is engaged, otherwise an aortic root flush (20 ml). Records a cine run.' },
  { id: 'fluoro', key: '6', label: 'Fluoro', short: 'Fluoro', selectable: false, cursor: 'pointer', rules: 'Hold Space (or 6 / this button) to step on the fluoroscopy pedal. Every second counts towards fluoro time - use short taps.' },
  { id: 'measure', key: '7', label: 'Measure', short: 'QCA', selectable: true, cursor: 'help', rules: 'Quantitative coronary angiography (QCA): reference diameter, MLD, % stenosis, lesion length. Hover a vessel in 3D for its local diameter.' },
];

export const toolDef = (id: ToolId) => TOOLS.find((t) => t.id === id)!;

/** Why a tool is locked right now (null = available). */
export function toolLock(id: ToolId, s: Snapshot): string | null {
  switch (id) {
    case 'guide':
      return null;
    case 'wire':
      if (!s.guideEngaged) return 'Engage the left main with the guide first.';
      if (!s.diagAngio) return 'Take a diagnostic angiogram first (C) - you need a road map.';
      if (!s.heparin) return 'Give heparin first (G) - never put a wire in a coronary without anticoagulation.';
      return null;
    case 'balloon':
      if (!s.wireDistal) return 'Cross the lesion and park the wire in the distal LAD first.';
      if (s.stentOut) return 'Only one balloon catheter at a time - withdraw the stent catheter first.';
      return null;
    case 'stent':
      if (!s.predilated) return 'Pre-dilate the lesion with a balloon first.';
      if (s.balloonOut) return 'Withdraw the pre-dilation balloon out of the patient first.';
      if (!s.wireDistal) return 'The wire must stay parked in the distal LAD.';
      return null;
    case 'contrast':
      if (!s.guideInAorta) return 'Advance the guide into the aorta first - there is nothing to inject through.';
      return null;
    case 'fluoro':
      return null;
    case 'measure':
      if (!s.diagAngio) return 'Take a diagnostic angiogram first - QCA needs an image.';
      return null;
  }
}
