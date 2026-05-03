'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Scale, Briefcase, ChevronRight } from 'lucide-react';

const practiceAreas = [
  {
    id: 'defensa-penal',
    title: "Defensa Penal",
    icon: Shield,
    description: "Representamos a imputados en causas penales, con estrategias precisas desde el inicio, que buscan la mejor solución posible para sus intereses.",
    expandedDescription: "Nuestro enfoque combina la defensa técnica con un análisis integral del conflicto, articulando acciones en sede penal, civil, comercial y laboral, cuando el caso lo requiere.",
    services: [
      "Estafas, fraudes y delitos económicos",
      "Extorsión y coacción",
      "Calumnias e injurias",
      "Denuncias falsas",
      "Delitos contra la integridad sexual",
      "Violencia familiar y de género (defensa de imputados)",
      "Homicidio y lesiones",
      "Delitos contra la propiedad"
    ]
  },
  {
    id: 'representacion-victimas',
    title: "Representación de víctimas",
    icon: Scale,
    description: "Acompañamos a víctimas de delitos en su rol de querellante, impulsando la causa y protegiendo sus derechos.",
    expandedDescription: "Trabajamos junto a las víctimas para que tengan voz activa en el proceso penal, asegurando que sus intereses sean escuchados y defendidos.",
    services: [
      "Constitución como querellante",
      "Impulso de la acción penal",
      "Reclamos civiles derivados del delito",
      "Acompañamiento en audiencias y declaraciones",
      "Medidas de protección"
    ]
  },
  {
    id: 'derecho-civil-laboral',
    title: "Derecho Civil, Comercial y Laboral",
    icon: Briefcase,
    description: "Trabajamos causas civiles, comerciales y laborales conectadas con conflictos penales, o de manera autónoma según el caso.",
    expandedDescription: "Muchos conflictos penales tienen raíz o consecuencias en el ámbito civil, comercial o laboral. Los abordamos de forma coordinada para resolver el problema de fondo.",
    services: [
      "Daños y perjuicios",
      "Conflictos contractuales",
      "Despidos y reclamos laborales",
      "Sucesiones y disputas familiares",
      "Sociedades y conflictos entre socios"
    ]
  }
];

export default function PracticeAreasUnified() {
  const [activeArea, setActiveArea] = useState(practiceAreas[0].id);
  
  const currentArea = practiceAreas.find(area => area.id === activeArea) || practiceAreas[0];
  const Icon = currentArea.icon;

  return (
    <div className="border border-gn-gray/20 bg-gn-white">
      {/* Tabs */}
      <div className="flex flex-row border-b border-gn-gray/20">
        {practiceAreas.map((area) => {
          const AreaIcon = area.icon;
          const isActive = activeArea === area.id;
          
          return (
            <button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-2 md:px-6 py-4 md:py-5 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 border-r last:border-r-0 ${
                isActive 
                  ? 'bg-gn-black text-gn-white' 
                  : 'bg-gn-white text-gn-gray hover:text-gn-black hover:bg-gn-black/5'
              }`}
            >
              <AreaIcon className="w-5 h-5" />
              <span className="text-center leading-tight">{area.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeArea}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column - Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gn-black flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gn-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-gn-black">
                  {currentArea.title}
                </h3>
              </div>
              <p className="text-gn-gray leading-relaxed mb-4">
                {currentArea.description}
              </p>
              <p className="text-gn-gray leading-relaxed">
                {currentArea.expandedDescription}
              </p>
            </div>

            {/* Right column - Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gn-black mb-6">
                Servicios
              </h4>
              <ul className="space-y-3">
                {currentArea.services.map((service, i) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="w-4 h-4 text-gn-black mt-0.5 flex-shrink-0" />
                    <span className="text-gn-gray text-sm">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
