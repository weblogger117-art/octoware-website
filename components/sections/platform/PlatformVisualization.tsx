import {
  Globe,
  TabletSmartphone,
  Building2,
  ChartColumn,
  Waypoints,
} from "lucide-react";

type Module = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  x: number;
  y: number;
  port: "top" | "bottom" | "left" | "right";
};

const modules: Module[] = [
  {
    title: "OctoWare®NET",
    subtitle: "Web",
    icon: Globe,
    x: 18,
    y: 14,
    port: "bottom",
  },
  {
    title: "OctoWare®mobile",
    subtitle: "Mobil",
    icon: TabletSmartphone,
    x: 82,
    y: 14,
    port: "bottom",
  },
  {
    title: "Schnittstellen",
    subtitle: "Vernetzung",
    icon: Waypoints,
    x: 90,
    y: 46,
    port: "left",
  },
  {
    title: "OctoReport®TN 2.0",
    subtitle: "Reporting",
    icon: ChartColumn,
    x: 82,
    y: 78,
    port: "top",
  },
  {
    title: "OctoWare®TN",
    subtitle: "Desktop",
    icon: Building2,
     x: 18,
    y: 78,
    port: "top",
  },
];

function getModulePort(module: Module) {
  switch (module.port) {
    case "top":
      return {
        x: module.x,
        y: module.y - 6,
      };

    case "bottom":
      return {
        x: module.x,
        y: module.y + 6,
      };

    case "left":
      return {
        x: module.x - 14,
        y: module.y,
      };

    case "right":
      return {
        x: module.x + 14,
        y: module.y,
      };
    default:
      return {
        x: module.x,
        y: module.y,
      };
  }
}

export default function PlatformVisualization() {

  const platform = {
  x: 25,
  y: 46,
};
  const platformPorts = {
  top: {
    x: platform.x,
    y: platform.y - 8,
  },

    left: {
  x: platform.x - 14,
  y: platform.y,
},

  right: {
    x: platform.x + 14,
    y: platform.y,
  },

  bottom: {
    x: platform.x,
    y: platform.y + 8,
  },
};

  function getPlatformPort(module: Module) {
  switch (module.port) {
    case "bottom":
      return platformPorts.top;

    case "top":
      return platformPorts.bottom;

    case "left":
      return platformPorts.right;

    case "right":
      return platformPorts.left;

    default:
      return platformPorts.right;
  }
}

  function getControlPoints(
  platformPort: { x: number; y: number },
  modulePort: { x: number; y: number },
  module: Module
) {
  switch (module.port) {
    case "bottom":
      return {
        cp1: {
          x: platformPort.x,
          y: platformPort.y - 14,
        },
        cp2: {
          x: modulePort.x,
          y: modulePort.y + 14,
        },
      };

    case "top":
      return {
        cp1: {
          x: platformPort.x,
          y: platformPort.y + 14,
        },
        cp2: {
          x: modulePort.x,
          y: modulePort.y - 14,
        },
      };

    case "left":
      return {
        cp1: {
          x: platformPort.x + 16,
          y: platformPort.y,
        },
        cp2: {
          x: modulePort.x - 12,
          y: modulePort.y,
        },
      };

    case "right":
      return {
        cp1: {
          x: platformPort.x - 16,
          y: platformPort.y,
        },
        cp2: {
          x: modulePort.x + 12,
          y: modulePort.y,
        },
      };
  }
}

  return (
    <div className="relative h-[560px] w-full">

<svg
  className="absolute inset-0 z-0 h-full w-full pointer-events-none"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>

  {modules.map((module) => {

  const modulePort = getModulePort(module);

  const platformPort = getPlatformPort(module);

  const controls = getControlPoints(
  platformPort,
  modulePort,
  module
);

  const pathData = `
  M ${platformPort.x} ${platformPort.y}
  C
    ${controls.cp1.x} ${controls.cp1.y},
    ${controls.cp2.x} ${controls.cp2.y},
    ${modulePort.x} ${modulePort.y}
`;

return (
  <g key={module.title}>

    <path
      d={pathData}
      fill="none"
      stroke="#146ab1"
      strokeWidth="0.35"
      opacity="0.22"
    />

<g>

  <circle
  r="1.8"
  fill="#adce00"
  opacity="0.18"
>
  <animateMotion
    dur="6s"
    repeatCount="indefinite"
    path={pathData}
  />

  <animate
    attributeName="r"
    values="1.6;2.2;1.6"
    dur="2.2s"
    repeatCount="indefinite"
  />

  <animate
    attributeName="opacity"
    values="0.10;0.22;0.10"
    dur="2.2s"
    repeatCount="indefinite"
  />
</circle>
  
  <circle
    r="0.9"
    fill="#adce00"
  >
    <animateMotion
      dur="6s"
      repeatCount="indefinite"
      path={pathData}
    />
  </circle>

  <circle
    r="0.35"
    fill="white"
  >
    <animateMotion
      dur="6s"
      repeatCount="indefinite"
      path={pathData}
    />
  </circle>

</g>
    
  </g>
);

})}

</svg>
      
      {/* Plattform */}

      <div
  className="
    absolute
    z-10
    -translate-x-1/2
    -translate-y-1/2
  "
  style={{
    left: `${platform.x}%`,
    top: `${platform.y}%`,
  }}
>
        <div
  className="
    flex
    flex-col
    items-center

    w-[420px]

    rounded-2xl

    bg-gradient-to-r
    from-[#146ab1]
    to-[#1d80cb]

    px-10
    py-6

    text-center
    text-white

    shadow-[0_20px_60px_rgba(20,106,177,.35)]
  "
>
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Plattform
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            OctoWare®Gesundheit
          </h3>
        </div>
      </div>

      {/* Module */}

      {modules.map((module) => {

        const Icon = module.icon;

        return (
          <div
  key={module.title}
  className="
    absolute
    -translate-x-1/2
    -translate-y-1/2
  "
  style={{
  left: `${module.x}%`,
  top: `${module.y}%`,
}}
>
            <div
  className="
    group

    w-72

    rounded-3xl

    border
    border-[#146ab1]/20

    bg-white/95

    px-5
    py-4

    backdrop-blur

    shadow-[0_18px_45px_rgba(15,23,42,0.10)]

    transition-all
    duration-300

   
    hover:border-[#146ab1]/35
    hover:shadow-[0_24px_55px_rgba(20,106,177,0.12)]
  "
>
            
            <div className="flex items-center gap-4">
              <div
  className="
    flex
    h-16
    w-16

    shrink-0
    items-center
    justify-center

    rounded-2xl

    bg-gradient-to-br
    from-[#146ab1]/12
    to-[#adce00]/10

    text-[#146ab1]

    transition-all
    duration-300

    group-hover:scale-105
    group-hover:from-[#146ab1]/18
    group-hover:to-[#adce00]/18
    group-hover:shadow-[0_0_22px_rgba(173,206,0,.18)]
  "
>
                <Icon
  className="
    h-8
    w-8

    transition-all
    duration-300

    group-hover:scale-110
  "
/>
              </div>

              <div>
  <h4
    className="
      text-base
      font-semibold
      text-slate-900

      transition-colors
      duration-300

      group-hover:text-[#146ab1]
    "
  >
    {module.title}
  </h4>

  <p className="mt-1 text-sm text-slate-500">
    {module.subtitle}
  </p>
</div>
            </div>
          </div>
            </div>
        );
      })}
    </div>
  );
}
