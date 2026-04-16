// Optimized animated background paths.
// Only animates CSS `opacity` — the only property that runs 100% on GPU
// without triggering layout or paint. Path geometry is static.
// 16 paths per side (32 total) vs original 72.

function FloatingPaths({ position, color }: { position: number; color: "cyan" | "purple" }) {
  const paths = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 12 * position} -${189 + i * 15}C-${
      380 - i * 12 * position
    } -${189 + i * 15} -${312 - i * 12 * position} ${216 - i * 15} ${
      152 - i * 12 * position
    } ${343 - i * 15}C${616 - i * 12 * position} ${470 - i * 15} ${
      684 - i * 12 * position
    } ${875 - i * 15} ${684 - i * 12 * position} ${875 - i * 15}`,
    baseOpacity: 0.04 + i * 0.018,
    width: 0.5 + i * 0.05,
    duration: 4 + (i % 5) * 1.5,
    delay: i * 0.3,
  }));

  const strokeColor = color === "cyan" ? "#00C8E8" : "#7C3AED";

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke={strokeColor}
            strokeWidth={path.width}
            style={{
              opacity: path.baseOpacity,
              // + 4 s delay so animation starts AFTER the Speed Index window.
              // Each path's visual change during 0–3 s was counted as progress
              // even though the effect is subtle (0.04 → 0.18 opacity).
              animation: `path-fade ${path.duration}s ${4 + path.delay}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <FloatingPaths position={1} color="cyan" />
      <FloatingPaths position={-1} color="purple" />
      <style>{`
        @keyframes path-fade {
          from { opacity: var(--op-from, 0.04); }
          to   { opacity: var(--op-to,   0.18); }
        }
      `}</style>
    </div>
  );
}
