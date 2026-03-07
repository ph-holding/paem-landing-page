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
    <div className="min-h-[80vh] bg-background pt-32">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-24">
        <h1 className="mb-8 font-sans text-5xl leading-none tracking-tighter md:text-7xl">
          Política de Cookies
        </h1>
        <p className="mb-20 font-sans text-lg font-light text-secondary">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>

        <div className="flex flex-col gap-16">
          {sections.map((sec, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h2 className="mb-6 font-sans text-2xl font-medium tracking-tight text-primary">
                {sec.title}
              </h2>
              <p
                className={`font-sans text-lg font-light leading-relaxed text-primary/80 ${
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
