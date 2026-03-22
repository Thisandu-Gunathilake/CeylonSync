"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-semibold flex items-center gap-2">
        CeylonSync
      </div>

      {/* Centered Links*/}
      <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 shadow-lg">
        <a href="#" className="hover:text-white transition">
          Experiences
        </a>
        <a href="#" className="hover:text-white transition">
          Wellness
        </a>
        <a href="#" className="hover:text-white transition">
          Journeys
        </a>
        <a href="#" className="hover:text-white transition">
          About Us
        </a>
      </div>

      {/* Right Side buttons */}
      <div className="flex items-center gap-6">
        <button className="text-white hover:text-white/70 hidden md:block">
          Login
        </button>
        <button
          className="px-6 py-2 rounded-full text-[#3A2E12] font-semibold text-sm transition-transform hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #f2d388 100%)",
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
          }}
        >
          Plan Now
        </button>
      </div>
    </nav>
  );
}
