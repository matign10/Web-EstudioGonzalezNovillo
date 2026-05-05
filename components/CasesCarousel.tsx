'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const casos = [
  {
    court: "Cámara Nacional de Apelaciones en lo Criminal",
    title: "Sobreseimiento por prescripción en causa de estafa",
    description: "Se logró el sobreseimiento del imputado por prescripción de la acción penal en una causa por estafa procesal.",
    url: "#"
  },
  {
    court: "Tribunal Oral en lo Criminal Federal",
    title: "Absolución en causa por contrabando",
    description: "Absolución del imputado en juicio oral por falta de pruebas suficientes.",
    url: "#"
  },
  {
    court: "Juzgado Nacional en lo Criminal y Correccional",
    title: "Archivo de causa por amenazas",
    description: "Se logró el archivo de la causa por atipicidad de la conducta denunciada.",
    url: "#"
  },
  {
    court: "Cámara de Apelaciones en lo Penal Económico",
    title: "Revocación de procesamiento por evasión",
    description: "La Cámara revocó el procesamiento dictado en primera instancia por falta de mérito.",
    url: "#"
  },
  {
    court: "Tribunal Oral en lo Criminal",
    title: "Pena reducida en caso de lesiones",
    description: "Se obtuvo una significativa reducción de pena mediante acuerdo de juicio abreviado.",
    url: "#"
  }
];

export default function CasesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  
  const itemsPerPage = 3;
  const maxStartIndex = Math.max(0, casos.length - itemsPerPage);
  
  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex(prev => Math.min(maxStartIndex, prev + 1));
  };
  
  const visibleCasos = casos.slice(startIndex, startIndex + itemsPerPage);
  
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={!canGoPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border transition-all duration-300 bg-gn-white ${
          canGoPrev
            ? 'border-gn-black text-gn-black hover:bg-gn-black hover:text-gn-white'
            : 'border-gn-gray/30 text-gn-gray/30 cursor-not-allowed'
        }`}
        aria-label="Ver casos anteriores"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={!canGoNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border transition-all duration-300 bg-gn-white ${
          canGoNext
            ? 'border-gn-black text-gn-black hover:bg-gn-black hover:text-gn-white'
            : 'border-gn-gray/30 text-gn-gray/30 cursor-not-allowed'
        }`}
        aria-label="Ver más casos"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8 lg:mx-0">
        <AnimatePresence mode="popLayout">
          {visibleCasos.map((caso, i) => (
            <motion.a
              key={caso.title}
              href={caso.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group block"
            >
              <div className="h-full bg-gn-white border border-gn-gray/20 p-6 transition-all duration-300 hover:border-gn-black hover:shadow-lg min-h-[200px] flex flex-col">
                <span className="inline-block px-3 py-1 bg-gn-black text-gn-white text-xs font-medium tracking-wide mb-4 self-start">
                  {caso.court}
                </span>
                <h3 className="text-lg font-display text-gn-black group-hover:text-gn-gray transition-colors leading-snug mb-2">
                  {caso.title}
                </h3>
                <p className="text-sm text-gn-gray leading-relaxed flex-1">
                  {caso.description}
                </p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxStartIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === startIndex ? 'bg-gn-black w-6' : 'bg-gn-gray/30 hover:bg-gn-gray'
            }`}
            aria-label={`Ir a página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
