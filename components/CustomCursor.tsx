"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const idleSinceRef = useRef<number>(performance.now());
  const animFrameRef = useRef<number>(0);
  // Use refs instead of state so the effect never re-runs due to these changes
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice || prefersReducedMotion || isCoarse) return;
    setEnabled(true);
  }, []);

  // This effect runs only once when enabled — no stale-closure re-runs
  useEffect(() => {
    if (!enabled) return;
    document.documentElement.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      idleSinceRef.current = performance.now();
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "0.7";
      }
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.(HOVER_SELECTOR)) {
        isHoveringRef.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "0";
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.(HOVER_SELECTOR)) {
        isHoveringRef.current = false;
        if (dotRef.current)
          dotRef.current.style.opacity = isVisibleRef.current ? "1" : "0";
      }
    };

    const handleMouseDown = () => {
      if (ringRef.current) {
        ringRef.current.style.boxShadow =
          "0 0 20px rgba(0, 200, 232, 0.5), 0 0 40px rgba(124, 58, 237, 0.3)";
      }
    };

    const handleMouseUp = () => {
      if (ringRef.current) ringRef.current.style.boxShadow = "none";
    };

    const handleMouseLeaveDoc = () => {
      isVisibleRef.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveDoc, {
      passive: true,
    });

    let running = true;

    const animate = () => {
      if (!running) return;

      const idleFor = performance.now() - idleSinceRef.current;
      if (idleFor < 2000) {
        const dotLerp = 0.25;
        const ringLerp = 0.12;

        dotPosRef.current.x +=
          (targetRef.current.x - dotPosRef.current.x) * dotLerp;
        dotPosRef.current.y +=
          (targetRef.current.y - dotPosRef.current.y) * dotLerp;
        ringPosRef.current.x +=
          (targetRef.current.x - ringPosRef.current.x) * ringLerp;
        ringPosRef.current.y +=
          (targetRef.current.y - ringPosRef.current.y) * ringLerp;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dotPosRef.current.x - 4}px, ${dotPosRef.current.y - 4}px, 0)`;
        }

        if (ringRef.current) {
          const hovering = isHoveringRef.current;
          const size = hovering ? 60 : 40;
          ringRef.current.style.width = `${size}px`;
          ringRef.current.style.height = `${size}px`;
          ringRef.current.style.borderColor = hovering ? "#7C3AED" : "#00C8E8";
          ringRef.current.style.transform = `translate3d(${ringPosRef.current.x - size / 2}px, ${ringPosRef.current.y - size / 2}px, 0)`;
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveDoc);
      document.documentElement.style.cursor = "";
    };
  }, [enabled]); // ← only re-runs if enabled changes, never on hover/visibility

  if (!mounted || !enabled) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#00C8E8",
          opacity: 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid #00C8E8",
          opacity: 0,
          transition:
            "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.2s ease",
          willChange: "transform",
          boxShadow: "none",
        }}
        aria-hidden="true"
      />
    </>
  );
}
