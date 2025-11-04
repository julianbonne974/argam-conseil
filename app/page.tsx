import { ArrowRight, PieChart, Shield, Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { getPageContent } from '@/lib/content';
import HomePageClient from './HomePageClient';

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
  const pageData = getPageContent('accueil');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* SECTION 1: HERO - Layout 60/40 */}
      <section id="accueil" className="relative pt-32 pb-20 overflow-hidden bg-white">
        {/* Geometric Background Elements */}
        <div
          className="absolute inset-0 pointer-events-none"
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
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-16 items-center">
            {/* Left: Text Content - 60% */}
            <div
              className="space-y-10"
            >
              {/* Badge */}
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  CONSEIL PATRIMONIAL
                </p>
                <div className="w-12 h-[1px] bg-[#b4925e] mt-4" />
              </div>

              {/* Titre Principal */}
              <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1] tracking-tight font-light">
                Votre patrimoine mérite<br />
                une expertise dédiée
              </h1>

              {/* Sous-titre */}
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-xl">
                Argam Conseil accompagne les particuliers et les dirigeants dans l'optimisation globale de leur patrimoine professionnel et personnel à La Réunion et Bordeaux.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <Link href="/contact">
                  <button
                    className="px-10 py-4 bg-[#b4925e] hover:bg-[#b4925e]/90 text-white text-sm uppercase tracking-wider font-medium transition-all duration-300"
                  >
                    Prendre rendez-vous
                  </button>
                </Link>

                <Link href="/services" className="group flex items-center gap-2 text-sm text-[#524c5d] hover:text-[#b4925e] transition-colors">
                  <span className="uppercase tracking-wider font-medium">Découvrir nos services</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Geometric Visual - 40% */}
            <div
              className="relative h-[400px] lg:h-[500px] hidden lg:block"
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
                    <line x1="50" y1="450" x2="350" y2="50" stroke="#524c5d" strokeWidth="1" opacity="0.1" />
                    <line x1="100" y1="50" x2="300" y2="450" stroke="#b4925e" strokeWidth="1" opacity="0.1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRÉSENTATION - 2 colonnes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div
            className="grid md:grid-cols-[60%_40%] gap-12"
          >
            {/* Colonne gauche */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#b4925e] font-medium mb-4">
                  À PROPOS
                </p>
                <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d] leading-tight">
                  Une approche globale<br />
                  de votre patrimoine
                </h2>
              </div>

              <div className="space-y-4 text-[#524c5d]/70 font-light leading-relaxed">
                <p>
                  Argam Conseil vous accompagne dans une démarche complète d'optimisation de votre patrimoine. Notre expertise intègre les dimensions stratégiques, fiscales, sociales, financières et juridiques pour vous offrir un conseil personnalisé et optimal.
                </p>
                <p>
                  Que vous soyez particulier, fonctionnaire hospitalier, ou dirigeant d'entreprise, nous construisons avec vous des solutions sur-mesure adaptées à vos objectifs et contraintes spécifiques.
                </p>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="space-y-4">
              {[
                'Conseil patrimonial global',
                'Expertise locale (La Réunion)',
                'Accompagnement personnalisé',
                'Indépendance et transparence'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <span className="text-[#524c5d] font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DOMAINES D'EXPERTISE - 3 cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Titre centré */}
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light mb-6">
              Nos Domaines d'Expertise
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </div>

          {/* Grille 3 colonnes */}
          <div
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 1: Gestion de Patrimoine */}
            <div
              className="group border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e] hover:shadow-md"
            >
              <div className="space-y-6">
                <PieChart className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Gestion de Patrimoine
                </h3>
                <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                  Placement & investissement financier, patrimoine immobilier, optimisation fiscale. Nous élaborons votre stratégie patrimoniale globale.
                </p>
                <ul className="space-y-2 text-sm text-[#524c5d]/60">
                  <li>• Assurance-vie & PER</li>
                  <li>• Investissement immobilier</li>
                  <li>• Optimisation fiscale (Girardin, FIP, FCPI)</li>
                </ul>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#b4925e] hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Protection Sociale */}
            <div
              className="group border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e] hover:shadow-md"
            >
              <div className="space-y-6">
                <Shield className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Protection Sociale
                </h3>
                <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                  Couverture complète pour vous et votre famille. Prévoyance, santé, retraite : sécurisez votre avenir et celui de vos proches.
                </p>
                <ul className="space-y-2 text-sm text-[#524c5d]/60">
                  <li>• Prévoyance (décès, invalidité)</li>
                  <li>• Complémentaire santé</li>
                  <li>• Épargne retraite (PER)</li>
                </ul>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#b4925e] hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Accompagnement Dirigeants */}
            <div
              className="group border-[1px] border-[#524c5d]/20 p-10 transition-all duration-300 hover:border-[#b4925e] hover:shadow-md"
            >
              <div className="space-y-6">
                <Briefcase className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Pour les Dirigeants
                </h3>
                <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                  Solutions dédiées aux entrepreneurs. Statut social, rémunération, épargne salariale, trésorerie d'entreprise.
                </p>
                <ul className="space-y-2 text-sm text-[#524c5d]/60">
                  <li>• Optimisation de la rémunération</li>
                  <li>• Épargne salariale (PEE, PERECO)</li>
                  <li>• Protection sociale du dirigeant</li>
                </ul>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#b4925e] hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NOTRE APPROCHE - 3 étapes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Titre centré */}
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light mb-6">
              Notre Approche
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </div>

          {/* 3 étapes horizontales */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Étape 1 */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 border-4 border-[#b4925e] flex items-center justify-center">
                  <span className="text-3xl font-light text-[#524c5d]">01</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#524c5d]">
                Audit Patrimonial
              </h3>
              <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                Analyse complète de votre situation actuelle pour identifier vos besoins et zones de risques.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 border-4 border-[#b4925e] flex items-center justify-center">
                  <span className="text-3xl font-light text-[#524c5d]">02</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#524c5d]">
                Stratégie Personnalisée
              </h3>
              <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                Élaboration d'une stratégie sur-mesure intégrant toutes les dimensions de votre patrimoine.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-[#b4925e] border-4 border-[#b4925e] flex items-center justify-center">
                  <span className="text-3xl font-light text-white">03</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#524c5d]">
                Mise en Œuvre & Suivi
              </h3>
              <p className="text-sm text-[#524c5d]/70 leading-relaxed font-light">
                Accompagnement dans la réalisation et suivi régulier pour optimiser votre patrimoine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CHIFFRES CLÉS - 4 stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Titre */}
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Argam Conseil en Chiffres
            </h2>
          </div>

          {/* Grille 3 colonnes */}
          <div
            className="grid md:grid-cols-3 gap-0 bg-[#f8f8f8]"
          >
            {/* Statistiques dynamiques du CMS */}
            {pageData.statistiques?.map((stat: any, index: number) => (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center py-12 px-6 ${
                  index < (pageData.statistiques?.length || 0) - 1 ? 'md:border-r border-[#524c5d]/10' : ''
                }`}
              >
                <div className="text-center space-y-4">
                  <p className="text-6xl lg:text-7xl text-[#b4925e] font-light leading-none">
                    {stat.valeur}
                  </p>
                  <div className="w-12 h-[1px] bg-[#524c5d]/20 mx-auto" />
                  <p className="text-xs uppercase tracking-widest text-[#524c5d]/60 font-medium">
                    {stat.label}
                  </p>
                  {stat.sousTitre && (
                    <p className="text-xs text-gray-500">{stat.sousTitre}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: NOS IMPLANTATIONS - 2 cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Titre */}
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light mb-6">
              Nos Implantations
            </h2>
            <div className="w-16 h-1 bg-[#b4925e] mx-auto" />
          </div>

          {/* 2 colonnes */}
          <div
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Bordeaux */}
            <div
              className="bg-white border-[1px] border-[#524c5d]/20 p-8 space-y-6"
            >
              <MapPin className="h-10 w-10 text-[#b4925e]" strokeWidth={1.5} />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  Bordeaux - Siège Social
                </h3>
                <div className="space-y-2 text-sm text-[#524c5d]/70 font-light">
                  <p>52 allées de Tourny<br />33000 Bordeaux</p>
                  <p className="pt-2">
                    <span className="font-medium text-[#524c5d]">Téléphone :</span><br />
                    05 33 89 14 00
                  </p>
                  <p>
                    <span className="font-medium text-[#524c5d]">Email :</span><br />
                    contact@argamconseils.com
                  </p>
                </div>
              </div>
            </div>

            {/* La Réunion */}
            <div
              className="bg-white border-[1px] border-[#524c5d]/20 p-8 space-y-6"
            >
              <MapPin className="h-10 w-10 text-[#b4925e]" strokeWidth={1.5} />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  La Réunion - Trois-Bassins
                </h3>
                <div className="space-y-2 text-sm text-[#524c5d]/70 font-light">
                  <p>Site du COGOHR<br />Trois-Bassins</p>
                  <p className="pt-2">
                    Rendez-vous en présentiel ou en visioconférence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA FINAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div
            className="border-4 border-[#524c5d] p-12 md:p-16 text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl text-[#524c5d] font-light">
              Prêt à optimiser votre patrimoine ?
            </h2>
            <p className="text-base text-[#524c5d]/70 font-light leading-relaxed max-w-2xl mx-auto">
              Bénéficiez d'un premier entretien gratuit et sans engagement pour analyser votre situation et définir vos objectifs.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <button className="px-14 py-5 bg-[#b4925e] hover:bg-[#b4925e]/90 text-white text-sm uppercase tracking-wider font-medium transition-all duration-300">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
            <p className="text-xs text-[#524c5d]/60 font-light">
              Réponse sous 48h • Confidentiel • Sans engagement
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
