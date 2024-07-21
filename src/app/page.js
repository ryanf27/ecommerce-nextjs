import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import React from "react";
import Popular from "@/components/Popular";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Popular />
      <Footer />
    </>
  );
}
