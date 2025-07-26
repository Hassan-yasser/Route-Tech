import type { ProductType } from "../../../pages/all-products/types/ProductsTypes";
import { ToasterSonnerSuccess } from "../../../compoents/ToasterSonnerSuccess/ToasterSonner";
import { useState } from "react";
const getParsedLocalStorage = <T,>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;

    const parsed = JSON.parse(item);
    if (parsed) {
      return parsed;
    }
    return fallback;
  } catch (error) {
    return fallback;
  }
};

export const useProductActions = () => {
  const [favorites, setFavorites] = useState<ProductType[]>(() =>
    getParsedLocalStorage<ProductType[]>("fav", [])
  );

  const [cart, setCart] = useState<ProductType[]>(() =>
    getParsedLocalStorage<ProductType[]>("cart", [])
  );
  const isFavorite = (id: number) => favorites?.some((item) => item.id === id);
  const isInCart = (id: number) => cart?.some((item) => item.id === id);

  const addToFavorites = (product: ProductType) => {
    setFavorites((prev) => [...prev, product]);
    ToasterSonnerSuccess("Product Added To Favorites");
    localStorage.setItem("fav", JSON.stringify([...favorites, product]));
  };

  const removeFromFavorites = (product: ProductType) => {
    setFavorites((prev) => {
      const list = prev || [];
      const updated = list.filter((item) => item.id !== product?.id);
      ToasterSonnerSuccess("Product Removed From Favorites");
      localStorage.setItem("fav", JSON.stringify(updated));
      return updated;
    });
  };

  const addToCart = (product: ProductType) => {
    const current = cart || [];
    const exists = current.some((item) => item.id === product.id);
    if (exists) return;

    const updated = [...current, product];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    ToasterSonnerSuccess("Product Added To Cart");
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const list = prev || [];
      const updated = list.filter((item) => item.id !== id);
      ToasterSonnerSuccess("Product Removed From Cart");
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };
  console.log("gkfdmfd-312", favorites);

  return {
    favorites: favorites || [],
    cart: cart || [],
    isFavorite,
    isInCart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  };
};
