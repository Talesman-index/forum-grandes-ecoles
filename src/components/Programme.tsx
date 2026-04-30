"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BgPattern from "./BgPattern";

const PROGRAMME_DATA = {
  morning: {
    title: "Matinée : Immersion & Stratégie",
    items: [
      { time: "08:30", title: "Accueil & enregistrement", type: "Keynote" },
      { time: "09:30", title: "Cérémonie d'ouverture", type: "Keynote" },
      { time: "10:00", title: "Étudier en Europe — Mythes et Réalités", type: "Conférence" },
      { time: "11:00", title: "Atelier : Lettre de motivation gagnante", type: "Atelier" },
      { time: "12:30", title: "Déjeuner networking", type: "Panel" },
    ],
  },
  afternoon: {
    title: "Après-midi : Action & Opportunités",
    items: [
      { time: "14:00", title: "Sessions stands écoles", type: "Atelier" },
      { time: "15:00", title: "Financer ses études à l'étranger", type: "Conférence" },
      { time: "16:00", title: "Simulation d'entretien d'admission", type: "Atelier" },
      { time: "17:30", title: "Table ronde alumni africains", type: "Panel" },
      { time: "18:30", title: "Clôture & Cocktail de réseautage", type: "Keynote" },
    ],
  },
};

const BADGE_STYLES = {
  Keynote: "bg-jicom-red text-white",
  Conférence: "bg-jicom-green text-white",
  Atelier: "bg-jicom-yellow text-jicom-red",
  Panel: "bg-jicom-orange text-white",
};

export default function Programme() {
  return (
    <section id="programme" className="bg-jicom-red py-24 md:py-32 text-white relative overflow-hidden">
      <BgPattern color="white" opacity={0.09} />
      
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

      <div className="container-custom relative z-10">
        <div className="mb-24 text-center">
          <span className="text-meta text-[0.85rem] text-jicom-yellow block mb-6">
            — Agenda complet
          </span>
          <h2 className="text-display mb-8" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
            Au cœur de<br /><span className="text-jicom-yellow">l'action.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-label text-[1.1rem] text-white/60 tracking-widest normal-case font-bold">
            Une journée intensive de conférences, d'ateliers pratiques et de rencontres directes avec les admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ProgrammeColumn data={PROGRAMME_DATA.morning} />
          <ProgrammeColumn data={PROGRAMME_DATA.afternoon} />
        </div>
      </div>
    </section>
  );
}

function ProgrammeColumn({ data }: { data: typeof PROGRAMME_DATA.morning }) {
  return (
    <div className="space-y-8">
      <div className="bg-jicom-yellow inline-block px-6 py-2 mb-6">
        <h3 className="text-label text-[0.9rem] text-jicom-red tracking-widest">
          {data.title}
        </h3>
      </div>

      <div className="space-y-6">
        {data.items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex gap-6 items-start border-b border-white/10 pb-6 last:border-0"
          >
            <div className="text-display text-jicom-yellow shrink-0 group-hover:scale-110 transition-transform" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
              {item.time}
            </div>
            <div className="space-y-3">
              <h4 className="text-heading text-[1.1rem] group-hover:text-jicom-yellow transition-colors">
                {item.title}
              </h4>
              <span className={cn(
                "inline-block px-3 py-1 text-meta text-[0.78rem] !tracking-widest",
                BADGE_STYLES[item.type as keyof typeof BADGE_STYLES]
              )}>
                {item.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
