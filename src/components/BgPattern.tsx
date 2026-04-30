// src/components/BgPattern.tsx
// Reusable background pattern derived from the FGE logo shapes.
// Usage: <BgPattern color="white" /> inside any section with position:relative

interface BgPatternProps {
  color?: string       // stroke/fill color — default "white"
  opacity?: number     // global opacity — default 0.09
}

export default function BgPattern({ color = 'white', opacity = 0.09 }: BgPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Top-left large bubble — partially cropped */}
      <g transform="translate(-80, -60) scale(2.4)">
        <path
          d="M65 0 C29 0 0 29 0 65 C0 101 29 130 65 130
             C79 130 92 126 103 118 L130 148 L118 118
             C126 107 130 87 130 65 C130 29 101 0 65 0 Z"
          fill={color}
        />
      </g>

      {/* Top-right xlarge bubble — flipped */}
      <g transform="translate(1520, -80) scale(-2.8, 2.8)">
        <path
          d="M65 0 C29 0 0 29 0 65 C0 101 29 130 65 130
             C79 130 92 126 103 118 L130 148 L118 118
             C126 107 130 87 130 65 C130 29 101 0 65 0 Z"
          fill={color}
        />
      </g>

      {/* Bottom-left small ghost bubble */}
      <g transform="translate(-30, 720) scale(1.3)">
        <path
          d="M65 0 C29 0 0 29 0 65 C0 101 29 130 65 130
             C79 130 92 126 103 118 L130 148 L118 118
             C126 107 130 87 130 65 C130 29 101 0 65 0 Z"
          fill={color}
        />
      </g>

      {/* Bottom-right medium bubble — flipped */}
      <g transform="translate(1480, 700) scale(-1.8, 1.8)">
        <path
          d="M65 0 C29 0 0 29 0 65 C0 101 29 130 65 130
             C79 130 92 126 103 118 L130 148 L118 118
             C126 107 130 87 130 65 C130 29 101 0 65 0 Z"
          fill={color}
        />
      </g>

      {/* Center-right graduation cap — medium */}
      <g transform="translate(1100, 120) scale(1.1)">
        <polygon points="60,10 10,35 60,60 110,35" fill={color} />
        <rect x="85" y="35" width="8" height="28" rx="2" fill={color} />
        <circle cx="89" cy="65" r="6" fill={color} />
      </g>

      {/* Center-left graduation cap — small */}
      <g transform="translate(200, 600) scale(0.65)">
        <polygon points="60,10 10,35 60,60 110,35" fill={color} />
        <rect x="85" y="35" width="8" height="28" rx="2" fill={color} />
        <circle cx="89" cy="65" r="6" fill={color} />
      </g>
    </svg>
  )
}
