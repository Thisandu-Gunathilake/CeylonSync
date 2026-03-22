import Navbar from "../components/Navbar";
import FloatingMap from "../components/FloatingMap";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* LEFT COLUMN */}
        <div className="space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-white/80 tracking-widest text-xs lg:text-sm font-medium uppercase">
            Ascend. Explore. Awaken.
          </p>
          <h1 className="text-white text-4xl lg:text-6xl leading-tight font-serif">
            Your Immersive Journey <br className="hidden lg:block" />
            Through Sri Lanka <br className="hidden lg:block" />
            Begins Here.
          </h1>
          <button
            className="group flex items-center gap-2 px-6 lg:px-8 py-3 rounded-full text-[#3A2E12] font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
            style={{
              background: "linear-gradient(135deg, #d4af37, #f2d388, #d4af37)",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
            }}
          >
            PLAN YOUR VOYAGE
            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex items-center justify-center w-full mt-12 lg:mt-0">
          {/* This Inner Container controls the vertical alignment of both Map + Text */}
          <div className="flex flex-col items-center justify-center w-full max-w-[600px] lg:max-w-none">
            {/* 1. The Map Box */}
            <div className="relative w-full h-[400px] lg:h-[650px] flex items-center justify-center overflow-visible">
              <FloatingMap />
            </div>

            {/* 2. The Text - Now naturally following the center-line of the flex column */}
            <p className="text-white/70 text-xs lg:text-sm tracking-[0.2em] font-light animate-pulse uppercase mt-6 lg:mt-10">
              Click on dots in the map
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
