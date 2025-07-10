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
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Ejes del Plan de Trabajo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              {
                title: 'Investigación, Organización y Capacitación',
                text: 'Fomenta el intercambio de conocimientos y fortalece las capacidades autogestivas y organizativas. Incluye el seguimiento del Proyecto Totonaco, las asambleas comunitarias, y programas de capacitación con perspectiva de género.'
              },
              {
                title: 'Fortalecimiento del Patrimonio Cultural y Turismo',
                text: 'Fortalece la identidad como motor de desarrollo incluyente y sostenible. Incluye la programación del Festival Cumbre Tajín, el Encuentro Internacional de Pueblos Indígenas y programas sobre etnoturismo.'
              },
              {
                title: 'Política Climática',
                text: 'Genera una plataforma de interaprendizaje y acciones concretas para la acción climática. Incluye programas de guardianes comunitarios, recuperación de semillas, reforestación y el Parlamento Climático Indígena.'
              },
              {
                title: 'Servicio de Asesoría, Gestión y Acompañamiento',
                text: 'Apoya a las autoridades comunitarias con asesoría legal, campañas de salud, mejora de vías de comunicación y apoyo a proyectos productivos.'
              },
              {
                title: 'Vinculación Institucional y Privada',
                text: 'Establece convenios de colaboración en áreas como investigación, desarrollo cultural y económico. Genera certeza legal y alianzas con instituciones como la UNAM, KINA8AT-ENSEMBLE y la Comisión para la Cooperación Ambiental.'
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
