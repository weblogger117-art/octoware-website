import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="
relative
overflow-hidden
bg-gradient-to-b
from-white
via-white
to-slate-50
py-24
lg:py-32
"
      containerClassName="grid items-center gap-20 lg:grid-cols-2"
    >
      <HeroContent />
      <HeroVisual />
    </Section>
  );
}
