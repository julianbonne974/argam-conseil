import { Header } from "@/components/Header";
import { FooterWrapper } from "@/components/FooterWrapper";
import { getPolitiqueConfidentialite } from "@/lib/content";
import LegalPageClient from "@/components/LegalPageClient";

export default function PolitiqueConfidentialitePage() {
  const data = getPolitiqueConfidentialite();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <LegalPageClient
        label={data.hero?.label || "Protection des données"}
        titrePart1={data.hero?.titrePart1 || "Politique de"}
        titrePart2={data.hero?.titrePart2 || "Confidentialité"}
        description={data.hero?.description}
        sections={data.sections || []}
        contact={data.contact}
        dateMiseAJour={data.dateMiseAJour}
        notesMiseAJour={data.notesMiseAJour}
      />

      <FooterWrapper />
    </main>
  );
}
