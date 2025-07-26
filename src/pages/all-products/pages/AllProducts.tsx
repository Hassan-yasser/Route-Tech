import ProductContainer from "../../../compoents/containeres/ProductContainer";
import ReusebleSearchAndFilter from "../../../compoents/headers/ReusebleSearchAndFilter";
import ErrorPage from "../../../compoents/ResponseStatus/ErrorPage";
import LoadingPage from "../../../compoents/ResponseStatus/Loading";
import useMainProducts from "../../../lib/hooks/useMainProducts/useMainProducts";
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
  } = useMainProducts();

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  return (
    <div className="mainPadding space-y-4 ">
      <ReusebleSearchAndFilter
        brands={brands}
        categories={categories}
        selectedBrands={selectedBrands}
        search={search}
        selectedCategories={selectedCategories}
        setSearch={setSearch}
        setSelectedBrands={setSelectedBrands}
        setSelectedCategories={setSelectedCategories}
        setSortPrice={setSortPrice}
        sortPrice={sortPrice}
      />
      <ProductContainer
        message={`No Products Found  ${
          search && `with this search ("${search}")`
        }`}
        products={products}
      />
    </div>
  );
};

export default AllProducts;
