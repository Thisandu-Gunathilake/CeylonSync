"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
      {/* THE NAV CONTENT */}
      <nav className="relative w-full py-2 px-4 sm:px-6 lg:px-12 flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-white text-xl sm:text-2xl font-sans font-semibold tracking-tight">
          Ceylon<span style={{ color: "#d4af37" }}>Sync</span>
        </div>

        {/* Centered Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90">
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
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="text-white hover:text-white/70 hidden md:block text-sm font-medium">
            Login
          </button>

          <button
            className="px-5 py-2 sm:px-6 sm:py-2 rounded-full text-[#3A2E12] font-semibold text-xs sm:text-sm transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f2d388 100%)",
            }}
          >
            Plan Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-24 left-4 right-4 bg-black/85 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl md:hidden">
            <a href="#" className="text-white text-lg font-medium">
              Search
            </a>
            <a href="#" className="text-white text-lg font-medium">
              Explore
            </a>
            <a href="#" className="text-white text-lg font-medium">
              Destinations
            </a>
            <a href="#" className="text-white text-lg font-medium">
              About Us
            </a>
            <hr className="border-white/10" />
            <button className="text-white text-lg font-medium text-left">
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
