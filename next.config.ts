import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    /**
     * Tree-shake named-export libraries so only the icons/motion primitives
     * actually referenced end up in the bundle. `lucide-react` is optimized
     * by Next.js out of the box, but `framer-motion` is not — adding it here
     * shaves unused exports from the first-load JS.
     */
    optimizePackageImports: ["framer-motion", "lucide-react"],

    // inlineCss: EVITAR — probado en prod y empeoró el Speed Index (1.4s → 2.9s)
    // porque el HTML pesó 390 KB en vez de 157 KB. Parsear ese HTML inline en
    // móvil toma más que descargar la CSS externa cacheada en paralelo.
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Cache optimized images for 30 days to keep LCP fast on repeat visits
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/fonts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Long-cache immutable assets so repeat visits are instant
    {
      source: "/videos/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/projects/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
