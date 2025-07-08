import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const featuredSections = [
    {
  title: "Festival Cumbre Tajín",
  description:
    "Celebración internacional de la cultura Totonaca que se lleva a cabo durante el equinoccio de primavera. Su programación incluye arte, música y espiritualidad en un entorno de diálogo intercultural.",
  image:
    "/Requerimiento para diapositivas/7. Cumbre Tajin Eventos/IMG_5364.JPG",
  href: "/cumbre-tajin",
  variant: "featured" as const,
},
    {
      title: "Consejo de Voladores",
      description:
        "Organismo tradicional responsable de proteger y transmitir la Ceremonia Ritual de los Voladores a nuevas generaciones, asegurando su continuidad y respeto como Patrimonio de la Humanidad.",
      image:
        "/Requerimiento para diapositivas/6. Consejo de Voladores/HHP_7532.JPG",
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
    {
      title: "Mujeres de Humo",
      description: "Gastronomía tradicional Totonaca",
      href: "/mujeres-de-humo",
    },
    {
      title: "Biblioteca Virtual",
      description: "Materiales de estudio y documentos históricos",
      href: "/biblioteca",
    },
    {
      title: "Galería Fotográfica",
      description: "Momentos únicos de nuestra cultura",
      href: "/galeria",
    },
    {
      title: "Arrendamiento",
      description: "Renta de espacios para eventos",
      href: "/arrendamiento",
    },
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Un Modelo Cultural para el Futuro
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                El Complejo Cultural Takilhtsukut es una apuesta por la regeneración del patrimonio cultural desde una visión comunitaria. Impulsado por la sabiduría ancestral y la gobernanza tradicional del pueblo Totonaca, articula espacios educativos, ceremoniales y productivos para fortalecer la identidad y el desarrollo sostenible de la región.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-8">
                Ubicado en el corazón de Veracruz, este santuario cultural es sede del Festival Cumbre Tajín, del Centro de las Artes Indígenas y de la Ceremonia Ritual de los Voladores. Con más de dos décadas de cocreación colectiva, es hoy un referente de salvaguardia patrimonial en México y el mundo.
              </p>
              <Button href="/historia" variant="secondary">
                Descubre Más
              </Button>
            </div>
            <div className="relative">
              <img
                src="\Requerimiento para diapositivas\1. Imágenes Generales del Complejo\Dron2.JPG"
                alt="Artesanías Totonacas"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-oro rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-jade rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Destacadas */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Explora Nuestros Espacios
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Acceso Rápido
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
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
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Únete a Nuestra Comunidad Cultural
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Participa en nuestros talleres, eventos y actividades culturales.
            Ayúdanos a preservar y promover la riqueza de la cultura Totonaca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/centro-artes" size="lg" variant="cultural">
              Inscríbete a Talleres
            </Button>
            <Button href="/noticias" size="lg" variant="outline">
              Ver Eventos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
