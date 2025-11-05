'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Composant Formulaire Contact
export const COGOHRContactForm = ({ delai }: { delai: string }) => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    hopital: '',
    statut: '',
    message: '',
    acceptContact: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Intégrer avec Netlify Forms ou API route
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Merci ! Nous vous recontacterons sous ${delai}.`);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="prenom">Prénom *</Label>
          <Input
            id="prenom"
            required
            value={formData.prenom}
            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nom">Nom *</Label>
          <Input
            id="nom"
            required
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">Téléphone *</Label>
          <Input
            id="telephone"
            type="tel"
            required
            placeholder="06 92 XX XX XX"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="hopital">Établissement / Hôpital *</Label>
          <Select
            value={formData.hopital}
            onValueChange={(value) => setFormData({ ...formData, hopital: value })}
          >
            <SelectTrigger id="hopital">
              <SelectValue placeholder="Sélectionner votre établissement" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chu-sud">CHU Sud Réunion</SelectItem>
              <SelectItem value="chu-nord">CHU Nord Réunion</SelectItem>
              <SelectItem value="gher">GHER - Est Réunion</SelectItem>
              <SelectItem value="chor">CHOR - Ouest</SelectItem>
              <SelectItem value="epsmr">EPSMR</SelectItem>
              <SelectItem value="autre">Autre établissement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="statut">Votre situation *</Label>
          <Select
            value={formData.statut}
            onValueChange={(value) => setFormData({ ...formData, statut: value })}
          >
            <SelectTrigger id="statut">
              <SelectValue placeholder="Sélectionner votre situation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="actif">En activité</SelectItem>
              <SelectItem value="proche-retraite">Proche de la retraite (-5 ans)</SelectItem>
              <SelectItem value="nouveau">Jeune fonctionnaire</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Décrivez votre situation ou vos questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="acceptContact"
          checked={formData.acceptContact}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, acceptContact: checked as boolean })
          }
        />
        <Label
          htmlFor="acceptContact"
          className="text-sm text-gray-600 cursor-pointer"
        >
          J'accepte d'être recontacté par Argam Conseils dans le cadre de ma demande
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.acceptContact}
        className="w-full bg-[#b4925e] hover:bg-[#b4925e]/90 text-white py-6"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Vos données sont protégées et ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
};

interface OffreCOGOHRClientProps {
  horaires: any;
  children: React.ReactNode;
}

export default function OffreCOGOHRClient({ horaires, children }: OffreCOGOHRClientProps) {
  return <>{children}</>;
}