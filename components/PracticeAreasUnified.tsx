'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const practiceAreas = [
  {
    id: 'defensa-penal',
    title: "Defensa Penal",
    description: "Representamos a personas imputadas en causas penales. La defensa se prepara desde el primer momento —la denuncia, una detención o la indagatoria— y se sostiene en las audiencias, las medidas cautelares y, si la causa llega a esa instancia, en el juicio oral. La estrategia se define con quien nos consulta y se revisa a medida que el expediente avanza.",
    expandedDescription: "El trabajo combina la técnica penal con una lectura del conflicto en su conjunto. Cuando el caso tiene consecuencias civiles, comerciales o laborales, las articulamos con los estudios con los que trabajamos de manera habitual: Estudio Echavarría Coll, en lo civil y comercial, y Espinosa Paz, en lo laboral. El objetivo es la solución más favorable a los intereses de la persona, explicada con claridad en cada paso.",
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
    description: "Acompañamos a quien fue víctima de un delito y decide tener una participación propia en la causa, mediante la constitución como querellante. Nos ocupamos de impulsar el proceso, de estar presentes en audiencias y declaraciones, y de cuidar que sus derechos no queden en segundo plano.",
    expandedDescription: "La querella permite a la víctima una voz distinta de la del Ministerio Público Fiscal. Evaluamos, según el caso, las medidas de protección que correspondan y los reclamos civiles que pueden derivarse del hecho. El acompañamiento es directo durante las etapas en las que la causa lo exige.",
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
    description: "Intervenimos en asuntos civiles, comerciales y laborales cuando están unidos a un conflicto penal y, también, cuando la consulta es autónoma. Daños, contratos, desvinculaciones, sucesiones y conflictos entre socios forman parte de ese trabajo.",
    expandedDescription: "Es frecuente que un expediente penal tenga su origen o sus efectos fuera del fuero. Esos tramos se coordinan con estudios especializados con los que el estudio trabaja de manera habitual: Estudio Echavarría Coll, en materia civil y comercial, y Espinosa Paz, en materia laboral. La idea es mirar el problema de fondo y no solo el escrito que está en trámite.",
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

  return (
    <div className="border border-gn-stone/15 bg-gn-white">
      {/* Tabs */}
      <div className="flex flex-row border-b border-gn-stone/15">
        {practiceAreas.map((area) => {
          const isActive = activeArea === area.id;

          return (
            <button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`flex-1 flex items-center justify-center px-2 md:px-6 py-4 md:py-5 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 border-r last:border-r-0 ${
                isActive
                  ? 'bg-gn-black text-gn-white'
                  : 'bg-gn-white text-gn-stone hover:text-gn-black hover:bg-gn-sand'
              }`}
            >
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
              <h3 className="text-2xl md:text-3xl font-display text-gn-black mb-6">
                {currentArea.title}
              </h3>
              <p className="text-gn-stone leading-relaxed mb-4">
                {currentArea.description}
              </p>
              <p className="text-gn-stone leading-relaxed">
                {currentArea.expandedDescription}
              </p>
            </div>

            {/* Right column - Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gn-gold mb-6">
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
                    <ChevronRight className="w-4 h-4 text-gn-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gn-stone text-sm">{service}</span>
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
