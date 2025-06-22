import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Utensils, Clock, Users, Star, ChefHat, Flame } from 'lucide-react';

export default function MujeresDeHumoPage() {
  const philosophy = [
    {
      title: "Fuego Sagrado",
      description: "El fuego como elemento transformador que da vida a los alimentos y comunica con los ancestros.",
      icon: <Flame className="w-8 h-8 text-totonaca-oro-500" />
    },
    {
      title: "Sabiduría Ancestral",
      description: "Conocimientos transmitidos de madre a hija por generaciones, provenientes de la milpa y la memoria viva.",
      icon: <Star className="w-8 h-8 text-totonaca-jade-500" />
    },
    {
      title: "Ingredientes Sagrados",
      description: "Respeto por los productos que nos brinda la madre tierra como elementos vivos del patrimonio.",
      icon: <Utensils className="w-8 h-8 text-totonaca-tierra-500" />
    },
    {
      title: "Comunidad Unida",
      description: "La cocina como espacio formativo, de encuentro, sanación y fortaleza colectiva.",
      icon: <Users className="w-8 h-8 text-totonaca-copal-500" />
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Gastronomía Tradicional Totonaca"
        title="Mujeres de Humo"
        description="Cocineras tradicionales que salvaguardan el arte culinario totonaca desde sus saberes milenarios y la transmisión comunitaria."
        backgroundImage="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&h=1080&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-totonaca-obsidiana-800 mb-6">
                Guardianas del Patrimonio Gastronómico
              </h2>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                El colectivo Mujeres de Humo es una red de más de cien cocineras tradicionales del Totonacapan, lideradas por Martha Soledad Gómez Atzin, reconocida como embajadora de la cocina tradicional mexicana. Han sido pioneras en el fomento del patrimonio cultural alimentario.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed mb-6">
                A partir de una casa-escuela, transmiten conocimientos desde los saberes de la milpa, enseñando un modelo tradicional de cocina orientado al bien vivir. Cada platillo conserva una historia, cada receta es una herencia viva.
              </p>
              <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed">
                Este colectivo impulsa no solo la preservación de recetas ancestrales, sino también su proyección en congresos, festivales y espacios turísticos. Su propuesta incluye abrir un restaurante comunitario y eventos culinarios que articulen salud, alimentación y cultura.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600741235277-9013a2f50913?w=800&h=600&fit=crop"
                alt="Cocineras Totonacas"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-oro rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Principios de Nuestra Cocina
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600">
              Filosofía culinaria que nutre cuerpo y espíritu desde el corazón totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-totonaca-obsidiana-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-totonaca-obsidiana-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Sabores que Hablan
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            En cada platillo se narra una historia, se honra una memoria y se mantiene viva la cultura de nuestras abuelas.
          </p>
          <Button href="/centro-artes" size="lg" variant="cultural">
            Conoce los Talleres
          </Button>
        </div>
      </section>
    </Layout>
  );
}
