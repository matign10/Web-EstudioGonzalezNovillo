'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { professionals } from '@/components/professionalsData';

export default function ProfessionalsAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {professionals.map((profesional, i) => {
        const isExpanded = expandedIndex === i;

        return (
          <div
            key={i}
            className={`bg-gn-white border overflow-hidden transition-all duration-300 ${
              isExpanded ? 'border-gn-black shadow-lg' : 'border-gn-gray/20 hover:border-gn-black'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleExpand(i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isExpanded}
            >
              <div>
                <h4 className="text-lg font-display text-gn-black">{profesional.name}</h4>
                <p className="text-gn-gray text-sm font-medium">{profesional.role}</p>
              </div>
              <span
                className={`p-2 flex-shrink-0 transition-all duration-300 ${
                  isExpanded
                    ? 'bg-gn-black text-gn-white'
                    : 'bg-gn-gray/10 text-gn-gray'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="px-6 pb-6 pt-4 border-t border-gn-gray/20 space-y-2">
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
        );
      })}
    </motion.div>
  );
}
