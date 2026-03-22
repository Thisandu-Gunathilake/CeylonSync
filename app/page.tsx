import Navbar from "../components/Navbar";
import FloatingMap from "../components/FloatingMap";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    // style attribute to load your image
    <main
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* Added a subtle dark overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/*Importing navbar*/}
      <Navbar />

      {/*Simple CSS Grid with 2-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* LEFT COLUMN */}
        <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-white/80 tracking-widest text-xs lg:text-sm font-medium uppercase">
            Ascend. Explore. Awaken.
          </p>

          <h1 className="text-white text-4xl lg:text-6xl leading-tight font-serif">
            Your Immersive Journey <br className="hidden lg:block" />
            Through Sri Lanka <br className="hidden lg:block" />
            Begins Here.
          </h1>

          {/* Plan your voyage button */}
          <button
            className="group flex items-center gap-2 px-6 lg:px-8 py-3 mt-4 lg:mt-0 rounded-full text-[#3A2E12] font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
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
        <div className="flex flex-col items-center w-full mt-8 lg:mt-0">
          <div className="h-[350px] lg:h-[600px] w-full">
            <FloatingMap />
          </div>

          <p className="relative z-20 w-full text-right pr-30 lg:pr-15 text-white/70 text-sm -mt-8 lg:-mt-20 tracking-widest font-light animate-pulse">
            Click on dots in the map
          </p>
        </div>
      </div>
    </main>
  );
}
