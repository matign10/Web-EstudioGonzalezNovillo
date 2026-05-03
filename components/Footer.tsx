'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gn-black text-gn-white">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Áreas de Práctica', href: '#areas' },
                { label: 'Profesionales', href: '#profesionales' },
                { label: 'Prensa', href: '#prensa' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gn-gray hover:text-gn-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Áreas de Práctica
            </h3>
            <ul className="space-y-2">
              {[
                'Defensa Penal',
                'Representación de víctimas',
                'Derecho Civil y Laboral',
              ].map((area) => (
                <li key={area}>
                  <Link
                    href="#areas"
                    onClick={(e) => handleClick(e, '#areas')}
                    className="text-gn-gray hover:text-gn-white transition-colors duration-300 text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gn-gray mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gn-gray text-sm">
                  Uruguay 763, C1013<br />
                  CABA, Argentina
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gn-gray flex-shrink-0" aria-hidden="true" />
                <a href="https://wa.me/message/7BQRXOHREOF4L1" target="_blank" rel="noopener noreferrer" className="text-gn-gray hover:text-gn-white transition-colors text-sm">
                  +54 9 11 5476 3721
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gn-gray flex-shrink-0" aria-hidden="true" />
                <a href="mailto:gonzaleznovilloabogados@gmail.com" className="text-gn-gray hover:text-gn-white transition-colors text-sm break-all">
                  gonzaleznovilloabogados@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Seguinos
            </h3>
            <a 
              href="https://www.instagram.com/gonzaleznovillo_abogados/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gn-gray hover:text-gn-white transition-colors text-sm"
              aria-label="Seguinos en Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              @gonzaleznovillo_abogados
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gn-gray/20">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <p className="text-gn-gray text-xs text-center">
            {currentYear} Estudio González Novillo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
