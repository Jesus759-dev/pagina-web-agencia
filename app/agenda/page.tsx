import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import SubscribeForm from "@/components/SubscribeForm";
import WaConsultaButton from "@/components/WaConsultaButton";
import { waLink } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const SITE_URL = "https://neuroviasystems.com.mx";

export const metadata: Metadata = {
  title: "Agenda una llamada de 20 minutos",
  description:
    "¿Traes un proceso atorado en tu negocio? Cuéntamelo en 20 minutos. Si tiene solución con software, te digo cuál y cuánto cuesta. Si no, también te lo digo.",
  alternates: { canonical: `${SITE_URL}/agenda` },
  openGraph: {
    title: "Agenda una llamada de 20 minutos | Neurovia Systems",
    description:
      "Cuéntame el proceso que traes atorado. Si tiene solución con software, te digo cuál y cuánto cuesta.",
    url: `${SITE_URL}/agenda`,
    type: "website",
  },
};

const WA_AGENDA = waLink(
  "Hola Neurovia, quiero agendar 20 minutos para ver un proceso que traigo atorado"
);

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Agenda", item: `${SITE_URL}/agenda` },
  ],
};

export default function AgendaPage() {
  const t = getDict("es").footer;

  return (
    <div lang="es">
      <Navbar />

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[900px] px-5 pb-16 pt-[150px] text-center sm:px-10 sm:pt-[180px]">
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {t.agenda}
            </div>
            <h1 className="m-0 font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              ¿Traes un proceso atorado?
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-lg leading-[1.6] text-muted">
              Cuéntamelo en 20 minutos. Si tiene solución con software, te digo cuál
              y cuánto cuesta. Si no la tiene, también te lo digo.
            </p>
          </div>
        </section>

        {/* Scheduling widget (isolated placeholder) */}
        <section className="mx-auto max-w-[820px] px-5 pt-12 sm:px-10">
          <CalendlyEmbed />

          {/* Contact alternative */}
          <div className="mt-10 rounded-2xl border border-line bg-white p-7 text-center sm:p-9">
            <p className="m-0 font-heading text-[19px] font-semibold text-ink">
              ¿Prefieres escribir directo?
            </p>
            <p className="mx-auto mt-2 max-w-[440px] text-[15px] leading-[1.6] text-muted">
              Mándame un mensaje por WhatsApp o un correo y lo vemos por ahí.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <WaConsultaButton href={WA_AGENDA} lang="es" />
              <a
                href="mailto:soporte@neuroviasystems.com.mx"
                className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                soporte@neuroviasystems.com.mx
              </a>
            </div>
          </div>
        </section>

        {/* Subscriber capture */}
        <section className="mx-auto max-w-[820px] px-5 pb-24 pt-16 sm:px-10">
          <div className="rounded-3xl border border-line bg-surface-2 p-7 sm:p-10">
            <h2 className="m-0 font-heading text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[28px]">
              {getDict("es").subscribe.title}
            </h2>
            <p className="mb-6 mt-3 max-w-[520px] text-[15px] leading-[1.6] text-muted">
              {getDict("es").subscribe.desc}
            </p>
            <SubscribeForm lang="es" />
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
