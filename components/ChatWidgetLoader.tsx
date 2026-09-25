"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/**
 * El chat no entra en el primer render: se carga cuando el navegador está libre
 * (o en cuanto el visitante toca, mueve o hace scroll). Así su código y su
 * consulta a /api/chat no compiten con lo que el visitante quiere ver primero.
 */
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatWidgetLoader() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      setMount(true);
    };
    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "scroll", "touchstart"];
    for (const e of events) window.addEventListener(e, go, { once: true, passive: true });

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2500));
    const id = idle(go, { timeout: 4000 } as IdleRequestOptions);

    return () => {
      for (const e of events) window.removeEventListener(e, go);
      (window.cancelIdleCallback ?? window.clearTimeout)(id as number);
    };
  }, []);

  return mount ? <ChatWidget /> : null;
}
