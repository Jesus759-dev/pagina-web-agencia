"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Globe, Zap, ArrowUpRight, TrendingUp,
  Sparkles, BarChart3, FileText, Layers,
} from "lucide-react";

/* ─────────────────────────────────────────
   REAL SCREENSHOT MOCKUP
   Renders real project screenshots with
   optional auto-rotation between multiple views.
   ───────────────────────────────────────── */

function ScreenshotMockup({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (images.length < 2 || !isVisible) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4200
    );
    return () => clearInterval(id);
  }, [images.length, isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#060C14]">
      {/* Gradient edge mask for polished look */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(6,12,20,0.7) 100%)",
        }}
        aria-hidden="true"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 900px"
            className="object-cover object-top"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {/* Counter dots for multi-image projects */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === index ? 16 : 6,
                background:
                  i === index
                    ? "linear-gradient(90deg, #22D3EE, #A78BFA)"
                    : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      )}

      {/* Subtle "LIVE" badge */}
      <div className="absolute right-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-green-500/30 bg-black/50 px-2.5 py-1 backdrop-blur-sm">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-green-400" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-green-500" />
        </span>
        <span className="font-code text-[9px] font-semibold uppercase tracking-wider text-green-400">
          En producción
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CSS PRODUCT MOCKUPS
   ───────────────────────────────────────── */

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-black/40 border-b border-white/5">
      <div className="flex gap-1.5 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
      </div>
      <div className="flex-1 h-5 rounded-md bg-white/5 flex items-center px-2.5">
        <span className="text-[10px] text-white/25 font-code">{url}</span>
      </div>
    </div>
  );
}

/* Mockup 1: Analytics Dashboard (NeuroCRM) */
function AnalyticsDashMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14]">
      <BrowserChrome url="app.neurocrm.io/dashboard" />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[18%] border-r border-white/5 flex flex-col gap-1.5 p-2 pt-3">
          <div className="h-5 w-full rounded bg-gradient-to-r from-cyan-core/20 to-violet-core/20 border border-cyan-core/30" />
          {[80, 65, 90, 55, 70].map((w, i) => (
            <div key={i} className="h-3.5 rounded bg-white/5" style={{ width: `${w}%` }} />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col gap-2 p-2.5">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { val: "+340%", label: "Leads", col: "#06B6D4" },
              { val: "3.2×", label: "Revenue", col: "#8B5CF6" },
              { val: "89%", label: "Win Rate", col: "#10B981" },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg bg-white/5 p-2 border border-white/5">
                <div className="text-[9px] text-white/30 font-code mb-0.5">{kpi.label}</div>
                <div className="text-sm font-bold font-heading" style={{ color: kpi.col }}>{kpi.val}</div>
              </div>
            ))}
          </div>
          {/* Bar chart */}
          <div className="flex-1 rounded-lg bg-white/5 p-2.5 border border-white/5">
            <div className="text-[9px] text-white/20 font-code mb-2">Revenue forecast — Q4 2024</div>
            <div className="flex items-end gap-1 h-[60%]">
              {[35, 52, 41, 68, 55, 82, 70, 90, 78, 95, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i >= 8
                      ? "linear-gradient(to top, #06B6D480, #8B5CF680)"
                      : "linear-gradient(to top, #06B6D4, #8B5CF6)",
                    opacity: i >= 8 ? 0.5 : 0.85,
                    borderTop: i >= 8 ? "1px dashed #8B5CF660" : "none",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"].map((m) => (
                <span key={m} className="text-[7px] text-white/15 font-code">{m}</span>
              ))}
            </div>
          </div>
          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg bg-white/5 border border-white/5 p-2">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full border-4 shrink-0"
                  style={{ borderColor: "#06B6D4", borderRightColor: "#1E2D42" }} />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 rounded bg-white/15 w-full" />
                  <div className="h-1.5 rounded bg-white/8 w-2/3" />
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/5 p-2 space-y-1.5">
              {[
                { w: "85%", c: "#06B6D4" },
                { w: "62%", c: "#8B5CF6" },
                { w: "91%", c: "#10B981" },
              ].map((bar, i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: bar.w, backgroundColor: bar.c, opacity: 0.7 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Mockup 2: Document Extraction (DocMind) */
function DocExtractMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14] p-3">
      <div className="flex gap-2 h-full">
        {/* PDF preview */}
        <div className="w-1/2 rounded-lg bg-white/5 border border-white/8 p-2 flex flex-col gap-1.5 overflow-hidden">
          <div className="flex items-center gap-1.5 mb-1">
            <FileText size={10} className="text-red-400" />
            <span className="text-[9px] text-white/30 font-code">Invoice_2024_087.pdf</span>
          </div>
          {/* Lines simulating PDF content */}
          {[90, 60, 75, 40, 85, 50, 70, 55].map((w, i) => (
            <div key={i} className={`h-1.5 rounded ${i === 2 || i === 5 ? "bg-yellow-400/30 border border-yellow-400/40" : "bg-white/8"}`}
              style={{ width: `${w}%` }} />
          ))}
          <div className="mt-1 rounded border border-cyan-core/40 bg-cyan-core/5 p-1.5">
            <div className="h-1.5 w-3/4 rounded bg-cyan-core/40" />
          </div>
          {[65, 80].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-white/8" style={{ width: `${w}%` }} />
          ))}
          <div className="rounded border border-violet-core/40 bg-violet-core/5 p-1.5">
            <div className="h-1.5 w-1/2 rounded bg-violet-core/40" />
          </div>
        </div>
        {/* Extracted data */}
        <div className="flex-1 rounded-lg bg-white/5 border border-white/8 p-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold text-white/50 font-code">DATOS EXTRAÍDOS</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">98.7%</span>
          </div>
          {[
            { label: "Empresa", val: "ACME Corp", col: "#06B6D4" },
            { label: "Monto", val: "$4,820.00", col: "#10B981" },
            { label: "Fecha", val: "2024-12-01", col: "#8B5CF6" },
            { label: "Items", val: "7 líneas", col: "#F59E0B" },
            { label: "Estado", val: "Aprobado ✓", col: "#10B981" },
          ].map((field) => (
            <div key={field.label} className="flex items-center gap-1.5">
              <span className="text-[8px] text-white/25 font-code w-10 shrink-0">{field.label}</span>
              <div className="flex-1 rounded bg-white/5 px-1.5 py-0.5">
                <span className="text-[9px] font-medium font-code" style={{ color: field.col }}>{field.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Mockup 3: AI Chat (InsightPulse) */
function ChatAIMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14]">
      <BrowserChrome url="insightpulse.neurovia.ai" />
      <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden">
        {[
          { role: "user", text: "¿Cuándo será el próximo pico de ventas?", align: "end" },
          { role: "ai", text: "Basado en los últimos 18 meses, proyecto un pico el 14 de enero (+34%)", align: "start" },
          { role: "user", text: "Genera reporte ejecutivo Q4", align: "end" },
        ].map((msg, i) => (
          <div key={i} className={`flex ${msg.align === "end" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] rounded-xl px-3 py-2 text-[10px] leading-relaxed ${
              msg.role === "user"
                ? "bg-cyan-core/20 border border-cyan-core/30 text-cyan-light"
                : "bg-white/6 border border-white/8 text-white/70"
            }`}>
              {msg.role === "ai" && (
                <div className="flex items-center gap-1 mb-1">
                  <Sparkles size={8} className="text-violet-core" />
                  <span className="text-[8px] text-violet-light font-bold font-code">NEUROVIA AI</span>
                </div>
              )}
              {msg.text}
            </div>
          </div>
        ))}
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-white/6 border border-white/8 rounded-xl px-3 py-2 flex gap-1 items-center">
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-violet-core"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 0.8, delay, repeat: Infinity }} />
            ))}
          </div>
        </div>
        {/* Chart line */}
        <div className="mt-auto rounded-lg bg-white/5 border border-white/8 p-2 h-12">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <polyline points="0,25 10,20 20,22 30,15 40,18 50,10 60,12 70,8 80,5 90,7 100,3"
              fill="none" stroke="#06B6D4" strokeWidth="1.5" opacity="0.7" />
            <polyline points="0,25 10,20 20,22 30,15 40,18 50,10 60,12 70,8 80,5 90,7 100,3"
              fill="url(#chartFill)" stroke="none" opacity="0.15" />
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* Mockup 4: E-commerce Store (VeloxCommerce) */
function StoreMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14]">
      <BrowserChrome url="veloxcommerce.vercel.app" />
      <div className="flex flex-col gap-2 p-2.5">
        {/* Nav */}
        <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-1.5 border border-white/5">
          <div className="h-3 w-14 rounded" style={{ background: "linear-gradient(90deg, #06B6D4, #8B5CF6)" }} />
          <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 border border-white/8 flex items-center px-2 gap-1">
            <span className="text-[9px] text-white/20">Buscar con IA…</span>
          </div>
          <div className="h-6 w-14 rounded-lg text-[9px] font-bold flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #06B6D4, #8B5CF6)" }}>
            <span className="text-white">Carrito</span>
          </div>
        </div>
        {/* Featured banner */}
        <div className="relative h-14 rounded-xl overflow-hidden border border-white/5"
          style={{ background: "radial-gradient(ellipse at 30% 50%, #06B6D415, transparent 60%), radial-gradient(ellipse at 70% 50%, #8B5CF615, transparent 60%), #0D1520" }}>
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-1">
            <div className="h-3 w-32 rounded" style={{ background: "linear-gradient(90deg, #22D3EE, #A78BFA)" }} />
            <div className="h-2 w-20 rounded bg-white/15" />
          </div>
          <div className="absolute top-2 right-2 text-[8px] px-2 py-0.5 rounded-full bg-cyan-core/20 border border-cyan-core/30 text-cyan-light font-code">
            IA Recomendado
          </div>
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { c1: "#06B6D415", c2: "#3B82F615", badge: null },
            { c1: "#8B5CF615", c2: "#A78BFA15", badge: "🔥 Top" },
            { c1: "#3B82F615", c2: "#06B6D415", badge: null },
            { c1: "#10B98115", c2: "#06B6D415", badge: "IA Pick" },
            { c1: "#F59E0B15", c2: "#EF444415", badge: null },
            { c1: "#8B5CF615", c2: "#3B82F615", badge: "-20%" },
          ].map((p, i) => (
            <div key={i} className="rounded-lg border border-white/5 overflow-hidden bg-white/4">
              <div className="h-10" style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }} />
              <div className="p-1.5">
                {p.badge && (
                  <span className="text-[7px] px-1 py-0.5 rounded bg-cyan-core/20 text-cyan-light border border-cyan-core/20 font-code">{p.badge}</span>
                )}
                <div className="h-1.5 rounded bg-white/10 mt-1 w-full" />
                <div className="h-2 rounded mt-1 w-2/3" style={{ background: "linear-gradient(90deg, #06B6D4, #8B5CF6)", opacity: 0.6 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Mockup 5: SaaS Landing (LaunchFlow) */
function LandingMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14] p-2.5">
      <div className="flex flex-col h-full gap-1.5">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-white/5 rounded border border-white/5 px-2 py-1">
          <div className="h-2.5 w-10 rounded bg-gradient-to-r from-cyan-core to-violet-core" />
          <div className="flex gap-2">
            {[24, 20, 24].map((w, i) => <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: w }} />)}
          </div>
          <div className="h-5 w-12 rounded text-[8px] font-bold flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #06B6D4, #8B5CF6)" }}>
            <span className="text-white">Login</span>
          </div>
        </div>
        {/* Hero */}
        <div className="flex-1 rounded-lg border border-white/5 overflow-hidden relative"
          style={{ background: "radial-gradient(ellipse at 50% 30%, #06B6D410, transparent 70%), #0A1220" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
            <div className="h-2 w-20 rounded bg-gradient-to-r from-cyan-core to-violet-core" />
            <div className="h-1.5 w-28 rounded bg-white/15" />
            <div className="h-1.5 w-24 rounded bg-white/10" />
            <div className="flex gap-2 mt-1">
              <div className="h-6 w-16 rounded-lg text-[8px] font-bold flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #06B6D4, #8B5CF6)" }}>
                <span className="text-white">Gratis</span>
              </div>
              <div className="h-6 w-16 rounded-lg border border-white/15 flex items-center justify-center">
                <span className="text-[8px] text-white/40">Demo</span>
              </div>
            </div>
          </div>
          {/* Conversion badge */}
          <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded border border-green-500/30 px-2 py-1">
            <span className="text-[8px] text-green-400 font-code">CVR 3.2% → 8.7% ✦</span>
          </div>
        </div>
        {/* Features row */}
        <div className="grid grid-cols-3 gap-1">
          {["⚡ Fast", "🤖 AI", "📈 SEO"].map((f) => (
            <div key={f} className="rounded border border-white/5 bg-white/4 p-1.5 text-center">
              <span className="text-[9px] text-white/40">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Mockup 6: Mobile App (Sabor Studio) */
function MobileMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#060C14] p-3">
      <div className="relative h-full flex items-center gap-3">
        {/* Phone frame */}
        <div className="h-full max-h-36 aspect-[9/19] rounded-2xl border-2 border-white/15 bg-[#0A1220] overflow-hidden relative shadow-2xl">
          {/* Notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/80 z-10" />
          <div className="flex flex-col h-full pt-4">
            {/* App header */}
            <div className="bg-gradient-to-r from-cyan-core/80 to-violet-core/80 p-2">
              <div className="h-2 w-16 rounded bg-white/30 mx-auto" />
            </div>
            {/* Menu items */}
            <div className="flex-1 p-1.5 flex flex-col gap-1 overflow-hidden">
              {[
                { label: "Entradas", items: 3 },
                { label: "Pastas", items: 5 },
                { label: "Postres", items: 4 },
              ].map((cat) => (
                <div key={cat.label} className="rounded-lg bg-white/5 border border-white/5 p-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-bold text-white/60">{cat.label}</span>
                    <span className="text-[6px] text-white/25">{cat.items} items</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom nav */}
            <div className="flex justify-around bg-black/30 p-1.5 border-t border-white/5">
              {["🏠","🍽️","📦","👤"].map((icon) => (
                <span key={icon} className="text-[10px]">{icon}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Stats beside phone */}
        <div className="flex flex-col gap-2">
          {[
            { val: "100", label: "LCP ms" },
            { val: "100", label: "PWA" },
            { val: "4.9★", label: "Rating" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-lg border border-white/8 px-2 py-1.5 text-center">
              <div className="text-sm font-bold gradient-text font-heading">{s.val}</div>
              <div className="text-[8px] text-white/30 font-code">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Mockup 7: Automation Flow (FacturaFlow) */
function FlowMockup() {
  const nodes = [
    { x: 8,  y: 45, label: "PDF\nInput",  color: "#06B6D4", icon: "📄" },
    { x: 30, y: 20, label: "OCR\nExtract",color: "#8B5CF6", icon: "🔍" },
    { x: 30, y: 70, label: "XML\nParse",  color: "#3B82F6", icon: "⚙️" },
    { x: 55, y: 45, label: "Claude\nAI",  color: "#06B6D4", icon: "🤖" },
    { x: 78, y: 20, label: "ERP\nSync",   color: "#10B981", icon: "🏢" },
    { x: 78, y: 70, label: "Email\nAlert",color: "#F59E0B", icon: "📧" },
  ];
  const edges = [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5]];

  return (
    <div className="absolute inset-0 bg-[#060C14] p-3">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[9px] text-white/30 font-code">FacturaFlow · ejecutando · 10,247 docs hoy</span>
      </div>
      <svg className="w-full h-[85%]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#1E2D42" />
          </marker>
        </defs>
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <line key={i}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="#1E2D42" strokeWidth="1.2" markerEnd="url(#arrowhead)"
          />
        ))}
        {/* Animated dots on edges */}
        {edges.map(([from, to], i) => (
          <circle key={`dot-${i}`} r="1.5" fill={nodes[from].color}
            style={{ filter: `drop-shadow(0 0 2px ${nodes[from].color})` }}>
            <animateMotion dur={`${1.4 + i * 0.25}s`} repeatCount="indefinite"
              path={`M ${nodes[from].x} ${nodes[from].y} L ${nodes[to].x} ${nodes[to].y}`} />
          </circle>
        ))}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <rect x={node.x - 8} y={node.y - 7} width="16" height="14" rx="2"
              fill="#0D1520" stroke={node.color} strokeWidth="0.6" strokeOpacity="0.7" />
            <text x={node.x} y={node.y + 1.5} textAnchor="middle" fill={node.color}
              fontSize="3.5" fontFamily="monospace" fontWeight="bold">
              {node.label.split("\n")[0]}
            </text>
            <text x={node.x} y={node.y + 5.5} textAnchor="middle" fill={node.color}
              fontSize="2.8" fontFamily="monospace" opacity="0.6">
              {node.label.split("\n")[1]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* Mockup 8: CRM Pipeline (LeadNurture) */
function PipelineMockup() {
  const stages = [
    { label: "Nuevo", color: "#06B6D4", cards: [{ h: 16 }, { h: 12 }] },
    { label: "Calificado", color: "#8B5CF6", cards: [{ h: 14 }] },
    { label: "Demo", color: "#F59E0B", cards: [{ h: 12 }, { h: 18 }, { h: 10 }] },
    { label: "Cerrado", color: "#10B981", cards: [{ h: 14 }] },
  ];
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14] p-2.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold text-white/40 font-code">PIPELINE IA · Q4 2024</span>
        <span className="text-[8px] px-2 py-0.5 rounded-full bg-violet-core/20 border border-violet-core/30 text-violet-light font-code">
          47% más demos ⬆
        </span>
      </div>
      <div className="flex gap-1.5 flex-1">
        {stages.map((stage) => (
          <div key={stage.label} className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: stage.color }} />
              <span className="text-[8px] font-bold font-code truncate" style={{ color: stage.color }}>{stage.label}</span>
            </div>
            {stage.cards.map((card, i) => (
              <div key={i} className="rounded border border-white/8 bg-white/5 p-1.5"
                style={{ height: card.h * 2, borderLeftWidth: 2, borderLeftColor: stage.color }}>
                <div className="h-1 rounded bg-white/15 w-full mb-1" />
                <div className="h-1 rounded bg-white/8 w-2/3" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Mockup 9: KPI Dashboard (KPIRadar) */
function KPIMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#060C14] p-2.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold text-white/40 font-code">KPIRADAR · lun 07:00 ✓</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] text-green-400 font-code">En vivo</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5 mb-1.5">
        {[
          { label: "Ventas", val: "$84.2K", delta: "+12%", color: "#10B981" },
          { label: "Usuarios", val: "12,847", delta: "+8%", color: "#06B6D4" },
          { label: "Churn", val: "2.1%", delta: "-0.4%", color: "#8B5CF6" },
          { label: "NPS", val: "72", delta: "+5", color: "#F59E0B" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-white/5 border border-white/8 p-2">
            <div className="text-[7px] text-white/25 font-code mb-0.5">{kpi.label}</div>
            <div className="text-sm font-bold font-heading" style={{ color: kpi.color }}>{kpi.val}</div>
            <div className="text-[7px] font-code mt-0.5" style={{ color: kpi.color, opacity: 0.7 }}>{kpi.delta}</div>
          </div>
        ))}
      </div>
      {/* Sparklines */}
      <div className="flex-1 rounded-lg bg-white/5 border border-white/8 p-2">
        <div className="text-[8px] text-white/20 font-code mb-1.5">8 fuentes · Última actualización: hace 0s</div>
        <svg viewBox="0 0 100 30" className="w-full h-8">
          <polyline points="0,28 12,22 25,24 37,15 50,18 62,10 75,12 87,6 100,4"
            fill="none" stroke="#06B6D4" strokeWidth="1.5" opacity="0.8" />
          <polyline points="0,26 12,25 25,28 37,22 50,20 62,18 75,15 87,16 100,12"
            fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
        </svg>
        <div className="flex gap-3 mt-1">
          {["Slack","HubSpot","Stripe","GA4","Jira","Notion","Sheets","Zapier"].map((src) => (
            <span key={src} className="text-[7px] text-white/15 font-code">{src}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PROJECT DATA
   ───────────────────────────────────────── */

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  results: string[];
  stack: string[];
  Mockup?: React.FC;
  images?: string[];
  featured?: boolean;
}

const PROJECTS: Record<string, Project[]> = {
  systems: [
    {
      id: "chemiservis-erp", featured: true,
      tag: "Sistema ERP · Petróleo & Gas",
      title: "Chemiservis — Suite ERP de Requisiciones y Compras",
      description: "Plataforma centralizada de adquisiciones, control financiero y gestión operativa para la industria petrolera. KPIs en tiempo real, trazabilidad completa y auditoría de procesos con 16 áreas operativas conectadas.",
      results: ["16 áreas operativas", "Auditoría 360° en vivo", "KPIs en tiempo real"],
      stack: ["Next.js 16", "PostgreSQL", "TailwindCSS", "Framer Motion", "TypeScript"],
      images: ["/projects/requisiciones-dashboard.png", "/projects/chemiservis-login.jpg"],
    },
    {
      id: "chemiservis-hidraulica", featured: false,
      tag: "Software Técnico · Fluidos de Perforación",
      title: "Chemiservis Hidráulica v1.3",
      description: "Software de ingeniería con 11 módulos técnicos para análisis de fluidos de perforación, simulador offshore 3D y reportes ejecutivos en PDF/Excel.",
      results: ["11 módulos técnicos", "Simulador 3D Offshore"],
      stack: ["Python", "Matplotlib", "ReportLab"],
      images: ["/projects/chemiservis-offshore.png", "/projects/chemiservis-hidraulica.png"],
    },
    {
      id: "royers-construcciones", featured: false,
      tag: "Sitio Web Corporativo · Construcción",
      title: "Royers Construcciones — Excelencia en Cada Detalle",
      description: "Sitio web premium con galería de proyectos, renders 3D y sistema de cotización para constructora líder en el estado.",
      results: ["20+ años · 500+ obras", "98% satisfacción"],
      stack: ["Next.js", "GSAP", "Tailwind"],
      images: ["/projects/royers-construction.jpg"],
    },
  ],
  apps: [
    {
      id: "neurocrm", featured: true,
      tag: "CRM Inteligente",
      title: "NeuroCRM — IA que cierra ventas",
      description: "Asistente de ventas con IA que califica leads automáticamente, redacta propuestas personalizadas y predice el cierre de deals con 89% de precisión.",
      results: ["+340% leads calificados", "3.2× revenue ARR", "89% win rate"],
      stack: ["Claude API", "Next.js", "Supabase", "Python", "TypeScript"],
      Mockup: AnalyticsDashMockup,
    },
    {
      id: "docmind", featured: false,
      tag: "Procesamiento docs",
      title: "DocMind",
      description: "Extrae y estructura datos de 10,000 documentos al día con 98.7% de precisión.",
      results: ["10K docs/día", "95% tiempo ahorrado"],
      stack: ["GPT-4V", "Python", "n8n"],
      Mockup: DocExtractMockup,
    },
    {
      id: "insightpulse", featured: false,
      tag: "Analytics predictivo",
      title: "InsightPulse",
      description: "Dashboard IA que detecta anomalías y genera reportes ejecutivos automáticamente.",
      results: ["87% precisión", "Tiempo real"],
      stack: ["Claude", "FastAPI", "PostgreSQL"],
      Mockup: ChatAIMockup,
    },
  ],
  web: [
    {
      id: "provalsa", featured: true,
      tag: "Sitio Web Corporativo · Industria",
      title: "PROVALSA — Suministros para la Industria",
      description: "Sitio web corporativo con catálogo de productos industriales (válvulas, bridas y suministros), sección Sobre Nosotros, Servicios y tienda online integrada. Diseño responsivo con enfoque B2B y redes sociales enlazadas.",
      results: ["Catálogo industrial completo", "Tienda online integrada", "Diseño responsivo B2B"],
      stack: ["WordPress", "PHP", "Elementor", "WooCommerce"],
      images: ["/projects/provalsa.jpg"],
    },
    {
      id: "velox", featured: false,
      tag: "E-commerce IA",
      title: "VeloxCommerce",
      description: "E-commerce con búsqueda semántica por IA y recomendaciones en tiempo real.",
      results: ["+67% conversión", "98/100 Lighthouse"],
      stack: ["Next.js 15", "Stripe", "Claude API"],
      Mockup: StoreMockup,
    },
    {
      id: "sabor", featured: false,
      tag: "PWA Restaurant",
      title: "Sabor Studio",
      description: "App web progresiva con pedidos online, menú digital y reservas integradas.",
      results: ["100ms LCP", "PWA Score 100"],
      stack: ["React", "PWA", "Supabase"],
      Mockup: MobileMockup,
    },
  ],
  auto: [
    {
      id: "facturaflow", featured: true,
      tag: "Automatización financiera",
      title: "FacturaFlow — 0 horas en contabilidad",
      description: "Pipeline que extrae datos de facturas PDF, valida contra ERP, genera asientos contables y notifica excepciones en tiempo real. De 3 días a 30 segundos.",
      results: ["95% tiempo ahorrado", "0 errores manuales", "10K facturas/día"],
      stack: ["n8n", "Python", "Claude API", "SAP API", "PostgreSQL"],
      Mockup: FlowMockup,
    },
    {
      id: "learnurture", featured: false,
      tag: "Pipeline de ventas",
      title: "LeadNurture AI",
      description: "Flujo que califica leads con IA, personaliza emails y agenda demos sin humanos.",
      results: ["2h/día → 0", "+47% demos"],
      stack: ["Make", "Claude", "HubSpot"],
      Mockup: PipelineMockup,
    },
    {
      id: "kpiradar", featured: false,
      tag: "Reporting automático",
      title: "KPIRadar",
      description: "Consolida KPIs de 8 fuentes y genera reportes ejecutivos cada lunes a las 7am.",
      results: ["8 fuentes unificadas", "Reporte en 30s"],
      stack: ["Python", "n8n", "Slack API", "BigQuery"],
      Mockup: KPIMockup,
    },
  ],
};

/* ─────────────────────────────────────────
   TAB CONFIG
   ───────────────────────────────────────── */

const TABS = [
  { id: "systems" as const, label: "Casos Reales",      icon: Layers },
  { id: "apps"    as const, label: "Aplicaciones IA",   icon: Brain  },
  { id: "web"     as const, label: "Sitios Web",         icon: Globe  },
  { id: "auto"    as const, label: "Automatizaciones",  icon: Zap    },
];

/* ─────────────────────────────────────────
   3D TILT CARD
   ───────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -10;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    setTimeout(() => { if (card) card.style.transition = "transform 0.08s ease"; }, 500);
  }, []);

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transition = "transform 0.08s ease";
  }, []);

  const mockupHeight = project.featured ? "h-64" : "h-44";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-surface transition-[border-color,box-shadow] duration-300 hover:border-cyan-core/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Mockup visual area */}
      <div className={`relative shrink-0 overflow-hidden border-b border-border/40 bg-deep-space ${mockupHeight}`}>
        {project.images && project.images.length > 0 ? (
          <ScreenshotMockup images={project.images} alt={project.title} />
        ) : project.Mockup ? (
          <project.Mockup />
        ) : null}
        {/* Tag */}
        <div className="absolute left-3 top-3 z-10">
          <span className="rounded-full border border-border/60 bg-surface/80 px-2.5 py-1 text-[10px] font-medium text-text-muted backdrop-blur-sm">
            {project.tag}
          </span>
        </div>
        {/* Arrow link */}
        <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface/90 backdrop-blur-sm">
            <ArrowUpRight size={13} className="text-cyan-core" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`font-heading font-bold text-text-primary ${project.featured ? "mb-2.5 text-xl" : "mb-2 text-base"}`}>
          {project.title}
        </h3>

        {project.featured && (
          <p className="mb-4 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
        )}

        {/* Results */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.results.map((r) => (
            <span key={r}
              className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
              style={{ background: "rgba(6,182,212,0.07)", borderColor: "rgba(6,182,212,0.2)", color: "#22D3EE" }}>
              <TrendingUp size={9} />
              {r}
            </span>
          ))}
        </div>

        {/* Stack tags */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t}
              className="rounded border border-border/50 bg-elevated/50 px-2 py-0.5 font-code text-[10px] text-text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PORTFOLIO SECTION
   ───────────────────────────────────────── */

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  // Listen for tab change events from Services CTAs
  useEffect(() => {
    const handler = (e: Event) => {
      setActiveTab((e as CustomEvent<number>).detail);
      // Smooth scroll to section
      const el = document.getElementById("proyectos");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    window.addEventListener("setPortfolioTab", handler);
    return () => window.removeEventListener("setPortfolioTab", handler);
  }, []);

  const currentProjects = PROJECTS[TABS[activeTab].id];
  const featured = currentProjects.find((p) => p.featured)!;
  const smalls = currentProjects.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      className="relative bg-deep-space py-24 sm:py-32"
      aria-label="Proyectos"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-core/4 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-violet-core/4 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs backdrop-blur-sm">
            <BarChart3 size={12} className="text-cyan-core" />
            <span className="text-text-muted">Proyectos en producción · Capturas reales</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Evidencia real de <span className="gradient-text">sistemas en vivo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Estas no son maquetas. Son capturas de plataformas que hoy gestionan operaciones reales en petróleo, construcción e ingeniería.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <div className="relative inline-flex rounded-xl border border-border bg-surface/60 p-1 backdrop-blur-sm">
            {TABS.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className="relative z-10 flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-150"
                  style={{ color: isActive ? "#F8FAFC" : "#94A3B8" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))", border: "1px solid rgba(6,182,212,0.25)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={15} style={{ color: isActive ? "#22D3EE" : "#64748B" }} />
                  <span className="relative hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-5 md:flex-row"
          >
            {/* Featured — 2/3 width */}
            <div className="md:w-[62%]">
              <ProjectCard project={featured} />
            </div>

            {/* Small cards — 1/3 width, stacked */}
            <div className="flex flex-col gap-5 md:w-[38%]">
              {smalls.map((project) => (
                <div key={project.id} className="flex-1">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-cyan-light"
          >
            ¿Tienes un proyecto en mente? Hablemos
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
