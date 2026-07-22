import Image from "next/image";

import { StatCard } from "@/components/ui/StatCard";
import { DeviceFrame } from "@/components/ui";

export function HeroVisual() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-[4rem]
        top-1/2
        hidden
        -translate-y-1/2
        lg:block
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
          -translate-x-[50%]
          -translate-y-1/2
          opacity-90
          -z-10
          select-none
        "
      />

      {/* Glow */}
      <div
        aria-hidden
        className="
          absolute
          left-1/2
          top-1/2
          h-[760px]
          w-[760px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c5d7ed]
          opacity-30
          blur-[150px]
        "
      />

      {/* Laptop + schwebende Elemente */}
      <div className="relative z-10">
        {/* Erste StatCard */}
        <div
          className="
            absolute
            -left-12
            top-12
            z-20
          "
        >
          <StatCard
            icon={
              <div
                className="
                  h-8
                  w-8
                  rounded-xl
                  bg-[#adce00]/15
                  ring-1
                  ring-[#adce00]/30
                "
              />
            }
            value="35+"
            label="Jahre Erfahrung"
          />
        </div>

        {/* Laptop */}
        <DeviceFrame
          className="
            relative
            translate-y-16
            w-[820px]
            xl:w-[960px]
          "
        >
          <Image
            src="/images/screens/OctowareNET_Dashboard.png"
            alt="Dashboard von OctoWare®NET"
            width={1919}
            height={1199}
            priority
            draggable={false}
            className="block w-full h-auto"
          />
        </DeviceFrame>
      </div>
    </div>
  );
}
