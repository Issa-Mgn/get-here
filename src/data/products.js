// ─── Données fictives GetHere ───────────────────────────────────────────────

export const WHATSAPP_NUMBER = "2290191463965";

export const categories = [
  { id: "vetements",   label: "Vêtements",          icon: "bi-bag" },
  { id: "chaussures",  label: "Chaussures",          icon: "bi-stars" },
  { id: "perruques",   label: "Perruques & Mèches",  icon: "bi-gem" },
  { id: "accessoires", label: "Bijoux & Accessoires", icon: "bi-brilliance" },
  { id: "cosmetiques", label: "Cosmétiques",         icon: "bi-droplet" },
  { id: "cuisine",     label: "Cuisine & Maison",    icon: "bi-house-heart" },
];

export const products = [
  {
    id: 1, name: "Robe Élégante Soirée", category: "vetements",
    price: 18500, oldPrice: 24000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
    ],
    description: "Robe longue en satin, parfaite pour vos soirées. Coupe ajustée, fermeture zip dos.",
    sizes: ["XS","S","M","L","XL"], colors: ["Noir","Bordeaux"],
    rating: 4.8, reviews: 34, inStock: true, featured: true,
  },
  {
    id: 2, name: "T-Shirt Premium Homme", category: "vetements",
    price: 7500, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1503341338985-95d34e22a0c2?w=600&q=80",
    ],
    description: "T-shirt 100% coton premium, coupe droite, col rond. Confort absolu pour le quotidien.",
    sizes: ["S","M","L","XL","XXL"], colors: ["Blanc","Noir","Gris"],
    rating: 4.6, reviews: 58, inStock: true, featured: false,
  },
  {
    id: 3, name: "Ensemble Deux Pièces Femme", category: "vetements",
    price: 22000, oldPrice: 28000, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    ],
    description: "Ensemble haut + pantalon en tissu wax moderne. Stylé et confortable pour toutes occasions.",
    sizes: ["S","M","L","XL"], colors: ["Multicolore"],
    rating: 4.9, reviews: 21, inStock: true, featured: true,
  },
  {
    id: 4, name: "Chemise Lin Homme", category: "vetements",
    price: 12000, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    ],
    description: "Chemise légère en lin naturel, idéale pour l'été. Coupe moderne avec col classique.",
    sizes: ["S","M","L","XL"], colors: ["Blanc","Beige","Bleu ciel"],
    rating: 4.5, reviews: 17, inStock: true, featured: false,
  },
  {
    id: 5, name: "Jean Skinny Femme", category: "vetements",
    price: 15000, oldPrice: 19000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80",
    ],
    description: "Jean skinny stretch taille haute. Confortable et tendance, parfait avec tout.",
    sizes: ["34","36","38","40","42"], colors: ["Bleu délavé","Noir"],
    rating: 4.7, reviews: 45, inStock: true, featured: true,
  },
  {
    id: 6, name: "Veste Blazer Femme", category: "vetements",
    price: 27500, oldPrice: null, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4681?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4681?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    ],
    description: "Blazer structuré coupe moderne pour femme. Idéal au bureau ou en soirée décontractée.",
    sizes: ["S","M","L","XL"], colors: ["Noir","Camel"],
    rating: 4.8, reviews: 12, inStock: true, featured: false,
  },
  {
    id: 7, name: "Sneakers Femme Blanc", category: "chaussures",
    price: 19500, oldPrice: 24000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
    ],
    description: "Sneakers tendance cuir synthétique blanc. Semelle confort, look casual chic.",
    sizes: ["36","37","38","39","40"], colors: ["Blanc"],
    rating: 4.9, reviews: 63, inStock: true, featured: true,
  },
  {
    id: 8, name: "Mocassins Homme Cuir", category: "chaussures",
    price: 24000, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80",
    ],
    description: "Mocassins élégants en cuir véritable. Confort maximal, semelle antidérapante.",
    sizes: ["40","41","42","43","44","45"], colors: ["Marron","Noir"],
    rating: 4.7, reviews: 29, inStock: true, featured: false,
  },
  {
    id: 9, name: "Talons Aiguilles Soirée", category: "chaussures",
    price: 16000, oldPrice: 20000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=80",
      "https://images.unsplash.com/photo-1562183241-840b8af0721e?w=600&q=80",
    ],
    description: "Escarpins à talons aiguilles 9cm. Bout pointu, look glamour assuré.",
    sizes: ["36","37","38","39","40"], colors: ["Noir","Rouge","Nude"],
    rating: 4.6, reviews: 38, inStock: true, featured: true,
  },
  {
    id: 10, name: "Baskets Running Homme", category: "chaussures",
    price: 28000, oldPrice: null, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    ],
    description: "Baskets running haute performance. Semelle amortissante, respirant, léger.",
    sizes: ["40","41","42","43","44","45"], colors: ["Noir/Orange","Blanc/Gris"],
    rating: 4.8, reviews: 52, inStock: true, featured: false,
  },
  {
    id: 11, name: "Perruque Lisse Longue", category: "perruques",
    price: 35000, oldPrice: 45000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    ],
    description: "Perruque lace front cheveux synthétiques premium. Longueur 60cm, look naturel garanti.",
    sizes: ["Taille unique"], colors: ["Noir naturel","Brun"],
    rating: 4.9, reviews: 87, inStock: true, featured: true,
  },
  {
    id: 12, name: "Mèches Bouclées", category: "perruques",
    price: 12000, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
    ],
    description: "Mèches à tresses bouclées, résistantes à la chaleur. Longueur 50cm.",
    sizes: ["Taille unique"], colors: ["Noir","Brun auburn"],
    rating: 4.7, reviews: 44, inStock: true, featured: false,
  },
  {
    id: 13, name: "Perruque Bob Courte", category: "perruques",
    price: 22000, oldPrice: 28000, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
    ],
    description: "Perruque style bob court, effet naturel. Légère et facile à poser.",
    sizes: ["Taille unique"], colors: ["Noir","Blond miel"],
    rating: 4.8, reviews: 31, inStock: true, featured: true,
  },
  {
    id: 14, name: "Collier Perles Dorées", category: "accessoires",
    price: 8500, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1573408301185-9519df8a8749?w=600&q=80",
    ],
    description: "Collier ras-du-cou perles nacrées et chaîne dorée. Fermeture mousqueton.",
    sizes: ["Taille unique"], colors: ["Doré/Blanc"],
    rating: 4.8, reviews: 56, inStock: true, featured: true,
  },
  {
    id: 15, name: "Boucles d'Oreilles Statement", category: "accessoires",
    price: 5500, oldPrice: 7000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
    ],
    description: "Grandes boucles d'oreilles pendantes, style bohème chic. Légères et confortables.",
    sizes: ["Taille unique"], colors: ["Doré","Argenté"],
    rating: 4.7, reviews: 42, inStock: true, featured: false,
  },
  {
    id: 16, name: "Sac à Main Cuir", category: "accessoires",
    price: 32000, oldPrice: 40000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    ],
    description: "Sac à main en cuir synthétique premium. Plusieurs compartiments, bandoulière réglable.",
    sizes: ["Taille unique"], colors: ["Noir","Camel","Blanc cassé"],
    rating: 4.9, reviews: 73, inStock: true, featured: true,
  },
  {
    id: 17, name: "Bracelet Manchette", category: "accessoires",
    price: 4500, oldPrice: null, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1573408301185-9519df8a8749?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9519df8a8749?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    ],
    description: "Manchette gravée motif géométrique. Acier inoxydable, hypoallergénique.",
    sizes: ["Taille unique"], colors: ["Doré","Argenté"],
    rating: 4.6, reviews: 19, inStock: true, featured: false,
  },
  {
    id: 18, name: "Crème Éclat Visage", category: "cosmetiques",
    price: 11000, oldPrice: 14000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    ],
    description: "Crème hydratante éclat SPF30. Formule légère, peaux mixtes à sèches. 50ml.",
    sizes: ["50ml"], colors: [],
    rating: 4.8, reviews: 94, inStock: true, featured: true,
  },
  {
    id: 19, name: "Rouge à Lèvres Mat", category: "cosmetiques",
    price: 4000, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2534?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4e6232bf2534?w=600&q=80",
      "https://images.unsplash.com/photo-1599733594230-6b823276f96c?w=600&q=80",
    ],
    description: "Rouge à lèvres longue tenue effet mat velours. Formule hydratante, 12h de tenue.",
    sizes: ["Taille unique"], colors: ["Rouge passion","Nude rose","Bordeaux","Corail"],
    rating: 4.7, reviews: 112, inStock: true, featured: false,
  },
  {
    id: 20, name: "Huile Corps Argan", category: "cosmetiques",
    price: 9500, oldPrice: 12000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    ],
    description: "Huile sèche corps à l'argan pur. Peau douce et lumineuse. 100% naturelle. 100ml.",
    sizes: ["100ml"], colors: [],
    rating: 4.9, reviews: 67, inStock: true, featured: true,
  },
  {
    id: 21, name: "Kit Maquillage Complet", category: "cosmetiques",
    price: 28000, oldPrice: 35000, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    ],
    description: "Kit complet : fond de teint, correcteur, palette fards, mascara, blush.",
    sizes: ["Taille unique"], colors: [],
    rating: 4.8, reviews: 38, inStock: true, featured: false,
  },
  {
    id: 22, name: "Set Casseroles Inox", category: "cuisine",
    price: 45000, oldPrice: 58000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1584990347449-a2d4c2b9b0c4?w=600&q=80",
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    ],
    description: "Set 5 pièces casseroles inox fond épais. Compatibles tous feux dont induction.",
    sizes: ["5 pièces"], colors: ["Inox"],
    rating: 4.9, reviews: 41, inStock: true, featured: true,
  },
  {
    id: 23, name: "Mixeur Blender Pro", category: "cuisine",
    price: 32000, oldPrice: null, badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80",
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=600&q=80",
    ],
    description: "Blender puissant 1200W, bol 1.5L en verre. Idéal smoothies, soupes et sauces.",
    sizes: ["Taille unique"], colors: ["Noir","Blanc"],
    rating: 4.7, reviews: 29, inStock: true, featured: false,
  },
  {
    id: 24, name: "Service à Thé Porcelaine", category: "cuisine",
    price: 22000, oldPrice: 28000, badge: "Promo",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80",
    ],
    description: "Service à thé 6 personnes en porcelaine fine. Théière + 6 tasses + soucoupes.",
    sizes: ["6 personnes"], colors: ["Blanc/Doré"],
    rating: 4.8, reviews: 23, inStock: true, featured: true,
  },
  {
    id: 25, name: "Planche à Découper Bambou", category: "cuisine",
    price: 6500, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1584990347449-a2d4c2b9b0c4?w=600&q=80",
    ],
    description: "Planche à découper en bambou naturel. Anti-bactérienne, résistante, écologique. 40x30cm.",
    sizes: ["40x30cm"], colors: ["Bambou naturel"],
    rating: 4.6, reviews: 55, inStock: true, featured: false,
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

export const buildWhatsAppLink = (product) => {
  const msg = encodeURIComponent(
    `Bonjour ! 👋 Je suis intéressé(e) par *${product.name}* à ${formatPrice(product.price)} sur GetHere.\n\nPuis-je avoir plus d'informations sur sa disponibilité et la livraison ? Merci ! 🙏`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};
