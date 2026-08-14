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
      {
        // Explicit rule for OpenAI's search crawler (powers ChatGPT Search
        // citations). Mirrors the `*` rule exactly — same allow/disallow, so
        // there is no contradiction; the named group just makes the intent
        // explicit and future-proof.
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
