import React from "react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "1. Información general",
      content:
        "El presente documento establece la Política de Privacidad de PAEM Real Estate, en cumplimiento de la normativa vigente en materia de protección de datos personales.",
    },
    {
      title: "2. Responsable del tratamiento",
      content:
        "Titular: PAEM Real Estate S.L.\nCIF: B02998029\nDomicilio: Zaragoza, España\nCorreo electrónico: compliance@paem.es\nTeléfono: +34 672 730 794",
    },
    {
      title: "3. Datos personales que se recogen",
      content:
        "PAEM Real Estate podrá recopilar los siguientes datos personales a través del sitio web:\n\n\t- Nombre.\n\t- Correo electrónico.\n\t- Número de teléfono.\n\t- Cualquier información facilitada voluntariamente por el usuario mediante contacto directo.",
    },
    {
      title: "4. Finalidad del tratamiento",
      content:
        "Los datos personales recogidos se utilizarán para:\n\n\t- Responder a consultas realizadas por los usuarios.\n\t- Proporcionar información sobre proyectos inmobiliarios.\n\t- Gestionar comunicaciones con clientes o potenciales clientes.",
    },
    {
      title: "5. Base jurídica",
      content:
        "La base jurídica para el tratamiento de los datos es el consentimiento del usuario, obtenido a través de los formularios de contacto.",
    },
    {
      title: "6. Conservación de los datos",
      content:
        "Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos o mientras exista una obligación legal de conservación.",
    },
    {
      title: "7. Cesión de datos a terceros",
      content:
        "Los datos personales no se cederán a terceros salvo en los siguientes casos:\n\n- Cuando exista obligación legal.\n- Cuando sea necesario para la prestación de servicios vinculados a la actividad de la empresa.",
    },
    {
      title: "8. Derechos del usuario",
      content: (
        <span>
          El usuario puede ejercer en cualquier momento los siguientes derechos:
          <br />
          - Derecho de acceso.
          <br />
          - Derecho de rectificación.
          <br />
          - Derecho de supresión.
          <br />
          - Derecho de limitación del tratamiento.
          <br />
          - Derecho de oposición.
          <br />
          - Derecho a la portabilidad de los datos.
          <br />
          Para ejercer estos derechos, el usuario puede enviar una solicitud a:
          <br />
          <br />
          <a className="hover:underline" href="mailto:contacto@paem.es">
            contacto@paem.es
          </a>
          <br />
          <br />
          También tiene derecho a presentar una reclamación ante la{" "}
          <strong>Agencia Española de Protección de Datos (AEPD).</strong>
        </span>
      ),
    },
    {
      title: "9. Plazo de conservación",
      content:
        "Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos.",
    },
    {
      title: "10. Seguridad",
      content:
        "PAEM Real Estate ha adoptado las medidas de seguridad necesarias para garantizar la confidencialidad y seguridad de los datos personales.",
    },
    {
      title: "11. Legislación aplicable",
      content:
        "Las presentes condiciones generales se regirán e interpretarán de acuerdo con la legislación y jurisdicción española.",
    },
    {
      title: "12. Cambios en la política de privacidad",
      content:
        "PAEM Real Estate se reserva el derecho de modificar la presente política de privacidad para adaptarla a novedades legislativas o cambios en la actividad del sitio web.",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-background pt-32">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-24">
        <h1 className="mb-8 font-sans text-5xl leading-none tracking-tighter md:text-7xl">
          Política de Privacidad
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

export default PrivacyPolicyPage;
