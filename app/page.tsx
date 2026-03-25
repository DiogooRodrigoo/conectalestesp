import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Segments from "@/components/Segments";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <HowItWorks />
        <Segments />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
