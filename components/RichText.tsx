/**
 * El contenido marca con **asteriscos** la etiqueta con que arranca un párrafo
 * ("**Requisiciones y compras.** Solicitud, autorización…"). Aquí se convierte
 * en <strong> real: se lee mejor de un vistazo y para un lector de pantalla o
 * un motor de respuesta es el subtítulo del párrafo, no adorno.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
