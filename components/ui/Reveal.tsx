"use client";

import { useEffect, useRef, useState } from "react";

type RevealAnimation =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "zoom";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animation?: RevealAnimation;
};

export function Reveal({
  children,
  delay = 0,
  duration = 700,
  className = "",
  animation = "fadeUp",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animations = {
  fadeUp: "fadeUp",
  fadeLeft: "fadeLeft",
  fadeRight: "fadeRight",
  zoom: "zoomIn",
};

const animationClass =
  `animate-[${animations[animation]}_${duration}ms_ease-out_forwards]`;
  
  return (
    <div
      ref={ref}
      className={`
  ${
    visible
      ? `opacity-0 ${animationClass}`
      : "opacity-0"
  }
  ${className}
`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
