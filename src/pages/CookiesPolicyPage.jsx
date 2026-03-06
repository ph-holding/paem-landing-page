import React from "react";

const CookiesPolicyPage = () => {
  const sections = [
    {
      title: "1. Qué son las cookies",
      content:
        "Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web y que permiten recordar información sobre la navegación.",
    },
    {
      title: "2. Tipos de cookies utilizadas",
      content: (
        <span>
          Este sitio web puede utilizar los siguientes tipos de cookies:
          <br />
          <br />
          <strong>Cookies técnicas</strong>
          <br />
          Permiten el funcionamiento básico del sitio web y la navegación.
          <br />
          <br />
          <strong>Cookies de análisis</strong>
          <br />
          Permiten analizar el comportamiento de los usuarios en el sitio web
          con el fin de mejorar la experiencia de navegación.
        </span>
      ),
    },
    {
      title: "3. Cookies de terceros",
      content:
        "El sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos. \n\nEstos servicios pueden utilizar cookies propias.",
    },
    {
      title: "4. Gestión de cookies",
      content:
        "El usuario puede configurar su navegador para aceptar, bloquear o eliminar las cookies instaladas en su dispositivo. \n\nLas instrucciones para gestionar cookies se encuentran en la configuración de cada navegador.",
    },
    {
      title: "5. Desactivación de cookies",
      content:
        "La desactivación de algunas cookies puede afectar al correcto funcionamiento del sitio web.",
    },
    {
      title: "6. Cambios en la política de cookies",
      content:
        "PAEM Real Estate podrá modificar la presente política de cookies para adaptarla a cambios legislativos o técnicos.",
    },
  ];

  return (
    <div className="pt-32 min-h-[80vh] bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">
        <h1 className="font-sans text-5xl md:text-7xl tracking-tighter mb-8 leading-none">
          Política de Cookies
        </h1>
        <p className="font-sans text-secondary text-lg mb-20 font-light">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>

        <div className="flex flex-col gap-16">
          {sections.map((sec, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h2 className="font-sans text-2xl tracking-tight mb-6 font-medium text-primary">
                {sec.title}
              </h2>
              <p
                className={`font-sans text-lg text-primary/80 font-light leading-relaxed ${
                  typeof sec.content === "string" ? "whitespace-pre-line" : ""
                }`}
              >
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;

