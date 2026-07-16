"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A service card's vertical reel: a lightweight muted autoplay preview that,
 * on click, opens a lightbox with the full video (with audio + controls).
 * The full file only loads when opened, so page load stays light.
 */
export default function ServiceReel({
  preview,
  poster,
  full,
  title,
  watchLabel,
  closeLabel,
}: {
  preview: string;
  poster: string;
  full: string;
  title: string;
  watchLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const fullRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Try to start playback with sound (allowed: opened from a user gesture).
    fullRef.current?.play().catch(() => {});
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${watchLabel}: ${title}`}
        className="group relative flex cursor-pointer items-center justify-center rounded-xl border-0 bg-transparent p-0"
      >
        <video
          className="h-[260px] w-auto rounded-xl"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          style={{ boxShadow: "0 12px 28px -14px rgba(60,48,30,.45)" }}
        >
          <source src={preview} type="video/mp4" />
        </video>
        <span
          className="pointer-events-none absolute flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform duration-200 group-hover:scale-110"
          style={{ background: "rgba(40,74,94,.82)", backdropFilter: "blur(2px)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[95] flex flex-col items-center justify-center px-6 py-10"
          style={{ background: "rgba(8,12,20,.9)", backdropFilter: "blur(8px)" }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label={closeLabel}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border-0 text-[24px] leading-none text-white"
            style={{ background: "rgba(255,255,255,.14)" }}
          >
            ×
          </button>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={fullRef}
            onClick={(e) => e.stopPropagation()}
            src={full}
            controls
            autoPlay
            playsInline
            className="max-h-[86vh] w-auto max-w-full rounded-2xl"
            style={{ boxShadow: "0 24px 70px rgba(0,0,0,.5)" }}
          />
          <div className="mt-4 font-heading text-[16px] font-semibold text-white/90">{title}</div>
        </div>
      )}
    </>
  );
}
