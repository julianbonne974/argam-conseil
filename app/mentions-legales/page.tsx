'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#524c5d]/50 font-medium">
              Informations Légales
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Mentions</span> <span className="font-bold">Légales</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-12 text-[#524c5d]">
              {/* Éditeur du site */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Éditeur du site
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-2">
                  <p><strong className="font-semibold text-[#524c5d]">Raison sociale :</strong> Argam Conseil</p>
                  <p><strong className="font-semibold text-[#524c5d]">Forme juridique :</strong> [SARL/SAS]</p>
                  <p><strong className="font-semibold text-[#524c5d]">Capital social :</strong> [Montant] €</p>
                  <p><strong className="font-semibold text-[#524c5d]">Siège social :</strong> 52 allées de Tourny, 33000 Bordeaux</p>
                  <p><strong className="font-semibold text-[#524c5d]">SIRET :</strong> [Numéro SIRET]</p>
                  <p><strong className="font-semibold text-[#524c5d]">TVA intracommunautaire :</strong> [Numéro TVA]</p>
                  <p><strong className="font-semibold text-[#524c5d]">Téléphone :</strong> 05 33 89 14 00</p>
                  <p><strong className="font-semibold text-[#524c5d]">Email :</strong> contact@argam-conseils.fr</p>
                </div>
              </div>

              {/* Directeur de publication */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Directeur de publication
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                  <p>Antoine Chevalier, Directeur Général</p>
                </div>
              </div>

              {/* Hébergement */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Hébergement
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-2">
                  <p><strong className="font-semibold text-[#524c5d]">Hébergeur :</strong> Netlify, Inc.</p>
                  <p><strong className="font-semibold text-[#524c5d]">Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</p>
                  <p><strong className="font-semibold text-[#524c5d]">Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#b4925e] hover:underline">www.netlify.com</a></p>
                </div>
              </div>

              {/* Enregistrements professionnels */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Enregistrements professionnels
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-2">
                  <p><strong className="font-semibold text-[#524c5d]">ORIAS :</strong> 12345678</p>
                  <p>Conseiller en Investissements Financiers (CIF) et Courtier en Assurance</p>
                  <p><strong className="font-semibold text-[#524c5d]">Association professionnelle :</strong> ANACOFI-CIF</p>
                  <p><strong className="font-semibold text-[#524c5d]">Médiateur :</strong> Autorité des Marchés Financiers (AMF)</p>
                  <p><strong className="font-semibold text-[#524c5d]">Autorité de contrôle :</strong> Autorité de Contrôle Prudentiel et de Résolution (ACPR)</p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Propriété intellectuelle
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive d'Argam Conseil, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                  </p>
                  <p>
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'Argam Conseil.
                  </p>
                </div>
              </div>

              {/* Responsabilité */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Limitation de responsabilité
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p>
                    Argam Conseil ne pourra être tenu responsable des dommages directs ou indirects qui pourraient résulter de l'accès au site ou de l'utilisation de celui-ci.
                  </p>
                  <p>
                    Les informations fournies sur ce site le sont à titre indicatif et ne constituent en aucun cas un conseil en investissement personnalisé. Seule une étude patrimoniale complète permet d'établir des recommandations adaptées à votre situation.
                  </p>
                </div>
              </div>

              {/* Droit applicable */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Droit applicable et juridiction
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                  </p>
                </div>
              </div>

              {/* Mise à jour */}
              <div className="pt-8 border-t border-[#524c5d]/10">
                <p className="text-xs text-[#524c5d]/50 font-light">
                  Dernière mise à jour : Janvier 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
