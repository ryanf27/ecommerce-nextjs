"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ProductList from "@/components/ProductList";
import SortPopover from "@/components/SortPopover";
import productsData from "@/data/products";

const Page = ({ params }) => {
  const { category } = params;
  const memoizedInitialProducts = useMemo(() => productsData, []);
  const [products, setProducts] = useState(memoizedInitialProducts);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  const handleSortChange = useCallback(
    (sortType) => {
      const sortedProducts = [...products];
      switch (sortType) {
        case "price_asc":
          sortedProducts.sort(
            (a, b) =>
              parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
          );
          break;
        case "price_desc":
          sortedProducts.sort(
            (a, b) =>
              parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
          );
          break;
        default:
          sortedProducts.sort((a, b) => a.id - b.id);
          break;
      }
      setProducts(sortedProducts);
      setSortOrder(sortType);
    },
    [products]
  );

  useEffect(() => {
    if (category && category !== selectedCategory) {
      setSelectedCategory(category);
    }
  }, [category, selectedCategory]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setProducts(memoizedInitialProducts);
    } else {
      const filteredProducts = memoizedInitialProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setProducts(filteredProducts);
    }
  }, [selectedCategory, memoizedInitialProducts]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb selectedCategory={selectedCategory} />
        <div className="flex justify-between items-end mb-4">
          <SortPopover onSortChange={handleSortChange} />
        </div>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Page;
