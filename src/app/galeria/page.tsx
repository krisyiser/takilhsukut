import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import { Camera, Calendar, Users, Eye } from 'lucide-react';

export default function GaleriaPage() {


  const featuredPhotos = [
    {
      id: 1,
      title: "Volador en el cielo",
      photographer: "Miguel Hernández",
      date: "Marzo 2024",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
      category: "Danza de los Voladores"
    },
    {
      id: 2,
      title: "Artesana trabajando",
      photographer: "Carmen López",
      date: "Febrero 2024",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop",
      category: "Artesanías"
    },
    {
      id: 3,
      title: "Preparación del Zacahuil",
      photographer: "Roberto Vásquez",
      date: "Enero 2024",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=800&fit=crop",
      category: "Gastronomía"
    },
    {
      id: 4,
      title: "Concierto nocturno",
      photographer: "Ana Martínez",
      date: "Marzo 2024",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
      category: "Festival"
    },
    {
      id: 5,
      title: "Ceremonia del amanecer",
      photographer: "Carlos Ruiz",
      date: "Febrero 2024",
      image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=1200&h=800&fit=crop",
      category: "Ceremonias"
    },
    {
      id: 6,
      title: "Vista aérea del parque",
      photographer: "Elena Sánchez",
      date: "Abril 2024",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      category: "Parque"
    },
    {
      id: 7,
      title: "Niños aprendiendo",
      photographer: "Luis García",
      date: "Marzo 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      category: "Educación"
    },
    {
      id: 8,
      title: "Puesta de sol",
      photographer: "María Torres",
      date: "Abril 2024",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      category: "Paisajes"
    }
  ];

  const stats = [
    {
      title: "5,000+",
      description: "Fotografías en archivo",
      icon: <Camera className="w-8 h-8 text-totonaca-oro-500" />
    },
    {
      title: "50+",
      description: "Fotógrafos colaboradores",
      icon: <Users className="w-8 h-8 text-totonaca-jade-500" />
    },
    {
      title: "20 Años",
      description: "Documentando nuestra cultura",
      icon: <Calendar className="w-8 h-8 text-totonaca-tierra-500" />
    },
    {
      title: "100,000+",
      description: "Visualizaciones mensuales",
      icon: <Eye className="w-8 h-8 text-totonaca-copal-500" />
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Momentos Únicos de Nuestra Cultura"
        title="Galería Fotográfica"
        description="Una colección visual que captura la esencia, tradiciones y belleza de la cultura Totonaca a través de la lente de fotógrafos profesionales y de la comunidad"
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
      />

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-totonaca-tierra-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-totonaca-obsidiana-800 mb-2">
                  {stat.title}
                </h3>
                <p className="text-totonaca-obsidiana-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información para Fotógrafos */}
      <section className="py-16 bg-totonaca-obsidiana-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Comparte tu Visión
            </h2>
            <p className="text-xl text-white/90">
              Únete a nuestra comunidad de fotógrafos y ayúdanos a documentar la cultura Totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-totonaca-oro-400 mb-4">
                Para Fotógrafos Profesionales
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-oro-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Colaboraciones en eventos especiales y festivales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-oro-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Acceso exclusivo a ceremonias y espacios sagrados</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-oro-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Créditos y reconocimiento en exposiciones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-oro-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Licencias para uso comercial de imágenes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-totonaca-jade-400 mb-4">
                Para la Comunidad
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-jade-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Envía tus mejores fotografías del complejo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-jade-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Participa en concursos fotográficos mensuales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-jade-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Talleres gratuitos de fotografía cultural</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-totonaca-jade-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Exposición de trabajos en espacios del complejo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-totonaca-obsidiana-800 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Convocatoria Abierta 2025
              </h3>
              <p className="text-white/90 mb-6">
                Estamos buscando fotógrafos para documentar el Festival Cumbre Tajín 2025
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-oro text-totonaca-obsidiana-800 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow">
                  Aplicar como Fotógrafo
                </button>
                <button className="border-2 border-totonaca-jade-400 text-totonaca-jade-400 px-6 py-3 rounded-lg font-medium hover:bg-totonaca-jade-400 hover:text-white transition-colors">
                  Enviar Fotografías
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nota sobre derechos */}
      <section className="py-8 bg-totonaca-tierra-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-totonaca-obsidiana-600">
            Todas las fotografías están protegidas por derechos de autor.
            Para uso comercial o editorial, contacta directamente con el fotógrafo
            o con nuestro departamento de medios.
          </p>
        </div>
      </section>
    </Layout>
  );
}
