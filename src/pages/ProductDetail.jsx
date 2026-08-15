import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products, formatPrice, categories } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { add } = useCart();

  const [activeImg, setActiveImg]     = useState(0);
  const [selectedSize, setSelectedSize]   = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [tab, setTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <main className="not-found-page">
        <i className="bi bi-exclamation-circle" />
        <h2>Produit introuvable</h2>
        <p>Ce produit n'existe pas ou a été retiré.</p>
        <Link to="/boutique" className="btn-back">← Retour à la boutique</Link>
      </main>
    );
  }

  const gallery  = product.images?.length ? product.images : [product.image];
  const catName  = categories.find(c => c.id === product.category)?.label || product.category;
  const related  = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null;

  const handleAddToCart = () => {
    add(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1400);
  };

  const buildWhatsAppLink = () => {
    const sizeStr  = selectedSize  ? `\nTaille : *${selectedSize}*`  : "";
    const colorStr = selectedColor ? `\nCouleur : *${selectedColor}*` : "";
    const msg = encodeURIComponent(
      `Bonjour GetHere ! 👋\n\nJe veux commander :\n*${product.name}*${sizeStr}${colorStr}\n\nPrix : *${formatPrice(product.price)}*\n\nMerci de confirmer la disponibilité et les modalités de livraison 🙏`
    );
    return `https://wa.me/2290129140143?text=${msg}`;
  };

  const prev = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    <main className="detail-page">

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link to="/">Accueil</Link>
          <i className="bi bi-chevron-right" />
          <Link to="/boutique">Boutique</Link>
          <i className="bi bi-chevron-right" />
          <Link to={`/boutique?cat=${product.category}`}>{catName}</Link>
          <i className="bi bi-chevron-right" />
          <span>{product.name}</span>
        </nav>
      </div>

      {/* Detail */}
      <section className="detail-section">
        <div className="detail-grid">

          {/* ── Galerie ── */}
          <div className="detail-gallery">
            {/* Image principale */}
            <div className="gallery-main">
              <img
                key={activeImg}
                src={gallery[activeImg]}
                alt={`${product.name} ${activeImg + 1}`}
                className="gallery-main__img"
              />
              {discount && <span className="img-badge img-badge--promo">−{discount}%</span>}
              {product.badge === "Nouveau" && !discount && <span className="img-badge img-badge--new">New</span>}

              {/* Flèches nav si plus d'une image */}
              {gallery.length > 1 && (
                <>
                  <button className="gallery-arrow gallery-arrow--prev" onClick={prev} aria-label="Image précédente">
                    <i className="bi bi-chevron-left" />
                  </button>
                  <button className="gallery-arrow gallery-arrow--next" onClick={next} aria-label="Image suivante">
                    <i className="bi bi-chevron-right" />
                  </button>
                </>
              )}

              {/* Compteur */}
              {gallery.length > 1 && (
                <div className="gallery-counter">
                  {activeImg + 1}/{gallery.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="gallery-thumbs">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`gallery-thumb ${i === activeImg ? "is-active" : ""}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Voir image ${i + 1}`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className="detail-info">
            <Link to={`/boutique?cat=${product.category}`} className="detail-cat">{catName}</Link>
            <h1>{product.name}</h1>

            <div className="detail-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`bi ${i < Math.floor(product.rating) ? "bi-star-fill" : i < product.rating ? "bi-star-half" : "bi-star"}`} />
                ))}
              </div>
              <span className="rating-val">{product.rating}</span>
              <span className="rating-count">({product.reviews} avis)</span>
            </div>

            <div className="detail-price">
              <span className="price-main">{formatPrice(product.price)}</span>
              {product.oldPrice && <>
                <span className="price-crossed">{formatPrice(product.oldPrice)}</span>
                <span className="price-discount">−{discount}%</span>
              </>}
            </div>

            {product.sizes?.length > 0 && product.sizes[0] !== "Taille unique" && (
              <div className="detail-option">
                <label>
                  Taille {selectedSize && <span className="option-selected">{selectedSize}</span>}
                </label>
                <div className="size-grid">
                  {product.sizes.map(s => (
                    <button key={s} className={`size-btn ${selectedSize === s ? "active" : ""}`} onClick={() => setSelectedSize(s)}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {product.colors?.length > 0 && (
              <div className="detail-option">
                <label>
                  Couleur {selectedColor && <span className="option-selected">{selectedColor}</span>}
                </label>
                <div className="colors-list">
                  {product.colors.map(c => (
                    <button key={c} className={`color-btn ${selectedColor === c ? "active" : ""}`} onClick={() => setSelectedColor(c)}>{c}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-cta">
              {/* Ajouter au panier */}
              <button
                className={`btn-add-cart ${addedToCart ? "added" : ""}`}
                onClick={handleAddToCart}
              >
                <i className={`bi bi-${addedToCart ? "check-lg" : "bag-plus"}`} />
                {addedToCart ? "Ajouté au panier !" : "Ajouter au panier"}
              </button>

              {/* Commander direct WA */}
              <a href={buildWhatsAppLink()} className="btn-order-main" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp" />
                Commander via WhatsApp
              </a>
            </div>

            <div className="trust-badges">
              <div className="trust-item"><i className="bi bi-truck" /><span>Livraison rapide</span></div>
              <div className="trust-item"><i className="bi bi-patch-check" /><span>Qualité vérifiée</span></div>
              <div className="trust-item"><i className="bi bi-cash-coin" /><span>Paiement à la livraison</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="tabs-section">
        <div className="tabs-nav">
          {["description","livraison","avis"].map(t => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
              {t === "description" ? "Description" : t === "livraison" ? "Livraison & Paiement" : "Avis clients"}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tab === "description" && (
            <div className="tab-desc">
              <p>{product.description}</p>
              {product.sizes?.[0] !== "Taille unique" && product.sizes?.length > 0 && (
                <p><strong>Tailles :</strong> {product.sizes.join(", ")}</p>
              )}
              {product.colors?.length > 0 && <p><strong>Coloris :</strong> {product.colors.join(", ")}</p>}
            </div>
          )}
          {tab === "livraison" && (
            <div className="tab-desc">
              <h4><i className="bi bi-truck" /> Livraison</h4>
              <p>Livraison à Porto-Novo en 24h, partout au Bénin en 48–72h. Livraison à domicile disponible.</p>
              <h4><i className="bi bi-cash-coin" /> Paiement</h4>
              <p>Paiement à la livraison, MTN Mobile Money, Moov Money acceptés.</p>
              <h4><i className="bi bi-whatsapp" /> Commander</h4>
              <p>Cliquez sur "Commander via WhatsApp" ou ajoutez au panier pour commander plusieurs articles à la fois.</p>
            </div>
          )}
          {tab === "avis" && (
            <div className="tab-reviews">
              <div className="reviews-summary">
                <div className="summary-score">
                  <strong>{product.rating}</strong>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <i key={i} className={`bi ${i < Math.floor(product.rating) ? "bi-star-fill" : "bi-star"}`} />)}
                  </div>
                  <span>{product.reviews} avis</span>
                </div>
              </div>
              <div className="reviews-list">
                {[
                  { name: "A. K.", text: "Excellent produit, conforme à la description. Livraison rapide !", note: 5 },
                  { name: "M. D.", text: "Très belle qualité, je recommande GetHere à toutes mes amies.", note: 5 },
                  { name: "S. B.", text: "Bon rapport qualité/prix. Service WhatsApp très réactif.", note: 4 },
                ].map((r, i) => (
                  <div key={i} className="review-item">
                    <div className="ri-header">
                      <div className="ri-avatar">{r.name[0]}</div>
                      <div>
                        <strong>{r.name}</strong>
                        <div className="stars small">
                          {[...Array(5)].map((_, j) => <i key={j} className={`bi ${j < r.note ? "bi-star-fill" : "bi-star"}`} />)}
                        </div>
                      </div>
                    </div>
                    <p>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="related-section">
          <div className="section-header-rel">
            <span className="label-small">Même catégorie</span>
            <h2>Vous aimerez aussi</h2>
          </div>
          <div className="products-grid-rel">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </main>
  );
}
