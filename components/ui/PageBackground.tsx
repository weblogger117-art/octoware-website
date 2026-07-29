type PageBackgroundProps = {
  children: React.ReactNode;
};

export function PageBackground({
  children,
}: PageBackgroundProps) {
  return (
    <div className="relative overflow-hidden">

      {/* Grundverlauf */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20

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

          h-[900px]
          w-[900px]

          -translate-x-1/2

          rounded-full

          bg-[#c5d7ed]/40

          blur-[180px]

          -z-10
        "
      />

      {children}

    </div>
  );
}
