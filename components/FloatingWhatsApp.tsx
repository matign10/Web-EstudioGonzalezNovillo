'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <button
      type="button"
      onClick={() => window.open('https://wa.me/message/7BQRXOHREOF4L1', '_blank', 'noopener,noreferrer')}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
      style={{
        backgroundColor: '#25D366',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        WebkitTapHighlightColor: 'transparent',
        WebkitAppearance: 'none',
        appearance: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        touchAction: 'manipulation',
        padding: 0,
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
    </button>
  );
}
