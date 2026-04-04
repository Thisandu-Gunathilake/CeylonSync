"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  ArrowUpRight,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const destinationsData = [
  {
    id: "kandy",
    imageUrl: "/images/kandy-card.jpg",
    desc: "The sacred city of kings, home to the Temple of the Tooth and lush botanical gardens. Experience the spiritual heart of the island where ancient traditions thrive amidst emerald hills.",
  },
  {
    id: "sigiriya",
    imageUrl: "/images/sigiriya-card.jpeg",
    desc: "A majestic ancient rock fortress rising from the central plains. Wander through the lion's paws to discover mirror walls and frescoes that have watched over the jungle for centuries.",
  },
  {
    id: "ella",
    imageUrl: "/images/ella-card.jpg",
    desc: "A mist-wrapped mountain escape famous for the Nine Arch Bridge. Hike through vibrant tea estates and breathe in the cool mountain air of Sri Lanka's most scenic village.",
  },
  {
    id: "galle",
    imageUrl: "/images/galle-card.jpg",
    desc: "A Dutch colonial fort city where history meets the turquoise waves. Walk the ramparts at sunset and explore a labyrinth of boutiques and cafes within the living fortress.",
  },
  {
    id: "yala",
    imageUrl: "/images/yala-card.jpg",
    desc: "An untamed wilderness sanctuary boasting the highest leopard density in the world. Witness nature in its rawest form where elephants roam free against the backdrop of the Indian Ocean.",
  },
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

  const startAnim = isMobile ? 0.2 : 0;
  const midAnim = isMobile ? 0.8 : 0.7;

  const scale = useTransform(
    scrollYProgress,
    [startAnim, midAnim, 1],
    [1, 0.65, 0.65]
  );
  const y = useTransform(
    scrollYProgress,
    [startAnim, midAnim, 1],
    ["0vh", isMobile ? "28vh" : "12vh", isMobile ? "28vh" : "12vh"]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [startAnim, midAnim, 1],
    ["0px", isMobile ? "40px" : "50px", isMobile ? "40px" : "50px"]
  );

  const blackOutPoint = isMobile ? 0.10 : 0.05;

  const contentFadeOut = useTransform(
    scrollYProgress,
    [startAnim, blackOutPoint],
    [1, 0]
  );

  const pitchBlackOverlay = useTransform(
    scrollYProgress,
    [startAnim, blackOutPoint],
    [0, 1]
  );

  const textStart = blackOutPoint; 
  const textMid = isMobile ? 0.25 : 0.15; 

  const textOpacity = useTransform(
    scrollYProgress,
    [textStart, textMid, 1],
    [0, 1, 1]
  );
  const textScale = useTransform(
    scrollYProgress,
    [textStart, textMid, 1],
    [0.8, 1, 1]
  );

  return (
    <main id="top" className="relative bg-[#ffffff]">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 min-h-screen w-full overflow-hidden flex flex-col justify-center">
          <motion.div
            style={{
              scale,
              y,
              borderRadius,
              transformOrigin: "top center",
              backgroundImage: isMobile
                ? "url('/images/backgroundPhone.png')"
                : "url('/images/background.png')",
            }}
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.25)] flex flex-col bg-black"
          >
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <motion.div 
              style={{ opacity: contentFadeOut }}
              className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center flex-grow h-full"
            >
              <div className="space-y-4 lg:space-y-6 flex flex-col items-center text-center max-w-3xl">
                <p className="text-white/80 tracking-widest text-xs lg:text-sm font-medium uppercase italic">
                  Ascend. Explore. Awaken.
                </p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl leading-tight font-serif">
                  Your Immersive Journey <br className="hidden sm:block" />{" "}
                  Through Sri Lanka <br className="hidden sm:block" /> Begins
                  Here.
                </h1>
                <button
                  className="group flex items-center gap-2 px-8 py-4 mt-4 rounded-full text-[#3A2E12] font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37, #f2d388, #d4af37)",
                    boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
                  }}
                >
                  PLAN YOUR VOYAGE{" "}
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: pitchBlackOverlay }}
              className="absolute inset-0 bg-[#000000] z-40 pointer-events-none"
            />

            <motion.div
              style={{ opacity: textOpacity, scale: textScale }}
              className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <h1 className="text-white text-5xl lg:text-8xl font-sans font-semibold tracking-widest uppercase drop-shadow-2xl text-center">
                Ceylon<span style={{ color: "#d4af37" }}>Sync</span>
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DISCOVER SECTION */}
      <section
        id="discover"
        className="relative z-10 bg-[#F9F7F2] py-24 px-6 lg:px-12 border-t border-black/5 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0a0f16] text-4xl lg:text-6xl font-serif mb-6 italic">
              Discover the Soul of the Island
            </h2>
            <div className="h-1 w-24 bg-[#d4af37] mx-auto"></div>
          </motion.div>

          {destinationsData.map((dest, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-[40%] overflow-hidden rounded-2xl shadow-xl h-[250px] lg:h-[320px]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={dest.imageUrl}
                    alt={dest.id}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-[60%] space-y-6 flex flex-col items-start text-left">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                      {dest.id}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-serif capitalize text-[#0a0f16]">
                    {dest.id}
                  </h3>

                  <p className="text-[#0a0f16]/70 text-lg leading-relaxed font-sans max-w-xl">
                    {dest.desc}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-bold tracking-widest text-[#0a0f16] uppercase border-b-2 border-[#d4af37] pb-1 hover:text-[#d4af37] transition-all">
                    Explore Details <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#0a0f16] text-white pt-20 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="text-2xl font-sans font-bold tracking-tight">
                Ceylon<span style={{ color: "#d4af37" }}>Sync</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Crafting immersive digital journeys through the heart of Sri
                Lanka. Discover the island&apos;s soul with our curated travel
                experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-[#d4af37] transition-colors group"
                >
                  <Instagram className="w-5 h-5 group-hover:text-[#0a0f16]" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-[#d4af37] transition-colors group"
                >
                  <Facebook className="w-5 h-5 group-hover:text-[#0a0f16]" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-[#d4af37] transition-colors group"
                >
                  <Twitter className="w-5 h-5 group-hover:text-[#0a0f16]" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Search Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#discover"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Explore Map
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Plan Your Voyage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Travel Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-6">Get in Touch</h4>
              <div className="space-y-4 text-sm text-white/60">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>+94 70 449 0944</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>thisandugunathilake12345@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
            <p>© 2026 CeylonSync. All Rights Reserved.</p>
            <p>Designed for the Modern Explorer</p>
          </div>
        </div>
      </footer>

      <div className="hidden" aria-hidden="true">
        {destinationsData.map((dest) => (
          <img key={dest.id} src={dest.imageUrl} alt="" />
        ))}
      </div>
    </main>
  );
}