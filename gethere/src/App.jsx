import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "https://get-here-server-nd17.onrender.com";

// Enregistre une visite — throttle par session (1 visite / page / session)
const visitedPaths = new Set();
function trackVisit(pathname) {
  if (visitedPaths.has(pathname)) return;
  visitedPaths.add(pathname);
  fetch(`${API_URL}/api/analytics/visit`, { method: "POST" }).catch(() => {});
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackVisit(pathname);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname, search } = useLocation();
  const isSearchPage = pathname === "/boutique" && Boolean(search);
  const isProductPage = pathname.startsWith("/produit/");
  const pageMeta = {
    "/": ["Boutique mode, beauté et maison au Bénin", "Mode, beauté, accessoires et maison : découvrez GetHere, votre boutique en ligne à Porto-Novo avec livraison partout au Bénin."],
    "/boutique": ["Boutique en ligne", "Découvrez les vêtements, chaussures, perruques, accessoires, cosmétiques et articles maison de GetHere."],
    "/categories": ["Catégories", "Explorez les catégories GetHere : mode, chaussures, beauté, bijoux, maison et plus encore."],
    "/a-propos": ["À propos de GetHere", "Découvrez GetHere, boutique multiservices basée à Porto-Novo et dédiée à la mode, la beauté et la maison au Bénin."],
    "/contact": ["Contactez GetHere", "Une question ou une commande ? Contactez GetHere à Porto-Novo sur WhatsApp. Livraison dans tout le Bénin."],
  }[pathname] || ["Page introuvable", "La page demandée est introuvable sur GetHere."];

  return (
    <>
      <ScrollToTop />
      {!isProductPage && pathname !== "/panier" && <SEO
        title={pageMeta[0]}
        description={pageMeta[1]}
        noindex={isSearchPage || !Object.hasOwn({ "/": true, "/boutique": true, "/categories": true, "/a-propos": true, "/contact": true }, pathname)}
        structuredData={pathname === "/" ? {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GetHere",
          description: "Boutique mode, beauté, accessoires et maison à Porto-Novo, Bénin.",
          areaServed: "BJ",
          telephone: "+2290191463965",
          sameAs: ["https://wa.me/2290191463965"],
        } : undefined}
      />}
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <main style={{ paddingTop: "80px", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", textAlign: "center" }}>
      <span style={{ fontSize: "7rem", fontWeight: 900, color: "#ff5500", lineHeight: 1 }}>404</span>
      <h1>Page introuvable</h1>
      <p style={{ color: "rgba(240,235,227,0.4)", fontSize: "1rem" }}>Cette page n'existe pas.</p>
      <Link to="/" style={{ color: "#ff5500", fontWeight: 700, fontSize: "0.9rem", borderBottom: "1px solid #ff5500", paddingBottom: "2px" }}>
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}
