"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Blocks,
  Building2,
  Headset,
} from "lucide-react";

export function Footer() {
  return (
    <footer
  className="
    relative
    mt-0
    pb-4
  "
>

      {/* <SectionGlow variant="cta-primary" /> */}
      {/* <SectionGlow variant="cta-accent" /> */}

      

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-4">

  <div
    className="
      relative
      overflow-hidden

      rounded-[36px]

      border
      border-[#146ab1]/35

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

    <Image
  src="/images/background/lines-mesh.webp"
  alt=""
  aria-hidden
  width={1000}
  height={1000}
  draggable={false}
  className="
    absolute

    right-[-180px]
    bottom-[-180px]

    w-[950px]

    opacity-[10]

    pointer-events-none
    select-none
  "
/>

    <div
  className="
    relative
    z-10

    grid
    gap-14

    lg:grid-cols-[1.3fr_.8fr_.8fr_.8fr]
  "
>

  {/* Branding */}
  <div className="max-w-sm">

  <Image
    src="/images/branding/easy-soft-logo.webp"
    alt="easy-soft GmbH"
    width={205}
    height={62}
    className="mb-6"
  />

  <h3
    className="
      text-[1.35rem]
      font-semibold
      leading-tight
      text-slate-900
    "
  >
    Digitale Fachverfahren für den
    Öffentlichen Gesundheitsdienst.
  </h3>

  <p
    className="
      mt-5
      text-sm
      leading-7
      text-slate-500
    "
  >
    Seit vielen Jahren entwickeln wir moderne
    Softwarelösungen für Gesundheitsämter in
    Deutschland – modular und zukunftssicher.
  </p>

    <div className="mt-8 border-t border-slate-200 pt-5">
      <p className="text-xs text-slate-400">
  © {new Date().getFullYear()} easy-soft GmbH
</p>

<div className="mt-3 flex gap-5 text-xs">

  <Link
      href="/impressum"
      className="text-slate-400 transition-colors hover:text-[#146ab1]"
    >
      Impressum
    </Link>

    <Link
      href="/datenschutz"
      className="text-slate-400 transition-colors hover:text-[#146ab1]"
    >
      Datenschutz
  </Link>

</div>

</div>
</div>

        <div className="group">

  <div className="flex items-center gap-2.5">

  <Blocks
      size={17}
      className="
        text-[#146ab1]
        transition-all
        duration-300
        group-hover:-translate-y-0.5
        group-hover:scale-110
      "
    />

  <h4
    className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.18em]
      text-[#146ab1]
    "
  >
    Plattform
  </h4>

</div>

  <div className="mt-6 flex flex-col gap-4">

    <Link
      href="/plattform"
      className="
        text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
      "
    >
      Überblick
    </Link>

    <Link
  href="/octoware-mobile"
  className="
    text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
  "
>
  OctoWare®mobile
</Link>

<Link
  href="/octoware-net"
  className="
    text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
  "
>
  OctoWare®NET
</Link>

<Link
  href="/octoware-tn"
  className="
    text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
  "
>
  OctoWare®TN
</Link>

    <Link
  href="/octoreport-tn"
  className="
    text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
  "
>
  OctoReport®TN 2.0
</Link>

<Link
  href="/fachverfahren"
  className="
    text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
  "
>
  Fachverfahren
</Link>

<Link
  href="/schnittstellen"
  className="
    text-slate-600
    transition-all
    duration-200
    hover:translate-x-1
    hover:text-[#146ab1]
  "
>
  Schnittstellen
</Link>

  </div>

</div>

  <div className="group">

  <div className="flex items-center gap-2.5">

  <Building2
    size={17}
    className="text-[#146ab1]
    transition-all
        duration-300
        group-hover:-translate-y-0.5
        group-hover:scale-110
    "
  />

  <h4
    className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.18em]
      text-[#146ab1]
    "
  >
    Unternehmen
  </h4>

</div>

  <div className="mt-6 flex flex-col gap-4">

    <Link
      href="/unternehmen"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      Über uns
    </Link>

    <Link
      href="/karriere"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      Karriere
    </Link>

    <Link
      href="/news"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      News
    </Link>

    <Link
      href="/academy"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      easy-Academy
    </Link>

  </div>

</div>

        <div className="group">

  <div className="flex items-center gap-2.5">

  <Headset
    size={17}
    className="text-[#146ab1]
        transition-all
        duration-300
        group-hover:-translate-y-0.5
        group-hover:scale-110
      "
  />

  <h4
    className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.18em]
      text-[#146ab1]
    "
  >
    Kontakt
  </h4>

</div>

  <div className="mt-6 flex flex-col gap-4">

    <Link
      href="/kontakt"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      Kontakt
    </Link>

    <Link
      href="/support"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      Support
    </Link>

    <Link
      href="/kundenportal"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      Kundenportal
    </Link>

    <Link
      href="/fernwartung"
      className="
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#146ab1]
      "
    >
      Fernwartung
    </Link>

  </div>

</div>
      
      </div>
    </div>
        </div>

    </footer>
  );
}
