import { NextResponse } from "next/server";

/**
 * POST /api/subscribe — subscriber capture endpoint for Hostinger Reach.
 *
 * Validates on the server (never trust the client) and forwards to Reach.
 * IMPORTANT: no email is persisted in the repo or on local disk. The actual
 * delivery lives in `sendToReach()` below, left as an isolated, commented
 * placeholder for Jesús to wire to the Reach public API / Hostinger plugin.
 *
 * Note: /api/ is disallowed in robots.txt, so this endpoint is not crawled.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribePayload = {
  name?: unknown;
  email?: unknown;
  consent?: unknown;
};

export async function POST(request: Request) {
  let body: SubscribePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const consent = body.consent === true;

  // Server-side validation (mirrors the client, but authoritative).
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 422 });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 422 });
  }

  try {
    await sendToReach({ name, email });
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

/**
 * TODO (Jesús): connect this to Hostinger Reach.
 *
 * Option A — Reach public API (put the key in an env var, never in the repo):
 *   await fetch("https://reach.hostinger.com/api/v1/contacts", {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json",
 *       Authorization: `Bearer ${process.env.REACH_API_KEY}`,
 *     },
 *     body: JSON.stringify({ list_id: process.env.REACH_LIST_ID, name, email }),
 *   });
 *
 * Option B — forward to the Hostinger Reach form/webhook endpoint they give you.
 *
 * Until it's wired, this is a no-op so the form works end-to-end in preview
 * without storing anything. Do NOT write emails to a file or the repo.
 */
async function sendToReach({ name, email }: { name: string; email: string }): Promise<void> {
  void name;
  void email;
  // no-op placeholder — replace with the Reach call above.
  return;
}
