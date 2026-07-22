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
      {/* Sanfter Übergang zur nächsten Section */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute
    inset-x-0
    bottom-0
    h-40
    bg-gradient-to-b
    from-transparent
    to-white
    z-10
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
