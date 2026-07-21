import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
overflow-visible
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
gap-16
lg:grid-cols-[0.82fr_1.18fr]
"
    >
      <HeroContent />
      <HeroVisual />
    </Section>
  );
}
