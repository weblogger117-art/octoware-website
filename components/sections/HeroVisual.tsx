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
      <Image
        src="/images/graphics/network-background.svg"
        alt=""
        aria-hidden="true"
        width={1800}
        height={1100}
        draggable={false}
        className="
          absolute
          left-1/2
          top-1/2
          w-[1550px]
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          opacity-90
          -z-20
          select-none
        "
      />

      {/* Licht */}
      <div
        aria-hidden
        className="
          absolute
          left-1/2
          top-1/2
          h-[860px]
          w-[860px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c5d7ed]
          opacity-35
          blur-[150px]
          -z-10
        "
      />

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
  "
>
          <Image
            src="/images/screens/OctowareNET_Dashboard.png"
            alt="Dashboard von OctoWare®NET"
            width={1919}
            height={1199}
            priority
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
          src="/images/devices/tablet.png"
          alt="Mobile Nutzung von OctoWare®NET"
          width={1200}
          height={900}
          priority
          draggable={false}
          className="
            absolute

            bottom-25
            right-[6%]

            z-25

            w-[60%]
            min-w-[260px]
            max-w-[520px]

            drop-shadow-2xl
            select-none
          "
        />
      </div>
    </div>
  );
}
