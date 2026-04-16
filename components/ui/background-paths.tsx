// Decorative SVG paths rendered behind the Hero.
//
// No animation. The previous continuous opacity fade inflated the
// Speed Index on mobile (Lighthouse counted every per-path fade cycle
// as visual progress). Now each path uses a fixed opacity — still
// visually rich, zero performance cost.

function FloatingPaths({ position, color }: { position: number; color: "cyan" | "purple" }) {
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 12 * position} -${189 + i * 15}C-${
      380 - i * 12 * position
    } -${189 + i * 15} -${312 - i * 12 * position} ${216 - i * 15} ${
      152 - i * 12 * position
    } ${343 - i * 15}C${616 - i * 12 * position} ${470 - i * 15} ${
      684 - i * 12 * position
    } ${875 - i * 15} ${684 - i * 12 * position} ${875 - i * 15}`,
    opacity: 0.08 + i * 0.018,
    width: 0.5 + i * 0.05,
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
            opacity={path.opacity}
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
    </div>
  );
}
