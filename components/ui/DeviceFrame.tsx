import Image from "next/image";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type DeviceFrameProps = {
  children: ReactNode;
  className?: string;
};

export function DeviceFrame({
  children,
  className,
}: DeviceFrameProps) {
  return (
    <div
  className={cn(
    "absolute overflow-hidden",
    "left-[4.9%] top-[5.3%] w-[90.2%]",
    screenClassName
  )}
>
      {/* Bildschirm */}
      <div
        type DeviceFrameProps = {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
};
        {children}
      </div>

      {/* Laptop */}
      <Image
        src="/images/devices/Laptop_Frame.png"
        alt=""
        width={1800}
        height={1120}
        priority
        className="relative z-10 h-auto w-full select-none"
      />
    </div>
  );
}
