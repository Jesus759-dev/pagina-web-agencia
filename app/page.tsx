import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import VideoShowcase from "@/components/VideoShowcase";
import AITerminal from "@/components/AITerminal";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import GlobeSection from "@/components/GlobeSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <VideoShowcase />
        <AITerminal />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Stats />
        <GlobeSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
