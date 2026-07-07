import NeuroviaLogo from "@/components/NeuroviaLogo";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

export default function Footer({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang);
  const base = localeBase(lang);
  const links = [
    { href: `${base}/#servicios`, label: t.nav.servicios },
    { href: `${base}/#proyectos`, label: t.nav.proyectos },
    { href: `${base}/#proceso`, label: t.nav.proceso },
    { href: `${base}/#contacto`, label: t.nav.contacto },
  ];

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
            {t.footer.tagline}
          </div>
        </div>
        <div className="flex gap-[30px] text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navlink">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-7 max-w-[1240px] border-t border-line-soft pt-5 text-xs text-[#9aa3af]">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
