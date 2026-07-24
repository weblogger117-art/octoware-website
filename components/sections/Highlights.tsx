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
        -mt-45
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
  iconClassName="bg-[#adce00]/10 text-[#7FA000] border-[#adce00]/20"
  value="Seit 1990"
  label="Entwicklung von Fachsoftware für den Öffentlichen Gesundheitsdienst."
/>

        <StatCard
  icon={Globe}
  iconClassName="bg-[#146ab1]/8 text-[#146ab1] border-[#146ab1]/15"
  value="Webbasiert"
  label="Moderner Betrieb im eigenen Rechenzentrum oder als zentrale Hosting-Lösung."
/>

        <StatCard
  icon={Blocks}
  iconClassName="bg-[#adce00]/10 text-[#7FA000] border-[#adce00]/20"
  value="Modular"
  label="Flexible Fachverfahren für sämtliche Bereiche des Öffentlichen Gesundheitsdienstes."
/>
      </div>
    </Section>
  );
}
