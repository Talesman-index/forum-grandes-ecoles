import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Programme from "@/components/Programme";
import Schools from "@/components/Schools";
import Gallery from "@/components/Gallery";
import Rdv from "@/components/Rdv";
import Register from "@/components/Register";
import Newsletter from "@/components/Newsletter";
import Blog from "@/components/Blog";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />
      
      <Nav />
      <Hero />
      <Countdown />
      <About />
      <Programme />
      <Schools />
      <Gallery />
      <Rdv />
      <Register />
      <Newsletter />
      <Blog />
      <Partners />
      <Footer />
    </main>
  );
}
