/**
 * X-ray attenuation materials. Every fluoro object multiplies the framebuffer by its transmittance
 * T = exp(-mu * pathLength) (multiplicative blending, no depth test), so overlapping structures
 * darken each other like a real projection image.
 */
import * as THREE from 'three';

function multiply(m: THREE.ShaderMaterial): THREE.ShaderMaterial {
  m.transparent = true;
  m.depthTest = false;
  m.depthWrite = false;
  m.blending = THREE.CustomBlending;
  m.blendEquation = THREE.AddEquation;
  m.blendSrc = THREE.DstColorFactor;
  m.blendDst = THREE.ZeroFactor;
  m.side = THREE.FrontSide;
  return m;
}

/** Tubes (vessels, devices, ribs): chord length = 2 r |n.v|; contrast adds attenuation. */
export function tubeXray(opts: { muContrast?: number; muWall?: number; extra?: number }): THREE.ShaderMaterial {
  return multiply(
    new THREE.ShaderMaterial({
      uniforms: {
        uMuContrast: { value: opts.muContrast ?? 0 },
        uMuWall: { value: opts.muWall ?? 0 },
        uGain: { value: 1 },
        uExtra: { value: opts.extra ?? 0 },
      },
      vertexShader: /* glsl */ `
        attribute float aContrast;
        attribute float aRadius;
        uniform float uExtra;
        varying float vC;
        varying float vR;
        varying float vNV;
        void main() {
          // uExtra widens very thin devices so they survive the detector blur
          vec4 mv = modelViewMatrix * vec4(position + normal * uExtra, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vec3 v = normalize(-mv.xyz);
          vNV = abs(dot(n, v));
          vC = aContrast;
          vR = aRadius + uExtra;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uMuContrast;
        uniform float uMuWall;
        uniform float uGain;
        varying float vC;
        varying float vR;
        varying float vNV;
        void main() {
          float chord = 2.0 * vR * clamp(vNV, 0.0, 1.0);
          float mu = (uMuContrast * vC + uMuWall) * uGain;
          float T = exp(-mu * chord);
          gl_FragColor = vec4(vec3(T), 1.0);
        }`,
    }),
  );
}

/** Thin metallic shell (stent): attenuation grows towards grazing angles. */
export function shellXray(mu: number): THREE.ShaderMaterial {
  return multiply(
    new THREE.ShaderMaterial({
      uniforms: { uMu: { value: mu } },
      vertexShader: /* glsl */ `
        varying float vNV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vNV = abs(dot(n, normalize(-mv.xyz)));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uMu;
        varying float vNV;
        void main() {
          float T = exp(-uMu / max(vNV, 0.12));
          gl_FragColor = vec4(vec3(T), 1.0);
        }`,
    }),
  );
}

/** Convex solids (heart shadow, vertebrae, chest, abdomen): chord ~ 2 R |n.v|^k. */
export function solidXray(mu: number, radius: number, power = 1): THREE.ShaderMaterial {
  return multiply(
    new THREE.ShaderMaterial({
      uniforms: { uMu: { value: mu }, uR: { value: radius }, uPow: { value: power } },
      vertexShader: /* glsl */ `
        varying float vNV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vNV = abs(dot(n, normalize(-mv.xyz)));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uMu;
        uniform float uR;
        uniform float uPow;
        varying float vNV;
        void main() {
          float chord = 2.0 * uR * pow(clamp(vNV, 0.0, 1.0), uPow);
          gl_FragColor = vec4(vec3(exp(-uMu * chord)), 1.0);
        }`,
    }),
  );
}
