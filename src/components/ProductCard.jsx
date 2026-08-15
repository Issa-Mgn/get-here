import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product, variant = "normal" }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const handleAdd = (e) => {
    e.preventDefault();
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className={`pcard pcard--${variant}`}>
      <Link to={`/produit/${product.id}`} className="pcard__img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="pcard__img-overlay">
          <span className="pcard__view-label">Voir le produit</span>
        </div>
        {discount && <span className="pcard__discount">−{discount}%</span>}
        {product.badge === "Nouveau" && !discount && <span className="pcard__new">New</span>}
      </Link>

      <div className="pcard__info">
        <div className="pcard__meta">
          <span className="pcard__cat">{product.category}</span>
          <div className="pcard__rating">
            <i className="bi bi-star-fill" />
            <span>{product.rating}</span>
          </div>
        </div>

        <h3 className="pcard__name">
          <Link to={`/produit/${product.id}`}>{product.name}</Link>
        </h3>

        <div className="pcard__footer">
          <div className="pcard__price">
            <span className="pcard__price-current">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="pcard__price-old">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
          <button
            className={`pcard__add-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
            aria-label="Ajouter au panier"
          >
            <i className={`bi bi-${added ? "check" : "bag-plus"}`} />
          </button>
        </div>
      </div>
    </article>
  );
}
