import React from "react";
export function NetworkBackground() {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <g
        stroke="#146ab1"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="120" y1="120" x2="320" y2="120" />
        <line x1="320" y1="120" x2="520" y2="200" />
        <line x1="520" y1="200" x2="760" y2="180" />
        <line x1="760" y1="180" x2="980" y2="260" />

        <line x1="220" y1="360" x2="480" y2="360" />
        <line x1="480" y1="360" x2="720" y2="300" />
        <line x1="720" y1="300" x2="980" y2="380" />

        <line x1="320" y1="120" x2="220" y2="360" />
        <line x1="520" y1="200" x2="480" y2="360" />
        <line x1="760" y1="180" x2="720" y2="300" />
      </g>

      {/* Knoten kommen im nächsten Schritt */}
    </svg>
  );
}
