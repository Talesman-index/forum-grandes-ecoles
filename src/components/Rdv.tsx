"use client";

import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

export default function Rdv() {
  return (
    <section id="rdv" className="bg-jicom-yellow py-24 md:py-32 relative overflow-hidden">
      <BgPattern color="#f03a3d" opacity={0.08} />
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-meta text-[0.85rem] text-jicom-red block mb-6">— Coaching 1:1</span>
            <h2 className="text-display mb-8 leading-[0.9]" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              Rencontrez votre<br /><span className="text-white" style={{ WebkitTextStroke: "1px #f03a3d" }}>future école</span>
            </h2>
            <p className="text-label text-[1.05rem] tracking-widest normal-case mb-12 font-bold opacity-90 max-w-2xl mx-auto">
              Profitez d'un créneau exclusif de 20 minutes pour échanger en direct avec les responsables d'admission.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                "Sciences Po", "ESSEC", "U. de Montréal", "HEC", "Indiana U.", "Paris-Saclay", "UCLouvain", "IMD Lausanne"
              ].map((school, i) => (
                <motion.span 
                  key={school} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 bg-white text-jicom-red text-meta text-[0.85rem] shadow-md hover:bg-jicom-red hover:text-white transition-colors cursor-default"
                >
                  {school}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/inscription" 
                className="btn text-[1rem] bg-jicom-red text-white hover:bg-jicom-dark px-12"
              >
                Prendre un rendez-vous →
              </a>
              <span className="text-meta text-[0.8rem] opacity-60">
                Places limitées par école
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
