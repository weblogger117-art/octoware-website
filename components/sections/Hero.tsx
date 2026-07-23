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
        pt-24
        pb-32
        lg:pt-36
        lg:pb-44
      "
    >
      {/* Hintergrund */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_72%,#f6faff_88%,#ffffff_100%)]
        "
      />

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
