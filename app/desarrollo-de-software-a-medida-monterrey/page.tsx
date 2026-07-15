import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getServicePage, buildServiceMetadata } from "@/lib/serviceContent";

const data = getServicePage("es", "desarrollo-de-software-a-medida-monterrey");

export const metadata: Metadata = buildServiceMetadata(data, "es");

export default function Page() {
  return <ServicePage data={data} lang="es" />;
}
