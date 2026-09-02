"use client";

import dynamic from "next/dynamic";

/* Client-only loader: `ssr:false` is only allowed inside a Client Component,
   and the root layout is a Server Component. The fallback is just the page
   background so there is never a white flash. */
const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, background: "#FDFBF7" }}
    />
  ),
});

export default function ParticleFieldLoader() {
  return <ParticleField />;
}
