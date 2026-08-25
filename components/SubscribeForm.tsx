"use client";

import { useState } from "react";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

/**
 * Reusable email-capture form for Hostinger Reach (email marketing).
 * Only asks for name + email (every extra field lowers conversion). Explicit
 * consent checkbox linking to the privacy notice is required by the LFPDPPP for
 * marketing. Posts to /api/subscribe, which validates again on the server and
 * forwards to Reach (see app/api/subscribe/route.ts). No email is stored here.
 */
export default function SubscribeForm({
  lang = "es",
  variant = "light",
}: {
  lang?: Locale;
  variant?: "light" | "dark";
}) {
  const t = getDict(lang).subscribe;
  const base = localeBase(lang);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onDark = variant === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Client-side validation (the server validates again).
    if (!name.trim()) return setError(t.errName);
    if (!EMAIL_RE.test(email.trim())) return setError(t.errEmail);
    if (!consent) return setError(t.errConsent);

    setError(null);
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), consent }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setError(t.error);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-2xl border px-5 py-4 text-[15px] font-medium ${
          onDark ? "border-white/20 bg-white/10 text-white" : "border-line bg-surface-2 text-ink"
        }`}
      >
        {t.success}
      </div>
    );
  }

  const labelCls = onDark ? "text-white/80" : "text-ink-2";
  const inputCls = onDark
    ? "border-white/20 bg-white/10 text-white placeholder:text-white/40"
    : "border-line bg-white text-ink placeholder:text-faint";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{t.nameLabel}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            aria-label={t.nameLabel}
            className={`w-full rounded-full border px-5 py-3 text-[15px] outline-none transition-colors focus-visible:border-[var(--accent)] ${inputCls}`}
          />
        </label>
        <label className="flex-1">
          <span className="sr-only">{t.emailLabel}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            aria-label={t.emailLabel}
            className={`w-full rounded-full border px-5 py-3 text-[15px] outline-none transition-colors focus-visible:border-[var(--accent)] ${inputCls}`}
          />
        </label>
      </div>

      <label className={`flex items-start gap-2.5 text-[13px] leading-[1.5] ${labelCls}`}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 flex-none accent-[var(--accent)]"
        />
        <span>
          {t.consentPre}{" "}
          <a
            href={`${base}/aviso-de-privacidad`}
            className={`font-semibold underline underline-offset-2 ${onDark ? "text-white" : "text-ink"}`}
          >
            {t.consentLink}
          </a>{" "}
          {t.consentPost}
        </span>
      </label>

      {error && (
        <p role="alert" className={`text-[13px] font-medium ${onDark ? "text-red-300" : "text-red-600"}`}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? t.sending : t.cta}
      </button>
    </form>
  );
}
