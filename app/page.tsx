"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import FloatingMap from "../components/FloatingMap";
import { ArrowUpRight } from "lucide-react";

const destinationsData = [
  { id: "kandy", imageUrl: "/images/kandy-card.jpg" },
  { id: "sigiriya", imageUrl: "/images/sigiriya-card.jpeg" },
  { id: "ella", imageUrl: "/images/ella-card.jpg" },
  { id: "galle", imageUrl: "/images/galle-card.jpg" },
  { id: "yala", imageUrl: "/images/yala-card.jpg" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Animation timing ---
  const startAnim = isMobile ? 0.3 : 0;
  const midAnim = isMobile ? 0.55 : 0.4;

  // --- Transformations ---
  const scale = useTransform(
    scrollYProgress,
    [startAnim, midAnim, 1],
    [1, 0.65, 0.65],
  );

  const y = useTransform(
    scrollYProgress,
    [startAnim, midAnim, 1],
    ["0vh", isMobile ? "28vh" : "12vh", isMobile ? "28vh" : "12vh"],
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [startAnim, midAnim, 1],
    ["0px", isMobile ? "40px" : "50px", isMobile ? "40px" : "50px"],
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [startAnim, isMobile ? 0.5 : 0.3, 1],
    [0, 0.85, 0.85],
  );

  const textStart = isMobile ? 0.35 : 0.05;
  const textMid = isMobile ? 0.55 : 0.35;

  const textOpacity = useTransform(
    scrollYProgress,
    [textStart, textMid, 1],
    [0, 1, 1],
  );

  const textScale = useTransform(
    scrollYProgress,
    [textStart, textMid, 1],
    [0.8, 1, 1],
  );

  return (
    <main className="relative bg-[#0a0f16]">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* SCROLL TRACK */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 min-h-screen w-full overflow-hidden flex flex-col justify-center">
          {/* SHRINKING FRAME */}
          <motion.div
            style={{
              scale,
              y,
              borderRadius,
              transformOrigin: "top center",
              backgroundImage: "url('/images/background.jpg')",
            }}
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="absolute inset-0 bg-black/10 z-0"></div>

            {/* CONTENT GRID */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12 flex-grow pb-16 lg:pb-0 lg:h-full">
              
              {/* LEFT */}
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

              {/* RIGHT */}
              <div className="flex items-center justify-center w-full mt-4 lg:mt-0">
                <div className="flex flex-col items-center justify-center w-full max-w-[600px] lg:max-w-none">
                  
                  <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[650px] flex items-center justify-center overflow-visible scale-65 sm:scale-100">
                    <FloatingMap />
                  </div>

                  <p className="text-white/70 text-[10px] lg:text-sm tracking-[0.2em] font-light animate-pulse uppercase mt-0 -translate-y-2 lg:translate-y-0 lg:-mt-20 lg:translate-x-32">
                    Click on dots in the map
                  </p>
                </div>
              </div>
            </div>

            {/* DARK OVERLAY */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black z-40 pointer-events-none"
            />

            {/* TITLE */}
            <motion.div
              style={{ opacity: textOpacity, scale: textScale }}
              className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <h1 className="text-white text-5xl lg:text-8xl font-sans font-semibold tracking-widest drop-shadow-2xl text-center">
                Ceylon<span style={{ color: "#d4af37" }}>Sync</span>
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* NEXT SECTION */}
      <div className="relative z-10 min-h-screen bg-[#0a0f16] flex flex-col items-center justify-start pt-32 px-6 text-white">
        <h2 className="text-3xl lg:text-5xl font-serif text-white/90">
          Your next section goes here
        </h2>
      </div>

      {/* PRELOAD IMAGES */}
      <div className="hidden" aria-hidden="true">
        {destinationsData.map((dest) => (
          <img key={dest.id} src={dest.imageUrl} alt="" />
        ))}
      </div>
    </main>
  );
}
