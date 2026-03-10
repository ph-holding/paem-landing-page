import React from "react";
import { Link } from "react-router-dom";

const TermsPage = () => {
  const sections = [
    {
      title: "1. Información del titular del sitio web",
      content:
        "Titular: PAEM Real Estate S.L.\nCIF: B02998029\nDomicilio: Zaragoza, España\nCorreo electrónico: compliance@paem.es\nTeléfono: +34 672 730 794",
    },
    {
      title: "2. Objeto del sitio web",
      content:
        "El presente sitio web tiene como finalidad ofrecer información sobre los servicios y actividades desarrolladas por PAEM Real Estate, incluyendo promoción inmobiliaria, rehabilitación de viviendas, alquiler y venta de inmuebles. \n\nLa información contenida en este sitio web tiene carácter informativo y orientativo.",
    },
    {
      title: "3. Condiciones de uso",
      content:
        "El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones de uso. \nEl usuario se compromete a hacer un uso adecuado del sitio web y a no utilizarlo para:\n\n\t- realizar actividades ilícitas o contrarias a la buena fe\n\t- provocar daños en los sistemas del sitio web\n\t- introducir virus o software malicioso\n\t- intentar acceder a datos restringidos",
    },
    {
      title: "4. Propiedad intelectual",
      content:
        "Todos los contenidos del sitio web, incluyendo textos, imágenes, diseños, logotipos, marcas y código fuente, son propiedad de PAEM Real Estate o de terceros autorizados y están protegidos por la legislación vigente en materia de propiedad intelectual e industrial.\n\nQueda prohibida la reproducción, distribución o modificación de dichos contenidos sin autorización expresa del titular.",
    },
    {
      title: "5. Exclusión de responsabilidad",
      content:
        "PAEM Real Estate no se responsabiliza de:\n\n\t- Posibles errores en la información publicada.\n\t- Interrupciones del servicio del sitio web.\n\t- Daños derivados del uso del sitio web.\n\nLa empresa se reserva el derecho a modificar los contenidos del sitio web en cualquier momento.",
    },
    {
      title: "6. Exactitud de la información de proyectos",
      content:
        "La información relativa a proyectos inmobiliarios mostrada en este sitio web tiene carácter meramente informativo.\n\nLas superficies, características, imágenes, planos, renders o descripciones de las viviendas pueden estar sujetos a modificaciones por motivos técnicos, legales o comerciales.\n\nEn ningún caso la información publicada constituye una oferta contractual.",
    },
    {
      title: "7. Enlaces externos",
      content:
        "El sitio web puede contener enlaces a sitios web de terceros.\n\nPAEM Real Estate no se responsabiliza del contenido de dichos sitios ni de sus políticas de privacidad.",
    },
    {
      title: "8. Protección de datos",
      content: (
        <span>
          El tratamiento de los datos personales se rige por lo dispuesto en la{" "}
          <Link
            to="/politica-privacidad"
            className="underline transition-opacity hover:opacity-60"
          >
            Política de Privacidad
          </Link>{" "}
          del sitio web, cumpliendo estrictamente con la normativa vigente en
          España.
        </span>
      ),
    },
    {
      title: "9. Legislación aplicable",
      content:
        "Las presentes condiciones generales se regirán e interpretarán de acuerdo con la legislación y jurisdicción española.",
    },
    {
      title: "10. Modificaciones",
      content:
        "PAEM Real Estate se reserva el derecho exclusivo de efectuar, sin previo aviso, las modificaciones que considere oportunas en las presentes condiciones o en la propia web.",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-background pt-32">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-24">
        <h1 className="mb-8 font-sans text-5xl leading-none tracking-tighter md:text-7xl">
          Términos y Condiciones
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

export default TermsPage;
