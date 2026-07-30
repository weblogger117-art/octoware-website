import Image from "next/image";
type PageBackgroundProps = {
  children: React.ReactNode;
};

export function PageBackground({
  children,
}: PageBackgroundProps) {
  return (
    <div className="relative isolate">

      {/* Grundverlauf */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30

          bg-[linear-gradient(
            180deg,
            #ffffff_0%,
            #f7fbff_22%,
            #ffffff_48%,
            #fbfef5_74%,
            #ffffff_100%
          )]
        "
      />

      {/* Hero Glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[220px]

          h-[1100px]
          w-[1100px]

          -translate-x-1/2

          rounded-full

          bg-[#c5d7ed]/40

          blur-[180px]

          -z-20
        "
      />

      {/* Hero Accent Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[58%]
    top-[420px]

    h-[420px]
    w-[420px]

    rounded-full

    bg-[#c5d7ed]/35

    blur-[120px]

    -z-20
  "
/>

      {/* Global Network */}
<Image
  src="/images/background/network-mesh.webp"
  alt=""
  aria-hidden
  width={4200}
  height={5600}
  priority
  draggable={false}
  className="
    pointer-events-none
    absolute

    left-1/2
    top-[-120px]

    w-[1900px]
    max-w-none

    -translate-x-1/2

    opacity-20

    -z-10

    select-none
  "
/>

      <Image
  src="/images/background/network-mesh-mirror.webp"
  alt=""
  aria-hidden
  width={4200}
  height={5600}
  draggable={false}
  className="
    pointer-events-none
    absolute

    left-1/2
    top-[1800px]

    w-[2000px]
    max-w-none

    -translate-x-1/2

    opacity-20

    -z-10

    select-none
  "
/>

      <Image
  src="/images/background/network-mesh-end.webp"
  alt=""
  aria-hidden
  width={4200}
  height={5600}
  draggable={false}
  className="
    pointer-events-none
    absolute

    left-1/2
    top-[4050px]

    w-[1900px]
    max-w-none

    -translate-x-1/2

    opacity-20

    -z-10

    select-none
  "
/>
      
      {children}

    </div>
  );
}
