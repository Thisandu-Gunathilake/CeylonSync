"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll position to swap colors
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic Styles based on scroll
  const navStyles = isScrolled 
    ? "bg-white/80 backdrop-blur-xl border-black/5 shadow-md" 
    : "bg-white/5 backdrop-blur-xl border-white/10 shadow-lg";
  
  const textColor = isScrolled ? "text-[#0a0f16]" : "text-white";

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] border-b transition-all duration-300 ${navStyles}`}>
      
      {/* THE NAV CONTENT */}
      <nav className="relative w-full py-2 px-4 sm:px-6 lg:px-12 flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo - Swaps from white to dark navy, "Sync" stays gold */}
        <div className={`text-xl sm:text-2xl font-sans font-semibold tracking-tight transition-colors duration-300 ${textColor}`}>
          Ceylon<span style={{ color: "#d4af37" }}>Sync</span>
        </div>

        {/* Centered Links (Desktop) */}
        <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full border transition-all duration-300 
          ${isScrolled ? "bg-black/5 border-black/5" : "bg-white/5 border-white/10"}`}>
          {["Search", "Explore", "Destinations", "About Us"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className={`transition-colors ${textColor} ${isScrolled ? "hover:text-[#d4af37]" : "hover:text-white"}`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Side buttons */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className={`hidden md:block text-sm font-medium transition-colors duration-300 ${textColor} hover:opacity-70`}>
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
            className={`md:hidden p-1 transition-colors duration-300 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className={`absolute top-24 left-4 right-4 backdrop-blur-2xl border rounded-2xl p-6 flex flex-col gap-6 shadow-2xl md:hidden 
            ${isScrolled ? "bg-white/95 border-black/5" : "bg-black/85 border-white/10"}`}>
            {["Search", "Explore", "Destinations", "About Us"].map((link) => (
              <a key={link} href="#" className={`text-lg font-medium ${isScrolled ? "text-[#0a0f16]" : "text-white"}`}>
                {link}
              </a>
            ))}
            <hr className={isScrolled ? "border-black/5" : "border-white/10"} />
            <button className={`text-lg font-medium text-left ${isScrolled ? "text-[#0a0f16]" : "text-white"}`}>
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}