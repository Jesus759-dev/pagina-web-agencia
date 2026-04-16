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

export const metadata: Metadata = {
  metadataBase: new URL("https://neuroviasystems.com.mx"),
  title: "Neurovia Systems | Agencia de IA, Desarrollo Web e Infraestructura IT",
  description:
    "Agencia digital especializada en aplicaciones con IA, sitios web de alto rendimiento, automatizaciones empresariales y redes Ubiquiti. Presencia en toda Latinoamérica con respuesta en menos de 24 horas.",
  keywords: [
    "Neurovia Systems",
    "agencia de inteligencia artificial",
    "desarrollo web México",
    "desarrollo web Latinoamérica",
    "automatización empresarial",
    "aplicaciones IA a medida",
    "Next.js agencia",
    "agencia digital petróleo",
    "agencia digital construcción",
    "infraestructura IT empresarial",
    "redes Ubiquiti instalación",
    "armado de PCs a medida",
    "configuración routers empresariales",
    "mantenimiento de equipo de cómputo",
    "software ERP a medida",
    "software petróleo y gas",
    "tienda online WooCommerce",
  ],
  authors: [{ name: "Neurovia Systems", url: "https://neuroviasystems.com.mx" }],
  creator: "Neurovia Systems",
  publisher: "Neurovia Systems",
  alternates: {
    canonical: "https://neuroviasystems.com.mx",
  },
  openGraph: {
    title: "Neurovia Systems | Agencia de IA, Desarrollo Web e Infraestructura IT",
    description:
      "Tu negocio, potenciado por inteligencia artificial real. Aplicaciones inteligentes, sitios web, automatizaciones e infraestructura IT para toda Latinoamérica.",
    url: "https://neuroviasystems.com.mx",
    siteName: "Neurovia Systems",
    locale: "es_MX",
    type: "website",
    videos: [
      {
        url: "https://neuroviasystems.com.mx/videos/neurovia-showcase.mp4",
        width: 1280,
        height: 720,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "player",
    title: "Neurovia Systems | Agencia de IA, Desarrollo Web e Infraestructura IT",
    description:
      "Tu negocio, potenciado por inteligencia artificial real.",
    players: [
      {
        playerUrl: "https://neuroviasystems.com.mx/#video-showcase",
        streamUrl: "https://neuroviasystems.com.mx/videos/neurovia-showcase.mp4",
        width: 1280,
        height: 720,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "Technology",
};

/**
 * Structured data (JSON-LD) for rich results on Google.
 * Covers: Organization, WebSite with SiteSearch, and VideoObject for
 * the hero showcase video — key for video rich snippets.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://neuroviasystems.com.mx/#organization",
      name: "Neurovia Systems",
      url: "https://neuroviasystems.com.mx",
      logo: "https://neuroviasystems.com.mx/logo.png",
      description:
        "Agencia digital especializada en IA, desarrollo web, automatizaciones e infraestructura IT para empresas en Latinoamérica.",
      areaServed: { "@type": "Place", name: "Latinoamérica" },
      sameAs: [
        "https://www.linkedin.com/company/neuroviasystems",
        "https://twitter.com/neuroviasystems",
        "https://github.com/neuroviasystems",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+52-993-722-6350",
        contactType: "Ventas",
        areaServed: ["MX", "LATAM"],
        availableLanguage: ["Spanish", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://neuroviasystems.com.mx/#website",
      url: "https://neuroviasystems.com.mx",
      name: "Neurovia Systems",
      publisher: { "@id": "https://neuroviasystems.com.mx/#organization" },
      inLanguage: "es-MX",
    },
    {
      "@type": "VideoObject",
      "@id": "https://neuroviasystems.com.mx/#hero-video",
      name: "Neurovia Systems — Agencia de IA, Desarrollo Web e Infraestructura IT",
      description:
        "Conoce cómo Neurovia Systems transforma negocios con aplicaciones de IA, sitios web de alto rendimiento, automatizaciones empresariales y despliegues de infraestructura IT (redes Ubiquiti, armado de PCs, mantenimiento).",
      thumbnailUrl: [
        "https://neuroviasystems.com.mx/projects/requisiciones-dashboard.png",
      ],
      uploadDate: "2026-04-15",
      contentUrl: "https://neuroviasystems.com.mx/videos/neurovia-showcase.mp4",
      embedUrl: "https://neuroviasystems.com.mx/#video-showcase",
      publisher: { "@id": "https://neuroviasystems.com.mx/#organization" },
      inLanguage: "es",
    },
    {
      "@type": "ProfessionalService",
      name: "Neurovia Systems",
      image: "https://neuroviasystems.com.mx/logo.png",
      "@id": "https://neuroviasystems.com.mx/#service",
      url: "https://neuroviasystems.com.mx",
      telephone: "+52-993-722-6350",
      priceRange: "$$",
      serviceType: [
        "Desarrollo de aplicaciones con inteligencia artificial",
        "Desarrollo de sitios web y e-commerce",
        "Automatización de procesos empresariales",
        "Infraestructura IT, redes Ubiquiti y armado de PCs",
        "Mantenimiento de equipo de cómputo",
      ],
      areaServed: { "@type": "Place", name: "Latinoamérica" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-void text-text-primary">
        <CustomCursor />
        <ScrollProgress />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
