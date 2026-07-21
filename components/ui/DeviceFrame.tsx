import Image from "next/image";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type DeviceFrameProps = {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
};

export function DeviceFrame({
  children,
  className,
  screenClassName,
}: DeviceFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full",
        className
      )}
    >
      {/* Bildschirm */}
      <div
  className={cn(
    "absolute overflow-hidden flex justify-center items-start",
    "left-[3.8%]",
    "right-[3.1%]",
    "top-[5.6%]",
    "bottom-[9.8%]",
    screenClassName
  )}
>
  {children}
</div>

      {/* Laptop-Rahmen */}
      <Image
        src="/images/devices/Laptop_frame.png"
        alt=""
        width={1800}
        height={1120}
        priority
        draggable={false}
        className="relative z-10 h-auto w-full select-none"
      />
    </div>
  );
}
