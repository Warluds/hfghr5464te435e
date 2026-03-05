import HeroSection from "@/components/HeroSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CompetenciesSection />
      <ProjectsSection />
      <AdvantagesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mira Code. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
