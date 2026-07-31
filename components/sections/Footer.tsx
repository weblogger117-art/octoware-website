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
    
  </div>

</div>

    </footer>
  );
}
