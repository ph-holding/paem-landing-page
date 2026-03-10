import React from "react";

const CommunicationChannelPage = () => {
  return (
    <div className="min-h-[80vh] bg-background pt-32">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-24">
        <h1 className="mb-8 font-sans text-5xl leading-none tracking-tighter md:text-7xl">
          Canal de Comunicación y Denuncias
        </h1>
        <p className="mb-20 font-sans text-lg font-light text-secondary">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>

        <div className="flex flex-col gap-16">
          <p className="font-sans text-lg font-light leading-relaxed text-primary/80">
            De acuerdo con el Canal de Comunicación y Denuncias previsto en la
            Política de Prevención de Delitos (Compliance Penal) de PAEM Real
            Estate, cualquier persona interesada puede comunicar posibles
            irregularidades detectadas en el ámbito de la empresa.
            <br />
            <br />
            Este canal está disponible tanto para personas vinculadas a la
            organización como para terceros ajenos a ella, incluyendo:
            <br />
            - Trabajadores por cuenta ajena o autónomos.
            <br />
            - Empresas asociadas.
            <br />
            - Proveedores y profesionales colaboradores.
            <br />
            - Cualquier otro grupo de interés.
            <br />
            <br />
            A través de este canal se pueden comunicar hechos, conductas o
            comportamientos que se consideren contrarios a los estándares éticos
            de PAEM Real Estate o que puedan suponer un posible riesgo de
            responsabilidad penal para la empresa o para cualquiera de sus
            miembros (empleados o integrantes de sus órganos de gobierno).
            <br />
            <br />
            Las comunicaciones serán recibidas y gestionadas por el{" "}
            <strong>Departamento de Compliance</strong> de PAEM Real Estate.
            <br />
            <br />
            Para enviar una comunicación o denuncia, puede hacerlo mediante
            correo electrónico al buzón del canal, accediendo a través del{" "}
            <a
              href="mailto:compliance@paem.es"
              className="font-normal hover:underline"
            >
              siguiente enlace
            </a>{" "}
            y adjuntando, si procede, la documentación que considere relevante.
            <br />
            <br />
            Una vez finalizado el proceso de análisis e investigación, se
            informará del resultado a la persona que haya realizado la
            comunicación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunicationChannelPage;
