import NeuroviaLogo from "@/components/NeuroviaLogo";
import SubscribeForm from "@/components/SubscribeForm";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

export default function Footer({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang);
  const base = localeBase(lang);
  const links = [
    { href: `${base}/#servicios`, label: t.nav.servicios },
    { href: `${base}/#proyectos`, label: t.nav.proyectos },
    { href: `${base}/nosotros`, label: t.nav.nosotros },
    { href: `${base}/#contacto`, label: t.nav.contacto },
  ];

  return (
    <footer className="border-t border-line-soft bg-surface-2 px-5 py-[50px] sm:px-10">
      <div className="mx-auto flex max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[380px]">
          <div className="flex items-center gap-[11px]">
            <NeuroviaLogo size={26} id="nvFoot" />
            <span className="flex flex-col gap-[3px] leading-none">
              <span className="brand-text font-heading text-[21px] font-bold tracking-[-0.01em]">
                Neurovia
              </span>
              <span className="font-code text-[9px] tracking-[0.36em] text-faint">SYSTEMS</span>
            </span>
          </div>
          <div className="mt-1.5 text-[13px] leading-[1.5] text-faint">{t.footer.tagline}</div>
          <div className="mt-6 flex flex-wrap gap-x-[30px] gap-y-2 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="navlink">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter capture (feeds Hostinger Reach) */}
        <div className="w-full max-w-[440px]">
          <h2 className="m-0 font-heading text-[19px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
            {t.subscribe.title}
          </h2>
          <p className="mb-4 mt-2 text-[13px] leading-[1.55] text-faint">{t.subscribe.desc}</p>
          <SubscribeForm lang={lang} />
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] flex-wrap items-center justify-between gap-4 border-t border-line-soft pt-5 text-xs text-faint">
        <span>{t.footer.copyright}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`${base}/agenda`} className="navlink">
            {t.footer.agenda}
          </a>
          <a href={`${base}/aviso-de-privacidad`} className="navlink">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
