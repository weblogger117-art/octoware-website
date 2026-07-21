import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="overflow-hidden"
      containerClassName="grid items-center gap-16 lg:grid-cols-2"
    >
      <HeroContent />
      <HeroVisual />
    </Section>
  );
}
