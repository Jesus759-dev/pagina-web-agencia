"use client";

/**
 * WhatsApp CTA usado en las páginas de servicio. Se extrae a un componente
 * cliente para que su contenedor (ServicePage) siga siendo Server Component
 * y aun así podamos disparar el evento de conversión de GA4 en el clic.
 * El estilo, el texto y el href se mantienen idénticos: solo se añade tracking.
 */
export default function WaConsultaButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => window.gtag?.("event", "contacto_whatsapp")}
      className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
    >
      Agenda una consulta gratuita <span aria-hidden="true">→</span>
    </a>
  );
}
