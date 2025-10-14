import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argam Conseil - Plan Épargne Retraite Fonctionnaires La Réunion",
  description:
    "Compensez la perte de votre prime de vie chère de 53% avec un Plan Épargne Retraite. Étude gratuite + 0% frais d'entrée pour membres COGOHR.",
  keywords:
    "PER, Plan Épargne Retraite, Fonctionnaires, La Réunion, COGOHR, Prime vie chère, Retraite fonctionnaire",
  openGraph: {
    title: "Argam Conseil - Épargne Retraite Fonctionnaires",
    description:
      "Votre prime de vie chère de 53% n'est pas prise en compte pour la retraite. Découvrez comment compenser cette perte.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" richColors />

        {/* Hidden Netlify Form for detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <select name="fonction">
            <option value="infirmier">Infirmier(ère)</option>
            <option value="aide-soignant">Aide-soignant(e)</option>
            <option value="medecin">Médecin</option>
            <option value="cadre-sante">Cadre de santé</option>
            <option value="technicien">Technicien(ne)</option>
            <option value="administratif">Personnel administratif</option>
            <option value="autre">Autre</option>
          </select>
          <input type="radio" name="meetingType" value="visio" />
          <input type="radio" name="meetingType" value="presentiel" />
          <textarea name="message"></textarea>
          <input type="checkbox" name="isCogohrMember" />
        </form>
      </body>
    </html>
  );
}
