import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { getHoraires, getFAQByCategory } from '@/lib/content';
import { COGOHRContactForm } from './OffreCOGOHRClient';

// Section Graphique Comparatif Horizontal - Version 2.1 (Timeline Avant/Après)
const RetirementComparisonChart = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Cards comparatives */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* CARD 1 - SANS PER */}
        <div
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
                {/* Segment pension */}
                <div className="flex-1 bg-blue-200 border-l-4 border-blue-500 flex items-center justify-center px-2 md:px-3 rounded-tr-sm">
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-blue-900 leading-tight">
                      Pension régime<br/>par répartition
                    </p>
                  </div>
                </div>

                {/* Segment perte jusqu'à 53% */}
                <div className="flex-1 bg-red-100 border-l-4 border-red-500 flex items-center justify-center px-2 md:px-3 gap-2 rounded-br-sm">
                  <TrendingDown className="text-red-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-medium text-red-700 leading-tight">
                      Perte de<br/>revenus
                    </p>
                    <p className="text-base md:text-lg font-bold text-red-600 mt-1">jusqu'à 53%</p>
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
        </div>

        {/* CARD 2 - AVEC PER */}
        <div
          className="relative border-3 border-[#b4925e] bg-gradient-to-br from-[#b4925e]/5 to-white p-6 md:p-8 rounded-sm shadow-lg"
        >
          {/* Badge RECOMMANDÉ */}
          <div
            className="absolute -top-4 right-8 bg-[#b4925e] text-white px-4 md:px-6 py-2 text-xs uppercase tracking-widest font-bold shadow-lg flex items-center gap-2"
          >
            <Award className="w-3 h-3" />
            RECOMMANDÉ
          </div>

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
                {/* Segment pension */}
                <div
                  style={{ transformOrigin: "top" }}
                  className="h-[38%] bg-blue-200 border-l-4 border-blue-500 flex items-center justify-center px-2 md:px-3 rounded-tr-sm"
                >
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-blue-900 leading-tight">
                      Pension régime<br/>par répartition
                    </p>
                  </div>
                </div>

                {/* Segment PER - LE PLUS IMPORTANT */}
                <div
                  style={{ transformOrigin: "top" }}
                  className="h-[42%] bg-gradient-to-r from-[#b4925e] to-[#b4925e]/90 border-l-4 border-[#b4925e] flex items-center justify-center px-2 md:px-3 gap-2 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <Shield className="text-white w-5 h-5 md:w-7 md:h-7 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-semibold text-white leading-tight">
                      Plan Épargne<br/>Retraite
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white mt-1">jusqu'à 30%</p>
                  </div>
                </div>

                {/* Segment perte réduite */}
                <div
                  style={{ transformOrigin: "top" }}
                  className="h-[20%] bg-red-50 border-l-4 border-red-200 flex items-center justify-center px-2 md:px-3 rounded-br-sm"
                >
                  <div className="text-center">
                    <p className="text-xs text-red-400 leading-tight">
                      Perte réduite
                    </p>
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
        </div>
      </div>

      {/* Zone de comparaison en bas */}
      <div
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
              Le PER vous permet de reconstituer jusqu'à 30% de vos revenus actuels.
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
      </div>
    </div>
  );
};


export default function OffreCOGOHRPage() {
  const horaires = getHoraires();
  const cogohrFAQ = getFAQByCategory('COGOHR');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* SECTION 1: HERO ACCROCHEUR */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
            {/* COLONNE GAUCHE - CONTENU TEXTE */}
            <div
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-2 text-xs uppercase tracking-widest font-semibold">
                Offre Exclusive Adhérents COGOHR
              </div>

              {/* Titre */}
              <h1 className="text-5xl lg:text-6xl font-light text-[#524c5d] leading-tight">
                Fonctionnaires Hospitaliers<br />à La Réunion
              </h1>

              {/* Sous-titre accrocheur */}
              <h2 className="text-2xl lg:text-3xl font-medium text-[#b4925e] mt-6">
                Votre prime de vie chère de 53%<br />ne compte pas pour votre retraite
              </h2>

              {/* Paragraphe explicatif */}
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Votre pension de retraite est calculée uniquement sur votre traitement indiciaire. La prime de vie chère, bien qu'elle constitue une part importante de votre rémunération, n'est pas prise en compte pour le calcul de vos droits. Cela peut donc entraîner une baisse significative de vos revenus une fois à la retraite.
              </p>

              {/* Stat choc */}
              <div className="border-l-4 border-[#b4925e] bg-[#b4925e]/5 p-6 flex items-start gap-4">
                <TrendingDown className="text-[#b4925e] w-8 h-8 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-xl font-medium text-[#524c5d]">
                  Jusqu'à -53% de revenus à la retraite sans solution adaptée
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#contact">
                  <Button className="bg-[#b4925e] hover:bg-[#b4925e]/90 text-white px-10 py-6 text-base">
                    Demander une étude gratuite
                  </Button>
                </Link>
                <Link href="#solution">
                  <Button variant="outline" className="border-[#524c5d] text-[#524c5d] hover:bg-[#524c5d]/5 px-10 py-6 text-base">
                    Découvrir le PER
                  </Button>
                </Link>
              </div>
            </div>

            {/* COLONNE DROITE - VISUEL */}
            <div
              className="relative h-[500px] lg:h-[600px] border border-[#524c5d]/20 overflow-hidden shadow-xl"
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
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLÉMATIQUE AVEC GRAPHIQUE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#524c5d]">
              La Réalité de Votre Retraite
            </h2>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-6" />
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto mt-6">
              Voici l'impact concret de la non-prise en compte de votre prime de vie chère sur le calcul de vos droits à la retraite.
            </p>
          </div>

          {/* Graphique Comparatif */}
          <div>
            <RetirementComparisonChart />
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION PER */}
      <section id="solution" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#524c5d] mb-6">
              Le Plan d'Épargne Retraite :<br />Votre Solution
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Une réponse adaptée, flexible et fiscalement avantageuse pour compenser la perte liée à votre prime de vie chère.
            </p>
          </div>

          {/* Grid 3 cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Complément Garanti */}
            <div className="bg-white border border-[#524c5d]/20 p-10 hover:border-[#b4925e] hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Shield className="w-16 h-16 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#524c5d] mb-4">
                Complément de revenus
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Constituez un capital qui vous permettra de compenser en grande partie la non-prise en compte de votre prime de vie chère dans le calcul de vos droits. Sécurisez votre niveau de vie à la retraite avec des revenus complémentaires stables.
              </p>
            </div>

            {/* Card 2: Avantages Fiscaux */}
            <div className="bg-white border border-[#524c5d]/20 p-10 hover:border-[#b4925e] hover:shadow-xl hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-16 h-16 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#524c5d] mb-4">
                Avantages Fiscaux Immédiats
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Les versements sur votre PER sont déductibles de votre revenu imposable. Réduisez votre impôt dès aujourd'hui tout en préparant demain. Optimisez votre fiscalité pendant votre carrière.
              </p>
            </div>

            {/* Card 3: Flexibilité */}
            <div className="bg-white border border-[#524c5d]/20 p-10 hover:border-[#b4925e] hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Settings className="w-16 h-16 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#524c5d] mb-4">
                Flexibilité Totale
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Versements libres ou programmés selon vos capacités. À la retraite, choisissez votre mode de sortie : capital, rente viagère, ou un mix des deux. Le PER s'adapte à votre situation.
              </p>
            </div>
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
              Votre Accompagnement Privilégié
            </h2>
            <p className="text-lg font-light opacity-90 max-w-2xl mx-auto">
              En tant que adhérent du COGOHR, bénéficiez d'avantages exclusifs pour la mise en place de votre Plan d'Épargne Retraite.
            </p>
          </div>

          {/* Grid 2 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Étude Gratuite */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm p-10">
              <Gift className="w-20 h-20 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-6">
                Étude Personnalisée Gratuite
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Analyse complète de votre situation patrimoniale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Simulation personnalisée de votre PER</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Plan d'épargne adapté à vos objectifs et contraintes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Sans engagement de votre part</span>
                </li>
              </ul>
            </div>

            {/* Card 2: 0% Frais */}
            <div className="bg-white/10 border-2 border-[#b4925e] backdrop-blur-sm p-10">
              <Award className="w-20 h-20 text-[#b4925e] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-6">
                0% de Frais d'Entrée
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Exonération totale des frais d'entrée (jusqu'à 3%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Optimisation maximale de votre capital dès le départ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Économie pouvant atteindre plusieurs milliers d'euros</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">Offre réservée exclusivement aux adhérents COGOHR</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href="#contact">
              <Button className="bg-[#b4925e] hover:bg-[#b4925e]/90 text-white px-16 py-6 text-lg">
                Profiter de l'offre maintenant
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
              Comment Ça Marche ?
            </h2>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-6" />
          </div>

          {/* Timeline 3 étapes */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Étape 1 */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 border-4 border-[#b4925e] flex items-center justify-center text-3xl font-light text-[#524c5d]">
                  01
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#524c5d]">
                Prise de Rendez-vous
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Réservez votre créneau en visioconférence ou en présentiel sur le site du COGOHR à Trois-Bassins.
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-[#b4925e]">
                  <Calendar className="w-4 h-4" />
                  <span>{horaires.horaires.format} • {horaires.horaires.joursCOGOHR}</span>
                </div>
                <p className="text-xs text-gray-600">Visioconférence {horaires.visio.disponibiliteCOGOHR}</p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 border-4 border-[#b4925e] flex items-center justify-center text-3xl font-light text-[#524c5d]">
                  02
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#524c5d]">
                Étude Personnalisée Gratuite
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Diagnostic complet de votre situation : revenus actuels, projets, objectifs de retraite. Simulation précise de votre PER sur-mesure avec calcul des avantages fiscaux.
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-[#524c5d]">
                  <FileText className="w-4 h-4" />
                  <span>Sans engagement • {horaires.processus.formatDuree}</span>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-[#b4925e] flex items-center justify-center text-3xl font-light text-white">
                  03
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#524c5d]">
                Mise en Place & Suivi
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Ouverture de votre PER avec 0% de frais d'entrée. Accompagnement continu pour optimiser votre stratégie retraite et ajuster vos versements selon votre situation.
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-[#b4925e]">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Suivi dédié à vie</span>
                </div>
              </div>
            </div>
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
              {cogohrFAQ.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`q${index + 1}`}
                  className="border border-[#524c5d]/20 px-6"
                >
                  <AccordionTrigger className="text-left hover:text-[#b4925e] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: faq.reponse
                          .replace(/\n\n/g, '</p><p class="mb-3">')
                          .replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
                          .replace(/^- (.*?)$/gm, '<li>$1</li>')
                          .replace(/(<li>[\s\S]*<\/li>)/, '<ul class="list-disc pl-5 space-y-1">$1</ul>')
                      }}
                      className="[&>p]:mb-3 [&>p:last-child]:mb-0 [&_strong]:font-medium [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1"
                    />
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
                  Prêt à Sécuriser<br />Votre Retraite ?
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  Ne laissez pas la perte de votre prime de vie chère impacter votre niveau de vie à la retraite. Demandez votre étude gratuite dès maintenant.
                </p>
              </div>

              {/* Liste avantages */}
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0" />
                  <span>{horaires.delaiReponse.cta}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0" />
                  <span>100% Confidentiel</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#b4925e] flex-shrink-0" />
                  <span>Sans engagement</span>
                </li>
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
                    <span>Site COGOHR - Trois-Bassins, La Réunion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <div>
                      <p>{horaires.horaires.joursCOGOHR} : {horaires.horaires.format}</p>
                      <p className="text-xs text-gray-500">Visio disponible {horaires.visio.disponibilite} sur rendez-vous</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <span>05 33 89 14 00</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#b4925e] flex-shrink-0 mt-1" />
                    <span>contact@argamconseils.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE - FORMULAIRE */}
            <div className="bg-white border-2 border-[#524c5d]/20 p-10 shadow-lg">
              {/* Bandeau titre */}
              <div className="mb-8 pb-6 border-b border-[#524c5d]/10">
                <h2 className="text-2xl font-light text-[#524c5d] mb-3">
                  Demander une Étude Gratuite
                </h2>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Remplissez ce formulaire. Un de nos experts vous recontactera sous {horaires.delaiReponse.delai} pour échanger sur votre projet patrimonial et votre situation retraite.
                </p>
              </div>

              <COGOHRContactForm delai={horaires.delaiReponse.delai} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
