'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Retrato de portada del equipo: Jorge González Novillo y Matías González Novillo.
 *
 * Ruta del archivo: public/images/equipo-portada.jpg
 * (se sirve como /images/equipo-portada.jpg).
 * Si el archivo no está o no llega a cargar, el recuadro muestra las iniciales.
 * No reemplazar por fotos de stock de personas.
 */
export const HERO_PORTRAIT_SRC = '/images/equipo-portada.jpg';

export default function HeroPortrait() {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="mx-auto w-[168px] sm:w-[200px] lg:mx-0 lg:w-full lg:max-w-[280px] lg:justify-self-end">
      <div className="border border-gn-gold-light/80 p-1.5">
        <div className="relative aspect-[4/5] overflow-hidden bg-gn-charcoal">
          {missing ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
              <span className="font-display text-4xl text-gn-gold-light">GN</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-gn-gray">
                Retrato del equipo
              </span>
            </div>
          ) : (
            <Image
              src={HERO_PORTRAIT_SRC}
              alt="Jorge González Novillo y Matías González Novillo, socios del estudio, sentados a una mesa de trabajo"
              fill
              sizes="(max-width: 1024px) 200px, 280px"
              priority
              className="object-cover"
              onError={() => setMissing(true)}
            />
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-center font-display text-sm italic text-gn-gold-light lg:text-right">
        Jorge y Matías González Novillo
      </figcaption>
    </figure>
  );
}
