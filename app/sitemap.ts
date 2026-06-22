import type { MetadataRoute } from "next";

const BASE = "https://neuroviasystems.com.mx";

/**
 * Since this is a single-page site, the sitemap lists just the homepage.
 * The `images` and `videos` extensions help Google index the project
 * screenshots and the hero showcase video for rich media results.
 *
 * Hash-fragment anchors (#servicios, #proyectos, …) are NOT added to the
 * sitemap — Google treats them as the same URL as "/" so listing them
 * would only pollute Search Console reports.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${BASE}/projects/requisiciones-dashboard.png`,
        `${BASE}/projects/chemiservis-offshore.png`,
        `${BASE}/projects/chemiservis-hidraulica.png`,
        `${BASE}/projects/chemiservis-login.jpg`,
        `${BASE}/projects/royers-construction.jpg`,
        `${BASE}/projects/provalsa.jpg`,
      ],
      videos: [
        {
          title: "Neurovia Systems — Presentación institucional",
          thumbnail_loc: `${BASE}/projects/requisiciones-dashboard.png`,
          description:
            "Conoce cómo Neurovia Systems desarrolla software con inteligencia artificial, automatización empresarial y plataformas web para empresas en Latinoamérica.",
          content_loc: `${BASE}/videos/neurovia-showcase.mp4`,
          family_friendly: "yes",
          live: "no",
        },
      ],
    },
  ];
}
