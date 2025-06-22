import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ImageGallery from '@/components/ui/ImageGallery';
import { Music, Users, Play, Award, Calendar, Mic } from 'lucide-react';

export default function DanzantesMusicosPage() {
  const groups = [
    {
      title: "Grupo Tradicional Kiwikgolo",
      description: "Maestros en la preservación de danzas ceremoniales y música ancestral Totonaca con más de 30 años de trayectoria.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      specialties: ["Danza de los Voladores", "Música ceremonial", "Instrumentos ancestrales"],
      members: 12,
      founded: "1992"
    },
    {
      title: "Ensamble Takilhtsukut",
      description: "Jóvenes músicos que fusionan instrumentos tradicionales con sonidos contemporáneos manteniendo la esencia Totonaca.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      specialties: ["Fusión contemporánea", "Composiciones propias", "Talleres educativos"],
      members: 8,
      founded: "2015"
    },
    {
      title: "Danzantes del Amanecer",
      description: "Grupo especializado en danzas rituales del equinoccio y ceremonias sagradas del calendario Totonaco.",
      image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=800&h=600&fit=crop",
      specialties: ["Danzas rituales", "Ceremonias de equinoccio", "Teatro danza"],
      members: 15,
      founded: "2003"
    },
    {
      title: "Mujeres Cantoras",
      description: "Preservadoras de los cantos tradicionales femeninos y las melodías que acompañan los trabajos del hogar y la siembra.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      specialties: ["Cantos tradicionales", "Música ceremonial femenina", "Transmisión oral"],
      members: 10,
      founded: "1998"
    }
  ];

  const danceTypes = [
    {
      name: "Danza de los Voladores",
      description: "La danza sagrada más emblemática, donde cinco hombres ascienden a un poste de 30 metros representando los elementos de la naturaleza.",
      difficulty: "Muy Alta",
      duration: "30-45 minutos",
      participants: "5 voladores",
      meaning: "Ritual de fertilidad y conexión con los dioses"
    },
    {
      name: "Danza de los Quetzales",
      description: "Representación del ave sagrada que conecta la tierra con el cielo, ejecutada con plumas multicolores y movimientos gráciles.",
      difficulty: "Alta",
      duration: "20-30 minutos",
      participants: "8-12 danzantes",
      meaning: "Símbolo de libertad y espiritualidad"
    },
    {
      name: "Danza del Maíz",
      description: "Celebración de la cosecha y gratitud a la madre tierra por los frutos obtenidos durante el año agrícola.",
      difficulty: "Media",
      duration: "15-25 minutos",
      participants: "6-10 danzantes",
      meaning: "Agradecimiento por la abundancia"
    },
    {
      name: "Danza de los Tocotines",
      description: "Danza de cortejo y celebración comunitaria, ejecutada principalmente durante festividades y bodas tradicionales.",
      difficulty: "Media",
      duration: "10-20 minutos",
      participants: "Parejas (4-8)",
      meaning: "Cortejo y unión comunitaria"
    }
  ];

  const instruments = [
    {
      name: "Teponaztli",
      description: "Tambor ceremonial tallado en madera con sonidos graves que representan el latido de la tierra.",
      type: "Percusión",
      material: "Madera de cedro"
    },
    {
      name: "Flauta de Carrizo",
      description: "Instrumento melódico elaborado con caña de carrizo, utilizado en ceremonias y rituales sagrados.",
      type: "Viento",
      material: "Carrizo natural"
    },
    {
      name: "Sonajas de Ayoyotes",
      description: "Cascabeles elaborados con semillas secas que se atan a los tobillos de los danzantes.",
      type: "Percusión",
      material: "Semillas y fibras naturales"
    },
    {
      name: "Tambor de Piel",
      description: "Tambor ceremonial con parche de piel animal, utilizado para marcar el ritmo en las danzas.",
      type: "Percusión",
      material: "Madera y piel natural"
    }
  ];

  const galleryPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
      title: "Voladores en ceremonia",
      photographer: "Miguel Hernández",
      date: "Marzo 2024",
      category: "Danza de los Voladores",
      description: "Momento culminante de la ceremonia sagrada durante el equinoccio de primavera"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
      title: "Músicos tradicionales",
      photographer: "Carmen López",
      date: "Febrero 2024",
      category: "Música",
      description: "Ensamble Takilhtsukut interpretando melodías ancestrales con instrumentos tradicionales"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=1200&h=800&fit=crop",
      title: "Danza del amanecer",
      photographer: "Roberto Vásquez",
      date: "Enero 2024",
      category: "Danzas rituales",
      description: "Danzantes del Amanecer realizando ceremonia de bienvenida al nuevo día"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop",
      title: "Mujeres cantoras",
      photographer: "Ana Martínez",
      date: "Marzo 2024",
      category: "Cantos tradicionales",
      description: "Grupo de Mujeres Cantoras preservando las melodías ancestrales femeninas"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
      title: "Ritual nocturno",
      photographer: "Carlos Ruiz",
      date: "Febrero 2024",
      category: "Ceremonias",
      description: "Ceremonia nocturna iluminada por antorchas tradicionales"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
      title: "Instrumentos ancestrales",
      photographer: "Elena Sánchez",
      date: "Abril 2024",
      category: "Instrumentos",
      description: "Colección de instrumentos musicales tradicionales Totonacas"
    }
  ];

  const videos = [
    {
      title: "Danza de los Voladores - Ceremonia Completa",
      duration: "32:45",
      views: "45,230",
      description: "Registro completo de la ceremonia sagrada realizada durante el Festival Cumbre Tajín 2024"
    },
    {
      title: "Ensamble Takilhtsukut - Concierto Nocturno",
      duration: "18:23",
      views: "12,678",
      description: "Presentación del ensamble durante la velada musical del equinoccio de primavera"
    },
    {
      title: "Cantos Tradicionales Femeninos",
      duration: "25:10",
      views: "8,945",
      description: "Mujeres Cantoras interpretando melodías ancestrales transmitidas oralmente"
    },
    {
      title: "Danza de los Quetzales",
      duration: "15:30",
      views: "20,156",
      description: "Espectacular presentación de la danza que representa al ave sagrada Totonaca"
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Música y Danza Tradicional Totonaca"
        title="Danzantes y Músicos"
        description="Los guardianes del arte sonoro y corporal ancestral, preservando las melodías, ritmos y movimientos que han dado vida a nuestras ceremonias durante milenios"
        backgroundImage="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#grupos" size="lg" variant="cultural">
            Conoce los Grupos
          </Button>
          <Button href="#galeria" size="lg" variant="outline">
            Ver Galería
          </Button>
        </div>
      </HeroSection>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Arte Sonoro y Corporal Ancestral
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Los danzantes y músicos del Complejo Cultural Takilhtsukut son los herederos
                directos de una tradición artística que ha permanecido viva durante más de
                mil años. Cada movimiento, cada nota musical y cada ritmo cuenta una historia
                sagrada transmitida de generación en generación.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Estos artistas no solo interpretan, sino que viven y respiran la esencia
                de la cultura Totonaca, convirtiendo cada presentación en un acto ceremonial
                que conecta el pasado con el presente.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Music className="text-totonaca-oro-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">15 grupos activos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-totonaca-jade-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">120+ artistas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-totonaca-tierra-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Patrimonio UNESCO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-totonaca-copal-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">50+ presentaciones anuales</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
                alt="Músicos tradicionales"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-oro rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Grupos Tradicionales */}
      <section id="grupos" className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Grupos Tradicionales
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Conoce a los colectivos artísticos que mantienen vivas las tradiciones musicales y dancísticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {groups.map((group, index) => (
              <Card
                key={index}
                title={group.title}
                description={group.description}
                image={group.image}
                variant="cultural"
                className="h-full"
              >
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <Users size={14} className="text-totonaca-jade-600" />
                      <span className="text-totonaca-obsidiana-600">{group.members} integrantes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-totonaca-tierra-600" />
                      <span className="text-totonaca-obsidiana-600">Desde {group.founded}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-totonaca-obsidiana-800 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-totonaca-oro-100 text-totonaca-oro-800 px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Danzas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Danzas Tradicionales
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Cada danza cuenta una historia sagrada y cumple una función ceremonial específica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {danceTypes.map((dance, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-totonaca-jade-50 to-totonaca-tierra-50 border border-totonaca-jade-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-serif font-bold text-totonaca-obsidiana-800 mb-3">
                  {dance.name}
                </h3>
                <p className="text-totonaca-obsidiana-600 mb-4 leading-relaxed">
                  {dance.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="font-medium text-totonaca-jade-700">Dificultad:</span>
                    <p className="text-totonaca-obsidiana-600">{dance.difficulty}</p>
                  </div>
                  <div>
                    <span className="font-medium text-totonaca-jade-700">Duración:</span>
                    <p className="text-totonaca-obsidiana-600">{dance.duration}</p>
                  </div>
                  <div>
                    <span className="font-medium text-totonaca-jade-700">Participantes:</span>
                    <p className="text-totonaca-obsidiana-600">{dance.participants}</p>
                  </div>
                  <div>
                    <span className="font-medium text-totonaca-jade-700">Significado:</span>
                    <p className="text-totonaca-obsidiana-600">{dance.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instrumentos Musicales */}
      <section className="py-16 bg-totonaca-obsidiana-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Instrumentos Ancestrales
            </h2>
            <p className="text-xl text-white/90">
              Los sonidos sagrados que acompañan nuestras ceremonias y danzas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instruments.map((instrument, index) => (
              <div key={index} className="bg-totonaca-obsidiana-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-oro rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-totonaca-oro-400 mb-2">
                  {instrument.name}
                </h3>
                <p className="text-white/90 text-sm mb-4">{instrument.description}</p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-totonaca-jade-400">Tipo:</span>
                    <span className="text-white">{instrument.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-totonaca-jade-400">Material:</span>
                    <span className="text-white">{instrument.material}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section id="galeria" className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Galería de Momentos
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Capturando la esencia de nuestras tradiciones musicales y dancísticas
            </p>
          </div>

          <ImageGallery photos={galleryPhotos} columns={3} />
        </div>
      </section>

      {/* Videos Destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Videos Destacados
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Documentación audiovisual de nuestras tradiciones artísticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white border border-totonaca-tierra-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-totonaca-jade-100 to-totonaca-tierra-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-totonaca-oro-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-totonaca-obsidiana-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-totonaca-obsidiana-600 text-sm mb-3 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-totonaca-obsidiana-500">
                    <span>{video.views} visualizaciones</span>
                    <div className="flex items-center space-x-1">
                      <Play size={12} />
                      <span>Ver video</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Únete a Nuestros Grupos Artísticos
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Aprende las tradiciones musicales y dancísticas Totonacas directamente
            de los maestros herederos de esta sabiduría ancestral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/centro-artes" size="lg" variant="cultural">
              Talleres de Danza
            </Button>
            <Button href="/centro-artes" size="lg" variant="outline">
              Clases de Música
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
