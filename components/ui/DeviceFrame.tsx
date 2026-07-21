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
        "relative mx-auto w-full max-w-[760px]",
        className
      )}
    >
      {/* Bildschirm */}
      <div
        className="
          absolute
          left-[4.9%]
          top-[5.3%]
          w-[90.2%]
          overflow-hidden
          rounded-[8px]
        "
      >
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
