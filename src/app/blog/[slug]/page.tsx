"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BgPattern from "@/components/BgPattern";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data to match Blog.tsx
const BLOG_POSTS = [
  {
    slug: "choisir-entre-france-canada-belgique",
    category: "Orientation",
    title: "Comment choisir entre France, Canada et Belgique ?",
    date: "12 Oct 2025",
    author: "Équipe FGE",
    duration: "5 min",
    image: "/images/gallery-3.jpg",
    content: `
      <p>Choisir sa destination d'études est l'une des décisions les plus importantes pour un étudiant béninois. Entre la France, le Canada et la Belgique, les opportunités sont nombreuses mais les systèmes diffèrent.</p>
      <h2>La France : Tradition et Excellence</h2>
      <p>La France reste la destination privilégiée pour sa proximité culturelle et son système de Grandes Écoles unique au monde.</p>
      <h2>Le Canada : Innovation et Immigration</h2>
      <p>Le Canada attire de plus en plus pour la qualité de son accueil et les perspectives professionnelles après l'obtention du diplôme.</p>
      <h2>La Belgique : Qualité et Accessibilité</h2>
      <p>La Belgique offre un cadre académique rigoureux avec des frais de scolarité souvent plus abordables que dans d'autres pays européens.</p>
    `
  },
  {
    slug: "erreurs-a-eviter-lettre-motivation",
    category: "Admissions",
    title: "Les 5 erreurs à éviter dans votre lettre de motivation",
    date: "05 Oct 2025",
    author: "Expert Admission",
    duration: "4 min",
    image: "/images/about-4.jpg",
    content: "<p>La lettre de motivation est votre passeport pour l'admission. Évitez les clichés et personnalisez chaque demande...</p>"
  },
  {
    slug: "bourses-etudiants-beninois-2025",
    category: "Financement",
    title: "Bourses pour étudiants béninois à l'étranger 2025",
    date: "28 Sep 2025",
    author: "Service Financement",
    duration: "6 min",
    image: "/images/gallery-4.jpg",
    content: "<p>Découvrez la liste exhaustive des bourses disponibles pour financer votre projet d'études internationales...</p>"
  },
  {
    slug: "temoignage-sciences-po",
    category: "Témoignage",
    title: "Sciences Po m'a ouvert des portes que je n'imaginais pas",
    date: "20 Sep 2025",
    author: "Marc A.",
    duration: "7 min",
    image: "/images/gallery-5.jpg",
    content: "<p>Ancien visiteur du FGE, Marc partage son parcours inspirant de Cotonou jusqu'au campus de Menton...</p>"
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-jicom-dark flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-black mb-8">Article non trouvé</h1>
        <Link href="/blog" className="btn btn-yellow">Retour au blog</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero Header with Image */}
      <section className="relative h-[60vh] min-h-[400px] bg-jicom-dark overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jicom-dark via-jicom-dark/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-jicom-yellow font-black uppercase tracking-widest text-[0.85rem] hover:gap-4 transition-all">
                  <ArrowLeft size={16} /> Retour aux articles
                </Link>
                <span className="bg-jicom-red text-white text-[0.78rem] font-black uppercase tracking-[0.2em] px-4 py-2">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.95] max-w-4xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="border-b border-jicom-red/10 bg-white sticky top-[72px] z-30 py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-jicom-dark/40">
              <Calendar size={14} className="text-jicom-red" />
              <span className="text-[0.8rem] font-bold uppercase tracking-widest">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-jicom-dark/40">
              <Clock size={14} className="text-jicom-red" />
              <span className="text-[0.8rem] font-bold uppercase tracking-widest">{post.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-jicom-dark/40">
              <User size={14} className="text-jicom-red" />
              <span className="text-[0.8rem] font-bold uppercase tracking-widest">{post.author}</span>
            </div>
          </div>
          <button className="flex items-center gap-2 text-jicom-red font-black uppercase tracking-widest text-[0.85rem] hover:opacity-70 transition-opacity">
            <Share2 size={14} /> Partager l'article
          </button>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 relative overflow-hidden bg-white">
        <BgPattern color="#f03a3d" opacity={0.03} />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Text */}
            <div className="lg:col-span-8 prose prose-lg prose-red max-w-none">
              <div 
                className="text-jicom-dark/80 leading-relaxed space-y-8 font-medium"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-20 p-10 bg-jicom-red/5 border-l-4 border-jicom-red">
                <h4 className="text-jicom-red font-black uppercase tracking-widest text-lg mb-4">Besoin d'aide ?</h4>
                <p className="text-jicom-dark/70 text-sm font-bold leading-loose">
                  Nos experts sont disponibles pour vous accompagner dans votre projet d'études. 
                  Inscrivez-vous au forum pour bénéficier de conseils personnalisés.
                </p>
                <Link href="/inscription" className="btn btn-yellow mt-8 text-xs">
                  S'inscrire au forum →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-jicom-dark p-8 text-white relative overflow-hidden">
                <BgPattern color="white" opacity={0.05} />
                <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase mb-6 text-jicom-yellow">Prochain Forum</h3>
                  <div className="space-y-4">
                    <p className="text-[0.85rem] font-bold uppercase tracking-[0.2em] opacity-60">15 Novembre 2026</p>
                    <p className="text-[1.1rem] font-black uppercase leading-tight">Palais des Congrès, Cotonou</p>
                    <Link href="/inscription" className="btn btn-yellow w-full !py-3 text-[1rem] mt-4">
                      Réserver mon ticket
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-jicom-dark font-black uppercase tracking-widest text-[1.1rem] mb-8 border-b-2 border-jicom-red pb-4">Articles récents</h3>
                <div className="space-y-8">
                  {BLOG_POSTS.slice(0, 3).map((recent) => (
                    <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group block">
                      <span className="text-jicom-red text-[0.78rem] font-black uppercase tracking-widest mb-2 block">
                        {recent.category}
                      </span>
                      <h4 className="text-[1.1rem] font-black uppercase leading-tight group-hover:text-jicom-red transition-colors">
                        {recent.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
