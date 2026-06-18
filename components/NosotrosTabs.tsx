'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInImage from './FadeInImage';
import { professionals } from './professionalsData';

const tabs = [
  { id: 'estudio', title: 'El estudio' },
  { id: 'jorge', title: 'Jorge' },
  { id: 'matias', title: 'Matías' },
];

export default function NosotrosTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const jorge = professionals[0];
  const matias = professionals[1];

  return (
    <div className="border border-gn-gray/20 bg-gn-white">
      {/* Tabs */}
      <div className="flex flex-row border-b border-gn-gray/20">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center px-2 md:px-6 py-4 md:py-5 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 border-r last:border-r-0 ${
                isActive
                  ? 'bg-gn-black text-gn-white'
                  : 'bg-gn-white text-gn-gray hover:text-gn-black hover:bg-gn-black/5'
              }`}
            >
              <span className="text-center leading-tight">{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-8 md:p-12"
        >
          {activeTab === 'estudio' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-gn-gray/10">
                  <FadeInImage
                    src="/images/fotos/foto estudio Coco y Mati 2.webp"
                    alt="Equipo de abogados penalistas del Estudio González Novillo en Buenos Aires"
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-gn-gray/30" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gn-gray/30" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-display text-gn-black mb-6">
                  Quiénes Somos
                </h3>
                <p className="text-gn-gray mb-6 leading-relaxed">
                  Somos un estudio jurídico con sede en la Ciudad Autónoma de Buenos Aires, especializado en derecho penal. Con más de 20 años de trayectoria, trabajamos tanto en la defensa de imputados como en la representación de víctimas en CABA, provincia de Buenos Aires y a nivel federal en todo el país. Abordamos causas que van desde delitos económicos y estafas hasta conflictos familiares con aristas penales.
                </p>
                <p className="text-gn-gray mb-6 leading-relaxed">
                  Nuestro enfoque es integral: cuando un caso lo requiere, coordinamos la estrategia penal con acciones civiles, comerciales o laborales, en conjunto con estudios especializados con los que trabajamos habitualmente — Estudio Echavarría Coll (civil y comercial) y Espinosa Paz (laboral). Entendemos que el conflicto tiene distintas aristas y por eso buscamos soluciones que resuelvan el problema de fondo.
                </p>
                <p className="text-gn-gray leading-relaxed">
                  Trabajamos con compromiso, claridad y un trato cercano. Sabemos que cada caso afecta la vida de una persona, y eso guía nuestra forma de trabajar.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'jorge' && <ProfessionalPanel professional={jorge} />}

          {activeTab === 'matias' && <ProfessionalPanel professional={matias} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

type Professional = (typeof professionals)[number];

function ProfessionalPanel({ professional }: { professional: Professional }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Portrait */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gn-gray/10 max-w-sm mx-auto lg:mx-0 w-full">
        <Image
          src={professional.image}
          alt={professional.altText}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      {/* Credentials */}
      <div>
        <h3 className="text-2xl md:text-3xl font-display text-gn-black">
          {professional.name}
        </h3>
        <p className="text-gn-gray text-sm font-medium mb-6">{professional.role}</p>
        <ul className="space-y-3">
          {professional.credentials.map((credential, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-start gap-3 text-sm text-gn-gray leading-relaxed"
            >
              <span className="w-1.5 h-1.5 bg-gn-black rounded-full mt-2 flex-shrink-0" />
              <span>{credential}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
