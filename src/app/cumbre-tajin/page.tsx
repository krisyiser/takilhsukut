import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, Music, Users, MapPin, Star, Clock } from 'lucide-react';

export default function CumbreTajinPage() {
  const festivalHighlights = [
    {
      title: "Conciertos Internacionales",
      description: "Artistas de talla mundial se presentan en el escenario principal, fusionando música contemporánea con tradiciones ancestrales.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      icon: <Music className="w-6 h-6 text-totonaca-oro-500" />
    },
    {
      title: "Ceremonias Tradicionales",
      description: "Rituales sagrados y ceremonias ancestrales que conectan con la espiritualidad y cosmovisión Totonaca.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      icon: <Star className="w-6 h-6 text-totonaca-jade-500" />
    },
    {
      title: "Danza de los Voladores",
      description: "La ceremonia principal del festival, donde los voladores realizan su ritual sagrado ante miles de espectadores.",
      image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=800&h=600&fit=crop",
      icon: <Users className="w-6 h-6 text-totonaca-tierra-500" />
    },
    {
      title: "Mercado Artesanal",
      description: "Exposición y venta de artesanías tradicionales Totonacas, gastronomía local y productos culturales.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      icon: <MapPin className="w-6 h-6 text-totonaca-copal-500" />
    }
  ];

  const pastEditions = [
    {
      year: "2024",
      theme: "Xokgonat",
      attendance: "320,000",
      artists: "150+",
      days: "4"
    },
    {
      year: "2023",
      theme: "Sasti Latamat",
      attendance: "295,000",
      artists: "140+",
      days: "4"
    },
    {
      year: "2022",
      theme: "Limakaxtum",
      attendance: "280,000",
      artists: "130+",
      days: "4"
    }
  ];

  const schedule = [
    {
      day: "Jueves",
      date: "21 de Marzo",
      events: [
        { time: "10:00", event: "Inauguración oficial" },
        { time: "12:00", event: "Ceremonia del Equinoccio" },
        { time: "16:00", event: "Danza de los Voladores" },
        { time: "20:00", event: "Concierto de apertura" }
      ]
    },
    {
      day: "Viernes",
      date: "22 de Marzo",
      events: [
        { time: "10:00", event: "Talleres culturales" },
        { time: "14:00", event: "Conferencias magistrales" },
        { time: "17:00", event: "Danza de los Voladores" },
        { time: "21:00", event: "Noche de jazz y fusión" }
      ]
    },
    {
      day: "Sábado",
      date: "23 de Marzo",
      events: [
        { time: "09:00", event: "Mercado artesanal" },
        { time: "15:00", event: "Concurso de danzas" },
        { time: "18:00", event: "Danza de los Voladores" },
        { time: "22:00", event: "Gran concierto principal" }
      ]
    },
    {
      day: "Domingo",
      date: "24 de Marzo",
      events: [
        { time: "10:00", event: "Ceremonia de clausura" },
        { time: "13:00", event: "Último vuelo ceremonial" },
        { time: "16:00", event: "Despedida cultural" },
        { time: "19:00", event: "Cierre del festival" }
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="El Festival Más Importante de la Cultura Totonaca"
        title="Festival Cumbre Tajín"
        description="Celebrando el equinoccio de primavera con una fusión única de tradiciones ancestrales y expresiones artísticas contemporáneas"
        backgroundImage="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#programa" size="lg" variant="cultural">
            Ver Programa 2025
          </Button>
          <Button href="#historia" size="lg" variant="outline">
            Historia del Festival
          </Button>
        </div>
      </HeroSection>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
            Desde el año 2000 se consolida como referente de identidad totonaca, integrando ceremonias Litlán, Voladores, temazcal, talleres, música y más. Su desarrollo sostenible evita dañar el sitio arqueológico de El Tajín, y promueve el respeto a la cosmovisión originaria.
          </p>
        </div>
      </section>

      {/* Atractivos del Festival */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Atractivos del Festival
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Una experiencia única que combina música, tradición, arte y espiritualidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {festivalHighlights.map((highlight, index) => (
              <Card
                key={index}
                title={highlight.title}
                description={highlight.description}
                image={highlight.image}
                variant="featured"
                className="h-full"
              >
                <div className="flex items-center mt-4">
                  {highlight.icon}
                  <span className="ml-2 text-sm font-medium text-totonaca-obsidiana-700">
                    Experiencia destacada
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historia del Festival */}
      <section id="historia" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                25 Años de Tradición Cultural
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Desde su primera edición en el año 2000, el Festival Cumbre Tajín se ha consolidado como el evento cultural más importante de Mesoamérica. Celebrado durante el equinoccio de primavera, este festival único combina la ancestral ceremonia de los Voladores con propuestas artísticas contemporáneas.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Cada año, el festival atrae a cientos de miles de visitantes de todo el mundo que vienen a experimentar la magia de la cultura Totonaca en el marco incomparable de la zona arqueológica de El Tajín.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed">
                El festival no solo es un evento de entretenimiento, sino una plataforma para la preservación y difusión del patrimonio cultural indígena de México.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
                alt="Historia del Festival"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-oro rounded-full opacity-20" />
            </div>
          </div>

          {/* Ediciones Pasadas */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-totonaca-obsidiana-800 mb-8 text-center">
              Ediciones Recientes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {pastEditions.map((edition, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-totonaca-jade-50 to-totonaca-oro-50 border border-totonaca-jade-200 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl font-bold text-totonaca-oro-600 mb-2">{edition.year}</div>
                  <h4 className="text-lg font-semibold text-totonaca-obsidiana-800 mb-4">
                    "{edition.theme}"
                  </h4>
                  <div className="space-y-2 text-sm text-totonaca-obsidiana-600">
                    <div className="flex justify-between">
                      <span>Asistencia:</span>
                      <span className="font-medium">{edition.attendance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Artistas:</span>
                      <span className="font-medium">{edition.artists}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duración:</span>
                      <span className="font-medium">{edition.days} días</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section id="programa" className="py-16 bg-totonaca-obsidiana-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Programa Festival 2025
            </h2>
            <p className="text-xl text-white/90">
              Programa tentativo sujeto a cambios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((day, index) => (
              <div key={index} className="bg-totonaca-obsidiana-800 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-totonaca-oro-400">{day.day}</h3>
                  <p className="text-white/90 text-sm">{day.date}</p>
                </div>
                <div className="space-y-3">
                  {day.events.map((event, i) => (
                    <div key={i} className="border-l-2 border-totonaca-jade-500 pl-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock size={14} className="text-totonaca-jade-400" />
                        <span className="text-sm font-medium text-totonaca-jade-400">
                          {event.time}
                        </span>
                      </div>
                      <p className="text-sm text-white/90">{event.event}</p>
                    </div>
                  ))}
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
            Vive la Experiencia Cumbre Tajín 2025
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Únete a la celebración cultural más importante de Mesoamérica. Boletos disponibles próximamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/centro-artes" size="lg" variant="cultural">
              Información de Boletos
            </Button>
            <Button href="/parque-takilhtsukut" size="lg" variant="outline">
              Planea tu Visita
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
