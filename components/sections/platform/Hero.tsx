import PlatformVisualization from "./PlatformVisualization";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
export default function PlatformHero() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="mx-auto max-w-7xl px-6">

        <Image
  src="/images/background/network-mesh.webp"
  alt=""
  width={1200}
  height={1200}
  draggable={false}
  className="
    pointer-events-none
    absolute

    right-[-260px]
    top-[-140px]

    w-[1200px]
    max-w-none

    opacity-25

    z-0

    select-none
  "
/>

        <div className="relative z-10 grid items-center gap-28 lg:grid-cols-2">

          {/* Linke Spalte */}

<div>

  {/* Status */}
  <div
    className="
      inline-flex
      items-center
      gap-3

      rounded-full

      border
      border-[#146ab1]/20

      bg-[#146ab1]/5

      px-5
      py-2
    "
  >
    <span className="h-2 w-2 rounded-full bg-[#adce00]" />

    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#146ab1]">
      Plattform
    </span>

    <span className="text-slate-300">•</span>

    <span className="text-sm text-slate-600">
      Browserbasiert
    </span>

    <span className="text-slate-300">•</span>

    <span className="text-sm text-slate-600">
      Modular
    </span>

  </div>

  {/* Headline */}

  <h1
    className="
      mt-8

      text-5xl
      font-bold
      tracking-tight
      text-slate-900

      md:text-6xl
    "
  >
    Eine Plattform.
    <br />
    Alle Fachverfahren.
    <br />
    Eine gemeinsame Zukunft.
  </h1>

  {/* Beschreibung */}

  <p
    className="
      mt-8

      max-w-xl

      text-lg
      leading-8

      text-slate-600
    "
  >
    OctoWare®Gesundheit vereint moderne Fachverfahren,
    mobile Anwendungen und leistungsstarke Schnittstellen
    auf einer gemeinsamen Plattform – speziell entwickelt
    für den Öffentlichen Gesundheitsdienst.
  </p>

  {/* Buttons */}

  <div
    className="
      mt-10
      flex
      flex-wrap
      gap-4
    "
  >

    <Button variant="primary">
      Plattform entdecken
    </Button>

    <Button variant="secondary">
      Unsere Lösungen
    </Button>

  </div>

</div>

          {/* Rechte Spalte */}

<PlatformVisualization />
    

        </div>

      </div>

    </section>
  );
}
