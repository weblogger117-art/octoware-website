import {
  Blocks,
  Building2,
  Rocket,
  Workflow,
} from "lucide-react";
import { FeatureCard } from "@/components/ui";
import { Section } from "@/components/ui";

export function WhyOctoWare() {
  return (
    <Section className="pt-2 lg:pt-8">
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#146ab1]/20
            bg-[#146ab1]/5
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#146ab1]
          "
        >
          Warum OctoWare®Gesundheit?
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            lg:text-5xl
          "
        >
          Eine Plattform für den modernen
          <br />
          Öffentlichen Gesundheitsdienst.
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          Von der Sachbearbeitung bis zur digitalen Zusammenarbeit –
          OctoWare®Gesundheit unterstützt Gesundheitsämter mit modernen
          Fachverfahren, intelligenten Schnittstellen und einer - mit OctoWare®NET - 
          zukunftssicheren Webplattform.
        </p>
        <div
  className="
    mx-auto
    mt-20
    grid
    max-w-7xl
    grid-cols-1
    gap-8
    lg:grid-cols-2
  "
>
  <FeatureCard
    icon={Building2}
    title="Für den ÖGD entwickelt"
    description="Praxisnahe Fachverfahren, die speziell für Gesundheitsämter und den Öffentlichen Gesundheitsdienst entwickelt wurden."
  />

  <FeatureCard
    icon={Blocks}
    title="Moderne Webplattform"
    description="Browserbasiert, plattformunabhängig und flexibel im eigenen Rechenzentrum oder als Hosting-Lösung einsetzbar."
  />

  <FeatureCard
    icon={Workflow}
    title="Intelligente Schnittstellen"
    description="Nahtlose Integration mit Fachverfahren, Registern und externen Systemen für effiziente digitale Prozesse."
  />

  <FeatureCard
    icon={Rocket}
    title="Zukunftssichere Architektur"
    description="Modular aufgebaut und kontinuierlich weiterentwickelt – für die Anforderungen von heute und morgen."
  />
</div>
      </div>
    </Section>
  );
}
