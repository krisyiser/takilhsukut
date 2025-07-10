"use client";

import { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const featuredSections = [
    {
      title: "Festival Cumbre Tajín",
      description:
        "Celebración internacional de la cultura Totonaca que se lleva a cabo durante el equinoccio de primavera. Su programación incluye arte, música y espiritualidad en un entorno de diálogo intercultural.",
      image: "/Requerimiento para diapositivas/7. Cumbre Tajin Eventos/IMG_5364.JPG",
      href: "/cumbre-tajin",
      variant: "featured" as const,
    },
    {
      title: "Consejo de Voladores",
      description:
        "Organismo tradicional responsable de proteger y transmitir la Ceremonia Ritual de los Voladores a nuevas generaciones, asegurando su continuidad y respeto como Patrimonio de la Humanidad.",
      image: "/Requerimiento para diapositivas/6. Consejo de Voladores/HHP_7532.JPG",
      href: "/consejo-voladores",
      variant: "cultural" as const,
    },
    {
      title: "Centro de las Artes Indígenas",
      description:
        "Institución educativa fundada por y para los pueblos originarios, dedicada a la formación integral en saberes tradicionales y artísticos del Totonacapan.",
      image:
        "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/KANTIYÁN/abuelos IMG_2250.jpg",
      href: "/centro-artes",
      variant: "cultural" as const,
    },
  ];

  const quickAccess = [
    { title: "Mujeres de Humo", description: "Gastronomía tradicional Totonaca", href: "/mujeres-de-humo" },
    { title: "Biblioteca Virtual", description: "Materiales de estudio y documentos históricos", href: "/biblioteca" },
    { title: "Galería Fotográfica", description: "Momentos únicos de nuestra cultura", href: "/galeria" },
    { title: "Arrendamiento", description: "Renta de espacios para eventos", href: "/arrendamiento" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Patrimonio Cultural del Totonacapan"
        title="Complejo Cultural Takilhtsukut"
        description="Modelo estratégico de regeneración del patrimonio vivo. Un santuario cultural donde florecen las artes, el conocimiento y la identidad del pueblo Totonaca."
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/historia" size="lg" variant="primary">
            Conoce Nuestra Historia
          </Button>
          <Button href="/parque-takilhtsukut" size="lg" variant="outline">
            Visita el Parque
          </Button>
        </div>
      </HeroSection>

      {/* Acerca del Complejo */}
      <section className="py-16 bg-dun">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-6">
                Un Modelo Cultural para el Futuro
              </h2>
              <p className="text-lg text-sealBrown leading-relaxed mb-6">
                El Complejo Cultural Takilhtsukut es una visión estratégica del pueblo Totonaca para consolidar un modelo ejemplar de regeneración del patrimonio cultural, con más de dos décadas de cocreación colectiva. Este espacio reúne a comunidades, sabios tradicionales, colectivos de arte, instituciones y aliados nacionales e internacionales.
              </p>
              <p className="text-lg text-sealBrown leading-relaxed mb-6">
                Articulado en torno al Parque Takilhtsukut, sede de festivales, foros y encuentros, integra espacios educativos como el Centro de las Artes Indígenas, la Ceremonia Ritual de Voladores, la comunidad de danzantes y músicos, el colectivo Mujeres de Humo y el Festival Cumbre Tajín. Estos pilares han sido reconocidos por la UNESCO como Patrimonio Cultural de la Humanidad.
              </p>
              <p className="text-lg text-sealBrown leading-relaxed mb-6">
                El complejo promueve el desarrollo sostenible desde la gobernanza indígena, el arte, la educación, la gastronomía y el turismo cultural. Se consolida como un modelo vivo donde florecen el Tlan Latamat (el bien vivir), la economía solidaria, la sostenibilidad ambiental y la formación con identidad.
              </p>
              <Button href="/historia" variant="secondary">
                Descubre Más
              </Button>
            </div>
            <div className="relative">
              <div
                className="rounded-lg shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => videoRef.current?.play()}
              >
                <video
                  ref={videoRef}
                  controls
                  preload="none"
                  className="w-full h-auto rounded-lg"
                >
                  <source src="/Videos/visiontajin.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-lion rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-copal rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Destacadas */}
      <section className="py-16 bg-dun">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-4">
              Explora Nuestros Espacios
            </h2>
            <p className="text-xl text-sealBrown max-w-3xl mx-auto">
              Conoce los pilares culturales que dan vida al complejo, todos ellos reconocidos por su valor patrimonial e impacto social.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSections.map((section, index) => (
              <Card
                key={index}
                title={section.title}
                description={section.description}
                image={section.image}
                href={section.href}
                variant={section.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Acceso Rápido */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-4">
              Acceso Rápido
            </h2>
            <p className="text-xl text-sealBrown">
              Encuentra rápidamente lo que buscas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                href={item.href}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="py-16 bg-lion">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-6">
            Únete a Nuestra Comunidad Cultural
          </h2>
          <p className="text-xl text-sealBrown mb-8 leading-relaxed">
            Participa en nuestros talleres, eventos y actividades culturales.
            Ayúdanos a preservar y promover la riqueza de la cultura Totonaca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/centro-artes" size="lg" variant="cultural">
              Inscríbete a Talleres
            </Button>
            <Button href="/noticias" size="lg" variant="cultural">
              Ver Eventos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
