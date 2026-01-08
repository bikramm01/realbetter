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
        fixed top-4 left-0 right-0 z-50 mx-auto overflow-hidden
        transition-all duration-500
        ${
          scrolled
            ? "h-14 bg-white shadow-md rounded-full w-[90%] md:w-[80%]"
            : "h-20 bg-transparent rounded-full w-full"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">

        {/* LOGO */}
        <div className="flex-shrink-0">
          <a href="/subscription">
            <img
              src={scrolled ? "/black.png" : "/white.png"}
              alt="RealBetter Logo"
              className="h-12 md:h-14 transition-all duration-500"
            />
          </a>
        </div>

        {/* DESKTOP MENU — HIDDEN ON MOBILE */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { label: "How It Works", href: "#how" },
            { label: "Features", href: "#features" },
            { label: "Demo", href: "#demo" },
            { label: "Pricing", href: "#pricing" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-red-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <a
            href="#pricing"
            className={`inline-flex items-center justify-center rounded-full font-semibold px-6 py-2.5 shadow-md transition-all duration-300 ${
              scrolled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-red-500/90 text-white hover:bg-red-600"
            }`}
          >
            Subscribe Now
          </a>
        </div>

      </div>
    </header>
  );
}
