"use client";

import { useEffect } from "react";

/**
 * WebMCP (experimental) — exposes a couple of real site actions to in-browser
 * AI agents via navigator.modelContext. Feature-detected and wrapped in
 * try/catch, so it is a no-op in the ~all browsers that don't implement it.
 * Both tools do real things (return real contact data / hit the real
 * /api/subscribe endpoint) — nothing is fabricated.
 */
export default function WebMcpTools() {
  useEffect(() => {
    const nav = navigator as unknown as {
      modelContext?: { provideContext?: (ctx: unknown) => void };
    };
    if (!nav.modelContext?.provideContext) return;

    try {
      nav.modelContext.provideContext({
        tools: [
          {
            name: "get_neurovia_contact",
            description:
              "Devuelve los datos de contacto de Neurovia Systems (WhatsApp, correo, ubicación y enlace para agendar).",
            inputSchema: { type: "object", properties: {} },
            async execute() {
              return {
                content: [
                  {
                    type: "text",
                    text: [
                      "Neurovia Systems — Villahermosa, Tabasco, México",
                      "WhatsApp: +52 993 722 6350",
                      "Correo: soporte@neuroviasystems.com.mx",
                      "Agenda una llamada: https://neuroviasystems.com.mx/agenda",
                    ].join("\n"),
                  },
                ],
              };
            },
          },
          {
            name: "subscribe_newsletter",
            description:
              "Suscribe un correo al boletín de Neurovia Systems. Requiere consentimiento explícito del usuario.",
            inputSchema: {
              type: "object",
              properties: {
                name: { type: "string", description: "Nombre de la persona" },
                email: { type: "string", description: "Correo electrónico" },
                consent: {
                  type: "boolean",
                  description: "Consentimiento explícito para recibir comunicaciones",
                },
              },
              required: ["name", "email", "consent"],
            },
            async execute(input: { name: string; email: string; consent: boolean }) {
              try {
                const res = await fetch("/api/subscribe", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(input),
                });
                return {
                  content: [
                    {
                      type: "text",
                      text: res.ok
                        ? "Suscripción registrada correctamente."
                        : "No se pudo completar la suscripción (revisa nombre, correo y consentimiento).",
                    },
                  ],
                };
              } catch {
                return {
                  content: [{ type: "text", text: "Error de red al suscribir." }],
                };
              }
            },
          },
        ],
      });
    } catch {
      // WebMCP not available or shape changed — ignore silently.
    }
  }, []);

  return null;
}
