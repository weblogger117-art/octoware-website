import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        bg-transparent
        pt-24
        pb-28
        lg:pt-36
        lg:pb-36
      "
    >
      {/* Hintergrund */}
      

      <div
        className="
          relative
          z-10

          grid
          items-center
          gap-16

          lg:grid-cols-[minmax(540px,620px)_1fr]
        "
      >
        <HeroContent />

        <HeroVisual />
      </div>
    </Section>
  );
}
