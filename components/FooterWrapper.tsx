import { getFooterSettings, getFormLabels } from "@/lib/content";
import { FooterClient } from "./FooterClient";

// Ce composant serveur charge les données CMS et les passe au composant client
export function FooterWrapper() {
  const settings = getFooterSettings();
  const formLabels = getFormLabels();

  return <FooterClient settings={settings} formLabels={formLabels} />;
}
