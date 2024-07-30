"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const categories = [
  {
    name: "T-Shirts",
    link: "clothing",
    image: "/shirt.webp",
  },
  {
    name: "Shoes",
    link: "shoes",
    image: "/shoes.webp",
  },
  {
    name: "Shorts",
    link: "jeans",
    image: "/shorts.webp",
  },
  {
    name: "Jackets",
    link: "hoodie",
    image: "/jackets.webp",
  },
  {
    name: "Music",
    link: "vinyl",
    image: "/vinyl.webp",
  },
  {
    name: "Accessories",
    link: "accessories",
    image: "/accessories.webp",
  },
  {
    name: "Skate",
    link: "skate",
    image: "/skate.jpg",
  },
];

const Carousel = () => {
  return (
    <section className="section py-10">
      <div className="container mx-auto text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link href={`/collection/${category.link}`}>
                <div className="cursor-pointer">
                  <div className="w-61 h-62 relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={340}
                      height={340}
                      className="rounded-md"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-lg font-bold">{category.name}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
