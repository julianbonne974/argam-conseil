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
