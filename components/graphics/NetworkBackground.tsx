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
  strokeOpacity="0.12"
  strokeWidth="2"
  fill="none"
  strokeLinecap="round"
>
  <path d="M120 260 C260 120 520 120 700 240" />
</g>
      <g>
  {/* Große Knoten */}
  <circle cx="120" cy="120" r="7" fill="#146ab1" />
  <circle cx="520" cy="200" r="7" fill="#146ab1" />
  <circle cx="980" cy="380" r="7" fill="#146ab1" />

  {/* Mittlere Knoten */}
  <circle cx="320" cy="120" r="5" fill="#146ab1" />
  <circle cx="760" cy="180" r="5" fill="#146ab1" />
  <circle cx="220" cy="360" r="5" fill="#146ab1" />
  <circle cx="480" cy="360" r="5" fill="#146ab1" />
  <circle cx="720" cy="300" r="5" fill="#146ab1" />

  {/* Akzentknoten */}
  <circle cx="980" cy="260" r="5" fill="#adce00" />
</g>

      {/* Knoten kommen im nächsten Schritt */}
    </svg>
  );
}
