"use client";

import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

export default function Newsletter() {
  return (
    <section className="bg-jicom-green py-24 md:py-32 relative overflow-hidden">
      <BgPattern color="white" opacity={0.06} />
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-20 shadow-[20px_20px_0px_0px_#FFB800]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-meta text-[0.85rem] text-jicom-red block mb-4">
                — Newsletter
              </span>
              <h2 className="text-heading text-jicom-dark mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 3.5rem)' }}>
                Ne manquez<br /><span className="text-jicom-red">aucune alerte</span>
              </h2>
              <p className="text-label text-[1rem] tracking-widest normal-case text-jicom-dark/60 font-bold leading-relaxed">
                Recevez les dernières mises à jour sur les bourses, les nouvelles écoles inscrites et le programme complet.
              </p>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="VOTRE@EMAIL.COM" 
                  className="w-full bg-jicom-red/5 border-2 border-jicom-red/10 px-8 py-5 text-jicom-dark font-black uppercase tracking-widest focus:outline-none focus:border-jicom-red transition-all text-[1rem]"
                  required
                />
              </div>
              <button className="btn text-[1rem] bg-jicom-red text-white hover:bg-jicom-dark py-5">
                S'abonner maintenant →
              </button>
              <p className="text-meta text-[0.8rem] text-jicom-dark/40 text-center lg:text-left !tracking-normal">
                Zéro spam. Uniquement l'essentiel pour votre avenir.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
