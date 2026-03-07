import React from "react";
import { Link } from "react-router-dom";
import projectLm from "../assets/images/projects/la-muela/lm-landscape.avif";

const ProjectsPage = () => (
  <div className="min-h-[80vh] pt-32">
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-24">
      <h1 className="mb-24 font-sans text-5xl tracking-tighter md:text-7xl">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 gap-16 md:gap-32">
        {/* Project 1 */}
        <div className="group">
          <div className="relative mb-8 aspect-video w-full overflow-hidden bg-border md:aspect-[16/7]">
            <img
              src={projectLm}
              alt="La Muela"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="flex items-end justify-between border-t border-border pt-6">
            <div>
              <h2 className="mb-2 font-sans text-3xl tracking-tight md:text-5xl">
                La Muela
              </h2>
              <p className="font-mono text-sm uppercase tracking-widest text-secondary">
                Residencial / Zaragoza
              </p>
            </div>
            <Link
              to="/proyectos/la-muela"
              className="inline-block border border-primary px-6 py-3 font-sans text-sm transition-colors hover:bg-primary hover:text-surface"
            >
              Ver Proyecto
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsPage;
