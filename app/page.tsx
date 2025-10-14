'use client';

import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

const slideInFromTop = {
  initial: { opacity: 0, y: -20 },
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Family Office Bauhaus */}
      <section className="relative pt-32 pb-24 min-h-[92vh] flex items-center overflow-hidden bg-white">
        {/* Geometric Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Large Circle - Top Right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[1px] border-[#b4925e] opacity-[0.08]" />

          {/* Square - Bottom Left */}
          <div className="absolute bottom-20 left-10 w-40 h-40 border-[1px] border-[#524c5d] opacity-[0.06]" />

          {/* Small Circle - Middle */}
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#b4925e] opacity-[0.05]" />

          {/* Vertical Line */}
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#524c5d] opacity-[0.06]" />

          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#b4925e] opacity-[0.05]" />
        </motion.div>

        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-20 items-center">
            {/* Left: Text Content - 60% */}
            <motion.div
              className="space-y-12"
              variants={slideInFromTop}
              initial="initial"
              animate="animate"
            >
              {/* Surtitre */}
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/60 font-medium">
                  Partenaire COGOHR
                </p>
                <div className="w-12 h-[1px] bg-[#b4925e] mt-4" />
              </div>

              {/* Titre Principal - Typographie Light avec Bold */}
              <h1 className="text-5xl lg:text-7xl text-[#524c5d] leading-[1.1] tracking-tight">
                <span className="font-light">Conseil</span>
                <br />
                <span className="font-bold">Patrimonial</span>
              </h1>

              {/* Description */}
              <div className="space-y-6 max-w-xl">
                <p className="text-lg text-[#524c5d]/80 leading-relaxed font-light">
                  Spécialistes de l'épargne retraite pour fonctionnaires hospitaliers à La Réunion.
                </p>
                <p className="text-base text-[#524c5d]/60 leading-relaxed font-light">
                  Votre prime de vie chère de 53% ne sera pas comptabilisée dans votre pension de retraite. Nous vous accompagnons pour compenser cette perte.
                </p>
              </div>

              {/* Stats minimalistes */}
              <div className="flex items-center gap-12 pt-4">
                <div className="space-y-1">
                  <p className="text-4xl font-light text-[#524c5d]">−1 600€</p>
                  <p className="text-xs uppercase tracking-wider text-[#524c5d]/50">Perte mensuelle</p>
                </div>
                <div className="w-[1px] h-12 bg-[#524c5d]/10" />
                <div className="space-y-1">
                  <p className="text-4xl font-light text-[#524c5d]">53%</p>
                  <p className="text-xs uppercase tracking-wider text-[#524c5d]/50">Prime non comptée</p>
                </div>
              </div>

              {/* CTA - Bouton minimaliste */}
              <div className="flex items-center gap-6 pt-8">
                <Link href="/contact">
                  <motion.button
                    className="group relative px-10 py-4 bg-white border-[1px] border-[#524c5d] text-[#524c5d] text-sm uppercase tracking-wider font-medium overflow-hidden transition-all duration-300 hover:text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Demander une étude</span>
                    <div className="absolute inset-0 bg-[#524c5d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.button>
                </Link>

                <Link href="/services" className="group flex items-center gap-2 text-sm text-[#524c5d]/70 hover:text-[#b4925e] transition-colors">
                  <span className="uppercase tracking-wider font-medium">En savoir plus</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Geometric Visual - 40% */}
            <motion.div
              className="relative h-[500px] hidden lg:block"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Composition géométrique Bauhaus */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Grand cercle principal */}
                <div className="absolute w-80 h-80 rounded-full border-[2px] border-[#b4925e]/20" />

                {/* Cercle moyen */}
                <div className="absolute w-56 h-56 rounded-full bg-[#524c5d]/5 backdrop-blur-sm" />

                {/* Petit cercle accentué */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#b4925e]/10" />

                {/* Rectangle */}
                <div className="absolute bottom-28 left-16 w-40 h-40 border-[1px] border-[#524c5d]/15 rotate-12" />

                {/* Carré plein */}
                <div className="absolute top-32 left-24 w-20 h-20 bg-[#b4925e]/15" />

                {/* Ligne diagonale */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 500">
                    <line x1="50" y1="450" x2="350" y2="50" stroke="#524c5d" strokeWidth="1" opacity="0.1" />
                    <line x1="100" y1="50" x2="300" y2="450" stroke="#b4925e" strokeWidth="1" opacity="0.1" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Domaines d'Expertise - Bauhaus Minimaliste */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-4">
                Expertise
              </p>
              <h2 className="text-4xl lg:text-5xl text-[#524c5d] font-light mb-4">
                Nos Domaines <span className="font-bold">d'Expertise</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            </div>
          </motion.div>

          {/* Grid - 3 Cards avec Stagger */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 - Gestion de Patrimoine */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group bg-white border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e]"
            >
              <div className="space-y-6">
                {/* Icône Géométrique - Carré */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-[2px] border-[#524c5d]/30 rotate-45 group-hover:border-[#b4925e] transition-colors duration-300" />
                  <div className="absolute inset-3 bg-[#524c5d]/5 rotate-45 group-hover:bg-[#b4925e]/10 transition-colors duration-300" />
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-[#524c5d]">
                    Gestion de <span className="font-semibold">Patrimoine</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 leading-relaxed font-light">
                    Accompagnement personnalisé pour optimiser et faire fructifier votre patrimoine dans le respect de vos objectifs de vie.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Protection Sociale */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group bg-white border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e]"
            >
              <div className="space-y-6">
                {/* Icône Géométrique - Cercle */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-[2px] border-[#524c5d]/30 group-hover:border-[#b4925e] transition-colors duration-300" />
                  <div className="absolute inset-3 rounded-full bg-[#524c5d]/5 group-hover:bg-[#b4925e]/10 transition-colors duration-300" />
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-[#524c5d]">
                    Protection <span className="font-semibold">Sociale</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 leading-relaxed font-light">
                    Solutions sur-mesure pour sécuriser votre avenir et celui de vos proches face aux aléas de la vie.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Optimisation Fiscale */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group bg-white border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e]"
            >
              <div className="space-y-6">
                {/* Icône Géométrique - Triangle */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" className="absolute inset-0">
                    <polygon
                      points="32,8 56,52 8,52"
                      fill="none"
                      stroke="#524c5d"
                      strokeWidth="2"
                      opacity="0.3"
                      className="group-hover:stroke-[#b4925e] transition-colors duration-300"
                    />
                    <polygon
                      points="32,18 48,46 16,46"
                      fill="#524c5d"
                      opacity="0.05"
                      className="group-hover:fill-[#b4925e] group-hover:opacity-10 transition-all duration-300"
                    />
                  </svg>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-[#524c5d]">
                    Optimisation <span className="font-semibold">Fiscale</span>
                  </h3>
                  <p className="text-sm text-[#524c5d]/60 leading-relaxed font-light">
                    Stratégies légales pour réduire votre fiscalité et maximiser votre capacité d'épargne et d'investissement.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/services">
              <motion.button
                className="group relative px-12 py-4 bg-white border-[1px] border-[#524c5d]/30 text-[#524c5d] text-sm uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-300 hover:border-[#b4925e] hover:text-[#b4925e]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Découvrir nos services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Argam Conseil en Chiffres - Dieter Rams Style */}
      <section className="py-28 bg-[#f8f8f8]">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Section Title */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium mb-3">
              Notre ADN
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Argam Conseil <span className="font-semibold">en Chiffres</span>
            </h2>
          </motion.div>

          {/* Stats Grid - 4 colonnes avec Stagger */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-0"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Stat 1 - Année de création */}
            <motion.div
              variants={fadeInUp}
              className="relative flex flex-col items-center justify-center py-12 px-6"
            >
              <p className="text-7xl lg:text-8xl font-light text-[#b4925e] leading-none mb-4">
                2021
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#524c5d]/60 font-medium text-center">
                Année de création
              </p>
              {/* Séparateur vertical - visible uniquement sur lg */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-[#524c5d]/10" />
            </motion.div>

            {/* Stat 2 - Experts */}
            <motion.div
              variants={fadeInUp}
              className="relative flex flex-col items-center justify-center py-12 px-6"
            >
              <p className="text-7xl lg:text-8xl font-light text-[#b4925e] leading-none mb-4">
                8
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#524c5d]/60 font-medium text-center">
                Experts spécialisés
              </p>
              {/* Séparateur vertical - visible uniquement sur lg */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-[#524c5d]/10" />
            </motion.div>

            {/* Stat 3 - Implantations */}
            <motion.div
              variants={fadeInUp}
              className="relative flex flex-col items-center justify-center py-12 px-6"
            >
              <p className="text-7xl lg:text-8xl font-light text-[#b4925e] leading-none mb-4">
                2
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#524c5d]/60 font-medium text-center">
                Implantations<br />Bordeaux • La Réunion
              </p>
              {/* Séparateur vertical - visible uniquement sur lg */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-[#524c5d]/10" />
            </motion.div>

            {/* Stat 4 - Taux de satisfaction */}
            <motion.div
              variants={fadeInUp}
              className="relative flex flex-col items-center justify-center py-12 px-6"
            >
              <p className="text-7xl lg:text-8xl font-light text-[#b4925e] leading-none mb-4">
                98%
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#524c5d]/60 font-medium text-center">
                Clients satisfaits
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
