import React, { createContext, useContext, useEffect, useState } from "react";

export interface ProductContext {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: string;
}

interface CartContextType {
  cartContext: ProductContext[];
  addToCart: (product: ProductContext) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartContext, setCartContext] = useState<ProductContext[]>([]);

  // 🔹 Carrega o carrinho salvo no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartContext(JSON.parse(saved));
  }, []);

  // 🔹 Salva no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContext));
  }, [cartContext]);

  const addToCart = (product: ProductContext) => {
    console.log(product);
    setCartContext(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id: string) => setCartContext(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setCartContext([]);

  return (
    <CartContext.Provider value={{ cartContext, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart precisa estar dentro de CartProvider");
  return context;
};
