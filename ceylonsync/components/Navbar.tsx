"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-semibold flex items-center gap-2">
        CeylonSync
      </div>

      {/* Center Links */}
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
    </nav>
  );
}
