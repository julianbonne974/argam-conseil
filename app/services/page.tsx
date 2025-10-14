'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  Home,
  TrendingUp,
  FileText,
  Shield,
  Award,
  Users,
  Briefcase,
  Heart,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#b4925e] font-medium">
              NOS SERVICES
            </p>

            <h1 className="text-4xl lg:text-5xl text-[#524c5d] font-light leading-tight">
              Notre périmètre<br />
              d'intervention
            </h1>

            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Argam Conseil vous accompagne dans une démarche globale d'optimisation de votre patrimoine professionnel et personnel. L'intégration complète des dimensions stratégiques, fiscales, sociales, financières et juridiques est la base d'un conseil personnalisé complet et optimal.
            </p>

            <div className="w-16 h-1 bg-[#b4925e] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: GESTION DE PATRIMOINE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre section */}
          <motion.div
            className="mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-1 text-xs uppercase tracking-widest font-medium">
              POUR TOUS
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d]">
              Gestion de Patrimoine
            </h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
              Une approche globale pour optimiser, sécuriser et transmettre votre patrimoine.
            </p>
          </motion.div>

          {/* Grille 3 colonnes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1: Patrimoine Immobilier */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Home className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Patrimoine Immobilier
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Identification des modes de détention</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Direct</li>
                      <li>• Indivision</li>
                      <li>• SCI / SARL patrimoniale</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Bien d'usage</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Résidence principale / secondaire</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Investissement immobilier</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Neuf / Ancien</li>
                      <li>• Location nue ou meublée</li>
                      <li>• Avec ou sans dispositifs fiscaux</li>
                      <li>• Nue propriété</li>
                      <li>• Viager</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Placement & Investissement */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <TrendingUp className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Placement & Investissement Financier
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Élaboration des stratégies d'investissements</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Enveloppes</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Assurance-vie</li>
                      <li>• Contrat de capitalisation</li>
                      <li>• Épargne Retraite (PER)</li>
                      <li>• Compte-titres</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Supports</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Fonds Euros / OPCVM / OPCI</li>
                      <li>• SCI / FCPR / FPCI</li>
                      <li>• Produits structurés</li>
                      <li>• Fonds non côtés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Optimisation Fiscale */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <FileText className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Optimisation Fiscale
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Élaboration des stratégies d'optimisation</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Supports défiscalisants</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Girardin</li>
                      <li>• FIP</li>
                      <li>• FCPI</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Dispositifs immobiliers</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Denormandie</li>
                      <li>• LMNP</li>
                      <li>• Malraux</li>
                      <li>• Déficit Foncier</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: POUR LE PARTICULIER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre section */}
          <motion.div
            className="mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-1 text-xs uppercase tracking-widest font-medium">
              PARTICULIERS
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d]">
              Solutions pour les Particuliers
            </h2>
          </motion.div>

          {/* Grille 3 colonnes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1: Régime Matrimonial */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Users className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Régime Matrimonial
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 font-light">
                  <li>• Aide au choix et à la compréhension du régime</li>
                  <li>• Identification des enjeux pendant et après l'union</li>
                  <li>• Assistance dans la mise en place des dispositions nécessaires (donation, testament, changement de régime)</li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Transmission Patrimoniale */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <FileText className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Transmission Patrimoniale
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Audit successoral</p>
                    <p className="text-gray-600 font-light">Accompagnement dans l'élaboration des stratégies de transmission</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">De votre vivant</p>
                    <p className="text-gray-600 font-light">• Donations</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">En cas de décès</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Identifier les objectifs et enjeux</li>
                      <li>• Anticiper et organiser la transmission</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Financement */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <TrendingUp className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Financement Particulier & Professionnel
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 font-light">
                  <li>• Structuration du plan de financement (avec ou sans apport)</li>
                  <li>• Type, durée et taux du crédit</li>
                  <li>• Renégociation de crédit</li>
                  <li>• Mise en place et renégociation des assurances emprunteurs</li>
                  <li>• Choix des quotités et des garanties</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: PROTECTION SOCIALE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre section */}
          <motion.div
            className="mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-1 text-xs uppercase tracking-widest font-medium">
              PROTECTION
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d]">
              Protection Sociale
            </h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
              Sécurisez votre avenir et celui de vos proches avec des solutions adaptées.
            </p>
          </motion.div>

          {/* Grille 3 colonnes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1: Prévoyance */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Shield className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Prévoyance
                </h3>

                <div className="space-y-4 text-sm">
                  <p className="text-gray-600 font-light">Audit des risques</p>
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Analyse et mise en place des couvertures :</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Décès</li>
                      <li>• Incapacité</li>
                      <li>• Invalidité</li>
                      <li>• Frais généraux</li>
                      <li>• Garantie croisée associés</li>
                      <li>• Garantie homme clé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Retraite */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Award className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Épargne Retraite
                </h3>

                <div className="space-y-4 text-sm">
                  <ul className="space-y-2 text-gray-600 font-light">
                    <li>• Bilan retraite complet</li>
                    <li>• Élaboration des stratégies de départ</li>
                    <li>• Aide à la liquidation</li>
                  </ul>
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Analyse et mise en place des couvertures :</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• PERin (individuel)</li>
                      <li>• PERECO (collectif)</li>
                      <li>• PERO (obligatoire)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Santé */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Heart className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Complémentaire Santé
                </h3>

                <ul className="space-y-3 text-sm text-gray-600 font-light">
                  <li>• Recueil des besoins</li>
                  <li>• Analyse et mise en place des couvertures santé adaptées</li>
                  <li>• Solutions individuelles et collectives</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: POUR LES DIRIGEANTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre section */}
          <motion.div
            className="mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-1 text-xs uppercase tracking-widest font-medium">
              DIRIGEANTS
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d]">
              Solutions pour les Dirigeants
            </h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
              Concentrez-vous sur votre développement, nous optimisons votre protection sociale et votre rémunération.
            </p>
          </motion.div>

          {/* Grille 2 colonnes */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1: Structure & Statut */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Briefcase className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Structure Juridique & Statut Social
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Structure juridique</p>
                    <p className="text-gray-600 font-light">• Conseils sur le choix de la structure (SARL, SAS, EURL)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Statut social</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Conseils sur le choix du statut (TNS, mandataire social, salarié)</li>
                      <li>• Étude de changement de statut</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Optimisation de la rémunération</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Arbitrage rémunération / dividendes</li>
                      <li>• Mesure des impacts sur les droits futurs (prévoyance et retraite)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Pour l'Entreprise */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <Briefcase className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Solutions pour l'Entreprise
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Trésorerie d'entreprise</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Identification de l'épargne structurelle</li>
                      <li>• Élaboration de la stratégie d'investissements</li>
                      <li>• Enveloppes : Contrat de capitalisation, compte-titres, CAT</li>
                      <li>• Supports : Fonds 150-0 B ter, produits structurés</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Épargne salariale</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Mise en place des accords (intéressement, participation)</li>
                      <li>• Solutions : PEE, PEG, PERECO</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Couverture collective (+ de 20 salariés)</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Mise en conformité (CCN, DUE)</li>
                      <li>• Prévoyance, santé, retraite et IFC</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#524c5d] mb-2">Assurances IARD</p>
                    <ul className="space-y-1 text-gray-600 font-light">
                      <li>• Analyse des risques</li>
                      <li>• Multirisques et RC pro</li>
                      <li>• Dommages ouvrages, décennale</li>
                      <li>• Responsabilité civile du mandataire social</li>
                      <li>• Flotte de véhicules, assurance de locaux</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: NOTRE MÉTHODE */}
      <section className="py-24 bg-[#524c5d] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Titre */}
          <motion.div
            className="text-center mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light">
              Notre Méthode
            </h2>
            <p className="text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Une approche systématique pour vous garantir des solutions optimales.
            </p>
          </motion.div>

          {/* 3 étapes horizontales */}
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Étape 1 */}
            <motion.div variants={fadeInUp} className="text-center space-y-6">
              <div className="flex justify-center">
                <span className="text-6xl font-light text-[#b4925e]">01</span>
              </div>
              <h3 className="text-xl font-semibold">Audit Complet</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                La réalisation systématique d'un audit complet vous permet d'appréhender les zones de risques et d'identifier vos besoins.
              </p>
            </motion.div>

            {/* Étape 2 */}
            <motion.div variants={fadeInUp} className="text-center space-y-6">
              <div className="flex justify-center">
                <span className="text-6xl font-light text-[#b4925e]">02</span>
              </div>
              <h3 className="text-xl font-semibold">Approche par le Besoin</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Cette approche par le besoin vous garantit la mise en place de solutions sur mesure, parfaitement adaptées à votre situation.
              </p>
            </motion.div>

            {/* Étape 3 */}
            <motion.div variants={fadeInUp} className="text-center space-y-6">
              <div className="flex justify-center">
                <span className="text-6xl font-light text-[#b4925e]">03</span>
              </div>
              <h3 className="text-xl font-semibold">Suivi Personnalisé</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Un accompagnement continu pour ajuster et optimiser vos solutions patrimoniales dans la durée.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: CTA FINAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Une question sur nos services ?
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous présenter nos solutions en détail et répondre à toutes vos questions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link href="/contact">
                <motion.button
                  className="px-12 py-4 bg-[#b4925e] hover:bg-[#b4925e]/90 text-white text-sm uppercase tracking-wider font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Prendre rendez-vous
                </motion.button>
              </Link>

              <Link href="/equipe">
                <motion.button
                  className="group px-12 py-4 bg-white border border-[#524c5d]/30 text-[#524c5d] hover:border-[#b4925e] hover:text-[#b4925e] text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir notre équipe
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
