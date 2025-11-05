import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#524c5d] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="relative grid lg:grid-cols-[35%_30%_35%] gap-12 lg:gap-16">
          {/* Column 1: Logo + Tagline */}
          <div className="space-y-6">
            <div>
              <Link href="/">
                <Image
                  src="/logo-argam.png"
                  alt="Argam Conseils"
                  width={180}
                  height={54}
                  className="h-10 w-auto brightness-0 invert opacity-90"
                />
              </Link>
            </div>
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Conseil en gestion de patrimoine et expert en protection sociale.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wider text-white/50 font-medium mb-3">
                Partenaire Officiel
              </p>
              <div className="flex items-center gap-3 px-4 py-2 border-[1px] border-white/20 bg-white/5 inline-block">
                <span className="text-xs text-white/80 font-medium">COGOHR</span>
              </div>
            </div>
          </div>

          {/* Séparateur vertical - visible uniquement sur lg */}
          <div className="hidden lg:block absolute left-[35%] top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Column 2: Navigation */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/equipe"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light"
                  >
                    Notre Équipe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offre-cogohr"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light inline-flex items-center gap-2"
                  >
                    Offre COGOHR
                    <span className="text-[9px] uppercase px-2 py-0.5 bg-[#b4925e] text-white rounded-full font-semibold">
                      Exclusif
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Séparateur vertical - visible uniquement sur lg */}
          <div className="hidden lg:block absolute left-[65%] top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Column 3: Contact + Réseaux sociaux */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:0533891400"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light"
                  >
                    05 33 89 14 00
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:contact@argamconseils.com"
                    className="text-sm text-white/70 hover:text-[#b4925e] transition-colors font-light break-all"
                  >
                    contact@argamconseils.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#b4925e] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/70 font-light">
                    <p>Bordeaux • La Réunion</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-3">
                Certifications
              </h3>
              <div className="space-y-1 text-xs text-white/50 font-light">
                <p>ORIAS : 20194827</p>
                <p>Membre ANCACOFI-CIF</p>
                <p>Médiateur : AMF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#524c5d]/50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50 font-light">
              © 2025 Argam Conseils - Tous droits réservés
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
              <Link
                href="/mentions-legales"
                className="hover:text-[#b4925e] transition-colors font-light"
              >
                Mentions légales
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/politique-confidentialite"
                className="hover:text-[#b4925e] transition-colors font-light"
              >
                Politique de confidentialité
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/cgu" className="hover:text-[#b4925e] transition-colors font-light">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
