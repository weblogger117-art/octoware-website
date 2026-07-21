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
          "absolute overflow-hidden",
          "left-[6.0%]",
          "right-[6.0%]",
          "top-[5.9%]",
          "bottom-[12.3%]",
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
