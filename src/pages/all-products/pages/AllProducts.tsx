import ProductCard from "../../../compoents/cards/ProductCard";
import FilterProducts from "../../../compoents/inputs/FilterProducts";
import SearchInputs from "../../../compoents/inputs/SearchInputs";
import ErrorPage from "../../../compoents/ResponseStatus/ErrorPage";
import LoadingPage from "../../../compoents/ResponseStatus/Loading";
import { useProducts } from "../hooks/useProducts";
import type { ProductType } from "../types/ProductsTypes";

const AllProducts = () => {
  const {
    isError,
    isLoading,
    products,
    brands,
    categories,
    search,
    selectedBrands,
    selectedCategories,
    setSearch,
    setSelectedBrands,
    setSelectedCategories,
    setSortPrice,
    sortPrice,
  } = useProducts();

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  return (
    <div className="p-4 md:p-8 space-y-4">
      <div className="flex items-center gap-3">
        <div className="grow">
          {" "}
          <SearchInputs onChange={setSearch} value={search} />
        </div>
        <div>
          <FilterProducts
            brands={brands}
            categories={categories}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            sortPrice={sortPrice}
            setSortPrice={setSortPrice}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
