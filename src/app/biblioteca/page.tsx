import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BookOpen, Download, Search, FileText, Video, Headphones, Archive, Users } from 'lucide-react';

export default function BibliotecaPage() {
  const collections = [
    {
      title: "Documentos Históricos",
      count: 245,
      description: "Manuscritos, mapas y documentos coloniales sobre la región Totonaca",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      type: "historical",
      formats: ["PDF", "Imagen digitalizada", "Transcripción"]
    },
    {
      title: "Tradición Oral",
      count: 156,
      description: "Grabaciones de cuentos, leyendas y relatos de los ancianos de la comunidad",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=600&fit=crop",
      type: "oral",
      formats: ["Audio MP3", "Video", "Transcripción"]
    },
    {
      title: "Estudios Antropológicos",
      count: 189,
      description: "Investigaciones académicas sobre cultura, sociología y antropología Totonaca",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      type: "academic",
      formats: ["PDF", "Artículos", "Tesis"]
    },
    {
      title: "Música y Danza",
      count: 98,
      description: "Partituras, coreografías y registros audiovisuales de expresiones artísticas",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      type: "artistic",
      formats: ["Video HD", "Audio", "Partituras"]
    },
    {
      title: "Lengua Totonaca",
      count: 312,
      description: "Diccionarios, gramáticas y material didáctico para aprender el idioma ancestral",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      type: "language",
      formats: ["PDF", "Audio", "Ejercicios interactivos"]
    },
    {
      title: "Medicina Tradicional",
      count: 134,
      description: "Conocimientos sobre plantas medicinales y prácticas curativas ancestrales",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      type: "medicine",
      formats: ["PDF", "Ilustraciones", "Videos explicativos"]
    }
  ];

  const featuredResources = [
    {
      title: "Códice Totonaco Digital",
      author: "Proyecto de Digitalización Patrimonial",
      year: "2023",
      type: "Documento Histórico",
      description: "Digitalización completa del códice prehispánico más importante de la región, con traducciones y análisis detallados.",
      downloads: 2340,
      format: "PDF Interactivo",
      size: "45 MB"
    },
    {
      title: "Diccionario Completo Español-Totonaco",
      author: "Dr. Elena Martínez Hernández",
      year: "2022",
      type: "Material Educativo",
      description: "La compilación más completa del vocabulario Totonaco con pronunciación, etimología y ejemplos de uso.",
      downloads: 5678,
      format: "PDF + Audio",
      size: "120 MB"
    },
    {
      title: "Documentales: Voces del Tajín",
      author: "Centro Audiovisual Takilhtsukut",
      year: "2024",
      type: "Contenido Audiovisual",
      description: "Serie de 12 documentales sobre la vida cotidiana, ceremonias y tradiciones del pueblo Totonaco.",
      downloads: 3456,
      format: "Video HD",
      size: "8.5 GB"
    }
  ];

  const researchTools = [
    {
      title: "Buscador Avanzado",
      description: "Encuentra recursos específicos por tema, autor, fecha o tipo de contenido",
      icon: <Search className="w-8 h-8 text-totonaca-oro-500" />
    },
    {
      title: "Catálogo Digital",
      description: "Explora toda la colección organizada por categorías temáticas",
      icon: <Archive className="w-8 h-8 text-totonaca-jade-500" />
    },
    {
      title: "Acceso Remoto",
      description: "Consulta los materiales desde cualquier lugar con tu credencial de investigador",
      icon: <Download className="w-8 h-8 text-totonaca-tierra-500" />
    },
    {
      title: "Colaboración",
      description: "Comparte recursos y participa en proyectos de investigación colaborativos",
      icon: <Users className="w-8 h-8 text-totonaca-copal-500" />
    }
  ];

  const stats = [
    { number: "1,234", label: "Documentos digitalizados", icon: <FileText className="w-6 h-6" /> },
    { number: "567", label: "Horas de audio", icon: <Headphones className="w-6 h-6" /> },
    { number: "89", label: "Videos documentales", icon: <Video className="w-6 h-6" /> },
    { number: "12,000+", label: "Descargas mensuales", icon: <Download className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Repositorio Digital del Conocimiento Ancestral"
        title="Biblioteca Virtual"
        description="Un tesoro digital que preserva y comparte el vasto conocimiento de la cultura Totonaca: documentos históricos, tradición oral, estudios académicos y recursos educativos accesibles para investigadores, estudiantes y la comunidad global"
        backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#colecciones" size="lg" variant="cultural">
            Explorar Colecciones
          </Button>
          <Button href="#acceso" size="lg" variant="outline">
            Solicitar Acceso
          </Button>
        </div>
      </HeroSection>

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-totonaca-tierra-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-totonaca-oro-600">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-totonaca-obsidiana-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-totonaca-obsidiana-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Preservando el Conocimiento para las Futuras Generaciones
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                La Biblioteca Virtual Takilhtsukut es el resultado de más de dos décadas de
                trabajo dedicado a digitalizar, catalogar y preservar el patrimonio cultural
                intangible del pueblo Totonaco. Cada documento, grabación y material aquí
                disponible representa una pieza invaluable de nuestra historia colectiva.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Desarrollada en colaboración con universidades, institutos de investigación
                y la propia comunidad Totonaca, esta biblioteca democratiza el acceso al
                conocimiento ancestral y facilita su estudio y preservación.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-totonaca-oro-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Acceso libre y gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Search className="text-totonaca-jade-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Búsqueda avanzada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="text-totonaca-tierra-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Descarga offline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Archive className="text-totonaca-copal-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Archivo permanente</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Investigación y documentos"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-jade rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Colecciones Principales */}
      <section id="colecciones" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Colecciones Especializadas
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Explora nuestras colecciones temáticas organizadas para facilitar la investigación y el aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card
                key={index}
                title={collection.title}
                description={collection.description}
                image={collection.image}
                variant="cultural"
                className="h-full"
              >
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-totonaca-oro-100 text-totonaca-oro-800 px-2 py-1 rounded-full">
                      {collection.count} recursos
                    </span>
                    <BookOpen className="text-totonaca-jade-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-totonaca-obsidiana-800 mb-2">Formatos disponibles:</h4>
                    <div className="flex flex-wrap gap-1">
                      {collection.formats.map((format, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-totonaca-jade-100 text-totonaca-jade-800 px-2 py-1 rounded-full"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Explorar Colección
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Destacados */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Recursos Destacados
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Los materiales más consultados y valiosos de nuestra colección
            </p>
          </div>

          <div className="space-y-6">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm bg-totonaca-oro-100 text-totonaca-oro-800 px-2 py-1 rounded-full">
                        {resource.type}
                      </span>
                      <span className="text-sm text-totonaca-obsidiana-500">{resource.year}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-totonaca-obsidiana-800 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-totonaca-obsidiana-600 text-sm mb-2">
                      Por {resource.author}
                    </p>
                    <p className="text-totonaca-obsidiana-600">
                      {resource.description}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-totonaca-jade-600">Formato:</span>
                      <span className="font-medium text-totonaca-obsidiana-800">{resource.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-totonaca-jade-600">Tamaño:</span>
                      <span className="font-medium text-totonaca-obsidiana-800">{resource.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-totonaca-jade-600">Descargas:</span>
                      <span className="font-medium text-totonaca-obsidiana-800">{resource.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button size="sm" variant="primary">
                      <Download size={16} className="mr-2" />
                      Descargar
                    </Button>
                    <Button size="sm" variant="outline">
                      Vista Previa
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas de Investigación */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Herramientas de Investigación
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Facilidades avanzadas para investigadores y estudiantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchTools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-totonaca-tierra-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-totonaca-obsidiana-800 mb-3">
                  {tool.title}
                </h3>
                <p className="text-totonaca-obsidiana-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso y Registro */}
      <section id="acceso" className="py-16 bg-totonaca-obsidiana-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Acceso a la Biblioteca
            </h2>
            <p className="text-xl text-white/90">
              Diferentes niveles de acceso según tus necesidades de investigación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-totonaca-obsidiana-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-totonaca-oro-400 mb-4">
                Acceso Público
              </h3>
              <p className="text-white/90 mb-4">Para consulta general y estudiantes</p>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li>• Documentos de dominio público</li>
                <li>• Material educativo básico</li>
                <li>• Vista previa de colecciones</li>
                <li>• Descargas limitadas</li>
              </ul>
              <Button variant="outline" className="w-full">
                Acceso Inmediato
              </Button>
            </div>

            <div className="bg-totonaca-jade-800 rounded-lg p-6 text-center border-2 border-totonaca-oro-400">
              <div className="bg-totonaca-oro-400 text-totonaca-obsidiana-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Recomendado
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Investigador Registrado
              </h3>
              <p className="text-white/90 mb-4">Para académicos y investigadores</p>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li>• Acceso completo a colecciones</li>
                <li>• Descargas ilimitadas</li>
                <li>• Herramientas avanzadas</li>
                <li>• Soporte especializado</li>
              </ul>
              <Button variant="cultural" className="w-full">
                Solicitar Registro
              </Button>
            </div>

            <div className="bg-totonaca-obsidiana-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-totonaca-oro-400 mb-4">
                Colaborador
              </h3>
              <p className="text-white/90 mb-4">Para instituciones y contribuyentes</p>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li>• Todos los beneficios anteriores</li>
                <li>• Subida de contenido</li>
                <li>• Proyectos colaborativos</li>
                <li>• Acceso prioritario</li>
              </ul>
              <Button variant="outline" className="w-full">
                Información Especial
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-totonaca-obsidiana-800 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">
                ¿Necesitas Ayuda?
              </h3>
              <p className="text-white/90 mb-6">
                Nuestro equipo de bibliotecarios especializados está aquí para ayudarte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cultural">
                  Contactar Bibliotecario
                </Button>
                <Button variant="outline">
                  Guía de Usuario
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribuir */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Contribuye al Conocimiento Colectivo
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Si tienes documentos, grabaciones o materiales relacionados con la cultura Totonaca,
            ayúdanos a preservarlos para las futuras generaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/centro-artes" size="lg" variant="cultural">
              Donar Material
            </Button>
            <Button href="/parque-takilhtsukut" size="lg" variant="outline">
              Voluntariado
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
