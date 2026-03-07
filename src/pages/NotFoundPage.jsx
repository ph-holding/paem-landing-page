import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="bg-background">
      {/* Intro Hero */}
      <div className="relative flex h-[100svh] w-full items-center px-6 pb-12 pt-32 md:h-[100dvh] md:px-12">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-6xl leading-none tracking-tighter text-primary md:text-7xl lg:text-[8rem]">
              Página <span className="italic">no</span> encontrada
            </h1>
            <p className="max-w-2xl font-sans text-2xl font-light leading-snug tracking-tight text-primary/90 md:text-4xl">
              La página que buscas no está disponible.
            </p>
          </div>
          <Link
            to="/"
            className="shrink-0 border-b border-primary pb-1 font-mono text-sm uppercase tracking-widest transition-opacity hover:italic hover:opacity-60"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
