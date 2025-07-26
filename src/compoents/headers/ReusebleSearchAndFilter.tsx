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
  );
};

export default ReusebleSearchAndFilter;
