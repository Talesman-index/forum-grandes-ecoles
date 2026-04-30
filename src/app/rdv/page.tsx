"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Rdv from "@/components/Rdv";
import BgPattern from "@/components/BgPattern";
import { motion } from "framer-motion";

export default function RdvPage() {
  return (
    <main className="min-h-screen bg-jicom-dark">
      <Nav />
      
      {/* Header Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-jicom-red">
        <BgPattern color="white" opacity={0.09} />
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-jicom-yellow font-black uppercase tracking-[0.3em] text-xs block mb-5">
              — Coaching Personnalisé
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none">
              Prendre <br /><span className="text-jicom-dark/30">Rendez-vous</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <Rdv />
      
      <Footer />
    </main>
  );
}
