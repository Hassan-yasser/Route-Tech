import { useParams } from "react-router-dom";
import useProducts from "../../../../../lib/hooks/useMainProducts/useMainProducts";
import type { ProductType } from "../../../types/ProductsTypes";
import { useProductActions } from "../../../../../lib/hooks/useProductActions/useProducActions";

const useProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const productDetails = products.find(
    (product: ProductType) => product.id === Number(id)
  );

  const relatedProducts = products.filter(
    (product: ProductType) => product.category === productDetails?.category
  );
  const {
    isFavorite,
    isInCart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useProductActions();
  return {
    productDetails,
    relatedProducts,
    isFavorite,
    isInCart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  };
};

export default useProductDetails;
