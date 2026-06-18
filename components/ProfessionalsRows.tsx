'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { professionals } from '@/components/professionalsData';

export default function ProfessionalsRows() {
  return (
    <div className="mt-24 md:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">El equipo</span>
        <h3 className="text-2xl md:text-4xl font-display text-gn-black mt-3 tracking-tight">
          Nuestros Profesionales
        </h3>
        <div className="section-divider" />
      </motion.div>

      <div className="space-y-20 md:space-y-28">
        {professionals.map((profesional, i) => {
          const isReversed = i % 2 === 1;

          return (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Retrato */}
              <motion.div
                className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gn-gray/10">
                  <Image
                    src={profesional.image}
                    alt={profesional.altText}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-gn-gray/30" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gn-gray/30" />
              </motion.div>

              {/* Credenciales */}
              <motion.div
                className={isReversed ? 'lg:order-1' : 'lg:order-2'}
                initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-2xl md:text-3xl font-display text-gn-black">
                  {profesional.name}
                </h4>
                <p className="text-gn-gray text-sm font-medium uppercase tracking-widest mt-2">
                  {profesional.role}
                </p>
                <ul className="mt-8 space-y-3">
                  {profesional.credentials.map((credential, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gn-gray leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-gn-black rounded-full mt-2.5 flex-shrink-0" />
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
