import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import CTABanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
