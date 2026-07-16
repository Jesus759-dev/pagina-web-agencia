"use client";

import { useEffect, useRef, useState } from "react";

const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60) || 0).padStart(2, "0")}`;

/**
 * A service card's vertical reel: a lightweight muted autoplay preview that,
 * on click, opens a lightbox with the full video (audio + custom controls that
 * stay readable over the light video). The full file loads only when opened.
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
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const vref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const v = vref.current;
    if (v) {
      v.muted = false;
      setMuted(false);
      v.play().catch(() => {});
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const togglePlay = () => {
    const v = vref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleMute = () => {
    const v = vref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = vref.current;
    if (!v || !dur) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * dur;
  };

  const goFullscreen = () => {
    vref.current?.requestFullscreen?.().catch(() => {});
  };

  const progress = dur ? (cur / dur) * 100 : 0;

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
          className="fixed inset-0 z-[95] flex items-center justify-center px-4 py-6"
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
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border-0 text-[24px] leading-none text-white"
            style={{ background: "rgba(255,255,255,.16)" }}
          >
            ×
          </button>

          <div
            className="relative overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 24px 70px rgba(0,0,0,.5)" }}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={vref}
              src={full}
              autoPlay
              playsInline
              onClick={togglePlay}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
              className="block max-h-[82vh] w-auto max-w-full cursor-pointer"
            />

            {/* Center play button when paused */}
            {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={watchLabel}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-0 text-white"
                style={{ background: "rgba(40,74,94,.9)" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}

            {/* Custom control bar — always readable over the light video */}
            <div
              className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 py-3"
              style={{ background: "linear-gradient(to top, rgba(8,12,20,.9), rgba(8,12,20,0))" }}
            >
              <button type="button" onClick={togglePlay} aria-label={watchLabel} className="flex-none border-0 bg-transparent p-0 text-white">
                {playing ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                )}
              </button>

              <span className="flex-none font-code text-[12px] tabular-nums text-white/90">
                {fmt(cur)} / {fmt(dur)}
              </span>

              <div onClick={seek} className="relative h-1.5 flex-1 cursor-pointer rounded-full bg-white/25">
                <div className="absolute inset-y-0 left-0 rounded-full bg-white" style={{ width: progress + "%" }} />
              </div>

              <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="flex-none border-0 bg-transparent p-0 text-white">
                {muted ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3l2.5 2.5-1 1L15.5 13 13 15.5l-1-1L14.5 12 12 9.5l1-1L15.5 11 18 8.5l1 1L16.5 12z" /></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm11 .5a3 3 0 0 1 0 5v-5zm0-4a7 7 0 0 1 0 13v-2a5 5 0 0 0 0-9V5.5z" /></svg>
                )}
              </button>

              <button type="button" onClick={goFullscreen} aria-label="Fullscreen" className="flex-none border-0 bg-transparent p-0 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm16 0v6h-6v-2h4v-4h2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
