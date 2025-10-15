# Bonnes Pratiques Git - Argam Conseil

## 🚨 Historique des Problèmes

**Date :** 15 Octobre 2025
**Problème rencontré :** `pack-objects died of signal 10`
**Cause :** Repository Git corrompu avec trop d'objets loose accumulés
**Solution appliquée :** Recréation complète du .git depuis GitHub

---

## ✅ Recommandations pour les Prochains Commits

### 1. Commits Réguliers et Petits

**À FAIRE :**
```bash
# Commiter dès qu'une fonctionnalité logique est terminée
git add components/NewComponent.tsx
git commit -m "feat: Add NewComponent for X feature"
git push
```

**À ÉVITER :**
```bash
# Ne PAS accumuler des dizaines de fichiers
git add .
git commit -m "feat: Huge update with everything"  # ❌ Trop gros
```

### 2. Règle des Petits Lots

**Maximum recommandé par commit :**
- ✅ 5-10 fichiers modifiés
- ✅ Moins de 500 lignes de code
- ✅ Une fonctionnalité cohérente

**Si vous avez plus :**
```bash
# Diviser en plusieurs commits
git add lib/content.ts components/HeaderWrapper.tsx
git commit -m "feat: Add content library + Header wrapper"
git push

git add components/Footer*.tsx
git commit -m "feat: Add Footer components"
git push
```

### 3. Push Fréquents

**Fréquence recommandée :**
- ✅ Push après chaque commit ou groupe de 2-3 commits max
- ✅ Au moins 1 fois par session de travail
- ✅ Avant de quitter le travail pour la journée

**Commandes recommandées :**
```bash
# Workflow idéal
git add [fichiers]
git commit -m "feat: Description"
git push origin main

# Vérifier le statut régulièrement
git status
```

### 4. Nettoyage Préventif

**Une fois par semaine :**
```bash
# Vérifier la santé du repository
git fsck --full

# Vérifier la taille du .git
du -sh .git

# Si .git > 10M, nettoyer
git gc --auto
```

### 5. Messages de Commit Clairs

**Format recommandé :**
```bash
feat: Ajout de X fonctionnalité
fix: Correction du bug Y
refactor: Refactorisation de Z
docs: Mise à jour documentation
style: Amélioration CSS/design
chore: Maintenance/configuration
```

**Exemples :**
```bash
✅ git commit -m "feat: Add COGOHR client component with FAQ section"
✅ git commit -m "fix: Correct Header navigation links"
✅ git commit -m "refactor: Split services page into smaller components"
❌ git commit -m "update"  # Trop vague
❌ git commit -m "fix stuff"  # Pas clair
```

---

## 🛠️ Commandes Utiles

### Vérifier l'État
```bash
# Voir les modifications
git status

# Voir l'historique
git log --oneline -10

# Voir les différences
git diff

# Vérifier la synchronisation
git fetch origin
git status
```

### En Cas de Problème

**Si trop de fichiers modifiés :**
```bash
# Stash les modifications temporairement
git stash

# Réappliquer progressivement
git stash pop
# Puis commiter par petits lots
```

**Si conflit avec remote :**
```bash
# Toujours fetch d'abord
git fetch origin

# Voir les différences
git diff origin/main

# Merge ou rebase selon le cas
git pull origin main
```

**Si erreur "pack-objects died" :**
```bash
# Option 1: Forcer le garbage collection
git gc --aggressive --prune=now

# Option 2: Si ça échoue, voir section suivante
```

---

## 🚑 Procédure d'Urgence (si crash)

**Si "pack-objects died of signal 10" réapparaît :**

1. **Sauvegarder immédiatement :**
   ```bash
   cp -r /path/to/project /path/to/backup
   ```

2. **Noter les modifications :**
   ```bash
   git status > /tmp/git-status.txt
   git diff > /tmp/git-changes.patch
   ```

3. **Recréer le .git :**
   ```bash
   rm -rf .git
   git init
   git remote add origin https://github.com/julianbonne974/argam-conseil.git
   git fetch origin
   git reset --hard origin/main
   ```

4. **Réappliquer par petits lots :**
   - Commiter 5-10 fichiers à la fois
   - Pusher après chaque commit

---

## 📊 Surveillance du Repository

### Indicateurs de Santé

**Vérifier régulièrement :**
```bash
# Taille du .git (idéalement < 10M pour ce projet)
du -sh .git

# Nombre d'objets loose (idéalement < 100)
find .git/objects -type f | wc -l

# État de synchronisation
git status
```

**Alertes :**
- 🟢 .git < 5M : Excellent
- 🟡 .git entre 5-10M : Correct
- 🔴 .git > 10M : Nettoyer avec `git gc`

---

## 🎯 Checklist Avant Chaque Session

Avant de commencer à travailler :
- [ ] `git pull origin main` - Récupérer les dernières modifications
- [ ] `git status` - Vérifier qu'on est sur main et synchronisé
- [ ] Vérifier que le serveur de dev fonctionne

Après chaque session :
- [ ] Commiter toutes les modifications
- [ ] Pusher vers GitHub
- [ ] Vérifier que le push a réussi (`git status`)

---

## 📝 Notes Importantes

1. **Ne jamais forcer un push** avec `--force` sur main
2. **Toujours faire un backup** avant des opérations risquées
3. **Commiter souvent** = moins de risques de corruption
4. **Push régulièrement** = code sauvegardé sur GitHub
5. **Vérifier les logs** après chaque push pour détecter les warnings

---

## 🔗 Ressources

- Repository GitHub : https://github.com/julianbonne974/argam-conseil
- Documentation Git : https://git-scm.com/doc
- En cas de problème : Consulter ce guide ou faire appel à Claude Code

---

**Dernière mise à jour :** 15 Octobre 2025
**Auteur :** Claude Code (après résolution incident pack-objects)
