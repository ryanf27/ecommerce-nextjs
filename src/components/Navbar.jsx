import React from "react";
import Link from "next/link";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-stone-950  text-white">
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
            <Image
              src={"/anarchy.png"}
              width={220}
              height={180}
              alt="logo"
            ></Image>
          </Link>
        </div>
      </div>
      <div className="flex justify-center text-center px-4 py-2 border-t-2 border-gray-200 w-4/5 mx-auto">
        <ul className="flex space-x-4">
          <li className="group relative hover:text-gray-400">
            <Link href="/">New</Link>
          </li>
          <li className="group relative hover:text-gray-400">
            <Link href="/about">Clothing</Link>
          </li>
          <li className="group relative hover:text-gray-400">
            <Link href="/about">Shoes</Link>
          </li>
          <li className="group relative hover:text-gray-400">
            <Link href="/about">Vinyl & CDs</Link>
          </li>
          <li className="group relative hover:text-gray-400">
            <Link href="/about">Bands</Link>
          </li>
          <li className="group relative">
            <button className="hover:text-gray-400">Shop</button>
            <div className="absolute hidden group-hover:block bg-gray-500 p-4 mt-2 space-y-2 rounded shadow-lg">
              <Link href="/new-arrivals">
                <p className="block hover:text-gray-400">New Arrivals</p>
              </Link>
              <Link href="/men">
                <p className="block hover:text-gray-400">Men</p>
              </Link>
              <Link href="/women">
                <p className="block hover:text-gray-400">Women</p>
              </Link>
              <Link href="/accessories">
                <p className="block hover:text-gray-400">Accessories</p>
              </Link>
              <Link href="/sale">
                <p className="block hover:text-gray-400">Sale</p>
              </Link>
            </div>
          </li>
          <li className="group relative">
            <button className="hover:text-gray-400">Genres</button>
            <div className="absolute hidden group-hover:block bg-gray-500 p-4 mt-2 space-y-2 rounded shadow-lg">
              <Link href="/metal">
                <p className="block hover:text-gray-400">Metal</p>
              </Link>
              <Link href="/rock">
                <p className="block hover:text-gray-400">Rock</p>
              </Link>
              <Link href="/pop">
                <p className="block hover:text-gray-400">Pop</p>
              </Link>
              <Link href="/punk">
                <p className="block hover:text-gray-400">Punk</p>
              </Link>
            </div>
          </li>
          <li className="group relative">
            <button className="hover:text-gray-400">More</button>
            <div className="absolute hidden group-hover:block bg-gray-500 p-4 mt-2 space-y-2 rounded shadow-lg">
              <Link href="/entertainment">
                <p className="block hover:text-gray-400">Entertainment</p>
              </Link>
              <Link href="/collectibles">
                <p className="block hover:text-gray-400">Collectibles</p>
              </Link>
              <Link href="/home-decor">
                <p className="block hover:text-gray-400">Home Decor</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
