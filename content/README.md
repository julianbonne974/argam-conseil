# Decap CMS - Configuration du contenu

Ce dossier contient tous les fichiers de contenu gérés par Decap CMS.

## Structure des dossiers

```
content/
├── pages/          # Pages principales du site
│   ├── accueil.md
│   ├── offre-cogohr.md
│   └── contact.md
├── equipe/         # Membres de l'équipe
│   └── antoine-chevalier.md
├── services/       # Services proposés
│   └── epargne-retraite.md
├── faq/            # Questions fréquentes
│   └── question-1.md
└── settings/       # Paramètres globaux
    ├── header.yml
    └── footer.yml
```

## Collections disponibles

### 1. Pages
Gestion des pages principales avec frontmatter YAML structuré :
- **Page Accueil** : Hero, services, chiffres clés
- **Page Offre COGOHR** : Hero, problématique, avantages, processus
- **Page Contact** : Coordonnées Bordeaux et La Réunion, horaires

### 2. Équipe
Créer/modifier/supprimer des membres de l'équipe :
- Nom, poste, biographie
- Photo (optionnelle)
- Ordre d'affichage

### 3. Services
Créer/modifier/supprimer des services :
- Titre, icône, description
- Sous-services avec détails
- Ordre d'affichage

### 4. FAQ
Créer/modifier/supprimer des questions :
- Question et réponse (markdown)
- Ordre d'affichage

### 5. Paramètres
Configuration globale :
- **Header** : Navigation, badges
- **Footer** : Tagline, adresses, liens légaux, réseaux sociaux

## Accès au CMS

1. **URL locale** : http://localhost:3000/admin
2. **URL production** : https://argamconseilrun.netlify.app/admin

## Mode Editorial Workflow

Le CMS est configuré en mode "editorial workflow" avec 3 états :
- **Draft** (Brouillon) : Modifications en cours
- **In Review** (En révision) : Prêt pour validation
- **Ready** (Prêt) : Validé et publié

## Modification du contenu

### Via Decap CMS (Recommandé)
1. Se connecter à `/admin`
2. Choisir la collection (Pages, Équipe, Services, FAQ, Paramètres)
3. Modifier le contenu via l'interface graphique
4. Sauvegarder et publier

### Via fichiers markdown (Avancé)
Les fichiers peuvent aussi être modifiés directement dans ce dossier.
Format attendu :
```markdown
---
# Frontmatter YAML
titre: "Mon titre"
description: "Ma description"
---

# Contenu markdown optionnel
```

## Ajouter du contenu

### Nouveau membre d'équipe
1. Aller dans **Équipe** > **New Équipe**
2. Remplir : nom, poste, bio, photo (optionnelle), ordre
3. Sauvegarder

### Nouveau service
1. Aller dans **Services** > **New Services**
2. Remplir : titre, icône, description, sous-services, ordre
3. Sauvegarder

### Nouvelle question FAQ
1. Aller dans **FAQ** > **New FAQ**
2. Remplir : question, réponse (markdown), ordre
3. Sauvegarder

## Icônes disponibles

Pour les services et autres éléments :
- `Home` - Maison
- `TrendingUp` - Graphique croissant
- `Shield` - Bouclier
- `Users` - Utilisateurs
- `Briefcase` - Porte-documents
- `FileText` - Document
- `PieChart` - Graphique circulaire
- `Award` - Récompense

## Support

Pour toute question sur la configuration Decap CMS :
- Documentation : https://decapcms.org/docs/
- Support Argam Conseil : contact@argam-conseils.fr
