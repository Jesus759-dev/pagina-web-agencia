"use client";

import { useEffect } from "react";

/**
 * Scroll choreography for the "Neurovia Landing Pro" design.
 *
 * Reveals are handled by an IntersectionObserver (fire once, then unobserve) —
 * no per-frame layout reads. Parallax is driven by a scroll/resize listener
 * that schedules a single rAF and then goes idle, so nothing runs while the
 * page is still. It mutates only wrapper-level classes / inline transforms.
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
      img.style.height = "118%";
      img.style.willChange = "transform";
      img.addEventListener("error", () => c.classList.add("in"));
      parImgs.push(img);
    });

    // 2) Observe every reveal target — add `.in` once when it enters, then stop
    //    watching it. Off the main thread, no forced layout.
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-title, .reveal-img"
    );
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));

    // 3) Parallax — only compute during scroll/resize, then idle.
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

    update(); // initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
