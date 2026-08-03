"use client";

import Image from "next/image";
import {
  LinkButton,
  SectionGlow,
} from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
   <section className="relative pt-24 pb-4">

  {/* Section Glows */}

  <SectionGlow variant="cta-primary" />
  <SectionGlow variant="cta-accent" />

     {/* Decorative Mesh */}
<Image
  src="/images/background/lines-mesh-net.webp"
  alt=""
  width={1000}
  height={1000}
  draggable={false}
  className="
    pointer-events-none
    absolute

    left-[-250px]
    top-[-200px]

    w-[1500px]
    max-w-none

    opacity-25

    z-0

    select-none
  "
/>

  <div className="relative z-10 mx-auto max-w-6xl px-6">
    
<div
  className="
    mx-auto
    max-w-4xl
    text-center
  "
>
         

          {/* Badge */}

          <Reveal
  animation="fadeUp"
  delay={150}
>
  <span
    className="
      -mt-2
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
    Jetzt starten
  </span>
</Reveal>

          {/* Überschrift */}

          <Reveal
  animation="fadeUp"
  delay={300}
>
  <h2
    className="
      mt-6
      max-w-5xl
      text-5xl
      font-bold
      tracking-tight
      text-slate-900
    "
  >
    Bereit für die nächste Generation
    <br />
    des Öffentlichen Gesundheitsdienstes?
  </h2>
</Reveal>

  </div>
        
    <div
  className="
    mt-16
    grid
    items-center
    gap-16

    lg:grid-cols-[0.9fr_1.1fr]
  "
>

       {/* Maskottchen */}
<Reveal
  animation="zoom"
  delay={0}
>
  <div
  className="
    relative
    hidden

    lg:flex
    lg:items-center
    lg:justify-center
  "
>

    {/* Blauer Glow */}
    <div
      className="
        absolute
        inset-0
        rounded-full
        bg-[#146ab1]/20
        blur-[90px]
      "
    />

    {/* Grüner Glow */}
    <div
      className="
        absolute
        bottom-10
        right-12
        h-40
        w-40
        rounded-full
        bg-[#adce00]/20
        blur-[70px]
      "
    />

    <Image
      src="/images/mascot/cta.webp"
      alt="OctoWare® Maskottchen"
      width={540}
      height={470}
      priority
      draggable={false}
      className="
        relative
        z-10
        object-contain
        drop-shadow-2xl
        select-none
      animate-mascot-float
      "
    />

  </div>
</Reveal>

          {/* Buttons */}

          <Reveal
  animation="fadeUp"
  delay={600}
>
          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <LinkButton href="/plattform">
              Plattform entdecken
            </LinkButton>

            <LinkButton
              href="/kontakt"
              variant="secondary"
            >
              Persönliche Beratung
            </LinkButton>
          </div>
            </Reveal>

        </div>

      </div>

    </section>
  );
}
