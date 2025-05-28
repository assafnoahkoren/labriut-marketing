import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import SocialProofSection from "./SocialProofSection";
import FreeTrialSection from "./FreeTrialSection";
import ConfidenceSection from "./ConfidenceSection";
import ContactSection from "./ContactSection";
import FinalCTASection from "./FinalCTASection";
import FooterSection from "./FooterSection";

export default function SpeechLanguagePathology() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SocialProofSection />
        <FreeTrialSection />
        <ConfidenceSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </div>
  );
}