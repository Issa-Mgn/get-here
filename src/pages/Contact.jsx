import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Bonjour GetHere 👋\n\nNom : *${form.name}*\nTél : *${form.phone}*\nSujet : *${form.subject}*\n\n${form.message}`
    );
    window.open(`https://wa.me/2290129140143?text=${msg}`, "_blank");
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span className="label-small">Parlons-nous</span>
          <h1>On est<br />là pour vous.</h1>
          <p>Une question, une commande, un conseil — on répond vite sur WhatsApp.</p>
        </div>
      </section>

      {/* Main section */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* Left — infos */}
          <div className="contact-infos">
            <h2>La manière la plus simple de nous joindre</h2>
            <p>Réponse garantie en moins de 30 minutes pendant nos heures d'ouverture. WhatsApp est notre canal principal.</p>

            <div className="info-cards">
              <a href="https://wa.me/2290129140143" target="_blank" rel="noreferrer" className="info-card primary">
                <div className="info-icon"><i className="bi bi-whatsapp" /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <span>+229 01 29 14 01 43</span>
                  <small>Canal principal · Réponse rapide</small>
                </div>
                <i className="bi bi-arrow-right info-arrow" />
              </a>
              <div className="info-card">
                <div className="info-icon"><i className="bi bi-geo-alt-fill" /></div>
                <div>
                  <h4>Localisation</h4>
                  <span>Cotonou, Bénin</span>
                  <small>Livraison dans tout le Bénin</small>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><i className="bi bi-clock-fill" /></div>
                <div>
                  <h4>Horaires</h4>
                  <span>Lun – Sam · 8h – 20h</span>
                  <small>Dimanche disponible sur WhatsApp</small>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><i className="bi bi-truck" /></div>
                <div>
                  <h4>Livraison</h4>
                  <span>24h – 72h selon localisation</span>
                  <small>Cotonou et tout le Bénin</small>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://wa.me/2290129140143" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
              <a href="#!" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#!" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#!" aria-label="TikTok"><i className="bi bi-tiktok" /></a>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            <div className="form-header">
              <h3>Envoyer un message</h3>
              <p>Le formulaire vous redirige vers WhatsApp pour une réponse rapide.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Votre nom</label>
                  <div className="input-wrap">
                    <i className="bi bi-person" />
                    <input type="text" id="name" name="name" placeholder="Afi Kodjovi" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <div className="input-wrap">
                    <i className="bi bi-telephone" />
                    <input type="tel" id="phone" name="phone" placeholder="+229..." value={form.phone} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <div className="input-wrap">
                  <i className="bi bi-tag" />
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Choisir...</option>
                    <option value="Commande">Passer une commande</option>
                    <option value="Info produit">Infos sur un produit</option>
                    <option value="Livraison">Suivi de livraison</option>
                    <option value="Retour">Retour / échange</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-wrap textarea-wrap">
                  <i className="bi bi-chat-text" />
                  <textarea id="message" name="message" placeholder="Écrivez votre message..." rows={5} value={form.message} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="btn-submit">
                <i className="bi bi-whatsapp" />
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-header">
            <span className="label-small">Questions fréquentes</span>
            <h2>FAQ</h2>
          </div>
          <div className="faq-grid">
            {[
              { q: "Comment passer une commande ?", a: "Choisissez un produit, cliquez sur le bouton WhatsApp et suivez les instructions. Notre équipe vous répond dans les 30 minutes." },
              { q: "Quels modes de paiement ?", a: "Paiement à la livraison, MTN Mobile Money et Moov Money sont tous acceptés." },
              { q: "Livrez-vous hors de Cotonou ?", a: "Oui, nous livrons dans tout le Bénin. Le délai est de 48h à 72h selon votre zone." },
              { q: "Puis-je retourner un produit ?", a: "Oui, sous 48h après réception si le produit est défectueux ou ne correspond pas. Contactez-nous sur WhatsApp." },
              { q: "Les prix sont-ils négociables ?", a: "Pour les commandes groupées ou certaines promos, contactez-nous directement sur WhatsApp." },
              { q: "Comment suivre ma commande ?", a: "Vous recevez des mises à jour via WhatsApp à chaque étape, de la confirmation à la livraison." },
            ].map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">
                  <i className="bi bi-plus-circle-fill" />
                  <h4>{item.q}</h4>
                </div>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
