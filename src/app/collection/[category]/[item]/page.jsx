"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import productsData from "@/data/products";
import { useCart } from "@/app/context/CartContext";

const ItemPage = ({ params }) => {
  const { item } = params;
  const [selectedVariant, setSelectedVariant] = useState("111");
  const { dispatch } = useCart();

  const product = productsData.find((p) => p.id === Number(item));

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    const variant = product.variants.find((v) => v.id === selectedVariant);
    dispatch({ type: "ADD_TO_CART", payload: { ...product, variant } });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row bg-white p-4 rounded-lg shadow-lg">
        {/* Product Media Section */}
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
                    height={800}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Information */}
        <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <div className="text-2xl font-bold text-gray-800 mb-4">
              {product.price}
            </div>
            <div className="text-gray-700 mb-4">{product.description}</div>

            {/* Product Form */}
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

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              className="bg-[#611122] text-white py-2 px-4 rounded hover:bg-[#8b2b3d] transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
