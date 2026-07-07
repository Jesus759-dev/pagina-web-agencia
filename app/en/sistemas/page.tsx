import type { Metadata } from "next";
import SistemasPage from "@/components/SistemasPage";

const SITE_URL = "https://neuroviasystems.com.mx";

export const metadata: Metadata = {
  title: "Systems Catalog",
  description:
    "Neurovia Systems portal: requisitions, fleet maintenance, inventory and point of sale. Cloud platforms for your company.",
  alternates: {
    canonical: "/en/sistemas",
    languages: {
      "es-MX": `${SITE_URL}/sistemas`,
      "en-US": `${SITE_URL}/en/sistemas`,
      "x-default": `${SITE_URL}/sistemas`,
    },
  },
};

export default function Page() {
  return <SistemasPage lang="en" />;
}
