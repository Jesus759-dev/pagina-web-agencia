import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getServicePage, buildServiceMetadata } from "@/lib/serviceContent";

const data = getServicePage("en", "desarrollo-de-aplicaciones-web-tabasco");

export const metadata: Metadata = buildServiceMetadata(data, "en");

export default function Page() {
  return <ServicePage data={data} lang="en" />;
}
