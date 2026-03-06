import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import bg1_1920 from "../paem-assets/backgrounds/bg-1-1920.avif";
import bg1_1600 from "../paem-assets/backgrounds/bg-1-1600.avif";
import bg1_1024 from "../paem-assets/backgrounds/bg-1-1024.avif";
import bg2_1920 from "../paem-assets/backgrounds/bg-2-1920.avif";
import bg2_1600 from "../paem-assets/backgrounds/bg-2-1600.avif";
import bg2_1024 from "../paem-assets/backgrounds/bg-2-1024.avif";
import bg3_1920 from "../paem-assets/backgrounds/bg-3-1920.avif";
import bg3_1600 from "../paem-assets/backgrounds/bg-3-1600.avif";
import bg3_1024 from "../paem-assets/backgrounds/bg-3-1024.avif";
import projectLm from "../paem-assets/backgrounds/project-lm.avif";
import emaPfp from "../assets/ema-pfp.avif";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import chartLineUpIcon from "../assets/icons/chart-line-up.svg";
import handshakeIcon from "../assets/icons/handshake.svg";
import medalIcon from "../assets/icons/medal.svg";

gsap.registerPlugin(ScrollTrigger);

const HomeIntro = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(".intro-char", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: "power4",
      });

      tl.to(".en-casa-wrap", {
        skewX: -14,
        x: -3,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(".en-casa-wrap", { skewX: -14, x: -3 });
        },
      });
    },
    { scope: container },
  );

  const renderChars = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block intro-char" style={{ opacity: 0 }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={container}
      className="relative w-full h-[100svh] md:h-[100dvh] bg-background flex flex-col justify-end p-6 md:p-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bg1_1600}
          srcSet={`
            ${bg1_1024} 1024w,
            ${bg1_1600} 1600w,
            ${bg1_1920} 1920w
          `}
          sizes="100vw"
          alt="Architecture Background"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      <div className="relative z-10 w-full h-full max-sm:mb-24 portrait:max-sm:mb-30 mb-5 flex flex-col justify-center landscape:max-lg:flex-row landscape:max-lg:justify-between sm:flex-row sm:justify-between items-center gap-1 md:gap-8 pb-12">
        <div className="max-w-7xl text-surface select-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl portrait:max-sm:text-4xl max-sm:text-center font-serif font-light max-w-xl leading-relaxed drop-shadow-md py-2 overflow-hidden">
            {renderChars("La vida comienza ")}
            <span className="inline-block en-casa-wrap origin-bottom-left">
              {renderChars("en casa")}
            </span>
            <span className="inline-block intro-char" style={{ opacity: 0 }}>
              .
            </span>
          </h1>
        </div>
        <a
          href="#contacto"
          className="inline-block px-10 py-5 bg-surface text-primary font-sans font-medium text-sm hover:bg-primary hover:text-surface transition-colors shadow-lg hover:shadow-xl"
        >
          Contactar
        </a>
      </div>
    </section>
  );
};

const HomeWelcome = () => (
  <section className="min-h-[100svh] md:min-h-[100dvh] py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
    <div className="grid grid-cols-1 w-full md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 flex flex-col justify-center">
        <h2 className="font-sans text-3xl md:text-5xl tracking-tight leading-tight mb-8">
          Te Damos La Bienvenida
        </h2>
        <p className="font-sans text-lg text-secondary mb-12 max-w-md leading-relaxed">
          PAEM Real Estate ofrece viviendas de calidad con plenas garantías y
          funcionalidad. Operamos con profesionales experimentados en el sector
          inmobiliario para asegurar el máximo rigor en cada proyecto.
        </p>
        <div>
          <span className="block font-mono text-xs text-secondary uppercase tracking-widest mb-2">
            Hablemos
          </span>
          <a
            href="tel:+34672730794"
            className="font-sans text-2xl w-fit border-b border-secondary/30 pb-2 hover:opacity-60 transition-opacity flex items-center gap-2"
          >
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            Agendar una llamada
          </a>
        </div>
      </div>
      <div className="md:col-span-7">
        <img
          src={bg2_1600}
          srcSet={`
            ${bg2_1024} 1024w,
            ${bg2_1600} 1600w,
            ${bg2_1920} 1920w
          `}
          sizes="(min-width: 1024px) 60vw, 100vw"
          alt="Architectural space"
          className="w-full h-auto aspect-[4/5] object-cover"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

const HomeWhoWeAre = () => (
  <section className="min-h-[100svh] md:min-h-[100dvh] w-full py-24 px-6 md:px-12 bg-primary text-surface flex flex-col justify-center">
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 landscape:max-lg:grid-cols-3 gap-12 md:gap-24">
      <div className="landscape:max-lg:col-span-1">
        <h2 className="font-sans text-4xl landscape:max-lg:text-2xl lg:text-6xl tracking-tight mb-8 leading-tight">
          Quiénes Somos
        </h2>
      </div>
      <div className="font-sans text-lg landscape:max-lg:text-base landscape:max-lg:col-span-2 lg:text-xl text-surface/80 leading-relaxed font-light">
        <p className="mb-6">
          Somos una firma inmobiliaria familiar especializada en la compra,
          reforma y posterior venta o alquiler de activos residenciales.
        </p>
        <p>
          Nuestro enfoque combina innovación, accesibilidad a la vivienda y una
          dilatada experiencia en construcción, buscando generar un impacto
          positivo constante en el mercado inmobiliario español.
        </p>
      </div>
    </div>
  </section>
);

const HomeValues = () => (
  <section className="relative w-full min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center p-6 text-center">
    <div className="absolute inset-0 z-0">
      <img
        src={bg3_1600}
        srcSet={`
          ${bg3_1024} 1024w,
          ${bg3_1600} 1600w,
          ${bg3_1920} 1920w
        `}
        sizes="100vw"
        alt="Structure detail"
        className="w-full h-full object-cover"
        decoding="async"
      />
      <div className="absolute inset-0 bg-background/90"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <span className="block font-mono text-xs uppercase tracking-widest text-secondary mb-12">
        Nuestros Valores
      </span>
      <h2 className="font-sans text-4xl landscape:max-lg:text-2xl md:text-6xl lg:text-7xl tracking-tighter leading-tight">
        Integridad,{" "}
        <span className="font-serif italic text-secondary">confianza</span>,
        esfuerzo personal y visión sostenible.
      </h2>
    </div>
  </section>
);

const HomeServices = () => {
  const services = [
    { num: "01", title: "Promoción Inmobiliaria" },
    { num: "02", title: "Rehabilitación Inmobiliaria" },
    { num: "03", title: "Alquiler de Viviendas" },
    { num: "04", title: "Venta de Viviendas" },
  ];
  return (
    <section className="min-h-[100svh] md:min-h-[100dvh] w-full py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border flex flex-col justify-center">
      <div className="mb-16">
        <h2 className="font-sans text-3xl landscape:max-lg:text-3xl md:text-5xl tracking-tight">
          Servicios Generales
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 landscape:max-lg:grid-cols-4 max-lg:gap-x-4 max-lg:gap-y-8">
        {services.map((s, i) => (
          <div key={i} className="flex gap-8 group">
            <span className="font-mono text-2xl landscape:max-lg:text-lg text-secondary group-hover:text-primary transition-colors">
              {s.num}
            </span>
            <div className="border-t border-primary pt-2 w-full">
              <h3 className="font-sans text-2xl landscape:max-lg:text-base md:text-3xl tracking-tight mt-2">
                {s.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const HomeOfferings = () => (
  <section className="min-h-[100svh] md:min-h-[100dvh] w-full py-24 px-6 md:px-12 bg-background border-t border-border flex flex-col justify-center">
    <div className="max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 landscape:max-lg:grid-cols-3 gap-12 md:gap-8">
        <div className="flex flex-col h-full border-l border-border pl-6">
          <span className="font-mono text-xs uppercase tracking-widest text-secondary mb-16 block">
            Misión
          </span>
          <div className="flex items-start gap-4">
            <h3 className="font-sans text-2xl portrait:max-sm:text-lg landscape:max-lg:text-base md:text-3xl tracking-tight leading-tight">
              Maximizar el valor del entorno construido mediante actuación
              responsable.
            </h3>
            <img
              src={chartLineUpIcon}
              alt="Chart Line Up"
              className="w-8 h-8 portrait:max-sm:w-6 portrait:max-sm:h-6 landscape:max-lg:w-6 landscape:max-lg:h-6 transition-all duration-300 group-hover:brightness-0"
            />
          </div>
        </div>
        <div className="flex flex-col h-full border-l border-border pl-6">
          <span className="font-mono text-xs uppercase tracking-widest text-secondary mb-16 block">
            Valores
          </span>
          <div className="flex items-start gap-4">
            <h3 className="font-sans text-2xl portrait:max-sm:text-lg landscape:max-lg:text-base md:text-3xl tracking-tight leading-tight">
              Trasparencia total, ejecución impecable, análisis riguroso de cada
              activo.
            </h3>
            <img
              src={handshakeIcon}
              alt="Handshake"
              className="w-8 h-8 portrait:max-sm:w-6 portrait:max-sm:h-6 landscape:max-lg:w-6 landscape:max-lg:h-6 transition-all duration-300 group-hover:brightness-0"
            />
          </div>
        </div>
        <div className="flex flex-col h-full border-l border-border pl-6">
          <span className="font-mono text-xs uppercase tracking-widest text-secondary mb-16 block">
            Visión
          </span>
          <div className="flex items-start gap-4">
            <h3 className="font-sans text-2xl portrait:max-sm:text-lg landscape:max-lg:text-base md:text-3xl tracking-tight leading-tight">
              Ser un referente de arquitectura y rentabilidad estructural en
              España.
            </h3>
            <img
              src={medalIcon}
              alt="Medal"
              className="w-8 h-8 portrait:max-sm:w-6 portrait:max-sm:h-6 landscape:max-lg:w-6 landscape:max-lg:h-6 transition-all duration-300 group-hover:brightness-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomeTeam = () => (
  <section className="min-h-[100svh] md:min-h-[100dvh] w-full py-24 px-6 md:px-12 text-center max-w-7xl mx-auto border-t border-border flex flex-col justify-center items-center">
    <div className="mb-20 w-full">
      <h2 className="font-sans text-3xl md:text-5xl tracking-tight">
        Nuestro Equipo
      </h2>
    </div>
    <div className="inline-flex flex-col items-center">
      <div className="w-64 h-80 mb-8 overflow-hidden bg-border">
        <img
          src={emaPfp}
          alt="Emma Huszak"
          className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="font-sans text-2xl tracking-tight">Emma Huszak</h3>
      <p className="font-mono text-xs uppercase tracking-widest text-secondary mt-2">
        CEO
      </p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/emma-huszak"
        aria-label="Emma Huszak LinkedIn Profile"
        className="hover:opacity-60 transition-opacity group mt-4"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          className="w-6 h-6 transition-all duration-300 group-hover:brightness-0"
        />
      </a>
    </div>
  </section>
);

const HomeProjectPreview = () => (
  <section className="min-h-[100svh] md:min-h-[100dvh] w-full py-24 px-6 md:px-12 bg-background border-t border-border flex flex-col justify-center">
    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-12 items-end justify-between mb-12">
      <h2 className="font-sans text-3xl md:text-5xl tracking-tight">
        Proyecto Destacado
      </h2>
      <Link
        to="/proyectos"
        className="font-mono text-sm uppercase tracking-widest hover:opacity-60 hover:italic transition-opacity border-b border-primary pb-1"
      >
        Ver todos los proyectos
      </Link>
    </div>
    <div className="max-w-7xl w-full mx-auto group">
      <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-border mb-6">
        <img
          src={projectLm}
          alt="La Muela Project"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-sans text-3xl md:text-4xl tracking-tight">
            La Muela
          </h3>
          <p className="font-sans text-secondary mt-2">Zaragoza</p>
        </div>
        <Link
          to="/proyectos/la-muela"
          className="px-8 py-4 bg-primary text-surface font-sans text-sm hover:opacity-80 transition-opacity"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  </section>
);

const HomeContact = () => (
  <section
    id="contacto"
    className="min-h-[100svh] md:min-h-[100dvh] w-full py-32 md:py-48 px-6 md:px-12 bg-primary text-surface text-center flex flex-col justify-center"
  >
    <h2 className="font-sans text-4xl md:text-7xl tracking-tighter mb-20 leading-none">
      Iniciemos un diálogo.
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans text-xl md:text-3xl font-light">
      <a
        href="tel:+34672730794"
        className="hover:opacity-60 transition-opacity border-b border-surface/30 pb-2 flex items-center gap-2"
      >
        <img src={phoneIcon} alt="Phone" className="w-6 h-6 invert" />
        +34 672 730 794
      </a>
      <span className="hidden md:block opacity-30">/</span>
      <a
        href="mailto:contacto@paem.es"
        className="hover:opacity-60 transition-opacity border-b border-surface/30 pb-2 flex items-center gap-2"
      >
        <img src={mailIcon} alt="Mail" className="w-6 h-6 invert" />
        contacto@paem.es
      </a>
    </div>
  </section>
);

export default function HomePage() {
  const container = useRef(null);

  useGSAP(
    () => {
      const setup = () => {
        const sections = gsap.utils.toArray(".gsap-section");
        sections.forEach((section, i) => {
          if (i !== sections.length - 1) {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              pin: true,
              pinSpacing: false,
            });
          }
        });
      };
      requestAnimationFrame(() => requestAnimationFrame(setup));
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative w-full">
      <div className="relative z-[1] w-full bg-background">
        <HomeIntro />
      </div>
      <div className="relative z-[2] w-full bg-background">
        <HomeWelcome />
      </div>
      <div className="gsap-section relative z-[3] w-full bg-primary">
        <HomeWhoWeAre />
      </div>
      <div className="gsap-section relative z-[4] w-full bg-background">
        <HomeValues />
      </div>
      <div className="gsap-section relative z-[5] w-full bg-background">
        <HomeServices />
      </div>
      <div className="gsap-section relative z-[6] w-full bg-background">
        <HomeOfferings />
      </div>
      <div className="gsap-section relative z-[7] w-full bg-background">
        <HomeTeam />
      </div>
      <div className="relative z-[8] w-full bg-background">
        <HomeProjectPreview />
      </div>
      <div className="relative z-[9] w-full bg-primary">
        <HomeContact />
      </div>
    </div>
  );
}
