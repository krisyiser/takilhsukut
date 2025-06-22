import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';

export default function HistoriaPage() {
  const timeline = [
    {
      year: "1992",
      title: "Zona Arqueológica de El Tajín",
      description: "Reconocimiento como Patrimonio de la Humanidad por la UNESCO, primer paso hacia una red cultural que daría origen al Complejo."
    },
    {
      year: "1998",
      title: "Fundamentos del Plan Takilhtsukut",
      description: "Se concibe una estrategia integral para la salvaguardia del patrimonio cultural en el Totonacapan."
    },
    {
      year: "2000",
      title: "Primera edición de Cumbre Tajín",
      description: "El festival nace como una ventana para difundir la cultura Totonaca a nivel internacional."
    },
    {
      year: "2006",
      title: "Fundación del Centro de las Artes Indígenas",
      description: "Se inaugura como una institución educativa autogestiva, conformada por abuelos, artistas y sabios tradicionales."
    },
    {
      year: "2009",
      title: "UNESCO declara la Ceremonia de Voladores como Patrimonio",
      description: "Reconocimiento internacional a una de las prácticas más sagradas del pueblo Totonaca."
    },
    {
      year: "2012",
      title: "Centro de las Artes Indígenas en Registro UNESCO",
      description: "Inscripción del CAI como buena práctica de salvaguardia del patrimonio cultural inmaterial."
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

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                De Raíces Milenarias
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                El Complejo Cultural Takilhtsukut surge de un proceso largo de organización comunitaria y reflexión cultural. Su historia comienza con el reconocimiento internacional de la zona arqueológica de El Tajín en 1992 y se consolida con la necesidad de articular el patrimonio material e inmaterial del pueblo Totonaca en un solo espacio.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                Desde entonces, este proyecto ha sido una plataforma de cocreación entre comunidades, artistas, sabios tradicionales y organizaciones, con el objetivo de formar nuevas generaciones desde sus raíces, revitalizar ceremonias, conservar saberes y fomentar el arte indígena.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed">
                La evolución de Takilhtsukut representa un modelo vivo de regeneración cultural, educativa y espiritual, que ha hecho del Totonacapan un referente internacional en el campo del patrimonio vivo.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
                alt="Centro cultural Totonaca"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-oro rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Línea de Tiempo
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Principales hitos en la consolidación del complejo
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-totonaca-tierra-300"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-totonaca-oro-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="relative bg-white rounded-lg shadow-lg p-6 border border-totonaca-tierra-200">
                      <div className="text-sm font-medium text-totonaca-oro-600 mb-1">{event.year}</div>
                      <h3 className="text-lg font-bold text-totonaca-obsidiana-800 mb-2">{event.title}</h3>
                      <p className="text-totonaca-obsidiana-600 text-base leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legado Cultural */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Legado Cultural
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Un modelo vivo de salvaguardia que ha dado identidad, educación y proyección internacional a la cultura Totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-tierra rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">25+</span>
              </div>
              <h3 className="text-xl font-semibold text-totonaca-obsidiana-800 mb-2">Años de Cocreación</h3>
              <p className="text-totonaca-obsidiana-600">Dos décadas consolidando un modelo cultural comunitario</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-jade rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-totonaca-obsidiana-800 mb-2">Patrimonios UNESCO</h3>
              <p className="text-totonaca-obsidiana-600">El Tajín, Voladores y Centro de las Artes Indígenas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-oro rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-totonaca-obsidiana-800">∞</span>
              </div>
              <h3 className="text-xl font-semibold text-totonaca-obsidiana-800 mb-2">Cultura Viva</h3>
              <p className="text-totonaca-obsidiana-600">Una herencia espiritual y material que perdura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía Totonaca */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8">
            Filosofía del Bien Vivir
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            El Complejo se rige por los principios del Tlan Latamat (el bien vivir), el respeto a la palabra y el valor espiritual de las personas y sus dones. Aquí florece un modelo de vida que fortalece la identidad, la justicia, la paz y la sostenibilidad.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Gobernanza Totonaca</h3>
              <p className="text-white/90">
                Basada en el diálogo, la consulta y la sabiduría de las abuelas y abuelos, a través del Kantiyán (Casa Grande de Sabiduría).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Educación con Espíritu</h3>
              <p className="text-white/90">
                Formación integral que parte de los dones con los que cada persona nace, desarrollando su vocación desde el arte, la memoria y el vínculo con la Madre Tierra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
