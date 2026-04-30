"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Globe, Trophy } from "lucide-react";
import BgPattern from "./BgPattern";

const editions = [
  {
    year: "2024",
    theme: "Ouvre les portes",
    date: "18 Novembre 2024",
    lieu: "Cotonou, Bénin",
    cover: "/images/gallery-1.jpg",
    stats: [
      { icon: <Users size={16} />, value: "1 200+", label: "Visiteurs" },
      { icon: <Building2 size={16} />, value: "25", label: "Écoles" },
      { icon: <Globe size={16} />, value: "10", label: "Pays" },
      { icon: <Trophy size={16} />, value: "18", label: "Conférences" },
    ],
    galerie: "/galerie?edition=2024",
  },
  {
    year: "2023",
    theme: "L'ambition n'attend pas",
    date: "12 Novembre 2023",
    lieu: "Cotonou, Bénin",
    cover: "/images/about-2.jpg",
    stats: [
      { icon: <Users size={16} />, value: "900+", label: "Visiteurs" },
      { icon: <Building2 size={16} />, value: "18", label: "Écoles" },
      { icon: <Globe size={16} />, value: "8", label: "Pays" },
      { icon: <Trophy size={16} />, value: "12", label: "Conférences" },
    ],
    galerie: "/galerie?edition=2023",
  },
  {
    year: "2022",
    theme: "La première marche",
    date: "20 Novembre 2022",
    lieu: "Cotonou, Bénin",
    cover: "/images/gallery-4.jpg",
    stats: [
      { icon: <Users size={16} />, value: "600+", label: "Visiteurs" },
      { icon: <Building2 size={16} />, value: "12", label: "Écoles" },
      { icon: <Globe size={16} />, value: "6", label: "Pays" },
      { icon: <Trophy size={16} />, value: "8", label: "Conférences" },
    ],
    galerie: "/galerie?edition=2022",
  },
];

const EditionCard = ({ ed, i }: { ed: any; i: number }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group relative overflow-hidden bg-[#1a0608] cursor-pointer"
    >
      {/* Cover image */}
      <div className={`relative overflow-hidden ${i === 0 ? "h-[420px]" : "h-[280px]"}`}>
        {!imgError && ed.cover ? (
          <Image
            src={ed.cover}
            alt={`Édition ${ed.year} du Forum des Grandes Écoles`}
            fill
            onError={() => setImgError(true)}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-[#2a0608] flex items-center justify-center">
            <div className="text-center">
              <p className="font-black text-[#E8001D]/30 text-[5rem] leading-none">
                {ed.year}
              </p>
              <p className="text-white/20 text-[0.78rem] font-bold tracking-[0.2em] uppercase mt-2">
                Photos bientôt disponibles
              </p>
            </div>
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0608] via-black/40 to-transparent" />

        {/* Year badge — top left */}
        <div className="absolute top-0 left-0 bg-[#E8001D] px-4 py-2">
          <span className="font-black text-white text-[1.1rem] tracking-[0.05em]">
            {ed.year}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Theme */}
        <p className="text-[#F5C518] font-black uppercase text-[0.78rem] tracking-[0.15em] mb-3">
          "{ed.theme}"
        </p>

        {/* Date + lieu */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-5 h-px bg-white/20" />
          <span className="text-white/40 text-[0.78rem] font-semibold uppercase tracking-[0.1em]">
            {ed.date} · {ed.lieu}
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {ed.stats.map((s: any) => (
            <div key={s.label} className="text-center">
              <div className="text-[#F5C518] font-black text-[1.1rem] leading-none flex items-center justify-center">
                {s.value}
              </div>
              <div className="text-white/40 text-[0.78rem] font-bold tracking-[0.12em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={ed.galerie}
          className="flex items-center gap-2 text-white/60 text-[0.85rem] font-bold tracking-[0.1em] uppercase hover:text-[#F5C518] transition-colors group/link"
        >
          Voir la galerie
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      {/* Bottom accent bar on hover */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-[#E8001D] w-0 group-hover:w-full transition-all duration-400" />
    </motion.div>
  );
};

export default function PastEditions() {
  return (
    <section className="relative overflow-hidden bg-[#0f0608] py-24 px-8 md:px-12">
      {/* BgPattern */}
      <BgPattern color="white" opacity={0.05} />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[0.85rem] font-bold tracking-[0.2em] uppercase text-[#E8001D] mb-3">
              — Nos éditions
            </p>
            <h2
              className="font-black uppercase text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Ils l'ont vécu.<br />
              <span className="text-[#F5C518]">Toi aussi.</span>
            </h2>
          </div>

          <Link
            href="/galerie"
            className="hidden md:flex items-center gap-3 text-white/50 font-bold text-[0.85rem] tracking-[0.1em] uppercase hover:text-[#F5C518] transition-colors"
          >
            Toute la galerie
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards grid — first card featured (larger) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-px bg-[#2a0608]">
          {editions.map((ed, i) => (
            <EditionCard key={ed.year} ed={ed} i={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-3 text-white/50 font-bold text-[0.85rem] tracking-[0.1em] uppercase hover:text-[#F5C518] transition-colors"
          >
            Toute la galerie <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
