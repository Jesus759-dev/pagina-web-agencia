import type { Metadata } from "next";
import NosotrosPage from "@/components/NosotrosPage";
import { getNosotros } from "@/lib/nosotrosContent";

const SITE_URL = "https://neuroviasystems.com.mx";
const c = getNosotros("en");

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/en/nosotros`,
    languages: {
      "es-MX": `${SITE_URL}/nosotros`,
      "en-US": `${SITE_URL}/en/nosotros`,
      "x-default": `${SITE_URL}/nosotros`,
    },
  },
  openGraph: {
    title: `${c.metaTitle} | Neurovia Systems`,
    description: c.metaDescription,
    url: `${SITE_URL}/en/nosotros`,
    type: "website",
  },
};

export default function Page() {
  return <NosotrosPage lang="en" />;
}
