import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import type { ProductType } from "../../pages/all-products/types/ProductsTypes";
import { useNavigate } from "react-router-dom";

type Props = {
  product: ProductType;
  isFavorite: boolean;

  isInCart: boolean;
  addToFavorites: (product: ProductType) => void;
  removeFromFavorites: (product: ProductType) => void;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
};

const ProductCard = ({
  product,
  isFavorite,
  isInCart,
  addToFavorites,
  removeFromFavorites,
  addToCart,
  removeFromCart,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col">
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {isFavorite ? (
          <button
            onClick={() => removeFromFavorites(product)}
            className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaHeart className="text-red-500" />
          </button>
        ) : (
          <button
            onClick={() => addToFavorites(product)}
            className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaRegHeart />
          </button>
        )}

        {isInCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <IoCartSharp className="text-green-600" />
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <IoCartOutline className="text-green-600" />
          </button>
        )}
      </div>

      <img
        src={product.image}
        onClick={() => navigate(`/products/${product.id}/view/details`)}
        alt={product.title}
        className="h-48 object-contain mb-4 cursor-pointer"
      />
      <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
      <p className="text-sm text-gray-500 mb-2 line-clamp-2">
        {product.category}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-primary font-bold text-lg">${product.price}</span>
        <span className="text-yellow-500 font-medium">
          ⭐ {product.rating.rate} ({product.rating.count})
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
