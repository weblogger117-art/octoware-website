"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Baby,
  ShieldPlus,
  Smile,
  Stethoscope,
  HeartPulse,
  Building2,
  FlaskConical,
  Users,
} from "lucide-react";

const modules = [
  {
    icon: ShieldPlus,
    title: "Infektionsschutz",
    featured: true,
    mascot: "/images/mascot/infektionsschutz.webp",
    features: [
      "DEMIS",
      "Kontaktpersonen",
      "Labormeldungen",
      "Auswertungen",
    ],
  },
  {
    icon: Baby,
    title: "Kinder- & Jugendgesundheit",
    featured: true,
    mascot: "/images/mascot/kinderjugenddienst.webp",
    features: [
      "Schuluntersuchungen",
      "Vorsorgen",
      "Dokumentation",
      "Statistiken",
    ],
  },
  {
    icon: Smile,
    title: "Zahnärztlicher Dienst",
    featured: false,
    features: [
      "Befunde",
      "Reihenuntersuchungen",
      "LAGZ",
      "Berichte",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medizinalaufsicht",
    featured: false,
    features: [
      "Einrichtungen",
      "Kontrollen",
      "Bescheide",
      "Auswertungen",
    ],
  },
  {
    icon: FlaskConical,
    title: "Kommunalhygiene",
    featured: false,
    features: [
      "Trinkwasser",
      "Badewasser",
      "Proben",
      "Labor",
    ],
  },
  {
    icon: HeartPulse,
    title: "Schutzimpfungen",
    featured: false,
    features: [
      "Impfkampagnen",
      "Dokumentation",
      "Serien",
      "Statistik",
    ],
  },
  {
    icon: Users,
    title: "Beratung & Betreuung",
    featured: true,
    mascot: "/images/mascot/beratung.webp",
    features: [
      "Psychiatrie",
      "Sucht",
      "Tumorberatung",
      "Schwangerenberatung",
    ],
  },
  {
    icon: Building2,
    title: "Weitere Fachverfahren",
    featured: true,
    mascot: "/images/mascot/verwaltung.webp",
    features: [
      "Modular",
      "Erweiterbar",
      "Schnittstellen",
      "Cloudfähig",
    ],
  },
];
export default function Modules() {
  const sectionRef = useRef<HTMLElement>(null);
const [visible, setVisible] = useState(false);
  const [row1Visible, setRow1Visible] = useState(false);
const [row2Visible, setRow2Visible] = useState(false);
const [row3Visible, setRow3Visible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!visible) return;

  const t1 = setTimeout(() => setRow1Visible(true), 0);
  const t2 = setTimeout(() => setRow2Visible(true), 450);
  const t3 = setTimeout(() => setRow3Visible(true), 900);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
  };
}, [visible]);
  
  return (
    <section
  ref={sectionRef}
  className="relative py-28"
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className=" inline-flex
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
            text-[#146ab1]">
            Fachverfahren
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Alle Fachverfahren.
            <br />
            Eine Plattform.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            OctoWare®Gesundheit unterstützt sämtliche Aufgaben des Öffentlichen
            Gesundheitsdienstes – modular, integriert und zukunftssicher.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
  <div
    key={module.title}
    className={`
      group
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white/80
      backdrop-blur-sm
      ${
  index < 2
    ? row1Visible
      ? "animate-module-1"
      : "opacity-0"
    : index < 6
      ? row2Visible
        ? "animate-module-2"
        : "opacity-0"
      : row3Visible
        ? "animate-module-3"
        : "opacity-0"
}
      ${module.featured ? "p-6 lg:col-span-2" : "px-6 py-5 lg:w-[92%] lg:mx-auto"}
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#146ab1]/50
      hover:shadow-2xl
      hover:shadow-[#146ab1]/10
      ${module.featured
  ? "p-6 lg:col-span-2"
  : "px-6 py-5 lg:w-[92%] lg:mx-auto"}
    `}
  >
    {module.featured ? (
      <div className="grid lg:grid-cols-[1fr_180px] gap-4 items-center h-full">
        <div>
          <div
            className="
              mb-4
              inline-flex
              rounded-2xl
              bg-[#146ab1]/10
              p-3
              text-[#146ab1]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#146ab1]
              group-hover:text-white
            "
          >
            <Icon size={30} />
          </div>

          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-[#146ab1]
            "
          >
            {module.title}
          </h3>

          <div className="mt-4 space-y-2.5">
            {module.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <div className="h-2 w-2 rounded-full bg-[#adce00]" />
                {feature}
              </div>
            ))}
          </div>

          <div
            className="
              mt-6
              flex
              items-center
              text-sm
              font-medium
              text-[#146ab1]
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            Mehr erfahren →
          </div>
        </div>

      {module.mascot && (
  <div className="relative hidden lg:flex justify-center items-end pb-2">

    {/* Blauer Glow */}
    <div
      className="
        absolute
        left-8
        bottom-6
        h-60
        w-60
        rounded-full
        bg-[#146ab1]/30
        blur-3xl
      "
    />

    {/* Grüner Glow */}
    <div
      className="
        absolute
        right-4
        bottom-0
        h-45
        w-45
        rounded-full
        bg-[#adce00]/38
        blur-3xl
      "
    />

    <Image
      src={module.mascot}
      alt={module.title}
      width={180}
      height={180}
      className="
        relative
        object-contain
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />

  </div>
)}
      </div>
    ) : (
      <>
        <div
          className="
            mb-4
            inline-flex
            rounded-2xl
            bg-[#146ab1]/10
            p-3
            text-[#146ab1]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[#146ab1]
            group-hover:text-white
          "
        >
          <Icon size={30} />
        </div>

        <h3
          className="
            text-lg
            font-semibold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-[#146ab1]
          "
        >
          {module.title}
        </h3>

        <div className="mt-4 space-y-2">
          {module.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <div className="h-2 w-2 rounded-full bg-[#adce00]" />
              {feature}
            </div>
          ))}
        </div>

        <div
          className="
            mt-5
            flex
            items-center
            text-sm
            font-medium
            text-[#146ab1]
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          Mehr erfahren →
        </div>
      </>
    )}
  </div>
);
          })}

        </div>
      </div>
    </section>
  );
}
