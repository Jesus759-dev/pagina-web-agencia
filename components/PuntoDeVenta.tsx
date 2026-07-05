import { POS_LANDING } from "@/lib/site";

const FEATURES = [
  "Cobro rápido con lector de código de barras",
  "Control de inventario en tiempo real",
  "Reportes de ventas y cortes de caja",
  "Multi-sucursal y multi-usuario",
];

export default function PuntoDeVenta() {
  return (
    <section id="punto-de-venta" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
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
                Punto de Venta
              </span>
            </div>
            <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              Vende más rápido con nuestro Punto de Venta.
            </h2>
            <p className="m-0 mt-5 max-w-[600px] text-lg leading-[1.6] text-muted">
              Un sistema completo para gestionar ventas, inventario y reportes desde cualquier
              dispositivo. Conoce todos los detalles en su landing page.
            </p>

            <div className="mt-[22px] flex flex-col gap-2.5">
              {FEATURES.map((it) => (
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
                href={POS_LANDING}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                Ver Punto de Venta
              </a>
              <a
                href="/sistema-punto-de-venta-villahermosa"
                className="badge-link inline-flex items-center gap-1.5 text-sm font-semibold"
              >
                Punto de venta en Villahermosa <span className="arr">→</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/punto-de-venta-menu.jpeg"
                alt="Sistema de Punto de Venta para negocios en Villahermosa, Tabasco"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
