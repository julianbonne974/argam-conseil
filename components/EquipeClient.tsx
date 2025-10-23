'use client'

import { motion } from 'framer-motion'
import { Award, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { TeamMember } from '@/lib/content'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface EquipeClientProps {
  members: TeamMember[]
}

// Helper function to get initials from name
function getInitials(nom: string): string {
  const parts = nom.split(' ')
  if (parts.length >= 2) {
    return parts[0][0] + parts[parts.length - 1][0]
  }
  return nom.substring(0, 2).toUpperCase()
}

export default function EquipeClient({ members }: EquipeClientProps) {
  // Séparer les membres par type
  const direction = members.filter(m => m.type === 'direction')
  const conseillers = members.filter(m => m.type === 'conseiller')
  const assistants = members.filter(m => m.type === 'assistant')

  const valeurs = [
    {
      icon: Award,
      title: 'Expertise',
      description: "Une connaissance approfondie de la gestion de patrimoine et de la protection sociale pour vous offrir les meilleures solutions."
    },
    {
      icon: Users,
      title: 'Proximité',
      description: "Un accompagnement personnalisé et humain, à l'écoute de vos besoins spécifiques et de vos objectifs."
    },
    {
      icon: Shield,
      title: 'Engagement',
      description: "Un suivi rigoureux et une relation de confiance construite sur la durée pour sécuriser votre avenir."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xs uppercase tracking-widest text-[#b4925e] mb-4">
              NOTRE ÉQUIPE
            </p>
            <h1 className="text-5xl font-light text-[#524c5d] mb-6">
              Gestion de Patrimoine<br />& Protection Sociale
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Un accompagnement sur mesure pour les particuliers et les professionnels
            </p>
            <div className="w-20 h-1 bg-[#b4925e] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DIRECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl font-light text-[#524c5d] text-center mb-16"
          >
            Direction
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {direction.map((membre) => (
              <motion.div
                key={membre.nom}
                variants={fadeInUp}
                className="bg-white border border-[#524c5d]/20 p-10 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
                  {/* Photo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#b4925e]/20 to-[#524c5d]/10 border-4 border-[#b4925e]/30 rounded-sm flex flex-col items-center justify-center">
                      {membre.photo ? (
                        <img
                          src={membre.photo}
                          alt={membre.nom}
                          className="w-full h-full object-cover rounded-sm"
                        />
                      ) : (
                        <>
                          <span className="text-6xl font-light text-[#b4925e]">
                            {getInitials(membre.nom)}
                          </span>
                          <span className="text-xs text-gray-400 mt-2">[Photo à venir]</span>
                        </>
                      )}
                    </div>
                  </motion.div>

                  {/* Contenu */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-medium text-[#524c5d] mb-2">
                      {membre.nom || 'Nom inconnu'}
                    </h3>
                    <p className="text-sm uppercase tracking-wider text-[#b4925e] mb-6">
                      {membre.poste || 'Poste'}
                    </p>
                    <div className="h-px bg-[#524c5d]/20 mb-6" />
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      {membre.bio || ''}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: CONSEILLERS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl font-light text-[#524c5d] text-center mb-16"
          >
            Conseillers Patrimoniaux
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {conseillers.map((membre) => (
              <motion.div
                key={membre.nom}
                variants={fadeInUp}
                className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-all"
              >
                {/* Photo */}
                <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
                  <div className="aspect-square w-full max-w-xs mx-auto bg-gradient-to-br from-[#b4925e]/20 to-[#524c5d]/10 border-2 border-[#b4925e]/30 rounded-sm flex flex-col items-center justify-center">
                    {membre.photo ? (
                      <img
                        src={membre.photo}
                        alt={membre.nom}
                        className="w-full h-full object-cover rounded-sm"
                      />
                    ) : (
                      <>
                        <span className="text-5xl font-light text-[#b4925e]">
                          {getInitials(membre.nom)}
                        </span>
                        <span className="text-xs text-gray-400 mt-2">[Photo à venir]</span>
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Contenu */}
                <div className="text-center">
                  <h3 className="text-xl font-medium text-[#524c5d] mb-2">
                    {membre.nom || 'Nom inconnu'}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#b4925e] mb-4">
                    {membre.poste || 'Poste'}
                  </p>
                  <div className="h-px bg-[#524c5d]/20 mb-4" />
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {membre.bio || ''}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: ASSISTANTES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl font-light text-[#524c5d] text-center mb-16"
          >
            Support Administratif
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {assistants.map((membre) => (
              <motion.div
                key={membre.nom}
                variants={fadeInUp}
                className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-all"
              >
                {/* Photo */}
                <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
                  <div className="aspect-square w-full max-w-xs mx-auto bg-gradient-to-br from-[#b4925e]/20 to-[#524c5d]/10 border-2 border-[#b4925e]/30 rounded-sm flex flex-col items-center justify-center">
                    {membre.photo ? (
                      <img
                        src={membre.photo}
                        alt={membre.nom}
                        className="w-full h-full object-cover rounded-sm"
                      />
                    ) : (
                      <>
                        <span className="text-5xl font-light text-[#b4925e]">
                          {getInitials(membre.nom)}
                        </span>
                        <span className="text-xs text-gray-400 mt-2">[Photo à venir]</span>
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Contenu */}
                <div className="text-center">
                  <h3 className="text-xl font-medium text-[#524c5d] mb-2">
                    {membre.nom || 'Nom inconnu'}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#b4925e] mb-4">
                    {membre.poste || 'Poste'}
                  </p>
                  <div className="h-px bg-[#524c5d]/20 mb-4" />
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {membre.bio || ''}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: NOS VALEURS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-[#524c5d] mb-6">
              Nos Valeurs
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {valeurs.map((valeur, index) => {
              const Icon = valeur.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 border border-[#524c5d]/20 p-8 text-center hover:border-[#b4925e] transition-colors"
                >
                  <Icon className="w-12 h-12 text-[#b4925e] mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-[#524c5d] mb-2">
                    {valeur.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {valeur.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CTA FINAL */}
      <section className="py-20 bg-[#524c5d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-light mb-6">
              Rencontrez Notre Équipe
            </h2>
            <p className="text-lg font-light opacity-90 mb-10">
              Nos experts sont à votre disposition pour échanger sur vos projets patrimoniaux et répondre à toutes vos questions.
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-[#b4925e] hover:bg-[#b4925e]/90 text-white font-medium"
              >
                Prendre rendez-vous
              </Button>
            </Link>
            <p className="text-sm opacity-70 mt-6">
              Bordeaux • La Réunion • En visioconférence
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
