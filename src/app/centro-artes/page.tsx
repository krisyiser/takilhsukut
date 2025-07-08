import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BookOpen, Users, Clock, Award, GraduationCap, Heart } from 'lucide-react';

export default function CentroArtesPage() {
  const casasEscuela = [
    "Kantiyán / Casa de los Abuelos",
    "Pumastakayawantachiwín / Casa de la Palabra Florida",
    "Pulhtáwan / Casa del Mundo del Algodón",
    "Pumánin / Casa de las Pinturas",
    "Katuxawat / Casa de la Tierra",
    "Pumakgpuntumintakatsín / Casa de Medios de Comunicación y Difusión",
    "Pumakgpuntuminli’ukxilhtin / Video indígena",
    "Pumakgpuntumintachiwín / Radio Tajín",
    "Pumakgatáwakga / Casa de la Música",
    "Puma’akgsanin / Casa del Arte de Sanar",
    "Kxpumalakakxtukán takatsín / Casa del Arte de la Representación",
    "Pulhtáman / Casa de la Alfarería Tradicional Totonaca",
    "Pulakgtáwakga / Casa de las Danzas Tradicionales",
    "Pulakgkaxtlawakantawá / Casa de la Cocina Tradicional Totonaca",
    "Listakayawan Púxwakni Xlamakgspuxtu / Casa del Corazón de la Madera",
    "Pulakgatayan / Casa de Turismo Comunitario",
    "Xatakatsín Limaxkgakgentastakat / Escuela de Museología Indígena",
    "Xochikali Tepeko: Moyolitia Sintsi / La Casa de la Flor en Tepeko: Maíz que renace"
  ];

  const achievements = [
    {
      title: "500+ Graduados",
      description: "Estudiantes certificados en diversas casas-escuela",
      icon: <GraduationCap className="w-8 h-8 text-totonaca-oro-500" />
    },
    {
      title: "16 Casas Escuela",
      description: "Espacios vivos de aprendizaje y legado",
      icon: <Users className="w-8 h-8 text-totonaca-jade-500" />
    },
    {
      title: "20 Años",
      description: "De experiencia en educación cultural",
      icon: <Award className="w-8 h-8 text-totonaca-tierra-500" />
    },
    {
      title: "98% Satisfacción",
      description: "Índice de satisfacción estudiantil",
      icon: <Heart className="w-8 h-8 text-totonaca-copal-500" />
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Formación Integral en Tradiciones Ancestrales"
        title="Centro de las Artes Indígenas"
        description="Preservando y transmitiendo el conocimiento cultural Totonaco a través de la educación en las Casas-Escuela."
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#casasescuela" size="lg" variant="cultural">
            Ver Casas-Escuela
          </Button>
          <Button href="#inscripciones" size="lg" variant="outline">
            Inscripciones Abiertas
          </Button>
        </div>
      </HeroSection>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Un Modelo Educativo Ancestral
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Basado en el legado de las abuelas y abuelos del pueblo Totonaca, el Centro opera desde el Kantiyán, Casa de la Sabiduría, orientado por el Consejo de los Abuelos y Abuelas.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Cada Casa-Escuela guía a los estudiantes en el descubrimiento de su DON, a través del arte, la espiritualidad y el diálogo profundo con la tradición viva.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-totonaca-oro-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Educación con raíz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-totonaca-jade-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Modelo propio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-totonaca-tierra-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Guías sabios</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="text-totonaca-copal-600" size={20} />
                  <span className="text-totonaca-obsidiana-700">Ambiente ritual</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/KANTIYÁN/IMG_5308.JPG"
                alt="Aprendizaje ancestral"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-jade rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <section id="casasescuela" className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Casas-Escuela
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Conoce las casas que forman la columna vertebral del Centro de las Artes Indígenas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {casasEscuela.map((casa, index) => (
              <Card
                key={index}
                title={casa}
                description="Espacio de aprendizaje espiritual, artístico y comunitario"
                image="/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/KANTIYÁN/Abuelas.jpeg"
                variant="cultural"
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Logros del Centro
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Reconocido como Buenas Prácticas de Salvaguardia por la UNESCO (2012)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-totonaca-obsidiana-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-totonaca-obsidiana-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inscripciones" className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Inscríbete y Forma Parte del Legado
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Vive la experiencia educativa en una de las Casas-Escuela del Centro de las Artes Indígenas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/parque-takilhtsukut" size="lg" variant="cultural">
              Visita el Parque
            </Button>
            <Button href="/consejo-voladores" size="lg" variant="outline">
              Conoce a los Maestros
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
