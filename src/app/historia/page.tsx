import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';

export default function HistoriaPage() {
  const timeline = [
  {
    year: "1872",
    title: "Fundación de Poza Rica, Veracruz",
    description: "Inicio de un asentamiento clave en la región norte del estado."
  },
  {
    year: "1905",
    title: "Se funda la comunidad de El Tajín",
    description: "Establecimiento de la comunidad donde hoy se encuentra la zona arqueológica."
  },
  {
    year: "1930-1938",
    title: "División de San Miguel Grande",
    description: "Se divide en Plan de Hidalgo y Plan de Palmar como parte del reordenamiento agrario."
  },
  {
    year: "1936",
    title: "Fundación de Reforma Escolín",
    description: "Se crea esta comunidad en el marco del reparto agrario."
  },
  {
    year: "1940",
    title: "Cambio de cultivo predominante",
    description: "La caña de azúcar es sustituida por el café como cultivo principal en la región."
  },
  {
    year: "1948",
    title: "Creación del Instituto Nacional Indigenista",
    description: "Se funda el INI, con políticas orientadas a la integración indígena."
  },
  {
    year: "1950",
    title: "Revolución Verde en México",
    description: "Modernización del campo mexicano, orientada a la maximización de la producción."
  },
  {
    year: "1970",
    title: "Expansión agrícola",
    description: "Aumenta el cultivo de cítricos y la ganadería extensiva."
  },
  {
    year: "1975",
    title: "Nacimiento del Consejo Supremo Totonaca",
    description: "Tata Juan Simbrón organiza los Consejos Supremos Indígenas como forma de representación legítima."
  },
  {
    year: "1980",
    title: "Declaración de Pátzcuaro",
    description: "Reconocimiento del derecho de los pueblos indígenas a su lengua."
  },
  {
    year: "1985",
    title: "Carretera Papantla–Poza Rica",
    description: "Se inaugura esta vía clave para la conexión regional."
  },
  {
    year: "1990",
    title: "Desaparición de los Consejos Supremos",
    description: "Desarticulación política de los consejos indígenas como estrategia del Estado."
  },
  {
    year: "1991",
    title: "Fin del reparto agrario",
    description: "Se concluye oficialmente el proceso de reparto de tierras."
  },
  {
    year: "1992",
    title: "Zona Arqueológica de El Tajín",
    description: "Reconocimiento como Patrimonio Mundial por la UNESCO."
  },
  {
    year: "1994",
    title: "Levantamiento del EZLN",
    description: "Estallido del movimiento indígena zapatista en Chiapas."
  },
  {
    year: "1999",
    title: "Gran diluvio",
    description: "Evento climático de gran impacto en la región Totonaca."
  },
  {
    year: "2000",
    title: "Inauguración del Parque Takilhtsukut",
    description: "Se consolida como sede de Cumbre Tajín y centro cultural totonaca."
  },
  {
    year: "2006",
    title: "Centro de las Artes Indígenas",
    description: "Fundación del CAI como modelo educativo con base en saberes ancestrales."
  },
  {
    year: "2009",
    title: "Ceremonia de Voladores como Patrimonio Inmaterial",
    description: "Reconocimiento de la UNESCO a esta práctica ritual."
  },
  {
    year: "2012",
    title: "Registro UNESCO del CAI",
    description: "El Centro es reconocido como buena práctica de salvaguardia del patrimonio."
  },
  {
    year: "2015",
    title: "Fallece Tata Juan Simbrón",
    description: "Su legado es continuado por Tata Gerardo Cruz como presidente del COTOCOC."
  },
  {
    year: "2018",
    title: "Plan Tlan Latamat",
    description: "El Consejo Totonaca (COTOCOC) diseña un plan de vida digno para las comunidades."
  }
];


  return (
    <Layout>
      <HeroSection
        subtitle="Nuestros Orígenes"
        title="Historia del Complejo"
        description="Más de dos décadas de trabajo colectivo para fortalecer la identidad del Totonacapan y preservar su patrimonio vivo."
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-blackDeep mb-6">
                De Raíces Milenarias
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                El Complejo Cultural Takilhtsukut surge de un proceso largo de organización comunitaria y reflexión cultural. Su historia comienza con el reconocimiento internacional de la zona arqueológica de El Tajín en 1992 y se consolida con la necesidad de articular el patrimonio material e inmaterial del pueblo Totonaca en un solo espacio.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Desde entonces, este proyecto ha sido una plataforma de cocreación entre comunidades, artistas, sabios tradicionales y organizaciones, con el objetivo de formar nuevas generaciones desde sus raíces, revitalizar ceremonias, conservar saberes y fomentar el arte indígena.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                La evolución de Takilhtsukut representa un modelo vivo de regeneración cultural, educativa y espiritual, que ha hecho del Totonacapan un referente internacional en el campo del patrimonio vivo.
              </p>
            </div>
            <div className="relative">
              <img
                src="/Requerimiento para diapositivas/1. Imágenes Generales del Complejo/_MG_0361.JPG"
                alt="Centro cultural Totonaca"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-lion rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-blackDeep mb-4">
              Línea de Tiempo
            </h2>
            <p className="text-xl text-neutral-700">
              Principales hitos en la consolidación del complejo
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-claret/40"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lion rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="relative bg-white rounded-lg shadow-lg p-6 border border-neutral-200">
                      <div className="text-sm font-medium text-lion mb-1">{event.year}</div>
                      <h3 className="text-lg font-bold text-blackDeep mb-2">{event.title}</h3>
                      <p className="text-neutral-700 text-base leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-blackDeep mb-4">
              Legado Cultural
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Un modelo vivo de salvaguardia que ha dado identidad, educación y proyección internacional a la cultura Totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-lion rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blackDeep">25+</span>
              </div>
              <h3 className="text-xl font-semibold text-blackDeep mb-2">Años de Cocreación</h3>
              <p className="text-neutral-700">Dos décadas consolidando un modelo cultural comunitario</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-claret rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blackDeep">3</span>
              </div>
              <h3 className="text-xl font-semibold text-blackDeep mb-2">Patrimonios UNESCO</h3>
              <p className="text-neutral-700">El Tajín, Voladores y Centro de las Artes Indígenas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-copal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blackDeep">∞</span>
              </div>
              <h3 className="text-xl font-semibold text-blackDeep mb-2">Cultura Viva</h3>
              <p className="text-neutral-700">Una herencia espiritual y material que perdura</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-700 mb-8">
            Filosofía del Bien Vivir
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            El Complejo se rige por los principios del Tlan Latamat (el bien vivir), el respeto a la palabra y el valor espiritual de las personas y sus dones. Aquí florece un modelo de vida que fortalece la identidad, la justicia, la paz y la sostenibilidad.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-700">Gobernanza Totonaca</h3>
              <p className="text-neutral-700">
                Basada en el diálogo, la consulta y la sabiduría de las abuelas y abuelos, a través del Kantiyán (Casa Grande de Sabiduría).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-700">Educación con Espíritu</h3>
              <p className="text-neutral-700">
                Formación integral que parte de los dones con los que cada persona nace, desarrollando su vocación desde el arte, la memoria y el vínculo con la Madre Tierra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
