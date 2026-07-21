import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section ...>
    <div className="relative min-h-[760px]">
        <HeroContent />
        <HeroVisual />
    </div>
</Section>
  );
}
