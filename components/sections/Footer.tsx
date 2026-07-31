"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionGlow } from "@/components/ui";

export function Footer() {
  return (
    <footer
  className="
    relative
    mt-10
    pb-20
  "
>

      {/* <SectionGlow variant="cta-primary" /> */}
      {/* <SectionGlow variant="cta-accent" /> */}

      

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6">

  <div
    className="
      relative
      overflow-hidden

      rounded-[36px]

      border
      border-white/60

      bg-white/80
      backdrop-blur-xl

      shadow-[0_18px_60px_rgba(20,106,177,0.10)]

      px-12
      py-12
    "
  >

    {/* Inhalt */}

<Image
  src="/images/background/footer-network.webp"
  alt=""
  aria-hidden
  width={900}
  height={900}
  draggable={false}
  className="
    absolute

    left-[-120px]
    bottom-[-120px]

    w-[520px]

    opacity-12

    pointer-events-none
    select-none
  "
/>

    <div
  className="
    relative
    z-10

    grid
    gap-16

    lg:grid-cols-[1.6fr_1fr_1fr]
  "
>

  {/* Branding */}
  <div className="max-w-md">

  <Image
    src="/images/branding/easy-soft-logo.webp"
    alt="easy-soft GmbH"
    width={220}
    height={60}
    className="h-auto w-52"
  />

  <p
    className="
  mt-8
  text-lg
  font-semibold
  leading-8
  text-slate-900
"
  >
    Digitale Fachverfahren für den
    Öffentlichen Gesundheitsdienst.
  </p>

  <p
    className="
  mt-5
  text-sm
  leading-7
  text-slate-600
"
    "
  >
    Seit vielen Jahren entwickeln wir moderne Softwarelösungen
    für Gesundheitsämter in Deutschland – modular,
    webbasiert und zukunftssicher.
  </p>

</div>

  {/* Navigation */}
  <div>
    {/* folgt gleich */}
  </div>

  {/* Kontakt */}
  <div>
    {/* folgt gleich */}
  </div>

</div>
    
  </div>

</div>

    </footer>
  );
}
