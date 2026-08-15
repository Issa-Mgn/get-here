import { createContext, useContext, useState, useCallback } from "react";
import { formatPrice } from "../data/products";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { product, size, color, qty }

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

  // Construit le message WhatsApp avec tous les articles
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
    return `https://wa.me/2290129140143?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, total, count, buildWhatsAppMessage }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
