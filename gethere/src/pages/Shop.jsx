import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts, useCategories } from "../hooks/useProducts";
import { formatPrice } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

const SORTS = [
  { value: "default",    label: "Par défaut" },
  { value: "price-asc",  label: "Prix ↑" },
  { value: "price-desc", label: "Prix ↓" },
  { value: "rating",     label: "Meilleures notes" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort,        setSort]        = useState("default");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeCategory = searchParams.get("cat")    || "all";
  const searchQuery    = searchParams.get("search") || "";

  const { products, loading, error } = useProducts();
  const { categories }               = useCategories();

  // maxPrice calculé sur le prix max réel des produits
  const priceMax = useMemo(
    () => products.length ? Math.max(...products.map(p => p.price)) : 1000000,
    [products]
  );
  // Initialise maxPrice à priceMax quand les produits chargent
  const [maxPrice, setMaxPrice] = useState(null);
  const effectiveMax = maxPrice ?? priceMax;

  const setCategory = (cat) => {
    const p = new URLSearchParams(searchParams);
    cat === "all" ? p.delete("cat") : p.set("cat", cat);
    p.delete("search");
    setSearchParams(p);
    setSidebarOpen(false);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") list = list.filter(p => p.category === activeCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q)
      );
    }
    list = list.filter(p => p.price <= effectiveMax);
    if (sort === "price-asc")  list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating")     list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    return list;
  }, [products, activeCategory, searchQuery, effectiveMax, sort]);

  const currentCat = categories.find(c => c.id === activeCategory);

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div className="shop-hero__inner">
          <span className="label-small">Collection</span>
          <h1>
            {searchQuery ? `"${searchQuery}"` : currentCat ? currentCat.label : "Toute la boutique"}
          </h1>
          <p className="shop-hero__count">
            {loading ? "…" : `${filtered.length} ARTICLE${filtered.length !== 1 ? "S" : ""}`}
          </p>
        </div>
      </section>

      <div className="shop-layout">
        {/* Sidebar */}
        <aside className={`shop-sidebar ${sidebarOpen ? "open" : ""}`}>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
            <i className="bi bi-x-lg" />
          </button>

          <div className="sidebar__section">
            <p className="sidebar__title">Catégories</p>
            <ul className="cat-list">
              <li>
                <button className={activeCategory === "all" ? "active" : ""} onClick={() => setCategory("all")}>
                  <i className="bi bi-grid" /> Tout voir
                  <span className="cat-count">{products.length}</span>
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button className={activeCategory === cat.id ? "active" : ""} onClick={() => setCategory(cat.id)}>
                    <i className={`bi ${cat.icon || "bi-tag"}`} /> {cat.label}
                    <span className="cat-count">{products.filter(p => p.category === cat.id).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar__section">
            <p className="sidebar__title">Prix maximum</p>
            <div className="price-range">
              <input type="range" min={0} max={priceMax} step={500}
                value={effectiveMax}
                onChange={e => setMaxPrice(Number(e.target.value))} />
              <div className="price-labels">
                <span>0</span>
                <span className="price-val">{new Intl.NumberFormat("fr-FR").format(effectiveMax)} FCFA</span>
              </div>
            </div>
          </div>

          <div className="sidebar__section">
            <p className="sidebar__title">Stock</p>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> En stock seulement
            </label>
          </div>
        </aside>

        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

        {/* Main */}
        <div className="shop-main">
          <div className="shop-toolbar">
            <button className="filter-toggle" onClick={() => setSidebarOpen(true)}>
              <i className="bi bi-sliders" /> Filtres
            </button>
            <span className="result-count">
              {loading ? "…" : `${filtered.length} RÉSULTAT${filtered.length !== 1 ? "S" : ""}`}
            </span>
            <div className="sort-wrap">
              <i className="bi bi-sort-down" />
              <select value={sort} onChange={e => setSort(e.target.value)}>
                {SORTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {(activeCategory !== "all" || searchQuery) && (
            <div className="active-filters">
              {activeCategory !== "all" && (
                <span className="filter-chip">
                  {currentCat?.label}
                  <button onClick={() => setCategory("all")}><i className="bi bi-x" /></button>
                </span>
              )}
              {searchQuery && (
                <span className="filter-chip">
                  "{searchQuery}"
                  <button onClick={() => setSearchParams({})}><i className="bi bi-x" /></button>
                </span>
              )}
            </div>
          )}

          {loading ? (
            <div className="shop-loading">
              <span className="shop-spinner" />
            </div>
          ) : error ? (
            <div className="empty-state">
              <i className="bi bi-wifi-off" />
              <h3>Connexion impossible</h3>
              <p>{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-search" />
              <h3>Aucun produit trouvé</h3>
              <p>Essayez d'autres filtres ou une autre recherche.</p>
              <button onClick={() => { setCategory("all"); setSearchParams({}); }}>
                Voir tout
              </button>
            </div>
          ) : (
            <div className="products-grid-shop">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
