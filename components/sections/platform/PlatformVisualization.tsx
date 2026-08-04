const modules = [
  {
    title: "OctoWare®NET",
    subtitle: "Browserbasiert",
    x: "22%",
    y: "20%",
  },
  {
    title: "OctoWare®mobile",
    subtitle: "Mobile Apps",
    x: "12%",
    y: "50%",
  },
  {
    title: "OctoWare®TN",
    subtitle: "Desktop",
    x: "22%",
    y: "80%",
  },
  {
    title: "OctoReport®TN 2.0",
    subtitle: "Reporting",
    x: "72%",
    y: "80%",
  },
  {
    title: "Schnittstellen",
    subtitle: "Vernetzung",
    x: "82%",
    y: "35%",
  },
];

export default function PlatformVisualization() {
  return (
    <div className="relative h-[560px] w-full">

      <div
  className="
    absolute

    left-[56%]
    top-1/2

    -translate-x-1/2
    -translate-y-1/2
  "
>

  <div
    className="
      rounded-2xl

      bg-gradient-to-r
      from-[#146ab1]
      to-[#1d80cb]

      px-7
      py-4

      text-center

      text-white

      shadow-[0_20px_60px_rgba(20,106,177,.35)]
    "
  >

    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
      Plattform
    </p>

    <h3 className="mt-2 text-xl font-bold">
      OctoWare®Gesundheit
    </h3>

  </div>

</div>

    </div>
  );
}
