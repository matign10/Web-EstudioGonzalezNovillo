'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Áreas de Práctica', href: '#areas' },
  { name: 'Profesionales', href: '#profesionales' },
  { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gn-white fixed w-full z-20 top-0 start-0 border-b border-gn-gray/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-gn.jpeg"
              alt="GN Estudio González Novillo"
              width={400}
              height={100}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-gn-black'
                    : 'text-gn-gray hover:text-gn-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gn-black"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden bg-gn-white border-t border-gn-gray/30 overflow-hidden transition-all duration-300`}
      >
        <div className="px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-gn-black bg-gn-black/5'
                  : 'text-gn-gray hover:text-gn-black hover:bg-gn-black/5'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
