import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Historia', href: '/historia' },
    { name: 'Parque Takilhtsukut', href: '/parque-takilhtsukut' },
    { name: 'Festival Cumbre Tajín', href: '/cumbre-tajin' },
    { name: 'Centro de las Artes', href: '/centro-artes' },
  ];

  const culturalSections = [
    { name: 'Consejo de Voladores', href: '/consejo-voladores' },
    { name: 'Mujeres de Humo', href: '/mujeres-de-humo' },
    { name: 'Danzantes y Músicos', href: '/danzantes-musicos' },
    { name: 'Biblioteca Virtual', href: '/biblioteca' },
  ];

  const services = [
    { name: 'Galería Fotográfica', href: '/galeria' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Arrendamiento', href: '/arrendamiento' },
  ];

  return (
    <footer className="bg-gradient-dark-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información principal */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/Logos/Complejo Cultural (Javi)/Complejo Cultural Takilhsukut Portada.png"
                alt="Logo Complejo Cultural Takilhtsukut"
                className="w-20 h-20 object-contain rounded-full"
              />
              <div>
                <h1 className="text-2xl font-serif font-bold">Complejo Cultural</h1>
                <p className="text-base text-lion">Takilhtsukut</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Preservando y promoviendo la rica cultura Totonaca de Veracruz, México.
              Un espacio dedicado a las artes, tradiciones y el patrimonio cultural indígena.
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-lion transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-lion transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-lion transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-lion">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-lion transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secciones culturales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brownSugar">Cultura y Tradición</h4>
            <ul className="space-y-2">
              {culturalSections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brownSugar transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-claret">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-claret mt-1 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  Papantla de Olarte, Veracruz<br />
                  México
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-claret" />
                <a
                  href="tel:+52-784-842-0000"
                  className="text-white/70 hover:text-claret transition-colors text-sm"
                >
                  +52 784-688-0008
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-claret" />
                <a
                  href="mailto:info@takilhtsukut.mx"
                  className="text-white/70 hover:text-claret transition-colors text-sm"
                >
                  complejoculturaltakil@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-2 text-burntOrange">Servicios</h5>
              <ul className="space-y-1">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-burntOrange transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Complejo Cultural Takilhtsukut. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Preservando el patrimonio cultural Totonaca para las futuras generaciones.
          </p>
        </div>
      </div>
    </footer>
  );
}
