import { Header } from "@/components/Header";
import { FooterWrapper } from "@/components/FooterWrapper";
import { getMentionsLegales } from "@/lib/content";
import LegalPageClient from "@/components/LegalPageClient";

export default function MentionsLegalesPage() {
  const data = getMentionsLegales();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <LegalPageClient
        label={data.hero?.label || "Informations Légales"}
        titrePart1={data.hero?.titrePart1 || "Mentions"}
        titrePart2={data.hero?.titrePart2 || "Légales"}
        sections={data.sections || []}
        dateMiseAJour={data.dateMiseAJour}
      />

      <FooterWrapper />
    </main>
  );
}
