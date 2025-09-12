
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import SkillsSection from "./components/skill-section";
import Projects from "./projects/page";





export default function Home() {
  return (
    <>
     
      <HeroSection />
      <SkillsSection />
      <Projects/>
    </>
  );
}
