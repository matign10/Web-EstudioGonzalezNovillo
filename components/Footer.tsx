'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gn-black text-gn-white">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">


          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Áreas de Práctica
            </h3>
            <ul className="space-y-3">
              {[
                'Defensa Penal',
                'Representación de víctimas',
                'Derecho Civil y Laboral',
              ].map((area) => (
                <li key={area}>
                  <Link
                    href="#areas"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gn-gray mt-0.5 flex-shrink-0" />
                <span className="text-gn-gray text-sm">
                  Uruguay 763, C1013<br />
                  CABA, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gn-gray flex-shrink-0" />
                <a href="https://wa.me/message/7BQRXOHREOF4L1" target="_blank" rel="noopener noreferrer" className="text-gn-gray hover:text-gn-white transition-colors text-sm">
                  +54 9 11 5476 3721
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gn-gray flex-shrink-0" />
                <a href="mailto:gonzaleznovilloabogados@gmail.com" className="text-gn-gray hover:text-gn-white transition-colors text-sm">
                  gonzaleznovilloabogados@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gn-gray/20">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gn-gray text-xs text-center md:text-left">
              {currentYear} Estudio González Novillo. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="#" className="text-gn-gray hover:text-gn-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gn-gray hover:text-gn-white transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
