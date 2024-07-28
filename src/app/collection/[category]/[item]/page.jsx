"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import productsData from "@/data/products";

const ItemPage = ({ params }) => {
  const { item } = params;
  const [selectedVariant, setSelectedVariant] = useState("111");

  const product = productsData.find((p) => p.id === Number(item));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="flex flex-col lg:flex-row bg-white p-4 rounded-lg shadow-lg">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg overflow-hidden"
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full aspect-w-3 aspect-h-4">
                <Image
                  src={image}
                  width={600}
                  height={300}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <div className="text-2xl font-bold text-gray-800 mb-4">
            {product.price}
          </div>
          <div className="text-gray-700 mb-4">{product.description}</div>
          <form className="mb-4">
            <label
              htmlFor="variant-select"
              className="block mb-2 text-gray-600"
            >
              Size
            </label>
            <select
              id="variant-select"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.size}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
