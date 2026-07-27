"use client";
import Image from "next/image";
import { RefreshCw, Check, Monitor, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
const [isVisible, setIsVisible] = useState(false);
  const [year, setYear] = useState(1990);
const [showYears, setShowYears] = useState(true);
  const [switching, setSwitching] = useState(false);
  const [offices, setOffices] = useState(0);
const [showOffices, setShowOffices] = useState(true);
const [switchingOffices, setSwitchingOffices] = useState(false);
  const [showRefresh, setShowRefresh] = useState(true);
const [switchingUpdate, setSwitchingUpdate] = useState(false);
const [updateAnimated, setUpdateAnimated] = useState(false);
  const [browserStep, setBrowserStep] = useState(0);
const [browserAnimated, setBrowserAnimated] = useState(false);
  const [browserSwitching, setBrowserSwitching] = useState(false);
  const [yearAnimated, setYearAnimated] = useState(false);
const [officeAnimated, setOfficeAnimated] = useState(false);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      threshold: 0.25,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
   useEffect(() => {
 if (!isVisible || yearAnimated) return;

  const startYear = 1990;
  const endYear = 2026;

  const duration = 2000; // 2 Sekunden

  let animationFrame: number;
  let startTime: number | null = null;
     let timeout: ReturnType<typeof setTimeout>;

  const animate = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const progress = Math.min(
      (timestamp - startTime) / duration,
      1
    );

    const currentYear = Math.round(
      startYear + (endYear - startYear) * progress
    );

    setYear(currentYear);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
    timeout = setTimeout(() => {
  setSwitching(true);

  setTimeout(() => {
  setShowYears(false);
  setSwitching(false);

  setYearAnimated(true);

}, 250);

}, 500);
    }
  };

  animationFrame = requestAnimationFrame(animate);

  return () => {
  cancelAnimationFrame(animationFrame);
  clearTimeout(timeout);
};
}, [isVisible, yearAnimated]);

  useEffect(() => {
 if (!isVisible || officeAnimated) return;

  const target = 130;
  const duration = 1800;

  let animationFrame: number;
  let startTime: number | null = null;
  let timeout: ReturnType<typeof setTimeout>;

  const animate = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const progress = Math.min(
      (timestamp - startTime) / duration,
      1
    );

    setOffices(
      Math.round(target * progress)
    );

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      timeout = setTimeout(() => {
        setSwitchingOffices(true);

        setTimeout(() => {
          setShowOffices(false);
          setSwitchingOffices(false);
          setOfficeAnimated(true);
        }, 250);

      }, 800);
    }
  };

  animationFrame = requestAnimationFrame(animate);

  return () => {
  cancelAnimationFrame(animationFrame);
  clearTimeout(timeout);
};

}, [isVisible, officeAnimated]);

  useEffect(() => {
  if (!isVisible || updateAnimated) return;

  let timeout1: ReturnType<typeof setTimeout>;
  let timeout2: ReturnType<typeof setTimeout>;

  timeout1 = setTimeout(() => {
    setSwitchingUpdate(true);

    timeout2 = setTimeout(() => {
      setShowRefresh(false);
      setSwitchingUpdate(false);
      setUpdateAnimated(true);
    }, 250);

  }, 2400);

  return () => {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
  };
}, [isVisible, updateAnimated]);

  useEffect(() => {
  if (!isVisible || browserAnimated) return;

  let timer1: ReturnType<typeof setTimeout>;
  let timer2: ReturnType<typeof setTimeout>;
  let timer3: ReturnType<typeof setTimeout>;
  let timer4: ReturnType<typeof setTimeout>;

  timer1 = setTimeout(() => {
    setBrowserSwitching(true);

    timer2 = setTimeout(() => {
      setBrowserStep(1);
      setBrowserSwitching(false);
    }, 250);

  }, 2100);

  timer3 = setTimeout(() => {
    setBrowserSwitching(true);

    timer4 = setTimeout(() => {
      setBrowserStep(2);
      setBrowserSwitching(false);
      setBrowserAnimated(true);
    }, 250);

  }, 2100);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
  };

}, [isVisible, browserAnimated]);
  
  return (
    <section
  ref={sectionRef}
  className="relative overflow-hidden bg-white py-32"
>
      <div
  className="
    absolute
    inset-0
    overflow-hidden
    pointer-events-none
    z-0
  "
>
  {/* Blauer Glow */}
  <div
  className={cn(
    `
      absolute
      right-20
      top-1/2
      -translate-y-1/2
      rounded-full
      bg-[#146ab1]/12
      blur-[140px]
      z-10
      transition-all
      duration-1000
    `,
    isVisible
      ? "h-[650px] w-[650px] opacity-100"
      : "h-[250px] w-[250px] opacity-0"
  )}
/>
  {/* Grüner Glow */}
  <div
  style={{
    transitionDelay: isVisible ? "600ms" : "0ms",
  }}
  className={cn(
    `
      absolute
      right-4
      bottom-0
      rounded-full
      bg-[#adce00]/12
      blur-[110px]
      z-10
      transition-all
      duration-1000
    `,
    isVisible
      ? "h-[350px] w-[350px] opacity-100"
      : "h-[150px] w-[150px] opacity-0"
  )}
/>

  {/* Netzwerkgrafik */}
    <Image
  src="/images/graphics/network-background.svg"
  alt=""
  aria-hidden="true"
  width={3000}
  height={1800}
  draggable={false}
  className="
    absolute

    left-[10%]
    top-[50%]

    w-[2300px]
    max-w-none

    -translate-x-1/2
    -translate-y-1/2

    opacity-60

    z-0

    pointer-events-none
    select-none
  "
/>
</div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Überschrift */}
        <div
  className={cn(
    "mx-auto max-w-3xl text-center transition-all duration-700",
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  )}
>

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#146ab1]/20
              bg-[#146ab1]/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#146ab1]
            "
          >
            Vertrauen
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Warum Gesundheitsämter
            <br />
            auf easy-soft vertrauen.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Seit vielen Jahren entwickeln wir Software
            für den Öffentlichen Gesundheitsdienst –
            praxisnah, zuverlässig und gemeinsam mit unseren Kunden.
          </p>

        </div>

          <div className="mt-20 grid items-center gap-12 lg:grid-cols-[minmax(700px,1fr)_480px]">
            
            <div className="relative z-10 grid gap-8 md:grid-cols-2 min-w-0">

  <div
  className={cn(
    "h-full transition-all duration-700",
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  )}
    style={{
  transitionDelay: "0ms",
}}
>
    <div
  className="
    h-full
      rounded-3xl
    border
    border-slate-200
    bg-white

    p-12

    text-center

    shadow-sm

    transition-all
    duration-300

    hover:-translate-y-2
    hover:border-[#146ab1]/30
    hover:bg-white
    hover:shadow-xl
    hover:shadow-[#146ab1]/15
  "
>
   <div
  className={cn(
    "text-6xl font-bold transition-all duration-300",
    showYears
  ? "text-[#146ab1]"
  : "text-[#adce00]",
    switching
      ? "scale-110 opacity-0"
      : "scale-100 opacity-100"
  )}
>
  {showYears ? year : "35+"}
</div>

    <p className="mt-6 text-base font-semibold text-slate-900">
      Jahre Erfahrung
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Spezialisierte Softwareentwicklung für den Öffentlichen Gesundheitsdienst.
    </p>
      </div>
  </div>
 <div
  className={cn(
    "h-full transition-all duration-700",
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  )}
  style={{
    transitionDelay: isVisible ? "120ms" : "0ms",
  }}
>
   <div
  className="
    h-full
     rounded-3xl
    border
    border-slate-200
    bg-white
    p-12
    text-center
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#146ab1]/30
    hover:bg-white
    hover:shadow-xl
    hover:shadow-[#146ab1]/15
  "
>
    <div
  className={cn(
  "text-6xl font-bold transition-all duration-300",
  showOffices
    ? "text-[#146ab1]"
    : "text-[#adce00]",
  switchingOffices
    ? "scale-110 opacity-0"
    : "scale-100 opacity-100"
)}
>
  {showOffices ? offices : "130+"}
</div>

    <p className="mt-6 text-base font-semibold text-slate-900">
      Gesundheitsämter
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Vertrauen täglich auf Lösungen von easy-soft.
    </p>
  </div>
     </div>

  <div
  className={cn(
    "h-full transition-all duration-700",
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  )}
  style={{
  transitionDelay: isVisible ? "240ms" : "0ms",
}}
>
    <div
  className="
    h-full
      rounded-3xl
    border
    border-slate-200
    bg-white
    p-12
    text-center
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#146ab1]/30
    hover:bg-white
    hover:shadow-xl
    hover:shadow-[#146ab1]/15
  "
>
<div
  className={cn(
    "flex justify-center transition-all duration-300",
    browserSwitching
      ? "scale-110 opacity-0"
      : "scale-100 opacity-100"
  )}
>

  {browserStep === 0 && (
    <Monitor
      size={58}
      strokeWidth={2.5}
      className="text-[#146ab1]"
    />
  )}

  {browserStep === 1 && (
    <Globe
      size={58}
      strokeWidth={2.5}
      className="text-[#146ab1] animate-pulse"
    />
  )}

  {browserStep === 2 && (
    <span className="text-5xl font-bold text-[#adce00]">
      ONLINE
    </span>
  )}

</div>

<p className="mt-6 text-base font-semibold text-slate-900">
  Browserbasiert
</p>

<p className="mt-2 text-sm leading-6 text-slate-600">
  Mit OctoWare®NET – flexibel, plattformunabhängig und ohne lokale Installation.
</p>
  </div>
 </div>
              
  <div
  className={cn(
    "h-full transition-all duration-700",
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  )}
     style={{
  transitionDelay: isVisible ? "360ms" : "0ms",
}}
>
    <div
  className="
    h-full
      rounded-3xl
    border
    border-slate-200
    bg-white
    p-12
    text-center
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#146ab1]/30
    hover:bg-white
    hover:shadow-xl
    hover:shadow-[#146ab1]/15
  "
>
    <div
  className={cn(
    "flex justify-center transition-all duration-300",
    switchingUpdate
      ? "scale-110 opacity-0"
      : "scale-100 opacity-100"
  )}
>
  {showRefresh ? (
    <RefreshCw
      size={58}
      strokeWidth={2.5}
      className={cn(
  "text-[#146ab1] transition-transform duration-300",
  showRefresh && "animate-spin"
)}
    />
  ) : (
    <Check
      size={58}
      strokeWidth={3}
      className="text-[#adce00]"
    />
  )}
</div>

    <p className="mt-6 text-base font-semibold text-slate-900">
      Kontinuierliche Weiterentwicklung
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Gesetzliche Änderungen, neue Funktionen und moderne Schnittstellen werden kontinuierlich umgesetzt.
    </p>
  </div>    
              </div>

               </div>
            
              <div className="hidden lg:flex items-center justify-center">

 <div
  style={{
    transitionDelay: isVisible ? "480ms" : "0ms",
  }}
  className={cn(
    "relative z-10 transition-all duration-1000",
    isVisible
      ? "translate-x-0 opacity-100 scale-100"
      : "translate-x-16 opacity-0 scale-95"
  )}
>
    <Image
      src="/images/mascot/trust.png"
      alt="easy-soft Maskottchen"
      width={560}
      height={560}
      className="
        object-contain
        transition-transform
        duration-500
        hover:scale-105
        hover:-translate-y-2
      "
    />
  </div>

</div>

        </div>

      </div>
    </section>
  );
}
