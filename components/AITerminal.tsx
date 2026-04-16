"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

/* ---------- Terminal Lines ---------- */

const TERMINAL_LINES = [
  { text: "$ neurovia generate --type app --stack nextjs", isCommand: true },
  { text: "", isCommand: false, delay: 600 },
  { text: "\u2713 Analyzing business requirements...", isCommand: false },
  { text: "\u2713 Designing component architecture...", isCommand: false },
  { text: "\u2713 Generating 47 components with AI...", isCommand: false },
  { text: "\u2713 Optimizing performance (98/100 Lighthouse)...", isCommand: false },
  { text: "\u2713 Deploying to production...", isCommand: false },
  { text: "", isCommand: false, delay: 300 },
  {
    text: "\uD83D\uDE80 App deployed in 4.2 days instead of 3 months",
    isCommand: false,
    isHighlight: true,
  },
];

const CODE_LINES = [
  { text: "import { generateApp } from '@neurovia/ai';", color: "text-violet-light" },
  { text: "", color: "" },
  { text: "const app = await generateApp({", color: "text-cyan-light" },
  { text: "  stack: 'nextjs',", color: "text-text-secondary" },
  { text: "  features: ['auth', 'dashboard', 'api'],", color: "text-text-secondary" },
  { text: "  ai: {", color: "text-text-secondary" },
  { text: "    model: 'claude-opus',", color: "text-green-400" },
  { text: "    optimize: true,", color: "text-green-400" },
  { text: "  },", color: "text-text-secondary" },
  { text: "  deploy: 'vercel',", color: "text-text-secondary" },
  { text: "});", color: "text-cyan-light" },
  { text: "", color: "" },
  { text: "// \u2713 98/100 Lighthouse Score", color: "text-text-muted" },
  { text: "// \u2713 Full TypeScript coverage", color: "text-text-muted" },
  { text: "console.log(app.url);", color: "text-violet-light" },
];

interface TerminalLine {
  text: string;
  isCommand: boolean;
  delay?: number;
  isHighlight?: boolean;
}

/* ---------- Typewriter for a single line ---------- */

function useTerminalTypewriter(
  lines: TerminalLine[],
  active: boolean
): { visibleLines: string[]; done: boolean } {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setVisibleLines([]);
      setDone(false);
      lineIndexRef.current = 0;
      charIndexRef.current = 0;
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const lineIdx = lineIndexRef.current;
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }

      const line = lines[lineIdx];
      const charIdx = charIndexRef.current;

      if (charIdx === 0 && line.delay) {
        timeout = setTimeout(() => {
          charIndexRef.current = 0;
          type();
        }, line.delay);
        // Skip the delay on subsequent calls
        charIndexRef.current = -1;
        return;
      }

      const actualCharIdx = charIdx === -1 ? 0 : charIdx;

      if (actualCharIdx <= line.text.length) {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIdx] = line.text.slice(0, actualCharIdx);
          return next;
        });

        charIndexRef.current = actualCharIdx + 1;

        if (actualCharIdx < line.text.length) {
          const speed = line.isCommand ? 30 : 18;
          timeout = setTimeout(type, speed);
        } else {
          // Line done, move to next
          lineIndexRef.current = lineIdx + 1;
          charIndexRef.current = 0;
          timeout = setTimeout(type, line.isCommand ? 500 : 200);
        }
      }
    }

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [active, lines]);

  return { visibleLines, done };
}

/* ---------- Code Typewriter ---------- */

function useCodeTypewriter(
  lines: typeof CODE_LINES,
  active: boolean
): string[] {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    if (!active) {
      setVisibleLines([]);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    let lineIdx = 0;
    let charIdx = 0;

    function type() {
      if (lineIdx >= lines.length) return;
      const line = lines[lineIdx];

      if (charIdx <= line.text.length) {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIdx] = line.text.slice(0, charIdx);
          return next;
        });
        charIdx++;
        if (charIdx <= line.text.length) {
          timeout = setTimeout(type, 20);
        } else {
          lineIdx++;
          charIdx = 0;
          timeout = setTimeout(type, 80);
        }
      }
    }

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, [active, lines]);

  return visibleLines;
}

/* ---------- AI Terminal Component ---------- */

export default function AITerminal() {
  const [cycle, setCycle] = useState(0);
  const [active, setActive] = useState(true);

  const { visibleLines, done } = useTerminalTypewriter(TERMINAL_LINES, active);
  const codeLines = useCodeTypewriter(CODE_LINES, active);

  // Reset cycle
  useEffect(() => {
    if (!done) return;
    const timeout = setTimeout(() => {
      setActive(false);
      setTimeout(() => {
        setCycle((prev) => prev + 1);
        setActive(true);
      }, 1000);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [done]);

  const getLineColor = useCallback((line: TerminalLine): string => {
    if (line.isCommand) return "text-cyan-light";
    if (line.isHighlight) return "text-green-400 font-semibold";
    if (line.text.startsWith("\u2713")) return "text-text-secondary";
    return "text-text-muted";
  }, []);

  return (
    <section
      aria-label="Demo de IA en accion"
      className="relative bg-void py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Mira como construimos con{" "}
            <span className="gradient-text">IA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Lo que antes tomaba meses, ahora toma dias
          </p>
        </motion.div>

        {/* Laptop Mockup + Code */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid items-start gap-8 lg:grid-cols-5"
          key={cycle}
        >
          {/* Terminal in Monitor mockup */}
          <div className="lg:col-span-3">
            {/* Monitor frame */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-cyan-core/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-code text-xs text-text-muted">
                  neurovia-cli ~ /projects
                </span>
              </div>

              {/* Terminal content */}
              <div className="min-h-[320px] p-5 font-code text-sm leading-7">
                {TERMINAL_LINES.map((line, i) => (
                  <div
                    key={`${cycle}-${i}`}
                    className={`${getLineColor(line)} transition-opacity duration-300 ${
                      visibleLines[i] !== undefined ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {visibleLines[i] || "\u00A0"}
                    {/* Blinking cursor on current line */}
                    {visibleLines[i] !== undefined &&
                      visibleLines[i] !== line.text &&
                      visibleLines[i].length > 0 && (
                        <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-cyan-core align-middle" />
                      )}
                  </div>
                ))}
              </div>
            </div>
            {/* Monitor stand */}
            <div className="mx-auto h-6 w-24 bg-gradient-to-b from-border to-transparent" aria-hidden="true" />
            <div className="mx-auto h-2 w-40 rounded-t-sm bg-border" aria-hidden="true" />
          </div>

          {/* Code Snippet (desktop only) */}
          <div className="hidden lg:col-span-2 lg:block">
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-violet-core/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-code text-xs text-text-muted">
                  generate.ts
                </span>
              </div>

              {/* Code content */}
              <div className="min-h-[320px] p-5 font-code text-xs leading-6">
                {CODE_LINES.map((line, i) => (
                  <div
                    key={`code-${cycle}-${i}`}
                    className={`${line.color || "text-text-secondary"} transition-opacity duration-300 ${
                      codeLines[i] !== undefined ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="mr-4 inline-block w-5 text-right text-text-muted/40">
                      {i + 1}
                    </span>
                    {codeLines[i] || "\u00A0"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
