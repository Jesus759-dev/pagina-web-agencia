import NeuroviaLogo from "@/components/NeuroviaLogo";

// Root-relative anchors so the footer also works from the service subpages.
const LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-surface-2 px-5 py-[50px] sm:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-[11px]">
            <NeuroviaLogo size={26} id="nvFoot" />
            <span className="flex flex-col gap-[3px] leading-none">
              <span className="brand-text font-heading text-[21px] font-bold tracking-[-0.01em]">
                Neurovia
              </span>
              <span className="font-code text-[9px] tracking-[0.36em] text-faint">SYSTEMS</span>
            </span>
          </div>
          <div className="mt-1.5 max-w-[360px] text-[13px] leading-[1.5] text-faint">
            Software con IA, sitios web e infraestructura IT. Un solo equipo para todo tu stack
            tecnológico.
          </div>
        </div>
        <div className="flex gap-[30px] text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="navlink">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-7 max-w-[1240px] border-t border-line-soft pt-5 text-xs text-[#9aa3af]">
        © 2026 Neurovia Systems — Software, IA e Infraestructura IT
      </div>
    </footer>
  );
}
