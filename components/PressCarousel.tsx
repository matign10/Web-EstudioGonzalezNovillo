'use client';

import { motion } from 'framer-motion';

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {noticias.map((noticia, i) => (
        <motion.a
          key={noticia.url}
          href={noticia.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
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
    </div>
  );
}
