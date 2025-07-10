import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Users, Award, BookOpen, Target, Leaf, Book, ShieldCheck, Sparkles } from 'lucide-react';

export default function ConsejoVoladoresPage() {
  const functions = [
    {
      title: "Salvaguarda del Ritual",
      description: "Asegurar la transmisión íntegra de la Ceremonia Ritual de Voladores desde su cosmovisión, simbolismo, música y estructura ancestral.",
      icon: <Award className="w-8 h-8 text-lion" />
    },
    {
      title: "Formación Intergeneracional",
      description: "Transmitir el conocimiento ritual desde la infancia, fortaleciendo la espiritualidad y los saberes propios del pueblo Totonaca.",
      icon: <BookOpen className="w-8 h-8 text-brownSugar" />
    },
    {
      title: "Autonomía Cultural",
      description: "Ejercer el derecho a decidir sobre el destino, formas de organización, enseñanza y reconocimiento de los Voladores desde sus propias instituciones.",
      icon: <Target className="w-8 h-8 text-burntOrange" />
    },
    {
      title: "Difusión desde el Territorio",
      description: "Posicionar la ceremonia como patrimonio vivo y político desde el pensamiento indígena y en diálogo con el mundo.",
      icon: <Users className="w-8 h-8 text-roseEbony" />
    }
  ];

  const actividades = [
    {
      title: "Guardias del Tsakatkiwi",
      text: "Los Voladores protegen y reforestan el árbol sagrado que da origen al ritual: el tsakatkiwi, símbolo de conexión entre tierra y cielo.",
      icon: <Leaf className="w-6 h-6 text-lion" />
    },
    {
      title: "Maestros Artesanos",
      text: "Elaboran a mano sus flautas, tambores y vestimentas rituales, bordando su identidad en cada símbolo y nota musical.",
      icon: <Sparkles className="w-6 h-6 text-brownSugar" />
    },
    {
      title: "Educadores del Viento",
      text: "Transmiten el saber ancestral en las Casas-Escuela y comunidades, sembrando vocaciones desde la niñez.",
      icon: <Book className="w-6 h-6 text-roseEbony" />
    },
    {
      title: "Guardianes del Compromiso",
      text: "Asumen su papel con dignidad: el vuelo no es espectáculo, es deber, es llamado, es vida y continuidad.",
      icon: <ShieldCheck className="w-6 h-6 text-burntOrange" />
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Patrimonio Cultural de la Humanidad"
        title="Consejo para la Protección y Preservación de la Ceremonia Ritual de Voladores"
        description="Instancia legítima del pueblo Totonaca que salvaguarda el patrimonio vivo de la ceremonia ritual, con autonomía, dignidad y sentido espiritual."
        backgroundImage="/Requerimiento para diapositivas/voladores-hero.jpg"
      />

      <section className="py-16 bg-dun">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-serif font-bold text-black mb-6">
          Más que un Vuelo: Una Forma de Vida
        </h2>
        <p className="text-lg text-sealBrown leading-relaxed mb-6">
          La figura del Volador representa una síntesis viva entre lo sagrado, lo artístico y lo comunitario. No se trata únicamente de ejecutar un ritual ancestral: ser Volador implica asumir una profunda responsabilidad espiritual, educativa, ambiental y cultural frente a su comunidad y al legado del pueblo Totonaca.
        </p>
        <p className="text-lg text-sealBrown leading-relaxed mb-6">
          Los Voladores no solo se elevan por los aires en un acto ceremonial cargado de simbolismo. Son guardianes del tsakatkiwi, el árbol sagrado del palo volador, que siembran, cuidan y preservan. Son artesanos que tallan sus propios tambores y flautas, transmisores de conocimientos que enseñan el ritual en escuelas comunitarias, bordadores de sus vestimentas tradicionales y pilares espirituales en la vida colectiva.
        </p>
        <p className="text-lg text-sealBrown leading-relaxed">
          La Ceremonia Ritual de los Voladores no es un espectáculo: es una ofrenda al universo, una expresión tangible del equilibrio entre el ser humano y la naturaleza. Aquellos que reciben el don del vuelo lo reconocen como un llamado profundo que marca el rumbo de su existencia y los convierte en portadores de una herencia que trasciende generaciones.
        </p>
      </div>
      <div className="relative">
        <img
          src="/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/DANZA/_MG_0080.JPG"
          alt="Ceremonia de los Voladores"
          className="rounded-lg shadow-2xl"
        />
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-lion rounded-full opacity-30"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brownSugar rounded-full opacity-30"></div>
      </div>
    </div>
  </div>
</section>


      {/* Actividades Complementarias */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-chocolateCosmos1 mb-4">
              Detrás del Ritual: Una Vida Dedicada
            </h2>
            <p className="text-lg text-sealBrown max-w-3xl mx-auto">
              Las funciones de los Voladores van más allá del vuelo. Aquí se expresan otras dimensiones fundamentales de su labor diaria.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {actividades.map((act, index) => (
              <div key={index} className="bg-dun rounded-xl shadow-xl p-6 text-center">
                <div className="mb-4 flex justify-center">{act.icon}</div>
                <h3 className="text-lg font-bold text-chocolateCosmos1 mb-2">{act.title}</h3>
                <p className="text-sealBrown text-sm leading-relaxed">{act.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funciones del Consejo */}
      <section className="py-16 bg-dun">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-4">
              Atribuciones Principales
            </h2>
            <p className="text-xl text-sealBrown max-w-3xl mx-auto">
              Estas son las acciones esenciales que guían su labor desde una perspectiva comunitaria y ceremonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {functions.map((func, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {func.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {func.title}
                </h3>
                <p className="text-sealBrown leading-relaxed">
                  {func.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-8">
            Más que un Vuelo, una Filosofía de Vida
          </h2>
          <p className="text-xl text-sealBrown leading-relaxed mb-8">
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
