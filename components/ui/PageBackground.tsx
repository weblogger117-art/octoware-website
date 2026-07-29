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

      {children}

    </div>
  );
}
