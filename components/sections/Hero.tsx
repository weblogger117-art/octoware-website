import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
overflow-x-hidden
overflow-y-visible
bg-gradient-to-br
from-white
via-white
to-[#eef6fc]
py-24
lg:py-32
"
      containerClassName="
        grid
        items-center
        gap-20
        lg:grid-cols-[0.85fr_1.15fr]
      "
    >
      <HeroContent />
      <HeroVisual />
    </Section>
  );
}
