import SearchInputs from "../inputs/SearchInputs";
import FilterProducts from "../inputs/FilterProducts";
import type { HeaderProps } from "./headers-types/HeadersTypes";

const ReusebleSearchAndFilter = ({
  setSearch,
  search,
  brands,
  categories,
  selectedBrands,
  setSelectedBrands,
  setSelectedCategories,
  selectedCategories,
  sortPrice,
  setSortPrice,
}: HeaderProps) => {
  return (
    <div className="flex justify-between items-center md:gap-3 gap-4 ">
      <div className="w-1/2 sm:w-full">
        {" "}
        <SearchInputs onChange={setSearch} value={search} />
      </div>
      <div className=" w-1/2 ">
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
  );
};

export default ReusebleSearchAndFilter;
