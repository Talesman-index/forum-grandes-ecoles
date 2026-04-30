"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

export default function Footer() {
  return (
    <footer className="bg-jicom-dark py-20 text-white relative overflow-hidden">
      <BgPattern color="white" opacity={0.06} />
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:w-2/5"
          >
            <Link href="/" className="relative h-20 w-48 block">
              <Image
                src="/images/logo.jpg"
                alt="FGE Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="text-[1rem] tracking-widest text-white/40 leading-relaxed font-bold uppercase max-w-sm">
              Le premier forum d'orientation internationale au Bénin, connectant les ambitions locales aux opportunités mondiales.
            </p>
          </motion.div>

          {/* Links & Contact Container */}
          <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 lg:w-3/5 lg:justify-end">
            
            {/* Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-w-[150px]"
            >
              <h4 className="text-meta text-[0.9rem] text-jicom-yellow mb-8">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { label: "Le Forum", href: "/" },
                  { label: "Programme", href: "/programme" },
                  { label: "Écoles", href: "/ecoles" },
                  { label: "Rendez-vous", href: "/rdv" },
                  { label: "Blog", href: "/blog" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-label text-[0.95rem] text-white/60 hover:text-jicom-yellow transition-colors block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-w-[200px]"
            >
              <h4 className="text-meta text-[0.9rem] text-jicom-yellow mb-8">Nous contacter</h4>
              <div className="space-y-5">
                <div>
                  <p className="text-label text-[0.95rem] tracking-widest text-white/40 mb-1">Email</p>
                  <p className="text-heading text-lg text-white">contact@forumge.bj</p>
                </div>
                <div>
                  <p className="text-label text-[0.95rem] tracking-widest text-white/40 mb-1">Adresse</p>
                  <p className="text-heading text-lg text-white leading-snug">Palais des Congrès,<br />Cotonou, Bénin</p>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <p className="text-meta text-[0.85rem] opacity-40 !tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Forum des Grandes Écoles.
          </p>
          <p className="text-meta text-[0.85rem] opacity-40 !tracking-[0.2em] uppercase">
            Designed by Talesman / Sagana Agency
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
