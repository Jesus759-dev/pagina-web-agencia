"use client";

/**
 * Defers the decorative UI chrome (custom cursor, scroll progress bar,
 * WhatsApp floating button) so they don't block First Contentful Paint
 * or Largest Contentful Paint.
 *
 * These three components are purely visual — the page is fully usable
 * without them — so we pay zero initial JS cost for them on first load.
 *
 * `ssr: false` is critical: it prevents the server from emitting the
 * markup (and therefore the initial JS reference) for these widgets.
 * The browser downloads and mounts them only after the main thread
 * is idle.
 */

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), {
  ssr: false,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
});

export default function DeferredChrome() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <WhatsAppButton />
    </>
  );
}
