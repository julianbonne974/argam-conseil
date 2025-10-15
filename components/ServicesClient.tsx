'use client';

import { motion } from 'framer-motion';
import {
  Home,
  TrendingUp,
  FileText,
  Shield,
  Award,
  Users,
  Briefcase,
  Heart,
  Calendar,
  Umbrella,
  CreditCard,
  Building,
  PieChart,
  LucideIcon
} from 'lucide-react';
import type { Service } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

// Fonction pour obtenir le composant d'icône
function getIconComponent(iconName: string) {
  const icons: { [key: string]: LucideIcon } = {
    Home,
    TrendingUp,
    FileText,
    Shield,
    Award,
    Users,
    Briefcase,
    Heart,
    Calendar,
    Umbrella,
    CreditCard,
    Building,
    PieChart,
  };

  const IconComponent = icons[iconName] || FileText;
  return <IconComponent className="w-12 h-12 text-[#b4925e]" strokeWidth={1.5} />;
}

interface ServicesSectionProps {
  services: Service[];
  categorie: string;
  badge: string;
  titre: string;
  description?: string;
  bgColor?: 'white' | 'gray';
  cols?: 2 | 3;
}

export function ServicesSection({
  services,
  categorie,
  badge,
  titre,
  description,
  bgColor = 'white',
  cols = 3
}: ServicesSectionProps) {
  const filteredServices = services.filter(s => s.categorie === categorie);

  return (
    <section className={`py-24 ${bgColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Titre section */}
        <motion.div
          className="mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#b4925e]/10 text-[#b4925e] px-4 py-1 text-xs uppercase tracking-widest font-medium">
            {badge}
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-[#524c5d]">
            {titre}
          </h2>
          {description && (
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>

        {/* Grille de services */}
        <motion.div
          className={`grid ${cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.titre}
              variants={fadeInUp}
              className="bg-white border border-[#524c5d]/20 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                {getIconComponent(service.icone)}
                <h3 className="text-xl font-semibold text-[#524c5d]">
                  {service.titre}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Affichage des sous-services si disponibles */}
                {service.sousServices && service.sousServices.length > 0 && (
                  <div className="space-y-4 text-sm">
                    {service.sousServices.map((sousService, index) => (
                      <div key={index}>
                        <p className="font-semibold text-[#524c5d] mb-2">{sousService.titre}</p>
                        {sousService.details && sousService.details.length > 0 && (
                          <ul className="space-y-1 text-gray-600 font-light">
                            {sousService.details.map((detail, i) => (
                              <li key={i}>• {detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
