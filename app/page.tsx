import HeroGeometric from "@/components/kokonutui/hero-geometric";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PricingSection } from "@/components/sections/pricing-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import Faq from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      <HeroGeometric />
      <FeaturesGrid />
      <HowItWorks />
      <IntegrationsSection />
      <PricingSection />
      <Faq />
      <CTASection />
    </main>
  );
}
