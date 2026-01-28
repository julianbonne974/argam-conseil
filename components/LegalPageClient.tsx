"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";
import type { LegalSection } from "@/lib/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
};

function renderMarkdown(text: string): string {
  let html = text;

  // Liens markdown [text](url)
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#b4925e] hover:underline">$1</a>',
  );

  // Gras **text**
  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-[#524c5d]">$1</strong>',
  );

  // Listes à puces (lignes commençant par -)
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(
    /((?:<li>[\s\S]*?<\/li>\n?)+)/g,
    (match) => `<ul class="space-y-2 ml-6 list-disc">${match}</ul>`,
  );

  // Paragraphes : lignes non-vides séparées par des lignes vides
  const blocks = html.split(/\n\n+/);
  html = blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<h")
      )
        return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  // Nettoyer les sauts de ligne résiduels dans les paragraphes
  html = html.replace(/<p>\s*<\/p>/g, "");

  return html;
}

interface LegalPageClientProps {
  label: string;
  titrePart1: string;
  titrePart2: string;
  description?: string;
  sections: LegalSection[];
  contact?: {
    texte: string;
    nom?: string;
    adresse: string;
    email: string;
    telephone: string;
  };
  dateMiseAJour?: string;
  notesMiseAJour?: string;
}

export default function LegalPageClient({
  label,
  titrePart1,
  titrePart2,
  description,
  sections,
  contact,
  dateMiseAJour,
  notesMiseAJour,
}: LegalPageClientProps) {
  return (
    <>
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
              {label}
            </p>
            <h1 className="text-5xl lg:text-6xl text-[#524c5d] leading-[1.1]">
              <span className="font-light">{titrePart1}</span>{" "}
              <span className="font-bold">{titrePart2}</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#b4925e] mx-auto mt-6" />
            {description && (
              <p className="text-base text-[#524c5d]/60 max-w-2xl mx-auto leading-relaxed font-light pt-4">
                {description}
              </p>
            )}
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
            {sections.map((section, index) => {
              const IconComponent = section.icone
                ? iconMap[section.icone]
                : null;

              return (
                <div key={index} className="space-y-4">
                  <div
                    className={`flex items-center gap-4 ${IconComponent ? "mb-6" : "mb-4"}`}
                  >
                    {IconComponent && (
                      <div className="p-3 border-[1px] border-[#b4925e]/30 bg-[#b4925e]/5">
                        <IconComponent className="h-6 w-6 text-[#b4925e]" />
                      </div>
                    )}
                    <h2 className="text-2xl font-semibold text-[#524c5d]">
                      {section.titre}
                    </h2>
                  </div>
                  <div
                    className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-3 [&_ul]:space-y-2 [&_ul]:ml-6 [&_ul]:list-disc [&_a]:text-[#b4925e] [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-[#524c5d]"
                    dangerouslySetInnerHTML={{
                      __html: renderMarkdown(section.contenu || ""),
                    }}
                  />
                </div>
              );
            })}

            {/* Contact */}
            {contact && (
              <div className="space-y-4 pt-8 border-t border-[#524c5d]/10">
                <h2 className="text-2xl font-semibold text-[#524c5d] mb-4">
                  Contact
                </h2>
                <div className="text-sm text-[#524c5d]/70 font-light leading-relaxed space-y-2">
                  <p>{contact.texte}</p>
                  {contact.nom && (
                    <p>
                      <strong className="font-semibold text-[#524c5d]">
                        {contact.nom}
                      </strong>
                    </p>
                  )}
                  {contact.nom && <p>{contact.adresse}</p>}
                  {!contact.nom && (
                    <p>
                      <strong className="font-semibold text-[#524c5d]">
                        Courrier :
                      </strong>{" "}
                      {contact.adresse}
                    </p>
                  )}
                  <p>
                    <strong className="font-semibold text-[#524c5d]">
                      Email :
                    </strong>{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[#b4925e] hover:underline"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p>
                    <strong className="font-semibold text-[#524c5d]">
                      Téléphone :
                    </strong>{" "}
                    {contact.telephone}
                  </p>
                </div>
              </div>
            )}

            {/* Date de mise à jour */}
            {dateMiseAJour && (
              <div className="pt-8 border-t border-[#524c5d]/10">
                <p className="text-xs text-[#524c5d]/50 font-light">
                  Dernière mise à jour : {dateMiseAJour}
                  {notesMiseAJour && (
                    <>
                      <br />
                      {notesMiseAJour}
                    </>
                  )}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
