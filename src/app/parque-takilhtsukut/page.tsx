import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MapPin, Clock, Calendar, Users } from 'lucide-react';

export default function ParqueTakilhtsukutPage() {
  const areas = [
    {
      title: "Plaza del Volador",
      description:
        "Espacio ceremonial donde se celebra la Danza de los Voladores y se realizan eventos masivos de preservación cultural.",
      image:
        "/Requerimiento para diapositivas/6. Consejo de Voladores/IMG_9303.JPG",
      features: ["Ceremonias rituales", "Encuentros culturales", "Eventos masivos"]
    },
    {
      title: "Kantiyán - Casa Grande de Sabiduría",
      description:
        "Centro espiritual y político del pueblo Totonaca, dirigido por el Consejo de Abuelos y Abuelas. Lugar de diálogo y toma de decisiones tradicionales.",
      image:
        "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/KANTIYÁN/Napuxkun Lakgkgolon 2022.jpg",
      features: ["Gobernanza tradicional", "Talleres comunitarios", "Sabiduría ancestral"]
    },
    {
      title: "Centro de las Artes Indígenas",
      description:
        "Espacio educativo y de creación artística fundado en 2006. Forma parte del Registro de Buenas Prácticas de Salvaguardia de la UNESCO.",
      image:
        "Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/ALFARERÍA TRADICIONAL/IMG_4808.JPG",
      features: ["Formación artística", "Lengua y tradición", "Modelo educativo propio"]
    },
    {
      title: "Jardines y Senderos Culturales",
      description:
        "Espacios de reflexión y conexión con la naturaleza. Albergan especies de uso ceremonial y medicinal. Parte de la política climática Totonaca.",
      image:
        "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/TIERRA/IMG_0153.JPG",
      features: ["Reforestación", "Etnobotánica", "Preservación ambiental"]
    }
  ];

  const events = [
    {
      title: "Danza de los Voladores",
      time: "10:00 AM - 6:00 PM",
      frequency: "Diario",
      description:
        "Ceremonia ritual Patrimonio Cultural de la Humanidad que simboliza el equilibrio con la naturaleza y la espiritualidad ancestral."
    },
    {
      title: "Talleres Comunitarios",
      time: "9:00 AM - 4:00 PM",
      frequency: "Martes a Domingo",
      description:
        "Formación en arte Totonaca: danza, música, medicina tradicional, gastronomía, alfarería, textiles, lengua y más."
    },
    {
      title: "Recorridos Guiados",
      time: "11:00 AM, 2:00 PM, 4:00 PM",
      frequency: "Diario",
      description:
        "Exploración educativa por el Parque Takilhtsukut, sus principios filosóficos y espacios culturales vivos."
    },
    {
      title: "Encuentros y Foros",
      time: "Fechas variables",
      frequency: "Mensual",
      description:
        "Congresos, foros, festivales y encuentros que fortalecen el diálogo entre pueblos originarios y la sociedad."
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Corazón Cultural Totonaca"
        title="Parque Takilhtsukut"
        description="Santuario del Patrimonio Cultural, epicentro de espiritualidad, arte, formación y gobernanza indígena."
        backgroundImage="\Requerimiento para diapositivas\1. Imágenes Generales del Complejo\Dron2.JPG"
      />

      {/* Información General */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Un Espacio para el Buen Vivir
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                El Parque Takilhtsukut es el corazón físico y simbólico del Complejo Cultural. Con 17 hectáreas, se erige como escenario para preservar, regenerar y proyectar el patrimonio vivo de los pueblos originarios.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Es un territorio digno y estratégico que articula foros, festivales, congresos, encuentros comunitarios y espacios de transmisión cultural. Aquí, la sabiduría ancestral toma forma a través del arte, el diálogo y la espiritualidad.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-totonaca-tierra-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Ubicado en El Tajín</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-totonaca-jade-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Espacio colectivo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-totonaca-oro-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-totonaca-copal-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Abierto todo el año</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="\Requerimiento para diapositivas\1. Imágenes Generales del Complejo\_MG_0340.JPG"
                alt="Vista aérea del parque"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-jade rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas del Parque */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Espacios de Sabiduría y Cultura
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Cada rincón del parque guarda un legado ancestral dispuesto a compartirse con el mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <Card
                key={index}
                title={area.title}
                description={area.description}
                image={area.image}
                variant="cultural"
                className="h-full"
              >
                <div className="mt-4">
                  <h4 className="font-semibold text-totonaca-obsidiana-800 mb-2">Elementos Clave:</h4>
                  <ul className="space-y-1">
                    {area.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-totonaca-obsidiana-600 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-totonaca-oro-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Cultural */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Agenda Cultural Diaria
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Actividades vivas para sumergirse en la cultura Totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-totonaca-jade-50 to-totonaca-tierra-50 border border-totonaca-jade-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-totonaca-obsidiana-800">
                    {event.title}
                  </h3>
                  <span className="text-sm bg-totonaca-oro-100 text-totonaca-oro-800 px-2 py-1 rounded-full">
                    {event.frequency}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <Clock size={16} className="text-totonaca-tierra-600" />
                  <span className="text-totonaca-tierra-700 font-medium">{event.time}</span>
                </div>
                <p className="text-totonaca-obsidiana-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto y ubicación */}
      <section className="py-16 bg-totonaca-obsidiana-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Cómo Llegar</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-totonaca-oro-400 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-gray-300">
                      Carretera Poza Rica San Andrés km 17.5, Tajin, 93479<br />Papantla de Olarte, Veracruz, México
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-totonaca-oro-400 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Horarios</p>
                    <p className="text-gray-300">Lunes a Domingo: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button href="/arrendamiento" variant="cultural">
                  Rentar Espacios
                </Button>
                <Button href="/centro-artes" variant="outline">
                  Ver Talleres
                </Button>
              </div>
            </div>

            <div className="bg-totonaca-obsidiana-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Información de Visita</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Entrada General:</span>
                  <span className="text-totonaca-oro-400">$50 MXN</span>
                </div>
                <div className="flex justify-between">
                  <span>Estudiantes y Maestros:</span>
                  <span className="text-totonaca-oro-400">$25 MXN</span>
                </div>
                <div className="flex justify-between">
                  <span>Niños menores de 6 años:</span>
                  <span className="text-totonaca-oro-400">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Grupos (20+ personas):</span>
                  <span className="text-totonaca-oro-400">$40 MXN c/u</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-totonaca-obsidiana-700">
                <h4 className="font-semibold mb-2">Servicios Incluidos</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• Acceso a todas las áreas del parque</li>
                  <li>• Presentación de Danza de los Voladores</li>
                  <li>• Visita al Centro de las Artes Indígenas</li>
                  <li>• Paseo guiado por jardines y espacios ceremoniales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
