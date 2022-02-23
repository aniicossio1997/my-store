import React, { useState } from "react";
import { Product } from "../../product/types";

const useSearch = (products: Product[]) => {
  const [search, setSearch] = useState<string>("");
  const filterProducts = (): Product[] => {
    if (search.length < 2) return products;
    // Si hay algo en la caja de texto
    const filtered = products.filter((product) => {
      let bolTitle = product.title.toLowerCase().includes(search.toLowerCase());
      let bolCategory = product.category
        .toLowerCase()
        .includes(search.toLowerCase());
      return bolCategory || bolTitle;
    });
    return filtered;
  };
  const handleSearchChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };
  return { filterProducts, handleSearchChange, search };
};

export default useSearch;
