import Navbar from "../components/Navbar";

export default function Home() {
  return (
    // 1. Combined background gradient directly into the main tag
    <main className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1e3a4a] via-[#0f2027] to-[#203a43] overflow-hidden">
      
      {/*Importing navbar*/}
      <Navbar />

      {/* 3. Simple CSS Grid with 2-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12"></div>
      
    </main>
  );
}
