"use client";

import {
  Calendar,
  Clock,
  MapPin,
  Video,
  ExternalLink,
  Shield,
  CheckCircle2,
} from "lucide-react";

interface BookingEmbedProps {
  embedUrl: string;
  titre?: string;
  sousTitre?: string;
  className?: string;
}

export function BookingEmbed({
  embedUrl,
  titre = "Prendre rendez-vous",
  sousTitre = "Réservez votre consultation gratuite",
  className = "",
}: BookingEmbedProps) {
  return (
    <div className={`booking-embed ${className}`}>
      {/* En-tête */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#b4925e]/10 mb-4">
          <Calendar className="w-7 h-7 text-[#b4925e]" />
        </div>
        <h3 className="text-2xl font-semibold text-[#524c5d] mb-2">{titre}</h3>
        <p className="text-sm text-[#524c5d]/60 font-light">{sousTitre}</p>
      </div>

      {/* Infos RDV */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center gap-2 p-4 bg-[#524c5d]/[0.03] rounded-lg">
          <Clock className="w-5 h-5 text-[#b4925e]" />
          <span className="text-sm font-medium text-[#524c5d]">30 minutes</span>
          <span className="text-xs text-[#524c5d]/50 font-light">
            Durée de l'entretien
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 bg-[#524c5d]/[0.03] rounded-lg">
          <Video className="w-5 h-5 text-[#b4925e]" />
          <span className="text-sm font-medium text-[#524c5d]">
            Visio ou présentiel
          </span>
          <span className="text-xs text-[#524c5d]/50 font-light">
            Selon votre préférence
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 bg-[#524c5d]/[0.03] rounded-lg">
          <MapPin className="w-5 h-5 text-[#b4925e]" />
          <span className="text-sm font-medium text-[#524c5d]">
            Trois-Bassins
          </span>
          <span className="text-xs text-[#524c5d]/50 font-light">
            La Réunion
          </span>
        </div>
      </div>

      {/* Avantages */}
      <div className="space-y-3 mb-8">
        {[
          "Étude patrimoniale gratuite et sans engagement",
          "0% de frais d'entrée sur votre PER",
          "Confirmation immédiate par email",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="text-sm text-[#524c5d]/70 font-light">{item}</span>
          </div>
        ))}
      </div>

      {/* CTA principal */}
      <a
        href={embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#b4925e] text-white font-semibold text-base rounded-lg hover:bg-[#a07e4e] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      >
        <Calendar className="w-5 h-5" />
        Choisir un créneau
        <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
      </a>

      {/* Sous-texte */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <Shield className="w-3.5 h-3.5 text-[#524c5d]/30" />
        <p className="text-xs text-[#524c5d]/40 font-light">
          Redirection sécurisée vers Microsoft Bookings
        </p>
      </div>

      {/* Confidentialité */}
      <p className="text-xs text-[#524c5d]/40 text-center mt-2 font-light">
        Vos données sont traitées conformément à notre{" "}
        <a
          href="/politique-confidentialite"
          className="underline hover:text-[#b4925e]"
        >
          politique de confidentialité
        </a>
        .
      </p>
    </div>
  );
}
