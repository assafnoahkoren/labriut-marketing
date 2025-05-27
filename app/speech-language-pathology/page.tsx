import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CallToActionBanner from "./CallToActionBanner";
import FooterSection from "./FooterSection";

export default function SpeechLanguagePathology() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fbff]">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CallToActionBanner />
      </main>
      <FooterSection />
    </div>
  );
}