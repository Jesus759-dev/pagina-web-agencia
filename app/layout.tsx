import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/* --------------------------------------------------------------------------
 * SEO constants — single source of truth for metadata and JSON-LD.
 * -------------------------------------------------------------------------- */
const SITE_URL = "https://neuroviasystems.com.mx";
const SITE_NAME = "Neurovia Systems";
const SITE_TITLE =
  "Neurovia Systems | Desarrollo de Software, IA y Automatización Empresarial";
const SITE_DESCRIPTION =
  "Empresa tecnológica especializada en desarrollo de software, inteligencia artificial, automatización empresarial, plataformas web, dashboards corporativos y soluciones digitales a medida.";
const OG_IMAGE = `${SITE_URL}/projects/requisiciones-dashboard.png`;

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
        type: "image/png",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      foundingDate: "2024",
      areaServed: [
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
      areaServed: [
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
        <meta name="theme-color" content="#020408" />
        <meta name="color-scheme" content="dark" />

        {/* Geo targeting for Mexico */}
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="México" />
        <meta name="language" content="es-MX" />

        {/* JSON-LD structured data — the single @graph covers all entities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-void text-text-primary">
        {/* Crawler-friendly fallback. Renders only when JS is disabled
            (search-engine crawlers already execute JS, but this provides
            a readable sentence on first byte for simpler bots). */}
        <noscript>
          <div
            style={{
              padding: "2rem 1rem",
              textAlign: "center",
              background: "#020408",
              color: "#F8FAFC",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
              Neurovia Systems — Desarrollo de Software, IA y Automatización Empresarial
            </h1>
            <p style={{ maxWidth: 640, margin: "1rem auto", lineHeight: 1.5 }}>
              Empresa tecnológica especializada en desarrollo de software, inteligencia
              artificial, automatización empresarial, plataformas web, dashboards
              corporativos y soluciones digitales. Para la mejor experiencia,
              habilita JavaScript en tu navegador.
            </p>
          </div>
        </noscript>
        <CustomCursor />
        <ScrollProgress />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
