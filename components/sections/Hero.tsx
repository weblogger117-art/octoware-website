import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
        relative
        overflow-visible
        bg-white
        pt-24
pb-32

lg:pt-36
lg:pb-44
      "
    >
      {/* Hero-Hintergrund */}
      <div
  aria-hidden
  className="
    absolute
    inset-0
    z-0
    bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_72%,#f6faff_88%,#ffffff_100%)]
  "
/>

      {/* Linke Seite */}
      <div className="relative z-20 max-w-[620px]">
        <HeroContent />
      </div>

      {/* Rechte Seite */}
      <HeroVisual />
    </Section>
  );
}
