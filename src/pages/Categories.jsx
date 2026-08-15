import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Categories.css";

const CAT_IMGS = {
  vetements: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80",
  chaussures: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80",
  perruques: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
  accessoires: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=80",
  cosmetiques: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700&q=80",
  cuisine: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
};

export default function Categories() {
  return (
    <main className="categories-page">

      {/* Hero */}
      <section className="cat-page-hero">
        <span className="label-small">Explorer</span>
        <h1>Toutes les catégories</h1>
        <p>Une boutique multiservices qui rassemble tout ce dont vous avez besoin</p>
      </section>

      {/* Visual grid */}
      <section className="cat-visual-section">
        <div className="cat-visual-grid">
          {categories.map((cat, i) => {
            const count = products.filter(p => p.category === cat.id).length;
            return (
              <Link key={cat.id} to={`/boutique?cat=${cat.id}`} className="cat-visual-card">
                <img src={CAT_IMGS[cat.id]} alt={cat.label} loading="lazy" />
                <div className="cat-visual-card-info">
                  <span className="cat-visual-card-num">0{i + 1}</span>
                  <span className="cat-visual-card-name">{cat.label}</span>
                  <span className="cat-visual-card-count">{count} article{count > 1 ? "s" : ""}</span>
                </div>
                <div className="cat-visual-card-cta">
                  <i className="bi bi-arrow-up-right" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Products per category */}
      {categories.map((cat, i) => {
        const catProducts = products.filter(p => p.category === cat.id).slice(0, 4);
        return (
          <section key={cat.id} className="cat-products-section">
            <div className="cat-section-header">
              <div className="cat-section-title">
                <div className="cat-title-icon">
                  <i className={`bi ${cat.icon}`} />
                </div>
                <div>
                  <span className="label-small">Collection 0{i + 1}</span>
                  <h2>{cat.label}</h2>
                </div>
              </div>
              <Link to={`/boutique?cat=${cat.id}`} className="link-arrow">
                Voir tout <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="cat-products-grid">
              {catProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        );
      })}

    </main>
  );
}
