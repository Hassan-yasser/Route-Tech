import type { ProductType } from "../../pages/all-products/types/ProductsTypes";
import ProductCard from "../cards/ProductCard";
import NoDataFound from "../ResponseStatus/NoDataFound";
import { useProductActions } from "../../lib/hooks/useProductActions/useProducActions";
interface props {
  products: ProductType[] | string;
  message: string;
}
const ProductContainer = ({ products, message }: props) => {
  const {
    isFavorite,
    isInCart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
    cart,
    favorites,
  } = useProductActions();
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products == "cart" ? (
          cart?.length > 0 ? (
            cart?.map((product: ProductType) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={isFavorite(product.id)}
                isInCart={isInCart(product.id)}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <NoDataFound meesage={message} />
          )
        ) : products == "favorite" ? (
          favorites?.length > 0 ? (
            favorites?.map((product: ProductType) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={isFavorite(product.id)}
                isInCart={isInCart(product.id)}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <NoDataFound meesage={message} />
          )
        ) : typeof products !== "string" && products?.length > 0 ? (
          products?.map((product: ProductType) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              isInCart={isInCart(product.id)}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <NoDataFound meesage={message} />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
