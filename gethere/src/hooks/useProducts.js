import { useState, useEffect } from "react";
import { fetchPublishedProducts, fetchProduct, fetchProductBySlug, fetchCategories, normalizeProduct } from "../data/api";

/* ── Tous les produits publiés ── */
export function useProducts(params = {}) {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  // Clé de cache basée sur les params
  const key = JSON.stringify(params);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchPublishedProducts(params)
      .then(({ products: list }) => {
        if (!cancelled) {
          setProducts((list ?? []).map(normalizeProduct));
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) { setError(err.message); setLoading(false); }
      });
    return () => { cancelled = true; };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  return { products, loading, error };
}

/* ── Un seul produit par id ── */
export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    const isLegacyId = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
    (isLegacyId ? fetchProduct(id) : fetchProductBySlug(id))
      .then(({ product: p }) => {
        if (!cancelled) { setProduct(normalizeProduct(p)); setLoading(false); }
      })
      .catch(err => {
        if (!cancelled) { setError(err.message); setLoading(false); }
      });
    return () => { cancelled = true; };
  }, [id]);

  return { product, loading, error };
}

/* ── Catégories ── */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    fetchCategories()
      .then(({ categories: list }) => setCategories(list ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
