"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import SortPopover from "@/components/SortPopover";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import productsData from "@/data/products";

const HomePage = () => {
  const memoizedInitialProducts = useMemo(() => productsData, []);
  const [products, setProducts] = useState(memoizedInitialProducts);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setProducts(memoizedInitialProducts);
    } else {
      const filteredProducts = memoizedInitialProducts.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filteredProducts);
    }
  }, [selectedCategory, memoizedInitialProducts]);

  return (
    <>
      <Navbar onCategoryChange={handleCategoryChange} />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb selectedCategory={selectedCategory} />
        <div className="flex justify-between items-end mb-4">
          <SortPopover onSortChange={handleSortChange} />
        </div>
        <ProductList products={products} />
      </div>
      <NewsletterSubscription />
      <Footer />
    </>
  );
};

export default HomePage;
