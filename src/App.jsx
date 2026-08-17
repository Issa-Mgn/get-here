import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "https://get-here-server.onrender.com";

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
  return (
    <>
      <ScrollToTop />
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
      <p style={{ color: "rgba(240,235,227,0.4)", fontSize: "1rem" }}>Cette page n'existe pas.</p>
      <a href="/" style={{ color: "#ff5500", fontWeight: 700, fontSize: "0.9rem", borderBottom: "1px solid #ff5500", paddingBottom: "2px" }}>
        Retour à l'accueil
      </a>
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
