/**
 * Neurovia "neural node" mark — a small connected-graph glyph rendered with a
 * cyan→violet gradient. `id` must be unique per instance because the SVG
 * gradient is referenced by id.
 */
export default function NeuroviaLogo({
  size = 24,
  id = "nvMark",
}: {
  size?: number;
  id?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#6847E5" />
        </linearGradient>
      </defs>
      <line x1="12" y1="3.5" x2="12" y2="11" stroke={`url(#${id})`} strokeWidth="1.4" />
      <line x1="12" y1="11" x2="5.5" y2="18" stroke={`url(#${id})`} strokeWidth="1.4" />
      <line x1="12" y1="11" x2="18" y2="16.5" stroke={`url(#${id})`} strokeWidth="1.4" />
      <circle cx="12" cy="3.5" r="2.4" fill="#22d3ee" />
      <circle cx="5.5" cy="18.5" r="2.2" fill="#6847E5" />
      <circle cx="18" cy="16.5" r="2" fill="#3b82f6" />
      <circle cx="12" cy="11" r="1.7" fill="#38bdf8" />
    </svg>
  );
}
