import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Users, Award, BookOpen, Target } from 'lucide-react';

export default function ConsejoVoladoresPage() {
  const functions = [
    {
      title: "Salvaguarda del Ritual",
      description: "Asegurar la transmisión íntegra de la Ceremonia Ritual de Voladores desde su cosmovisión, simbolismo, música y estructura ancestral.",
      icon: <Award className="w-8 h-8 text-totonaca-oro-500" />
    },
    {
      title: "Formación Intergeneracional",
      description: "Transmitir el conocimiento ritual desde la infancia, fortaleciendo la espiritualidad y los saberes propios del pueblo Totonaca.",
      icon: <BookOpen className="w-8 h-8 text-totonaca-jade-500" />
    },
    {
      title: "Autonomía Cultural",
      description: "Ejercer el derecho a decidir sobre el destino, formas de organización, enseñanza y reconocimiento de los Voladores desde sus propias instituciones.",
      icon: <Target className="w-8 h-8 text-totonaca-tierra-500" />
    },
    {
      title: "Difusión desde el Territorio",
      description: "Posicionar la ceremonia como patrimonio vivo y político desde el pensamiento indígena y en diálogo con el mundo.",
      icon: <Users className="w-8 h-8 text-totonaca-copal-500" />
    }
  ];

  const members = [
    {
      name: "Consejo de Voladores de Papantla",
      role: "Máxima autoridad ceremonial",
      experience: "Integrado por Voladores con sabiduría ancestral",
      description: "Es el núcleo institucional que salvaguarda la ceremonia ritual, desde su dimensión espiritual, política, educativa y artística."
    },
    {
      name: "Voladores Formadores",
      role: "Transmiten saberes a nuevas generaciones",
      experience: "Acompañan procesos en escuelas y comunidades",
      description: "Voladores en activo que enseñan, cuidan y recrean la ceremonia con integridad, comprometidos con su reproducción cultural."
    },
    {
      name: "Voladores Jóvenes",
      role: "Aprendices en formación",
      experience: "Participan en escuelas de Voladores",
      description: "Niños y jóvenes Totonacas que heredan con dignidad la práctica ritual, portando el legado con responsabilidad futura."
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Patrimonio Cultural de la Humanidad"
        title="Consejo para la Protección y Preservación de la Ceremonia Ritual de Voladores"
        description="Instancia legítima del pueblo Totonaca que salvaguarda el patrimonio vivo de la ceremonia ritual, con autonomía, dignidad y sentido espiritual."
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
      />

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Salvaguardia desde el Pensamiento Indígena
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                La Ceremonia Ritual de los Voladores fue declarada Patrimonio Cultural Inmaterial de la Humanidad en 2009 por la UNESCO. Ante este reconocimiento, los pueblos indígenas asumieron su derecho y responsabilidad de salvaguardar el ritual desde su propio pensamiento.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                El Consejo es una organización autogestiva que defiende su autonomía y regula la práctica ritual sin intervención externa. A través del Centro de las Artes Indígenas, mantiene la transmisión del conocimiento de manera intergeneracional, espiritual y artística.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed">
                Este modelo de salvaguardia ha sido reconocido internacionalmente como una Buena Práctica por la UNESCO, consolidando al Consejo como una expresión viva de la autodeterminación cultural.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=800&h=600&fit=crop"
                alt="Ceremonia de los Voladores"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-oro rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-jade rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Funciones del Consejo */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Atribuciones Principales
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Estas son las acciones esenciales que guían su labor desde una perspectiva comunitaria y ceremonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {functions.map((func, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {func.icon}
                </div>
                <h3 className="text-xl font-semibold text-totonaca-obsidiana-800 mb-3">
                  {func.title}
                </h3>
                <p className="text-totonaca-obsidiana-600 leading-relaxed">
                  {func.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miembros del Consejo */}
      <section className="py-16 bg-totonaca-obsidiana-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Estructura del Consejo
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Diversas generaciones que convergen en la defensa del ritual desde el corazón del pueblo Totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div key={index} className="bg-totonaca-obsidiana-800 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-oro rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-totonaca-oro-400 font-medium mb-1">{member.role}</p>
                <p className="text-totonaca-jade-400 text-sm mb-3">{member.experience}</p>
                <p className="text-white/90 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conexión Ritual */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8">
            Más que un Vuelo, una Filosofía de Vida
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            El ritual no es un espectáculo, sino un acto ceremonial que une al cielo, la tierra y la comunidad. A través del vuelo, se expresa el equilibrio con la naturaleza, la espiritualidad Totonaca y la conexión con el universo.
          </p>
          <Button href="/centro-artes" size="lg" variant="cultural">
            Conoce el Modelo Educativo
          </Button>
        </div>
      </section>
    </Layout>
  );
}
