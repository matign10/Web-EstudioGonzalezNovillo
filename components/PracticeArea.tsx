'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  expandedContent: {
    description: string;
    services: string[];
  };
}

export default function PracticeArea({ title, description, icon, expandedContent }: PracticeAreaProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`p-8 border cursor-pointer transition-all duration-300 ${
        isExpanded
          ? 'bg-gn-white shadow-xl border-gn-black -translate-y-1'
          : 'bg-gn-white shadow-sm border-gn-gray/20 hover:border-gn-black hover:shadow-lg hover:-translate-y-1'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 transition-all duration-300 ${
          isExpanded ? 'bg-gn-black/5' : 'bg-gn-gray/10'
        }`}>
          {icon}
        </div>
        <button
          className={`p-2 transition-all duration-300 ${
            isExpanded
              ? 'bg-gn-black text-gn-white'
              : 'bg-gn-gray/10 text-gn-gray hover:bg-gn-black hover:text-gn-white'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          aria-label={isExpanded ? 'Colapsar' : 'Expandir'}
        >
          <ChevronDown
            className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <h3 className="text-xl font-display text-gn-black mb-3">{title}</h3>
      <p className="text-gn-gray leading-relaxed">{description}</p>

      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-6 border-t border-gn-gray/20 space-y-4">
          <p className="text-gn-gray leading-relaxed">{expandedContent.description}</p>
          <div>
            <h4 className="font-medium text-gn-black mb-3 flex items-center gap-2">
              <div className="w-4 h-[2px] bg-gn-black" />
              Servicios Incluidos
            </h4>
            <ul className="space-y-2">
              {expandedContent.services.map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gn-gray">
                  <svg className="w-4 h-4 text-gn-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
