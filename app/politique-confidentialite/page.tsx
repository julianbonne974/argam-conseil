'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
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
              Protection des données
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Politique de</span> <span className="font-bold">Confidentialité</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            <p className="text-base text-[#524c5d]/60 max-w-2xl mx-auto leading-relaxed font-light pt-4">
              Votre vie privée est importante pour nous. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Introduction */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <Shield className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Introduction
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Argam Conseils s'engage à protéger la vie privée de ses clients et visiteurs. Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                  En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans cette politique.
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <Database className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Données collectées
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-[#524c5d] mb-2">Données que vous nous fournissez</h3>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Fonction dans la fonction publique hospitalière</li>
                    <li>Statut d'adhésion COGOHR</li>
                    <li>Messages et demandes de contact</li>
                    <li>Informations patrimoniales (lors d'une étude personnalisée)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#524c5d] mb-2">Données collectées automatiquement</h3>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et appareil</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Date et heure de visite</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Utilisation des données */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <Eye className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Utilisation des données
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Répondre à vos demandes de contact et d'information</li>
                  <li>Réaliser des études patrimoniales personnalisées</li>
                  <li>Vous proposer des solutions adaptées à votre situation</li>
                  <li>Assurer le suivi de votre dossier client</li>
                  <li>Respecter nos obligations légales et réglementaires (ORIAS, ACPR, AMF)</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>Gérer l'offre exclusive COGOHR pour les adhérents</li>
                </ul>
              </div>
            </div>

            {/* Partage des données */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <UserCheck className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Partage et transmission des données
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  <strong className="font-semibold text-[#524c5d]">Nous ne vendons jamais vos données personnelles à des tiers.</strong>
                </p>
                <p>Vos données peuvent être partagées uniquement avec :</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong className="font-semibold text-[#524c5d]">Partenaires institutionnels :</strong> COGOHR (dans le cadre de l'offre exclusive)</li>
                  <li><strong className="font-semibold text-[#524c5d]">Prestataires techniques :</strong> Hébergement (Netlify), outils de communication</li>
                  <li><strong className="font-semibold text-[#524c5d]">Organismes de contrôle :</strong> ORIAS, ACPR, AMF (en cas d'obligation légale)</li>
                  <li><strong className="font-semibold text-[#524c5d]">Assureurs et établissements financiers :</strong> Pour la mise en place de vos solutions patrimoniales</li>
                </ul>
                <p>
                  Tous nos partenaires et prestataires sont soumis à des obligations de confidentialité strictes.
                </p>
              </div>
            </div>

            {/* Conservation des données */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <FileText className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Conservation des données
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>Nous conservons vos données personnelles pendant :</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong className="font-semibold text-[#524c5d]">Prospects :</strong> 3 ans après le dernier contact</li>
                  <li><strong className="font-semibold text-[#524c5d]">Clients actifs :</strong> Pendant toute la durée de la relation commerciale</li>
                  <li><strong className="font-semibold text-[#524c5d]">Anciens clients :</strong> 10 ans après la fin de la relation (obligations légales)</li>
                  <li><strong className="font-semibold text-[#524c5d]">Documents contractuels :</strong> Selon les délais légaux de prescription</li>
                </ul>
                <p>
                  Passés ces délais, vos données sont supprimées de manière sécurisée, sauf obligation légale de conservation plus longue.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <Lock className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Sécurité des données
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>L'accès non autorisé</li>
                  <li>La perte ou la destruction accidentelle</li>
                  <li>L'utilisation, la modification ou la divulgation illicite</li>
                </ul>
                <p>
                  Ces mesures incluent le chiffrement SSL/TLS, l'hébergement sécurisé, des contrôles d'accès stricts et la formation de nos collaborateurs à la protection des données.
                </p>
              </div>
            </div>

            {/* Vos droits RGPD */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                  <Shield className="h-6 w-6 text-[#b4925e]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#524c5d]">
                  Vos droits (RGPD)
                </h2>
              </div>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong className="font-semibold text-[#524c5d]">Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                  <li><strong className="font-semibold text-[#524c5d]">Droit de rectification :</strong> Corriger des données inexactes</li>
                  <li><strong className="font-semibold text-[#524c5d]">Droit à l'effacement :</strong> Supprimer vos données (sous conditions)</li>
                  <li><strong className="font-semibold text-[#524c5d]">Droit à la limitation :</strong> Restreindre le traitement de vos données</li>
                  <li><strong className="font-semibold text-[#524c5d]">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                  <li><strong className="font-semibold text-[#524c5d]">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong className="font-semibold text-[#524c5d]">Droit de retrait du consentement :</strong> À tout moment</li>
                </ul>
                <p className="pt-4">
                  Pour exercer ces droits, contactez-nous par email à <a href="mailto:contact@argamconseils.com" className="text-[#b4925e] hover:underline font-semibold">contact@argamconseils.com</a> ou par courrier à notre siège social.
                </p>
                <p>
                  Vous disposez également du droit de déposer une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#b4925e] hover:underline">www.cnil.fr</a>).
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Cookies et technologies similaires
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                </p>
                <div>
                  <h3 className="text-base font-semibold text-[#524c5d] mb-2">Types de cookies utilisés :</h3>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li><strong className="font-semibold text-[#524c5d]">Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                    <li><strong className="font-semibold text-[#524c5d]">Cookies de performance :</strong> Pour analyser l'utilisation du site</li>
                    <li><strong className="font-semibold text-[#524c5d]">Cookies fonctionnels :</strong> Pour mémoriser vos préférences</li>
                  </ul>
                </div>
                <p>
                  Vous pouvez gérer ou désactiver les cookies via les paramètres de votre navigateur. Notez que la désactivation peut affecter certaines fonctionnalités du site.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 pt-8 border-t border-[#524c5d]/10">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Contact
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-2">
                <p>Pour toute question concernant cette politique de confidentialité ou vos données personnelles :</p>
                <p><strong className="font-semibold text-[#524c5d]">Email :</strong> <a href="mailto:contact@argamconseils.com" className="text-[#b4925e] hover:underline">contact@argamconseils.com</a></p>
                <p><strong className="font-semibold text-[#524c5d]">Téléphone :</strong> 05 33 89 14 00</p>
                <p><strong className="font-semibold text-[#524c5d]">Courrier :</strong> Argam Conseils - 52 allées de Tourny, 33000 Bordeaux</p>
              </div>
            </div>

            {/* Mise à jour */}
            <div className="pt-8 border-t border-[#524c5d]/10">
              <p className="text-xs text-[#524c5d]/50 font-light">
                Dernière mise à jour : Janvier 2025<br />
                Nous nous réservons le droit de modifier cette politique de confidentialité. Toute modification sera publiée sur cette page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
