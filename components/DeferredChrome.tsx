"use client";

/**
 * Defers ONLY the fully optional decorations:
 *   - CustomCursor (desktop-only, cosmetic, heavy mouse tracking)
 *
 * WhatsAppButton and ScrollProgress render eagerly alongside the Hero
 * in the layout because they occupy real estate above the fold and
 * deferring them caused "pop-in" that hurt the Speed Index metric.
 *
 * The WhatsApp floating button is also part of the call-to-action UX,
 * so it needs to be visible from the very first paint.
 */

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function DeferredChrome() {
  return <CustomCursor />;
}
