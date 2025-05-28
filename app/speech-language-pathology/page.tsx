import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import SocialProofSection from "./SocialProofSection";
import FreeTrialSection from "./FreeTrialSection";
import ConfidenceSection from "./ConfidenceSection";
import ContactSection from "./ContactSection";
import FinalCTASection from "./FinalCTASection";
import FooterSection from "./FooterSection";
import AnimatedSection from "./AnimatedSection";

export default function SpeechLanguagePathology() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      <main className="flex-1">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <ProblemSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <SolutionSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <SocialProofSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <FreeTrialSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <ConfidenceSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <ContactSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <FinalCTASection />
        </AnimatedSection>
      </main>
      
      <AnimatedSection>
        <FooterSection />
      </AnimatedSection>
    </div>
  );
}