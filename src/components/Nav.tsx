"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import BgPattern from "./BgPattern";

const NAV_LINKS = [
  { label: "Le Forum", href: "/" },
  { label: "Programme", href: "/programme" },
  { label: "Écoles", href: "/ecoles" },
  { label: "Rendez-vous", href: "/rdv" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[90px] px-6 md:px-12 flex items-center bg-white border-b border-[#e5e5e5] shadow-sm"
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold text-[1rem] tracking-[0.1em] uppercase text-[#E8001D] hover:text-[#c0001a] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 w-56 h-20 md:w-72 md:h-24 transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/logo.jpg"
            alt="Forum des Grandes Écoles"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Right Group */}
        <div className="hidden lg:flex items-center gap-10 flex-shrink-0">
          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold text-[1rem] tracking-[0.1em] uppercase text-[#E8001D] hover:text-[#c0001a] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/inscription" 
            className="font-black text-[1rem] tracking-[0.1em] uppercase px-6 py-3 whitespace-nowrap flex-shrink-0 bg-[#E8001D] text-white hover:bg-[#c0001a] transition-all duration-300 shadow-lg"
          >
            S'inscrire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 relative z-50 text-[#E8001D]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden overflow-hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <BgPattern color="#f03a3d" opacity={0.05} />
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6 text-center relative z-10">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase text-jicom-red hover:text-jicom-orange"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: NAV_LINKS.length * 0.1 }}
          >
            <Link
              href="/inscription"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#E8001D] text-white px-12 py-5 text-xl font-black uppercase shadow-lg"
            >
              S'inscrire
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
