"use client";
import Image from "next/image"; 

export default function FloatingMap() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Sri Lankan Map */}
      <Image
        src="/images/map.png"
        alt="Sri Lanka Map"
        width={800} 
        height={800}
        priority 
        className="w-full lg:w-[120%] h-auto max-w-[800px] scale-110 lg:scale-125 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain"
      />
    </div>
  );
}
