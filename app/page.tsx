import ExpoBanner from "@/components/ExpoBanner";
import { isExpoActive } from "@/lib/expo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import PuntoDeVenta from "@/components/PuntoDeVenta";
import Crm from "@/components/Crm";
import Portfolio from "@/components/Portfolio";
import ClientMapSection from "@/components/ClientMapSection";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { webPageJsonLd, jsonLdProps } from "@/lib/seo";

const jsonLd = webPageJsonLd({
  path: "/",
  name: "Desarrollo de software, IA y automatización en Villahermosa, Tabasco",
  description:
    "Neurovia Systems desarrolla software a la medida, sistemas empresariales (ERP, CRM, inventario), automatización con inteligencia artificial y sitios web para empresas de Villahermosa, Tabasco y el resto de México.",
  lang: "es",
});

export default function Home() {
  return (
    <>
      <script {...jsonLdProps(jsonLd)} />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechStack />
        <Services />
        <PuntoDeVenta />
        <Crm />
        <Portfolio />
        <ClientMapSection />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      {isExpoActive() && <ExpoBanner />}
      <Footer />
    </>
  );
}
