"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    name: "T-Shirts",
    link: "https://www.impericon.com/collections/t-shirts/",
    image: "/shirt.webp",
  },
  {
    name: "Shoes",
    link: "https://www.impericon.com/collections/shoes/",
    image: "/shirt.webp",
  },
  {
    name: "Shorts",
    link: "https://www.impericon.com/collections/shorts/",
    image: "/shirt.webp",
  },
  {
    name: "Jackets",
    link: "https://www.impericon.com/collections/jackets/",
    image: "/shirt.webp",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCategory = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Math.max(categories.length - 4, 0)
    );
  };

  const nextCategory = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Math.max(categories.length - 4, 0) ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="section py-10">
      <div className="container mx-auto text-center">
        <div className="relative">
          <button
            onClick={prevCategory}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <FaChevronLeft />
          </button>
          <div className="inline-block mx-4 overflow-hidden">
            <div className="flex space-x-4">
              {categories
                .slice(currentIndex, currentIndex + 4)
                .map((category, index) => (
                  <Link key={index} href={category.link}>
                    <div className="cursor-pointer">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={570}
                        height={570}
                        className="w-full h-auto max-w-xs"
                      />
                      <div className="text-center mt-2">
                        <p className="text-lg font-bold">{category.name}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <button
            onClick={nextCategory}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
