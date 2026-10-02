/** Fluoroscopy post-process: pulsed frames, quantum noise, blur, square collimation, vignette, LIH. */
import * as THREE from 'three';
import { FLUORO } from '../config/anatomy';

export class FluoroPost {
  readonly rt: THREE.WebGLRenderTarget;
  private scene = new THREE.Scene();
  private cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  readonly mat: THREE.ShaderMaterial;
  hasImage = false;
  private lastFrame = -1;

  constructor() {
    this.rt = new THREE.WebGLRenderTarget(16, 16, { type: THREE.HalfFloatType });
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        tImage: { value: this.rt.texture },
        uRes: { value: new THREE.Vector2(16, 16) },
        uSeed: { value: 0 },
        uNoise: { value: FLUORO.noise },
        uBlur: { value: FLUORO.blur },
        uColl: { value: FLUORO.collimation },
        uHas: { value: 0 },
        uAspect: { value: 1 },
        uShift: { value: FLUORO.imageShift },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D tImage;
        uniform vec2 uRes;
        uniform float uSeed, uNoise, uBlur, uColl, uHas, uAspect, uShift;
        varying vec2 vUv;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uSeed * 0.731) * 43758.5453); }
        void main() {
          vec2 px = uBlur / uRes;
          float I = texture2D(tImage, vUv).r * 0.36
            + (texture2D(tImage, vUv + vec2(px.x, 0.0)).r + texture2D(tImage, vUv - vec2(px.x, 0.0)).r
            +  texture2D(tImage, vUv + vec2(0.0, px.y)).r + texture2D(tImage, vUv - vec2(0.0, px.y)).r) * 0.12
            + (texture2D(tImage, vUv + px).r + texture2D(tImage, vUv - px).r
            +  texture2D(tImage, vUv + vec2(px.x, -px.y)).r + texture2D(tImage, vUv + vec2(-px.x, px.y)).r) * 0.04;
          float g = pow(clamp(I, 0.0, 1.0), 0.75);
          vec2 q = floor(vUv * uRes / 1.6);
          float n = (hash(q) + hash(q + 17.31) + hash(q + 3.17) - 1.5) * 1.15;
          g += n * uNoise * sqrt(max(g, 0.03));
          vec2 p = (vUv - vec2(0.5, 0.5 + uShift)) * vec2(uAspect, 1.0);
          float hw = 0.5 * uColl * min(uAspect, 1.0);
          float inside = step(abs(p.x), hw) * step(abs(p.y), hw);
          float r = length(p) / hw;
          g *= 1.0 - 0.38 * smoothstep(0.55, 1.42, r);
          vec3 col = vec3(g) * vec3(0.97, 1.0, 1.03);
          col = mix(vec3(0.015), col, inside * uHas);
          gl_FragColor = vec4(col, 1.0);
        }`,
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
    quad.frustumCulled = false;
    this.scene.add(quad);
  }

  setSize(w: number, h: number) {
    this.rt.setSize(w, h);
    this.mat.uniforms.uRes.value.set(w, h);
    this.mat.uniforms.uAspect.value = w / h;
  }

  /** Render a new pulsed frame if due. Returns true when a frame was acquired. */
  acquire(renderer: THREE.WebGLRenderer, scene: THREE.Scene, cam: THREE.Camera, now: number, cine: boolean, force = false): boolean {
    if (!force && now - this.lastFrame < 1 / FLUORO.frameRate) return false;
    this.lastFrame = now;
    const prev = renderer.getRenderTarget();
    const prevColor = new THREE.Color();
    renderer.getClearColor(prevColor);
    const prevAlpha = renderer.getClearAlpha();
    renderer.setRenderTarget(this.rt);
    renderer.setClearColor(new THREE.Color(FLUORO.background, FLUORO.background, FLUORO.background), 1);
    renderer.clear(true, true, true);
    renderer.render(scene, cam);
    renderer.setRenderTarget(prev);
    renderer.setClearColor(prevColor, prevAlpha);
    this.hasImage = true;
    this.mat.uniforms.uSeed.value = (this.mat.uniforms.uSeed.value + 1.618) % 1000;
    this.mat.uniforms.uNoise.value = cine ? FLUORO.cineNoise : FLUORO.noise;
    return true;
  }

  composite(renderer: THREE.WebGLRenderer) {
    this.mat.uniforms.uHas.value = this.hasImage ? 1 : 0;
    renderer.setRenderTarget(null);
    renderer.render(this.scene, this.cam);
  }

  reset() {
    this.hasImage = false;
    this.lastFrame = -1;
  }
}
