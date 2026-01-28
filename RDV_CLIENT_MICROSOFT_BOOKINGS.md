# Rendez-vous Client - Intégration Microsoft Bookings

**Client :** Argam Conseils  
**Date du RDV :** _________________  
**Objectif :** Valider les choix pour l'intégration Microsoft Bookings sur le site web

---

## Contexte rapide

Actuellement, le site utilise :
- Un bouton **Calendly** (lien externe) sur la page Contact
- Deux **formulaires de contact** différents (Contact + COGOHR) avec Netlify Forms

**Objectif :** Remplacer Calendly par **Microsoft Bookings** (iframe intégré) pour une meilleure synchronisation avec les calendriers Outlook et la génération automatique de liens Teams.

---

## Ordre du jour

1. Mode d'affectation des conseillers
2. Validation des types de rendez-vous
3. Horaires de disponibilité
4. URL Microsoft Bookings
5. Emplacement sur le site

---

## 1. Mode d'affectation des conseillers

**Question :** Les clients doivent-ils pouvoir choisir leur conseiller ? OPTION A

### Option A : Calendrier général (Recommandé pour démarrer)

```
✓ Répartition automatique des RDV entre les conseillers disponibles
✓ Simplicité de gestion
✓ Moins de créneaux vides
✓ Flexibilité pour l'équipe

✗ Le client ne choisit pas son interlocuteur
```

### Option B : Choix du conseiller

```
✓ Plus personnalisé
✓ Fidélisation client
✓ Le client sait qui il va rencontrer

✗ Gestion des disponibilités plus complexe
✗ Risque de surcharge sur certains conseillers
✗ Créneaux potentiellement vides
```

**Recommandation :** Commencer par l'Option A, puis évoluer si besoin.

### Décision client :

```
☐ Option A - Calendrier général (recommandé)
☐ Option B - Choix du conseiller
☐ Autre : _________________________________
```

---

## 2. Types de rendez-vous

### Synthèse des formulaires actuels du site

Les formulaires actuels collectent ces informations :

**Page Contact :**
- Nom, Email, Téléphone
- Adhérent COGOHR ? (checkbox)
- Fonction (si COGOHR) : Infirmier(ère), Aide-soignant(e), Médecin, Cadre de santé, Technicien(ne), Personnel administratif, Autre
- Type de RDV : Visioconférence / Présentiel
- Message

**Page COGOHR :**
- Prénom, Nom, Email, Téléphone
- Établissement : CHU Sud, CHU Nord, GHER, CHOR, EPSMR, Autre
- Situation : En activité, Proche retraite (-5 ans), Jeune fonctionnaire
- Message

---

### 4 types de RDV proposés

| # | Nom du RDV | Public | Mode | Lieu | Durée |
|---|------------|--------|------|------|-------|
| 1 | **Étude patrimoniale gratuite** | Tout prospect | Visio | Teams (auto) | 45 min |
| 2 | **Étude patrimoniale gratuite** | Tout prospect | Présentiel | Bordeaux | 45 min |

=> Relis le formulaire sur la page contact : on integre pas le calendrier microsft. Sur la page contact on recevra le formulaire et les equipe recontateront le prospect

| 3 | **Consultation COGOHR** | Adhérents COGOHR | Visio | Teams (auto) | 45 min | => il faut que le rendez vous sur le calendrier microsoft soit bloqué pour 45min mais que la durée de rendez vous affichée sur le formulaire soit de 30 minutes
| 4 | **Consultation COGOHR** | Adhérents COGOHR | Présentiel | La Réunion | 45 min | => il faut que le rendez vous sur le calendrier microsoft soit bloqué pour 45min mais que la durée de rendez vous affichée sur le formulaire soit de 30 minutes

### Détail de chaque type :



**Type 1 - Consultation COGOHR (Visio)**
```
Public cible   : Adhérents COGOHR uniquement
Mode           : Visioconférence (lien Teams auto)
Durée          : 45 minutes
Description    : "Consultation réservée aux adhérents COGOHR. 
                 Bénéficiez de votre étude gratuite + 0% frais d'entrée PER."
```

**Type 2 - Consultation COGOHR (Présentiel La Réunion)**
```
Public cible   : Adhérents COGOHR à La Réunion
Mode           : En personne
Lieu           : Site COGOHR, Trois-Bassins (974)
Durée          : 45 minutes
Description    : "Consultation en présentiel sur le site COGOHR à Trois-Bassins."
```

### Validation client :

```
☐ Les 4 types conviennent tels quels

☐ Modifications souhaitées :
  Type 1 : ________________________________________
  Type 2 : ________________________________________
  Type 3 : ________________________________________
  Type 4 : ________________________________________

☐ Types supplémentaires à ajouter :
  ☐ Suivi annuel client existant (durée : ___ min)
  ☐ Rendez-vous de signature (durée : ___ min)
  ☐ Autre : _______________________________________
```

---

## 3. Horaires de disponibilité

### Horaires actuellement affichés sur le site

| Lieu | Jours | Horaires |
|------|-------|----------|
| Bordeaux (général) | Lundi - Vendredi | 11h00 - 19h00 |
| La Réunion (COGOHR) | Mercredi de 13h à 18het vendredi matin de 9h à 13h 

### Configuration Microsoft Bookings

Dans ma microsoft booking il faut que mes clients puissent boquer et ouvrir des créneaux de rendez-vous.

**Type 1 & 3 - Visioconférence**

| Paramètre | Valeur proposée | Validation |
|-----------|-----------------|------------|
| Jours | Lundi - Vendredi | ☐ OK ☐ Modifier : _______ |
| Horaires | 11h00 - 19h00 | ☐ OK ☐ Modifier : _______ |
| Délai min. avant RDV | 24h | ☐ OK ☐ Modifier : _______ |
| Réservation max avance | 30 jours | ☐ OK ☐ Modifier : _______ |

**Type 2 - Présentiel Bordeaux**

| Paramètre | Valeur proposée | Validation |
|-----------|-----------------|------------|
| Jours | Lundi - Vendredi | ☐ OK ☐ Modifier : _______ |
| Horaires | 11h00 - 19h00 | ☐ OK ☐ Modifier : _______ |
| Délai min. avant RDV | 48h | ☐ OK ☐ Modifier : _______ |
| Réservation max avance | 30 jours | ☐ OK ☐ Modifier : _______ |

**Type 4 - Présentiel La Réunion**

| Paramètre | Valeur proposée | Validation |
|-----------|-----------------|------------|
| Jours | Mercredi - Samedi | ☐ OK ☐ Modifier : _______ |
| Horaires | 11h00 - 19h00 | ☐ OK ☐ Modifier : _______ |
| Délai min. avant RDV | 48h | ☐ OK ☐ Modifier : _______ |
| Réservation max avance | 30 jours | ☐ OK ☐ Modifier : _______ |

### Questions complémentaires :

```
☐ Pause déjeuner à bloquer ? 
  ☐ Non
  ☐ Oui : de ___h___ à ___h___

☐ Durée tampon entre 2 RDV ?
  ☐ 0 min (RDV enchaînés)
  ☐ 15 min
  ☐ 30 min
  ☐ Autre : ___ min

☐ Gestion des jours fériés ?
  ☐ Manuelle (bloquer au cas par cas)
  ☐ Automatique (calendrier FR)

☐ Périodes de congés prévues ?
  _____________________________________________
```

---

## 4. URL Microsoft Bookings

### Action requise

La page Microsoft Bookings existe déjà. Il faut récupérer l'URL publique.

**Étapes pour obtenir l'URL :**

1. Aller sur https://outlook.office365.com/bookings
2. Sélectionner la page "Argam Conseils"
3. Menu → "Page de réservation"
4. Copier l'URL affichée

**Format attendu :**
```
https://outlook.office365.com/book/ArgamConseils@[domaine].onmicrosoft.com/
```

### URL fournie :

```
URL : ________________________________________________________________

☐ URL testée dans un navigateur
☐ L'iframe s'affiche correctement (pas de blocage)
```

---

## 5. Emplacement sur le site

### Options proposées

**Option A : Page Contact uniquement**
```
- Remplacer le bouton Calendly par l'iframe Microsoft Bookings
- Garder le formulaire de contact à côté (pour ceux qui préfèrent être rappelés)
- Tous les types de RDV visibles
```

**Option B : Page Contact + Page COGOHR**
```
- Page Contact : Tous les types de RDV
- Page COGOHR : Uniquement les types 3 & 4 (Consultation COGOHR)
- 2 intégrations distinctes
```

**Option C : Page dédiée /rendez-vous**
```
- Créer une nouvelle page spécifique
- Affichage pleine largeur de l'iframe
- Liens depuis Contact et COGOHR vers cette page
```

**Option D : Header + Pages**
```
- Bouton "Prendre RDV" dans le header (toutes les pages)
- Intégration sur Contact et/ou COGOHR
```

### Maquette visuelle - Page Contact

```
┌─────────────────────────────────────────────────────────────────┐
│  PAGE CONTACT                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────┐    ┌─────────────────────────────┐  │
│  │                       │    │                             │  │
│  │   FORMULAIRE DE       │    │   📅 PRENDRE RENDEZ-VOUS   │  │
│  │   CONTACT             │    │   ─────────────────────     │  │
│  │                       │    │                             │  │
│  │   Pour être rappelé   │    │   ┌─────────────────────┐   │  │
│  │                       │    │   │                     │   │  │
│  │   Nom: ____________   │    │   │  MICROSOFT          │   │  │
│  │   Email: __________   │    │   │  BOOKINGS           │   │  │
│  │   Téléphone: ______   │    │   │  IFRAME             │   │  │
│  │   ☐ Adhérent COGOHR   │    │   │                     │   │  │
│  │   Message: ________   │    │   │  (choix du type     │   │  │
│  │   _________________   │    │   │   + calendrier)     │   │  │
│  │                       │    │   │                     │   │  │
│  │   [Envoyer]           │    │   └─────────────────────┘   │  │
│  │                       │    │                             │  │
│  └───────────────────────┘    └─────────────────────────────┘  │
│                                                                 │
│           60%                          40%                      │
└─────────────────────────────────────────────────────────────────┘
```

### Décision client :

```
☐ Option A - Page Contact uniquement
☐ Option B - Page Contact + Page COGOHR
☐ Option C - Page dédiée /rendez-vous
☐ Option D - Header + Pages

Détails :
  ☐ Intégrer sur /contact
  ☐ Intégrer sur /offre-cogohr
  ☐ Créer page /rendez-vous
  ☐ Bouton dans le header
```

---

## 6. Champs du formulaire Microsoft Bookings

### Champs standards (automatiques)
- Prénom
- Nom  
- Email
- Date/Heure souhaitée

### Champs personnalisés à ajouter

Basé sur les formulaires actuels du site :

| Champ | Type | Obligatoire | Options |
|-------|------|-------------|---------|
| Téléphone | Texte | Oui | - |
| Fonction | Liste déroulante | Non | Infirmier(ère), Aide-soignant(e), Médecin, Cadre de santé, Technicien(ne), Personnel administratif, Autre |
| Établissement | Liste déroulante | Non | CHU Sud Réunion, CHU Nord Réunion, GHER - Est Réunion, CHOR - Ouest, EPSMR, Autre |
| Situation | Liste déroulante | Non | En activité, Proche de la retraite (-5 ans), Jeune fonctionnaire |
| Message | Zone de texte | Non | - |

### Validation client :

```
☐ Champs proposés OK

☐ Rendre obligatoires :
  ☐ Fonction
  ☐ Établissement
  ☐ Situation

☐ Ajouter un champ : _______________________________
☐ Retirer un champ : _______________________________
```

**Note :** Les champs peuvent varier selon le type de RDV. Par exemple, "Établissement" uniquement pour les consultations COGOHR.

---

## 7. Notifications email

### Notifications automatiques Microsoft Bookings

| Notification | Destinataire | Timing |
|--------------|--------------|--------|
| Confirmation de réservation | Client + Conseiller | Immédiat |
| Lien Teams (si visio) | Client | Dans la confirmation |
| Rappel | Client | 24h avant |
| Annulation/Modification | Client + Conseiller | Immédiat |

### Options :

```
☐ Ajouter un 2ème rappel ?
  ☐ Non
  ☐ Oui, 1h avant
  ☐ Oui, autre : _______

☐ Personnaliser le texte des emails ?
  ☐ Non, garder les emails Microsoft standards
  ☐ Oui (fournir les textes)

☐ Permettre au client d'annuler/modifier ?
  ☐ Oui (recommandé)
  ☐ Non
```

---

## Récapitulatif des décisions

| # | Point | Décision |
|---|-------|----------|
| 1 | Mode d'affectation | ☐ Général ☐ Choix conseiller |
| 2 | Types de RDV | ☐ 4 types OK ☐ Modifs : _______ |
| 3 | Horaires | ☐ Validés ☐ Modifs : _______ |
| 4 | URL Bookings | _________________________________ |
| 5 | Emplacement site | ☐ Contact ☐ COGOHR ☐ Dédiée ☐ Header |
| 6 | Champs formulaire | ☐ OK ☐ Modifs : _______ |
| 7 | Notifications | ☐ Standard ☐ Personnalisées |

---

## Prochaines étapes

### Côté Argam Conseils (client)

1. ☐ Finaliser la configuration Microsoft Bookings
2. ☐ Créer les 4 types de rendez-vous
3. ☐ Affecter les conseillers aux types
4. ☐ Configurer les horaires de disponibilité
5. ☐ Ajouter les champs personnalisés
6. ☐ Tester une réservation en interne
7. ☐ **Envoyer l'URL Bookings finale**

### Côté développeur (Julian)

1. ☐ Créer le composant `BookingEmbed.tsx`
2. ☐ Intégrer sur la/les page(s) validée(s)
3. ☐ Mettre à jour le CMS (Decap)
4. ☐ Tests responsive (mobile/desktop)
5. ☐ Déploiement staging → validation client
6. ☐ Déploiement production

### Planning estimé

| Phase | Durée | Responsable |
|-------|-------|-------------|
| Configuration Bookings | 2-3 jours | Argam Conseils |
| Développement | 2-3 jours | Julian |
| Tests & validation | 1 jour | Tous |
| Déploiement | 1 jour | Julian |
| **Total** | **6-8 jours ouvrés** | |

---

## Notes du RDV

```
___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________
```

---

**Document préparé par :** Julian Bonne  
**Date :** 19 janvier 2026
