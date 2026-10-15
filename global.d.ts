export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (command: "init" | "track" | "trackCustom" | string, ...args: unknown[]) => void;
    /** Píxel de medición de OpenAI (anuncios en ChatGPT). */
    oaiq?: (command: "init" | "measure" | "consent" | string, ...args: unknown[]) => void;
  }
}
