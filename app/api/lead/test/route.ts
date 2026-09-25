import { NextResponse } from "next/server";
import { deliverLead, leadSubject, type LeadPayload } from "@/lib/leadDelivery";

/**
 * GET /api/lead/test — manda un prospecto FALSO por todos los canales y dice
 * cuál funcionó. Sirve para comprobar el correo y Telegram sin ensuciar los
 * informes de GA4 (no dispara ninguna conversión).
 *
 * Protegido: en producción exige ?token=<LEAD_TEST_TOKEN>. Si esa variable no
 * está puesta, en producción responde 404 (no existe manera de invocarlo).
 * En desarrollo corre sin token.
 */

const PROD = process.env.NODE_ENV === "production";

export async function GET(request: Request) {
  const token = process.env.LEAD_TEST_TOKEN;
  const given = new URL(request.url).searchParams.get("token");

  if (PROD) {
    if (!token) return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    if (given !== token) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const lead: LeadPayload = {
    name: "Prueba de envío",
    phone: "9937226350",
    email: "prueba@example.com",
    company: "Constructora de Prueba",
    need: "sistema",
    message: "Este es un lead de prueba generado desde /api/lead/test. Si lo recibes, el canal funciona.",
    source: "form",
    page: "/api/lead/test",
    attribution: { gclid: "PRUEBA123456", utm_source: "prueba", utm_medium: "diagnostico" },
  };

  try {
    const results = await deliverLead(lead);
    return NextResponse.json({ ok: true, subject: leadSubject(lead), results });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err).slice(0, 300) }, { status: 502 });
  }
}
