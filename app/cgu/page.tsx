'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function CGUPage() {
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
              Conditions d'utilisation
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">Conditions Générales</span> <span className="font-bold">d'Utilisation</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white border-t border-[#524c5d]/10">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            className="space-y-12 text-[#524c5d]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Préambule */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Préambule
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'utilisation du site web <strong className="font-semibold text-[#524c5d]">www.argam-conseils.fr</strong> (ci-après "le Site") édité par Argam Conseil.
                </p>
                <p>
                  L'accès et l'utilisation du Site impliquent l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
                </p>
              </div>
            </div>

            {/* Article 1 : Objet */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 1 – Objet du site
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Le Site a pour objet de fournir des informations sur les services de conseil en gestion de patrimoine et d'épargne retraite proposés par Argam Conseil, notamment :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Conseil patrimonial pour les fonctionnaires hospitaliers</li>
                  <li>Accompagnement sur les Plans Épargne Retraite (PER)</li>
                  <li>Gestion de l'offre exclusive COGOHR</li>
                  <li>Information sur la prime de vie chère et ses impacts retraite</li>
                  <li>Mise en relation avec nos conseillers experts</li>
                </ul>
                <p>
                  <strong className="font-semibold text-[#524c5d]">Important :</strong> Les informations présentes sur le Site sont fournies à titre indicatif et ne constituent pas un conseil en investissement personnalisé. Seule une étude patrimoniale complète permet d'établir des recommandations adaptées à votre situation.
                </p>
              </div>
            </div>

            {/* Article 2 : Accès au site */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 2 – Accès au site
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Le Site est accessible gratuitement à tout utilisateur disposant d'un accès Internet. Les frais d'accès et d'utilisation du réseau de télécommunication sont à la charge de l'utilisateur.
                </p>
                <p>
                  Argam Conseil s'efforce de maintenir le Site accessible 24h/24 et 7j/7, mais ne saurait être tenu responsable en cas d'interruption, quelle qu'en soit la cause (maintenance, panne technique, force majeure, etc.).
                </p>
                <p>
                  Argam Conseil se réserve le droit de modifier, suspendre ou interrompre l'accès au Site à tout moment et sans préavis.
                </p>
              </div>
            </div>

            {/* Article 3 : Propriété intellectuelle */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 3 – Propriété intellectuelle
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  L'ensemble des éléments du Site (structure, textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive d'Argam Conseil, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'Argam Conseil.
                </p>
                <p>
                  Toute exploitation non autorisée du Site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </div>

            {/* Article 4 : Responsabilité */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 4 – Limitation de responsabilité
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <div>
                  <h3 className="text-base font-semibold text-[#524c5d] mb-2">4.1. Contenu du Site</h3>
                  <p>
                    Argam Conseil s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou lacunes dans la mise à jour du Site.
                  </p>
                  <p className="mt-2">
                    Les informations présentes sur le Site sont fournies à titre indicatif et ne constituent pas un conseil en investissement. Elles ne sauraient engager la responsabilité d'Argam Conseil en cas de décisions prises sur cette seule base.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#524c5d] mb-2">4.2. Liens hypertextes</h3>
                  <p>
                    Le Site peut contenir des liens vers des sites tiers. Argam Conseil n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de protection des données.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#524c5d] mb-2">4.3. Dysfonctionnements techniques</h3>
                  <p>
                    Argam Conseil ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au Site ou de son utilisation, notamment en cas de :
                  </p>
                  <ul className="space-y-1 ml-6 list-disc mt-2">
                    <li>Interruption ou indisponibilité du Site</li>
                    <li>Attaque informatique, virus ou intrusion</li>
                    <li>Dysfonctionnement du réseau Internet</li>
                    <li>Perte de données</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 5 : Utilisation du formulaire de contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 5 – Formulaire de contact et collecte de données
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Le formulaire de contact présent sur le Site permet aux utilisateurs de soumettre une demande d'étude patrimoniale gratuite ou de prendre rendez-vous avec un conseiller.
                </p>
                <p>
                  En utilisant ce formulaire, vous vous engagez à :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Ne pas usurper l'identité d'une autre personne</li>
                  <li>Ne pas envoyer de contenus illicites, diffamatoires ou inappropriés</li>
                </ul>
                <p>
                  Les données collectées via le formulaire sont traitées conformément à notre <a href="/politique-confidentialite" className="text-[#b4925e] hover:underline font-semibold">Politique de confidentialité</a> et au RGPD.
                </p>
                <p>
                  Argam Conseil s'engage à répondre à toute demande légitime dans un délai de 24 à 48 heures ouvrées.
                </p>
              </div>
            </div>

            {/* Article 6 : Offre COGOHR */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 6 – Offre exclusive COGOHR
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  L'offre exclusive réservée aux adhérents COGOHR (Comité des Œuvres Sociales des Hôpitaux de La Réunion) comprend :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Une étude patrimoniale gratuite et sans engagement</li>
                  <li>0% de frais d'entrée sur les Plans Épargne Retraite (PER)</li>
                </ul>
                <p>
                  Cette offre est réservée exclusivement aux adhérents COGOHR en règle de cotisation. La preuve de l'adhésion pourra être demandée lors de la prise de rendez-vous.
                </p>
                <p>
                  Argam Conseil se réserve le droit de modifier ou suspendre cette offre à tout moment, avec ou sans préavis. Les conditions applicables sont celles en vigueur au moment de la souscription.
                </p>
              </div>
            </div>

            {/* Article 7 : Obligations réglementaires */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 7 – Obligations réglementaires et déontologiques
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Argam Conseil est enregistré auprès de l'ORIAS (Organisme pour le Registre des Intermédiaires en Assurance) sous le numéro 12345678 en qualité de :
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>Conseiller en Investissements Financiers (CIF)</li>
                  <li>Courtier en Assurance</li>
                </ul>
                <p className="mt-3">
                  Argam Conseil est membre de l'association professionnelle ANACOFI-CIF et respecte sa charte de déontologie.
                </p>
                <p>
                  <strong className="font-semibold text-[#524c5d]">Autorités de contrôle :</strong>
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>Autorité de Contrôle Prudentiel et de Résolution (ACPR)</li>
                  <li>Autorité des Marchés Financiers (AMF)</li>
                </ul>
                <p className="mt-3">
                  <strong className="font-semibold text-[#524c5d]">Médiateur :</strong> En cas de litige, vous pouvez saisir le médiateur de l'AMF (Autorité des Marchés Financiers).
                </p>
              </div>
            </div>

            {/* Article 8 : Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 8 – Cookies
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Le Site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite.
                </p>
                <p>
                  Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur. La désactivation des cookies peut affecter certaines fonctionnalités du Site.
                </p>
                <p>
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-[#b4925e] hover:underline font-semibold">Politique de confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Article 9 : Modification des CGU */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 9 – Modification des CGU
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed">
                <p>
                  Argam Conseil se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. Il est conseillé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                </p>
                <p className="mt-3">
                  L'utilisation du Site après modification des CGU vaut acceptation des nouvelles conditions.
                </p>
              </div>
            </div>

            {/* Article 10 : Droit applicable */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Article 10 – Droit applicable et juridiction compétente
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3">
                <p>
                  Les présentes CGU sont régies par le droit français.
                </p>
                <p>
                  En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, et à défaut de résolution amiable, le litige sera soumis aux tribunaux français compétents conformément aux règles de droit commun.
                </p>
                <p>
                  <strong className="font-semibold text-[#524c5d]">Médiation :</strong> Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, Argam Conseil adhère au Service du Médiateur de l'AMF. En cas de litige, vous pouvez déposer votre réclamation sur le site : <a href="https://www.amf-france.org" target="_blank" rel="noopener noreferrer" className="text-[#b4925e] hover:underline">www.amf-france.org</a>
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 pt-8 border-t border-[#524c5d]/10">
              <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                Contact
              </h2>
              <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-2">
                <p>Pour toute question concernant ces Conditions Générales d'Utilisation :</p>
                <p><strong className="font-semibold text-[#524c5d]">Argam Conseil</strong></p>
                <p>52 allées de Tourny<br />33000 Bordeaux</p>
                <p><strong className="font-semibold text-[#524c5d]">Email :</strong> <a href="mailto:contact@argam-conseils.fr" className="text-[#b4925e] hover:underline">contact@argam-conseils.fr</a></p>
                <p><strong className="font-semibold text-[#524c5d]">Téléphone :</strong> 05 33 89 14 00</p>
              </div>
            </div>

            {/* Mise à jour */}
            <div className="pt-8 border-t border-[#524c5d]/10">
              <p className="text-xs text-[#524c5d]/50 font-light">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
