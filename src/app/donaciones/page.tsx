'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Heart, Leaf, Landmark, Users, Award, Flame } from 'lucide-react';

export default function DonacionesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Heart className="h-16 w-16 text-totonaca-oro-500 mx-auto mb-6" />
        <h1 className="text-4xl font-serif font-bold text-totonaca-obsidiana-800 mb-4">
          Dona al Complejo Cultural Takilhtsukut
        </h1>
        <p className="text-lg text-totonaca-obsidiana-600 leading-relaxed">
          Tu donativo ayuda a preservar la cultura viva Totonaca, apoyar a nuestras casas-escuela,
          mantener los espacios ceremoniales, impulsar talleres comunitarios y proteger la sabiduría ancestral.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card title="¿En qué se usan las donaciones?" variant="cultural">
          <div className="space-y-4 text-totonaca-obsidiana-700">
            <div className="flex items-center space-x-3">
              <Flame className="h-5 w-5 text-totonaca-oro-500" />
              <span>Conservación de espacios ceremoniales</span>
            </div>
            <div className="flex items-center space-x-3">
              <Landmark className="h-5 w-5 text-totonaca-jade-500" />
              <span>Mantenimiento del parque Takilhtsukut y zonas rituales</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-totonaca-tierra-500" />
              <span>Mantenimiento de las casas-escuela</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-5 w-5 text-totonaca-copal-500" />
              <span>Apoyo a danzantes, músicos y cocineras tradicionales</span>
            </div>
          </div>
        </Card>

        <Card title="Formas de Donar" variant="featured">
          <div className="space-y-4 text-totonaca-obsidiana-700">
            <Button className="w-full" size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Donar con PayPal
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Transferencia bancaria
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Donación en especie
            </Button>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-totonaca-obsidiana-600 mb-4">
          También puedes apoyar nuestra misión de otras formas:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline">Voluntariado cultural</Button>
          <Button variant="outline">Impartir talleres</Button>
          <Button variant="outline">Difundir nuestras actividades</Button>
          <Button variant="outline">Ofrecer materiales o equipo</Button>
        </div>
      </div>
    </div>
  );
}
