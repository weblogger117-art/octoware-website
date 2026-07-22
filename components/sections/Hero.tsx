import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
  className="
    relative
    overflow-hidden
    bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_45%,#eef6fc_78%,#ffffff_100%)]
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
