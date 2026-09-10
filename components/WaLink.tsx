"use client";

import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { waLink, waLinkText, WHATSAPP_DISPLAY, type WaContext } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { trackLead } from "@/lib/analytics";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  /** Which CTA this is; picks the prefilled message (see WA_MESSAGES in lib/site.ts). */
  context?: WaContext;
  /** Raw prefilled message — for pages with their own copy (service pages). Wins over `context`. */
  message?: string;
  lang?: Locale;
  /** Extra work on click (e.g. close a menu). Tracking is always fired here. */
  onAfterClick?: () => void;
  children: ReactNode;
};

/**
 * Best-effort "is this a phone/tablet?" check. Only runs on the client.
 * Biased towards "mobile": any positive signal (client hints, UA string, or a
 * touch-first pointer on a narrow screen) keeps the wa.me deep link, so a phone
 * is never sent to WhatsApp Web. Desktop is only assumed when nothing matches.
 */
function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return true;
  const uaData = (navigator as Navigator & { userAgentData?: { mobile?: boolean } }).userAgentData;
  if (uaData?.mobile === true) return true;
  if (/Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
  const coarse = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
  return coarse && window.innerWidth < 1024;
}

/**
 * The one WhatsApp anchor used across the site.
 *
 * - Server-renders the wa.me URL (what phones need). After mount, desktop
 *   visitors are switched to web.whatsapp.com/send so they land in WhatsApp
 *   Web directly instead of wa.me's "continue to chat" interstitial.
 * - On desktop the `title` carries the visible number as a copy-me fallback for
 *   people without WhatsApp Web.
 * - Every click fires trackLead("whatsapp") (GA4 + Google Ads + Meta Lead).
 */
export default function WaLink({
  context = "general",
  message,
  lang = "es",
  onAfterClick,
  children,
  title,
  ...rest
}: Props) {
  const build = (target: "mobile" | "desktop") =>
    message ? waLinkText(message, target) : waLink(context, lang, target);

  const [href, setHref] = useState(() => build("mobile"));
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    if (!isMobileDevice()) {
      setDesktop(true);
      setHref(build("desktop"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context, message, lang]);

  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title ?? (desktop ? `WhatsApp ${WHATSAPP_DISPLAY}` : undefined)}
      onClick={() => {
        trackLead("whatsapp");
        onAfterClick?.();
      }}
    >
      {children}
    </a>
  );
}
