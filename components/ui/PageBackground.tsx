import Image from "next/image";
type PageBackgroundProps = {
  children: React.ReactNode;
};

export function PageBackground({
  children,
}: PageBackgroundProps) {
  return (
    <div className="relative isolate overflow-hidden">

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

      {/* WhyOctoWare Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[10%]
    top-[1050px]

    h-[720px]
    w-[720px]

    rounded-full

    bg-[#146ab1]/7

    blur-[190px]

    -z-20
  "
/>

      {/* Why Accent Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[32%]
    top-[1180px]

    h-[420px]
    w-[420px]

    rounded-full

    bg-[#c5d7ed]/28

    blur-[130px]

    -z-20
  "
/>

      {/* Modules Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[42%]
    top-[2380px]

    h-[900px]
    w-[900px]

    -translate-x-1/2

    rounded-full

    bg-[#adce00]/10

    blur-[220px]

    -z-20
  "
/>

      {/* Modules Accent Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[60%]
    top-[2550px]

    h-[460px]
    w-[460px]

    rounded-full

    bg-[#deeb99]/22

    blur-[130px]

    -z-20
  "
/>

      {/* Workflow Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    right-[-160px]
    top-[3300px]

    h-[650px]
    w-[650px]

    rounded-full

    bg-[#146ab1]/6

    blur-[180px]

    -z-20
  "
/>

      {/* Workflow Accent Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    right-[18%]
    top-[3450px]

    h-[380px]
    w-[380px]

    rounded-full

    bg-[#c5d7ed]/20

    blur-[120px]

    -z-20
  "
/>

      {/* Trust Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[-120px]
    top-[4300px]

    h-[700px]
    w-[700px]

    rounded-full

    bg-[#146ab1]/5

    blur-[190px]

    -z-20
  "
/>

      {/* Trust Accent Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[18%]
    top-[4460px]

    h-[420px]
    w-[420px]

    rounded-full

    bg-[#deeb99]/18

    blur-[120px]

    -z-20
  "
/>
      
{/* Secondary Blue Glow */}
      <div
  aria-hidden
  className="
    pointer-events-none
    absolute

    right-[-220px]
    top-[1150px]

    h-[700px]
    w-[700px]

    rounded-full

    bg-[#146ab1]/6

    blur-[180px]

    -z-20
  "
/>

      {/* Green Glow */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute

    left-[-180px]
    bottom-[260px]

    h-[650px]
    w-[650px]

    rounded-full

    bg-[#adce00]/12

    blur-[170px]

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
