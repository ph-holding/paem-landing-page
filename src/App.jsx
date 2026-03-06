import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Import local assets from the backgrounds folder
import bg1_1920 from "./paem-assets/backgrounds/bg-1-1920.avif";
import bg1_1600 from "./paem-assets/backgrounds/bg-1-1600.avif";
import bg1_1024 from "./paem-assets/backgrounds/bg-1-1024.avif";

import bg2_1920 from "./paem-assets/backgrounds/bg-2-1920.avif";
import bg2_1600 from "./paem-assets/backgrounds/bg-2-1600.avif";
import bg2_1024 from "./paem-assets/backgrounds/bg-2-1024.avif";

import bg3_1920 from "./paem-assets/backgrounds/bg-3-1920.avif";
import bg3_1600 from "./paem-assets/backgrounds/bg-3-1600.avif";
import bg3_1024 from "./paem-assets/backgrounds/bg-3-1024.avif";

import projectLm from "./paem-assets/backgrounds/project-lm.avif";
import emaPfp from "./assets/ema-pfp.avif";
import linkedinIcon from "./assets/icons/linkedin.svg";
import facebookIcon from "./assets/icons/facebook.svg";
import phoneIcon from "./assets/icons/phone.svg";
import mailIcon from "./assets/icons/mail.svg";
import arrowUpIcon from "./assets/icons/arrow-up.svg";
import chartLineUpIcon from "./assets/icons/chart-line-up.svg";
import handshakeIcon from "./assets/icons/handshake.svg";
import medalIcon from "./assets/icons/medal.svg";

// Lazy-loaded route pages
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage.jsx"));
const TermsPage = lazy(() => import("./pages/TermsPage.jsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.jsx"));
const CookiesPolicyPage = lazy(() => import("./pages/CookiesPolicyPage.jsx"));
const CommunicationChannelPage = lazy(
  () => import("./pages/CommunicationChannelPage.jsx"),
);

// Helper component to scroll to top on route change (or to hash target when present)
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToEl = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      };
      // Defer so the target route has mounted and #contacto exists in the DOM
      const t = setTimeout(scrollToEl, 100);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

// Global Components
const LogoIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 742 826"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    fill="currentColor"
  >
    <g transform="translate(0,826) scale(0.1,-0.1)">
      <path d="M4929 8217 c-35 -23 -107 -74 -159 -112 -52 -38 -158 -113 -235 -167 -77 -55 -163 -116 -191 -136 -27 -20 -115 -83 -195 -139 -79 -56 -217 -155 -306 -220 -190 -138 -407 -293 -548 -392 -55 -39 -137 -98 -182 -131 -45 -33 -84 -60 -87 -60 -3 0 -6 178 -6 395 l0 395 -480 0 -480 0 0 -740 0 -739 -52 -39 c-29 -21 -82 -59 -118 -83 -36 -25 -132 -94 -215 -154 -297 -215 -521 -377 -575 -414 -69 -47 -295 -209 -510 -365 -242 -175 -425 -308 -513 -372 l-77 -57 0 -2343 0 -2344 1205 0 1205 0 0 1814 0 1814 47 41 c50 43 91 72 433 315 113 80 277 197 365 261 88 64 199 144 248 178 48 34 102 72 120 85 216 155 512 366 562 402 35 25 115 81 177 126 62 44 151 107 198 140 47 32 108 76 136 99 109 86 281 203 302 204 9 1 12 -386 12 -1904 l0 -1905 -800 0 -800 0 0 -835 0 -835 2005 0 2005 0 0 1733 0 1733 -47 45 c-27 25 -64 58 -83 73 -19 16 -64 54 -100 86 -36 31 -103 88 -150 126 -47 37 -135 111 -196 164 -61 52 -155 131 -209 175 -53 44 -176 148 -273 230 -98 83 -280 236 -406 340 -126 105 -255 213 -286 240 -31 28 -105 91 -165 140 -59 50 -135 114 -169 143 -34 29 -116 98 -183 154 -68 55 -123 105 -123 110 0 5 -4 6 -10 3 -7 -4 -10 458 -10 1379 0 776 -4 1386 -9 1386 -4 0 -37 -19 -72 -43z" />
    </g>
  </svg>
);

const NoiseOverlay = () => (
  <svg
    className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let threshold = window.innerHeight * 0.6;
    const handleResize = () => {
      threshold = window.innerHeight * 0.6;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > threshold);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    onScroll(); // Initialize status

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 inline-flex items-center justify-center p-5 bg-surface text-primary font-sans font-medium text-sm hover:bg-primary hover:text-surface transition-all duration-500 shadow-xl group cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
      aria-label="Volver arriba"
    >
      <img
        src={arrowUpIcon}
        alt="Scroll to top"
        className="w-4 h-4 transition-all duration-300 group-hover:invert"
      />
    </button>
  );
};

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const scrollToContacto = (e) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:py-6 font-sans text-surface bg-primary/10 backdrop-blur-md border-b border-surface/10 transition-all duration-300">
      <Link
        to="/"
        className="flex items-center gap-2 text-xl text-surface font-bold tracking-tighter hover:opacity-60 transition-opacity"
      >
        <LogoIcon className="w-4 h-4 fill-current" />
        <span className="md:block hidden">PAEM Real Estate</span>
      </Link>
      <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-white">
        <Link to="/proyectos" className="hover:opacity-60 transition-opacity">
          Proyectos
        </Link>
        {isHome ? (
          <a
            href="#contacto"
            onClick={scrollToContacto}
            className="hover:opacity-60 transition-opacity"
          >
            Contacto
          </a>
        ) : (
          <Link to="/#contacto" className="hover:opacity-60 transition-opacity">
            Contacto
          </Link>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <p className="flex flex-col lg:flex-row items-start lg:items-center gap-2 font-sans font-semibold tracking-tight text-xl mb-2">
            <span className="md:block">
              © {new Date().getFullYear()} PAEM Real Estate.
            </span>
            <span className="md:block">Todos los derechos reservados.</span>
          </p>
          <a
            target="_blank"
            href="https://maps.app.goo.gl/JiZkSsgzseuiE24v6"
            className="font-mono hover:text-primary transition-colors text-secondary text-sm"
          >
            Zaragoza, España
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 font-sans text-sm text-secondary">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
            <a
              target="_blank"
              href="https://www.facebook.com/PAEMrealestate"
              aria-label="PAEM Real Estate Facebook Page"
              className="hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-4 h-4 transition-all duration-300 group-hover:brightness-0"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/paemrealestate"
              aria-label="PAEM Real Estate LinkedIn Profile"
              className="hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-4 h-4 transition-all duration-300 group-hover:brightness-0"
              />
            </a>
            <Link
              to="/terminos-condiciones"
              className="hover:text-primary transition-colors"
            >
              Términos & Condiciones
            </Link>
            <Link
              to="/politica-privacidad"
              className="hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <Link
              to="/politica-cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </Link>
            <Link
              to="/canal-comunicacion"
              className="hover:text-primary transition-colors"
            >
              Canal de Comunicación
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page Blocks
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
          src={bg1_1600} // reasonable default
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
      <div className="relative z-10 w-full h-full max-sm:mb-24 portrait:max-sm:mb-24 mb-5 flex flex-col justify-center landscape:max-lg:flex-row landscape:max-lg:justify-between sm:flex-row sm:justify-between items-center gap-1 md:gap-8 pb-12">
        <div className="max-w-7xl text-surface select-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light max-w-xl leading-relaxed drop-shadow-md py-2 overflow-hidden">
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
          src={bg2_1600} // reasonable default
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
        src={bg3_1600} // reasonable default
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
        {/* Fallback image if no local portrait exists */}
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

// (Project detail page moved to `src/pages/ProjectDetailPage.jsx`)

const HomePage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".gsap-section");
      sections.forEach((section, i) => {
        // Pin every section except the last one so they stack over each other
        if (i !== sections.length - 1) {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
          });
        }
      });
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
};

// (Legal pages moved to `src/pages` for lazy loading)

// (Cookies policy and communication channel pages moved to `src/pages` for lazy loading)

// Main App Container
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NoiseOverlay />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/proyectos/la-muela" element={<ProjectDetailPage />} />
            <Route path="/terminos-condiciones" element={<TermsPage />} />
            <Route
              path="/politica-privacidad"
              element={<PrivacyPolicyPage />}
            />
            <Route path="/politica-cookies" element={<CookiesPolicyPage />} />
            <Route
              path="/canal-comunicacion"
              element={<CommunicationChannelPage />}
            />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
