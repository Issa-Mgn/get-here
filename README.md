# GetHere — Boutique Multiservices & Lifestyle

Site e-commerce complet pour une boutique multiservices basée à **Porto-Novo, Bénin**.  
Commande directe via **WhatsApp** · Livraison dans tout le Bénin.

---

## Stack technique

| Outil | Rôle |
|---|---|
| React 19 | UI / composants |
| Vite 8 | Build & dev server |
| React Router DOM | Navigation multi-pages |
| Bootstrap Icons | Icônes |
| Google Fonts — Outfit | Typographie |
| CSS Variables | Thème clair / sombre |

Pas de framework CSS externe. Tout le style est fait en CSS natif avec variables custom.

---

## Structure du projet

```
src/
├── assets/image/
│   ├── logo.webp          # Logo GetHere
│   ├── hero.png           # Image hero desktop
│   ├── hero_mobile.png    # Image hero mobile
│   ├── 1.png              # Image promo + carrousel
│   ├── 2.png
│   └── 3.png
│
├── context/
│   ├── ThemeContext.jsx   # Mode clair / sombre (localStorage)
│   └── CartContext.jsx    # Panier global (add, remove, qty, WA message)
│
├── components/
│   ├── Navbar.jsx / .css  # Header fixe, recherche, panier badge, menu mobile
│   ├── Footer.jsx / .css  # Footer 4 colonnes
│   └── ProductCard.jsx / .css  # Carte produit avec bouton "Ajouter au panier"
│
├── pages/
│   ├── Home.jsx / .css        # Page d'accueil complète
│   ├── Shop.jsx / .css        # Boutique avec filtres, tri, sidebar
│   ├── ProductDetail.jsx / .css  # Détail produit + galerie multi-images
│   ├── Categories.jsx / .css  # Toutes les catégories
│   ├── Cart.jsx / .css        # Panier + commande WhatsApp groupée
│   ├── About.jsx / .css       # À propos
│   └── Contact.jsx / .css     # Contact + FAQ
│
└── data/
    └── products.js   # 25 produits fictifs, catégories, formatPrice, WA link
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Accueil |
| `/boutique` | Boutique (filtres par catégorie, prix, tri) |
| `/produit/:id` | Détail produit |
| `/categories` | Toutes les catégories |
| `/panier` | Panier |
| `/a-propos` | À propos |
| `/contact` | Contact & FAQ |

---

## Fonctionnalités clés

**Panier**
- Ajout depuis chaque carte produit ou page détail (avec taille/couleur)
- Badge compteur dans la navbar
- Page panier : contrôle de quantité, suppression, vider tout
- Un seul message WhatsApp avec tous les articles, tailles, couleurs et total FCFA

**Galerie produit**
- Jusqu'à 3 images par produit
- Navigation par flèches ou thumbnails
- Animation fade au changement d'image

**Carrousel hero**
- Image `hero.png` sur desktop, `hero_mobile.png` sur mobile
- Texte superposé avec dégradé

**Carrousel promo**
- 3 images (`1.png`, `2.png`, `3.png`) en défilement horizontal automatique toutes les 2s
- Dots de navigation

**Thème**
- Toggle clair / sombre dans le header
- Choix sauvegardé en `localStorage`
- Toutes les couleurs via CSS custom properties (`--bg`, `--text`, `--accent`…)

**Responsive**
- Mobile first sur toutes les pages
- Menu burger plein écran sur mobile
- Hero mobile : image pleine fenêtre (`100svh`), texte en overlay

---

## Catégories

- Vêtements (hommes & femmes)
- Chaussures
- Perruques & Mèches
- Bijoux & Accessoires
- Cosmétiques & Beauté
- Cuisine & Maison

---

## Démarrage

```bash
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:5173`.  
Accessible depuis un téléphone sur le même réseau Wi-Fi via l'URL **Network** affichée dans le terminal.

---

## Contact boutique

**WhatsApp** : +229 01 29 14 01 43  
**Localisation** : Porto-Novo, Bénin  
**Horaires** : Lun – Sam · 8h – 20h
