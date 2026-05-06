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

const ITEMS_VISIBLE = 3;

export default function PressCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = noticias.length;

  const handlePrev = () => {
    setDirection(-1);
    setIndex(prev => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex(prev => (prev + 1) % total);
  };

  // Build the 3 visible items wrapping around
  const visibleNoticias = Array.from({ length: ITEMS_VISIBLE }, (_, i) =>
    noticias[(index + i) % total]
  );

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-gn-black text-gn-black bg-gn-white hover:bg-gn-black hover:text-gn-white transition-colors duration-500"
        aria-label="Ver noticias anteriores"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-gn-black text-gn-black bg-gn-white hover:bg-gn-black hover:text-gn-white transition-colors duration-500"
        aria-label="Ver más noticias"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8 lg:mx-0 overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          {visibleNoticias.map((noticia, i) => (
            <motion.a
              key={`${noticia.url}-${(index + i) % total}`}
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group block"
            >
              <div className="h-full bg-gn-white border border-gn-gray/20 p-6 transition-all duration-500 hover:border-gn-black hover:shadow-lg min-h-[160px] flex flex-col">
                <span className="inline-block px-3 py-1 bg-gn-black text-gn-white text-xs font-medium tracking-wide mb-4 self-start">
                  {noticia.source}
                </span>
                <h3 className="text-lg font-display text-gn-black group-hover:text-gn-gray transition-colors duration-500 leading-snug flex-1">
                  {noticia.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {noticias.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? 'bg-gn-black w-6' : 'bg-gn-gray/30 hover:bg-gn-gray w-2'
            }`}
            aria-label={`Ir a noticia ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
