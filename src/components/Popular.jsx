"use client";

import React from "react";
import Image from "next/image";

const logos = [
  {
    href: "https://www.impericon.com/collections/sleep-token/",
    src: "/sleep.webp",
    alt: "Sleep Token",
  },
  {
    href: "https://www.impericon.com/collections/metallica/",
    src: "/metallica.webp",
    alt: "Metallica",
  },
  {
    href: "https://www.impericon.com/collections/bad-omens/",
    src: "/badomens.webp",
    alt: "Bad Omens",
  },
  {
    href: "https://www.impericon.com/collections/nirvana/",
    src: "/nirvana.webp",
    alt: "Nirvana",
  },
  {
    href: "https://www.impericon.com/collections/slipknot/",
    src: "/slipknot.webp",
    alt: "Slipknot",
  },
  {
    href: "https://www.impericon.com/collections/lorna-shore/",
    src: "/lorna.avif",
    alt: "Lorna Shore",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/blink.webp",
    alt: "Blink-182",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/inflames.webp",
    alt: "In flames",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/aliceinchains.png",
    alt: "Alice In Chains",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/a7x.webp",
    alt: "Avenged Sevenfold",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/ghost.png",
    alt: "Ghost",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/korn.avif",
    alt: "Korn",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/pearljam.png",
    alt: "Pearl Jam",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/slayer.png",
    alt: "Slayer",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/stp.png",
    alt: "Stone Temple Pilots",
  },
  {
    href: "https://www.impericon.com/collections/blink-182/",
    src: "/trivium.webp",
    alt: "Trivium",
  },
];

const Popular = () => {
  return (
    <div className="bg-gray-100 px-20 py-20">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h3 className="text-4xl font-medium">Most Popular</h3>
        </header>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              className="group block w-24 h-20 p-2 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            href="/pages/bands-brands"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popular;
