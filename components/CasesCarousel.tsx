'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSupabase, Caso } from '@/lib/supabase';

// Datos de fallback por si no hay conexión o no hay datos en la BD
const fallbackCasos = [
  {
    id: '1',
    tipo_resolucion: "Sobreseimiento",
    tribunal: "Cámara Nacional de Apelaciones en lo Criminal",
    titulo: "Sobreseimiento por prescripción en causa de estafa",
    descripcion: "Se logró el sobreseimiento del imputado por prescripción de la acción penal en una causa por estafa procesal.",
    pdf_url: undefined,
    visible: true,
    created_at: '',
    updated_at: ''
  },
  {
    id: '2',
    tipo_resolucion: "Absolución",
    tribunal: "Tribunal Oral en lo Criminal Federal",
    titulo: "Absolución en causa por contrabando",
    descripcion: "Absolución del imputado en juicio oral por falta de pruebas suficientes.",
    pdf_url: undefined,
    visible: true,
    created_at: '',
    updated_at: ''
  },
  {
    id: '3',
    tipo_resolucion: "Archivo",
    tribunal: "Juzgado Nacional en lo Criminal y Correccional",
    titulo: "Archivo de causa por amenazas",
    descripcion: "Se logró el archivo de la causa por atipicidad de la conducta denunciada.",
    pdf_url: undefined,
    visible: true,
    created_at: '',
    updated_at: ''
  }
];

export default function CasesCarousel() {
  const [casos, setCasos] = useState<Caso[]>(fallbackCasos);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCasos() {
      try {
        const supabase = getSupabase();
        if (!supabase) {
          // Sin configuración de Supabase: se muestran los casos de fallback
          return;
        }

        const { data, error } = await supabase
          .from('casos')
          .select('*')
          .eq('visible', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('[v0] Error fetching casos:', error);
          return;
        }

        if (data && data.length > 0) {
          setCasos(data);
        }
      } catch (err) {
        console.error('[v0] Error:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCasos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="w-8 h-8 border-2 border-gn-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {casos.map((caso, i) => (
        <motion.div
          key={caso.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          className="group block"
        >
          {caso.pdf_url ? (
            <a
              href={caso.pdf_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block h-full"
            >
              <CasoCard caso={caso} hasLink />
            </a>
          ) : (
            <CasoCard caso={caso} hasLink={false} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function CasoCard({ caso, hasLink }: { caso: Caso; hasLink: boolean }) {
  return (
    <div className={`bg-gn-white border border-gn-gray/20 p-6 transition-all duration-500 h-[420px] flex flex-col overflow-hidden ${hasLink ? 'hover:border-gn-black hover:shadow-lg' : ''}`}>
      <div className="flex gap-2 mb-4">
        <span className="inline-block px-3 py-1 bg-gn-black text-gn-white text-xs font-medium tracking-wide">
          {caso.tipo_resolucion}
        </span>
        {caso.tribunal && (
          <span className="inline-block px-3 py-1 bg-gn-gray/10 text-gn-gray text-xs font-medium tracking-wide">
            {caso.tribunal}
          </span>
        )}
      </div>
      <h3 className={`text-lg font-display text-gn-black leading-snug mb-2 ${hasLink ? 'group-hover:text-gn-gray transition-colors duration-500' : ''}`}>
        {caso.titulo}
      </h3>
      {caso.descripcion && (
        <p className="text-sm text-gn-gray leading-relaxed flex-1">
          {caso.descripcion}
        </p>
      )}
      {hasLink && (
        <p className="text-xs text-gn-black font-medium mt-4 underline underline-offset-2">
          Ver resolución
        </p>
      )}
    </div>
  );
}
