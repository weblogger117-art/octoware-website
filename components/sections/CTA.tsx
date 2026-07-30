"use client";

import Image from "next/image";
import {
  LinkButton,
  SectionGlow,
} from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
   <section className="relative py-32">

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

    left-[-200px]
    top-[140px]

    w-[1500px]
    max-w-none

    opacity-25

    z-0

    select-none
  "
/>

  <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">

          {/* Maskottchen */}
<Reveal
  animation="zoom"
  delay={0}
>
  <div className="relative hidden lg:block">

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
      width={470}
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

          {/* Text */}

          <Reveal
  animation="fadeUp"
  delay={450}
>
          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Lernen Sie OctoWare®Gesundheit kennen und entdecken,
            wie moderne Fachverfahren Gesundheitsämter effizienter,
            digitaler und zukunftssicher machen.
          </p>
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
