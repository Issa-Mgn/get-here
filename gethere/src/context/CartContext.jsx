import { createContext, useContext, useState, useCallback } from "react";
import { formatPrice } from "../data/products";
import { createOrder } from "../data/api";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const add = useCallback((product, size = null, color = null) => {
    setItems(prev => {
      const idx = prev.findIndex(
        i => i.product.id === product.id && i.size === size && i.color === color
      );
      if (idx > -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [...prev, { product, size, color, qty: 1 }];
    });
  }, []);

  const remove = useCallback((product, size, color) => {
    setItems(prev =>
      prev.filter(i => !(i.product.id === product.id && i.size === size && i.color === color))
    );
  }, []);

  const updateQty = useCallback((product, size, color, qty) => {
    if (qty < 1) return;
    setItems(prev =>
      prev.map(i =>
        i.product.id === product.id && i.size === size && i.color === color
          ? { ...i, qty }
          : i
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  // ── Construit le message WhatsApp ──────────────────────
  const buildWhatsAppMessage = () => {
    const lines = items.map(i => {
      const size  = i.size  ? `\n   Taille : ${i.size}`  : "";
      const color = i.color ? `\n   Couleur : ${i.color}` : "";
      return `• *${i.product.name}* x${i.qty}${size}${color}\n   Prix unitaire : ${formatPrice(i.product.price)}`;
    });
    const msg =
      `Bonjour GetHere ! 👋\n\nJe souhaite commander :\n\n` +
      lines.join("\n\n") +
      `\n\n*Total : ${formatPrice(total)}*\n\nMerci de confirmer la disponibilité et les modalités de livraison 🙏`;
    return `https://wa.me/2290191463965?text=${encodeURIComponent(msg)}`;
  };

  // ── Enregistre la commande dans l'API puis ouvre WhatsApp ──
  const submitOrder = useCallback(async ({ customer, phone, city } = {}) => {
    const waUrl = buildWhatsAppMessage();

    // Payload pour l'API
    const payload = {
      customer: customer || "Client WhatsApp",
      phone:    phone    || "+229",
      city:     city     || null,
      items: items.map(i => ({
        product_id: i.product.id,
        name:       i.product.name,
        qty:        i.qty,
        price:      i.product.price,
        size:       i.size  ?? null,
        color:      i.color ?? null,
      })),
      total,
    };

    // On enregistre en arrière-plan — si ça échoue, le client passe quand même sur WA
    createOrder(payload).catch(err => console.warn("Order API error:", err));

    // Ouvre WhatsApp immédiatement
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }, [items, total]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CartContext.Provider value={{
      items, add, remove, updateQty, clear,
      total, count,
      buildWhatsAppMessage,
      submitOrder,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
