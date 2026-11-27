import type { Metadata } from "next";
import MondayAlternativePage from "@/components/MondayAlternativePage";
import { buildMondayMetadata } from "@/lib/mondayContent";

export const metadata: Metadata = buildMondayMetadata("en");

export default function Page() {
  return <MondayAlternativePage lang="en" />;
}
