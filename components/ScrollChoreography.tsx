"use client";

import { useEffect } from "react";

/**
 * Reversible scroll choreography, ported 1:1 from the "Neurovia Landing Pro"
 * design. A single rAF loop toggles the `.in` class on tracked elements as
 * they enter/leave the viewport (so reveals replay when scrolling back up) and
 * applies a light parallax to project-card images.
 *
 * It mutates only wrapper-level classes/inline transforms — never the inner
 * DOM — so it composes safely with React's rendering.
 */
export default function ScrollChoreography() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const tracked: Element[] = [];

    // 1) Titles: rise-in (the hero runs its own load-time entrance instead)
    document
      .querySelectorAll("section:not([data-hero]) h1, section:not([data-hero]) h2")
      .forEach((h) => {
      h.classList.add("reveal-title");
      tracked.push(h);
    });

    // 2) Blocks: staggered fade-up
    [
      ".stats-grid > div",
      ".svc-card",
      ".proj-card",
      ".coming-soon",
      ".why-grid > div",
      ".proc-grid > div",
      ".testi-grid > div",
    ].forEach((sel) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add("reveal");
        (el as HTMLElement).style.animationDelay = (i % 4) * 0.08 + "s";
        tracked.push(el);
      });
    });

    // 3) Images: wipe-in + parallax
    const parImgs: HTMLImageElement[] = [];
    document.querySelectorAll<HTMLImageElement>(".proj-card img").forEach((img) => {
      const c = img.parentElement;
      if (!c) return;
      c.classList.add("reveal-img");
      img.style.height = "118%";
      img.style.willChange = "transform";
      img.addEventListener("error", () => c.classList.add("in"));
      tracked.push(c);
      parImgs.push(img);
    });

    let raf = 0;
    const frame = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = 0; i < tracked.length; i++) {
        const el = tracked[i];
        const r = el.getBoundingClientRect();
        const visible = r.top < vh * 0.88 && r.bottom > vh * 0.06;
        if (visible) {
          if (!el.classList.contains("in")) el.classList.add("in");
        } else if (r.top >= vh * 0.88 || r.bottom <= 0) {
          if (el.classList.contains("in")) el.classList.remove("in");
        }
      }
      for (let i = 0; i < parImgs.length; i++) {
        const img = parImgs[i];
        const parent = img.parentElement;
        if (!parent) continue;
        const r = parent.getBoundingClientRect();
        if (r.bottom < -150 || r.top > vh + 150) continue;
        const prog = (r.top + r.height / 2 - vh / 2) / vh;
        const ty = Math.max(-9, Math.min(9, -prog * 9));
        img.style.transform = "translateY(" + ty + "%)";
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
