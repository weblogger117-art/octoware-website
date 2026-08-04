"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Inbox,
  Workflow as WorkflowIcon,
  FileText,
  Waypoints,
  ChartColumn,
} from "lucide-react";
import { SectionGlow } from "@/components/ui";

const steps = [
  {
    icon: Inbox,
    title: "Erfassung",
    text: "Bürgeranliegen, Meldungen und Anträge digital aufnehmen.",
  },
  {
    icon: WorkflowIcon,
    title: "Bearbeitung",
    text: "Vorgänge strukturiert und regelbasiert verwalten.",
  },
  {
    icon: FileText,
    title: "Dokumentation",
    text: "Dokumente, Vorlagen und Bescheide automatisiert erstellen.",
  },
  {
    icon: Waypoints,
    title: "Schnittstellen",
    text: "DEMIS, Melderegister, Labore und weitere Fachsysteme anbinden.",
  },
  {
    icon: ChartColumn,
    title: "Auswertung",
    text: "Statistiken, Berichte und Kennzahlen auf Knopfdruck erzeugen.",
  },
];

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.3,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
  return (
    <section
  ref={sectionRef}
  className="relative py-32"
>
      {/* Section Glows */}

    <SectionGlow variant="workflow-primary" />
    <SectionGlow variant="workflow-accent" />
      
      <div className="mx-auto max-w-7xl px-6">

       {/* Decorative Mesh */}
<Image
  src="/images/background/lines-mesh-es.webp"
  alt=""
  width={1200}
  height={1200}
  draggable={false}
  className="
    pointer-events-none
    absolute

    right-[-260px]
    bottom-[-100px]

    w-[1200px]
    max-w-none

    opacity-25

    z-0

    select-none
  "
/>
        
        {/* Überschrift */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex
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
            text-[#146ab1]">
            Digitaler Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            So arbeitet OctoWare®
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Vom Eingang einer Meldung bis zur statistischen Auswertung begleitet
            OctoWare® Ihre Mitarbeitenden durch den gesamten Arbeitsprozess –
            effizient, nachvollziehbar und medienbruchfrei.
          </p>

        </div>

        <div className="relative">

  {/* Verbindungslinie */}
  <div className="absolute left-0 right-0 top-10 hidden lg:block z-10">

  <div className="h-1 overflow-hidden rounded-full bg-slate-200">

    <div
      className={`
  h-full
  w-full
  origin-left
  rounded-full
  bg-gradient-to-r
  from-[#146ab1]
  to-[#adce00]
  ${
    isVisible
      ? "animate-[growLine_1.2s_ease-out_forwards]"
      : "scale-x-0"
  }
`}
    />

    <div
  className="
    absolute
    top-1/2
    left-0

    h-5
    w-5

    -translate-y-1/2

    rounded-full

    bg-[#146ab1]

    shadow-[0_0_18px_rgba(20,106,177,0.7)]

    animate-[workflowDot_8s_linear_infinite]
  "
/>

  </div>

</div>

  <div className="relative z-10 grid gap-10 lg:grid-cols-5">

    {steps.map((step, index) => {
      const Icon = step.icon;

      return (
        <div
  key={step.title}
  className={`
  group
  relative
  text-center
  ${
    isVisible
      ? "opacity-0 animate-[fadeUp_.5s_ease-out_forwards]"
      : "opacity-0"
  }
`}
  style={{
  animationDelay: `${index * 1.6}s`,
}}
>
          <div
            className="
              relative
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-white/60
              bg-white/90
              shadow-lg
              backdrop-blur
              transition-all
              duration-300
              group-hover:-translate-y-2
              group-hover:bg-[#146ab1]
            animate-[pulseIn_.45s_ease-out_forwards]
            animate-[workflowPulse_8s_linear_infinite]
            "
          >
            <Icon
              className="
                h-9
                w-9
                text-[#146ab1]
                transition-colors
                duration-300
                group-hover:text-white
                animate-[workflowIcon_8s_linear_infinite]
              "
            />
          </div>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            {step.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {step.text}
          </p>
        </div>
      );
    })}

  </div>
</div>

      </div>
    </section>
  );
}
