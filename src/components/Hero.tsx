"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BgPattern from "./BgPattern";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-jicom-dark">
      <BgPattern color="white" opacity={0.06} />
      
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Forum des Grandes Écoles 2026"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Strong JICOM dark gradient overlay bottom → transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-jicom-dark via-jicom-dark/80 to-transparent z-[1]" />
        {/* Red vertical accent bar — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#E8001D] z-[15]" />
      </div>


      {/* Main content — distributed top to bottom */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pt-[100px] pb-12 px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-between h-full min-h-[calc(100vh-160px)]"
        >
          {/* TOP — "Ton avenir" */}
          <motion.p 
            variants={itemVariants}
            className="text-display text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            Ton avenir
          </motion.p>

          {/* MIDDLE — "Commence" outline */}
          <motion.h1
            variants={itemVariants}
            className="text-display"
            style={{
              fontSize: 'clamp(5rem, 13vw, 13rem)',
              color: 'transparent',
              WebkitTextStroke: '3px #E8001D',
            }}
          >
            Commence
          </motion.h1>

          {/* BOTTOM — "Ici." + subtitle + CTAs */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <motion.p 
              variants={itemVariants}
              className="text-display text-[#F5C518]"
              style={{ fontSize: 'clamp(5rem, 13vw, 13rem)' }}
            >
              Ici.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/90 text-label tracking-normal font-semibold text-sm md:text-base leading-loose max-w-lg normal-case"
            >
              Le premier forum d'orientation internationale au Bénin.{' '}
              30+ grandes écoles. Un seul jour pour changer ta trajectoire.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-4"
            >
              <a href="/inscription"
                className="bg-[#E8001D] text-white text-label px-10 py-5 hover:brightness-110 transition shadow-2xl">
                S'inscrire maintenant →
              </a>
              <a href="/programme"
                className="text-white text-label hover:text-[#F5C518] transition-colors border-b-2 border-transparent hover:border-[#F5C518] pb-1">
                Voir le programme
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* STATS — absolute bottom-right, inside hero */}
      <div className="absolute bottom-12 right-12 md:right-24 z-20 hidden lg:flex items-end gap-12">
        {[
          { num: '30+',    label: 'Écoles' },
          { num: '1 500+', label: 'Visiteurs' },
          { num: '12',     label: 'Pays' },
          { num: '20+',    label: 'Conférences' },
        ].map(({ num, label }) => (
          <div key={label} className="text-right">
            <div className="text-display text-[#F5C518]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}>
              {num}
            </div>
            <div className="text-meta text-white/60 mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator — bottom right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 right-3 md:right-4 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-meta text-white/30 vertical-text mb-4 tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-[#F5C518]/30 relative"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-r border-b border-[#F5C518] rotate-45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
