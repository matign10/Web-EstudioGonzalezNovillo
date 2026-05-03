'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export default function FadeInImage(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      {...props}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      className={`${props.className ?? ''} transition-all duration-700 ease-out ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
      }`}
      style={{
        ...props.style,
        transitionProperty: 'opacity, transform',
      }}
    />
  );
}
