'use client';

import { motion } from 'framer-motion';

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

export default function MethodeSection() {
  return (
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
  );
}
