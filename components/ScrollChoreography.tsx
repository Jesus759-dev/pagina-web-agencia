"use client";

import { useEffect } from "react";

/**
 * Scroll choreography for the "Neurovia Landing Pro" design.
 *
 * Reveals are driven by the scroll/resize listener (throttled through a single
 * rAF that idles when the page is still) plus one pass on load — this is the
 * proven approach: every element reliably reveals once it enters the viewport,
 * and revealed elements are dropped from the tracked list so nothing is re-read
 * on later frames. Parallax rides the same update pass. It mutates only
 * wrapper-level classes / inline transforms.
 */
export default function ScrollChoreography() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // 1) Reveal targets — titles rise-in, blocks fade-up, project images wipe-in.
    document
      .querySelectorAll("section:not([data-hero]) h1, section:not([data-hero]) h2")
      .forEach((h) => h.classList.add("reveal-title"));

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
      });
    });

    // Project images: wipe-in on the wrapper + a gentle parallax drift.
    const parImgs: HTMLImageElement[] = [];
    document.querySelectorAll<HTMLImageElement>(".proj-card img").forEach((img) => {
      const c = img.parentElement;
      if (!c) return;
      c.classList.add("reveal-img");
      // Logos rendered with object-contain keep their natural size (no stretch, no drift).
      if ((" " + img.className + " ").includes(" object-contain ") || (" " + img.className + " ").includes(" md:object-contain ")) {
        img.addEventListener("error", () => c.classList.add("in"));
        return;
      }
      img.style.height = "118%";
      img.style.willChange = "transform";
      // Safety net: if the image fails to load, reveal its wrapper anyway so
      // the card never shows an empty clipped box.
      img.addEventListener("error", () => c.classList.add("in"));
      parImgs.push(img);
    });

    // 2) Track every reveal target; reveal once in view, then drop it.
    let revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-title, .reveal-img")
    );

    // 3) Parallax — only recompute during scroll/resize, then idle.
    const parEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    parEls.forEach((el) => {
      el.style.willChange = "transform";
    });

    let raf = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Reveals: add `.in` when the element enters the viewport, once.
      if (revealEls.length) {
        const still: HTMLElement[] = [];
        for (let i = 0; i < revealEls.length; i++) {
          const el = revealEls[i];
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
          else still.push(el);
        }
        revealEls = still;
      }

      // Parallax on project images.
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

      // Generic [data-parallax] drift.
      for (let i = 0; i < parEls.length; i++) {
        const el = parEls[i];
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.12");
        const max = parseFloat(el.dataset.parallaxMax || "10");
        const centerOffset = r.top + r.height / 2 - vh / 2;
        let ty = -(centerOffset / vh) * speed * 100;
        ty = Math.max(-max, Math.min(max, ty));
        el.style.transform = "translate3d(0," + ty + "%,0)";
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update(); // reveal whatever is already in view + initial parallax
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
