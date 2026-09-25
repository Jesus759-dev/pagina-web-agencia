"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/* Fondo decorativo (WebGL, three.js ≈ 150 KB).
   No entra en el primer render: se carga cuando el navegador está libre, y no
   se carga en celular, con "ahorro de datos" o con movimiento reducido. En un
   4G ese peso competía con el contenido y retrasaba lo que el visitante ve. */
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const Backdrop = () => (
  <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, background: "#FDFBF7" }} />
);

export default function ParticleFieldLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
    const slow = nav.connection?.saveData === true || /(^|-)2g$/.test(nav.connection?.effectiveType || "");
    const small = window.matchMedia("(max-width: 900px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (slow || small || reduce) return;

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const id = idle(() => setShow(true));
    return () => (window.cancelIdleCallback ?? window.clearTimeout)(id as number);
  }, []);

  return show ? <ParticleField /> : <Backdrop />;
}
