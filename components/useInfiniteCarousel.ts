'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Carrusel "infinito" para mobile basado en scroll nativo con snap.
 *
 * Renderiza varias copias de la lista y mantiene el scroll centrado en la copia
 * del medio. Clave para que el loop sea fluido: el reposicionamiento del scroll
 * NO ocurre mientras el usuario desliza/hay inercia (eso cortaría el envión y se
 * sentiría como un freno), sino recién cuando el scroll se detiene (debounce).
 * Con varias copias de buffer, ni un flick fuerte alcanza el borde real antes de
 * frenarse, así que el reacomodo siempre pasa estando quieto y es imperceptible.
 */
const COPIES = 5;
const MIDDLE = 2; // copia central (0-based) entre las 5
const SETTLE_MS = 140;

export function useInfiniteCarousel(total: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reposiciona el scroll a la copia del medio. Solo debe llamarse en reposo.
  const recenter = useCallback(() => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;
    const copyWidth = el.scrollWidth / COPIES;
    const offsetCopies = Math.round((el.scrollLeft - copyWidth * MIDDLE) / copyWidth);
    if (offsetCopies !== 0) {
      el.scrollLeft -= offsetCopies * copyWidth;
    }
  }, [total]);

  // Arranca centrado en la copia del medio.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;
    el.scrollLeft = (el.scrollWidth / COPIES) * MIDDLE;
  }, [total]);

  useEffect(() => {
    return () => {
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, []);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;

    const copyWidth = el.scrollWidth / COPIES;
    const cardWidth = copyWidth / total;
    const within = ((el.scrollLeft % copyWidth) + copyWidth) % copyWidth;
    setActiveIndex(Math.round(within / cardWidth) % total);

    // Recentrar recién cuando el scroll se detiene, para no cortar la inercia.
    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(recenter, SETTLE_MS);
  }, [total, recenter]);

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el || total === 0 || el.scrollWidth === 0) return;
    const copyWidth = el.scrollWidth / COPIES;
    const cardWidth = copyWidth / total;
    el.scrollTo({ left: copyWidth * MIDDLE + i * cardWidth, behavior: 'smooth' });
  }, [total]);

  return { trackRef, activeIndex, onScroll, scrollToIndex, copies: COPIES };
}
