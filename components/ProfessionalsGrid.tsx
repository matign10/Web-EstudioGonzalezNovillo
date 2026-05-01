'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ChevronDown } from 'lucide-react';

const professionals = [
  {
    name: "Jorge González Novillo",
    role: "Socio fundador",
    description: "Abogado por la Universidad del Museo Social Argentino, especializado en Derecho Penal y Ciencias Penales en la Universidad de Palermo, con posgrado en Derecho Penal Tributario en la UBA. Profesor titular de Derecho Procesal Penal en UCES y profesor invitado en la Escuela Judicial del Consejo de la Magistratura y en la Maestría en Derecho Procesal de la Universidad Nacional de Rosario. Integró el Juzgado Federal Nº 2 y la Fiscalía de la Cámara Federal en lo Criminal y Correccional. Fue designado Árbitro Internacional por la Entidad Binacional Yacyretá ante la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional. Es miembro fundador del centro de estudios \"Economía y Delito\" de la Facultad de Ciencias Económicas de la UBA, donde preside la comisión de delitos informáticos.",
    linkedin: "#",
    image: "/images/coco.jpg"
  },
  {
    name: "Matías González Novillo",
    role: "Socio",
    description: "Egresado de la Facultad de Derecho de la UBA, con orientación en derecho penal. Trabajó seis años en el Ministerio Público Fiscal de la CABA, donde se desempeñó sucesivamente como auxiliar administrativo, escribiente, relator y prosecretario administrativo de Cámara. Esa experiencia le permitió conocer el funcionamiento del sistema penal desde adentro antes de dedicarse al ejercicio profesional independiente, al que se volcó en 2023.",
    linkedin: "https://linkedin.com/in/matias-gonzalez-novillo",
    image: "/images/mati.jpg"
  }
];

export default function ProfessionalsGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      {professionals.map((profesional, i) => {
        const isExpanded = expandedIndex === i;
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            <div 
              className={`bg-gn-white border overflow-hidden transition-all duration-300 cursor-pointer ${
                isExpanded ? 'border-gn-black shadow-lg' : 'border-gn-gray/20 hover:border-gn-black'
              }`}
              onClick={() => toggleExpand(i)}
            >
              {/* Photo container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={profesional.image}
                  alt={profesional.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gn-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={profesional.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gn-white text-gn-black p-3 hover:bg-gn-gray transition-colors"
                    aria-label={`LinkedIn de ${profesional.name}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-display text-gn-black">{profesional.name}</h3>
                    <p className="text-gn-gray text-sm font-medium">{profesional.role}</p>
                  </div>
                  <button
                    className={`p-2 transition-all duration-300 ${
                      isExpanded
                        ? 'bg-gn-black text-gn-white'
                        : 'bg-gn-gray/10 text-gn-gray hover:bg-gn-black hover:text-gn-white'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(i);
                    }}
                    aria-label={isExpanded ? 'Ver menos' : 'Ver más'}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gn-gray leading-relaxed pt-4 border-t border-gn-gray/20 mt-4">
                        {profesional.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
