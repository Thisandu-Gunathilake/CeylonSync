"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // 1. Added icons for the mobile menu

export default function Navbar() {
  // 2. Added state to track if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Adjusted top and px spacing slightly for smaller phone screens
    <nav className="fixed top-4 sm:top-8 left-0 w-full z-50 px-4 sm:px-6 lg:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-xl sm:text-2xl font-semibold flex items-center gap-2 z-50">
        CeylonSync
      </div>

      {/* Centered Links (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 shadow-lg">
        <a href="#" className="hover:text-white transition">
          Search
        </a>
        <a href="#" className="hover:text-white transition">
          Explore
        </a>
        <a href="#" className="hover:text-white transition">
          Destinations
        </a>
        <a href="#" className="hover:text-white transition">
          About Us
        </a>
      </div>

      {/* Right Side buttons */}
      <div className="flex items-center gap-4 sm:gap-6 z-50">
        <button className="text-white hover:text-white/70 hidden md:block">
          Login
        </button>

        <button
          className="px-5 py-2 sm:px-6 sm:py-2 rounded-full text-[#3A2E12] font-semibold text-xs sm:text-sm transition-transform hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #f2d388 100%)",
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
          }}
        >
          Plan Now
        </button>

        {/* 3. Mobile Menu Toggle Button (Visible only on mobile) */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* 4. The Mobile Dropdown Menu */}
      {/* This only renders when the hamburger icon is clicked (isOpen === true) */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#0f2027]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl md:hidden">
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-[#d4af37]"
          >
            Search
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-[#d4af37]"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-[#d4af37]"
          >
            Destinations
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-[#d4af37]"
          >
            About Us
          </a>

          <hr className="border-white/10" />

          <button className="text-white text-lg font-medium text-left hover:text-[#d4af37]">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
