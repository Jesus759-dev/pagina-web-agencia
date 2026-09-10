"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

/**
 * Fires a Meta Pixel PageView on every client-side route change.
 *
 * The inline pixel snippet already tracks the initial PageView on full page
 * load, so the first render is skipped to avoid a duplicate. Must be rendered
 * inside <Suspense> because useSearchParams() requires it.
 */
export default function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView();
    // searchParams is a stable object per URL; its string form is the real dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams?.toString()]);

  return null;
}
