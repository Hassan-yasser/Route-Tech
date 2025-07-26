import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo, useState } from "react";
import type { ProductType } from "../../../pages/all-products/types/ProductsTypes";

const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const useProducts = () => {
  const {
    data: allProducts = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  // البحث
  const [search, setSearch] = useState("");

  // الفلاتر
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortPrice, setSortPrice] = useState<"asc" | "desc" | "">("");

  // استخراج البراندات من أول كلمة في الاسم (تقدير مبدئي)
  const brands = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.title.split(" ")[0]))),
    [allProducts]
  );

  const categories = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.category))),
    [allProducts]
  );

  // تصفية المنتجات
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // تصفية بالبراند
    if (selectedBrands.length) {
      filtered = filtered.filter((p) =>
        selectedBrands.includes(p.title.split(" ")[0])
      );
    }

    // تصفية بالكاتيجوري
    if (selectedCategories.length) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // تصفية بالبحث
    if (search.trim()) {
      const lower = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.description.toLowerCase().includes(lower)
      );
    }

    // فرز بالسعر
    if (sortPrice) {
      filtered.sort((a, b) =>
        sortPrice === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    return filtered;
  }, [allProducts, selectedBrands, selectedCategories, sortPrice, search]);

  return {
    products: filteredProducts,
    brands,
    categories,
    selectedBrands,
    setSelectedBrands,
    selectedCategories,
    setSelectedCategories,
    sortPrice,
    setSortPrice,
    search,
    setSearch,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};

export default useProducts;
