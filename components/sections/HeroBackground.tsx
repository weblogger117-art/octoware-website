export function HeroBackground() {
  return (
    <>
      {/* Grundverlauf */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white
          via-white
          to-[#eef6fc]
        "
      />

      {/* Licht links */}
      <div
        aria-hidden
        className="
          absolute
          -left-40
          top-0
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[#c5d7ed]
          opacity-40
          blur-3xl
        "
      />

      {/* Licht rechts */}
      <div
        aria-hidden
        className="
          absolute
          right-[-8rem]
          top-12
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-[#c5d7ed]
          opacity-30
          blur-3xl
        "
      />

      {/* Verlauf unten */}
      <div
        aria-hidden
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-slate-50
          to-transparent
        "
      />
    </>
  );
}
