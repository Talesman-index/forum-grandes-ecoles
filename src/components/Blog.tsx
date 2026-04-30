"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BgPattern from "./BgPattern";

const BLOG_POSTS = [
  {
    slug: "choisir-entre-france-canada-belgique",
    category: "Orientation",
    title: "Comment choisir entre France, Canada et Belgique ?",
    date: "12 Oct 2025",
    duration: "5 min",
    image: "/images/gallery-3.jpg",
  },
  {
    slug: "erreurs-a-eviter-lettre-motivation",
    category: "Admissions",
    title: "Les 5 erreurs à éviter dans votre lettre de motivation",
    date: "05 Oct 2025",
    duration: "4 min",
    image: "/images/about-4.jpg",
  },
  {
    slug: "bourses-etudiants-beninois-2025",
    category: "Financement",
    title: "Bourses pour étudiants béninois à l'étranger 2025",
    date: "28 Sep 2025",
    duration: "6 min",
    image: "/images/gallery-4.jpg",
  },
  {
    slug: "temoignage-sciences-po",
    category: "Témoignage",
    title: "Sciences Po m'a ouvert des portes que je n'imaginais pas",
    date: "20 Sep 2025",
    duration: "7 min",
    image: "/images/gallery-5.jpg",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-jicom-dark py-24 md:py-32 relative overflow-hidden">
      <BgPattern color="white" opacity={0.06} />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-meta text-[0.85rem] text-jicom-yellow block mb-5">— Ressources</span>
            <h2 className="text-display text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              Actualités<br /><span className="text-jicom-red">&amp; Conseils</span>
            </h2>
          </div>
          <Link href="/blog" className="btn btn-outline-white text-[1rem] px-8 shrink-0">
            Tous les articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-jicom-dark border border-white/10 hover:border-jicom-yellow/40 transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
              >
                {/* Image thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-jicom-red text-white text-meta text-[0.78rem] !tracking-widest px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-heading text-[1.2rem] text-white group-hover:text-jicom-yellow transition-colors duration-300 mb-6">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-meta text-[0.8rem] text-white/40">{post.date}</span>
                    <span className="text-meta text-[0.8rem] text-jicom-yellow">{post.duration} de lecture</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
