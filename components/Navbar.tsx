"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Track scroll state and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            current = sectionId;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update indicator position based on active section
  useEffect(() => {
    const index = navLinks.findIndex(
      (l) => l.href === `#${activeSection}`
    );
    if (index >= 0 && navLinksRef.current[index]) {
      const el = navLinksRef.current[index];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    } else {
      setIndicatorStyle({ left: 0, width: 0 });
    }
  }, [activeSection]);

  const setLinkRef = useCallback(
    (index: number) => (el: HTMLAnchorElement | null) => {
      navLinksRef.current[index] = el;
    },
    []
  );

  return (
    <nav
      role="navigation"
      aria-label="Navegacion principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glassmorphism border-b border-border"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? `blur(${Math.min(24 + (typeof window !== 'undefined' ? window.scrollY / 10 : 0), 40)}px)` : undefined,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Logo with neural icon */}
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label="Neurovia Systems - Ir al inicio"
          >
            <span className="relative">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                className="inline-block"
                aria-hidden="true"
              >
                <circle cx="12" cy="4" r="2" fill="#06B6D4" />
                <circle cx="4" cy="20" r="2" fill="#8B5CF6" />
                <circle cx="20" cy="20" r="2" fill="#3B82F6" />
                <circle cx="12" cy="13" r="1.5" fill="#22D3EE" />
                <line x1="12" y1="6" x2="12" y2="11.5" stroke="#06B6D4" strokeWidth="1" opacity="0.6" />
                <line x1="12" y1="14.5" x2="5" y2="18.5" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
                <line x1="12" y1="14.5" x2="19" y2="18.5" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-tight gradient-text md:text-2xl">
                Neurovia
              </span>
              <span className="font-code text-[9px] uppercase tracking-[0.22em] text-text-muted md:text-[10px]">
                Systems
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex relative">
            {/* Active section underline indicator */}
            {indicatorStyle.width > 0 && (
              <div
                className="nav-indicator absolute -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-core to-violet-core"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                aria-hidden="true"
              />
            )}

            {navLinks.map((link, i) => (
              <a
                key={link.href}
                ref={setLinkRef(i)}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-light"
                    : "text-text-secondary hover:text-cyan-light"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="gradient-cta rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Consulta Gratuita
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border glassmorphism md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-cyan-light"
                      : "text-text-secondary hover:text-cyan-light"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="gradient-cta mt-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Consulta Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
