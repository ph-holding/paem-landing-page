import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import bg1_1920 from "../assets/images/bg/bg-1-1920.avif";
import bg1_1600 from "../assets/images/bg/bg-1-1600.avif";
import bg1_1024 from "../assets/images/bg/bg-1-1024.avif";
import bg2_1920 from "../assets/images/bg/bg-2-1920.avif";
import bg2_1600 from "../assets/images/bg/bg-2-1600.avif";
import bg2_1024 from "../assets/images/bg/bg-2-1024.avif";
import bg3_1920 from "../assets/images/bg/bg-3-1920.avif";
import bg3_1600 from "../assets/images/bg/bg-3-1600.avif";
import bg3_1024 from "../assets/images/bg/bg-3-1024.avif";
import projectLm from "../assets/images/projects/la-muela/lm-landscape.avif";
import emaPfp from "../assets/images/people/ema-pfp.avif";
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
      if (
        window.matchMedia(
          "((max-width: 767px) and (orientation: portrait)) or ((max-height: 450px) and (orientation: landscape))",
        ).matches
      ) {
        // Keep intro text visible when animation is disabled on small screens.
        gsap.set(".intro-char", { opacity: 1, x: 0 });
        gsap.set(".en-casa-wrap", { skewX: -14, x: -3 });
        return;
      }

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
      <span key={i} className="intro-char inline-block" style={{ opacity: 0 }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={container}
      className="relative flex h-[100svh] w-full flex-col justify-end overflow-hidden bg-background p-6 md:h-[100dvh] md:p-12"
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
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      <div className="relative z-10 mb-5 flex h-full w-full flex-col items-center justify-center gap-1 pb-12 max-sm:mb-24 sm:flex-row sm:justify-between md:gap-8 portrait:max-sm:mb-30 landscape:max-lg:flex-row landscape:max-lg:justify-between">
        <div className="max-w-7xl select-none text-surface">
          <h1 className="max-w-xl overflow-hidden py-2 font-serif text-2xl font-light leading-relaxed drop-shadow-md max-sm:text-center sm:text-3xl md:text-4xl lg:text-5xl portrait:max-sm:text-4xl">
            {renderChars("La vida comienza ")}
            <span className="en-casa-wrap inline-block origin-bottom-left">
              {renderChars("en casa")}
            </span>
            <span className="intro-char inline-block" style={{ opacity: 0 }}>
              .
            </span>
          </h1>
        </div>
        <a
          href="#contacto"
          className="inline-block bg-surface px-10 py-5 font-sans text-sm font-medium text-primary shadow-lg transition-colors hover:bg-primary hover:text-surface hover:shadow-xl"
        >
          Contactar
        </a>
      </div>
    </section>
  );
};

const HomeWelcome = () => (
  <section className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 py-24 md:min-h-[100dvh] md:px-12">
    <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12">
      <div className="flex flex-col justify-center md:col-span-5">
        <h2 className="mb-8 font-sans text-3xl leading-tight tracking-tight md:text-5xl">
          Te Damos La Bienvenida
        </h2>
        <p className="mb-12 max-w-md font-sans text-lg leading-relaxed text-secondary">
          PAEM Real Estate ofrece viviendas de calidad con plenas garantías y
          funcionalidad. Operamos con profesionales experimentados en el sector
          inmobiliario para asegurar el máximo rigor en cada proyecto.
        </p>
        <div>
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-secondary">
            Hablemos
          </span>
          <a
            href="tel:+34672730794"
            className="flex w-fit items-center gap-2 border-b border-secondary/30 pb-2 font-sans text-2xl transition-opacity hover:opacity-60"
          >
            <img src={phoneIcon} alt="Phone" className="h-5 w-5" />
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
          className="aspect-[4/5] h-auto w-full object-cover"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

const HomeWhoWeAre = () => (
  <section className="flex min-h-[100svh] w-full flex-col justify-center bg-primary px-6 py-24 text-surface md:min-h-[100dvh] md:px-12">
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 landscape:max-lg:grid-cols-3">
      <div className="landscape:max-lg:col-span-1">
        <h2 className="mb-8 font-sans text-4xl leading-tight tracking-tight lg:text-6xl landscape:max-lg:text-2xl">
          Quiénes Somos
        </h2>
      </div>
      <div className="font-sans text-lg font-light leading-relaxed text-surface/80 lg:text-xl landscape:max-lg:col-span-2 landscape:max-lg:text-base">
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
  <section className="relative flex min-h-[100svh] w-full items-center justify-center p-6 text-center md:min-h-[100dvh]">
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
        className="h-full w-full object-cover"
        decoding="async"
      />
      <div className="absolute inset-0 bg-background/90"></div>
    </div>
    <div className="relative z-10 mx-auto max-w-4xl">
      <span className="mb-12 block font-mono text-xs uppercase tracking-widest text-secondary">
        Nuestros Valores
      </span>
      <h2 className="font-sans text-4xl leading-tight tracking-tighter md:text-6xl lg:text-7xl landscape:max-lg:text-2xl">
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
    <section className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center border-t border-border px-6 py-24 md:min-h-[100dvh] md:px-12">
      <div className="mb-16">
        <h2 className="font-sans text-3xl tracking-tight md:text-5xl landscape:max-lg:text-3xl">
          Servicios Generales
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 max-lg:gap-x-4 max-lg:gap-y-8 md:grid-cols-2 landscape:max-lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="group flex gap-8">
            <span className="font-mono text-2xl text-secondary transition-colors group-hover:text-primary landscape:max-lg:text-lg">
              {s.num}
            </span>
            <div className="w-full border-t border-primary pt-2">
              <h3 className="mt-2 font-sans text-2xl tracking-tight md:text-3xl landscape:max-lg:text-base">
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
  <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-border bg-background px-6 py-24 md:min-h-[100dvh] md:px-12">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-3 landscape:max-lg:grid-cols-3">
        <div className="flex h-full flex-col border-l border-border pl-6">
          <span className="mb-16 block font-mono text-xs uppercase tracking-widest text-secondary">
            Misión
          </span>
          <div className="flex items-start gap-4">
            <h3 className="font-sans text-2xl leading-tight tracking-tight md:text-3xl portrait:max-sm:text-lg landscape:max-lg:text-base">
              Maximizar el valor del entorno construido mediante actuación
              responsable.
            </h3>
            <img
              src={chartLineUpIcon}
              alt="Chart Line Up"
              className="h-8 w-8 transition-all duration-300 group-hover:brightness-0 portrait:max-sm:h-6 portrait:max-sm:w-6 landscape:max-lg:h-6 landscape:max-lg:w-6"
            />
          </div>
        </div>
        <div className="flex h-full flex-col border-l border-border pl-6">
          <span className="mb-16 block font-mono text-xs uppercase tracking-widest text-secondary">
            Valores
          </span>
          <div className="flex items-start gap-4">
            <h3 className="font-sans text-2xl leading-tight tracking-tight md:text-3xl portrait:max-sm:text-lg landscape:max-lg:text-base">
              Trasparencia total, ejecución impecable, análisis riguroso de cada
              activo.
            </h3>
            <img
              src={handshakeIcon}
              alt="Handshake"
              className="h-8 w-8 transition-all duration-300 group-hover:brightness-0 portrait:max-sm:h-6 portrait:max-sm:w-6 landscape:max-lg:h-6 landscape:max-lg:w-6"
            />
          </div>
        </div>
        <div className="flex h-full flex-col border-l border-border pl-6">
          <span className="mb-16 block font-mono text-xs uppercase tracking-widest text-secondary">
            Visión
          </span>
          <div className="flex items-start gap-4">
            <h3 className="font-sans text-2xl leading-tight tracking-tight md:text-3xl portrait:max-sm:text-lg landscape:max-lg:text-base">
              Ser un referente de arquitectura y rentabilidad estructural en
              España.
            </h3>
            <img
              src={medalIcon}
              alt="Medal"
              className="h-8 w-8 transition-all duration-300 group-hover:brightness-0 portrait:max-sm:h-6 portrait:max-sm:w-6 landscape:max-lg:h-6 landscape:max-lg:w-6"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomeTeam = () => (
  <section className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col items-center justify-center border-t border-border px-6 py-24 text-center md:min-h-[100dvh] md:px-12">
    <div className="mb-20 w-full">
      <h2 className="font-sans text-3xl tracking-tight md:text-5xl">
        Nuestro Equipo
      </h2>
    </div>
    <div className="inline-flex flex-col items-center">
      <div className="mb-8 h-80 w-64 overflow-hidden bg-border">
        <img
          src={emaPfp}
          alt="Emma Huszak"
          className="h-full w-full object-cover opacity-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="font-sans text-2xl tracking-tight">Emma Huszak</h3>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-secondary">
        CEO
      </p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/emma-huszak"
        aria-label="Emma Huszak LinkedIn Profile"
        className="group mt-4 transition-opacity hover:opacity-60"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          className="h-6 w-6 transition-all duration-300 group-hover:brightness-0"
        />
      </a>
    </div>
  </section>
);

const HomeProjectPreview = () => (
  <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-border bg-background px-6 py-24 md:min-h-[100dvh] md:px-12">
    <div className="mx-auto mb-12 flex w-full max-w-7xl flex-col items-end justify-between gap-12 md:flex-row">
      <h2 className="font-sans text-3xl tracking-tight md:text-5xl">
        Proyecto Destacado
      </h2>
      <Link
        to="/proyectos"
        className="border-b border-primary pb-1 font-mono text-sm uppercase tracking-widest transition-opacity hover:italic hover:opacity-60"
      >
        Ver todos los proyectos
      </Link>
    </div>
    <div className="group mx-auto w-full max-w-7xl">
      <div className="relative mb-6 aspect-video w-full overflow-hidden bg-border md:aspect-[21/9]">
        <img
          src={projectLm}
          alt="La Muela Project"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-sans text-3xl tracking-tight md:text-4xl">
            La Muela
          </h3>
          <p className="mt-2 font-sans text-secondary">Zaragoza</p>
        </div>
        <Link
          to="/proyectos/la-muela"
          className="bg-primary px-8 py-4 font-sans text-sm text-surface transition-opacity hover:opacity-80"
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
    className="flex min-h-[100svh] w-full flex-col justify-center bg-primary px-6 py-32 text-center text-surface md:min-h-[100dvh] md:px-12 md:py-48"
  >
    <h2 className="mb-20 font-sans text-4xl leading-none tracking-tighter md:text-7xl">
      Iniciemos un diálogo.
    </h2>
    <div className="flex flex-col items-center justify-center gap-12 font-sans text-xl font-light md:flex-row md:text-3xl">
      <a
        href="tel:+34672730794"
        className="flex items-center gap-2 border-b border-surface/30 pb-2 transition-opacity hover:opacity-60"
      >
        <img src={phoneIcon} alt="Phone" className="h-6 w-6 invert" />
        +34 672 730 794
      </a>
      <span className="hidden opacity-30 md:block">/</span>
      <a
        href="mailto:contacto@paem.es"
        className="flex items-center gap-2 border-b border-surface/30 pb-2 transition-opacity hover:opacity-60"
      >
        <img src={mailIcon} alt="Mail" className="h-6 w-6 invert" />
        contacto@paem.es
      </a>
    </div>
  </section>
);

export default function HomePage() {
  const container = useRef(null);

  useGSAP(
    () => {
      if (
        window.matchMedia(
          "((max-width: 767px) and (orientation: portrait)) or ((max-height: 450px) and (orientation: landscape))",
        ).matches
      )
        return;

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
