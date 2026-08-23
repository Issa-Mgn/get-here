import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts, useCategories } from "../hooks/useProducts";
import { formatPrice } from "../data/products";
import ProductCard from "../components/ProductCard";
import heroBg    from "../assets/image/hero.png";
import heroMobile from "../assets/image/hero_mobile.png";
import promoImg1 from "../assets/image/1.png";
import promoImg2 from "../assets/image/2.png";
import promoImg3 from "../assets/image/3.png";
import "./Home.css";

const PROMO_SLIDES = [promoImg1, promoImg2, promoImg3];

export default function Home() {
  const [promoSlide, setPromoSlide] = useState(0);
  const { products } = useProducts();
  const { categories } = useCategories();

  const featured    = products.filter(p => p.featured).slice(0, 6);
  const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 3);

  useEffect(() => {
    const t = setInterval(() => setPromoSlide(s => (s + 1) % PROMO_SLIDES.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <img src={heroBg}     alt="GetHere" className="hero__img hero__img--desktop" />
        <img src={heroMobile} alt="GetHere" className="hero__img hero__img--mobile" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag">
            <span className="hero__tag-dot" />
            Porto-Novo · Bénin
          </span>
          <h1 className="hero__title">
            Mode,<br />Beauté,<br /><span className="hero__title-accent">Maison.</span>
          </h1>
          <p className="hero__desc">Tout ceux dont vous avez besoin, en un seul endroit.</p>
          <div className="hero__actions">
            <Link to="/boutique" className="hero__btn-main">Découvrir la boutique</Link>
            <a href="https://wa.me/2290191463965?text=Bonjour%20GetHere%20!" target="_blank" rel="noreferrer" className="hero__btn-wa">
              <i className="bi bi-whatsapp" /> Commander
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><strong>{products.length || "200"}+</strong><span>Produits</span></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><strong>{categories.length || "6"}</strong><span>Catégories</span></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><strong>500+</strong><span>Clients</span></div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee">
        <div className="marquee__track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee__group">
              Mode Femme &nbsp;·&nbsp; Chaussures &nbsp;·&nbsp;
              Perruques &amp; Mèches &nbsp;·&nbsp; Bijoux &amp; Accessoires &nbsp;·&nbsp;
              Cosmétiques &nbsp;·&nbsp; Cuisine &amp; Maison &nbsp;·&nbsp;
              Livraison Bénin &nbsp;·&nbsp; WhatsApp Direct &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="intro">
        <div className="intro__left">
          <div className="intro__label">Get Here</div>
          <h2>Une adresse.<br /><span>Tout le lifestyle.</span></h2>
        </div>
        <p className="intro__text">
          GetHere réunit vêtements, chaussures, perruques, bijoux, cosmétiques et
          articles de maison en un seul endroit. Le shopping complet, sans complication.
          Commandez en 2 minutes via WhatsApp.
        </p>
      </section>

      {/* ── CATÉGORIES ── */}
      <section className="cats-section">
        <div className="cats-section__header">
          <h2>Explorer par catégorie</h2>
          <Link to="/categories" className="link-arrow">Tout voir <i className="bi bi-arrow-right" /></Link>
        </div>
        <div className="cats-grid">
          {categories.map(cat => (
            <Link key={cat.id} to={`/boutique?cat=${cat.id}`} className="cat-tile">
              <span className="cat-tile__name">{cat.label}</span>
              <i className="bi bi-arrow-up-right cat-tile__arrow" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── PRODUITS VEDETTES ── */}
      {featured.length > 0 && (
        <section className="section-products">
          <div className="section-products__header">
            <div>
              <p className="label-small">Sélection</p>
              <h2>Nos coups de cœur</h2>
            </div>
            <Link to="/boutique" className="link-arrow">Voir tout <i className="bi bi-arrow-right" /></Link>
          </div>
          <div className="products-layout">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} variant={i === 0 ? "hero" : "normal"} />)}
          </div>
        </section>
      )}

      {/* ── PROMO ── */}
      <div className="promo-wrapper">
        <section className="promo-img-section">
          <div className="promo-carousel" style={{ transform: `translateX(-${promoSlide * 100}%)` }}>
            {PROMO_SLIDES.map((img, i) => (
              <img key={i} src={img} alt={`Promo ${i + 1}`} className="promo-carousel__img" />
            ))}
          </div>
          <div className="promo-dots">
            {PROMO_SLIDES.map((_, i) => (
              <button key={i} className={`promo-dot ${i === promoSlide ? "is-active" : ""}`}
                onClick={() => setPromoSlide(i)} aria-label={`Image ${i + 1}`} />
            ))}
          </div>
        </section>
        <section className="promo-content-section">
          <p className="label-small">Offres limitées</p>
          <h2>Jusqu'à <strong>−40%</strong> sur des centaines d'articles</h2>
          <p className="promo-sub">Promotions renouvelées. Commandez avant rupture de stock.</p>
          <div className="promo-actions">
            <Link to="/boutique" className="btn-solid">Voir les promos</Link>
            <a href="https://wa.me/2290191463965" target="_blank" rel="noreferrer" className="btn-outline-wa">
              <i className="bi bi-whatsapp" /> Nous écrire
            </a>
          </div>
        </section>
      </div>

      {/* ── NOUVEAUTÉS ── */}
      {newArrivals.length > 0 && (
        <section className="section-products" style={{ background: "var(--bg-4)" }}>
          <div className="section-products__header">
            <div>
              <p className="label-small">Fraîchement arrivés</p>
              <h2>Nouveautés</h2>
            </div>
            <Link to="/boutique" className="link-arrow">Tout voir <i className="bi bi-arrow-right" /></Link>
          </div>
          <div className="products-grid-3">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* ── POURQUOI ── */}
      <section className="why-section">
        <div className="why-section__left">
          <p className="label-small">Pourquoi nous</p>
          <h2>L'expérience<br /><span>GetHere</span></h2>
          <a href="https://wa.me/2290191463965" target="_blank" rel="noreferrer"
            className="btn-outline-wa" style={{ marginTop: "2rem", display: "inline-flex" }}>
            <i className="bi bi-whatsapp" /> Démarrer une commande
          </a>
        </div>
        <div className="why-section__right">
          {[
            { icon: "bi-whatsapp",    title: "Commande WhatsApp",  text: "Sélectionnez et envoyez. On gère le reste directement sur WhatsApp, sans inscription." },
            { icon: "bi-truck",       title: "Livraison rapide",   text: "24h à Porto-Novo, 48–72h partout au Bénin. Vos articles arrivent vite et en parfait état." },
            { icon: "bi-patch-check", title: "Produits vérifiés",  text: "Chaque article est contrôlé avant expédition. Ce que vous voyez est ce que vous recevez." },
            { icon: "bi-cash-coin",   title: "Paiement flexible",  text: "À la livraison, MTN MoMo ou Moov Money. Vous choisissez ce qui vous convient." },
          ].map((f, i) => (
            <div key={i} className="why-item">
              <div className="why-item__icon"><i className={`bi ${f.icon}`} /></div>
              <div><h3>{f.title}</h3><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="testimonials">
        <div className="testimonials__header">
          <p className="label-small">Ils nous font confiance</p>
          <h2>500+ clients<br /><span>satisfaits</span></h2>
        </div>
        <div className="testimonials__grid">
          {[
            { name: "Afi K.",  city: "Porto-Novo", text: "J'ai commandé une robe pour une soirée, elle était parfaite. Livraison en moins de 24h !", stars: 5 },
            { name: "Kofi M.", city: "Porto-Novo", text: "Les sneakers correspondent exactement aux photos. Prix imbattable, service au top.", stars: 5 },
            { name: "Séna D.", city: "Porto-Novo", text: "Perruque magnifique et naturelle. Le service WhatsApp est ultra rapide. Merci GetHere !", stars: 5 },
          ].map((r, i) => (
            <div key={i} className="testi-card">
              <div className="testi-card__stars">
                {[...Array(r.stars)].map((_, j) => <i key={j} className="bi bi-star-fill" />)}
              </div>
              <p>"{r.text}"</p>
              <div className="testi-card__author">
                <div className="testi-card__avatar">{r.name[0]}</div>
                <div><strong>{r.name}</strong><span>{r.city}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final">
        <div className="cta-final__inner">
          <h2>Prêt(e) à<br /><span>shopper ?</span></h2>
          <p>Des centaines de clients nous font confiance. Commandez en 2 minutes sur WhatsApp.</p>
          <a href="https://wa.me/2290191463965?text=Bonjour%20GetHere%20!%20Je%20veux%20passer%20une%20commande%20%F0%9F%98%8A"
            target="_blank" rel="noreferrer" className="btn-solid btn-solid--lg">
            <i className="bi bi-whatsapp" /> Démarrer ma commande
          </a>
        </div>
      </section>

    </main>
  );
}
