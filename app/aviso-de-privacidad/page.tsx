/*
 * ============================================================================
 * BORRADOR TÉCNICO — NO ES ASESORÍA LEGAL.
 * Este aviso de privacidad fue redactado como borrador conforme a la LFPDPPP
 * (México). DEBE ser revisado y validado por un abogado antes de publicarse.
 * Quien lo generó no es abogado y esto no sustituye asesoría legal profesional.
 * Pendiente: completar el DOMICILIO FISCAL (marcado con TODO más abajo).
 * ============================================================================
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://neuroviasystems.com.mx";

// TODO (Jesús): reemplaza por el domicilio fiscal real del responsable.
const DOMICILIO_FISCAL = "[TODO: domicilio fiscal completo], Villahermosa, Tabasco, México";
const CORREO_PRIVACIDAD = "soporte@neuroviasystems.com.mx";
const ULTIMA_ACTUALIZACION = "25 de agosto de 2026";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de Neurovia Systems conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  alternates: { canonical: `${SITE_URL}/aviso-de-privacidad` },
  robots: { index: true, follow: true },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Aviso de privacidad",
      item: `${SITE_URL}/aviso-de-privacidad`,
    },
  ],
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[26px]">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[16px] leading-[1.75] text-muted">{children}</p>;
}

export default function AvisoDePrivacidadPage() {
  return (
    <div lang="es">
      <Navbar />

      <main>
        <section className="mx-auto max-w-[820px] px-5 pb-24 pt-[130px] sm:px-10 sm:pt-[160px]">
          <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
            Legal
          </div>
          <h1 className="m-0 font-heading text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[44px]">
            Aviso de Privacidad
          </h1>
          <p className="mt-4 text-[14px] text-faint">
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>

          <P>
            En cumplimiento de la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos
            del Aviso de Privacidad, <strong>Neurovia Systems</strong> (en adelante,
            “el Responsable”) pone a su disposición el presente Aviso de Privacidad.
          </P>

          <H2>1. Identidad y domicilio del Responsable</H2>
          <P>
            El Responsable del tratamiento de sus datos personales es Neurovia
            Systems, con domicilio en {DOMICILIO_FISCAL}, y correo de contacto{" "}
            <a href={`mailto:${CORREO_PRIVACIDAD}`} className="font-semibold text-ink underline underline-offset-2">
              {CORREO_PRIVACIDAD}
            </a>
            .
          </P>

          <H2>2. Datos personales que se recaban</H2>
          <P>
            Para las finalidades señaladas en este aviso, el Responsable puede
            recabar los siguientes datos personales: <strong>nombre</strong>,{" "}
            <strong>correo electrónico</strong>, <strong>número telefónico</strong> y{" "}
            <strong>nombre de la empresa</strong>. No se recaban datos personales
            sensibles.
          </P>

          <H2>3. Finalidades del tratamiento</H2>
          <P>
            <strong>Finalidades primarias</strong> (necesarias para la relación con
            usted):
          </P>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-[16px] leading-[1.7] text-muted">
            <li>Atender solicitudes de información, cotizaciones y contacto.</li>
            <li>Agendar y dar seguimiento a reuniones o llamadas.</li>
            <li>Prestar y dar soporte a los servicios contratados.</li>
          </ul>
          <P>
            <strong>Finalidades secundarias</strong> (no necesarias, requieren su
            consentimiento y puede negarlas):
          </P>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-[16px] leading-[1.7] text-muted">
            <li>
              Envío de comunicaciones de <strong>marketing</strong>, boletines,
              contenidos, promociones y novedades sobre nuestros servicios y productos.
            </li>
            <li>Elaboración de estadísticas y mejora de nuestra oferta.</li>
          </ul>
          <P>
            Puede negarse al tratamiento de sus datos para las finalidades
            secundarias enviando un correo a{" "}
            <a href={`mailto:${CORREO_PRIVACIDAD}`} className="font-semibold text-ink underline underline-offset-2">
              {CORREO_PRIVACIDAD}
            </a>{" "}
            con el asunto “Baja de marketing”. Su negativa no será motivo para negarle
            los servicios que solicite. Asimismo, todo correo de marketing incluirá un
            mecanismo para cancelar la suscripción.
          </P>

          <H2>4. Derechos ARCO</H2>
          <P>
            Usted tiene derecho a <strong>Acceder</strong> a sus datos personales,{" "}
            <strong>Rectificarlos</strong> cuando sean inexactos,{" "}
            <strong>Cancelarlos</strong> cuando considere que no se requieren para las
            finalidades señaladas, y <strong>Oponerse</strong> a su tratamiento para
            fines específicos (derechos ARCO). Para ejercerlos, envíe una solicitud al
            correo{" "}
            <a href={`mailto:${CORREO_PRIVACIDAD}`} className="font-semibold text-ink underline underline-offset-2">
              {CORREO_PRIVACIDAD}
            </a>{" "}
            indicando su nombre, el derecho que desea ejercer y una descripción clara de
            los datos involucrados, acompañando la documentación que acredite su
            identidad. El Responsable dará respuesta en los plazos que marca la LFPDPPP.
          </P>

          <H2>5. Cookies y tecnologías de rastreo</H2>
          <P>
            Este sitio utiliza cookies y tecnologías similares, incluyendo{" "}
            <strong>Google Analytics 4 (GA4)</strong>, para recopilar información
            estadística sobre el uso del sitio (páginas visitadas, origen del tráfico,
            tipo de dispositivo) y mejorar la experiencia. Esta información se trata de
            forma agregada. Puede deshabilitar las cookies desde la configuración de su
            navegador; algunas funciones podrían verse afectadas.
          </P>

          <H2>6. Transferencias de datos</H2>
          <P>
            El Responsable no vende sus datos personales. Sus datos pueden ser tratados
            por proveedores de servicios (por ejemplo, plataformas de correo,
            analítica y hospedaje) que actúan por cuenta del Responsable y conforme a
            este aviso. En caso de requerirse transferencias que exijan su
            consentimiento conforme a la ley, se le solicitará previamente.
          </P>

          <H2>7. Cambios al Aviso de Privacidad</H2>
          <P>
            El Responsable puede actualizar el presente aviso en cualquier momento. Las
            modificaciones se publicarán en esta misma página, indicando la fecha de
            última actualización.
          </P>

          <p className="mt-12 rounded-2xl border border-line bg-surface-2 p-5 text-[13px] leading-[1.6] text-faint">
            Nota: este documento es un borrador y debe ser revisado por un abogado antes
            de considerarse definitivo.
          </p>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
