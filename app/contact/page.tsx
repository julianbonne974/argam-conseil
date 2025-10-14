'use client';

import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactFormModern } from '@/components/ContactFormModern';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
              Contact
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Contactez</span> <span className="font-bold">-nous</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            <p className="text-base text-[#524c5d]/60 max-w-2xl mx-auto leading-relaxed font-light pt-4">
              Demandez votre étude patrimoniale gratuite. Nos experts vous accompagnent dans votre projet retraite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Layout 2 Colonnes */}
      <section className="py-24 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid lg:grid-cols-[60%_40%] gap-16">
            {/* LEFT COLUMN - Formulaire de Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-10">
                <h2 className="text-3xl text-[#524c5d] font-light">
                  Demander une <span className="font-semibold">Étude Gratuite</span>
                </h2>
                <p className="text-sm text-[#524c5d]/60 font-light leading-relaxed max-w-xl">
                  Remplissez ce formulaire. Un de nos experts vous recontactera sous 24 heures pour échanger sur votre projet patrimonial et votre situation retraite.
                </p>
              </div>

              {/* Formulaire Netlify */}
              <ContactFormModern />

              {/* Encart COGOHR */}
              <div className="mt-8 p-6 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#b4925e] mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-[#524c5d] mb-2">
                      Membre COGOHR ?
                    </p>
                    <p className="text-xs text-[#524c5d]/60 font-light leading-relaxed">
                      Cochez la case correspondante dans le formulaire pour bénéficier de votre étude gratuite et de 0% de frais d'entrée sur votre Plan Épargne Retraite.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Coordonnées & Infos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Direct */}
              <div>
                <h3 className="text-xl text-[#524c5d] font-semibold mb-6">
                  Contact Direct
                </h3>
                <div className="space-y-4">
                  {/* Téléphone */}
                  <a
                    href="tel:0533891400"
                    className="group flex items-start gap-4 p-5 border-[1px] border-[#524c5d]/20 bg-white transition-all duration-300 hover:border-[#b4925e]"
                  >
                    <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                      <Phone className="h-5 w-5 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-1">
                        Téléphone
                      </p>
                      <p className="text-lg font-semibold text-[#524c5d] mb-1">
                        05 33 89 14 00
                      </p>
                      <p className="text-xs text-[#524c5d]/60 font-light">
                        Du lundi au vendredi
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@argam-conseils.fr"
                    className="group flex items-start gap-4 p-5 border-[1px] border-[#524c5d]/20 bg-white transition-all duration-300 hover:border-[#b4925e]"
                  >
                    <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5 group-hover:border-[#b4925e]/30 group-hover:bg-[#b4925e]/5 transition-colors">
                      <Mail className="h-5 w-5 text-[#524c5d] group-hover:text-[#b4925e] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-1">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-[#524c5d] mb-1 break-all">
                        contact@argam-conseils.fr
                      </p>
                      <p className="text-xs text-[#524c5d]/60 font-light">
                        Réponse sous 24h ouvrées
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Nos Bureaux */}
              <div>
                <h3 className="text-xl text-[#524c5d] font-semibold mb-6">
                  Nos Bureaux
                </h3>
                <div className="space-y-4">
                  {/* Bordeaux */}
                  <div className="p-5 border-[1px] border-[#524c5d]/20 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5">
                        <MapPin className="h-5 w-5 text-[#524c5d]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-[#b4925e] font-medium mb-2">
                          Siège Social
                        </p>
                        <p className="text-base font-semibold text-[#524c5d] mb-2">
                          Bordeaux
                        </p>
                        <p className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                          52 allées de Tourny<br />
                          33000 Bordeaux<br />
                          Nouvelle-Aquitaine
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* La Réunion */}
                  <div className="p-5 border-[1px] border-[#524c5d]/20 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5">
                        <MapPin className="h-5 w-5 text-[#524c5d]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-[#b4925e] font-medium mb-2">
                          Bureau Local
                        </p>
                        <p className="text-base font-semibold text-[#524c5d] mb-2">
                          La Réunion
                        </p>
                        <p className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                          Trois-Bassins<br />
                          Site COGOHR<br />
                          Département 974
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires d'ouverture */}
              <div>
                <h3 className="text-xl text-[#524c5d] font-semibold mb-6">
                  Horaires d'Ouverture
                </h3>
                <div className="p-5 border-[1px] border-[#524c5d]/20 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border-[1px] border-[#524c5d]/15 bg-[#524c5d]/5">
                      <Clock className="h-5 w-5 text-[#524c5d]" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#524c5d]/70 font-light">Lundi - Vendredi</span>
                        <span className="text-sm font-semibold text-[#524c5d]">9h00 - 18h00</span>
                      </div>
                      <div className="h-[1px] bg-[#524c5d]/10" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#524c5d]/70 font-light">Samedi - Dimanche</span>
                        <span className="text-sm font-semibold text-[#524c5d]">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton Prendre Rendez-vous */}
              <div className="pt-4">
                <a
                  href="https://calendly.com/argam-conseil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <button className="w-full relative px-8 py-5 bg-[#524c5d] border-[1px] border-[#524c5d] text-white text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-[#b4925e] hover:border-[#b4925e]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Calendar className="h-4 w-4" />
                      Prendre rendez-vous
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </a>
                <p className="text-xs text-[#524c5d]/50 text-center mt-3 font-light">
                  Réservez un créneau avec nos experts
                </p>
              </div>

              {/* Informations légales */}
              <div className="pt-6 border-t border-[#524c5d]/10">
                <p className="text-xs uppercase tracking-wider text-[#524c5d]/50 font-medium mb-3">
                  Informations Légales
                </p>
                <div className="space-y-2 text-xs text-[#524c5d]/60 font-light">
                  <p>ORIAS : 12345678</p>
                  <p>Membre ANACOFI-CIF</p>
                  <p>Médiateur : AMF</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section RGPD - Privacy */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="text-center">
            <p className="text-xs text-[#524c5d]/60 font-light leading-relaxed">
              <span className="font-semibold text-[#524c5d]">Protection des données :</span> Vos données personnelles sont traitées de manière confidentielle et ne seront jamais transmises à des tiers. Elles sont uniquement utilisées dans le cadre de votre demande de contact et de conseil patrimonial. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
