"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-semibold flex items-center gap-2">
        CeylonSync
      </div>
    </nav>
  );
}
