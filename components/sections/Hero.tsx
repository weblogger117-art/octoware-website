import { Section } from "@/components/ui";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="relative overflow-hidden py-24 lg:py-32"
      containerClassName="relative z-10 grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <HeroBackground />

      <HeroContent />

      <HeroVisual />
    </Section>
  );
}
