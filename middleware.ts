import { NextResponse, type NextRequest } from "next/server";
import { MARKDOWN_PAGES } from "@/lib/markdownPages";

/**
 * Markdown-for-agents content negotiation.
 *
 * When a client explicitly asks for `Accept: text/markdown`, serve a Markdown
 * representation of the page. Browsers (which send `text/html`) always get the
 * normal HTML. The Markdown responses are `no-store` so the CDN never caches a
 * Markdown body against the HTML URL.
 */
export function middleware(req: NextRequest) {
  const accept = req.headers.get("accept") || "";
  const wantsMarkdown = accept.includes("text/markdown");
  const md = MARKDOWN_PAGES[req.nextUrl.pathname];

  if (wantsMarkdown && md) {
    return new Response(md, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Markdown-Tokens": String(Math.ceil(md.length / 4)),
        Vary: "Accept",
        "Cache-Control": "no-store",
      },
    });
  }

  // Normal request: continue, but advertise that the response varies by Accept
  // so shared caches keep the HTML and Markdown variants separate.
  const res = NextResponse.next();
  if (md) res.headers.set("Vary", "Accept");
  return res;
}

export const config = {
  matcher: ["/", "/agenda", "/aviso-de-privacidad"],
};
