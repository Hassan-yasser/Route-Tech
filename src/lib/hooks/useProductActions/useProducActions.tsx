import { useLocalStorage } from "react-use";
import type { ProductType } from "../../../pages/all-products/types/ProductsTypes";
import { ToasterSonnerSuccess } from "../../../compoents/ToasterSonnerSuccess/ToasterSonner";

export const useProductActions = () => {
  const [favorites, setFavorites] = useLocalStorage<ProductType[]>(
    "favorites",
    []
  );
  const [cart, setCart] = useLocalStorage<ProductType[]>("cart", []);

  const isFavorite = (id: number) => {
    return favorites?.some((item) => item.id === id);
  };

  const isInCart = (id: number) => {
    return cart?.some((item) => item.id === id);
  };

  const addToFavorites = (product: ProductType) => {
    if (!favorites) return setFavorites([product]);
    if (isFavorite(product.id)) return;
    ToasterSonnerSuccess("Product Added To Favorites");
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (id: number) => {
    if (!favorites) return;
    ToasterSonnerSuccess("Product Removed From Favorites");

    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const addToCart = (product: ProductType) => {
    if (!cart) return setCart([product]);
    if (isInCart(product.id)) return;
    ToasterSonnerSuccess("Product Added To Cart");

    setCart([...cart, product]);
  };
  const removeFromCart = (id: number) => {
    if (!cart) return;
    ToasterSonnerSuccess("Product Removed From Cart");
    setCart(cart.filter((item) => item.id !== id));
  };
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
