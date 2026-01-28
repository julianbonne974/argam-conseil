# Argam Conseils - Site Web

Site web pour Argam Conseils, expert en conseil patrimonial et Plan Épargne Retraite (PER) pour les fonctionnaires hospitaliers de La Réunion.

## 🚀 Technologies

- **Next.js 15.0** avec App Router
- **React 19** avec TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** pour les composants
- **Sonner** pour les notifications toast
- **Lucide React** pour les icônes
- **Framer Motion** pour les animations
- **Netlify** pour le déploiement et les formulaires

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🛠️ Commandes

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint
```

## 🎨 Structure du Site

Le site est une application single-page avec 9 sections :

1. **Header** - Navigation fixe avec menu burger mobile
2. **Hero Section** - Alerte sur la prime de vie chère de 53%
3. **Offre COGOHR** - Avantages exclusifs pour les membres
4. **Processus** - 3 étapes (Diagnostic, Solution, Suivi)
5. **Avantages** - 3 cartes de bénéfices
6. **À Propos** - Informations sur l'entreprise
7. **FAQ** - 5 questions fréquentes
8. **Contact** - Formulaire avec validation
9. **Footer** - 3 colonnes responsive

## 📁 Architecture

```
├── app/
│   ├── layout.tsx              # Layout global avec Toaster
│   ├── page.tsx                # Page principale
│   ├── globals.css             # Styles globaux
│   └── api/contact/route.ts    # API Netlify Forms
├── components/
│   ├── ui/                     # Composants shadcn/ui
│   ├── Header.tsx              # Header fixe
│   ├── Footer.tsx              # Footer
│   ├── LogoSVG.tsx            # Logo Argam
│   ├── COGOHRBadge.tsx        # Badge partenaire
│   ├── ProcessTabs.tsx        # Processus 3 étapes
│   ├── AvantagesCards.tsx     # Cards avantages
│   ├── FAQSection.tsx         # FAQ Accordion
│   └── ContactFormModern.tsx  # Formulaire contact
├── lib/utils.ts               # Utilitaires
├── hooks/useFormToast.ts      # Hook toasts
└── CLAUDE.md                  # Documentation technique
```

## 🎨 Couleurs Argam Conseil

- **Primary** : Brun doré `#b4925e`
- **Secondary** : Gris aubergine `#524c5d`
- **Accent** : Doré clair
- **Vert** : `#10b981` (succès)
- **Bleu** : `#0891b2` (titres)
- **Rouge** : `#dc2626` (alertes)

## 🌐 Déploiement Netlify

Le site est configuré pour un déploiement statique sur Netlify :

1. **Via GitHub** :
   - Push le code sur GitHub
   - Connecter le repo sur Netlify
   - Le déploiement est automatique

2. **Via CLI** :
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 📝 Netlify Forms

Le formulaire de contact utilise Netlify Forms :
- Formulaire caché dans `app/layout.tsx`
- Soumission via `/api/contact`
- Notifications par toast (success/error)

## ✅ Checklist de Test

- [ ] Responsive mobile (375px)
- [ ] Responsive tablet (768px)
- [ ] Responsive desktop (1920px)
- [ ] Validation du formulaire
- [ ] Smooth scroll navigation
- [ ] Burger menu mobile
- [ ] Toast notifications
- [ ] Build production réussi

## 📞 Contact

- **Email** : contact-reunion@argamconseils.com
- **Téléphone** : 05 33 89 14 00
- **Adresses** :
  - Bordeaux (Siège)
  - Trois-Bassins, La Réunion

## 📄 License

© 2024 Argam Conseils. Tous droits réservés.
ORIAS : 20194827 - SIRET : 800 527 824
