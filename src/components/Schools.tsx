"use client";

import { motion } from "framer-motion";
import BgPattern from "./BgPattern";
import FlagSVG from "./FlagSVG";
import { cn } from "@/lib/utils";

const SCHOOLS = [
  { name: "Sciences Po Paris", country: "France", type: "Sciences sociales", category: "Grande École" },
  { name: "Université de Montréal", country: "Canada", type: "Généraliste", category: "Université publique" },
  { name: "UCLouvain", country: "Belgique", type: "Recherche", category: "Université" },
  { name: "ESSEC Business School", country: "France", type: "Management", category: "Grande École" },
  { name: "IMD Lausanne", country: "Suisse", type: "Business", category: "Business School" },
  { name: "Indiana University", country: "États-Unis", type: "Généraliste", category: "University" },
  { name: "Paris-Saclay", country: "France", type: "Ingénierie", category: "Pôle d'excellence" },
  { name: "HEC Montréal", country: "Canada", type: "Management", category: "Grande École" },
];

export default function Schools() {
  return (
    <section id="schools" className="bg-jicom-dark py-24 md:py-32 text-white relative overflow-hidden">
      <BgPattern color="white" opacity={0.06} />
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-meta text-[0.85rem] text-jicom-yellow block mb-5">— Exposants</span>
            <h2 className="text-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              Le monde à<br /><span className="text-jicom-red">votre portée.</span>
            </h2>
          </div>
          <div className="bg-jicom-red p-8 md:p-12 max-w-sm rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <p className="text-label text-[1.1rem] tracking-widest text-white leading-relaxed">
              Plus de 30 institutions d'excellence venues d'Europe, d'Amérique et d'Afrique pour vous accompagner.
            </p>
          </div>
        </div>

        {/* Schools Grid with gap-px logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#3a0a0f] border border-[#3a0a0f]">
          {SCHOOLS.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden bg-[#1a0608] p-7 group cursor-pointer transition-colors duration-200 hover:bg-[#240c10] flex flex-col h-full"
            >
              {/* Top row: pays label + flag */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-[#E8001D] text-meta text-[0.78rem]">
                  {school.country}
                </span>
                <FlagSVG country={school.country} />
              </div>

              {/* School name */}
              <h3 className="text-heading text-[1.2rem] text-white mb-auto">
                {school.name}
              </h3>

              {/* Domain tag */}
              <div className="mt-6">
                <span className={cn(
                  'inline-block text-meta text-[0.78rem] !tracking-widest px-2 py-1 rounded-sm',
                  ['Business', 'Management', 'MBA'].includes(school.type) 
                    ? 'bg-[#F5C518]/10 text-[#F5C518]' 
                    : ['Sciences sociales', 'Droit', 'Santé'].includes(school.type)
                    ? 'bg-[#E8001D]/15 text-[#ff6b7a]'
                    : 'bg-white/5 text-white/40'
                )}>
                  {school.type}
                </span>
              </div>

              {/* Bottom: separator + category */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-6 h-px bg-white/20" />
                <span className="text-meta text-[0.78rem] text-white/35">
                  {school.category}
                </span>
              </div>

              {/* Hover accent bar — bottom edge */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#E8001D] w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-label text-[1rem] text-white/40 mb-8">
            Et bien d'autres écoles à découvrir sur place...
          </p>
          <a href="/inscription" className="btn btn-outline-white text-[1rem] px-12">
            Liste complète des exposants
          </a>
        </div>
      </div>
    </section>
  );
}
