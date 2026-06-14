'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Carrusel "infinito" para mobile basado en scroll nativo con snap.
 *
 * Renderiza 3 copias de la lista y mantiene el scroll dentro de la copia
 * del medio: al cruzar hacia una copia vecina reposiciona el scroll de forma
 * instantánea por exactamente el ancho de una copia. Como las tres copias son
 * idénticas, el salto es imperceptible y el loop se siente continuo en ambas
 * direcciones.
 */
const COPIES = 3;

export function useInfiniteCarousel(total: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Arranca centrado en la copia del medio.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;
    el.scrollLeft = el.scrollWidth / COPIES;
  }, [total]);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;

    const copyWidth = el.scrollWidth / COPIES;
    const cardWidth = copyWidth / total;

    // Mantener el scroll dentro de la copia del medio [copyWidth, 2*copyWidth).
    if (el.scrollLeft < copyWidth) {
      el.scrollLeft += copyWidth;
    } else if (el.scrollLeft >= copyWidth * 2) {
      el.scrollLeft -= copyWidth;
    }

    const within = ((el.scrollLeft % copyWidth) + copyWidth) % copyWidth;
    setActiveIndex(Math.round(within / cardWidth) % total);
  }, [total]);

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;
    const copyWidth = el.scrollWidth / COPIES;
    const cardWidth = copyWidth / total;
    el.scrollTo({ left: copyWidth + i * cardWidth, behavior: 'smooth' });
  }, [total]);

  return { trackRef, activeIndex, onScroll, scrollToIndex, copies: COPIES };
}
