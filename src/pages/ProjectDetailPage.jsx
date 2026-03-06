import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import lmImg1 from "../paem-assets/projects/la-muela/img-01.avif";
import lmImg3 from "../paem-assets/projects/la-muela/img-03.avif";
import lmImg4 from "../paem-assets/projects/la-muela/img-04.avif";
import lmImg6 from "../paem-assets/projects/la-muela/img-06.avif";
import lmImgType1 from "../paem-assets/projects/la-muela/plm-01.avif";
import lmImgType2 from "../paem-assets/projects/la-muela/plm-02.avif";
import lmImgType3 from "../paem-assets/projects/la-muela/plm-03.avif";
import lmImgType4 from "../paem-assets/projects/la-muela/plm-04.avif";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailPage = () => {
  const galleryRef = useRef(null);

  useGSAP(
    () => {
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
    },
    { scope: galleryRef },
  );

  return (
    <div className="bg-background">
      {/* Intro Hero */}
      <div className="relative w-full h-[80svh] md:h-[80dvh] pt-32 pb-12 px-6 md:px-12 flex items-end">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end z-10 relative">
          <h1 className="font-sans text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-none mb-6 text-primary">
            La Muela
          </h1>
          <div className="font-mono text-sm uppercase text-secondary tracking-widest mb-4">
            Zaragoza
          </div>
        </div>
      </div>

      {/* Project Description Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase text-secondary mb-4">
              Contexto
            </div>
            <div className="font-sans text-sm text-primary/80 border-t border-border pt-4">
              Desarrollo de nuevas tipologías residenciales enfocadas en
              maximizar espacio y luz.
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-2xl md:text-4xl leading-snug tracking-tight font-light">
              Desarrollo residencial de 37 viviendas ubicado cerca de Zaragoza,
              con múltiples tipologías que van desde estudios hasta apartamentos
              dúplex de varios dormitorios.
            </p>
          </div>
        </div>
      </div>

      {/* Big Image Gallery */}
      <div ref={galleryRef} className="w-full px-6 md:px-12 pb-24 md:pb-40">
        <div className="max-w-[100rem] mx-auto grid grid-cols-1 gap-6 md:gap-12">
          <div className="gallery-reveal-item w-full aspect-video overflow-hidden">
            <div className="gallery-reveal-box w-full h-full origin-center overflow-hidden">
              <img
                src={lmImg1}
                alt="Balcony view"
                className="gallery-reveal-img w-full h-full aspect-video object-cover origin-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="gallery-reveal-item w-full aspect-[4/5] md:aspect-square overflow-hidden">
              <div className="gallery-reveal-box w-full h-full origin-center overflow-hidden">
                <img
                  src={lmImg6}
                  alt="Outdoor view"
                  className="gallery-reveal-img w-full h-full aspect-[4/5] md:aspect-square object-cover origin-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="gallery-reveal-item w-full aspect-[4/5] md:aspect-square overflow-hidden">
              <div className="gallery-reveal-box w-full h-full origin-center overflow-hidden">
                <img
                  src={lmImg3}
                  alt="Living room"
                  className="gallery-reveal-img w-full h-full aspect-[4/5] md:aspect-square object-cover origin-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div className="gallery-reveal-item w-full aspect-[21/9] overflow-hidden">
            <div className="gallery-reveal-box w-full h-full origin-center overflow-hidden">
              <img
                src={lmImg4}
                alt="Terrace view"
                className="gallery-reveal-img w-full h-full aspect-[21/9] object-cover origin-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Apartment Types */}
      <div className="bg-primary text-surface py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sans text-4xl md:text-6xl tracking-tight mb-20 border-b border-surface/20 pb-12">
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
                className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
              >
                <div className="md:col-span-4 border-t border-surface/20 pt-6">
                  <span className="font-mono text-sm text-secondary block mb-4">
                    {type.tag} / TIPO
                  </span>
                  <h3 className="font-sans text-3xl font-medium tracking-tight mb-4">
                    {type.title}
                  </h3>
                  <p className="font-sans text-surface/70 font-light">
                    {type.desc}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <img
                    src={type.img}
                    alt={type.title}
                    className="w-full grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700 object-cover aspect-video"
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

