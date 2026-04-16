// Inline SVG brand icons — lucide-react v1.7 does not include brand icons.
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    Icon: LinkedInIcon,
  },
  {
    label: "Twitter / X",
    href: "#",
    Icon: TwitterXIcon,
  },
  {
    label: "GitHub",
    href: "#",
    Icon: GitHubIcon,
  },
];

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Aplicaciones con IA", href: "#servicios" },
      { label: "Sitios Web", href: "#servicios" },
      { label: "Automatizaciones", href: "#servicios" },
      { label: "Consultoria IA", href: "#contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Proceso", href: "#proceso" },
      { label: "Tecnologia", href: "#tecnologia" },
      { label: "Blog", href: "#" },
      { label: "Carreras", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Politica de privacidad", href: "#" },
      { label: "Terminos de servicio", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      {/* Invisible anchor so the "Nosotros" navbar link scrolls here */}
      <div id="nosotros" aria-hidden="true" />

      <footer role="contentinfo" className="bg-void">
        {/* Gradient top border */}
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-cyan-core/50 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
              <a
                href="#"
                className="flex flex-col leading-none"
                aria-label="Neurovia Systems - Ir al inicio"
              >
                <span className="font-heading text-2xl font-bold gradient-text">
                  Neurovia
                </span>
                <span className="font-code text-[10px] uppercase tracking-[0.22em] text-text-muted">
                  Systems
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Software con IA, sitios web e infraestructura IT. Un solo equipo para todo tu stack tecnológico.
              </p>
            </div>

            {/* Service / Company / Legal columns */}
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-text-secondary transition-colors hover:text-cyan-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact column */}
            <nav aria-label="Contacto">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-cyan-light"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-sm text-text-muted">
              &copy; 2026 Neurovia Systems &mdash; Software, IA e Infraestructura IT
            </p>

          </div>
        </div>
      </footer>
    </>
  );
}
