"use client";

import React from "react";
import Link from "next/link";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  const categories = [
    "Hoodie",
    "Clothing",
    "Shoes",
    "Vinyl",
    "Jeans",
    "More",
    "All",
  ];

  return (
    <nav className="bg-stone-950 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <ul className="flex space-x-4">
          <li>Man</li>
          <li>Woman</li>
          <li>All</li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="/wishlist">
            <CiHeart className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link href="/cart">
            <CiShoppingCart className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link href="/user">
            <CiUser className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-around px-4 py-2">
        <div className="relative flex items-center">
          <CiSearch className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="pl-10 pr-4 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Search..."
          />
        </div>
        <div className="ml-4">
          <Link href="/">
            <Image src={"/anarchy.png"} width={220} height={180} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center text-center px-4 py-2 border-t-2 border-gray-200 w-4/5 mx-auto">
        <ul className="flex space-x-4">
          {categories.map((category) => (
            <li key={category} className="group relative hover:text-gray-400">
              <Link href={`/collection/${category}`}>
                <button>{category}</button>
              </Link>

              {category === "More" && (
                <div className="absolute hidden group-hover:block bg-gray-500 p-4 mt-2 space-y-2 rounded shadow-lg">
                  <button onClick={() => onCategoryChange("Entertainment")}>
                    <p className="block hover:text-gray-400">Entertainment</p>
                  </button>
                  <button onClick={() => onCategoryChange("Collectibles")}>
                    <p className="block hover:text-gray-400">Collectibles</p>
                  </button>
                  <button onClick={() => onCategoryChange("Home Decor")}>
                    <p className="block hover:text-gray-400">Home Decor</p>
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
