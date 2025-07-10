import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Building2, Calendar, MapPin, Users, Ruler } from 'lucide-react';

export default function ArrendamientoPage() {
  const spaces = [
  {
    name: "Foro Cultural",
    description: "Espacio techado para eventos culturales, conferencias, obras de teatro, ceremonias y talleres.",
    capacity: "300 personas",
    size: "612 m²",
    location: "Área central del parque",
    price: "$15,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/nichocultural.jpg"
  },
  {
    name: "Foro Nicho de la Música",
    description: "Foro escénico al aire libre con concha acústica, ideal para conciertos masivos, festivales y presentaciones artísticas.",
    capacity: "1,500 personas",
    size: "3,000 m²",
    location: "Zona cultural sur",
    price: "$25,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/nichomusica.jpeg"
  },
  {
    name: "Nicho del encuentro",
    description: "Escenario de madera con gradas, apropiado para encuentros ceremoniales, culturales y convivencias escolares.",
    capacity: "250 personas",
    size: "550 m²",
    location: "Área sagrada del parque",
    price: "$10,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/tewikgapan.jpg"
  },
  {
    name: "Campamento VIP",
    description: "Escenario con techado tipo palapa, ideal para presentaciones artísticas, rituales o eventos colectivos.",
    capacity: "200 personas",
    size: "540 m²",
    location: "Zona de tradición",
    price: "$8,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/kalnawat.jpg"
  },
  {
    name: "Casa Escuela Kantiyán",
    description: "Espacio ceremonial con altar y círculo de diálogo, propicio para talleres, retiros, formación espiritual o educativa.",
    capacity: "50 personas",
    size: "160 m²",
    location: "Área educativa central",
    price: "$5,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/kantiyan.jpg"
  },
  {
    name: "Ágora del Arte",
    description: "Explanada circular al aire libre, perfecta para presentaciones escénicas, proyecciones, círculos de palabra o exposiciones culturales.",
    capacity: "120 personas",
    size: "600 m²",
    location: "Área exterior del CAI",
    price: "$6,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/agora.jpg"
  },
  {
    name: "Salón Clavijero",
    description: "Salón cerrado con sillas, proyector y aire acondicionado. Apto para cursos, talleres, reuniones técnicas y presentaciones formales.",
    capacity: "60 personas",
    size: "180 m²",
    location: "Edificio administrativo",
    price: "$7,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/clavijero.jpg"
  },
  {
    name: "Foro Pulakgatayan",
    description: "Espacio semicubierto para eventos comunitarios, encuentros de turismo, muestras gastronómicas y dinámicas colectivas.",
    capacity: "150 personas",
    size: "400 m²",
    location: "Zona de turismo comunitario",
    price: "$6,000.00 por día",
    image: "/Requerimiento para diapositivas/5 Arrendamiento de espacios_FALTA/Arrendamiento de espacios/pulakgatayan.jpg"
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
