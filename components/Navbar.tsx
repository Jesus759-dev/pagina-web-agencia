import NeuroviaLogo from "@/components/NeuroviaLogo";
import { WA_DEFAULT } from "@/lib/site";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <div className="fixed left-1/2 top-[18px] z-50 w-max max-w-[calc(100%-32px)] -translate-x-1/2">
      <nav
        className="flex items-center gap-2.5 rounded-full border py-[9px] pl-5 pr-[9px]"
        style={{
          background: "rgba(255,255,255,.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,.6)",
          boxShadow: "0 6px 22px rgba(15,23,42,.1)",
        }}
      >
        <a
          href="#"
          className="flex items-center gap-2.5 pr-1.5 no-underline"
          aria-label="Neurovia Systems — inicio"
        >
          <NeuroviaLogo size={24} id="nvNav" />
          <span className="flex flex-col gap-[3px] leading-none">
            <span className="brand-text font-heading text-[18px] font-bold tracking-[-0.01em]">
              Neurovia
            </span>
            <span className="font-code text-[8px] tracking-[0.36em] text-faint">SYSTEMS</span>
          </span>
        </a>

        <span className="hidden h-5 w-px md:block" style={{ background: "rgba(12,18,32,.12)" }} />

        <div className="hidden items-center gap-[26px] px-[18px] md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="pill-link text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
        >
          Consulta gratuita
        </a>
      </nav>
    </div>
  );
}
