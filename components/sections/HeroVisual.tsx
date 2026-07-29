"use client";

import Image from "next/image";

import { DeviceFrame } from "@/components/ui";

export function HeroVisual() {
  
  return (
   <div
  className="
    pointer-events-none
    relative
    hidden
    lg:flex
    justify-end
    lg:min-h-[640px]
  "
>
      {/* Netzwerkgrafik */}
     

      {/* Licht */}
      

      {/* Gerätegruppe */}
     <div
  className="
    relative

    w-[820px]
    xl:w-[920px]

    -translate-x-40
    translate-y-4
  "
>
        {/* Laptop */}
       <DeviceFrame
  className="
    relative
    z-10
    w-full

    animate-hero-laptop
  "
>
          <Image
  src="/images/screens/OctowareNET_Dashboard.webp"
  alt="Dashboard von OctoWare®NET"
  width={1919}
  height={1199}
  priority
  sizes="(min-width: 1280px) 700px, (min-width: 1024px) 600px, 100vw"
  draggable={false}
  className="
    h-auto
    w-[80%]
    object-cover
  "
/>
        </DeviceFrame>

        {/* Tablet */}
        <Image
          src="/images/devices/tablet.webp"
          alt="Mobile Nutzung von OctoWare®NET"
          width={1200}
          height={900}
          draggable={false}
          className="
            absolute

            bottom-20
            right-[6%]

            z-25

            w-[60%]
            min-w-[260px]
            max-w-[520px]

            drop-shadow-2xl
            select-none
            animate-hero-tablet
          "
        />
      </div>
    </div>
  );
}
