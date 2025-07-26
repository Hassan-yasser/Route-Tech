import { FaHeart, FaRegHeart } from "react-icons/fa";
import ProductCard from "../../../../../compoents/cards/ProductCard";
import NoDataFound from "../../../../../compoents/ResponseStatus/NoDataFound";
import useProductDetails from "../hooks/useProductDetails";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

const ProductDetails = () => {
  const {
    productDetails,
    relatedProducts,
    isFavorite,
    isInCart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useProductDetails();

  if (!productDetails) {
    return <NoDataFound meesage="Product not found" />;
  }

  return (
    <div className="mainPadding space-y-10">
      <div className="border p-4 rounded-lg flex md:flex-row flex-col-reverse gap-2 shadow-sm space-y-3">
        <div className="w-full">
          <h2 className="text-lg md:text-2xl font-semibold">
            {productDetails.title}
          </h2>
          <p className="text-[10px] md:text-lg text-gray-600">
            {productDetails.description}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm md:text-lg font-medium">
              Price: ${productDetails.price}
            </p>
            <button
              className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              onClick={() =>
                isFavorite(productDetails.id)
                  ? removeFromFavorites(productDetails)
                  : addToFavorites(productDetails)
              }
            >
              {isFavorite(productDetails.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>
            <button
              className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              onClick={() =>
                isInCart(productDetails.id)
                  ? removeFromCart(productDetails.id)
                  : addToCart(productDetails)
              }
            >
              {isInCart(productDetails.id) ? (
                <IoCartSharp className="text-green-600" />
              ) : (
                <IoCartOutline className="text-green-600" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full  md:h-full lg:w-1/4 xl:w-1/6">
          <img
            src={productDetails.image}
            className="w-full h-[250px] object-contain"
            alt={productDetails.title}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl text-center font-semibold mb-4">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts?.length > 0 ? (
            relatedProducts.map((product) => (
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
            <p className="text-gray-500">No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
