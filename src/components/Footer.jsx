import { Link } from "react-router-dom";
import logo from "../assets/image/logo.webp";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="GetHere" />
            <span>Get<em>Here</em></span>
          </Link>
          <p>Boutique multiservices & lifestyle à Porto-Novo. Mode, beauté, maison — tout en un.</p>
          <div className="footer__socials">
            <a href="https://wa.me/2290129140143" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
            <a href="#!" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a href="#!" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a href="#!" aria-label="TikTok"><i className="bi bi-tiktok" /></a>
          </div>
        </div>

        <div className="footer__nav">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/boutique">Boutique</Link></li>
            <li><Link to="/categories">Catégories</Link></li>
            <li><Link to="/a-propos">À Propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__nav">
          <h4>Catégories</h4>
          <ul>
            <li><Link to="/boutique?cat=vetements">Vêtements</Link></li>
            <li><Link to="/boutique?cat=chaussures">Chaussures</Link></li>
            <li><Link to="/boutique?cat=perruques">Perruques & Mèches</Link></li>
            <li><Link to="/boutique?cat=accessoires">Bijoux & Accessoires</Link></li>
            <li><Link to="/boutique?cat=cosmetiques">Cosmétiques</Link></li>
            <li><Link to="/boutique?cat=cuisine">Cuisine & Maison</Link></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <i className="bi bi-whatsapp" />
              <a href="https://wa.me/2290129140143" target="_blank" rel="noreferrer">+229 01 29 14 01 43</a>
            </li>
            <li>
              <i className="bi bi-geo-alt" />
              <span>Porto-Novo, Bénin</span>
            </li>
            <li>
              <i className="bi bi-clock" />
              <span>Lun – Sam · 8h–20h</span>
            </li>
          </ul>
          <a
            href="https://wa.me/2290129140143"
            className="footer__wa-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp" />
            Passer une commande
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} GetHere — Tous droits réservés</span>
        <span>Powered By Issa.dev <i className="bi bi-heart-fill" style={{ color: "#ff5500", fontSize: "0.65rem" }} /></span>
      </div>
    </footer>
  );
}
