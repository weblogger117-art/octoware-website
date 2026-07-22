import {
  Blocks,
  Building2,
  Globe,
} from "lucide-react";

import { Section } from "@/components/ui";
import { StatCard } from "@/components/ui/StatCard";

export function Highlights() {
  return (
    <Section
      className="
        relative
        -mt-28
        z-30
        pt-0
      "
    >
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-10
        "
      >
        <StatCard
          icon={Building2}
          value="Seit 1990"
          label="Entwicklung von Fachsoftware für den Öffentlichen Gesundheitsdienst."
        />

        <StatCard
          icon={Globe}
          value="Webbasiert"
          label="Moderne Lösung für den Betrieb im Rechenzentrum oder in der Cloud."
        />

        <StatCard
          icon={Blocks}
          value="Modular"
          label="Flexible Fachverfahren für sämtliche Bereiche des Öffentlichen Gesundheitsdienstes."
        />
      </div>
    </Section>
  );
}
