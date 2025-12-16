import AboutMe from "./components/about-me";
import Contact from "./components/contact-section";
import Education from "./components/education-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Services from "./components/services-section";
import SkillsSection from "./components/skill-section";

export default function Home() {
  return (
    <>
     <Navbar />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div id="heroSection">
       <AboutMe/>
      </div>

      <div id="skillsSection">
        <SkillsSection />
      </div>

      <div id="projectsSection">
        <Projects />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="servicesSection">
        <Services />
      </div>
      <div id="contactSection">
        <Contact/>
      </div>
        <Footer />
    </>
  );
}
