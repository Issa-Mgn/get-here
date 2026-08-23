import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import "./Cart.css";
import SEO from "../components/SEO";

export default function Cart() {
  const { items, remove, updateQty, clear, total, count, submitOrder } = useCart();
  const [ordering, setOrdering] = useState(false);

  const handleOrder = async () => {
    setOrdering(true);
    await submitOrder();
    clear();
    setOrdering(false);
  };

  if (items.length === 0) {
    return (
      <main className="cart-page cart-empty">
        <SEO title="Panier" noindex />
        <div className="cart-empty__inner">
          <i className="bi bi-bag" />
          <h2>Votre panier est vide</h2>
          <p>Ajoutez des articles depuis la boutique pour commencer.</p>
          <Link to="/boutique" className="btn-go-shop">Voir la boutique</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <SEO title="Panier" noindex />
      <div className="cart-header">
        <div className="container">
          <span className="label-small">Mon panier</span>
          <h1>Panier <span className="cart-count">({count} article{count > 1 ? "s" : ""})</span></h1>
        </div>
      </div>

      <div className="cart-layout container">

        {/* Articles */}
        <div className="cart-items">
          {items.map((item, idx) => (
            <div key={idx} className="cart-item">
              <Link to={`/produit/${item.product.id}`} className="cart-item__img">
                <img src={item.product.image} alt={item.product.name} />
              </Link>
              <div className="cart-item__info">
                <span className="cart-item__cat">{item.product.category}</span>
                <Link to={`/produit/${item.product.id}`} className="cart-item__name">
                  {item.product.name}
                </Link>
                {item.size  && <span className="cart-item__meta">Taille : <strong>{item.size}</strong></span>}
                {item.color && <span className="cart-item__meta">Couleur : <strong>{item.color}</strong></span>}
              </div>
              <div className="cart-item__qty">
                <button onClick={() => updateQty(item.product, item.size, item.color, item.qty - 1)}>
                  <i className="bi bi-dash" />
                </button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.product, item.size, item.color, item.qty + 1)}>
                  <i className="bi bi-plus" />
                </button>
              </div>
              <div className="cart-item__price">
                {formatPrice(item.product.price * item.qty)}
              </div>
              <button className="cart-item__remove"
                onClick={() => remove(item.product, item.size, item.color)}
                aria-label="Supprimer">
                <i className="bi bi-x" />
              </button>
            </div>
          ))}
          <button className="cart-clear" onClick={clear}>
            <i className="bi bi-trash" /> Vider le panier
          </button>
        </div>

        {/* Récap */}
        <div className="cart-summary">
          <h3>Récapitulatif</h3>
          <div className="cart-summary__lines">
            {items.map((item, idx) => (
              <div key={idx} className="summary-line">
                <span>{item.product.name} ×{item.qty}</span>
                <span>{formatPrice(item.product.price * item.qty)}</span>
              </div>
            ))}
          </div>
          <div className="cart-summary__total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <p className="cart-summary__note">
            <i className="bi bi-info-circle" />
            La livraison sera confirmée via WhatsApp.
          </p>

          {/* Bouton commander — enregistre la commande puis ouvre WA */}
          <button
            className="cart-order-btn"
            onClick={handleOrder}
            disabled={ordering}
          >
            {ordering
              ? <><span className="cart-spinner" /> Envoi en cours…</>
              : <><i className="bi bi-whatsapp" /> Commander via WhatsApp</>
            }
          </button>

          <Link to="/boutique" className="cart-continue">
            ← Continuer mes achats
          </Link>
        </div>

      </div>
    </main>
  );
}
