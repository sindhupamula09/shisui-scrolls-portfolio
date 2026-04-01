import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TraitsSection from "@/components/TraitsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <CertificationsSection />
    <ProjectsSection />
    <TraitsSection />
    <ContactSection />

    {/* Footer */}
    <footer className="py-8 text-center border-t border-border">
      <p className="text-xs text-muted-foreground font-display tracking-widest">
        © 2025 Pamula Sindhu — Built with calm resolve
      </p>
    </footer>
  </div>
);

export default Index;
