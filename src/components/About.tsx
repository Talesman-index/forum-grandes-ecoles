"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

const STATS = [
  { value: "30+", label: "Écoles présentes" },
  { value: "12", label: "Pays représentés" },
  { value: "1 500+", label: "Visiteurs attendus" },
  { value: "20+", label: "Conférences & ateliers" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 overflow-hidden relative">
      <BgPattern color="#f03a3d" opacity={0.05} />
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-meta text-[0.85rem] text-jicom-red block mb-5">
              — À propos
            </span>
            <h2 className="text-display text-jicom-dark" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              Le Forum<br />
              <span className="text-jicom-red">des Grandes</span><br />
              Écoles
            </h2>
          </div>
          <p className="max-w-sm text-jicom-dark/60 text-label text-[1.05rem] tracking-widest normal-case font-bold leading-relaxed">
            Premier forum d'orientation internationale du Bénin, le FGE connecte les étudiants africains aux meilleures institutions mondiales depuis 2023.
          </p>
        </div>

        {/* Asymmetric image grid */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[700px] mb-24">
          {/* Large left image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[300px] md:h-auto md:col-span-5 md:row-span-2 relative overflow-hidden group"
          >
            <Image
              src="/images/about-1.jpg"
              alt="Étudiants en costume au Forum"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-jicom-dark to-transparent">
              <span className="text-meta text-[0.85rem] text-jicom-yellow">
                Networking & Connections
              </span>
            </div>
          </motion.div>

          {/* Top-right image — tall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="h-[250px] md:h-auto md:col-span-4 md:row-span-1 relative overflow-hidden group"
          >
            <Image
              src="/images/about-2.jpg"
              alt="Étudiant face à un stand d'école"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Bottom-right image with red overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[250px] md:h-auto md:col-span-4 md:row-span-1 relative overflow-hidden group"
          >
            <Image
              src="/images/about-3.jpg"
              alt="Conférence forum"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-jicom-red/20 group-hover:bg-jicom-red/0 transition-all duration-500" />
          </motion.div>

          {/* Far-right tall stat block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-auto md:h-auto md:col-span-3 md:row-span-2 bg-jicom-red flex flex-col items-center justify-center py-16 md:p-8 relative overflow-hidden"
          >
            <BgPattern color="white" opacity={0.09} />
            <div className="space-y-10 w-full relative z-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <div className="text-display text-jicom-yellow mb-2" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
                    {stat.value}
                  </div>
                  <div className="text-meta text-[0.8rem] text-white/60 tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission text strip */}
        <div className="border-t-4 border-jicom-red pt-12 flex flex-col md:flex-row items-start gap-12">
          <h3 className="text-heading text-[1.5rem] md:text-[2rem] text-jicom-dark shrink-0 max-w-xs leading-tight">
            Notre mission
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
            {[
              { title: "Orienter", text: "Guider chaque étudiant vers l'institution qui correspond à son profil et ses ambitions." },
              { title: "Connecter", text: "Créer des liens directs entre les jeunes talents africains et les plus grandes universités mondiales." },
              { title: "Propulser", text: "Transformer une journée en une décision qui change une trajectoire de vie." },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="h-1 w-8 bg-jicom-yellow mb-4 group-hover:w-full transition-all duration-500" />
                <h4 className="text-label text-[1rem] text-jicom-red mb-3 tracking-widest">{item.title}</h4>
                <p className="text-body text-jicom-dark/60 text-[1rem] font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
