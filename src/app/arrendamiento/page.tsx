import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Building2, Calendar, MapPin, Users, Ruler } from 'lucide-react';

export default function ArrendamientoPage() {
  const spaces = [
    {
      name: "Foro Cultural",
      description:
        "Espacio versátil techado ideal para conciertos, conferencias, obras de teatro, ceremonias y eventos diversos.",
      capacity: "300 personas",
      size: "612 m²",
      location: "Área central del parque",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8aa09b5791?w=800&h=600&fit=crop",
    },
    {
      name: "Foro Nicho de la Música",
      description:
        "Espacio con concha acústica y capacidad para grandes conciertos y actividades artísticas. Ideal para ensambles, bandas, presentaciones escénicas y festivales.",
      capacity: "1,500 personas",
      size: "3,000 m²",
      location: "Zona cultural sur",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    },
    {
      name: "Foro Nicho de la Purificación",
      description:
        "Espacio circular para actividades espirituales, artísticas y talleres que requieren contacto con la naturaleza.",
      capacity: "150 personas",
      size: "450 m²",
      location: "Zona verde oriental",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
    },
    {
      name: "Foro Nicho de la Palabra",
      description:
        "Espacio semicerrado con butacas de piedra para lecturas, foros y actividades de narración oral.",
      capacity: "150 personas",
      size: "480 m²",
      location: "Cerca del acceso principal",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    },
    {
      name: "Foro Nicho de la Danza",
      description:
        "Zona abierta con superficie de tierra para presentaciones de danza tradicional, entrenamiento físico o dinámicas grupales.",
      capacity: "300 personas",
      size: "750 m²",
      location: "Área norte del parque",
      image:
        "https://images.unsplash.com/photo-1601322329999-02926b1db2cb?w=800&h=600&fit=crop",
    },
    {
      name: "Plaza del Volador",
      description:
        "Espacio amplio para eventos masivos, ferias, ceremonias y espectáculos al aire libre, junto al poste ritual de voladores.",
      capacity: "3,000 personas",
      size: "4,800 m²",
      location: "Zona central ceremonial",
      image:
        "https://images.unsplash.com/photo-1517519014922-8fc06e43cd06?w=800&h=600&fit=crop",
    },
    {
      name: "Salones de Talleres",
      description:
        "8 espacios acondicionados con mesas, sillas y ventilación para actividades formativas, talleres, reuniones y seminarios.",
      capacity: "20 personas por salón",
      size: "32 m² cada uno",
      location: "Zona académica",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    },
    {
      name: "Cancha de Usos Múltiples",
      description:
        "Espacio exterior techado ideal para actividades deportivas, ferias, exposiciones y eventos comunitarios.",
      capacity: "500 personas",
      size: "1,050 m²",
      location: "Área deportiva",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop",
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Espacios para eventos, cultura y formación"
        title="Arrendamiento de Espacios"
        description="El Parque Takilhsukut ofrece espacios únicos para actividades culturales, educativas, artísticas, rituales o comunitarias, enmarcadas por la naturaleza y la tradición Totonaca."
        backgroundImage="https://images.unsplash.com/photo-1606788075761-49c34910d9e5?w=1920&h=1080&fit=crop"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#espacios" size="lg" variant="cultural">
            Ver Espacios Disponibles
          </Button>
        </div>
      </HeroSection>

      <section id="espacios" className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Espacios Disponibles
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              El parque cuenta con espacios flexibles, funcionales y adaptables a múltiples necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {spaces.map((space, index) => (
              <Card
                key={index}
                title={space.name}
                description={space.description}
                image={space.image}
                variant="cultural"
                className="h-full"
              >
                <div className="mt-4 space-y-2 text-sm text-totonaca-obsidiana-700">
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-totonaca-jade-500" />
                    <span>Capacidad: {space.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ruler size={16} className="text-totonaca-oro-500" />
                    <span>Dimensiones: {space.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-totonaca-copal-500" />
                    <span>Ubicación: {space.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Reserva tu Espacio en el Parque Takilhsukut
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contáctanos para conocer disponibilidad, tarifas y requisitos para realizar tu evento
          </p>
          <Button href="/contacto" size="lg" variant="outline">
            Ir al formulario de contacto
          </Button>
        </div>
      </section>
    </Layout>
  );
}
