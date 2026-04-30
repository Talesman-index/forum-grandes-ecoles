"use client";

import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

export default function Partners() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-jicom-red/5">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-meta text-[0.85rem] text-jicom-red block mb-5">— Partenariat</span>
          <h2 className="text-heading text-jicom-dark" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>Ils nous soutiennent</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-pointer">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-full h-24 bg-jicom-red/5 flex items-center justify-center border border-jicom-red/10 group hover:border-jicom-red/30 transition-all">
              <span className="text-meta text-[0.8rem] text-jicom-red group-hover:scale-110 transition-transform">
                Partenaire {i}
              </span>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-5xl mx-auto bg-jicom-red p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          <BgPattern color="white" opacity={0.09} />
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-heading text-[2rem] text-white mb-4">Devenir partenaire ?</h3>
              <p className="text-label text-[1rem] tracking-widest normal-case text-white/70 font-bold leading-relaxed max-w-md">
                Associez votre marque à l'excellence académique et touchez les talents de demain au Bénin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="#" 
                className="btn btn-yellow text-[1rem] px-10 whitespace-nowrap"
              >
                Dossier de sponsoring →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
