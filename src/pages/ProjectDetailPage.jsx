import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import lmImg1 from "../assets/images/projects/la-muela/img-01.avif";
import lmImg3 from "../assets/images/projects/la-muela/img-03.avif";
import lmImg4 from "../assets/images/projects/la-muela/img-04.avif";
import lmImg6 from "../assets/images/projects/la-muela/img-06.avif";
import lmImgType1 from "../assets/images/projects/la-muela/plm-01.avif";
import lmImgType2 from "../assets/images/projects/la-muela/plm-02.avif";
import lmImgType3 from "../assets/images/projects/la-muela/plm-03.avif";
import lmImgType4 from "../assets/images/projects/la-muela/plm-04.avif";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailPage = () => {
  const galleryRef = useRef(null);

  useGSAP(
    () => {
      const setup = () => {
        const items = gsap.utils.toArray(".gallery-reveal-item");
        items.forEach((item) => {
          const box = item.querySelector(".gallery-reveal-box");
          const img = item.querySelector(".gallery-reveal-img");
          if (!box || !img) return;

          gsap.set(box, { scale: 0.9 });
          gsap.set(img, { opacity: 0, scale: 2, filter: "blur(8px)" });

          gsap.to(box, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "top 28%",
              scrub: 0.8,
              duration: 0.5,
            },
          });

          gsap.to(img, {
            opacity: 1,
            scale: 1,
            ease: "none",
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "top 28%",
              scrub: 0.8,
              duration: 0.5,
            },
          });
        });
      };
      // Defer layout reads until after paint to avoid forced reflow with React updates
      requestAnimationFrame(() => requestAnimationFrame(setup));
    },
    { scope: galleryRef },
  );

  return (
    <div className="bg-background">
      {/* Intro Hero */}
      <div className="relative flex h-[80svh] w-full items-end px-6 pb-12 pt-32 md:h-[80dvh] md:px-12">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-end justify-between md:flex-row">
          <h1 className="mb-6 font-sans text-6xl leading-none tracking-tighter text-primary md:text-8xl lg:text-[10rem]">
            La Muela
          </h1>
          <div className="mb-4 font-mono text-sm uppercase tracking-widest text-secondary">
            Zaragoza
          </div>
        </div>
      </div>

      {/* Project Description Block */}
      <div className="mx-auto max-w-7xl border-t border-border px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-4 font-mono text-xs uppercase text-secondary">
              Contexto
            </div>
            <div className="border-t border-border pt-4 font-sans text-sm text-primary/80">
              Desarrollo de nuevas tipologías residenciales enfocadas en
              maximizar espacio y luz.
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-2xl font-light leading-snug tracking-tight md:text-4xl">
              Desarrollo residencial de 37 viviendas ubicado cerca de Zaragoza,
              con múltiples tipologías que van desde estudios hasta apartamentos
              dúplex de varios dormitorios.
            </p>
          </div>
        </div>
      </div>

      {/* Big Image Gallery */}
      <div ref={galleryRef} className="w-full px-6 pb-24 md:px-12 md:pb-40">
        <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-6 md:gap-12">
          <div className="gallery-reveal-item aspect-video w-full overflow-hidden">
            <div className="gallery-reveal-box h-full w-full origin-center overflow-hidden">
              <img
                src={lmImg1}
                alt="Balcony view"
                className="gallery-reveal-img aspect-video h-full w-full origin-center object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            <div className="gallery-reveal-item aspect-[4/5] w-full overflow-hidden md:aspect-square">
              <div className="gallery-reveal-box h-full w-full origin-center overflow-hidden">
                <img
                  src={lmImg6}
                  alt="Outdoor view"
                  className="gallery-reveal-img aspect-[4/5] h-full w-full origin-center object-cover md:aspect-square"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="gallery-reveal-item aspect-[4/5] w-full overflow-hidden md:aspect-square">
              <div className="gallery-reveal-box h-full w-full origin-center overflow-hidden">
                <img
                  src={lmImg3}
                  alt="Living room"
                  className="gallery-reveal-img aspect-[4/5] h-full w-full origin-center object-cover md:aspect-square"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div className="gallery-reveal-item aspect-[21/9] w-full overflow-hidden">
            <div className="gallery-reveal-box h-full w-full origin-center overflow-hidden">
              <img
                src={lmImg4}
                alt="Terrace view"
                className="gallery-reveal-img aspect-[21/9] h-full w-full origin-center object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Apartment Types */}
      <div className="bg-primary px-6 py-24 text-surface md:px-12 md:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 border-b border-surface/20 pb-12 font-sans text-4xl tracking-tight md:text-6xl">
            Tipologías
          </h2>
          <div className="grid grid-cols-1 gap-24">
            {[
              {
                tag: "01",
                title: "Estudio",
                desc: "Espacio fluido con iluminación máxima y distribución eficiente.",
                img: lmImgType1,
              },
              {
                tag: "02",
                title: "Estándar",
                desc: "Programa arquitectónico completo, ideal para uso residencial convencional.",
                img: lmImgType2,
              },
              {
                tag: "03",
                title: "Dúplex 2 dormitorios",
                desc: "Doble altura, separación clara entre zona de día y zona de noche.",
                img: lmImgType3,
              },
              {
                tag: "04",
                title: "Full Dúplex 3 dormitorios",
                desc: "La superficie máxima, con amplitud estructural y acabados premium.",
                img: lmImgType4,
              },
            ].map((type, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 items-start gap-12 md:grid-cols-12"
              >
                <div className="border-t border-surface/20 pt-6 md:col-span-4">
                  <span className="mb-4 block font-mono text-sm text-secondary">
                    {type.tag} / TIPO
                  </span>
                  <h3 className="mb-4 font-sans text-3xl font-medium tracking-tight">
                    {type.title}
                  </h3>
                  <p className="font-sans font-light text-surface/70">
                    {type.desc}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <img
                    src={type.img}
                    alt={type.title}
                    className="aspect-video w-full object-cover opacity-80 mix-blend-luminosity grayscale transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
