'use client';

import { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getSupabase, Caso } from '@/lib/supabase';
import { useInfiniteCarousel } from './useInfiniteCarousel';

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

const ITEMS_VISIBLE = 3;
const GAP = 24;
const SLIDE_EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function CasesCarousel({ dark = false }: { dark?: boolean }) {
  const [casos, setCasos] = useState<Caso[]>(fallbackCasos);
  const [visibleCount, setVisibleCount] = useState(3);
  const [pos, setPos] = useState(fallbackCasos.length);
  const [withMotion, setWithMotion] = useState(false);
  const [step, setStep] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

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
      }
    }

    fetchCasos();
  }, []);

  const total = casos.length;
  const visible = Math.min(visibleCount, Math.max(total, 1));
  const slides = useMemo(() => [...casos, ...casos, ...casos], [casos]);

  // --- Mobile: scroll nativo con loop infinito ---
  const { trackRef, activeIndex, onScroll, scrollToIndex, copies } = useInfiniteCarousel(total);
  const loopCasos = Array.from({ length: copies }, () => casos).flat();

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setVisibleCount(mq.matches ? ITEMS_VISIBLE : 2);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const width = viewportRef.current?.clientWidth ?? 0;
      if (!width || total === 0) return;
      const card = (width - GAP * (visible - 1)) / visible;
      setStep(card + GAP);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [total, visible]);

  // Arranca (y se reacomoda) en la copia del medio, sin animar el salto.
  useEffect(() => {
    setWithMotion(false);
    setPos(total);
  }, [total, visible]);

  useEffect(() => {
    if (withMotion) return;
    const id = requestAnimationFrame(() => setWithMotion(true));
    return () => cancelAnimationFrame(id);
  }, [withMotion, pos]);

  const settlePos = (next: number) => {
    if (total === 0) return next;
    if (next >= total * 2 || next < total) {
      return ((next % total) + total) % total + total;
    }
    return next;
  };

  const slideBy = (delta: number) => {
    if (total < 2 || delta === 0) return;
    setWithMotion(true);
    setPos((current) => current + delta);
  };

  const handlePrev = () => slideBy(-1);
  const handleNext = () => slideBy(1);

  const onSlideEnd = () => {
    if (!withMotion) return;
    const settled = settlePos(pos);
    if (settled !== pos) {
      setWithMotion(false);
      setPos(settled);
    }
  };

  const logicalIndex = total === 0 ? 0 : ((pos % total) + total) % total;

  const goTo = (target: number) => {
    if (total < 2) return;
    let delta = target - logicalIndex;
    if (delta > total / 2) delta -= total;
    if (delta < -total / 2) delta += total;
    slideBy(delta);
  };

  return (
    <div>
      {/* MOBILE: scroll horizontal con snap, peek y loop infinito */}
      <div className="md:hidden">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex touch-pan-x gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopCasos.map((caso, i) => (
            <div key={`${caso.id}-${i}`} className="snap-start shrink-0 basis-[82%]">
              {caso.pdf_url ? (
                <a
                  href={caso.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group block h-full"
                >
                  <CasoCard caso={caso} hasLink />
                </a>
              ) : (
                <CasoCard caso={caso} hasLink={false} />
              )}
            </div>
          ))}
        </div>

        {/* Indicadores mobile */}
        <div className="flex justify-center gap-2 mt-6">
          {casos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? `${dark ? 'bg-gn-gold-light' : 'bg-gn-gold'} w-6`
                  : `${dark ? 'bg-gn-gold-light/40 hover:bg-gn-gold-light' : 'bg-gn-stone/25 hover:bg-gn-stone'} w-2`
              }`}
              aria-label={`Ir a caso ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP: la fila se desplaza una tarjeta, con la misma curva que Prensa */}
      <div className="hidden md:block">
        <div className="relative">
          {total > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-gn-black text-gn-black bg-gn-white hover:bg-gn-black hover:text-gn-white transition-colors duration-500"
              aria-label="Ver casos anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {total > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-gn-black text-gn-black bg-gn-white hover:bg-gn-black hover:text-gn-white transition-colors duration-500"
              aria-label="Ver más casos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div ref={viewportRef} className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translate3d(${-pos * step}px, 0, 0)`,
                transition: withMotion ? `transform 0.5s cubic-bezier(${SLIDE_EASE.join(',')})` : 'none',
              }}
              onTransitionEnd={(event) => {
                if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
                onSlideEnd();
              }}
            >
              {slides.map((caso, i) => (
                <div
                  key={`${caso.id}-${i}`}
                  className="shrink-0"
                  style={{ width: step > GAP ? step - GAP : undefined }}
                >
                  {caso.pdf_url ? (
                    <a
                      href={caso.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group block h-full"
                    >
                      <CasoCard caso={caso} hasLink />
                    </a>
                  ) : (
                    <div className="group h-full">
                      <CasoCard caso={caso} hasLink={false} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {casos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === logicalIndex
                  ? `${dark ? 'bg-gn-gold-light' : 'bg-gn-gold'} w-6`
                  : `${dark ? 'bg-gn-gold-light/40 hover:bg-gn-gold-light' : 'bg-gn-stone/25 hover:bg-gn-stone'} w-2`
              }`}
              aria-label={`Ir a caso ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CasoCard({ caso, hasLink }: { caso: Caso; hasLink: boolean }) {
  return (
    <div className={`bg-gn-white border border-gn-stone/15 p-6 transition-colors duration-500 h-[420px] flex flex-col overflow-hidden ${hasLink ? 'hover:border-gn-gold hover:shadow-lg' : ''}`}>
      <div className="flex gap-2 mb-4">
        <span className="inline-block px-3 py-1 bg-gn-black text-gn-white text-xs font-medium tracking-wide">
          {caso.tipo_resolucion}
        </span>
        {caso.tribunal && (
          <span className="inline-block px-3 py-1 bg-gn-sand text-gn-stone text-xs font-medium tracking-wide">
            {caso.tribunal}
          </span>
        )}
      </div>
      <h3 className={`text-lg font-display text-gn-black leading-snug mb-2 ${hasLink ? 'group-hover:text-gn-burgundy transition-colors duration-500' : ''}`}>
        {caso.titulo}
      </h3>
      {caso.descripcion && (
        <p className="text-sm text-gn-stone leading-relaxed flex-1">
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
