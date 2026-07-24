import Image from "next/image";
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
    <Section
      className="
        relative
        overflow-hidden
        bg-white
        pt-24
        pb-28
      "
    >
      {/* Hintergrund */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-20

          bg-[radial-gradient(circle_at_20%_25%,rgba(197,215,237,0.45)_0%,transparent_38%),radial-gradient(circle_at_85%_75%,rgba(20,106,177,0.08)_0%,transparent_40%),linear-gradient(to_bottom,#ffffff_0%,#f8fbfe_55%,#ffffff_100%)]
        "
      />

      {/* Netzwerkgrafik */}
    <Image
  src="/images/graphics/network-background.svg"
  alt=""
  aria-hidden="true"
  width={3000}
  height={1800}
  draggable={false}
  className="
    absolute

    left-[1%]
    top-[65%]

    w-[2800px]
    max-w-none

    -translate-x-1/2
    -translate-y-1/2

    opacity-35

    z-0

    pointer-events-none
    select-none
  "
/>

     {/* Überschrift */} 
      <div className=" relative z-10 mx-auto max-w-3xl text-center " >
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
          Fachverfahren, intelligenten Schnittstellen und einer – mit
          OctoWare®NET – zukunftssicheren Webplattform.
        </p>
      </div>

      {/* Feature Cards */}
      <div
        className="
          relative
          z-10

          mx-auto
          mt-20

          grid
          max-w-6xl
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
    </Section>
  );
}
