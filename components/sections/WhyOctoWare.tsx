"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Blocks,
  Building2,
  Rocket,
  Workflow,
} from "lucide-react";

import {
  FeatureCard,
  Section,
  SectionGlow,
} from "@/components/ui";

export function WhyOctoWare() {
  const sectionRef = useRef<HTMLElement>(null);
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      threshold: 0.25,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
  
  return (
    <Section
  ref={sectionRef}
  className="
        relative
        pt-24
        pb-28
      "
    >

      <SectionGlow variant="why-primary" />
      <SectionGlow variant="why-accent" />
         
    {/* Überschrift */}
<div
  className={cn(
    "relative z-10 mx-auto max-w-3xl text-center transition-all duration-700",
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  )}
>
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

{/* Decorative Mesh */}
<Image
  src="/images/background/lines-mesh.webp"
  alt=""
  aria-hidden
  width={1200}
  height={900}
  draggable={false}
  className="
    pointer-events-none
    absolute

    left-[-120px]
    top-[420px]

    w-[820px]
    max-w-none

    opacity-8

    -z-10

    select-none

    animate-mesh-float
  "
/>
      
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

  <div
    style={{
    transitionDelay: "350ms",
  }}
    className={cn(
      "transition-all duration-1000",
      isVisible
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-10 opacity-0 scale-95"
    )}
  >
    <FeatureCard
      icon={Building2}
      title="Für den ÖGD entwickelt"
      description="Praxisnahe Fachverfahren, die speziell für Gesundheitsämter und den Öffentlichen Gesundheitsdienst entwickelt wurden."
    />
  </div>

  <div
    style={{ transitionDelay: "500ms" }}
    className={cn(
      "transition-all duration-700",
      isVisible
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-10 opacity-0 scale-95"
    )}
  >
    <FeatureCard
      icon={Blocks}
      title="Moderne Webplattform"
      description="Browserbasiert, plattformunabhängig und flexibel im eigenen Rechenzentrum oder als Hosting-Lösung einsetzbar."
    />
  </div>

  <div
    style={{ transitionDelay: "650ms" }}
    className={cn(
      "transition-all duration-700",
      isVisible
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-10 opacity-0 scale-95"
    )}
  >
    <FeatureCard
      icon={Workflow}
      title="Intelligente Schnittstellen"
      description="Nahtlose Integration mit Fachverfahren, Registern und externen Systemen für effiziente digitale Prozesse."
    />
  </div>

  <div
    style={{ transitionDelay: "800ms" }}
    className={cn(
      "transition-all duration-700",
      isVisible
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-10 opacity-0 scale-95"
    )}
  >
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
