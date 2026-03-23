"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import FloatingMap from "../components/FloatingMap";
import { ArrowUpRight } from "lucide-react";

// 1. Destination data for pre-loading (must match the images used in FloatingMap)
const destinationsData = [
  { id: "kandy", imageUrl: "/images/kandy-card.jpg" },
  { id: "sigiriya", imageUrl: "/images/sigiriya-card.jpeg" },
  { id: "ella", imageUrl: "/images/ella-card.jpg" },
  { id: "Galle", imageUrl: "/images/galle-card.jpg" },
  { id: "Yala", imageUrl: "/images/yala-card.jpg" },
];

export default function Home() {
  // SCROLL TRACKING REFERENCES
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ANIMATION TRANSFORMATIONS

  // Shrink the frame to 65% size (0% to 40% scroll), then LOCK it at 0.65 until the end (100%)
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.65, 0.65]);

  // Push the frame down slightly, then LOCK it at 12vh
  const y = useTransform(scrollYProgress, [0, 0.4, 1], ["0vh", "12vh", "12vh"]);

  // Curve the corners, then LOCK them at 50px
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0px", "50px", "50px"],
  );

  // Fades in the black overlay to 85% opacity, then LOCKS it at 0.85 for the rest of the track
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0.85, 0.85],
  );

  // Fades in the CeylonSync text, then LOCKS it at 100% opacity and full size
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.35, 1], [0, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0.05, 0.35, 1], [0.8, 1, 1]);

  return (
    <main className="relative bg-[#0a0f16]">
      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* THE SCROLL TRACK: 300vh creates the scrollable distance. 
          Inline position: "relative" fixes the Framer Motion static position warning. */}
      <div
        ref={containerRef}
        className="relative h-[300vh]"
        style={{ position: "relative" }}
      >
        {/* THE STICKY CAMERA: Keeps the hero frame in view while scrolling */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center">
          {/* THE SHRINKING FRAME */}
          <motion.div
            style={{
              scale,
              y,
              borderRadius,
              transformOrigin: "top center",
              backgroundImage: "url('/images/background.jpg')",
            }}
            className="relative w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-black/10 z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 h-full">
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
                    background:
                      "linear-gradient(135deg, #d4af37, #f2d388, #d4af37)",
                    boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
                  }}
                >
                  PLAN YOUR VOYAGE
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex items-center justify-center w-full mt-12 lg:mt-0">
                <div className="flex flex-col items-center justify-center w-full max-w-[600px] lg:max-w-none">
                  {/* 1. The Map Box */}
                  <div className="relative w-full h-[400px] lg:h-[650px] flex items-center justify-center overflow-visible">
                    <FloatingMap />
                  </div>

                  {/* Click on dots in the map */}
                  <p className="text-white/70 text-xs lg:text-sm tracking-[0.2em] font-light animate-pulse uppercase mt-6 lg:-mt-20 lg:translate-x-32">
                    Click on dots in the map
                  </p>
                </div>
              </div>
            </div>

            {/* ANIMATED BLACK OVERLAY */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black z-40 pointer-events-none"
            />

            {/* ANIMATED CEYLONSYNC TEXT */}
            <motion.div
              style={{ opacity: textOpacity, scale: textScale }}
              className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <h1 className="text-white text-5xl lg:text-8xl font-serif tracking-widest uppercase shadow-black drop-shadow-2xl">
                CeylonSync
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* NORMAL SCROLLING CONTENT RESUMES HERE */}
      <div className="relative z-10 min-h-screen bg-[#0a0f16] flex flex-col items-center justify-start pt-32 px-6 text-white">
        <h2 className="text-3xl lg:text-5xl font-serif text-white/90">
          Your next section goes here
        </h2>
      </div>

      {/* HIDDEN PRE-LOADER: This forces the browser to download the card images 
          immediately so they appear instantly when a dot is clicked. */}
      <div className="hidden" aria-hidden="true">
        {destinationsData.map((dest) => (
          <img key={dest.id} src={dest.imageUrl} alt="" />
        ))}
      </div>
    </main>
  );
}
