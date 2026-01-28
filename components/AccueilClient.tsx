"use client";

import {
  ArrowRight,
  PieChart,
  Shield,
  Briefcase,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Award,
  Users,
  Home,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Component for dynamic icons
interface DynamicIconProps {
  iconName: string;
  className?: string;
}

function DynamicIcon({
  iconName,
  className = "w-12 h-12 text-[#b4925e]",
}: DynamicIconProps) {
  switch (iconName) {
    case "PieChart":
      return <PieChart className={className} strokeWidth={1.5} />;
    case "Shield":
      return <Shield className={className} strokeWidth={1.5} />;
    case "Briefcase":
      return <Briefcase className={className} strokeWidth={1.5} />;
    case "TrendingUp":
      return <TrendingUp className={className} strokeWidth={1.5} />;
    case "Award":
      return <Award className={className} strokeWidth={1.5} />;
    case "Users":
      return <Users className={className} strokeWidth={1.5} />;
    case "Home":
      return <Home className={className} strokeWidth={1.5} />;
    default:
      return <FileText className={className} strokeWidth={1.5} />;
  }
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const slideInFromTop = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface AccueilClientProps {
  content: any;
}

export default function AccueilClient({ content }: AccueilClientProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO - Layout 60/40 */}
      <section
        id="accueil"
        className="relative pt-32 pb-20 overflow-hidden bg-white"
      >
        {/* Geometric Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Large Circle */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[1px] border-[#b4925e] opacity-[0.08]" />
          {/* Square */}
          <div className="absolute bottom-20 left-10 w-40 h-40 border-[1px] border-[#524c5d] opacity-[0.06]" />
          {/* Small Circle */}
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#b4925e] opacity-[0.05]" />
          {/* Vertical Line */}
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#524c5d] opacity-[0.06]" />
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#b4925e] opacity-[0.05]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-16 items-center">
            {/* Left: Text Content - 60% */}
            <motion.div
              className="space-y-10"
              variants={slideInFromTop}
              initial="initial"
              animate="animate"
            >
              {/* Badge */}
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  {content.hero?.surtitre || "CONSEIL PATRIMONIAL"}
                </p>
                <div className="w-12 h-[1px] bg-[#b4925e] mt-4" />
              </div>

              {/* Titre Principal */}
              <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1] tracking-tight font-light">
                {content.hero?.titre ||
                  "Votre patrimoine mérite une expertise dédiée"}
              </h1>

              {/* Sous-titre */}
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-xl">
                {content.hero?.soustitre ||
                  "Argam Conseils accompagne les particuliers et les dirigeants dans l'optimisation globale de leur patrimoine professionnel et personnel à La Réunion et Bordeaux."}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <Link href="/contact">
                  <motion.button
                    className="px-10 py-4 bg-[#b4925e] hover:bg-[#b4925e]/90 text-white text-sm uppercase tracking-wider font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {content.hero?.texteBouton || "Prendre rendez-vous"}
                  </motion.button>
                </Link>

                <Link
                  href="/services"
                  className="group flex items-center gap-2 text-sm text-[#524c5d] hover:text-[#b4925e] transition-colors"
                >
                  <span className="uppercase tracking-wider font-medium">
                    Découvrir nos services
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Geometric Visual - 40% */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] hidden lg:block"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Grand cercle */}
                <div className="absolute w-80 h-80 rounded-full border-[2px] border-[#b4925e]/20" />
                {/* Cercle moyen */}
                <div className="absolute w-56 h-56 rounded-full bg-[#524c5d]/5" />
                {/* Petit cercle */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#b4925e]/10" />
                {/* Rectangle */}
                <div className="absolute bottom-28 left-16 w-40 h-40 border-[1px] border-[#524c5d]/15 rotate-12" />
                {/* Carré */}
                <div className="absolute top-32 left-24 w-20 h-20 bg-[#b4925e]/15" />
                {/* Lignes */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 500">
                    <line
                      x1="50"
                      y1="450"
                      x2="350"
                      y2="50"
                      stroke="#524c5d"
                      strokeWidth="1"
                      opacity="0.1"
                    />
                    <line
                      x1="100"
                      y1="50"
                      x2="300"
                      y2="450"
                      stroke="#b4925e"
                      strokeWidth="1"
                      opacity="0.1"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRÉSENTATION - 2 colonnes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            className="grid md:grid-cols-[60%_40%] gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Colonne gauche */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#b4925e] font-medium mb-4">
                  {content.presentation?.surtitre || "À PROPOS"}
                </p>
                <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d] leading-tight">
                  {content.presentation?.titre ||
                    "Une approche globale de votre patrimoine"}
                </h2>
              </div>

              <div className="space-y-4 text-[#524c5d]/70 font-light leading-relaxed">
                <p>
                  {content.presentation?.paragraphe1 ||
                    "Argam Conseils vous accompagne dans une démarche complète d'optimisation de votre patrimoine. Notre expertise intègre les dimensions stratégiques, fiscales, sociales, financières et juridiques pour vous offrir un conseil personnalisé et optimal."}
                </p>
                <p>
                  {content.presentation?.paragraphe2 ||
                    "Que vous soyez particulier, fonctionnaire hospitalier, ou dirigeant d'entreprise, nous construisons avec vous des solutions sur-mesure adaptées à vos objectifs et contraintes spécifiques."}
                </p>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="space-y-4">
              {content.presentation?.points?.map(
                (point: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#524c5d] font-light">{point}</span>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: DOMAINES D'EXPERTISE - 3 cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Titre centré */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light mb-6">
              Nos Domaines d'Expertise
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </motion.div>

          {/* Grille 3 colonnes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {content.services?.map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e] hover:shadow-md"
              >
                <div className="space-y-6">
                  <DynamicIcon iconName={service.icone} />
                  <h3 className="text-xl font-semibold text-[#524c5d]">
                    {service.titre}
                  </h3>
                  <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-[#524c5d]/60">
                    {service.details?.map((detail: string, i: number) => (
                      <li key={i}>• {detail}</li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm text-[#b4925e] hover:gap-3 transition-all"
                  >
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: NOTRE APPROCHE - 3 étapes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Titre centré */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light mb-6">
              {content.approche?.titre || "Notre Approche"}
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </motion.div>

          {/* 3 étapes horizontales */}
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {content.approche?.etapes?.map((etape: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div
                    className={`w-20 h-20 ${etape.numero === "03" ? "bg-[#b4925e]" : ""} border-4 border-[#b4925e] flex items-center justify-center`}
                  >
                    <span
                      className={`text-3xl font-light ${etape.numero === "03" ? "text-white" : "text-[#524c5d]"}`}
                    >
                      {etape.numero}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#524c5d]">
                  {etape.titre}
                </h3>
                <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                  {etape.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CHIFFRES CLÉS - 4 stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Titre */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Argam Conseils en Chiffres
            </h2>
          </motion.div>

          {/* Grille 4 colonnes */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-0 bg-[#f8f8f8]"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {content.chiffres?.map((chiffre: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col items-center justify-center py-12 px-6 ${
                  index === 0
                    ? "border-r border-b lg:border-b-0 border-[#524c5d]/10"
                    : index === 1
                      ? "border-b lg:border-b-0 lg:border-r border-[#524c5d]/10"
                      : index === 2
                        ? "border-r border-[#524c5d]/10"
                        : ""
                }`}
              >
                <div className="text-center space-y-4">
                  <p className="text-6xl lg:text-7xl text-[#b4925e] font-light leading-none">
                    {chiffre.valeur}
                  </p>
                  <div className="w-12 h-[1px] bg-[#524c5d]/20 mx-auto" />
                  <p className="text-xs uppercase tracking-widest text-[#524c5d]/60 font-medium">
                    {chiffre.label}
                  </p>
                  {chiffre.description && (
                    <p className="text-xs text-gray-500">
                      {chiffre.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: NOS IMPLANTATIONS - 2 cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light mb-6">
              Nos Implantations
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </motion.div>

          {/* 2 colonnes */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Bordeaux */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border-[1px] border-[#524c5d]/20 p-8 space-y-6"
            >
              <MapPin className="h-10 w-10 text-[#b4925e]" strokeWidth={1.5} />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  {content.implantations?.bordeaux?.titre ||
                    "Bordeaux - Siège Social"}
                </h3>
                <div className="space-y-2 text-sm text-[#524c5d]/70 font-light">
                  <p style={{ whiteSpace: "pre-line" }}>
                    {content.implantations?.bordeaux?.adresse ||
                      "52 allées de Tourny\n33000 Bordeaux"}
                  </p>
                  <p className="pt-2">
                    <span className="font-medium text-[#524c5d]">
                      Téléphone :
                    </span>
                    <br />
                    {content.implantations?.bordeaux?.telephone ||
                      "05 33 89 14 00"}
                  </p>
                  <p>
                    <span className="font-medium text-[#524c5d]">Email :</span>
                    <br />
                    {content.implantations?.bordeaux?.email ||
                      "contact-reunion@argamconseils.com"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* La Réunion */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border-[1px] border-[#524c5d]/20 p-8 space-y-6"
            >
              <MapPin className="h-10 w-10 text-[#b4925e]" strokeWidth={1.5} />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  {content.implantations?.reunion?.titre ||
                    "La Réunion - Trois-Bassins"}
                </h3>
                <div className="space-y-2 text-sm text-[#524c5d]/70 font-light">
                  <p style={{ whiteSpace: "pre-line" }}>
                    {content.implantations?.reunion?.adresse ||
                      "Site du COGOHR\nTrois-Bassins"}
                  </p>
                  <p className="pt-2">
                    {content.implantations?.reunion?.texte ||
                      "Rendez-vous en présentiel ou en visioconférence"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: CTA FINAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            className="border-4 border-[#524c5d] p-12 md:p-16 text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              {content.cta?.titre || "Prêt à optimiser votre patrimoine ?"}
            </h2>
            <p className="text-base text-[#524c5d]/70 font-light leading-relaxed max-w-2xl mx-auto">
              {content.cta?.texte ||
                "Bénéficiez d'un premier entretien gratuit et sans engagement pour analyser votre situation et définir vos objectifs."}
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <motion.button
                  className="px-14 py-5 bg-[#b4925e] hover:bg-[#b4925e]/90 text-white text-sm uppercase tracking-wider font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content.cta?.texteBouton || "Prendre rendez-vous"}
                </motion.button>
              </Link>
            </div>
            <p className="text-xs text-[#524c5d]/60 font-light">
              {content.cta?.soustitre ||
                "Réponse sous 48h • Confidentiel • Sans engagement"}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
