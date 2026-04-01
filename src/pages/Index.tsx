import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
