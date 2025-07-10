'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import Button from '@/components/ui/Button'; // Ajusta la ruta si es necesario

const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Historia', href: '/historia' },
  { name: 'Consejo Totonaca', href: '/consejo' },
  { name: 'Parque Takilhtsukut', href: '/parque-takilhtsukut' },
  { name: 'Centro de las Artes', href: '/centro-artes' },
  { name: 'Festival Cumbre Tajín', href: '/cumbre-tajin' },
  { name: 'Consejo de Voladores', href: '/consejo-voladores' },
  { name: 'Mujeres de Humo', href: '/mujeres-de-humo' },
  { name: 'Danzantes y Músicos', href: '/danzantes-musicos' },
  { name: 'Cultura y Tecnologia', href: '/tecnologia' },
  { name: 'Biblioteca Virtual', href: '/biblioteca' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Arrendamiento', href: '/arrendamiento' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-chocolateCosmos1 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/Logos/Complejo Cultural (Javi)/Complejo Cultural Takilhsukut Portada.png"
              alt="Logo Complejo Cultural Takilhtsukut"
              className="w-20 h-20 object-contain rounded-full"
            />
            <div>
              <h1 className="text-2xl font-serif font-bold">Complejo Cultural</h1>
              <p className="text-base">Takilhtsukut</p>
            </div>
          </div>

          {/* Navegación en escritorio */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex space-x-8">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-lion transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}

              {/* Dropdown "Más" */}
              <div className="relative group">
                <button className="hover:text-lion transition-colors duration-200 font-medium flex items-center">
                  Más
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-gradient-sugar-lion rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-lion z-50">
                  {navigationItems.slice(6).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-lion hover:text-black transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Botón de donación */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = '/donaciones')}
              className="items-center space-x-2 border-white text-white hover:bg-white hover:text-chocolateCosmos1"
            >
              <Heart className="h-4 w-4" />
              <span>Donar</span>
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-lion transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegación móvil */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-lion py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-lion hover:text-black rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donaciones"
                className="block px-3 py-2 text-white hover:bg-white hover:text-chocolateCosmos1 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ❤️ Donar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
