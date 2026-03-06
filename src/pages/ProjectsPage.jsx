import React from "react";
import { Link } from "react-router-dom";
import projectLm from "../paem-assets/backgrounds/project-lm.avif";

const ProjectsPage = () => (
  <div className="pt-32 min-h-[80vh]">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <h1 className="font-sans text-5xl md:text-7xl tracking-tighter mb-24">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 gap-16 md:gap-32">
        {/* Project 1 */}
        <div className="group">
          <div className="relative w-full aspect-video md:aspect-[16/7] overflow-hidden bg-border mb-8">
            <img
              src={projectLm}
              alt="La Muela"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="flex justify-between items-end border-t border-border pt-6">
            <div>
              <h2 className="font-sans text-3xl md:text-5xl tracking-tight mb-2">
                La Muela
              </h2>
              <p className="font-mono text-sm uppercase text-secondary tracking-widest">
                Residencial / Zaragoza
              </p>
            </div>
            <Link
              to="/proyectos/la-muela"
              className="inline-block border border-primary px-6 py-3 font-sans text-sm hover:bg-primary hover:text-surface transition-colors"
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

