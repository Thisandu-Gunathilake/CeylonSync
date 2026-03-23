"use client";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion"; 

// 1. Exporting the Data Interface so FloatingMap can use it
export interface LocationData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  position: { top: string; left: string };
}

interface LocationCardProps {
  data: LocationData;
  onClose: () => void;
}

// 2. EXPORT DEFAULT is crucial here to prevent that exact error!
export default function LocationCard({ data, onClose }: LocationCardProps) {
  return (
    <motion.div
      /* Entrance and Exit animations */
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-72 rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/10 p-5 shadow-2xl overflow-visible"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 p-1 rounded-full bg-slate-800 border border-white/10 text-white/70 hover:text-white transition-colors z-50 hover:scale-110"
      >
        <X className="w-5 h-5" />
      </button>

      {/* IMAGE SECTION */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-5">
        <Image
          src={data.imageUrl}
          alt={data.name}
          fill
          priority
          className="object-cover"
          sizes="(max-w-768px) 100vw, 300px"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="space-y-2 text-left">
        <h2 className="text-white font-bold text-xl uppercase leading-tight font-serif tracking-tight">
          {data.name}:{" "}
          <span className="font-medium capitalize text-lg tracking-normal text-white/90 font-sans">
            {data.tagline}
          </span>
        </h2>

        <p className="text-slate-200 text-sm leading-relaxed pb-3">
          {data.description}
        </p>

        <a
          href="#"
          className="inline-block text-[#d4af37] underline decoration-1 underline-offset-4 font-semibold text-sm tracking-wide hover:text-[#f2d388] transition-colors"
        >
          DISCOVER {data.name}
        </a>
      </div>
    </motion.div>
  );
}
