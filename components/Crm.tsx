import NeuroviaLogo from "@/components/NeuroviaLogo";
import { CRM_URL } from "@/lib/site";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

/* The product screen is shown as it really looks (Spanish UI), like a real
   screenshot would — so its copy is not translated. Purely decorative. */
const LOGIN_BULLETS = [
  "Pipeline unificado en tiempo real",
  "Automatización de seguimiento",
  "Reportes que se explican solos",
];

/** Faithful in-code reproduction of the CRM sign-in screen. */
function CrmLoginPreview() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line"
      style={{ boxShadow: "0 16px 44px -20px rgba(60,48,30,0.45)" }}
      aria-hidden="true"
    >
      <div className="grid grid-cols-[1.08fr_1fr]">
        {/* Left — purple brand panel */}
        <div
          className="relative flex min-h-[320px] flex-col justify-between overflow-hidden p-5"
          style={{
            background: "linear-gradient(160deg, #5b3fd6 0%, #7150e6 48%, #9070f3 100%)",
          }}
        >
          {/* subtle dot texture + rounded shape, like the real screen */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              opacity: 0.5,
            }}
          />
          <div
            className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-[38px] border border-white/15"
            style={{ transform: "rotate(-8deg)" }}
          />

          <div className="relative flex items-center gap-2">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-white/20">
              <span className="h-[6px] w-[6px] rounded-full bg-white" />
            </span>
            <span className="text-[13px] font-bold tracking-[-0.01em] text-white">Neurovia</span>
          </div>

          <div className="relative">
            <div className="font-heading text-[20px] font-bold leading-[1.14] tracking-[-0.02em] text-white">
              Cada conversación, convertida en resultado.
            </div>
            <p className="mt-2.5 max-w-[220px] text-[11px] leading-[1.5] text-white/75">
              El CRM que conecta a tu equipo, tus datos y tus clientes en un mismo flujo.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {LOGIN_BULLETS.map((b) => (
                <div key={b} className="flex items-center gap-2 text-[11px] font-semibold text-white">
                  <span className="flex h-[15px] w-[15px] flex-none items-center justify-center rounded-full bg-white/25 text-[9px] leading-none">
                    ✓
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative text-[9px] text-white/45">© 2026 Neurovia Systems</div>
        </div>

        {/* Right — sign-in form panel */}
        <div className="flex flex-col items-center justify-center gap-3 bg-white px-5 py-8">
          <div className="mb-1 flex items-center gap-2">
            <NeuroviaLogo size={18} id="nvCrmMock" />
            <span className="flex flex-col gap-[2px] leading-none">
              <span className="brand-text font-heading text-[14px] font-bold tracking-[-0.01em]">
                Neurovia
              </span>
              <span className="font-code text-[6px] tracking-[0.36em] text-faint">SYSTEMS</span>
            </span>
          </div>

          <div className="text-[13px] font-semibold text-ink">Bienvenido de nuevo</div>

          <div className="mt-1 w-full max-w-[170px] rounded-md border border-line-2 px-2.5 py-[7px] text-[10px] text-faint">
            Correo electrónico
          </div>
          <div
            className="w-full max-w-[170px] rounded-md py-[7px] text-center text-[10px] font-semibold text-white"
            style={{ background: "#6d4ae0" }}
          >
            Continuar
          </div>

          <div className="mt-2 text-[8px] text-faint">Política de privacidad · Términos</div>
        </div>
      </div>
    </div>
  );
}

export default function Crm({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).crm;
  const base = localeBase(lang);

  return (
    <section id="crm" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div
        className="overflow-hidden rounded-2xl border-2 bg-white p-[38px] sm:p-[52px]"
        style={{
          borderColor: "var(--accent)",
          boxShadow: "0 18px 50px -12px color-mix(in srgb, var(--accent) 35%, transparent)",
        }}
      >
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-[18px] flex items-center gap-2.5">
              <span
                className="font-code text-[13px] uppercase tracking-[0.12em]"
                style={{ color: "var(--accent)" }}
              >
                {t.eyebrow}
              </span>
              <span
                className="rounded-full px-2.5 py-[3px] font-code text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                style={{ background: "var(--accent)" }}
              >
                {t.badge}
              </span>
            </div>
            <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              {t.h2}
            </h2>
            <p className="m-0 mt-5 max-w-[600px] text-lg leading-[1.6] text-muted">{t.lead}</p>

            <div className="mt-[22px] flex flex-col gap-2.5">
              {t.features.map((it) => (
                <div key={it} className="flex items-start gap-[11px] text-sm text-[#3a4452]">
                  <span className="font-semibold" style={{ color: "var(--accent)" }}>
                    →
                  </span>
                  {it}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={CRM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                {t.cta}
              </a>
              <a
                href={`${base}/sistemas`}
                className="badge-link inline-flex items-center gap-1.5 text-sm font-semibold"
              >
                {t.allSystems} <span className="arr">→</span>
              </a>
            </div>
          </div>

          {/* CRM sign-in screen, reproduced in code */}
          <div className="hidden md:block">
            <CrmLoginPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
