'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Award, Heart, Target, Lightbulb, Shield, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Profils des 8 experts
const teamMembers = [
  {
    initials: 'AC',
    name: 'Antoine Chevalier',
    role: 'Directeur Général',
    specialty: 'Expert en Gestion de Patrimoine',
    bio: 'Plus de 15 ans d\'expérience dans le conseil patrimonial. Spécialisé dans l\'accompagnement des fonctionnaires hospitaliers pour leur retraite.'
  },
  {
    initials: 'SL',
    name: 'Sophie Leblanc',
    role: 'Directrice du Développement',
    specialty: 'Épargne Retraite & PER',
    bio: 'Experte certifiée en Plans Épargne Retraite. Accompagne les agents du service public dans l\'optimisation de leur épargne retraite.'
  },
  {
    initials: 'MD',
    name: 'Marc Dubois',
    role: 'Conseiller Patrimoine Senior',
    specialty: 'Investissement Immobilier',
    bio: 'Spécialiste de l\'investissement locatif et de la défiscalisation immobilière. Intervient sur les dispositifs Pinel, SCPI et démembrement.'
  },
  {
    initials: 'CB',
    name: 'Céline Bernard',
    role: 'Conseillère en Gestion de Patrimoine',
    specialty: 'Assurance Vie & Transmission',
    bio: 'Expertise dans l\'optimisation fiscale et la transmission patrimoniale. Accompagne les familles dans leurs projets de succession.'
  },
  {
    initials: 'JM',
    name: 'Julien Martin',
    role: 'Conseiller Spécialisé',
    specialty: 'Protection Sociale',
    bio: 'Référent prévoyance et complémentaire santé pour les fonctionnaires. Analyse les besoins de protection et propose des solutions adaptées.'
  },
  {
    initials: 'LR',
    name: 'Lucie Rousseau',
    role: 'Conseillère Patrimoine',
    specialty: 'Fonctionnaires Hospitaliers',
    bio: 'Basée à La Réunion, Lucie connaît parfaitement les enjeux de la prime de vie chère et accompagne localement les agents hospitaliers.'
  },
  {
    initials: 'PD',
    name: 'Pierre Durand',
    role: 'Conseiller en Investissements',
    specialty: 'Placement Financier',
    bio: 'Expert en diversification patrimoniale et gestion financière. Construit des allocations sur-mesure adaptées au profil de risque de chaque client.'
  },
  {
    initials: 'EM',
    name: 'Émilie Moreau',
    role: 'Responsable Partenariats',
    specialty: 'Relations COGOHR',
    bio: 'Gère les partenariats institutionnels, notamment avec le COGOHR. Coordonne les offres exclusives pour les adhérents et les événements.'
  }
];

// Nos 3 valeurs clés
const values = [
  {
    icon: Shield,
    title: 'Expertise',
    description: 'Une connaissance approfondie des régimes de retraite de la fonction publique hospitalière et des enjeux spécifiques à La Réunion.'
  },
  {
    icon: Heart,
    title: 'Proximité',
    description: 'Un accompagnement humain et personnalisé. Nous prenons le temps d\'écouter, de comprendre et de construire avec vous votre stratégie patrimoniale.'
  },
  {
    icon: Target,
    title: 'Engagement',
    description: 'Nous nous engageons à vous proposer les meilleures solutions du marché, en toute transparence et indépendance, pour atteindre vos objectifs.'
  }
];

export default function EquipePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Bauhaus Minimal */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium">
              Notre Équipe
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Experts en</span> <span className="font-bold">Conseil Patrimonial</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            <p className="text-base text-[#524c5d]/60 max-w-2xl mx-auto leading-relaxed font-light pt-4">
              Une équipe de 8 spécialistes dédiés à l'accompagnement des fonctionnaires hospitaliers dans leur projet retraite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid - 8 Profils */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="text-center space-y-4">
                  {/* Photo circulaire avec initiales */}
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#b4925e]/10 flex items-center justify-center border-[2px] border-[#524c5d]/20 transition-all duration-300 group-hover:border-[#b4925e]">
                      <span className="text-3xl font-light text-[#524c5d]">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Nom et rôle */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#524c5d]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#b4925e] font-medium">
                      {member.role}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium">
                      {member.specialty}
                    </p>
                  </div>

                  {/* Bio */}
                  <div className="pt-4 border-t border-[#524c5d]/10">
                    <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs - 3 Cards */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Nos Valeurs
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Ce qui nous <span className="font-semibold">Anime</span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e]"
              >
                <div className="space-y-6">
                  {/* Icône géométrique */}
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-[2px] border-[#524c5d]/30 rotate-45 group-hover:border-[#b4925e] transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-[#524c5d] group-hover:text-[#b4925e] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#524c5d]">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#524c5d]/60 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nos Certifications - Bauhaus */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Reconnaissance
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Nos <span className="font-semibold">Certifications</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* ORIAS */}
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 border-[2px] border-[#b4925e]/30 rounded-full bg-[#b4925e]/5">
                <Award className="h-9 w-9 text-[#b4925e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#524c5d]">
                ORIAS
              </h3>
              <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed max-w-sm mx-auto">
                Enregistrés auprès de l'ORIAS (Organisme pour le Registre des Intermédiaires en Assurance), garantissant conformité réglementaire et professionnalisme.
              </p>
            </motion.div>

            {/* ANACOFI-CIF */}
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 border-[2px] border-[#b4925e]/30 rounded-full bg-[#b4925e]/5">
                <Users2 className="h-9 w-9 text-[#b4925e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#524c5d]">
                ANACOFI-CIF
              </h3>
              <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed max-w-sm mx-auto">
                Membres de l'Association Nationale des Conseils Financiers. Respect d'une charte de déontologie stricte et formation continue.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Bauhaus Dark */}
      <section className="py-32 bg-[#524c5d]">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Rencontrons <span className="font-bold">Notre Équipe</span>
            </h2>
            <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">
              Nos experts sont à votre écoute pour répondre à toutes vos questions sur votre projet retraite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:0533891400">
                <button className="group relative px-12 py-5 bg-white border-[1px] border-white text-[#524c5d] text-sm uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-300 hover:bg-[#b4925e] hover:text-white hover:border-[#b4925e]">
                  <span className="relative z-10">
                    05 33 89 14 00
                  </span>
                </button>
              </a>
              <a href="/contact">
                <button className="group relative px-12 py-5 bg-transparent border-[1px] border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#524c5d] hover:border-white">
                  <span className="relative z-10">
                    Prendre rendez-vous
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
