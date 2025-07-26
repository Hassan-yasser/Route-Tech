export interface HeaderProps {
  brands: string[];
  categories: string[];
  selectedBrands: string[];
  setSelectedBrands: (val: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  sortPrice: "" | "asc" | "desc";
  setSortPrice: (val: "" | "asc" | "desc") => void;
  search: string;
  setSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
}
export type SearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};
export type FilterProps = {
  brands: string[];
  categories: string[];
  selectedBrands: string[];
  setSelectedBrands: (val: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  sortPrice: "" | "asc" | "desc";
  setSortPrice: (val: "" | "asc" | "desc") => void;
};
