# Plan d'intégration Microsoft Bookings - Argam Conseils

**Date de création :** 13 janvier 2026  
**Dernière mise à jour :** 19 janvier 2026  
**Statut :** ✅ Validé par le client - En attente de l'URL Bookings  
**Version :** 2.0

---

## Contexte

Le client (Argam Conseils) dispose d'une licence **Microsoft 365 Business Premium** et souhaite intégrer un module de prise de rendez-vous sur le site web pour les **adhérents COGOHR uniquement**.

### Informations client confirmées

| Élément | Statut |
|---------|--------|
| Licence M365 | Business Premium |
| Microsoft Bookings | Disponible, page créée |
| Accès Azure AD / Entra ID | Oui |
| MFA activé | Oui |
| Intégration iframe Bookings | Possible |

---

## Décisions validées (RDV du 19/01/2026)

### 1. Périmètre d'intégration

| Page | Microsoft Bookings | Formulaire contact |
|------|-------------------|-------------------|
| `/contact` | ❌ Non | ✅ Oui (Netlify Forms) |
| `/offre-cogohr` | ✅ Oui (iframe) | ❌ Non |

**Décision :** Microsoft Bookings sera intégré **uniquement sur la page COGOHR**. La page Contact conserve le formulaire actuel (les équipes recontactent le prospect). Le bouton Calendly sera supprimé de la page Contact.

### 2. Mode d'affectation des conseillers

**→ Option A : Calendrier général**
- Répartition automatique des RDV entre les conseillers disponibles
- Le client ne choisit pas son interlocuteur

### 3. Types de rendez-vous (2 types uniquement)

| # | Nom | Mode | Lieu | Durée affichée | Durée bloquée |
|---|-----|------|------|----------------|---------------|
| 1 | **Consultation COGOHR** | Visioconférence | Teams (auto) | **30 min** | 45 min |
| 2 | **Consultation COGOHR** | Présentiel | Trois-Bassins (974) | **30 min** | 45 min |

**Important :** La durée affichée au client est de 30 minutes, mais le créneau bloqué dans le calendrier Microsoft est de 45 minutes (temps tampon inclus).

### 4. Horaires de disponibilité (La Réunion)

| Jour | Horaires |
|------|----------|
| Mercredi | 13h00 - 18h00 |
| Vendredi | 09h00 - 13h00 |

### 5. URL Microsoft Bookings

**Statut : ⏳ EN ATTENTE**

Le client doit fournir l'URL de la page Bookings configurée.

Format attendu :
```
https://outlook.office365.com/book/[NomPage]@[domaine].onmicrosoft.com/
```

---

## Plan d'action détaillé

### Phase 1 : Configuration Microsoft Bookings (Client)

**Responsable :** Argam Conseils  
**Durée estimée :** 2-3 jours  
**Statut :** En cours

#### 1.1 Configuration de la page Bookings

- [ ] Accéder à Microsoft Bookings : https://outlook.office365.com/bookings
- [ ] Configurer les informations de l'entreprise :
  - Nom : Argam Conseils - COGOHR
  - Logo : Logo officiel Argam
  - Adresse : Site COGOHR, Trois-Bassins, La Réunion (974)
  - Téléphone : 05 33 89 14 00
  - Email : contact-reunion@argamconseils.com

#### 1.2 Création des 2 types de rendez-vous

**Type 1 : Consultation COGOHR (Visioconférence)**
```
Nom            : Consultation COGOHR - Visio
Durée affichée : 30 minutes
Durée bloquée  : 45 minutes (ajouter 15 min tampon)
Mode           : En ligne (Teams automatique)
Description    : "Consultation réservée aux adhérents COGOHR. 
                 Bénéficiez de votre étude patrimoniale gratuite 
                 + 0% frais d'entrée sur votre PER."
Jours          : Mercredi, Vendredi
Horaires       : Mer 13h-18h / Ven 9h-13h
Délai min.     : 24h avant
Délai max.     : 30 jours à l'avance
```

**Type 2 : Consultation COGOHR (Présentiel La Réunion)**
```
Nom            : Consultation COGOHR - Présentiel
Durée affichée : 30 minutes
Durée bloquée  : 45 minutes (ajouter 15 min tampon)
Mode           : En personne
Lieu           : Site COGOHR, Trois-Bassins, La Réunion (974)
Description    : "Consultation en présentiel sur le site COGOHR 
                 à Trois-Bassins. Étude gratuite + 0% frais d'entrée PER."
Jours          : Mercredi, Vendredi
Horaires       : Mer 13h-18h / Ven 9h-13h
Délai min.     : 48h avant
Délai max.     : 30 jours à l'avance
```

#### 1.3 Affectation du personnel

- [ ] Mode : Calendrier général (répartition automatique)
- [ ] Affecter les conseillers disponibles à La Réunion
- [ ] Configurer les disponibilités selon les horaires validés

#### 1.4 Champs personnalisés du formulaire

| Champ | Type | Obligatoire |
|-------|------|-------------|
| Téléphone | Texte | Oui |
| Établissement | Liste déroulante | Oui |
| Situation professionnelle | Liste déroulante | Non |
| Message | Zone de texte | Non |

**Options Établissement :**
- CHU Sud Réunion
- CHU Nord Réunion
- GHER - Est Réunion
- CHOR - Ouest
- EPSMR
- Autre établissement

**Options Situation :**
- En activité
- Proche de la retraite (moins de 5 ans)
- Jeune fonctionnaire

#### 1.5 Configuration des notifications

- [ ] Email de confirmation automatique (immédiat)
- [ ] Lien Teams inclus pour les visios
- [ ] Rappel 24h avant le RDV
- [ ] Possibilité d'annulation/modification par le client

#### 1.6 Récupération de l'URL

- [ ] Obtenir l'URL publique de la page Bookings
- [ ] Tester l'URL dans un navigateur
- [ ] Vérifier que l'iframe fonctionne
- [ ] **Envoyer l'URL à Julian**

---

### Phase 2 : Développement site web (Développeur)

**Responsable :** Julian Bonne  
**Durée estimée :** 2-3 jours  
**Statut :** En attente de l'URL

#### 2.1 Création du composant BookingEmbed

Créer `components/BookingEmbed.tsx` :

```tsx
'use client';

import { useState } from 'react';
import { Calendar, Loader2 } from 'lucide-react';

interface BookingEmbedProps {
  embedUrl: string;
  titre?: string;
  sousTitre?: string;
  hauteur?: number;
  className?: string;
}

export function BookingEmbed({
  embedUrl,
  titre = "Prendre rendez-vous",
  sousTitre = "Réservez votre consultation gratuite",
  hauteur = 700,
  className = ""
}: BookingEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`booking-embed ${className}`}>
      {/* En-tête */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="w-5 h-5 text-[#b4925e]" />
          <h3 className="text-xl font-semibold text-[#524c5d]">{titre}</h3>
        </div>
        <p className="text-sm text-gray-600 font-light">{sousTitre}</p>
      </div>

      {/* Loader pendant le chargement */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-[#b4925e] animate-spin" />
          <span className="ml-3 text-gray-600">Chargement du calendrier...</span>
        </div>
      )}

      {/* iframe Microsoft Bookings */}
      <iframe
        src={embedUrl}
        width="100%"
        height={hauteur}
        frameBorder="0"
        scrolling="yes"
        onLoad={() => setIsLoading(false)}
        style={{ 
          display: isLoading ? 'none' : 'block',
          border: '1px solid #e5e7eb',
          borderRadius: '4px'
        }}
        title="Réservation de rendez-vous COGOHR"
        allow="geolocation"
      />

      {/* Note de confidentialité */}
      <p className="text-xs text-gray-500 text-center mt-4 font-light">
        Vos données sont traitées conformément à notre politique de confidentialité.
        La réservation est gérée via Microsoft Bookings.
      </p>
    </div>
  );
}
```

#### 2.2 Mise à jour de la page COGOHR

Modifier `app/offre-cogohr/page.tsx` :
- Remplacer le formulaire `COGOHRContactForm` par le composant `BookingEmbed`
- Conserver les informations de contact (téléphone, email, adresse)

**Section contact mise à jour :**
```tsx
{/* COLONNE DROITE - BOOKING MICROSOFT */}
<div className="bg-white border-2 border-[#524c5d]/20 p-10 shadow-lg">
  <BookingEmbed 
    embedUrl="URL_MICROSOFT_BOOKINGS"
    titre="Réserver votre consultation"
    sousTitre="Choisissez un créneau - Durée : 30 min"
    hauteur={650}
  />
</div>
```

#### 2.3 Mise à jour de la page Contact

Modifier `app/contact/page.tsx` :
- **Supprimer** le bouton Calendly
- Conserver uniquement le formulaire de contact Netlify Forms
- Les équipes recontacteront les prospects manuellement

#### 2.4 Mise à jour du CMS (optionnel)

Modifier `content/pages/offre-cogohr.md` pour gérer l'URL via le CMS :

```yaml
booking:
  provider: "microsoft-bookings"
  embedUrl: "https://outlook.office365.com/book/..."
  titre: "Réserver votre consultation"
  sousTitre: "Choisissez un créneau - Durée : 30 min"
  hauteurIframe: 650
```

Modifier `lib/content.ts` pour ajouter l'interface :

```typescript
interface BookingConfig {
  provider: 'microsoft-bookings';
  embedUrl: string;
  titre: string;
  sousTitre: string;
  hauteurIframe: number;
}
```

#### 2.5 Mise à jour du CMS Decap (optionnel)

Modifier `public/admin/config.yml` pour permettre la modification de l'URL Bookings via l'interface admin.

---

### Phase 3 : Tests et validation

**Responsable :** Julian Bonne + Argam Conseils  
**Durée estimée :** 1 jour

#### 3.1 Tests techniques

- [ ] Affichage iframe sur desktop (Chrome, Firefox, Safari, Edge)
- [ ] Affichage sur mobile (iOS Safari, Android Chrome)
- [ ] Test responsive design
- [ ] Test avec bloqueur de publicités

#### 3.2 Tests fonctionnels

- [ ] Réservation test - Visioconférence
- [ ] Vérifier email de confirmation + lien Teams
- [ ] Réservation test - Présentiel
- [ ] Test annulation/modification
- [ ] Vérifier rappel 24h avant

#### 3.3 Validation client

- [ ] Démonstration au client
- [ ] Validation du parcours utilisateur
- [ ] Ajustements si nécessaire
- [ ] Validation finale

---

### Phase 4 : Déploiement

**Responsable :** Julian Bonne  
**Durée estimée :** 1 jour

#### 4.1 Déploiement

- [ ] Tests finaux en local
- [ ] Commit et push sur main
- [ ] Déploiement automatique Netlify
- [ ] Vérification post-déploiement

#### 4.2 Documentation

- [ ] Mettre à jour CLAUDE.md
- [ ] Guide pour le client : gestion des RDV dans Microsoft Bookings

---

## Planning prévisionnel

| Phase | Durée | Responsable | Statut |
|-------|-------|-------------|--------|
| Phase 1 : Config Bookings | 2-3 jours | Argam Conseils | 🔄 En cours |
| Phase 2 : Développement | 2-3 jours | Julian | ⏳ En attente URL |
| Phase 3 : Tests | 1 jour | Tous | ⏳ En attente |
| Phase 4 : Déploiement | 1 jour | Julian | ⏳ En attente |
| **Total** | **6-8 jours** | | |

---

## Récapitulatif des modifications à effectuer

### Fichiers à créer
- `components/BookingEmbed.tsx` — Composant iframe Microsoft Bookings

### Fichiers à modifier
- `app/offre-cogohr/page.tsx` — Remplacer formulaire par BookingEmbed
- `app/contact/page.tsx` — Supprimer bouton Calendly
- `lib/content.ts` — Ajouter interface BookingConfig (optionnel)
- `content/pages/offre-cogohr.md` — Ajouter config booking (optionnel)
- `public/admin/config.yml` — Champs CMS booking (optionnel)

### Fichiers à supprimer/nettoyer
- Supprimer `app/offre-cogohr/OffreCOGOHRClient.tsx` (formulaire COGOHR) ou le conserver pour usage futur

---

## Checklist finale

### Côté Client (Argam Conseils)
- [ ] Configurer Microsoft Bookings avec les 2 types de RDV
- [ ] Définir les horaires : Mer 13h-18h / Ven 9h-13h
- [ ] Durée affichée 30 min / Durée bloquée 45 min
- [ ] Ajouter les champs personnalisés
- [ ] Tester une réservation en interne
- [ ] **Envoyer l'URL Bookings à Julian**

### Côté Développeur (Julian)
- [ ] Attendre l'URL Microsoft Bookings
- [ ] Créer `BookingEmbed.tsx`
- [ ] Intégrer sur `/offre-cogohr`
- [ ] Supprimer Calendly de `/contact`
- [ ] Tests responsive
- [ ] Déploiement

---

## Annexes

### A. Ressources Microsoft

- [Documentation Microsoft Bookings](https://docs.microsoft.com/fr-fr/microsoft-365/bookings/)
- [Intégration iframe Bookings](https://docs.microsoft.com/fr-fr/microsoft-365/bookings/add-booking-page-to-website)

### B. Exemple de code iframe

```html
<iframe 
  src="https://outlook.office365.com/book/ArgamConseils@domain.onmicrosoft.com/"
  width="100%" 
  height="650" 
  frameborder="0" 
  scrolling="yes">
</iframe>
```

---

**Document créé par :** Julian Bonne  
**Dernière mise à jour :** 19 janvier 2026
