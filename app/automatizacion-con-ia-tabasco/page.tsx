import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SERVICE_PAGES, buildServiceMetadata } from "@/lib/serviceContent";

const data = SERVICE_PAGES["automatizacion-con-ia-tabasco"];

export const metadata: Metadata = buildServiceMetadata(data);

export default function Page() {
  return <ServicePage data={data} />;
}
