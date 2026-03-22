import Navbar from "../components/Navbar";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    // 1. Combined background gradient directly into the main tag
    <main className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1e3a4a] via-[#0f2027] to-[#203a43] overflow-hidden">
      {/*Importing navbar*/}
      <Navbar />

      {/* 3. Simple CSS Grid with 2-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12"></div>

      {/* LEFT COLUMN */}
      <div className="space-y-6 mt-24 lg:mt-0">
        <p className="text-white/80 tracking-widest text-sm font-medium uppercase">
          Ascend. Explore. Awaken.
        </p>

        <h1 className="text-white text-5xl lg:text-7xl leading-tight font-serif">
          Your Immersive Journey <br />
          Through Sri Lanka <br />
          Begins Here.
        </h1>

        {/* Plan your voyage button */}
        <button
          className="group flex items-center gap-2 px-8 py-3 rounded-full text-[#3A2E12] font-semibold tracking-wide hover:scale-105 transition-transform"
          style={{
            background: "linear-gradient(135deg, #d4af37, #f2d388, #d4af37)",
            boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
          }}
        >
          PLAN YOUR VOYAGE
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </main>
  );
}
