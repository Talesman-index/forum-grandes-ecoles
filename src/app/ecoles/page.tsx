"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Schools from "@/components/Schools";
import BgPattern from "@/components/BgPattern";
import { motion } from "framer-motion";

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-jicom-dark">
      <Nav />
      
      {/* Header Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <BgPattern color="#f03a3d" opacity={0.05} />
        <div className="container-custom relative z-10 text-jicom-dark">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-jicom-red font-black uppercase tracking-[0.3em] text-xs block mb-5">
              — Les Exposants
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none">
              Grandes <br /><span className="text-jicom-red">Écoles</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <Schools />
      
      <Footer />
    </main>
  );
}
