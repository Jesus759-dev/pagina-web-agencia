import { NextResponse } from "next/server";
import { notifyLead, type LeadPayload } from "@/lib/leadDelivery";

/**
 * POST /api/lead — captura de prospectos del formulario y del chatbot.
 *
 * Valida en el servidor (nunca confiar en el cliente), frena spam con honeypot
 * y límite por IP, y entrega el lead por correo (Resend) y por Telegram si está
 * configurado. No guarda nada en disco ni en el repo.
 *
 * /api/ está bloqueado en robots.txt, así que no lo rastrea Google.
 */

const NAME_RE = /^[\p{L}\p{M}\s'.-]{2,120}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NEEDS = ["sistema", "punto-de-venta", "crm", "automatizacion", "pagina-web", "otro"] as const;

/** 5 envíos por IP cada 10 minutos: suficiente para una persona, molesto para un bot. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 2000) hits.clear(); // el proceso es de larga vida: no dejar crecer el mapa
  return recent.length > MAX_PER_WINDOW;
}

/** Teléfono mexicano: nos quedamos con los 10 dígitos, sin lada país ni formato. */
function mxPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("52") ? digits.slice(2) : digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return /^[1-9]\d{9}$/.test(local) ? local : null;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: campo invisible para personas, irresistible para bots.
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const name = str(body.name, 120);
  const phone = mxPhone(str(body.phone, 40));
  const email = str(body.email, 254);
  const need = str(body.need, 40);
  const source = str(body.source, 20) === "chatbot" ? "chatbot" : "form";

  if (!NAME_RE.test(name)) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 422 });
  }
  if (!phone) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 422 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }
  // El consentimiento solo se exige en el formulario; en el chat el visitante ya
  // aceptó el aviso al empezar la conversación.
  if (source === "form" && body.consent !== true) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 422 });
  }

  const lead: LeadPayload = {
    name,
    phone,
    email,
    company: str(body.company, 160),
    need: (NEEDS as readonly string[]).includes(need) ? need : "",
    message: str(body.message, 2000),
    source,
    page: str(body.page, 300),
    attribution: typeof body.attribution === "object" && body.attribution ? (body.attribution as Record<string, string>) : {},
  };

  try {
    await notifyLead(lead);
  } catch (err) {
    console.error("[lead] entrega fallida", String(err));
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
