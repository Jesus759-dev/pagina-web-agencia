"use client";

import { motion } from "framer-motion";
import { Brain, Monitor, Zap, HardDrive } from "lucide-react";

type Service = {
  icon: typeof Brain;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  tabIndex: number | null;
  gradient: string;
};

const services: Service[] = [
  {
    icon: Brain,
    title: "Aplicaciones Inteligentes a Medida",
    description:
      "Creamos software con IA integrada que resuelve problemas reales de tu negocio. No es un chatbot generico: es una solucion disenada para ti.",
    bullets: [
      "Dashboards inteligentes con analisis predictivo",
      "Procesamiento de documentos con IA",
      "Asistentes virtuales personalizados",
      "Integracion con tus sistemas existentes",
    ],
    cta: "Ver proyectos",
    tabIndex: 1,
    gradient: "from-cyan-core to-electric-blue",
  },
  {
    icon: Monitor,
    title: "Sitios Web que Trabajan por Ti",
    description:
      "Sitios web de alto rendimiento optimizados para convertir visitantes en clientes. Velocidad, SEO y experiencia de usuario impecable.",
    bullets: [
      "Landing pages de alta conversion",
      "E-commerce optimizado con IA",
      "Aplicaciones web progresivas (PWA)",
      "Optimizacion SEO avanzada",
    ],
    cta: "Ver proyectos",
    tabIndex: 2,
    gradient: "from-violet-core to-violet-light",
  },
  {
    icon: Zap,
    title: "Automatiza lo Repetitivo, Enfocate en lo Importante",
    description:
      "Identificamos las tareas que consumen tu tiempo y las automatizamos con flujos inteligentes. Menos errores, mas productividad.",
    bullets: [
      "Automatizacion de procesos con n8n",
      "Integracion de APIs y servicios",
      "Workflows inteligentes con IA",
      "Reportes automaticos personalizados",
    ],
    cta: "Ver proyectos",
    tabIndex: 3,
    gradient: "from-electric-blue to-cyan-core",
  },
  {
    icon: HardDrive,
    title: "Infraestructura IT, Redes y Hardware",
    description:
      "Armamos, desplegamos y mantenemos tu infraestructura de cómputo y conectividad. De una estación de trabajo a medida hasta un despliegue Ubiquiti empresarial completo.",
    bullets: [
      "Armado de PCs y workstations a medida",
      "Configuración de routers, APs y redes Ubiquiti",
      "Mantenimiento preventivo y correctivo",
      "Soporte técnico y consultoría IT",
    ],
    cta: "Solicitar cotización",
    tabIndex: null,
    gradient: "from-cyan-core to-violet-core",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ---------- Card ---------- */

interface TiltCardProps {
  children: React.ReactNode;
}

function TiltCard({ children }: TiltCardProps) {
  return (
    <div className="animated-border-wrapper rounded-2xl p-[1px]">
      <div className="relative z-[1] overflow-hidden rounded-2xl bg-surface">
        <div>{children}</div>
      </div>
    </div>
  );
}

/* ---------- Services Component ---------- */

export default function Services() {
  return (
    <section
      id="servicios"
      aria-label="Servicios"
      className="relative bg-void py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Cuatro maneras de{" "}
            <span className="gradient-text">transformar tu negocio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Software con IA, sitios web, automatizaciones e infraestructura IT. Un solo equipo para todo tu stack tecnológico.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} variants={cardVariants}>
                <TiltCard>
                  <div className="group p-8">
                    {/* Icon with glow */}
                    <div className="relative mb-6 inline-flex">
                      <div
                        className={`relative z-10 rounded-xl bg-gradient-to-br ${service.gradient} p-3`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-40 blur-xl animate-glow-pulse`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-primary">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.bullets.map((bullet, i) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-text-muted transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"
                          style={{
                            transitionDelay: `${i * 80}ms`,
                          }}
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-core" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        if (service.tabIndex === null) {
                          const el = document.getElementById("contacto");
                          if (el) {
                            const top = el.getBoundingClientRect().top + window.scrollY - 80;
                            window.scrollTo({ top, behavior: "smooth" });
                          }
                          return;
                        }
                        window.dispatchEvent(new CustomEvent("setPortfolioTab", { detail: service.tabIndex }));
                      }}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan-core transition-colors group-hover:text-cyan-light"
                    >
                      {service.cta}{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
