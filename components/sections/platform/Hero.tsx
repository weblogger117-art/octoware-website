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

        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">

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

<div className="relative flex items-center justify-center">

  <div
    className="
      relative

      h-[560px]
      w-full

      rounded-[36px]

      border
      border-slate-200/80

      bg-white/80

      shadow-[0_30px_80px_rgba(15,23,42,0.08)]

      backdrop-blur-xl
    "
  >

<div
  className="
    absolute

    left-1/2
    top-1/2

    -translate-x-1/2
    -translate-y-1/2
  "
>

  <div
    className="
      rounded-2xl

      bg-gradient-to-r
      from-[#146ab1]
      to-[#1d80cb]

      px-8
      py-5

      text-center

      text-white

      shadow-[0_20px_60px_rgba(20,106,177,.35)]
    "
  >

    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
      Plattform
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      OctoWare®Gesundheit
    </h3>

  </div>

</div>
    
  </div>

</div>

        </div>

      </div>

    </section>
  );
}
