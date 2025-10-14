'use client';

import { Gift, Award, Shield, CheckCircle2, TrendingDown, ArrowRight, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactFormModern } from '@/components/ContactFormModern';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OffreCOGOHRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Bauhaus */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge COGOHR */}
            <div className="inline-flex items-center gap-3 px-6 py-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
              <Shield className="h-5 w-5 text-[#b4925e]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#b4925e] font-semibold">
                Offre Exclusive COGOHR
              </span>
            </div>

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium pt-4">
              Partenariat
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Avantages Réservés aux</span>
              <br />
              <span className="font-bold">Membres COGOHR</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            <p className="text-base text-[#524c5d]/60 max-w-2xl mx-auto leading-relaxed font-light pt-4">
              Grâce au partenariat entre Argam Conseil et le COGOHR, bénéficiez d'avantages exclusifs pour préparer votre retraite dans les meilleures conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problématique - La Prime de Vie Chère */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Problématique
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              La Prime de <span className="font-semibold">Vie Chère</span>
            </h2>
            <p className="text-sm text-[#524c5d]/60 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Votre prime de vie chère de 53% représente une part importante de votre rémunération actuelle, mais elle n'est pas prise en compte pour le calcul de votre pension de retraite.
            </p>
          </div>

          {/* Statistiques - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-10 border-[1px] border-[#524c5d]/20 bg-white text-center">
              <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-4">
                Revenu actuel
              </p>
              <p className="text-6xl font-light text-[#524c5d] mb-2">3 000€</p>
              <p className="text-xs text-[#524c5d]/50 font-light">par mois</p>
            </div>

            <div className="p-10 border-[1px] border-[#524c5d]/20 bg-white text-center">
              <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-4">
                Pension retraite
              </p>
              <p className="text-6xl font-light text-[#524c5d] mb-2">1 400€</p>
              <p className="text-xs text-[#524c5d]/50 font-light">par mois</p>
            </div>

            <div className="p-10 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5 text-center">
              <p className="text-xs uppercase tracking-wider text-[#b4925e] font-medium mb-4">
                Perte mensuelle
              </p>
              <p className="text-6xl font-light text-[#524c5d] mb-2">−1 600€</p>
              <p className="text-xs text-[#524c5d]/50 font-light">à compenser</p>
            </div>
          </div>

          {/* Encart Explication */}
          <div className="p-8 border-[1px] border-[#524c5d]/20 bg-white">
            <div className="flex items-start gap-6">
              <div className="p-4 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5">
                <TrendingDown className="h-6 w-6 text-[#524c5d]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                  Cette baisse de revenus peut impacter significativement votre niveau de vie à la retraite. Un <span className="font-semibold text-[#524c5d]">Plan Épargne Retraite (PER)</span> vous permet de constituer un complément de revenu tout en bénéficiant d'avantages fiscaux immédiats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Votre Offre Exclusive - 2 Cards */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Avantages
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Votre Offre <span className="font-semibold">Exclusive</span>
            </h2>
            <p className="text-sm text-[#524c5d]/60 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Des avantages financiers immédiats pour tous les membres COGOHR
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 - Étude Gratuite */}
            <div className="group bg-white border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e]">
              <div className="text-center space-y-6">
                {/* Icône */}
                <div className="inline-flex items-center justify-center w-20 h-20 border-[2px] border-[#b4925e]/30 rounded-full bg-[#b4925e]/5 group-hover:border-[#b4925e] transition-colors">
                  <Gift className="h-9 w-9 text-[#b4925e]" />
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-semibold text-[#524c5d]">
                  Étude Gratuite
                </h3>

                {/* Description */}
                <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                  Analyse complète de votre situation patrimoniale et simulation personnalisée sans engagement
                </p>

                {/* Liste à puces */}
                <div className="pt-6 space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Bilan patrimonial personnalisé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Simulation de revenus à la retraite</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Recommandations sur-mesure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - 0% Frais d'Entrée */}
            <div className="group bg-white border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e]">
              <div className="text-center space-y-6">
                {/* Icône */}
                <div className="inline-flex items-center justify-center w-20 h-20 border-[2px] border-[#b4925e]/30 rounded-full bg-[#b4925e]/5 group-hover:border-[#b4925e] transition-colors">
                  <Award className="h-9 w-9 text-[#b4925e]" />
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-semibold text-[#524c5d]">
                  0% Frais d'Entrée
                </h3>

                {/* Description */}
                <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                  Exonération totale des frais d'entrée (jusqu'à 3%) sur votre Plan Épargne Retraite
                </p>

                {/* Liste à puces */}
                <div className="pt-6 space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Économie jusqu'à 3% du montant investi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Plus d'argent travaille pour vous</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Avantage réservé aux membres COGOHR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple d'Économie */}
          <div className="p-10 border-[1px] border-[#524c5d]/20 bg-white">
            <h3 className="text-xl font-semibold text-[#524c5d] mb-8 text-center">
              Exemple d'Économie Réalisée
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-3">
                  Versement initial
                </p>
                <p className="text-4xl font-light text-[#524c5d]">10 000€</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#b4925e] font-medium mb-3">
                  Frais évités
                </p>
                <p className="text-4xl font-light text-[#b4925e]">300€</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-3">
                  Capital investi
                </p>
                <p className="text-4xl font-light text-[#524c5d]">10 000€</p>
              </div>
            </div>
            <p className="text-xs text-[#524c5d]/50 text-center mt-8 font-light">
              * Calcul basé sur des frais d'entrée standards de 3%
            </p>
          </div>
        </div>
      </section>

      {/* Le COGOHR */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Partenaire
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Qu'est-ce que le <span className="font-semibold">COGOHR</span> ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto p-10 border-[1px] border-[#524c5d]/20 bg-white">
            <div className="flex items-start gap-6">
              <div className="p-4 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                <Shield className="h-8 w-8 text-[#b4925e]" />
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Comité des Œuvres Sociales des Hôpitaux de La Réunion
                </h3>
                <p className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                  Le COGOHR est le comité d'action sociale des personnels hospitaliers de La Réunion. Il propose de nombreux avantages et services à ses membres : chèques vacances, aide au logement, prestations culturelles et sportives, et désormais un accès privilégié au conseil patrimonial avec Argam Conseil.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Réservé aux agents hospitaliers de La Réunion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Partenariats exclusifs pour améliorer votre quotidien</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Accompagnement social et professionnel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de Contact Spécifique COGOHR */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Nous Contacter
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Profitez de Votre <span className="font-semibold">Offre Exclusive</span>
            </h2>
            <p className="text-sm text-[#524c5d]/60 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Vous êtes membre COGOHR ? Contactez-nous dès maintenant pour bénéficier de vos avantages.
            </p>
          </div>

          <div className="grid lg:grid-cols-[60%_40%] gap-16">
            {/* LEFT - Formulaire */}
            <div className="bg-white p-10 border-[1px] border-[#524c5d]/20">
              <h3 className="text-xl font-semibold text-[#524c5d] mb-6">
                Demander Votre Étude Gratuite
              </h3>
              <ContactFormModern />

              {/* Rappel avantages COGOHR */}
              <div className="mt-8 p-6 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#b4925e] mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-[#524c5d] mb-2">
                      N'oubliez pas de cocher la case "Membre COGOHR"
                    </p>
                    <p className="text-xs text-[#524c5d]/60 font-light leading-relaxed">
                      Pour bénéficier de votre étude gratuite et de 0% de frais d'entrée sur votre Plan Épargne Retraite.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Contact Direct */}
            <div className="space-y-6">
              <div className="bg-white p-8 border-[1px] border-[#524c5d]/20">
                <h3 className="text-lg font-semibold text-[#524c5d] mb-6">
                  Nous Appeler Directement
                </h3>
                <a href="tel:0533891400" className="group block">
                  <div className="flex items-center gap-4 p-5 border-[1px] border-[#524c5d]/20 bg-[#524c5d]/5 transition-all duration-300 hover:border-[#b4925e] hover:bg-[#b4925e]/5">
                    <div className="p-3 border-[1px] border-[#524c5d]/15 bg-white group-hover:border-[#b4925e]/30 transition-colors">
                      <Phone className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-1">
                        Téléphone
                      </p>
                      <p className="text-xl font-semibold text-[#524c5d]">
                        05 33 89 14 00
                      </p>
                      <p className="text-xs text-[#524c5d]/60 font-light mt-1">
                        Du lundi au vendredi, 9h-18h
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white p-8 border-[1px] border-[#524c5d]/20">
                <h3 className="text-lg font-semibold text-[#524c5d] mb-4">
                  Vos Avantages
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Étude patrimoniale gratuite</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">0% de frais d'entrée sur PER</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#524c5d]/70 font-light">Expert spécialisé La Réunion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Dark */}
      <section className="py-32 bg-[#524c5d]">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Rejoignez les <span className="font-bold">Membres COGOHR</span>
            </h2>
            <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">
              Qui ont déjà profité de leur étude patrimoniale gratuite et préparent sereinement leur retraite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <button className="group relative px-12 py-5 bg-white border-[1px] border-white text-[#524c5d] text-sm uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-300 hover:bg-[#b4925e] hover:text-white hover:border-[#b4925e]">
                  <span className="relative z-10 flex items-center gap-3">
                    Demander mon étude gratuite
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <a href="tel:0533891400">
                <button className="group relative px-12 py-5 bg-transparent border-[1px] border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#524c5d] hover:border-white">
                  <span className="relative z-10 flex items-center gap-3">
                    <Phone className="h-4 w-4" />
                    05 33 89 14 00
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
