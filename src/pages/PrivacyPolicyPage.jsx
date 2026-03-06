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
        "PAEM Real Estate podrá recopilar los siguientes datos personales a través del sitio web:\n\n\t- nombre\n\t- correo electrónico\n\t- número de teléfono\n\t- cualquier información facilitada voluntariamente por el usuario mediante contacto directo",
    },
    {
      title: "4. Finalidad del tratamiento",
      content:
        "Los datos personales recogidos se utilizarán para:\n\n\t- responder a consultas realizadas por los usuarios\n\t- proporcionar información sobre proyectos inmobiliarios\n\t- gestionar comunicaciones con clientes o potenciales clientes",
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
        "Los datos personales no se cederán a terceros salvo en los siguientes casos:\n\n- cuando exista obligación legal\n- cuando sea necesario para la prestación de servicios vinculados a la actividad de la empresa",
    },
    {
      title: "8. Derechos del usuario",
      content: (
        <span>
          El usuario puede ejercer en cualquier momento los siguientes derechos:
          <br />
          - derecho de acceso
          <br />
          - derecho de rectificación
          <br />
          - derecho de supresión
          <br />
          - derecho de limitación del tratamiento
          <br />
          - derecho de oposición
          <br />
          - derecho a la portabilidad de los datos
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
    <div className="pt-32 min-h-[80vh] bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">
        <h1 className="font-sans text-5xl md:text-7xl tracking-tighter mb-8 leading-none">
          Política de Privacidad
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

export default PrivacyPolicyPage;

