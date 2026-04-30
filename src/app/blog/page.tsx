"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import BgPattern from "@/components/BgPattern";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-jicom-dark">
      <Nav />
      
      {/* Header Section for Blog Page */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-jicom-red">
        <BgPattern color="white" opacity={0.09} />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-jicom-yellow font-black uppercase tracking-[0.3em] text-xs block mb-5">
              — Notre Actualité
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white leading-none">
              Blog & <br /><span className="text-jicom-dark/30">Conseils</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <Blog />
      
      <Footer />
    </main>
  );
}
