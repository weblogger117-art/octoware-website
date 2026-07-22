export function NetworkBackground() {
  return (
    <svg
      viewBox="0 0 1400 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
    {/* Hauptlinien */}
<g
  stroke="#146ab1"
  strokeOpacity="0.18"
  strokeWidth="2.2"
  fill="none"
  strokeLinecap="round"
>
  <path d="M760 120 C900 70 1160 80 1320 180" />
  <path d="M700 330 C920 250 1180 290 1360 430" />
  <path d="M680 560 C900 500 1180 540 1350 670" />
</g>
      {/* Nebenlinien */}
<g
  stroke="#146ab1"
  strokeOpacity="0.10"
  strokeWidth="1.2"
  fill="none"
  strokeLinecap="round"
>
  <path d="M780 150 C960 120 1160 160 1310 250" />
  <path d="M720 390 C920 340 1160 380 1330 520" />
</g>
      {/* Datenpfade */}
<g
  stroke="#146ab1"
  strokeOpacity="0.08"
  strokeWidth="1"
  strokeDasharray="4 6"
  fill="none"
>
  <path d="M790 180 C960 140 1180 180 1340 300" />
  <path d="M730 450 C930 390 1170 450 1330 610" />
</g>
    </svg>
  );
}
