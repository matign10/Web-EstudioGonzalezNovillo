'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/message/7BQRXOHREOF4L1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center outline-none"
      style={{
        backgroundColor: '#25D366',
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
    </a>
  );
}
