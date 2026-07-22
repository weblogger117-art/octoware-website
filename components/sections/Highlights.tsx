import { Section } from "@/components/ui";
import { StatCard } from "@/components/ui/StatCard";


export function Highlights() {
  return (
    <Section
      className="
        relative
        -mt-20
        z-30
        pt-0
      "
    >
      <div
        className="
          flex
          justify-center
          gap-8
          flex-wrap
        "
      >
        <StatCard
          icon={
            <div className="h-8 w-8 rounded-xl bg-[#adce00]/15 ring-1 ring-[#adce00]/30" />
          }
          value="Seit 1990"
          label="Entwicklung von Fachsoftware für den Öffentlichen Gesundheitsdienst."
        />

        <StatCard
          icon={
            <div className="h-8 w-8 rounded-xl bg-[#146ab1]/15 ring-1 ring-[#146ab1]/30" />
          }
          value="Webbasiert"
          label="Moderne Lösung für den Betrieb im Rechenzentrum oder in der Cloud."
        />

        <StatCard
          icon={
            <div className="h-8 w-8 rounded-xl bg-[#adce00]/15 ring-1 ring-[#adce00]/30" />
          }
          value="Modular"
          label="Flexible Fachverfahren für sämtliche Bereiche des Öffentlichen Gesundheitsdienstes."
        />
      </div>
    </Section>
  );
}
