"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getDict, type Locale } from "@/lib/i18n";
import { trackChatEvent, trackFormLead } from "@/lib/analytics";
import WaLink from "@/components/WaLink";

/**
 * Floating site assistant (mounted once in the root layout, above the WhatsApp
 * button). GET /api/chat decides the mode: "ai" (API key + owner-notification
 * channel configured) runs the Claude assistant; "lite" (no credentials yet)
 * shows the same bubble with quick options that open WhatsApp prefilled.
 *
 * The conversation is kept in sessionStorage (per tab) so it survives page
 * navigations; only plain text turns are sent to the server.
 */

type Turn = { role: "user" | "assistant"; text: string };
type Stored = { sessionId: string; turns: Turn[]; handoff: string };

const STORE_KEY = "nv-chat-v1";

function load(): Stored | null {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Stored) : null;
  } catch {
    return null;
  }
}
function save(s: Stored) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(s));
  } catch {
    /* storage blocked: the chat still works for this page view */
  }
}
function newId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.15L4 20.5l1.35-4.9A8 8 0 1 1 21 12Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.6" />
    </svg>
  );
}

export default function ChatWidget() {
  const pathname = usePathname() ?? "/";
  const lang: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  // En la página de campaña (/expo) no van botones flotantes: ahí los CTAs ya están
  // en el contenido y en pantallas chicas estos tapaban el botón principal.
  const isExpo = pathname === "/expo" || pathname.startsWith("/expo/");
  const t = getDict(lang).chat;

  const [mode, setMode] = useState<"off" | "ai" | "lite">("off");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<Stored>({ sessionId: "", turns: [], handoff: "" });
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Is the bot configured on the server?
  useEffect(() => {
    let alive = true;
    fetch("/api/chat", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { enabled: false }))
      .then((d: { enabled?: boolean; mode?: string }) => {
        if (!alive) return;
        setMode(d.enabled ? "ai" : d.mode === "lite" ? "lite" : "off");
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  // Restore the conversation for this tab.
  useEffect(() => {
    setState(load() ?? { sessionId: newId(), turns: [], handoff: "" });
  }, []);

  useEffect(() => {
    if (state.sessionId) save(state);
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [state]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (mode === "off" || isExpo) return null;
  const lite = mode === "lite";

  async function send(text: string) {
    const clean = text.trim();
    if (!clean || busy) return;
    setError("");
    setDraft("");
    const turns: Turn[] = [...state.turns, { role: "user", text: clean }];
    setState((s) => ({ ...s, turns }));
    setBusy(true);
    trackChatEvent("chat_message");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: state.sessionId, lang, page: pathname, messages: turns }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        reply?: string;
        events?: string[];
        handoff?: string;
        error?: string;
      };
      if (!res.ok || !data.ok || !data.reply) {
        setError(data.error === "session_limit" || data.error === "rate_limited" ? t.errorLimit : t.errorGeneric);
        return;
      }
      // Una conversión por conversación: un contacto seguido de una cita sigue
      // siendo un solo prospecto. El lead ya se entregó en el servidor (Telegram
      // y correo) desde app/api/chat/route.ts.
      if (data.events?.length && !state.handoff) trackFormLead("chatbot");
      setState((s) => ({
        ...s,
        turns: [...turns, { role: "assistant", text: data.reply as string }],
        handoff: data.handoff || s.handoff,
      }));
    } catch {
      setError(t.errorGeneric);
    } finally {
      setBusy(false);
    }
  }

  const showChips = state.turns.length === 0;

  return (
    <>
      {/* Launcher — sits above the WhatsApp button (bottom-6 right-6, 56px) */}
      <button
        type="button"
        // Abrir el chat no es una señal de interés medible: no se dispara nada.
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        aria-controls="nv-chat-panel"
        className="fixed bottom-[92px] right-6 z-[9997] flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{ background: "var(--accent)", boxShadow: "0 10px 26px -8px rgba(47,143,232,.7), 0 6px 16px rgba(15,23,42,.18)" }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <ChatIcon />
        )}
      </button>

      {open && (
        <div
          id="nv-chat-panel"
          role="dialog"
          aria-label={t.title}
          className={`fixed inset-x-3 bottom-[160px] z-[9998] flex flex-col overflow-hidden rounded-3xl border border-line bg-white sm:inset-x-auto sm:right-6 sm:top-auto sm:w-[380px] ${
            lite ? "max-h-[calc(100dvh-190px)]" : "top-[84px] sm:h-[min(600px,calc(100dvh-190px))]"
          }`}
          style={{ boxShadow: "0 30px 80px -24px rgba(15,42,68,.45)" }}
        >
          <header className="flex items-center gap-3 border-b border-line px-5 py-4">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-white" style={{ background: "var(--accent)" }}>
              <ChatIcon />
            </span>
            <div className="min-w-0">
              <p className="m-0 truncate text-[15px] font-semibold text-ink">{t.title}</p>
              <p className="m-0 truncate text-[12.5px] text-muted">{lite ? t.liteSubtitle : t.subtitle}</p>
            </div>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            <Bubble role="assistant" text={lite ? t.liteGreeting : t.greeting} />
            {lite && (
              <div className="flex flex-col gap-2 pt-1">
                {[...t.chips, t.liteOther].map((c, i) => (
                  <WaLink
                    key={c}
                    message={i < t.chips.length ? `${t.liteMessagePrefix} ${c}` : t.liteMessagePrefix}
                    lang={lang}
                    onAfterClick={() => {
                      // Tell the owner (Telegram) which option was picked; index only, never free text.
                      fetch("/api/chat", {
                        method: "POST",
                        keepalive: true,
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ liteChoice: i, sessionId: state.sessionId, lang, page: pathname }),
                      }).catch(() => {});
                    }}
                    className={`${i === 0 ? "btn-primary" : "cta-outline"} inline-flex w-full items-center justify-between gap-2 rounded-full px-5 py-3 text-left text-[14px] font-semibold no-underline`}
                  >
                    <span>{c}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </WaLink>
                ))}
              </div>
            )}
            {state.turns.map((m, i) => (
              <Bubble key={i} role={m.role} text={m.text} />
            ))}
            {busy && <p className="m-0 px-1 text-[13px] text-faint">{t.typing}</p>}
            {error && (
              <p className="m-0 rounded-2xl px-4 py-3 text-[14px] text-ink-2" style={{ background: "var(--accent-soft)" }}>
                {error}
              </p>
            )}
            {state.handoff && (
              <div className="rounded-2xl border border-line p-4">
                <p className="m-0 text-[14px] font-semibold text-ink">{t.handoffTitle}</p>
                <WaLink
                  message={state.handoff}
                  lang={lang}
                  className="btn-primary mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold no-underline"
                >
                  {t.handoffCta}
                </WaLink>
              </div>
            )}
            {(error || state.turns.length >= 6) && !state.handoff && (
              <WaLink
                context="general"
                lang={lang}
                className="cta-outline inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold no-underline"
              >
                {t.handoffCta}
              </WaLink>
            )}
          </div>

          {!lite && showChips && (
            <div className="flex gap-2 overflow-x-auto px-4 pb-2">
              {t.chips.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => send(c)}
                  className="flex-none rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-[color:var(--accent)]"
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {!lite && (
          <form
            className="border-t border-line p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, 1500))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(draft);
                  }
                }}
                rows={1}
                placeholder={t.placeholder}
                aria-label={t.placeholder}
                className="max-h-28 min-h-[44px] flex-1 resize-none rounded-2xl border border-line bg-white px-4 py-2.5 text-[16px] leading-[1.4] text-ink outline-none focus:border-[color:var(--accent)]"
              />
              <button
                type="submit"
                disabled={busy || !draft.trim()}
                aria-label={t.send}
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40"
                style={{ background: "var(--accent)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
            <p className="m-0 mt-2 px-1 text-[11.5px] text-faint">
              {t.privacyPrefix}{" "}
              {/* The privacy notice only exists in Spanish (/aviso-de-privacidad). */}
              <a href="/aviso-de-privacidad" className="underline underline-offset-2">
                {t.privacyLink}
              </a>
              .
            </p>
          </form>
          )}
        </div>
      )}
    </>
  );
}

function Bubble({ role, text }: { role: "user" | "assistant"; text: string }) {
  const mine = role === "user";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <p
        className={`m-0 max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[14.5px] leading-[1.5] ${mine ? "text-white" : "text-ink"}`}
        style={{ background: mine ? "var(--accent)" : "var(--accent-soft)" }}
      >
        {text}
      </p>
    </div>
  );
}
