"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Gauge, TrendingDown, FileCheck, Cpu } from "lucide-react";

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: typeof Gauge;
}

const stats: StatItem[] = [
  {
    target: 3,
    suffix: "x",
    label: "mas rapido que desarrollo tradicional",
    icon: Gauge,
  },
  {
    target: 80,
    suffix: "%",
    label: "reduccion en tareas manuales",
    icon: TrendingDown,
  },
  {
    target: 100,
    suffix: "%",
    label: "proyectos con documentacion completa",
    icon: FileCheck,
  },
  {
    target: 15,
    prefix: "+",
    label: "tecnologias de IA dominadas",
    icon: Cpu,
  },
];

/* ---------- Animated Counter ---------- */

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    let animFrameId: number;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      start = Math.floor(easedProgress * target);
      setCount(start);

      if (progress < 1) {
        animFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    animFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId);
  }, [inView, target]);

  return (
    <span className="font-heading text-5xl font-bold gradient-text sm:text-6xl lg:text-7xl">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ---------- Stats Component ---------- */

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-label="Estadisticas"
      className="relative overflow-hidden bg-deep-space py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Numeros que{" "}
            <span className="gradient-text">hablan por si solos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glassmorphism card-glow group rounded-2xl border border-border p-6 text-center transition-all duration-300 hover:border-cyan-core/30"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-elevated transition-colors group-hover:border-cyan-core/40">
                  <Icon
                    size={28}
                    className="text-cyan-core transition-colors group-hover:text-cyan-light"
                  />
                </div>

                {/* Number */}
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={isInView}
                />

                {/* Label */}
                <p className="mt-3 text-sm text-text-secondary sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
