'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const noticias = [
  {
    source: "Perfil",
    title: "Habló el abogado de Florencia Cocucci, la supuesta novia de Nisman: \"Está aterrada\"",
    url: "https://www.perfil.com/noticias/politica/hablo-el-abogado-de-florencia-cocucci-la-supuesta-novia-de-nisman-esta-aterrada-0303-0051.phtml"
  },
  {
    source: "Diario Popular",
    title: "Abogado de Larsson: \"La denuncia es por extorsión y no por abuso\"",
    url: "https://www.diariopopular.com.ar/espectaculos/abogado-larsson-la-denuncia-es-extorsion-y-no-abuso-n136219"
  },
  {
    source: "Infobae",
    title: "Los detalles de la segunda denuncia penal a Marcelo Moretti, presentada por un dirigente de San Lorenzo que estuvo en su espacio",
    url: "https://www.infobae.com/deportes/2025/04/23/los-detalles-de-la-segunda-denuncia-penal-a-marcelo-moretti-presentada-por-un-dirigente-de-san-lorenzo-que-estuvo-en-su-espacio/"
  },
  {
    source: "Radio Zónica",
    title: "Jorge Novillo: 'Moretti cometió un delito y puede haber un concurso real'",
    url: "https://larz.com.ar/noticias/jorge-novillo-moretti-cometio-un-delito-y-puede-haber-un-concurso-real/"
  },
  {
    source: "YouTube - Visión 7",
    title: "Visión 7 - La muerte de Nisman: Declararon la secretaria y la modelo Florencia Cocucci",
    url: "https://www.youtube.com/watch?v=Wvmvu1M0qOM"
  }
];

export default function PressCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  
  // Calculate how many items we can show (3 on desktop, 2 on tablet, 1 on mobile)
  const itemsPerPage = 3;
  const maxStartIndex = Math.max(0, noticias.length - itemsPerPage);
  
  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex(prev => Math.min(maxStartIndex, prev + 1));
  };
  
  const visibleNoticias = noticias.slice(startIndex, startIndex + itemsPerPage);
  
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
            canGoPrev
              ? 'border-gn-black text-gn-black hover:bg-gn-black hover:text-gn-white'
              : 'border-gn-gray/30 text-gn-gray/30 cursor-not-allowed'
          }`}
          aria-label="Ver noticias anteriores"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
            canGoNext
              ? 'border-gn-black text-gn-black hover:bg-gn-black hover:text-gn-white'
              : 'border-gn-gray/30 text-gn-gray/30 cursor-not-allowed'
          }`}
          aria-label="Ver más noticias"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleNoticias.map((noticia, i) => (
            <motion.a
              key={noticia.url}
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group block"
            >
              <div className="h-full bg-gn-white border border-gn-gray/20 p-6 transition-all duration-300 hover:border-gn-black hover:shadow-lg min-h-[160px] flex flex-col">
                <span className="inline-block px-3 py-1 bg-gn-black text-gn-white text-xs font-medium tracking-wide mb-4 self-start">
                  {noticia.source}
                </span>
                <h3 className="text-lg font-display text-gn-black group-hover:text-gn-gray transition-colors leading-snug flex-1">
                  {noticia.title}
                </h3>
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
