"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingMap() {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-visible">
      {/* Sri Lankan Map */}
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full flex items-center justify-center"
      >
        <Image
          src="/images/map.png"
          alt="Sri Lanka Map"
          width={800}
          height={800}
          priority
          className="w-[120%] mx-auto -translate-x-20 lg:translate-x-0 lg:w-[120%] h-auto max-w-[600px] lg:max-w-[800px] scale-125 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain"
        />
      </motion.div>
    </div>
  );
}