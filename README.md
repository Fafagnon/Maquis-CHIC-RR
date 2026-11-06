# Maquette — MAQUIS CHIC RR (v3)

Maquette une page (HTML / CSS / JS séparés), prête à pousser sur le repo.
**Version 3 :**
- Hero refait comme la capture du modèle : le nom géant AVANT la photo, dans la
  police du logo (Anton, sans-serif condensée très grasse), photo plein écran
  SANS voile, petit badge incliné « Lomé • Togo » sur la photo.
- Section « De notre cuisine » refaite comme la capture : grande photo en fond,
  carte crème posée dessus avec titre serif bordeaux, texte et bouton bordeaux.
- Palette 100 % couleurs du logo (bordeaux, noir, crème, orange-rouge) — le
  vert-bleu du modèle Wix est supprimé. Rendu épuré et premium.
- Section témoignages : VRAIS avis Google du maquis (relevés le 2026-11-06) :
  4,6/5, 18 avis (12 à 5 étoiles, 5 à 4, 1 à 3). 4 cartes : Mathya K., Jason
  d'ALMEIDA, Numa .M, Olip Bar — textes reproduits tels quels. Note : l'avis de
  Numa .M n'est lisible en français que pour son début (« Découverte inopinée
  très appréciée. Lieu aéré, chic, agréable, calme. »), la suite n'étant
  disponible que via la traduction automatique de Google — seul le début
  vérifié est affiché.
- Horaires confirmés sur la fiche Google : lundi fermé, mar–dim 10h–22h.

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
