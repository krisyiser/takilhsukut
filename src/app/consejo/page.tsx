import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Button from '@/components/ui/Button';

export default function ConsejoTotonacoPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Gobernanza Indígena con Historia y Futuro"
        title="Consejo Totonaco de Organizaciones y Comunidades"
        description="Institución con más de 50 años de trayectoria que trabaja por la legitimación de la gobernanza indígena y el fortalecimiento del patrimonio cultural desde la voz de los pueblos."
        backgroundImage="/Banners/consejo.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#ejes" size="lg" variant="primary">
            Conoce Nuestros Ejes
          </Button>
          <Button href="#historia" size="lg" variant="outline">
            Nuestra Historia
          </Button>
        </div>
      </HeroSection>

      {/* Misión y Visión */}
      <section className="py-16 bg-dun text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">Misión</h2>
              <p className="text-sealBrown leading-relaxed">
                Legitimar la gobernanza indígena a través del Tachixkuwit: una articulación viva entre la palabra comprometida (Takaxtlaw Tachiwin) y la unidad en la acción (Limakaxtum), para la planeación, acompañamiento y defensa de los derechos de los pueblos originarios.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">Visión</h2>
              <p className="text-sealBrown leading-relaxed">
                Ser un modelo de referencia en México y América Latina para la organización comunitaria, la autonomía cultural, el fortalecimiento de saberes ancestrales y la co-creación con instituciones desde la perspectiva del pensamiento indígena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-black text-center mb-12">Trayectoria del Consejo</h2>
          <p className="text-sealBrown text-lg leading-relaxed mb-6">
            El Consejo Totonaca nació en el año 2000 como una propuesta del pueblo Totonaca para organizar la vida espiritual y comunitaria del Totonacapan, ante el riesgo de pérdida de sus saberes, ceremonias y formas de vida. Desde su fundación, ha estado integrado por abuelas y abuelos sabios, terapeutas tradicionales, parteras, músicos rituales, guías espirituales y danzantes.
          </p>
          <p className="text-sealBrown text-lg leading-relaxed mb-6">
            Su labor se ha desarrollado en conjunto con el Centro de las Artes Indígenas, fortaleciendo la educación basada en dones, el Tlan Latamat (el bien vivir), la medicina tradicional, el diálogo intergeneracional, la consulta comunitaria y el acompañamiento espiritual en momentos de duelo, enfermedad o decisiones colectivas.
          </p>
          <p className="text-sealBrown text-lg leading-relaxed">
            Hoy en día, el Consejo Totonaca es un núcleo rector de la vida comunitaria, reconocido por instituciones educativas, culturales y organismos internacionales por su capacidad de sanar, orientar y formar a partir del pensamiento indígena vivo.
          </p>
        </div>
      </section>

      {/* Ejes */}
      <section id="ejes" className="py-20 bg-brownSugar">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Ejes de Acción</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Espiritualidad y Sanación',
                text: 'Ceremonias, rituales, temazcales, limpias y rezos para la armonización espiritual y física de personas y comunidades.'
              },
              {
                title: 'Consulta y Gobernanza',
                text: 'Acompañamiento en asambleas, toma de decisiones y procesos colectivos desde la palabra y el consenso.'
              },
              {
                title: 'Educación con Identidad',
                text: 'Participación en la formación de jóvenes y niños en el CAI, compartiendo saberes ancestrales en las casas-escuela.'
              },
              {
                title: 'Justicia Comunitaria',
                text: 'Resolución de conflictos internos desde la sabiduría, el perdón, la escucha y la palabra comunitaria.'
              },
              {
                title: 'Partería y Medicina Tradicional',
                text: 'Atención a mujeres embarazadas, preparación de remedios, herbolaria, masajes, y cuidado tradicional del cuerpo.'
              },
              {
                title: 'Ceremonias Cíclicas',
                text: 'Celebraciones rituales del calendario agrícola, como el día de los abuelos, el día de muertos y el inicio de la siembra.'
              }
            ].map((eje, i) => (
              <div key={i} className="bg-sealBrown/90 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-lion mb-3">{eje.title}</h3>
                <p className="text-dun leading-relaxed">{eje.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
