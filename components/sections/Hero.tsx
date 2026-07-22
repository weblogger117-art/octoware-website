import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        lg:py-36
      "
    >
      {/* Hero-Hintergrund */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_85%_40%,#eef6fc_0%,#eef6fc_30%,transparent_70%),linear-gradient(to_bottom,#ffffff_0%,#ffffff_70%,#f8fbfe_90%,#ffffff_100%)]
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
