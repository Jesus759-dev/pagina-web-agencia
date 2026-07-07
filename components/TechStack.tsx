import { getDict, type Locale } from "@/lib/i18n";

type Tech = { name: string; dot: string };

// Two rows scrolling in opposite directions (see globals.css → marqueeA / marqueeB).
const ROW_A: Tech[] = [
  { name: "Next.js 15", dot: "#0c1220" },
  { name: "React 19", dot: "#38bdf8" },
  { name: "TypeScript", dot: "#2563eb" },
  { name: "Tailwind CSS", dot: "#06b6d4" },
  { name: "Vercel", dot: "#0c1220" },
  { name: "Supabase", dot: "#14936A" },
];

const ROW_B: Tech[] = [
  { name: "Docker", dot: "#2563eb" },
  { name: "PostgreSQL", dot: "#2f6f9f" },
  { name: "Make", dot: "#6847E5" },
  { name: "Zapier", dot: "#f59e0b" },
  { name: "FastAPI", dot: "#14936A" },
  { name: "n8n", dot: "#ec4899" },
  { name: "OpenAI GPT-4", dot: "#10a37f" },
  { name: "Python", dot: "#f59e0b" },
];

function Pill({ name, dot }: Tech) {
  return (
    <span className="inline-flex flex-none items-center gap-[9px] rounded-[10px] border border-line bg-white px-[18px] py-[11px] text-sm font-medium text-ink-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <span className="h-[9px] w-[9px] rounded-full" style={{ background: dot }} />
      {name}
    </span>
  );
}

function Row({ items, anim }: { items: Tech[]; anim: "marquee-a" | "marquee-b" }) {
  const half: Tech[] = [];
  while (half.length < 16) half.push(...items);
  const doubled = [...half, ...half];
  return (
    <div className="marquee-mask relative overflow-hidden">
      <div className={`marquee-track ${anim} px-[7px]`}>
        {doubled.map((t, i) => (
          <Pill key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).tech;
  return (
    <section className="border-b border-line-soft bg-canvas py-16">
      <div className="mb-[34px] text-center font-code text-xs uppercase tracking-[0.16em] text-faint">
        {t.heading}
      </div>
      <Row items={ROW_A} anim="marquee-a" />
      <div className="mt-3.5">
        <Row items={ROW_B} anim="marquee-b" />
      </div>
    </section>
  );
}
