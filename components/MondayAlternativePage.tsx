import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaLink from "@/components/WaLink";
import MondaySavingsCalculator from "@/components/MondaySavingsCalculator";
import { getMonday, buildMondayJsonLd } from "@/lib/mondayContent";
import { localeBase, type Locale } from "@/lib/i18n";

/**
 * Landing "Alternativa a monday.com en México". Un solo <h1>. Reutiliza Navbar,
 * Contact y Footer del sitio y los tokens de diseño (text-ink navy, var(--accent)
 * azul). No usa el logo ni los colores de monday.com; la marca solo se nombra en texto.
 */
export default function MondayAlternativePage({ lang = "es" }: { lang?: Locale }) {
  const d = getMonday(lang);
  const base = localeBase(lang);
  const agendaHref = `${base}/agenda`;
  const jsonLd = buildMondayJsonLd(lang);

  return (
    <div lang={lang}>
      <Navbar lang={lang} />
      <main>
        {/* Hero */}
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {d.eyebrow}
            </div>
            <h1 className="m-0 max-w-[900px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {d.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{d.heroLead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#calculadora"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white no-underline"
                style={{ background: "var(--accent)" }}
              >
                {d.ctaCalc} <span aria-hidden="true">→</span>
              </a>
              <WaLink
                context="monday"
                lang={lang}
                location="monday-hero"
                className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                {d.ctaWa}
              </WaLink>
            </div>
            <p className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-[14px] text-faint">
              {d.heroTrust.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span className="mr-2" aria-hidden="true">·</span>}
                  {t}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* El problema */}
        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[88px] sm:px-10">
          <h2 className="m-0 max-w-[760px] font-heading text-[28px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[34px]">
            {d.problemsTitle}
          </h2>
          <div className="mt-[42px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {d.problems.map((p) => (
              <div key={p.title} className="svc-card rounded-2xl border border-line bg-white p-[32px]">
                <h3 className="m-0 font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[820px] text-[13px] leading-[1.6] text-faint">{d.problemsNote}</p>
        </section>

        {/* Comparativa */}
        <section className="mx-auto max-w-[920px] px-5 pt-[88px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {d.compareTitle}
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[15px]">
              <thead>
                <tr>
                  <th className="border-b border-line py-3 pr-4 font-semibold text-faint">{d.compareHead.feature}</th>
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink-2">{d.compareHead.monday}</th>
                  <th
                    className="rounded-t-xl border-b-2 px-4 py-3 font-bold text-white"
                    style={{ background: "var(--accent)", borderColor: "var(--accent)" }}
                  >
                    {d.compareHead.neurovia}
                  </th>
                </tr>
              </thead>
              <tbody>
                {d.compareRows.map((r) => (
                  <tr key={r.label} className="align-top">
                    <td className="border-b border-line-soft py-4 pr-4 font-semibold text-ink">{r.label}</td>
                    <td className="border-b border-line-soft px-4 py-4 text-muted">{r.monday}</td>
                    <td
                      className="border-b border-line-soft px-4 py-4 font-medium text-ink"
                      style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
                    >
                      {r.neurovia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[12px] leading-[1.6] text-faint">{d.compareNote}</p>
        </section>

        {/* Calculadora */}
        <section id="calculadora" className="mx-auto max-w-[920px] scroll-mt-[120px] px-5 pt-[88px] sm:px-10">
          <MondaySavingsCalculator calc={d.calc} agendaHref={agendaHref} lang={lang} />
        </section>

        {/* Comparativa de precio por número de usuarios */}
        <section className="mx-auto max-w-[920px] px-5 pt-[64px] sm:px-10">
          <h2 className="m-0 font-heading text-[24px] font-bold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[30px]">
            {d.priceCompareTitle}
          </h2>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[15px]">
              <thead>
                <tr>
                  <th className="border-b border-line py-3 pr-4 font-semibold text-faint">{d.priceCompareHead.users}</th>
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink-2">{d.priceCompareHead.mondayStd}</th>
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink-2">{d.priceCompareHead.mondayPro}</th>
                  <th
                    className="border-b-2 px-4 py-3 font-bold text-white"
                    style={{ background: "var(--accent)", borderColor: "var(--accent)" }}
                  >
                    {d.priceCompareHead.neurovia}
                  </th>
                </tr>
              </thead>
              <tbody>
                {d.priceCompareRows.map((r) => (
                  <tr key={r.users}>
                    <td className="border-b border-line-soft py-3.5 pr-4 font-semibold text-ink">{r.users}</td>
                    <td className="border-b border-line-soft px-4 py-3.5 text-muted">{r.mondayStd}</td>
                    <td className="border-b border-line-soft px-4 py-3.5 text-muted">{r.mondayPro}</td>
                    <td
                      className="border-b border-line-soft px-4 py-3.5 font-bold text-ink"
                      style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
                    >
                      {r.neurovia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.6] text-ink-2">{d.priceCompareClosing}</p>
          <p className="mt-3 text-[12px] leading-[1.6] text-faint">{d.priceCompareNote}</p>
        </section>

        {/* Migración (pasos) */}
        <section className="mx-auto max-w-[1000px] px-5 pt-[88px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {d.stepsTitle}
          </h2>
          <div className="mt-[42px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((s, i) => (
              <div key={s.title} className="svc-card rounded-2xl border border-line bg-white p-[28px]">
                <div className="font-heading text-[28px] font-bold" style={{ color: "var(--accent)" }}>{i + 1}</div>
                <h3 className="mt-2 font-heading text-[17px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planes (3 tiers) */}
        <section className="mx-auto max-w-[1100px] px-5 pt-[88px] sm:px-10">
          <h2 className="m-0 max-w-[760px] font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {d.tiersTitle}
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.6] text-muted">{d.tiersLead}</p>
          <div className="mt-[48px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {d.tiers.map((t) => (
              <div
                key={t.title}
                className={`relative rounded-2xl bg-white p-[30px] ${t.highlight ? "shadow-xl" : "svc-card border border-line"}`}
                style={t.highlight ? { border: "2px solid var(--accent)" } : undefined}
              >
                {t.badge && (
                  <div
                    className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    {t.badge}
                  </div>
                )}
                <div className="font-code text-[12px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>{t.tag}</div>
                <p className="mt-2 font-heading text-ink">
                  <span className="text-[34px] font-bold leading-none">{t.price}</span>
                  <span className="text-[14px] font-normal text-faint"> {t.priceSuffix}</span>
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-ink-2">
                      <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <WaLink
                  context="monday"
                  lang={lang}
                  location={`monday-plan-${t.tag.toLowerCase()}`}
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold no-underline ${t.highlight ? "" : "cta-outline"}`}
                  style={t.highlight ? { background: "var(--accent)", color: "#fff" } : undefined}
                >
                  {d.ctaWa}
                </WaLink>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-[1.6] text-faint">{d.tiersFootnote}</p>

          {/* Pago único + condiciones */}
          <div className="mt-8 grid grid-cols-1 gap-[22px] md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface-2 p-[30px]">
              <h3 className="m-0 font-heading text-[19px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">{d.oneTimeTitle}</h3>
              <p className="mt-2 font-heading text-[22px] font-bold text-ink">{d.oneTimePrice}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted">{d.oneTimeDesc}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-[30px]">
              <h3 className="m-0 font-heading text-[19px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">{d.termsTitle}</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {d.terms.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-ink-2">
                    <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Qué podemos reemplazar */}
        <section className="mx-auto max-w-[1000px] px-5 pt-[88px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {d.replaceTitle}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {d.replace.map((r) => (
              <a
                key={r.label}
                href={`${base}${r.href}`}
                className="svc-card inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[15px] font-medium text-ink no-underline"
              >
                {r.label}
                <span aria-hidden="true" style={{ color: "var(--accent)" }}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[820px] px-5 pt-[88px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[36px]">
            {d.faqTitle}
          </h2>
          <div className="mt-10 flex flex-col gap-7">
            {d.faq.map((f) => (
              <div key={f.q} className="border-b border-line-soft pb-7">
                <h3 className="m-0 font-heading text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">{f.q}</h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-[920px] px-5 pt-[88px] sm:px-10">
          <div className="rounded-2xl border border-line bg-white p-8 text-center sm:p-12">
            <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[36px]">
              {d.finalTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.6] text-muted">{d.finalLead}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <WaLink
                context="monday"
                lang={lang}
                location="monday-cta-final"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white no-underline"
                style={{ background: "var(--accent)" }}
              >
                {d.ctaWa}
              </WaLink>
              <a
                href={agendaHref}
                className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                {d.ctaAgenda}
              </a>
            </div>
          </div>
        </section>

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
