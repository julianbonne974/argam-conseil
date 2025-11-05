'use client';

import { motion } from 'framer-motion';
import {
  TrendingDown,
  TrendingUp,
  Shield,
  Settings,
  Gift,
  Award,
  Calendar,
  FileText,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Star,
  AlertCircle,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQ } from '@/lib/content';

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

// Fonction pour obtenir le composant d'icône
function getIconComponent(iconName: string) {
  const icons: { [key: string]: LucideIcon } = {
    Shield,
    TrendingUp,
    Settings,
  };

  const IconComponent = icons[iconName] || Shield;
  return <IconComponent className="w-16 h-16 text-[#b4925e]" strokeWidth={1.5} />;
}

// Section Graphique Comparatif Horizontal - Version 2.1 (Timeline Avant/Après)
const RetirementComparisonChart = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Cards comparatives */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* CARD 1 - SANS PER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border-2 border-red-200 bg-white p-6 md:p-8 rounded-sm shadow-md"
        >
          {/* Badge situation actuelle */}
          <span className="text-xs uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 inline-block mb-4 font-medium">
            SITUATION ACTUELLE
          </span>

          {/* Titre */}
          <h3 className="text-xl md:text-2xl font-medium text-[#524c5d] mb-6">
            Sans Plan Épargne Retraite
          </h3>

          {/* Timeline horizontale : Activité → Retraite */}
          <div className="grid grid-cols-2 gap-0 mt-6">

            {/* COLONNE GAUCHE - EN ACTIVITÉ */}
            <div className="border-r-2 border-dashed border-gray-300 pr-3 md:pr-4">
              <p className="text-xs uppercase font-semibold text-gray-600 mb-4 text-center">
                EN ACTIVITÉ
              </p>
              <div className="h-48 md:h-64 bg-gray-200 border-2 border-gray-400 rounded-l-sm flex items-center justify-center">
                <p className="text-center font-medium text-gray-700 px-2">
                  Salaire<br/>actuel<br/>
                  <span className="text-xl md:text-2xl font-bold block mt-2">100%</span>
                </p>
              </div>
            </div>

            {/* COLONNE DROITE - À LA RETRAITE */}
            <div className="pl-3 md:pl-4">
              <p className="text-xs uppercase font-semibold text-red-600 mb-4 text-center">
                À LA RETRAITE
              </p>
              <div className="h-48 md:h-64 flex flex-col gap-0">
                {/* Segment pension 50% */}
                <div className="flex-1 bg-blue-200 border-l-4 border-blue-500 flex items-center justify-center px-2 md:px-3 rounded-tr-sm">
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-blue-900 leading-tight">
                      Pension régime<br/>par répartition
                    </p>
                    <p className="text-base md:text-lg font-bold text-blue-700 mt-1">50%</p>
                  </div>
                </div>

                {/* Segment perte 50% */}
                <div className="flex-1 bg-red-100 border-l-4 border-red-500 flex items-center justify-center px-2 md:px-3 gap-2 rounded-br-sm">
                  <TrendingDown className="text-red-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-medium text-red-700 leading-tight">
                      Perte de<br/>revenus
                    </p>
                    <p className="text-base md:text-lg font-bold text-red-600 mt-1">50%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Label timeline */}
          <div className="text-center mt-4 text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>Départ en retraite</span>
            <span className="text-base">↓</span>
          </div>
        </motion.div>

        {/* CARD 2 - AVEC PER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative border-3 border-[#b4925e] bg-gradient-to-br from-[#b4925e]/5 to-white p-6 md:p-8 rounded-sm shadow-lg"
        >
          {/* Badge RECOMMANDÉ */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
            className="absolute -top-4 right-8 bg-[#b4925e] text-white px-4 md:px-6 py-2 text-xs uppercase tracking-widest font-bold shadow-lg flex items-center gap-2"
          >
            <Award className="w-3 h-3" />
            RECOMMANDÉ
          </motion.div>

          {/* Badge solution optimale */}
          <span className="text-xs uppercase tracking-wider text-[#b4925e] bg-[#b4925e]/10 px-3 py-1 inline-block mb-4 font-medium">
            SOLUTION OPTIMALE
          </span>

          {/* Titre */}
          <h3 className="text-xl md:text-2xl font-medium text-[#b4925e] mb-6">
            Avec Plan Épargne Retraite (PER)
          </h3>

          {/* Timeline horizontale : Activité → Retraite */}
          <div className="grid grid-cols-2 gap-0 mt-6">

            {/* COLONNE GAUCHE - EN ACTIVITÉ */}
            <div className="border-r-2 border-dashed border-[#b4925e]/30 pr-3 md:pr-4">
              <p className="text-xs uppercase font-semibold text-gray-600 mb-4 text-center">
                EN ACTIVITÉ
              </p>
              <div className="h-48 md:h-64 bg-gray-200 border-2 border-gray-400 rounded-l-sm flex items-center justify-center">
                <p className="text-center font-medium text-gray-700 px-2">
                  Salaire<br/>actuel<br/>
                  <span className="text-xl md:text-2xl font-bold block mt-2">100%</span>
                </p>
              </div>
            </div>

            {/* COLONNE DROITE - À LA RETRAITE */}
            <div className="pl-3 md:pl-4">
              <p className="text-xs uppercase font-semibold text-[#b4925e] mb-4 text-center">
                À LA RETRAITE
              </p>
              <div className="h-48 md:h-64 flex flex-col gap-0">
                {/* Segment pension ~40% */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{ transformOrigin: "top" }}
                  className="h-[38%] bg-blue-200 border-l-4 border-blue-500 flex items-center justify-center px-2 md:px-3 rounded-tr-sm"
                >
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-blue-900 leading-tight">
                      Pension régime<br/>par répartition
                    </p>
                    <p className="text-base md:text-lg font-bold text-blue-700 mt-1">50%</p>
                  </div>
                </motion.div>

                {/* Segment PER ~40% - LE PLUS IMPORTANT */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1, scale: [1, 1.02, 1] }}
                  transition={{
                    scaleY: { duration: 0.5, delay: 1 },
                    scale: { repeat: Infinity, duration: 2, delay: 1.5 }
                  }}
                  style={{ transformOrigin: "top" }}
                  className="h-[42%] bg-gradient-to-r from-[#b4925e] to-[#b4925e]/90 border-l-4 border-[#b4925e] flex items-center justify-center px-2 md:px-3 gap-2 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <Shield className="text-white w-5 h-5 md:w-7 md:h-7 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-semibold text-white leading-tight">
                      Plan Épargne<br/>Retraite
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white mt-1">30%</p>
                  </div>
                </motion.div>

                {/* Segment perte réduite ~20% */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  style={{ transformOrigin: "top" }}
                  className="h-[20%] bg-red-50 border-l-4 border-red-200 flex items-center justify-center px-2 md:px-3 rounded-br-sm"
                >
                  <div className="text-center">
                    <p className="text-xs text-red-400 leading-tight">
                      Perte réduite
                    </p>
                    <p className="text-sm md:text-base font-bold text-red-400">20%</p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>

          {/* Label timeline */}
          <div className="text-center mt-4 text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>Départ en retraite</span>
            <span className="text-base">↓</span>
          </div>
        </motion.div>
      </div>

      {/* Zone de comparaison en bas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="bg-[#524c5d] text-white p-6 md:p-8 rounded-sm grid md:grid-cols-2 gap-6 md:gap-8"
      >
        {/* Colonne gauche - Impact */}
        <div className="flex gap-4">
          <AlertCircle className="text-red-300 w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
          <div>
            <h4 className="text-lg md:text-xl font-medium mb-3">
              Impact sur votre pouvoir d'achat
            </h4>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Sans PER, vous perdez jusqu'à 1 590€/mois à la retraite. Le PER vous permet de maintenir jusqu'à 80% de votre salaire actuel.
            </p>
          </div>
        </div>

        {/* Colonne droite - Solution */}
        <div className="flex gap-4">
          <CheckCircle2 className="text-[#b4925e] w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
          <div>
            <h4 className="text-lg md:text-xl font-medium mb-3">
              Solution avec le PER
            </h4>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Grâce à un complément de revenus personnalisé, vous sécurisez votre niveau de vie et compensez la perte de votre prime de vie chère.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Composant Formulaire Contact
const COGOHRContactForm = () => {
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
      alert('Merci ! Nous vous recontacterons sous 48h.');
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
          placeholder="06 XX XX XX XX"
          value={formData.telephone}
          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hopital">Hôpital d'affectation</Label>
        <Select value={formData.hopital} onValueChange={(value) => setFormData({ ...formData, hopital: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre hôpital" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="chu-reunion">CHU La Réunion</SelectItem>
            <SelectItem value="hopital-saint-pierre">Hôpital Saint-Pierre</SelectItem>
            <SelectItem value="hopital-saint-denis">Hôpital Saint-Denis</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="statut">Statut</Label>
        <Select value={formData.statut} onValueChange={(value) => setFormData({ ...formData, statut: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="infirmier">Infirmier(e)</SelectItem>
            <SelectItem value="aide-soignant">Aide-soignant(e)</SelectItem>
            <SelectItem value="cadre">Cadre</SelectItem>
            <SelectItem value="medecin">Médecin</SelectItem>
            <SelectItem value="administratif">Administratif</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre demande</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Décrivez brièvement votre situation et vos objectifs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="acceptContact"
          required
          checked={formData.acceptContact}
          onCheckedChange={(checked) => setFormData({ ...formData, acceptContact: checked as boolean })}
        />
        <Label htmlFor="acceptContact" className="text-sm font-normal leading-relaxed cursor-pointer">
          J'accepte d'être contacté par Argam Conseils dans le cadre de ma demande *
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#b4925e] hover:bg-[#b4925e]/90 text-white py-6 text-base"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander mon étude gratuite'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Vos données sont sécurisées et ne seront jamais partagées.
      </p>
    </form>
  );
};

interface CogohrClientProps {
  content: any;
  faq: FAQ[];
}

export default function CogohrClient({ content, faq }: CogohrClientProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO ACCROCHEUR */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
            {/* COLONNE GAUCHE - CONTENU TEXTE */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-2 text-xs uppercase tracking-widest font-semibold">
                {content.hero?.badge || 'Offre Exclusive Adhérents COGOHR'}
              </div>

              {/* Titre */}
              <h1 className="text-5xl lg:text-6xl font-light text-[#524c5d] leading-tight">
                {content.hero?.titre || 'Fonctionnaires Hospitaliers à La Réunion'}
              </h1>

              {/* Sous-titre accrocheur */}
              <h2 className="text-2xl lg:text-3xl font-medium text-[#b4925e] mt-6">
                {content.hero?.soustitre || 'Votre prime de vie chère de 53% ne compte pas pour votre retraite'}
              </h2>

              {/* Paragraphe explicatif */}
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                {content.hero?.texte || 'Votre pension de retraite est calculée uniquement sur votre traitement indiciaire.'}
              </p>

              {/* Stat choc */}
              <div className="border-l-4 border-[#b4925e] bg-[#b4925e]/5 p-6 flex items-start gap-4">
                <TrendingDown className="text-[#b4925e] w-8 h-8 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-xl font-medium text-[#524c5d]">
                  {content.hero?.statChoc || "Jusqu'à -53% de revenus à la retraite sans solution adaptée"}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#contact">
                  <Button className="bg-[#b4925e] hover:bg-[#b4925e]/90 text-white px-10 py-6 text-base">
                    {content.hero?.texteBouton || 'Demander une étude gratuite'}
                  </Button>
                </Link>
                <Link href="#solution">
                  <Button variant="outline" className="border-[#524c5d] text-[#524c5d] hover:bg-[#524c5d]/5 px-10 py-6 text-base">
                    {content.hero?.texteBoutonSecondaire || 'Découvrir le PER'}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* COLONNE DROITE - VISUEL */}
            <motion.div
              className="relative h-[500px] lg:h-[600px] border border-[#524c5d]/20 overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/cogohr-site.jpg"
                alt="Site COGOHR Trois-Bassins - Résidence en bord de mer pour les hospitaliers de La Réunion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              {/* Overlay pour assurer la lisibilité si besoin */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#524c5d]/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLÉMATIQUE AVEC GRAPHIQUE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#524c5d]">
              {content.problematique?.titre || 'La Réalité de Votre Retraite'}
            </h2>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-6" />
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto mt-6">
              {content.problematique?.soustitre || 'Voici l\'impact concret de la non-prise en compte de votre prime de vie chère.'}
            </p>
          </div>

          {/* Graphique Comparatif */}
          <div>
            <RetirementComparisonChart />
          </div>

          {/* Exemples Chiffrés */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Card 1: Revenu actuel */}
            <div className="bg-white border border-[#524c5d]/20 p-8 text-center shadow-sm">
              <p className="text-4xl font-light text-[#524c5d] mb-3">
                {content.problematique?.revenuActuel || '3 000€'}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                Revenu Mensuel Actuel
              </p>
              <p className="text-sm text-gray-600">
                {content.problematique?.revenuActuelDetail || 'Dont 1 590€ de prime de vie chère (53%)'}
              </p>
            </div>

            {/* Card 2: Sans PER */}
            <div className="bg-white border border-red-200 p-8 text-center shadow-sm">
              <p className="text-4xl font-light text-red-600 mb-3">
                {content.problematique?.pensionSansPER || '1 410€'}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                Pension Sans PER
              </p>
              <p className="text-sm text-red-600 font-medium">
                {content.problematique?.pensionSansPERDetail || 'Soit une perte de 1 590€/mois'}
              </p>
            </div>

            {/* Card 3: Avec PER */}
            <div className="bg-white border-2 border-[#b4925e] p-8 text-center shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b4925e] text-white px-3 py-1 text-xs uppercase tracking-wide font-semibold">
                Solution
              </div>
              <p className="text-4xl font-light text-[#b4925e] mb-3">
                {content.problematique?.pensionAvecPER || '2 400€'}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                Pension Avec PER
              </p>
              <p className="text-sm text-[#b4925e] font-medium">
                {content.problematique?.pensionAvecPERDetail || 'Grâce à un complément de 990€/mois'}
              </p>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-center text-gray-600 mt-12 max-w-3xl mx-auto">
            {content.problematique?.note || 'Le PER vous permet de compenser jusqu\'à 80% de votre salaire actuel à la retraite.'}
          </p>
        </div>
      </section>

      {/* SECTION 3: SOLUTION PER */}
      <section id="solution" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#524c5d] mb-6">
              {content.solutionPER?.titre || 'Le Plan d\'Épargne Retraite : Votre Solution'}
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              {content.solutionPER?.soustitre || 'Une réponse adaptée, flexible et fiscalement avantageuse.'}
            </p>
          </div>

          {/* Grid 3 cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.solutionPER?.avantages?.map((avantage: any, index: number) => (
              <div key={index} className="bg-white border border-[#524c5d]/20 p-10 hover:border-[#b4925e] hover:shadow-xl hover:scale-105 transition-all duration-300">
                {getIconComponent(avantage.icone)}
                <h3 className="text-xl font-semibold text-[#524c5d] mb-4">
                  {avantage.titre}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {avantage.description}
                </p>
              </div>
            )) || (
              <>
                {/* Avantages par défaut si pas de contenu */}
                <div className="bg-white border border-[#524c5d]/20 p-10 hover:border-[#b4925e] hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Shield className="w-16 h-16 text-[#b4925e] mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-[#524c5d] mb-4">
                    Complément de Revenu Garanti
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Constituez un capital qui vous permettra de compenser la non-prise en compte de votre prime de vie chère.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: OFFRE EXCLUSIVE COGOHR */}
      <section className="py-24 bg-[#524c5d] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Badge + Titre */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#b4925e] px-6 py-2 mb-8 text-xs uppercase tracking-widest font-semibold">
              Offre Exclusive Adhérents COGOHR
            </div>
            <h2 className="text-4xl font-light mb-6">
              {content.offreExclusive?.titre || 'Votre Accompagnement Privilégié'}
            </h2>
            <p className="text-lg font-light opacity-90 max-w-2xl mx-auto">
              {content.offreExclusive?.soustitre || 'En tant qu\'adhérent du COGOHR, bénéficiez d\'avantages exclusifs.'}
            </p>
          </div>

          {/* Grid 2 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Étude Gratuite */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm p-10">
              <Gift className="w-20 h-20 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-6">
                {content.offreExclusive?.etudeGratuite?.titre || 'Étude Personnalisée Gratuite'}
              </h3>
              <ul className="space-y-4">
                {content.offreExclusive?.etudeGratuite?.points?.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-light">{point}</span>
                  </li>
                )) || null}
              </ul>
            </div>

            {/* Card 2: 0% Frais */}
            <div className="bg-white/10 border-2 border-[#b4925e] backdrop-blur-sm p-10">
              <Award className="w-20 h-20 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-6">
                {content.offreExclusive?.zeroFrais?.titre || '0% de Frais d\'Entrée'}
              </h3>
              <ul className="space-y-4">
                {content.offreExclusive?.zeroFrais?.points?.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-light">{point}</span>
                  </li>
                )) || null}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href="#contact">
              <Button className="bg-[#b4925e] hover:bg-[#b4925e]/90 text-white px-16 py-6 text-lg">
                {content.offreExclusive?.texteBouton || 'Profiter de l\'offre maintenant'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMENT ÇA MARCHE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#524c5d]">
              {content.processus?.titre || 'Comment Ça Marche ?'}
            </h2>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-6" />
          </div>

          {/* Timeline 3 étapes */}
          <div className="grid md:grid-cols-3 gap-12">
            {content.processus?.etapes?.map((etape: any, index: number) => (
              <div key={index} className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className={`w-24 h-24 ${index === 2 ? 'bg-[#b4925e]' : 'border-4 border-[#b4925e]'} flex items-center justify-center text-3xl font-light ${index === 2 ? 'text-white' : 'text-[#524c5d]'}`}>
                    {etape.numero}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  {etape.titre}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {etape.description}
                </p>
                {etape.info && (
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-[#b4925e]">
                      {index === 0 ? <Calendar className="w-4 h-4" /> : index === 1 ? <FileText className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      <span className={index === 2 ? 'font-medium' : ''}>{etape.info}</span>
                    </div>
                  </div>
                )}
              </div>
            )) || null}
          </div>
        </div>
      </section>

      {/* SECTION 6: TÉMOIGNAGES */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#524c5d]">
              {content.temoignages?.titre || 'Ils Nous Font Confiance'}
            </h2>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-6" />
          </div>

          {/* Grid témoignages */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.temoignages?.liste?.map((temoignage: any, index: number) => (
              <div key={index} className="bg-white border-l-4 border-[#b4925e] p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: temoignage.etoiles || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b4925e] text-[#b4925e]" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                  "{temoignage.texte}"
                </p>
                <div>
                  <p className="text-sm font-medium text-[#524c5d]">{temoignage.auteur}</p>
                  <p className="text-xs text-gray-500">{temoignage.poste}</p>
                </div>
              </div>
            )) || null}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ PER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Titre */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#524c5d]">
              Questions Fréquentes
            </h2>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-6" />
          </div>

          {/* Accordion FAQ */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((faqItem, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-[#524c5d]/20 px-6">
                  <AccordionTrigger className="text-left hover:text-[#b4925e] py-6">
                    {faqItem.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-6">
                    {faqItem.reponse}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA FINAL + FORMULAIRE */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[40%_60%] gap-12">
            {/* COLONNE GAUCHE - INFOS */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-[#524c5d] mb-6">
                  {content.cta?.titre || 'Prêt à Sécuriser Votre Retraite ?'}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  {content.cta?.texte || 'Ne laissez pas la perte de votre prime de vie chère impacter votre niveau de vie.'}
                </p>
              </div>

              {/* Liste avantages */}
              <ul className="space-y-3">
                {content.cta?.infos?.map((info: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0" />
                    <span>{info}</span>
                  </li>
                )) || null}
              </ul>

              {/* Logo COGOHR placeholder */}
              <div className="bg-[#524c5d]/10 p-8 border border-[#524c5d]/20">
                <p className="text-sm text-gray-600 text-center">
                  Partenaire officiel COGOHR
                </p>
                {/* TODO: Ajouter logo COGOHR ici */}
              </div>

              {/* Coordonnées */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-semibold text-[#524c5d]">Nous Contacter</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <span>{content.cta?.coordonnees?.adresse || 'Site COGOHR - Trois-Bassins, La Réunion'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <div>
                      <p>{content.cta?.coordonnees?.horaires || 'Mercredi - Samedi : 9h - 18h'}</p>
                      <p className="text-xs text-gray-500">{content.cta?.coordonnees?.visio || 'Visio disponible 7j/7 sur rendez-vous'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <span>{content.cta?.coordonnees?.telephone || '05 33 89 14 00'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <span>{content.cta?.coordonnees?.email || 'contact@argamconseils.com'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE - FORMULAIRE */}
            <div className="bg-white border-2 border-[#524c5d]/20 p-10 shadow-lg">
              <COGOHRContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
