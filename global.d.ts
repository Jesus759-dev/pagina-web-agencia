export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (command: "init" | "track" | "trackCustom" | string, ...args: unknown[]) => void;
  }
}
