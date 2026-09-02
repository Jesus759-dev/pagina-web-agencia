import NeuroviaClientMap from "@/components/NeuroviaClientMap";
import { getDict, type Locale } from "@/lib/i18n";

/**
 * Dark wrapper for the interactive client map, so the neon dark component
 * doesn't clash with the light site. Heading/subtitle come from the shared
 * dictionary (ES/EN); the map itself is self-contained.
 */
export default function ClientMapSection({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).map;

  return (
    <section id="mapa-clientes" className="bg-[#0f2a44] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 sm:px-10">
        <div
          className="mb-3 text-center font-code text-[13px] uppercase tracking-[0.12em]"
          style={{ color: "#9ad6f7" }}
        >
          {t.eyebrow}
        </div>
        <h2 className="m-0 text-center font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
          {t.h2}
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-lg leading-[1.6] text-white/60">
          {t.lead}
        </p>

        <div className="mt-12">
          <NeuroviaClientMap />
        </div>
      </div>
    </section>
  );
}
