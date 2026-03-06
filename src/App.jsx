import React, { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import linkedinIcon from "./assets/icons/linkedin.svg";
import facebookIcon from "./assets/icons/facebook.svg";
import arrowUpIcon from "./assets/icons/arrow-up.svg";

// Lazy-loaded route pages (HomePage includes GSAP + home-only assets to reduce main bundle)
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
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
        aria-label="PAEM Real Estate Logo"
        title="PAEM Real Estate Logo"
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

// Main App Container
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NoiseOverlay />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={null}>
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
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
