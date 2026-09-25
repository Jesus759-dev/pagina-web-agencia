import ExpoBanner from "@/components/ExpoBanner";
import { isExpoActive } from "@/lib/expo";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import PuntoDeVenta from "@/components/PuntoDeVenta";
import Crm from "@/components/Crm";
import Portfolio from "@/components/Portfolio";
import ClientMapSection from "@/components/ClientMapSection";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { webPageJsonLd, jsonLdProps } from "@/lib/seo";

const SITE_URL = "https://neuroviasystems.com.mx";

export const metadata: Metadata = {
  title: "Custom Software & AI in Villahermosa",
  description:
    "Custom software development, AI and business automation in Villahermosa, Tabasco. We build platforms, dashboards and web apps. Book a free consultation.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      "es-MX": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Neurovia Systems | Custom Software, AI & Automation in Villahermosa",
    description:
      "Custom software development, AI and business automation in Villahermosa, Tabasco. Platforms, dashboards and web apps. Book a free consultation.",
    url: `${SITE_URL}/en`,
    siteName: "Neurovia Systems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-robotic-hand.jpg`,
        width: 1200,
        height: 630,
        alt: "Neurovia Systems — Custom Software, AI & Automation",
        type: "image/jpeg",
      },
    ],
  },
};

const jsonLd = webPageJsonLd({
  path: "/en",
  name: "Custom software, AI and automation in Villahermosa, Tabasco",
  description:
    "Neurovia Systems builds custom software, business systems (ERP, CRM, inventory), AI automation and websites for companies in Villahermosa, Tabasco and the rest of Mexico.",
  lang: "en",
});

export default function HomeEn() {
  return (
    <div lang="en">
      <script {...jsonLdProps(jsonLd)} />
      <Navbar lang="en" />
      <main>
        <Hero lang="en" />
        <Stats lang="en" />
        <TechStack lang="en" />
        <Services lang="en" />
        <PuntoDeVenta lang="en" />
        <Crm lang="en" />
        <Portfolio lang="en" />
        <ClientMapSection lang="en" />
        <WhyUs lang="en" />
        <Process lang="en" />
        <Testimonials lang="en" />
        <Contact lang="en" />
      </main>
      {isExpoActive() && <ExpoBanner lang="en" />}
      <Footer lang="en" />
    </div>
  );
}
