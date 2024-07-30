"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import CartModal from "@/components/CartModal";

const Navbar = () => {
  const { cart, dispatch } = useCart();
  const categories = ["All", "Hoodie", "Clothing", "Shoes", "Vinyl", "Jeans"];
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-stone-950 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <ul className="flex space-x-4">
          <li>Man</li>
          <li>Woman</li>
          <li>All</li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" className="flex items-center">
            <CiHeart className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          </Link>
          <div className="relative flex items-center">
            <button
              onClick={toggleCartModal}
              className="relative flex items-center"
            >
              <CiShoppingCart className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
          <Link href="/user" className="flex items-center">
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
            </li>
          ))}
        </ul>
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={toggleCartModal}
        cartItems={cart}
        dispatch={dispatch}
      />
    </nav>
  );
};

export default Navbar;
