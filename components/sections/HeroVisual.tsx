import Image from "next/image";

import { DeviceFrame } from "@/components/ui";

export function HeroVisual() {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Lichtschein */}
      <div
        aria-hidden
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c5d7ed]
          opacity-35
          blur-[140px]
        "
      />

      <DeviceFrame className="relative z-10 max-w-[900px]">

        <Image
          src="/images/screens/OctowareNET_Dashboard.png"
          alt="Dashboard von OctoWare®NET"
          width={1600}
          height={1000}
          priority
          draggable={false}
          className="
            h-auto
            w-full
            contrast-105
            brightness-[0.98]
          "
        />

      </DeviceFrame>

    </div>
  );
}
