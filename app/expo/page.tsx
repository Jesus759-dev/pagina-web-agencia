import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaLink from "@/components/WaLink";
import ExpoDemoLink from "@/components/ExpoDemoLink";
import ExpoVisitMark from "@/components/ExpoVisitMark";
import { getDict } from "@/lib/i18n";
import { EXPO } from "@/lib/expo";

const t = getDict("es").expo;

export const metadata: Metadata = {
  title: `${EXPO.name} · Neurovia Systems`,
  description: t.lead,
  // Página de campaña: sirve para el QR del stand, no para posicionar en Google.
  robots: { index: false, follow: true },
};

export default function ExpoPage() {
  return (
    <>
      <Navbar />
      <ExpoVisitMark />
      <main className="mx-auto max-w-[1240px] px-5 pt-[132px] pb-24 sm:px-10">
        <section className="surface rounded-3xl px-6 py-12 sm:px-12 sm:py-14">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-code text-[11.5px] uppercase tracking-[0.12em]" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            {EXPO.name}
          </div>

          <h1 className="m-0 mt-5 max-w-[20ch] font-heading text-[38px] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[58px]">
            {t.h1}
          </h1>
          <p className="m-0 mt-5 max-w-[68ch] text-lg leading-[1.6] text-muted">{t.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ExpoDemoLink className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold no-underline">
              {t.ctaDemo} <span aria-hidden="true">↗</span>
            </ExpoDemoLink>
            <WaLink context="expo" className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold no-underline">
              {t.ctaPrimary}
            </WaLink>
            <a href="/#proyectos" className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold no-underline text-muted hover:text-ink">
              {t.ctaSecondary}
            </a>
          </div>
          <p className="m-0 mt-5 font-code text-[12.5px] text-muted">{t.note}</p>
        </section>

        <section className="mt-12 overflow-hidden rounded-3xl px-6 py-11 text-white sm:px-12" style={{ background: "linear-gradient(135deg, #0f2a44, #1b4a74)" }}>
          <div className="font-code text-[11.5px] uppercase tracking-[0.14em]" style={{ color: "#9ad6f7" }}>
            Neurovia Build · control de obra
          </div>
          <h2 className="m-0 mt-4 max-w-[18ch] font-heading text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[42px]">
            {t.demoTitle}
          </h2>
          <p className="m-0 mt-4 max-w-[62ch] text-[16.5px] leading-[1.6] text-white/75">{t.demoBody}</p>
          <p className="m-0 mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-white/60">{t.demoRoles}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ExpoDemoLink className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0f2a44] no-underline transition-transform duration-200 hover:scale-[1.03] active:scale-95">
              {t.ctaDemo} <span aria-hidden="true">↗</span>
            </ExpoDemoLink>
            <span className="font-code text-[12px] text-white/55">construccion.neuroviasystems.cloud</span>
          </div>
          <p className="m-0 mt-6 max-w-[62ch] font-code text-[11.5px] leading-[1.6] text-white/45">{t.demoNote}</p>
        </section>

        <h2 className="m-0 mt-16 font-heading text-[28px] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[38px]">
          {t.cardsTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t.cards.map((c) => (
            <article key={c.title} className="surface flex h-full flex-col rounded-2xl p-7">
              <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">{c.title}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.65] text-muted">{c.body}</p>
              <div className="mt-auto pt-5">
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="-my-2 inline-flex min-h-[44px] items-center gap-1.5 py-2 text-sm font-semibold no-underline" style={{ color: "var(--accent)" }}>
                    {c.proof} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="font-code text-[12px] uppercase tracking-[0.1em] text-muted">{c.proof}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="surface mt-16 rounded-3xl px-6 py-12 sm:px-12">
          <h2 className="m-0 font-heading text-[26px] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[34px]">
            {t.stepsTitle}
          </h2>
          <ol className="mt-7 grid gap-6 md:grid-cols-3">
            {t.steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full font-code text-[13px] font-semibold text-white" style={{ background: "var(--accent)" }}>
                  {i + 1}
                </span>
                <span className="text-[15.5px] leading-[1.6] text-ink">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-9">
            <WaLink context="expo" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold no-underline">
              {t.ctaPrimary} <span aria-hidden="true">→</span>
            </WaLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
