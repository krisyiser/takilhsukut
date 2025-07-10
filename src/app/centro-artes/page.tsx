'use client';

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/HeroSection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Award, BookOpen, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CentroArtesPage() {
  const achievements = [
    {
      title: "500+ Graduados",
      description: "Estudiantes certificados en diversas casas-escuela",
      icon: <Award className="w-8 h-8 text-lion" />
    },
    {
      title: "18 Casas-Escuela",
      description: "Espacios vivos de aprendizaje y legado",
      icon: <Users className="w-8 h-8 text-burntOrange" />
    },
    {
      title: "20 Años",
      description: "De experiencia en educación cultural",
      icon: <BookOpen className="w-8 h-8 text-brownSugar" />
    },
    {
      title: "Reconocimiento UNESCO",
      description: "Buenas Prácticas de Salvaguardia del Patrimonio Cultural Inmaterial (2012)",
      icon: <Heart className="w-8 h-8 text-roseEbony" />
    }
  ];

  const casasEscuela = [
  {
    title: "Kantiyán / Casa de los Abuelos",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/KANTIYÁN/Napuxkun Lakgkgolon 2022.jpg",
    description: "Lugar donde los sabios comparten el legado Totonaca y orientan el proceso educativo del CAI."
  },
  {
    title: "Pulhtáman / Casa de la Alfarería Tradicional Totonaca",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/ALFARERÍA TRADICIONAL/IMG_5041.JPG",
    description: "Espacio para recuperar la alfarería ancestral, conectando técnica, creatividad y economía comunitaria."
  },
  {
    title: "Pumastakayawantachiwín / Casa de la Palabra Florida",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/PALABRA FLORIDA/IMG_5277.JPG",
    description: "Cultiva el arte de la palabra, el lenguaje ritual y la oralidad como saber generoso."
  },
  {
    title: "Pulhtáwan / Casa del Mundo del Algodón",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/MUNDO DEL ALGODÓN/CAIM1724.JPG",
    description: "Centro de regeneración del arte textil, del cultivo del algodón al bordado simbólico."
  },
  {
    title: "Pulakgtáwakga / Casa de las Danzas Tradicionales",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/DANZA/_MG_0077.JPG",
    description: "Forma a danzantes ceremoniales con profundo sentido espiritual y colectivo."
  },
  {
    title: "Pumakgatáwakga / Casa de la Música",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/MÚSICA TRADICIONAL/IMG_5432.JPG",
    description: "Laboratorio musical que dialoga entre la tradición y la creación contemporánea."
  },
  {
    title: "Puma’akgsanin / Casa del Arte de Sanar",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/MEDICINA TRADICIONAL/IMG_9075.jpg",
    description: "Forma a nuevos médicos tradicionales mediante saberes espirituales y herbolarios."
  },
  {
    title: "Pulakgkaxtlawakantawá / Casa de la Cocina Tradicional Totonaca",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/COCINA TRADICIONAL/Bracero_07.jpg",
    description: "Preserva la cocina como arte de identidad, memoria y espiritualidad."
  },
  {
    title: "Kxpumalakakxtukán takatsín / Casa del Arte de la Representación",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/ARTE DE LA REPRESENTACIÓN/IMG_9809.JPG",
    description: "Espacio de creación escénica ritual, diálogo y expresión colectiva."
  },
  {
    title: "Pumánin / Casa de las Pinturas",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/PINTURAS/IMG_4873.JPG",
    description: "Investiga y recupera el color y sus símbolos en el arte Totonaca."
  },
  {
    title: "Púxwakni / Casa del Corazón de la Madera",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/CORAZÓN DE LA MADERA/_MG_4225.JPG",
    description: "Carpintería espiritual, creación de juguetes y objetos con identidad."
  },
  {
    title: "Pulakgatayan / Casa de Turismo Comunitario",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/TURISMO COMUNITARIO/_MG_3164.JPG",
    description: "Promueve turismo cultural sostenible desde la comunidad."
  },
  {
    title: "Pumakgpuntumintakatsín / Casa de Medios de Comunicación y Difusión",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/MEDIOS DE COMUNICACIÓN/_MG_2418.JPG",
    description: "Capacita en medios digitales para la promoción del arte indígena."
  },
  {
    title: "Katuxawat / Casa de la Tierra",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/TIERRA/IMG_9285.JPG",
    description: "Fomenta ecotecnias, cuidado del entorno y armonía con la naturaleza."
  },
  {
    title: "Xatakatsín Limaxkgakgentastakat / Escuela de Museología Indígena",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/MUSEOLOGÍA/IMG_5607.JPG",
    description: "Reflexiona sobre el patrimonio desde una visión indígena."
  },
  {
    title: "Xochikali Tepeko: Moyolitia Sintsi / La Casa de la Flor en Tepeko",
    image: "/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/Xochikali/_MG_3294.JPG",
    description: "Nuevo espacio para el resurgir del maíz y la memoria sagrada."
  }
];

  return (
    <Layout>
      <HeroSection
        subtitle="Formación Integral en Tradiciones Ancestrales"
        title="Centro de las Artes Indígenas"
        description="Preservando y transmitiendo el conocimiento cultural Totonaco a través de la educación en las Casas-Escuela."
        backgroundImage="/Requerimiento para diapositivas/hero-centro-artes.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#casas-escuela" size="lg" variant="cultural">
            Ver Casas-Escuela
          </Button>
          <Button href="#inscripciones" size="lg" variant="outline">
            Inscripciones Abiertas
          </Button>
        </div>
      </HeroSection>

{/* Introducción al modelo educativo */}
<section className="py-20 bg-white text-sealBrown">
  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-6">
        Un Modelo Educativo Reconocido por la UNESCO
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        El <strong>Centro de las Artes Indígenas</strong> (CAI) fue declarado en 2012 como <em>Buena Práctica de Salvaguardia del Patrimonio Cultural Inmaterial</em> por la <strong>UNESCO</strong>, convirtiéndose en el primer modelo educativo indígena reconocido en toda Centro y Norteamérica.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Inspirado en la estructura de un pueblo Totonaca, el CAI es un espacio vivo que transmite conocimientos ancestrales a través de <strong>16 Casas-Escuela</strong>. Cada una de ellas fusiona arte, espiritualidad, ritualidad y saber comunitario en un proceso formativo holístico.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Su método se basa en la enseñanza oral y experiencial, la recuperación de técnicas tradicionales, la práctica del arte como servicio colectivo y el desarrollo del <strong>DON</strong> personal: esa capacidad única que cada persona posee y que florece con el acompañamiento de Abuelas, Abuelos, artistas y guías espirituales.
      </p>
      <p className="text-lg leading-relaxed">
        Este modelo pedagógico no fragmenta el conocimiento, sino que lo integra desde la cosmovisión Totonaca, revitalizando la lengua materna, los oficios, la medicina tradicional, la cocina ritual y la creación artística como formas vivas de identidad y resistencia cultural.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/Requerimiento para diapositivas/2. Casas-Escuela (Centro de las Artes Indígenas)/KANTIYÁN/IMG_5308.JPG"
        alt="Sabiduría ancestral en acción"
        className="rounded-lg shadow-2xl"
      />
    </motion.div>
  </div>
</section>

      {/* Casas-Escuela */}
      <section id="casas-escuela" className="py-20 bg-totonaca-tierra-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
              Casas-Escuela
            </h2>
            <p className="text-xl text-totonaca-obsidiana-600 max-w-3xl mx-auto">
              Espacios vivos de aprendizaje donde florece la cultura Totonaca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casasEscuela.map((casa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  title={casa.title}
                  description={casa.description}
                  image={casa.image}
                  variant="cultural"
                  className="h-full transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-20 bg-dun">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-4">
              Logros del Centro de las Artes Indígenas
            </h2>
            <p className="text-xl text-sealBrown max-w-3xl mx-auto">
              Más de dos décadas fortaleciendo la identidad, el conocimiento y la cultura del Totonacapan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sealBrown text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscripciones" className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black mb-6">
            Inscríbete y Forma Parte del Legado
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Vive la experiencia educativa en una de las Casas-Escuela del Centro de las Artes Indígenas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/parque-takilhtsukut" size="lg" variant="cultural">
              Visita el Parque
            </Button>
            <Button href="/consejo-voladores" size="lg" variant="outline">
              Conoce a los Maestros
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
