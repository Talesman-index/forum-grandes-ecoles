"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", span: "col-span-2 row-span-2", alt: "Atelier orientation au FGE" },
  { src: "/images/about-2.jpg", span: "col-span-1 row-span-1", alt: "Étudiant avec conseiller" },
  { src: "/images/gallery-3.jpg", span: "col-span-1 row-span-1", alt: "Session networking" },
  { src: "/images/about-4.jpg", span: "col-span-1 row-span-1", alt: "Conférence" },
  { src: "/images/gallery-2.jpg", span: "col-span-1 row-span-2", alt: "Forum des Grandes Écoles" },
  { src: "/images/gallery-5.jpg", span: "col-span-1 row-span-1", alt: "Étudiante témoignage" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-meta text-[0.85rem] text-jicom-red block mb-5">— Galerie</span>
            <h2 className="text-display text-jicom-dark" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              L'énergie<br /><span className="text-jicom-red">du Forum</span>
            </h2>
          </div>
          <p className="max-w-xs text-jicom-dark/50 text-label text-[1.1rem] normal-case font-bold leading-relaxed">
            Des centaines de jeunes réunis pour une seule ambition : construire leur avenir.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-3 gap-3 h-auto md:h-[700px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`relative overflow-hidden group min-h-[250px] md:min-h-0 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-jicom-red/0 group-hover:bg-jicom-red/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-jicom-dark to-transparent">
                <span className="text-meta text-[0.8rem] text-jicom-yellow">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 bg-jicom-red p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <BgPattern color="white" opacity={0.09} />
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-heading text-2xl md:text-3xl text-white">Rejoins l'édition 2026</h3>
              <p className="text-label text-[1rem] text-white/60 mt-2 tracking-widest font-bold">
                15 Novembre — Palais des Congrès, Cotonou
              </p>
            </div>
            <a href="/inscription" className="btn btn-yellow text-[1rem] px-12 shrink-0">
              S'inscrire maintenant →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
