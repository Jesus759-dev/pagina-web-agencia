"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import WaLink from "@/components/WaLink";
import { captureAttribution, getAttribution } from "@/lib/leadTracking";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

/**
 * Formulario de prospectos: la conversión que Google Ads puede medir de verdad.
 *
 * Valida en el cliente para dar aviso inmediato (el servidor vuelve a validar),
 * manda el origen de la visita (gclid/utm) junto con el lead y, si todo sale
 * bien, lleva a /gracias, que es donde se dispara generate_lead una sola vez.
 */
export default function LeadForm({
  lang = "es",
  variant = "light",
}: {
  lang?: Locale;
  /** "light" = tarjeta blanca; "onAccent" = sobre el bloque azul del home. */
  variant?: "light" | "onAccent";
}) {
  const t = getDict(lang).leadForm;
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(captureAttribution, []);

  const onAccent = variant === "onAccent";
  const field =
    "mt-1.5 w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition-colors " +
    (onAccent
      ? "border-white/25 bg-white/10 text-white placeholder:text-white/50 focus:border-white/70"
      : "border-line bg-white text-ink placeholder:text-faint focus:border-[var(--accent)]");
  const label = `block text-[13px] font-semibold ${onAccent ? "text-white/85" : "text-ink"}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const need = String(data.get("need") ?? "");
    const consent = data.get("consent") === "on";

    if (name.length < 2) return setError(t.errName);
    if (!/^[1-9]\d{9}$/.test(phone)) return setError(t.errPhone);
    if (!need) return setError(t.errNeed);
    if (!consent) return setError(t.errConsent);

    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          need,
          consent,
          company: String(data.get("company") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? ""), // honeypot
          source: "form",
          page: window.location.pathname,
          attribution: getAttribution(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push(`${localeBase(lang)}/gracias`);
    } catch {
      setError(t.errSend);
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="text-left">
      {/* honeypot: invisible para personas, tentador para bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          No llenar este campo
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="lf-name">
            {t.name} *
          </label>
          <input id="lf-name" name="name" required autoComplete="name" placeholder={t.namePh} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="lf-company">
            {t.company}
          </label>
          <input id="lf-company" name="company" autoComplete="organization" placeholder={t.companyPh} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="lf-phone">
            {t.phone} *
          </label>
          <input
            id="lf-phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel-national"
            maxLength={20}
            placeholder={t.phonePh}
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="lf-need">
            {t.need} *
          </label>
          <select id="lf-need" name="need" required defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>
              —
            </option>
            {t.needOptions.map((o) => (
              <option key={o.value} value={o.value} className="text-ink">
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="lf-message">
            {t.message}
          </label>
          <textarea id="lf-message" name="message" rows={3} placeholder={t.messagePh} className={field} />
        </div>
      </div>

      <label className={`mt-4 flex items-start gap-2.5 text-[13.5px] leading-snug ${onAccent ? "text-white/85" : "text-muted"}`}>
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-none accent-[var(--accent)]" />
        <span>
          {t.consentPrefix}{" "}
          <a
            href={`${localeBase(lang)}/aviso-de-privacidad`}
            target="_blank"
            rel="noopener noreferrer"
            className={onAccent ? "text-white underline underline-offset-2" : "text-ink underline underline-offset-2"}
          >
            {t.consentLink}
          </a>{" "}
          {t.consentSuffix}
        </span>
      </label>

      {error && (
        <p role="alert" className={`mt-4 rounded-xl px-4 py-3 text-[14px] ${onAccent ? "bg-white/15 text-white" : "bg-[#fdecec] text-[#a21f1f]"}`}>
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold no-underline transition-transform duration-200 active:scale-[0.98] disabled:opacity-70 ${
            onAccent ? "bg-white text-[var(--accent)]" : "btn-primary"
          }`}
        >
          {sending ? t.sending : t.submit} <span aria-hidden="true">→</span>
        </button>
        <WaLink
          context="general"
          lang={lang}
          className={`text-[14px] font-semibold underline underline-offset-4 ${onAccent ? "text-white/90" : "text-muted hover:text-ink"}`}
        >
          {t.orWhatsapp}
        </WaLink>
      </div>
    </form>
  );
}
