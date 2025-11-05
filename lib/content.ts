import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

// Chemin vers le dossier content
const contentDirectory = path.join(process.cwd(), 'content');

// ==========================================
// TYPES TYPESCRIPT
// ==========================================

export interface PageContent {
  [key: string]: any;
}

export interface TeamMember {
  nom: string;
  poste: string;
  bio: string;
  photo: string;
  ordre: number;
  type: 'direction' | 'conseiller' | 'assistant';
}

export interface Service {
  titre: string;
  icone: string;
  description: string;
  sousServices: Array<{
    titre: string;
    details: string[];
  }>;
  ordre: number;
  categorie?: string;
}

export interface FAQ {
  question: string;
  reponse: string;
  categorie?: 'général' | 'COGOHR';
  ordre: number;
}

export interface HeaderSettings {
  navigation: Array<{
    label: string;
    url: string;
    badge?: string;
  }>;
}

export interface FooterSettings {
  tagline: string;
  bordeaux: {
    adresse: string;
    telephone: string;
    email: string;
  };
  reunion: {
    adresse: string;
  };
  liensLegaux: Array<{
    label: string;
    url: string;
  }>;
  reseauxSociaux: Array<{
    nom: string;
    url: string;
  }>;
}

// ==========================================
// FONCTIONS DE LECTURE
// ==========================================

/**
 * Lit le contenu d'une page
 */
export function getPageContent(slug: string): PageContent {
  const fullPath = path.join(contentDirectory, 'pages', `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error(`Erreur lecture page ${slug}:`, error);
    return {};
  }
}

/**
 * Récupère tous les membres de l'équipe triés par ordre
 */
export function getAllTeamMembers(): TeamMember[] {
  const teamDirectory = path.join(contentDirectory, 'equipe');

  try {
    const fileNames = fs.readdirSync(teamDirectory);

    const members = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(teamDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          nom: data.nom || '',
          poste: data.poste || '',
          bio: data.bio || '',
          photo: data.photo || '',
          ordre: data.ordre || 999,
          type: data.type || 'conseiller',
        } as TeamMember;
      })
      .sort((a, b) => a.ordre - b.ordre);

    return members;
  } catch (error) {
    console.error('Erreur lecture équipe:', error);
    return [];
  }
}

/**
 * Récupère un membre de l'équipe par son slug
 */
export function getTeamMember(slug: string): TeamMember | null {
  const fullPath = path.join(contentDirectory, 'equipe', `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      nom: data.nom || '',
      poste: data.poste || '',
      bio: data.bio || '',
      photo: data.photo || '',
      ordre: data.ordre || 999,
      type: data.type || 'conseiller',
    } as TeamMember;
  } catch (error) {
    console.error(`Erreur lecture membre ${slug}:`, error);
    return null;
  }
}

/**
 * Récupère tous les services triés par ordre
 */
export function getAllServices(): Service[] {
  const servicesDirectory = path.join(contentDirectory, 'services');

  try {
    const fileNames = fs.readdirSync(servicesDirectory);

    const services = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          titre: data.titre || '',
          icone: data.icone || 'FileText',
          description: data.description || '',
          sousServices: data.sousServices || [],
          ordre: data.ordre || 999,
          categorie: data.categorie || undefined,
        } as Service;
      })
      .sort((a, b) => a.ordre - b.ordre);

    return services;
  } catch (error) {
    console.error('Erreur lecture services:', error);
    return [];
  }
}

/**
 * Récupère les FAQ par catégorie
 */
export function getFAQByCategory(category: 'général' | 'COGOHR'): FAQ[] {
  const allFAQ = getAllFAQ();
  return allFAQ.filter(faq => faq.categorie === category);
}

/**
 * Récupère toutes les questions FAQ triées par ordre
 */
export function getAllFAQ(): FAQ[] {
  const faqDirectory = path.join(contentDirectory, 'faq');

  try {
    const fileNames = fs.readdirSync(faqDirectory);

    const faqs = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(faqDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          question: data.question || '',
          reponse: data.reponse || '',
          categorie: data.categorie || 'général',
          ordre: data.ordre || 999,
        } as FAQ;
      })
      .sort((a, b) => a.ordre - b.ordre);

    return faqs;
  } catch (error) {
    console.error('Erreur lecture FAQ:', error);
    return [];
  }
}

/**
 * Récupère les paramètres du header ou footer
 */
export function getSettings(type: 'header' | 'footer'): HeaderSettings | FooterSettings | null {
  const fullPath = path.join(contentDirectory, 'settings', `${type}.yml`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = yaml.load(fileContents);
    return data as any;
  } catch (error) {
    console.error(`Erreur lecture settings ${type}:`, error);
    return null;
  }
}

/**
 * Récupère les paramètres du header
 */
export function getHeaderSettings(): HeaderSettings {
  const settings = getSettings('header');
  if (!settings) {
    return { navigation: [] };
  }
  return settings as HeaderSettings;
}

/**
 * Récupère les paramètres du footer
 */
export function getFooterSettings(): FooterSettings {
  const settings = getSettings('footer');
  if (!settings) {
    return {
      tagline: '',
      bordeaux: { adresse: '', telephone: '', email: '' },
      reunion: { adresse: '' },
      liensLegaux: [],
      reseauxSociaux: [],
    };
  }
  return settings as FooterSettings;
}

// Type pour les horaires et disponibilités
export interface HorairesSettings {
  horaires: {
    jours: string
    joursCOGOHR: string
    ouverture: string
    fermeture: string
    format: string
    formatContact: string
  }
  visio: {
    disponibilite: string
    disponibiliteCOGOHR: string
    joursComplets: string
    note: string
  }
  delaiReponse: {
    delai: string
    precision: string
    messageToast: string
    cta: string
  }
  processus: {
    dureeEtude: string
    formatDuree: string
  }
}

/**
 * Récupère les paramètres horaires et disponibilités
 */
export function getHoraires(): HorairesSettings {
  const fullPath = path.join(contentDirectory, 'settings', 'horaires.yml');

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = yaml.load(fileContents) as HorairesSettings;
    return data;
  } catch (error) {
    console.error('Erreur lecture horaires:', error);
    // Valeurs par défaut si le fichier n'existe pas
    return {
      horaires: {
        jours: "Lundi - Vendredi",
        joursCOGOHR: "Mercredi - Samedi",
        ouverture: "11h00",
        fermeture: "19h00",
        format: "11h - 19h",
        formatContact: "11h00 - 19h00"
      },
      visio: {
        disponibilite: "5j/7",
        disponibiliteCOGOHR: "4j/7",
        joursComplets: "Lundi au Vendredi",
        note: "sur rendez-vous"
      },
      delaiReponse: {
        delai: "48h",
        precision: "48h ouvrées",
        messageToast: "Nous vous recontacterons sous 48h. Vérifiez vos emails.",
        cta: "Réponse sous 48h"
      },
      processus: {
        dureeEtude: "45mn",
        formatDuree: "Durée : 45mn"
      }
    };
  }
}

// Interface pour le contenu de la page contact
export interface ContactContent {
  hero: {
    label: string;
    titre: {
      light: string;
      bold: string;
    };
    description: string;
  };
  formulaire: {
    titre: string;
    sousTitre: string;
    boutonTexte: string;
    mentionCogohr: {
      titre: string;
      description: string;
    };
  };
  bordeaux: {
    nom: string;
    adresse: string;
    telephone: string;
    email: string;
  };
  reunion: {
    nom: string;
    adresse: string;
    telephone: string;
    email: string;
  };
  horaires: {
    jours: string;
    heures: string;
    ferme: string;
  };
  calendly: {
    url: string;
    texte: string;
    sousTexte: string;
  };
  legal: {
    orias: string;
    membre: string;
    mediateur: string;
  };
  rgpd: {
    titre: string;
    description: string;
  };
}

/**
 * Récupère le contenu de la page contact
 */
export function getContactContent(): ContactContent | null {
  return getPageContent('contact') as ContactContent | null;
}
