import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import HomeSection from "@/containers/home";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";

export default function Home() {
  return (
    <div className="container space-y-16 py-28">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
