import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import logo from "../assets/image/logo.webp";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const { theme, toggle } = useTheme();
  const { count } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchVal.trim()) return;
    navigate(`/boutique?search=${encodeURIComponent(searchVal.trim())}`);
    setSearchOpen(false);
    setSearchVal("");
  };

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">

          {/* Logo */}
          <Link to="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="GetHere" />
            <span>Get<em>Here</em></span>
          </Link>

          {/* Links — desktop uniquement */}
          <nav className="nav__links" aria-label="Navigation principale">
            <NavLink to="/" end>Accueil</NavLink>
            <NavLink to="/boutique">Boutique</NavLink>
            <NavLink to="/categories">Catégories</NavLink>
            <NavLink to="/a-propos">À Propos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Actions — desktop */}
          <div className="nav__actions nav__actions--desktop">
            <button className="nav__icon-btn" onClick={() => setSearchOpen(s => !s)} aria-label="Rechercher">
              <i className={`bi bi-${searchOpen ? "x-lg" : "search"}`} />
            </button>
            <button className="nav__icon-btn" onClick={toggle} aria-label="Changer le thème">
              <i className={`bi bi-${theme === "dark" ? "sun" : "moon"}`} />
            </button>
            <Link to="/panier" className="nav__cart-btn" aria-label="Panier">
              <i className="bi bi-bag" />
              {count > 0 && <span className="nav__cart-badge">{count}</span>}
            </Link>
            <a href="https://wa.me/2290129140143" target="_blank" rel="noreferrer" className="nav__order-btn">
              <i className="bi bi-whatsapp" />
              <span>Commander</span>
            </a>
          </div>

          {/* Actions — mobile uniquement */}
          <div className="nav__actions nav__actions--mobile">
            <button className="nav__icon-btn" onClick={toggle} aria-label="Changer le thème">
              <i className={`bi bi-${theme === "dark" ? "sun" : "moon"}`} />
            </button>
            <Link to="/panier" className="nav__cart-btn" aria-label="Panier">
              <i className="bi bi-bag" />
              {count > 0 && <span className="nav__cart-badge">{count}</span>}
            </Link>
            <button className="nav__icon-btn" onClick={() => setSearchOpen(s => !s)} aria-label="Rechercher">
              <i className={`bi bi-${searchOpen ? "x-lg" : "search"}`} />
            </button>
            <button
              className={`nav__burger ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen(s => !s)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className={`nav__search ${searchOpen ? "is-visible" : ""}`}>
          <form onSubmit={handleSearch}>
            <i className="bi bi-search" />
            <input
              type="text"
              placeholder="Rechercher robe, sneakers, cosmétiques..."
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              autoFocus={searchOpen}
            />
            <button type="submit">OK</button>
          </form>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links">
          {[
            { to: "/", label: "Accueil", num: "01" },
            { to: "/boutique", label: "Boutique", num: "02" },
            { to: "/categories", label: "Catégories", num: "03" },
            { to: "/a-propos", label: "À Propos", num: "04" },
            { to: "/contact", label: "Contact", num: "05" },
          ].map(({ to, label, num }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} className="mobile-menu__link">
              <span className="mobile-menu__num">{num}</span>
              <span className="mobile-menu__label">{label}</span>
              <i className="bi bi-arrow-right" />
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/2290129140143"
          className="mobile-menu__wa"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <i className="bi bi-whatsapp" />
          Commander sur WhatsApp
        </a>
      </div>

      {menuOpen && <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
