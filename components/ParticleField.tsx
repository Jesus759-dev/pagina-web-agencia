"use client";

import { useEffect, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  NormalBlending,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from "three";

/* Shaders ported verbatim from docs/reference/neurovia-landing.html: the
   simplex-noise field + cursor ripple must look identical to the reference. */
const VERT = `
    uniform float uTime; uniform vec2 uMouse; uniform float uPR;
    varying float vH; varying float vD;
    vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
    vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
    vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
    float snoise(vec3 v){
      const vec2 C=vec2(1./6.,1./3.); const vec4 D=vec4(0.,.5,1.,2.);
      vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
      vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
      vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
      i=mod289(i);
      vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
      float n_=.142857142857; vec3 ns=n_*D.wyz-D.xzx;
      vec4 j=p-49.*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.*x_);
      vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.-abs(x)-abs(y);
      vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
      vec4 s0=floor(b0)*2.+1.; vec4 s1=floor(b1)*2.+1.; vec4 sh=-step(h,vec4(0.));
      vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
      vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
      vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
      p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
      vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.); m=m*m;
      return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
    }
    void main(){
      vec3 p=position;
      float t=uTime*.18;
      float n=snoise(vec3(p.x*.28,p.z*.28,t))*.9 + snoise(vec3(p.x*.9,p.z*.9,t*1.7))*.22;
      vec2 m=uMouse*vec2(10.,6.);
      float d=distance(p.xz,m);
      float ripple=exp(-d*.55)*sin(d*3.-uTime*3.)*.9;
      p.y=n+ripple;
      vH=p.y; vD=exp(-d*.4);
      vec4 mv=modelViewMatrix*vec4(p,1.);
      gl_PointSize=(2.2+vD*2.4)*uPR*(6./-mv.z);
      gl_Position=projectionMatrix*mv;
    }`;

const FRAG = `
    uniform vec3 uPhos,uEmber,uMist; varying float vH; varying float vD;
    void main(){
      vec2 c=gl_PointCoord-.5; if(dot(c,c)>.25) discard;
      float h=clamp(vH*.5+.5,0.,1.);
      vec3 col=mix(uEmber,uPhos,h);
      col=mix(col,uMist,vD*.55);
      float a=.28+h*.5+vD*.3;
      gl_FragColor=vec4(col,a);
    }`;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Global WebGL particle field. One fixed canvas behind every page: full
 * intensity over the hero, fading linearly with scroll down to 0.42.
 */
export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    const W = mobile ? 110 : 180;
    const H = mobile ? 70 : 110;
    const SP = 0.11;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      return; // no WebGL available: keep the plain background
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 5.5, 9);
    camera.lookAt(0, 0, -1);

    const count = W * H;
    const pos = new Float32Array(count * 3);
    let i = 0;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        pos[i++] = (x - W / 2) * SP;
        pos[i++] = 0;
        pos[i++] = (y - H / 2) * SP;
      }
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(pos, 3));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0, 0) },
      uPhos: { value: new Color("#2F8FE8") },
      uEmber: { value: new Color("#9AD6F7") },
      uMist: { value: new Color("#0F2A44") },
      uPR: { value: renderer.getPixelRatio() },
    };

    const mat = new ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: NormalBlending,
    });
    const points = new Points(geo, mat);
    scene.add(points);

    const target = new Vector2(0, 0);
    const setTarget = (x: number, y: number) => {
      target.set(x / window.innerWidth - 0.5, -(y / window.innerHeight - 0.5));
    };
    const onPointer = (e: PointerEvent) => setTarget(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setTarget(t.clientX, t.clientY);
    };

    const clock = new Clock();
    let raf = 0;
    let hidden = document.visibilityState === "hidden";

    const tick = () => {
      raf = 0;
      uniforms.uTime.value = reduce ? 4 : clock.getElapsedTime();
      uniforms.uMouse.value.lerp(target, 0.06);
      renderer.render(scene, camera);
      if (hidden) return;
      if (!reduce || uniforms.uMouse.value.distanceTo(target) > 0.001) {
        raf = requestAnimationFrame(tick);
      }
    };
    const requestTick = () => {
      if (!raf && !hidden) raf = requestAnimationFrame(tick);
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (reduce) requestTick();
    };

    // Scroll-linked opacity written straight to the DOM (no React state, no re-renders).
    const onScroll = () => {
      const o = clamp(1 - window.scrollY / (window.innerHeight * 0.9), 0.42, 1);
      canvas.style.opacity = o.toFixed(3);
    };

    const onVisibility = () => {
      hidden = document.visibilityState === "hidden";
      if (hidden) {
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        clock.stop();
      } else {
        clock.start();
        requestTick();
      }
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    if (reduce) window.addEventListener("pointermove", requestTick, { passive: true });

    resize();
    onScroll();
    requestTick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      if (reduce) window.removeEventListener("pointermove", requestTick);
      scene.remove(points);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
