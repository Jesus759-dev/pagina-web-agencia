import type { MetadataRoute } from "next";

const BASE = "https://neuroviasystems.com.mx";

/**
 * robots.txt — allow full crawling of the site.
 *
 * We intentionally do NOT disallow `/_next/*` because Google's modern
 * crawler needs to fetch the JS and CSS bundles from there to render
 * the page with full fidelity (and rank it accordingly).
 *
 * Only `/api/*` is disallowed since those are internal JSON endpoints
 * that are not meant to appear in search results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
