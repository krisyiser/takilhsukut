"use client";

import HeroSection from '@/components/ui/HeroSection';
import Layout from '@/components/layout/Layout';
import { motion } from "framer-motion";
import { Users, Globe, BookOpen, Lightbulb, Star } from 'lucide-react';

export default function TierraDigitalPage() {
  const objetivos = [
    "Impulsar el desarrollo de proyectos culturales apoyados en herramientas digitales, electrónicas o tecnológicas.",
    "Generar un vínculo entre la sabiduría ancestral y las nuevas generaciones a través de metodologías creativas.",
    "Fortalecer el protagonismo de los pueblos originarios en el ámbito de la innovación cultural.",
    "Desarrollar prototipos, exhibiciones y experiencias inmersivas que puedan presentarse en eventos como Cumbre Tajín.",
    "Promover la formación continua y la colaboración entre comunidades, instituciones educativas y creativos locales."
  ];
    return (
    <Layout>
      <HeroSection
        title="Tierra Digital Totonaca"
        subtitle="Tecnología al Servicio de la Cultura"
        description="Una plataforma de innovación cultural que fusiona saberes ancestrales con herramientas del siglo XXI."
        backgroundImage="/Requerimiento para diapositivas/tecno.jpeg"
      />

      {/* Introducción */}
<section className="py-24 bg-white text-sealBrown relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Texto a la izquierda */}
    <div className="relative z-10">
      <h2 className="text-4xl font-serif font-bold text-chocolateCosmos1 mb-6">
        Raíz Ancestral. Visión Futurista.
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        <strong>Tierra Digital Totonaca</strong> es el ecosistema de innovación cultural y tecnológica del Complejo Cultural Takilhtsukut. Nace desde una raíz ancestral, con profundo respeto por la memoria del pueblo Totonaca, pero con una visión clara hacia el futuro.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Aquí se desarrollan propuestas que combinan creatividad, saber tradicional y herramientas digitales para fortalecer el tejido comunitario. Es un espacio de cocreación donde conviven jóvenes, programadores, abuelas sabias, artistas, diseñadores, videastas y activistas culturales.
      </p>
      <p className="text-lg leading-relaxed">
        Esta iniciativa no solo impulsa proyectos tecnológicos con impacto positivo, sino que coloca a las comunidades indígenas como protagonistas de su propia narrativa digital. Desde Papantla, se teje un modelo inédito de <strong>tecnología con raíz</strong>.
      </p>
    </div>

    {/* Imagen a la derecha */}
    <div className="relative z-0">
      <img
        src="/Requerimiento para diapositivas/tecno.jpeg"
        alt="Tierra Digital Totonaca"
        className="rounded-xl shadow-2xl w-full"
      />
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-lion rounded-full opacity-20" />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-wine rounded-full opacity-20" />
    </div>
  </div>
</section>

 {/* Objetivos */}
      <section className="py-24 bg-dun text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-chocolateCosmos1 mb-12">
            Objetivos Específicos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objetivos.map((obj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-lion hover:scale-105 transition-transform duration-300"
              >
                <p className="text-sealBrown text-lg leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<section className="py-24 bg-gradient-to-br from-wine to-claret text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-lion mb-12">¿A Quiénes Impactamos?</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Sociedad Totonaca</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Comunidades Rurales</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Niñas y Niños</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Jóvenes Innovadores</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Mujeres Indígenas</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Artistas y Artesanos</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Escuelas y Centros Educativos</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Empresarios Sociales</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Visitantes y Turistas</span>
      <span className="bg-white text-wine font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">Investigadores y Académicos</span>
    </div>
  </div>
</section>


      {/* Qué hacemos */}
      <section className="py-20 bg-dun text-sealBrown">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-4">¿Qué Hacemos?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Diseñamos experiencias culturales inmersivas, recuperamos el conocimiento tradicional y lo conectamos con lenguajes contemporáneos. Nuestro enfoque es colaborativo, inclusivo e intergeneracional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature icon={<Lightbulb className="w-8 h-8 text-lion" />} title="Prototipado Cultural" text="Desarrollamos herramientas, plataformas y entornos digitales que promueven la cultura Totonaca." />
            <Feature icon={<BookOpen className="w-8 h-8 text-lion" />} title="Formación e Innovación" text="Talleres, laboratorios y experiencias de aprendizaje en cultura digital." />
            <Feature icon={<Globe className="w-8 h-8 text-lion" />} title="Eventos y Exhibiciones" text="Instalaciones interactivas, exposiciones multimedia y activaciones culturales con impacto social." />
            <Feature icon={<Users className="w-8 h-8 text-lion" />} title="Colaboraciones Territoriales" text="Vinculamos comunidades con instituciones, universidades y aliados tecnológicos." />
            <Feature icon={<Star className="w-8 h-8 text-lion" />} title="Rescate Patrimonial" text="Digitalización, archivo y difusión del conocimiento ancestral Totonaca." />
          </div>
        </div>
      </section>

    </Layout>
  );
}

function ImpactBubble({ label }: { label: string }) {
  return (
    <div className="bg-white text-claret font-semibold px-4 py-2 rounded-full shadow-md">
      {label}
    </div>
  );
}

function Feature({ icon, title, text }: { icon: JSX.Element; title: string; text: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-sealBrown leading-relaxed">{text}</p>
    </div>
  );
}
