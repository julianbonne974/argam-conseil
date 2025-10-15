'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
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
  );
}
