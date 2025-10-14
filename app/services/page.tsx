'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  PiggyBank,
  Shield,
  Briefcase,
  TrendingUp,
  Home,
  Users,
  FileText,
  Heart,
  Building2,
  Calculator,
  Wallet,
  BarChart3,
  Landmark
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Minimal */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center space-y-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium">
              Expertise
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Nos</span> <span className="font-bold">Services</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            <p className="text-base text-[#524c5d]/60 max-w-2xl mx-auto leading-relaxed font-light pt-4">
              Un accompagnement global et personnalisé pour optimiser votre patrimoine et sécuriser votre avenir.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Gestion de Patrimoine */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
              <PiggyBank className="h-8 w-8 text-[#b4925e]" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
                Gestion de <span className="font-semibold">Patrimoine</span>
              </h2>
              <p className="text-sm text-[#524c5d]/50 mt-2 font-light">
                Optimisation et développement de votre patrimoine
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Plan Épargne Retraite */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <TrendingUp className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Plan Épargne</span> <span className="font-semibold">Retraite</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Solution d'épargne retraite avec avantages fiscaux immédiats
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Déduction fiscale des versements de votre revenu imposable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Sortie en capital ou en rente à la retraite</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Transmission optimisée à vos bénéficiaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Gestion pilotée ou libre selon votre profil</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Placement & Investissement Financier */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <BarChart3 className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Placement &</span> <span className="font-semibold">Investissement</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Diversification et optimisation de vos placements financiers
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#b4925e] font-medium mb-2">Enveloppes</p>
                  <ul className="space-y-2 text-sm text-[#524c5d]/70 font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-[#b4925e] mt-1">•</span>
                      <span>Assurance-vie (fonds euros et unités de compte)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#b4925e] mt-1">•</span>
                      <span>Plan Épargne Retraite (PER)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#b4925e] mt-1">•</span>
                      <span>Compte-titres ordinaire (CTO)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#b4925e] font-medium mb-2">Supports</p>
                  <ul className="space-y-2 text-sm text-[#524c5d]/70 font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-[#b4925e] mt-1">•</span>
                      <span>Fonds Euros sécurisés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#b4925e] mt-1">•</span>
                      <span>OPCVM, OPCI, ETF</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#b4925e] mt-1">•</span>
                      <span>FCPR (Private Equity)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3 - Investissement Immobilier */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Home className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Investissement</span> <span className="font-semibold">Immobilier</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Stratégies locatives et défiscalisation immobilière
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Dispositifs Pinel, Malraux, Monuments Historiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>SCPI et OPCI pour investir sans contraintes de gestion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Démembrement de propriété (nue-propriété / usufruit)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Accompagnement dans le montage financier et l'optimisation</span>
                </li>
              </ul>
            </div>

            {/* Card 4 - Transmission de Patrimoine */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Users className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Transmission de</span> <span className="font-semibold">Patrimoine</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Optimisation de la transmission à vos proches
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Donation de son vivant (donation simple, donation-partage)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Pacte Dutreil pour les entreprises familiales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Optimisation des droits de succession et démembrement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Testament, mandats de protection future</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Protection Sociale */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
              <Heart className="h-8 w-8 text-[#b4925e]" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
                Protection <span className="font-semibold">Sociale</span>
              </h2>
              <p className="text-sm text-[#524c5d]/50 mt-2 font-light">
                Sécuriser votre avenir et celui de vos proches
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Prévoyance */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Shield className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-semibold">Prévoyance</span> <span className="font-light">et Garanties</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Protection contre les aléas de la vie
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Garantie décès et invalidité (PTIA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Rente éducation pour vos enfants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Maintien de revenus en cas d'arrêt de travail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Capital ou rente pour votre conjoint et vos proches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Garanties modulables selon votre situation familiale</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Complémentaire Santé */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Heart className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Complémentaire</span> <span className="font-semibold">Santé</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Couverture adaptée à vos besoins et votre situation
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Remboursement des frais médicaux non couverts par la Sécurité Sociale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Garanties optiques, dentaires, hospitalisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Solutions dédiées aux fonctionnaires et leurs familles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Tarifs négociés avec nos partenaires</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Assurance Dépendance */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Landmark className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Assurance</span> <span className="font-semibold">Dépendance</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Anticipez la perte d'autonomie
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Rente mensuelle en cas de dépendance partielle ou totale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Services d'accompagnement et d'assistance à domicile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Protection de votre patrimoine familial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Cotisations déductibles fiscalement (selon conditions)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Pour le Dirigeant */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
              <Briefcase className="h-8 w-8 text-[#b4925e]" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
                Pour le <span className="font-semibold">Dirigeant</span>
              </h2>
              <p className="text-sm text-[#524c5d]/50 mt-2 font-light">
                Solutions dédiées aux chefs d'entreprise et professions libérales
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Retraite Dirigeant */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Building2 className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Retraite</span> <span className="font-semibold">Dirigeant</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Préparez votre retraite en optimisant fiscalité
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Article 83 : retraite supplémentaire d'entreprise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Contrat Madelin pour TNS (Travailleurs Non Salariés)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>PER Entreprise Collectif (PERECO) et PER Obligatoire (PERO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Déductibilité des cotisations de l'entreprise</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Épargne Salariale */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Users className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Épargne</span> <span className="font-semibold">Salariale</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Dispositifs collectifs motivants pour vos équipes
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Plan d'Épargne Entreprise (PEE)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Plan d'Épargne Retraite Collectif (PERECO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Participation et intéressement des salariés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Exonérations sociales et fiscales avantageuses</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Assurance Homme Clé */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <Calculator className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Assurance</span> <span className="font-semibold">Homme Clé</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Protégez votre entreprise contre la perte d'un collaborateur essentiel
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Indemnisation en cas de décès ou invalidité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Maintien de l'activité et de la trésorerie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Garanties modulables selon la valeur de la personne clé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Cotisations déductibles du résultat de l'entreprise</span>
                </li>
              </ul>
            </div>

            {/* Card 4 - Transmission d'Entreprise */}
            <div className="group border-[1px] border-[#524c5d]/20 bg-white p-8 transition-all duration-300 hover:border-[#b4925e]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                  <FileText className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#524c5d] mb-2">
                    <span className="font-light">Transmission</span> <span className="font-semibold">d'Entreprise</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                    Accompagnement dans la cession ou transmission de votre société
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Valorisation de l'entreprise et audit préalable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Optimisation fiscale de la cession (abattement, apport-cession)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Pacte Dutreil pour transmission familiale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b4925e] mt-1">•</span>
                  <span>Stratégie patrimoniale post-cession et réinvestissement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-[#524c5d]">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Prêt à <span className="font-bold">Optimiser</span> votre Patrimoine ?
          </h2>
          <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la mise en place de solutions sur-mesure adaptées à votre situation.
          </p>
          <Link href="/contact">
            <button className="group relative px-12 py-5 bg-white border-[1px] border-white text-[#524c5d] text-sm uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-300 hover:bg-[#b4925e] hover:text-white hover:border-[#b4925e]">
              <span className="relative z-10 flex items-center gap-3">
                Demander une étude gratuite
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
