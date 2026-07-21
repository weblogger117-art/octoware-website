import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-white
        to-[#eef6fc]
        py-24
        lg:py-36
      "
    >
      {/* Linke Seite */}
      <div className="relative z-20 max-w-[620px]">
        <HeroContent />
      </div>

      {/* Rechte Seite */}
      <HeroVisual />
    </Section>
  );
}
