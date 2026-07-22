import Image from "next/image";

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
        "
      />

      <DeviceFrame
        className="
          relative
          z-10
          translate-y-16
          w-[820px]
          xl:w-[960px]
        "
      >
        <Image
  src="/images/devices/tablet.png"
  alt="Mobile Nutzung von OctoWare®NET"
  width={900}
  height={600}
  priority
  draggable={false}
  className="
    absolute
    bottom-[-35px]
    right-[40px]

    z-20

    w-[340px]
    xl:w-[400px]

    select-none
  "
/>
       <Image
  src="/images/screens/OctowareNET_Dashboard.png"
  alt="Dashboard von OctoWare®NET"
  width={1919}
  height={1199}
  priority
  draggable={false}
  className="block w-[80%] h-auto max-w-none"
/>
      </DeviceFrame>
    </div>
  );
}
