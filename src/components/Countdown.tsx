"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

const TARGET_DATE = new Date(2026, 10, 15, 8, 30); // 15 Nov 2026

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();
      
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-0 overflow-hidden">
      {/* Split layout: red left / image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">

        {/* Left: Red countdown block */}
        <div className="bg-jicom-red flex flex-col items-center justify-center py-20 px-8 md:px-16 relative overflow-hidden">
          <BgPattern color="white" opacity={0.09} />
          <div className="relative z-10 text-center">
            <span className="text-meta text-[0.85rem] text-jicom-yellow block mb-6">
              Compte à rebours
            </span>
            <p className="text-[1rem] text-white/80 text-label mb-12 tracking-widest">
              15 Novembre 2026 — 08h30
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: timeLeft.days, label: "Jours" },
                { value: timeLeft.hours, label: "Heures" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((unit, i) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-jicom-dark text-white w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3">
                    <span className="text-display text-4xl md:text-5xl tabular-nums">
                      {unit.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-meta text-[0.8rem] text-jicom-yellow tracking-[0.15em]">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="/inscription"
              className="btn btn-yellow text-[1rem] mt-12 px-10"
            >
              Réserver ma place →
            </a>
          </div>
        </div>

        {/* Right: photo with overlay text */}
        <div className="relative overflow-hidden min-h-[400px] md:min-h-full">
          <Image
            src="/images/gallery-2.jpg"
            alt="Étudiants au forum"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-jicom-dark/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <span className="text-meta text-[0.85rem] text-jicom-yellow mb-4">
              Palais des Congrès
            </span>
            <h2 className="text-display text-white leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              Un jour pour<br />changer ta vie
            </h2>
            <p className="text-label text-[1.1rem] text-white/60 mt-4 max-w-xs tracking-widest normal-case font-semibold">
              Rencontre les meilleures écoles du monde, toutes en un seul endroit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
