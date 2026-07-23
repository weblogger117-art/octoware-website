import Image from "next/image";

import { DeviceFrame } from "@/components/ui";

export function HeroVisual() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-y-0
        right-0
        hidden
        lg:flex
        items-center
        justify-end
        w-[58%]
        max-w-[1150px]
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
          w-full
          max-w-[980px]
          translate-y-10
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
              block
              h-auto
              w-[80%]
              max-w-none
            "
          />
        </DeviceFrame>

        {/* Tablet */}
        <Image
          src="/images/devices/tablet.png"
          alt="Mobile Nutzung von OctoWare®NET"
          width={900}
          height={600}
          priority
          draggable={false}
          className="
            absolute

            bottom-[2%]
            right-[6%]

            z-20

            w-[38%]
            min-w-[260px]
            max-w-[400px]

            drop-shadow-2xl
            select-none
          "
        />
      </div>
    </div>
  );
}
