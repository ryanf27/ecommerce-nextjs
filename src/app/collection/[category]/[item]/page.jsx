"use client";

import { useRouter } from "next/router";
import { useState, useMemo, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import SortPopover from "@/components/SortPopover";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import productsData from "@/data/products";

const Page = ({ params }) => {
  console.log(params.category);
  const router = useRouter();
  // const { category } = router.query;

  const memoizedInitialProducts = useMemo(() => {
    return productsData.filter((product) => product.category === category);
  }, [category]);

  const [products, setProducts] = useState(memoizedInitialProducts);
  const [sortOrder, setSortOrder] = useState("");

  const handleSortChange = useCallback(
    (sortType) => {
      const sortedProducts = [...products];
      switch (sortType) {
        case "price_asc":
          sortedProducts.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          break;
        case "price_desc":
          sortedProducts.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
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

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        <div className="flex justify-between items-end mb-4">
          <SortPopover onSortChange={handleSortChange} />
        </div>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Page;
