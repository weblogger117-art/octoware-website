import { Section } from "@/components/ui";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section
      className="relative overflow-hidden py-24 lg:min-h-[75vh] lg:py-32"
      containerClassName="relative z-10 grid items-center gap-16 lg:grid-cols-2"
    >
      {/* Hintergrundverlauf */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--color-primary-light)]"
      />

      {/* Farbfläche links oben */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--color-primary-light)] opacity-40 blur-3xl"
      />

      {/* Farbfläche rechts */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 h-[32rem] w-[32rem] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-3xl"
      />

      <HeroContent />

      <HeroVisual />
    </Section>
  );
}
