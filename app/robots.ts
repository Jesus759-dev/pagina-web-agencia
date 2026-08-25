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
// AI answer-engine crawlers we explicitly welcome (AEO). They are already
// allowed by the `*` rule, but naming them makes the intent unambiguous and
// future-proof — notably `Google-Extended`, whose absence some systems read as
// "do not use for Gemini/AI Overviews grounding". Same allow/disallow as `*`,
// so there is no contradiction.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI
  "OAI-SearchBot", // ChatGPT Search citations
  "ClaudeBot", // Anthropic (Claude)
  "Claude-User", // Claude user-triggered browsing
  "PerplexityBot", // Perplexity
  "Google-Extended", // Gemini / AI Overviews grounding
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl (feeds many model trainings)
  "Bytespider", // ByteDance / TikTok
];

// Content Signals (robots.txt extension): usage preferences, distinct from
// access. We allow these crawlers in (Allow: /) and signal that our content
// may be used for search and as AI answer input, but NOT for model training.
// Crawlers read only their own matching group, so this must repeat per group.
const CONTENT_SIGNAL = "ai-train=no, search=yes, ai-input=yes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
        other: { "Content-Signal": CONTENT_SIGNAL },
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: ["/api/"],
        other: { "Content-Signal": CONTENT_SIGNAL },
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
