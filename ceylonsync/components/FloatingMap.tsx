"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LocationCard, { LocationData } from "./LocationCard";

// 1. Data for map locations 
const destinationsData: LocationData[] = [
  {
    id: "kandy",
    name: "KANDY",
    tagline: "The Hill Capital",
    description: "Explore historic temples and the cultural heart of Sri Lanka.",
    imageUrl: "/images/kandy-card.png", 
    position: { top: "53%", left: "60%" }, 
  },

  {
    id: "sigiriya",
    name: "SIGIRIYA",
    tagline: "The Lion Rock",
    description: "Climb the ancient rock fortress and discover the palace in the sky.",
    imageUrl: "/images/sigiriya-card.png", 
    position: { top: "40%", left: "60%" },
  },

  {
    id: "ella",
    name: "ELLA",
    tagline: "Nine Arches Bridge",
    description: "Experience the scenic beauty of the hill country and visit the famous Nine Arch Bridge.",
    imageUrl: "/images/ella-card.png", 
    position: { top: "64%", left: "67%" },
  }

  ,

  {
    id: "Galle",
    name: "GALLE",
    tagline: "Historic Galle Fort",
    description: "Explore the UNESCO World Heritage Site and experience the charm of this coastal city.",
    imageUrl: "/images/galle-card.png", 
    position: { top: "84%", left: "49%" },
  }
];

export default function FloatingMap() {
  // 2. State to track which dot was clicked
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  // 3. Find the data for the clicked location to pass to the card
  const activeLocationData = destinationsData.find(
    (loc) => loc.id === selectedLocationId
  );

  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-visible">
      {/* Sri Lankan Map */}
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full flex items-center justify-center"
      >
        {/* WRAPPER: We moved your sizing/scaling classes here so the dots and image scale together perfectly */}
        <div className="relative w-[120%] mx-auto -translate-x-20 lg:translate-x-0 lg:w-[120%] max-w-[600px] lg:max-w-[800px] scale-125">
          
          {/* THE MAP IMAGE */}
          <Image
            src="/images/map.png"
            alt="Sri Lanka Map"
            width={800}
            height={800}
            priority
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain"
          />

          {/* THE GLOWING DOTS */}
          {destinationsData.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocationId(location.id)}
              className="absolute z-20 group -translate-x-1/2 -translate-y-1/2"
              style={{ top: location.position.top, left: location.position.left }}
            >
              {/* Pulsing UI */}
              <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-[#d4af37] border-2 border-[#1e3a4a] group-hover:scale-125 transition-transform duration-300 shadow-lg"></span>
              </span>
            </button>
          ))}

          {/* THE POPUP CARD */}
          {activeLocationData && (
            <div 
              className="absolute z-50 w-max -translate-x-1/2 mt-4 lg:translate-x-4 lg:-translate-y-1/2 lg:mt-0"
              style={{ 
                top: activeLocationData.position.top, 
                left: activeLocationData.position.left,
              }}
            >
              <LocationCard 
                data={activeLocationData} 
                onClose={() => setSelectedLocationId(null)} 
              />
            </div>
          )}
          
        </div>
      </motion.div>
    </div>
  );
}