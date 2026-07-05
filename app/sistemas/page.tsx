import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { SISTEMAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo de Sistemas en Producción",
  description:
    "Portal de sistemas de Neurovia Systems: requisiciones, mantenimiento vehicular, inventario y punto de venta. Plataformas en la nube para tu empresa.",
  alternates: { canonical: "/sistemas" },
};

export default function SistemasPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <div
              className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]"
              style={{ color: "var(--accent)" }}
            >
              Plataforma de sistemas
            </div>
            <h1 className="m-0 max-w-[860px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              Catálogo de sistemas Neurovia
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">
              Portal centralizado de los sistemas que desarrollamos y mantenemos en producción:
              adquisiciones, mantenimiento vehicular, inventario y punto de venta. Elige un
              sistema para acceder.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pt-[64px] sm:px-10">
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {SISTEMAS.map((s, i) => (
              <a
                key={s.host}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-card flex flex-col rounded-2xl border border-line bg-white p-[38px] no-underline"
              >
                <div className="font-code text-[13px]" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="m-0 mt-4 font-heading text-[25px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                  {s.name}
                </h2>
                <div className="mt-1.5 font-code text-[12px] text-faint">{s.host}</div>
                <p className="mt-[13px] flex-1 text-[15px] leading-[1.65] text-muted">{s.desc}</p>
                <span
                  className="mt-[22px] inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Entrar al sistema <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-[660px] text-sm leading-[1.6] text-faint">
            Algunos sistemas requieren credenciales de acceso proporcionadas por Neurovia Systems.
            ¿Necesitas acceso o quieres un sistema a la medida de tu empresa? Escríbenos.
          </p>
        </section>

        {/* CTA final reutilizado (WhatsApp) */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
