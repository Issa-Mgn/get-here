# GetHere — Boutique Multiservices & Lifestyle

Site e-commerce complet pour **GetHere**, une boutique multiservices basée à Cotonou, Bénin. Mode, beauté, maison et accessoires réunis en un seul endroit, avec commande directe via WhatsApp.

---

## Stack technique

| Outil | Rôle |
|---|---|
| [React 19](https://react.dev) | UI |
| [Vite 8](https://vite.dev) | Bundler / dev server |
| [React Router v7](https://reactrouter.com) | Navigation SPA |
| CSS Modules custom | Styles (pas de framework CSS) |
| Bootstrap Icons | Icônes |
| Google Fonts — Outfit | Typographie |

---

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — hero carrousel, catégories, produits vedettes, promo, témoignages |
| `/boutique` | Tous les produits — filtres catégorie, prix, tri |
| `/produit/:id` | Détail produit — tailles, couleurs, bouton commande WhatsApp |
| `/categories` | Grille visuelle de toutes les catégories |
| `/a-propos` | Histoire, mission, valeurs, stats |
| `/contact` | Formulaire → redirection WhatsApp + FAQ |

---

## Fonctionnalités

- **Commande WhatsApp** — chaque produit génère un message pré-rempli avec nom, taille, couleur et prix vers le `+229 0129140143`
- **Mode clair / sombre** — toggle dans le header, préférence sauvegardée en `localStorage`
- **Carrousel hero** — 3 images locales défilent automatiquement toutes les 2 secondes
- **Recherche** — barre de recherche dans le header, filtre les produits en temps réel
- **Responsive** — mobile first, grilles adaptatives, menu burger plein écran
- **Hero mobile** — texte superposé sur l'image plein écran avec fond dégradé semi-transparent
- **Données fictives** — 25 produits répartis en 6 catégories avec prix en FCFA

---

## Catégories

1. Vêtements (hommes & femmes)
2. Chaussures
3. Perruques & Mèches
4. Bijoux & Accessoires
5. Cosmétiques & Beauté
6. Cuisine & Maison

---

## Installation & lancement

```bash
# Installer les dépendances
npm install

# Lancer en développement (localhost)
npm run dev

# Accessible sur le réseau local (même Wi-Fi)
# → http://<votre-IP>:5173
```

Le serveur est configuré avec `host: true` dans `vite.config.js` — le site est accessible depuis un téléphone connecté au même réseau Wi-Fi.

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## Structure du projet

```
src/
├── assets/
│   └── image/          # logo.webp + images hero (1.png, 2.png, 3.png)
├── components/
│   ├── Navbar.jsx/.css
│   ├── Footer.jsx/.css
│   └── ProductCard.jsx/.css
├── context/
│   └── ThemeContext.jsx # Gestion dark/light mode
├── data/
│   └── products.js     # Produits fictifs + helpers (formatPrice, WhatsApp link)
├── pages/
│   ├── Home.jsx/.css
│   ├── Shop.jsx/.css
│   ├── ProductDetail.jsx/.css
│   ├── Categories.jsx/.css
│   ├── About.jsx/.css
│   └── Contact.jsx/.css
├── App.jsx             # Routes + layout global
├── App.css
├── index.css           # Variables CSS thème (dark/light) + reset
└── main.jsx
```

---

## Contact WhatsApp

Numéro configuré : **+229 0129140143**  
Défini dans `src/data/products.js` → `WHATSAPP_NUMBER`  
Tous les liens `wa.me` du site pointent vers ce numéro.
