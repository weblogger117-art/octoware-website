import Image from "next/image";

import { DeviceFrame } from "@/components/ui";

export function HeroVisual() {
  return (
    <div className="flex justify-center lg:justify-end">
      <DeviceFrame>

        <Image
          src="/images/screens/OctoWareNET_Dashboard.png"
          alt="Dashboard von OctoWare®NET"
          width={1600}
          height={1000}
          priority
          className="h-auto w-full"
        />

      </DeviceFrame>
    </div>
  );
}
