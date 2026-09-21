import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WaLink from "@/components/WaLink";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

/**
 * 404 del sitio (aplica a / y a /en). No conoce el idioma de la ruta, así que
 * muestra el español como principal y una línea en inglés debajo.
 */
export default function NotFound() {
  const t = getDict("es").notFound;
  const en = getDict("en").notFound;

  return (
    <>
    <Navbar />
    <main className="mx-auto flex min-h-[88vh] max-w-[820px] items-center justify-center px-4 pt-32 pb-20 sm:px-10">
    <div className="surface w-full rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-14">
      <div className="font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        {t.code}
      </div>
      <h1 className="m-0 mt-4 font-heading text-[40px] leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">{t.h1}</h1>
      <p className="m-0 mt-5 max-w-[560px] text-lg leading-[1.6] text-muted">{t.lead}</p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a href="/#proyectos" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline">
          {t.portfolio} <span aria-hidden="true">→</span>
        </a>
        <a href="/" className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline">
          {t.home}
        </a>
        <WaLink context="general" className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline">
          {t.whatsapp}
        </WaLink>
      </div>

      <p lang="en" className="m-0 mt-12 text-sm text-muted">
        {en.h1}{" "}
        <a href="/en" className="underline underline-offset-2">
          {en.home}
        </a>
      </p>
    </div>
    </main>
    </>
  );
}
