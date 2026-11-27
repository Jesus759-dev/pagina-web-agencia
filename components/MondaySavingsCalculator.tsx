"use client";

import { useRef, useState } from "react";
import { trackCalculator } from "@/lib/analytics";
import type { MondayCalc } from "@/lib/mondayContent";
import type { Locale } from "@/lib/i18n";

/**
 * Calculadora de ahorro vs. monday.com. 100% en el cliente, con los valores
 * editables por el visitante. NO dispara conversiones (generate_lead); solo un
 * evento secundario `calculator_use` la primera vez que alguien ajusta un dato.
 * El costo de monday.com es un estimado con lo que el usuario teclee, no una
 * cotización oficial (ver disclaimer).
 */
export default function MondaySavingsCalculator({
  calc,
  agendaHref,
  lang = "es",
}: {
  calc: MondayCalc;
  agendaHref: string;
  lang?: Locale;
}) {
  const [users, setUsers] = useState(calc.defaultUsers);
  const [priceUSD, setPriceUSD] = useState(calc.defaultPriceUSD);
  const [fx, setFx] = useState(calc.defaultFx);
  const fired = useRef(false);

  const onChange =
    (setter: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!fired.current) {
        fired.current = true;
        trackCalculator();
      }
      const n = Number(e.target.value);
      setter(Number.isFinite(n) && n >= 0 ? n : 0);
    };

  const billedUsers = Math.max(users, 3);
  const mondayAnnual = billedUsers * priceUSD * 12 * fx;
  const neuroviaAnnual = calc.neuroviaMonthlyMXN * 12;
  const savings = mondayAnnual - neuroviaAnnual;
  const mondayCheaper = savings <= 0;

  const money = (n: number) =>
    new Intl.NumberFormat(lang === "en" ? "en-US" : "es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    }).format(Math.max(0, Math.round(n)));

  const fieldCls =
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-[16px] text-ink outline-none focus:border-[color:var(--accent)]";

  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <h3 className="m-0 font-heading text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[28px]">
        {calc.title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-muted">{calc.intro}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="block text-[14px] font-semibold text-ink-2">
          {calc.usersLabel}
          <input type="number" min={1} inputMode="numeric" value={users} onChange={onChange(setUsers)} className={fieldCls} />
        </label>
        <label className="block text-[14px] font-semibold text-ink-2">
          {calc.priceLabel}
          <input type="number" min={0} step={1} inputMode="decimal" value={priceUSD} onChange={onChange(setPriceUSD)} className={fieldCls} />
        </label>
        <label className="block text-[14px] font-semibold text-ink-2">
          {calc.fxLabel}
          <input type="number" min={0} step={0.5} inputMode="decimal" value={fx} onChange={onChange(setFx)} className={fieldCls} />
        </label>
      </div>

      {users < 3 && <p className="mt-3 text-[13px] leading-[1.5] text-faint">{calc.minUsersNote}</p>}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line-soft bg-surface-2 p-5">
          <div className="text-[13px] text-faint">{calc.mondayCostLabel}</div>
          <div className="mt-1 font-heading text-[26px] font-bold text-ink">
            {money(mondayAnnual)} <span className="text-[14px] font-normal text-faint">{calc.perYear}</span>
          </div>
        </div>
        <div className="rounded-xl border-2 p-5" style={{ borderColor: "var(--accent)" }}>
          <div className="text-[13px] text-faint">{calc.neuroviaCostLabel}</div>
          <div className="mt-1 font-heading text-[26px] font-bold" style={{ color: "var(--accent)" }}>
            {money(neuroviaAnnual)} <span className="text-[14px] font-normal text-faint">{calc.perYear}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl p-5 text-center" style={{ background: "var(--accent)", color: "#fff" }}>
        {mondayCheaper ? (
          <p className="m-0 text-[15px] leading-[1.5] font-medium">{calc.cheaperMondayNote}</p>
        ) : (
          <p className="m-0 text-[15px] leading-[1.4]">
            {calc.saveLabel}{" "}
            <span className="font-heading text-[28px] font-bold align-middle">{money(savings)}</span>{" "}
            <span className="opacity-90">{calc.perYear}</span>
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <a
          href={agendaHref}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white no-underline"
          style={{ background: "var(--accent)" }}
        >
          {calc.cta} <span aria-hidden="true">→</span>
        </a>
        <p className="m-0 text-center text-[12px] leading-[1.5] text-faint">{calc.disclaimer}</p>
      </div>
    </div>
  );
}
