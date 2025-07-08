'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import  Button from '@/components/ui/Button'; // ajusta si la ruta del botón es diferente

const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Historia', href: '/historia' },
  { name: 'Parque Takilhtsukut', href: '/parque-takilhtsukut' },
  { name: 'Consejo de Voladores', href: '/consejo-voladores' },
  { name: 'Festival Cumbre Tajín', href: '/cumbre-tajin' },
  { name: 'Centro de las Artes', href: '/centro-artes' },
  { name: 'Mujeres de Humo', href: '/mujeres-de-humo' },
  { name: 'Danzantes y Músicos', href: '/danzantes-musicos' },
  { name: 'Biblioteca Virtual', href: '/biblioteca' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Arrendamiento', href: '/arrendamiento' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-totonaca-tierra-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
<div className="flex items-center space-x-4">
  {/* Imagen del logo */}
  <img
    src="/Logos/Complejo Cultural (Javi)/Complejo Cultural Takilhsukut Portada.png"
    alt="Logo Complejo Cultural Takilhtsukut"
    className="w-20 h-20 object-contain rounded-full"
  />
  {/* Texto lateral */}
  <div>
    <h1 className="text-2xl font-serif font-bold text-totonaca-obsidiana-800">
      Complejo Cultural
    </h1>
    <p className="text-base text-totonaca-tierra-600">Takilhtsukut</p>
  </div>
</div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex space-x-8">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-totonaca-obsidiana-700 hover:text-totonaca-tierra-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}

              {/* Dropdown para más secciones */}
              <div className="relative group">
                <button className="text-totonaca-obsidiana-700 hover:text-totonaca-tierra-600 transition-colors duration-200 font-medium flex items-center">
                  Más
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-totonaca-tierra-200 z-50">
                  {navigationItems.slice(6).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-totonaca-obsidiana-700 hover:bg-totonaca-tierra-50 hover:text-totonaca-tierra-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Donaciones (Desktop) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = '/donaciones')}
              className="items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Donar</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-totonaca-obsidiana-700 hover:text-totonaca-tierra-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-totonaca-tierra-200 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-totonaca-obsidiana-700 hover:text-totonaca-tierra-600 hover:bg-totonaca-tierra-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Donaciones (Mobile) */}
              <Link
                href="/donaciones"
                className="block px-3 py-2 text-totonaca-obsidiana-700 hover:text-totonaca-tierra-600 hover:bg-totonaca-tierra-50 rounded-md transition-colors"
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
