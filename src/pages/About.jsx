import { Link } from "react-router-dom";
import logo from "../assets/image/logo.webp";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80" alt="" />
          <div className="about-hero__bg-overlay" />
        </div>
        <div className="about-hero__content">
          <div className="about-hero__text">
            <span className="label-small">Notre histoire</span>
            <h1>Bienvenue<br />chez <span className="orange">GetHere.</span></h1>
            <p>
              Née à Porto-Novo, GetHere est une boutique multiservices pensée pour
              simplifier le shopping quotidien — mode, beauté, maison, tout en un.
            </p>
            <a href="https://wa.me/2290129140143" className="btn-wa" target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> Nous contacter
            </a>
          </div>
          <div className="about-hero__logo">
            <div className="logo-frame">
              <img src={logo} alt="GetHere" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-section">
        <div className="about-mission">
          {[
            { icon: "bi-bullseye", title: "Notre Mission", text: "Offrir une boutique complète où chaque client trouve mode, beauté et maison au même endroit, avec un service simple et humain." },
            { icon: "bi-eye", title: "Notre Vision", text: "Devenir la référence lifestyle e-commerce au Bénin, reconnue pour la qualité de ses produits et la proximité avec ses clients." },
            { icon: "bi-heart", title: "Nos Valeurs", text: "Qualité, honnêteté et satisfaction client avant tout. Chaque produit est sélectionné avec soin pour votre entière satisfaction." },
          ].map((m, i) => (
            <div key={i} className="mission-card">
              <div className="mission-icon"><i className={`bi ${m.icon}`} /></div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="about-section" style={{ paddingTop: 0 }}>
        <div className="about-story">
          <div className="story-img">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Boutique GetHere" />
          </div>
          <div className="story-text">
            <span className="label-small">Notre parcours</span>
            <h2>Une boutique pensée pour vous</h2>
            <p>
              GetHere a été fondée avec une idée simple : pourquoi faire plusieurs
              boutiques quand on peut tout trouver en un seul endroit ?
            </p>
            <p>
              Vêtements, chaussures, perruques, bijoux, cosmétiques, articles de cuisine
              — tout est réuni ici, soigneusement sélectionné pour garantir qualité et valeur.
            </p>
            <p>
              Le concept est simple : vous choisissez sur le site, vous commandez via
              WhatsApp, et nous livrons. Pas de friction. Juste du shopping plaisir.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="dark" style={{ padding: "0 0 6rem" }}>
        <div className="about-section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="about-stats">
            {[
              { val: "200+", label: "Produits disponibles", icon: "bi-box-seam" },
              { val: "500+", label: "Clients satisfaits", icon: "bi-people" },
              { val: "6", label: "Catégories", icon: "bi-grid" },
              { val: "24h", label: "Livraison Porto-Novo", icon: "bi-truck" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <i className={`bi ${s.icon}`} />
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <h2>Prêt(e) à<br /><span>découvrir ?</span></h2>
          <p>Explorez nos collections et commandez directement sur WhatsApp.</p>
          <div className="about-cta-btns">
            <Link to="/boutique" className="btn-primary">
              <i className="bi bi-grid" /> Voir la boutique
            </Link>
            <a href="https://wa.me/2290129140143" className="btn-wa" target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> Commander
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
