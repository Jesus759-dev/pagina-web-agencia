import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getServicePage, buildServiceMetadata } from "@/lib/serviceContent";

const data = getServicePage("en", "sistemas-empresariales-tabasco");

export const metadata: Metadata = buildServiceMetadata(data, "en");

export default function Page() {
  return <ServicePage data={data} lang="en" />;
}
