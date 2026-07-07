import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollChoreography from "@/components/ScrollChoreography";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* --------------------------------------------------------------------------
 * SEO constants — single source of truth for metadata and JSON-LD.
 * -------------------------------------------------------------------------- */
const SITE_URL = "https://neuroviasystems.com.mx";
const SITE_NAME = "Neurovia Systems";
const SITE_TITLE =
  "Neurovia Systems | Desarrollo de Software, IA y Automatización en Villahermosa";
const SITE_DESCRIPTION =
  "Desarrollo de software a medida, IA y automatización empresarial en Villahermosa, Tabasco. Creamos plataformas web y dashboards. Agenda tu consulta gratuita.";
const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

/** Google Analytics 4 — measurement ID (público, viaja en el HTML). */
const GA_MEASUREMENT_ID = "G-PBY374Y0E3";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Neurovia Systems",
    "desarrollo de software",
    "inteligencia artificial empresas",
    "automatización empresarial",
    "plataformas web corporativas",
    "dashboards corporativos",
    "sistemas corporativos a medida",
    "soluciones digitales empresariales",
    "software a medida México",
    "desarrollo web México",
    "desarrollo web Latinoamérica",
    "desarrollo web Villahermosa",
    "desarrollo web Tabasco",
    "agencia de software Villahermosa",
    "agencia de software Tabasco",
    "páginas web Villahermosa",
    "automatización empresarial Tabasco",
    "inteligencia artificial Villahermosa",
    "soporte IT Villahermosa Tabasco",
    "agencia de software",
    "aplicaciones IA a medida",
    "infraestructura IT empresarial",
    "redes Ubiquiti instalación",
    "ERP a medida",
    "e-commerce profesional",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Business · Technology · Software Development",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Neurovia Systems — Desarrollo de Software, IA y Automatización Empresarial",
        type: "image/jpeg",
      },
    ],
    videos: [
      {
        url: `${SITE_URL}/videos/neurovia-showcase.mp4`,
        width: 1280,
        height: 720,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Desarrollo de software, IA y automatización empresarial. Plataformas, dashboards y soluciones digitales de nivel empresa.",
    images: [OG_IMAGE],
    creator: "@neuroviasystems",
    site: "@neuroviasystems",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  verification: {
    // TODO: Pega aquí el código que te dé Google Search Console al verificar
    // google: "TU-CODIGO-DE-VERIFICACION-AQUI",
  },
  // Favicon: app/icon.svg (logo Neurovia) is picked up automatically via the
  // Next.js file convention — no explicit config needed.
};

/**
 * Structured data (JSON-LD) for rich results on Google.
 * A single @graph lets Google link all entities together.
 * Covers: Organization, WebSite, WebPage, VideoObject, and
 * ProfessionalService with a full itemListed OfferCatalog.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Neurovia Systems",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/web-app-manifest-512x512.png`,
        width: 512,
        height: 512,
      },
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villahermosa",
        addressRegion: "Tabasco",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.9892,
        longitude: -92.9281,
      },
      areaServed: [
        { "@type": "City", name: "Villahermosa" },
        { "@type": "State", name: "Tabasco" },
        { "@type": "Country", name: "México" },
        { "@type": "Place", name: "Latinoamérica" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/neuroviasystems",
        "https://twitter.com/neuroviasystems",
        "https://github.com/neuroviasystems",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-993-722-6350",
          contactType: "Ventas",
          areaServed: ["MX", "LATAM"],
          availableLanguage: ["Spanish", "English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
      primaryImageOfPage: OG_IMAGE,
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE_URL}/#hero-video`,
      name: "Neurovia Systems — Presentación institucional",
      description:
        "Conoce cómo Neurovia Systems transforma negocios con desarrollo de software a medida, inteligencia artificial, automatización empresarial, plataformas web y dashboards corporativos.",
      thumbnailUrl: [OG_IMAGE],
      uploadDate: "2026-04-15",
      contentUrl: `${SITE_URL}/videos/neurovia-showcase.mp4`,
      embedUrl: `${SITE_URL}/#video-showcase`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      image: OG_IMAGE,
      url: SITE_URL,
      telephone: "+52-993-722-6350",
      priceRange: "$$",
      description: SITE_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villahermosa",
        addressRegion: "Tabasco",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.9892,
        longitude: -92.9281,
      },
      areaServed: [
        { "@type": "City", name: "Villahermosa" },
        { "@type": "State", name: "Tabasco" },
        { "@type": "Country", name: "México" },
        { "@type": "Place", name: "Latinoamérica" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Neurovia Systems",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo de software a medida",
              description:
                "Plataformas web, dashboards corporativos y sistemas empresariales con Next.js, React y Node.js.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Inteligencia artificial para empresas",
              description:
                "Modelos de IA, asistentes virtuales, procesamiento de documentos y analítica predictiva con Claude y GPT.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatización empresarial",
              description:
                "Workflows con n8n, integración de APIs y automatización de procesos repetitivos.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Infraestructura IT y hardware",
              description:
                "Armado de PCs y workstations, configuración de routers, APs y redes Ubiquiti, mantenimiento.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        {/* Connection hints for third-party origins (fonts + video CDN) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />

        {/* Geo targeting — Villahermosa, Tabasco (México) */}
        <meta name="geo.region" content="MX-TAB" />
        <meta name="geo.placename" content="Villahermosa, Tabasco, México" />
        <meta name="geo.position" content="17.9892;-92.9281" />
        <meta name="ICBM" content="17.9892, -92.9281" />
        <meta name="language" content="es-MX" />

        {/* JSON-LD structured data — the single @graph covers all entities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-ink">
        {/* Crawler-friendly fallback. Renders only when JS is disabled
            (search-engine crawlers already execute JS, but this provides
            a readable sentence on first byte for simpler bots). */}
        <noscript>
          <div
            style={{
              padding: "2rem 1rem",
              textAlign: "center",
              background: "#ffffff",
              color: "#0c1220",
            }}
          >
            {/* Not an <h1>: the real <h1> lives in each page (Hero / service
                pages) and must stay unique per page for SEO. */}
            <div style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>
              Neurovia Systems — Desarrollo de Software, IA y Automatización Empresarial
            </div>
            <p style={{ maxWidth: 640, margin: "1rem auto", lineHeight: 1.5 }}>
              Empresa tecnológica especializada en desarrollo de software, inteligencia
              artificial, automatización empresarial, plataformas web, dashboards
              corporativos y soluciones digitales. Para la mejor experiencia,
              habilita JavaScript en tu navegador.
            </p>
          </div>
        </noscript>
        {children}
        {/* Reversible scroll reveal/parallax choreography (design parity) */}
        <ScrollChoreography />
        {/* Floating WhatsApp CTA — kept from the previous build */}
        <WhatsAppButton />

        {/* Google Analytics 4 — loaded after the page is interactive so it
            never blocks first paint / LCP. Tracks all routes automatically. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
