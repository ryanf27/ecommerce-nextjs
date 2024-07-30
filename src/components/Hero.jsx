import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen mb-12"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
          Welcome to Anarchy Apparel
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-shadow-md">
          Discover the latest trends in fashion and music.
        </p>
        <Link href="/collection/All">
          <p className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Shop Now
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
