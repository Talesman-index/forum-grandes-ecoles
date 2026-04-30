"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Register from "@/components/Register";
import BgPattern from "@/components/BgPattern";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-jicom-dark">
      <Nav />
      
      {/* Header Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-jicom-yellow">
        <BgPattern color="#f03a3d" opacity={0.08} />
        <div className="container-custom relative z-10 text-jicom-red">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-jicom-red font-black uppercase tracking-[0.3em] text-xs block mb-5">
              — Votre Place
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none">
              Inscription <br /><span className="text-white/40">2026</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <Register />
      
      <Footer />
    </main>
  );
}
