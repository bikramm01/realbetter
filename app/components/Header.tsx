"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-500
        ${scrolled 
          ? "h-14 bg-white shadow-md rounded-xl w-[90%] md:w-[80%]" 
          : "h-20 bg-transparent w-full"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src={scrolled ? "/black.png" : "/white.png"}
              alt="RealBetter Logo"
              className="h-12 md:h-16 transition-all duration-500"
            />
          </a>
        </div>

       

        {/* Book Demo CTA */}
        <div className="flex items-center">
  <a
    href="#book-demo"
    className={`inline-flex items-center justify-center rounded-full font-semibold px-6 py-2.5 shadow-md transition-all duration-300 ${
      scrolled
        ? "bg-red-600 text-white hover:bg-red-700"
        : "bg-red-500/90 text-white hover:bg-red-600"
    }`}
  >
    Book Demo
  </a>
</div>

      </div>
    </header>
  );
}
