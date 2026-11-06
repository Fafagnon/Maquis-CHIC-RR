# Maquette — MAQUIS CHIC RR (v2)

Maquette une page (HTML / CSS / JS séparés), prête à pousser sur le repo.
**Version 2 : rendu très proche du modèle Wix « Restaurant (Classic) »** —
même ordre des sections, même ambiance visuelle (fond vert-bleu sombre,
grands panneaux crème, gros titres bordeaux en serif, navigation en petites
capitales, boutons encadrés), traduit en français, avec les plats en FCFA
et WhatsApp à la place du système de réservation Wix.

## Sections (dans l'ordre du modèle)

1. En-tête : logo, Menus / À propos / Réservations / Expériences / Contact, bouton « Commander en ligne »
2. Hero plein écran : badge « Lomé • Togo », MAQUIS CHIC RR, Bar Restaurant, boutons « Voir le menu » / « Réserver une table »
3. À propos (« Une expérience culinaire ») : texte + photo de la salle
4. « Des ingrédients frais, de saison » : bandeau de 3 photos + boutons
5. Menu : 2 colonnes (Grillades / Plats) avec prix alignés + Boissons
6. Galerie sur fond sombre (6 photos)
7. « De notre cuisine » : photo + texte + boutons
8. Carrousel avec flèches Précédent / Suivant (3 photos)
9. Réserver une table : formulaire (convives, date, heure, espace) qui envoie la demande sur WhatsApp
10. Pied de page : adresse, contact, horaires, réseaux, mentions légales

## Fichiers

- `index.html` — la page
- `css/style.css` — tous les styles
- `js/script.js` — menu mobile, carrousel, formulaire → WhatsApp, badge Ouvert/Fermé
- `images/logo.jpg` — le logo du maquis (déjà en place)

## Comment ajouter les photos (c'est Sam qui le fait)

1. Mets chaque photo dans le dossier `images/` (ex. `images/plat-1.jpg`).
2. Dans `index.html`, trouve l'emplacement voulu (marqués `data-slot="ambiance"`,
   `data-slot="strip-1"`, `data-slot="galerie-1"`, `data-slot="slide-1"`...) et
   remplace le bloc :
   ```html
   <div class="photo-slot" data-slot="galerie-1">...</div>
   ```
   par :
   ```html
   <img src="images/galerie-1.jpg" alt="..." class="gallery-img">
   ```
   Classes à utiliser : `hero-img` (accueil), `about-img` (salle), `strip-img`
   (bandeau), `gallery-img` (galerie), `kitchen-img` (cuisine), `slide-img` (carrousel).

## À vérifier / remplacer avant d'envoyer au client

- **Plats et prix du menu : ce sont des EXEMPLES** (plats typiques de maquis, prix
  indicatifs). Remplace-les par le vrai menu du maquis.
- **Horaires** (repris de la fiche Google) : mar–dim 10h–22h, lundi fermé.
  Le lundi n'est pas renseigné sur Google — à confirmer avec le maquis.
- Adresse : Résidence Renaissance, Lomé. Tél/WhatsApp : +228 70 75 17 19.

## Voir la maquette

Ouvre `index.html` dans un navigateur (double-clic). Aucun serveur nécessaire.
