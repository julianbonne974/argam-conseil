'use client';

import { FileText, Gift, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AvantagesCards() {
  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Avantages Exclusifs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une offre complète pour vous accompagner dans la préparation de votre retraite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Étude Personnalisée */}
          <Card className="relative overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                  GRATUIT
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold">
                Étude Personnalisée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Étude complète de votre situation patrimoniale, simulation de perte à la retraite, et analyse
                de votre capacité d'épargne. 100% gratuit, sans engagement.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Frais d'Entrée Offerts */}
          <Card className="relative overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                  OFFRE EXCLUSIVE COGOHR
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold">
                Frais d'Entrée Offerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bénéficiez d'une exonération totale des frais d'entrée (jusqu'à 3%) sur votre Plan Épargne
                Retraite. Réservé aux adhérents COGOHR.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Accompagnement Dédié */}
          <Card className="relative overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold">
                Accompagnement Dédié
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Suivi personnalisé par des conseillers experts spécialisés dans la fonction publique
                hospitalière. Disponibilité, proximité et réactivité garanties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
