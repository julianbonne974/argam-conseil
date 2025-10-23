'use client';

import { Gift, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AvantagesCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Avantage 1 */}
      <Card className="border-[1px] border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full border-[1px] border-border">
              <Gift className="h-6 w-6 text-foreground" />
            </div>
          </div>
          <CardTitle className="text-base font-bold text-foreground">
            Étude Personnalisée
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Analyse complète de votre situation patrimoniale, 100% gratuit et sans engagement
          </p>
        </CardContent>
      </Card>

      {/* Avantage 2 */}
      <Card className="border-[1px] border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full border-[1px] border-border">
              <Award className="h-6 w-6 text-foreground" />
            </div>
          </div>
          <CardTitle className="text-base font-bold text-foreground">
            Frais d'Entrée Offerts
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Exonération totale pour les adhérents COGOHR. Économie significative sur le long terme
          </p>
        </CardContent>
      </Card>

      {/* Avantage 3 */}
      <Card className="border-[1px] border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full border-[1px] border-border">
              <Users className="h-6 w-6 text-foreground" />
            </div>
          </div>
          <CardTitle className="text-base font-bold text-foreground">
            Accompagnement Dédié
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Conseillers experts spécialisés dans la fonction publique hospitalière
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
