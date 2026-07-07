import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getServicePage, buildServiceMetadata } from "@/lib/serviceContent";

const data = getServicePage("en", "sistema-punto-de-venta-villahermosa");

export const metadata: Metadata = buildServiceMetadata(data, "en");

export default function Page() {
  return <ServicePage data={data} lang="en" />;
}
