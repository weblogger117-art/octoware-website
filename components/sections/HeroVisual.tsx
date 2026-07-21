import Image from "next/image";

import { DeviceFrame } from "@/components/ui";

export function HeroVisual() {
  return (
    <div className="flex justify-center lg:justify-end">
      <DeviceFrame
        className="max-w-[880px]"
      >
        <Image
          src="/images/screens/OctowareNET_Dashboard.png"
          alt="Dashboard von OctoWare®NET"
          width={1600}
          height={1000}
          priority
          draggable={false}
          className="h-auto w-full contrast-105 brightness-[0.98]"
        />
      </DeviceFrame>
    </div>
  );
}
