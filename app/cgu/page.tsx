import { Header } from "@/components/Header";
import { FooterWrapper } from "@/components/FooterWrapper";
import { getCGU } from "@/lib/content";
import LegalPageClient from "@/components/LegalPageClient";

export default function CGUPage() {
  const data = getCGU();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <LegalPageClient
        label={data.hero?.label || "Conditions d'utilisation"}
        titrePart1={data.hero?.titrePart1 || "Conditions Générales"}
        titrePart2={data.hero?.titrePart2 || "d'Utilisation"}
        sections={data.sections || []}
        contact={data.contact}
        dateMiseAJour={data.dateMiseAJour}
      />

      <FooterWrapper />
    </main>
  );
}
