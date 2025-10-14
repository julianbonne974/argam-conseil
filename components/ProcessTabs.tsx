'use client';

import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProcessTabs() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Étape 1 */}
      <Card className="border-[1px] border-border bg-card shadow-sm">
        <CardHeader>
          <div className="mb-6">
            <span className="text-5xl font-light text-muted-foreground/30">01</span>
          </div>
          <CardTitle className="text-lg font-bold text-foreground mb-4">
            Diagnostic
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Analyse de votre situation</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Simulation de perte</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Capacité d'épargne</p>
          </div>
        </CardContent>
      </Card>

      {/* Étape 2 */}
      <Card className="border-[1px] border-border bg-card shadow-sm">
        <CardHeader>
          <div className="mb-6">
            <span className="text-5xl font-light text-muted-foreground/30">02</span>
          </div>
          <CardTitle className="text-lg font-bold text-foreground mb-4">
            Solution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Plan d'épargne personnalisé</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Optimisation fiscale</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Choix des supports</p>
          </div>
        </CardContent>
      </Card>

      {/* Étape 3 */}
      <Card className="border-[1px] border-border bg-card shadow-sm">
        <CardHeader>
          <div className="mb-6">
            <span className="text-5xl font-light text-muted-foreground/30">03</span>
          </div>
          <CardTitle className="text-lg font-bold text-foreground mb-4">
            Suivi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Points réguliers</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Ajustements personnalisés</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Reporting annuel</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
