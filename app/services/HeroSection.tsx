'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
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
  );
}
