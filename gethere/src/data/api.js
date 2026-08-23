// ── API client — site principal ────────────────────────────
const API_URL = import.meta.env.VITE_API_URL || "https://get-here-server-nd17.onrender.com";

async function get(path) {
  const res  = await fetch(`${API_URL}${path}`);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || `Erreur ${res.status}`);
  return json;
}

async function post(path, body) {
  const res  = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || `Erreur ${res.status}`);
  return json;
}

// ── Produits ─────────────────────────────────────────────
export const fetchPublishedProducts = (params = {}) => {
  const qs = new URLSearchParams({ published: "true", ...params }).toString();
  return get(`/api/products?${qs}`);
};

export const fetchProduct = (id) => get(`/api/products/${id}`);
export const fetchProductBySlug = (slug) => get(`/api/products/slug/${encodeURIComponent(slug)}`);

// ── Catégories ────────────────────────────────────────────
export const fetchCategories = () => get("/api/categories");

// ── Commandes ─────────────────────────────────────────────
export const createOrder = (orderData) => post("/api/orders", orderData);

// ── Normalisation ─────────────────────────────────────────
export const slugify = (value = "") => value
  .toString()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export const normalizeProduct = (p) => ({
  ...p,
  slug:     p.slug || slugify(p.name),
  oldPrice: p.old_price   ?? p.oldPrice ?? null,
  inStock:  (p.stock ?? 0) > 0,
  // Compatibilité avec le code existant du site
  image:    p.images?.[0] ?? p.image ?? "",
  images:   p.images ?? (p.image ? [p.image] : []),
  rating:   p.rating  ?? 4.5,
  reviews:  p.reviews ?? 0,
  featured: p.featured ?? false,
  sizes:    p.sizes   ?? [],
  colors:   p.colors  ?? [],
  description: p.description ?? "",
});
