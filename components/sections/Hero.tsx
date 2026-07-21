import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="overflow-hidden py-24 lg:py-32"
      containerClassName="grid items-center gap-20 lg:grid-cols-2"
    >
      <HeroContent />
      <HeroVisual />
    </Section>
  );
}
