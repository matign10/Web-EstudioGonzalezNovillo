'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const professionals = [
  {
    name: "Jorge González Novillo",
    role: "Socio fundador",
    altText: "Jorge González Novillo, abogado penalista y socio fundador del Estudio González Novillo en Buenos Aires",
    credentials: [
      "Abogado por la Universidad del Museo Social Argentino",
      "Especializado en Derecho Penal y Ciencias Penales en la Universidad de Palermo",
      "Posgrado en Derecho Penal Tributario en la UBA",
      "Profesor titular de Derecho Procesal Penal en UCES",
      "Profesor invitado en la Escuela Judicial del Consejo de la Magistratura y en la Maestría en Derecho Procesal de la Universidad Nacional de Rosario",
      "Integró el Juzgado Federal Nº 2 y la Fiscalía de la Cámara Federal en lo Criminal y Correccional",
      "Árbitro Internacional designado por la Entidad Binacional Yacyretá ante la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional",
      "Miembro fundador del centro de estudios \"Economía y Delito\" de la Facultad de Ciencias Económicas de la UBA, donde preside la comisión de delitos informáticos"
    ],
    image: "/images/coco.webp"
  },
  {
    name: "Matías González Novillo",
    role: "Socio",
    altText: "Matías González Novillo, abogado penalista y socio del Estudio González Novillo en Buenos Aires",
    credentials: [
      "Egresado de la Facultad de Derecho de la UBA, con orientación en derecho penal",
      "Seis años en el Ministerio Público Fiscal de la CABA, donde alcanzó el cargo de Prosecretario Administrativo de Cámara",
      "Conocimiento del funcionamiento del sistema penal desde adentro",
      "Cursa la Especialización en Justicia Constitucional y Derechos Humanos en el Instituto para el Desarrollo Constitucional (IDC)",
      "Cursa el Programa de Actualización en Derecho Penal Económico de la UBA",
      "Ejerce de forma independiente desde 2023"
    ],
    image: "/images/mati.webp"
  }
];

export default function ProfessionalsGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
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
              <div className="relative aspect-[3/4] overflow-hidden bg-gn-gray/10">
                <Image
                  src={profesional.image}
                  alt={profesional.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => handleImageLoad(i)}
                  className={`object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out ${
                    loadedImages[i] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ transitionProperty: 'opacity, transform' }}
                />
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
                      <ul className="pt-4 border-t border-gn-gray/20 mt-4 space-y-2">
                        {profesional.credentials.map((credential, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gn-gray leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-gn-black rounded-full mt-2 flex-shrink-0" />
                            <span>{credential}</span>
                          </li>
                        ))}
                      </ul>
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
