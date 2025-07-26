import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import type { FilterProps } from "../headers/headers-types/HeadersTypes";

const FilterProducts = ({
  brands,
  categories,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  sortPrice,
  setSortPrice,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCheckbox = (
    value: string,
    selected: string[],
    setSelected: (val: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSortPrice("");
  };

  return (
    <div className="relative inline-block ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 cursor-pointer py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        <FaFilter />
        Filters
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 right-0 w-[300px] bg-white border border-gray-300 shadow-lg rounded-xl p-4 space-y-4">
          <div>
            <h3 className="font-bold mb-2">Sort by Price</h3>
            <select
              value={sortPrice}
              onChange={(e) =>
                setSortPrice(e.target.value as "asc" | "desc" | "")
              }
              className="w-full border p-2 rounded cursor-pointer"
            >
              <option value="">None</option>
              <option value="asc">Lowest to Highest</option>
              <option value="desc">Highest to Lowest</option>
            </select>
          </div>{" "}
          <div>
            <h3 className="font-bold mb-2">Filter by Brands</h3>
            <div className="flex flex-col gap-1 max-h-32 overflow-y-auto">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      toggleCheckbox(brand, selectedBrands, setSelectedBrands)
                    }
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Filter by Categories</h3>
            <div className="flex flex-col gap-1 max-h-32 overflow-y-auto">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() =>
                      toggleCheckbox(
                        cat,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className="text-right pt-2">
            <button
              onClick={handleClearFilters}
              className="text-red-600 text-sm hover:underline cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterProducts;
