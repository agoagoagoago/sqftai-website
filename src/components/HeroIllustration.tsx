/*
  Bespoke, original brand illustration — built entirely from SVG + CSS (no images,
  no fake product UI). It echoes the SQFT AI logo: angular built-space geometry, pale-blue
  floorplan/parcel lines, and electric-blue connected "agentic" nodes with signal flow.
  Purely decorative, so it is hidden from assistive technology.
*/
export default function HeroIllustration() {
  return (
    <div className="illu" aria-hidden="true">
      <svg
        className="illu__svg"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Parcel / floorplan boundary lines */}
        <g stroke="var(--color-blue-pale)" strokeWidth="1.5">
          <rect x="40" y="60" width="420" height="280" rx="6" />
          <line x1="40" y1="170" x2="280" y2="170" />
          <line x1="280" y1="60" x2="280" y2="340" />
          <line x1="280" y1="240" x2="460" y2="240" />
          <line x1="160" y1="60" x2="160" y2="170" />
        </g>

        {/* Tinted room blocks (built space) */}
        <g>
          <rect x="52" y="72" width="96" height="86" rx="4" fill="var(--color-surface-blue)" />
          <rect
            x="292"
            y="72"
            width="156"
            height="156"
            rx="4"
            fill="var(--color-blue-pale)"
            opacity="0.55"
          />
          <rect x="52" y="182" width="216" height="146" rx="4" fill="var(--color-surface-blue)" />
        </g>

        {/* Dimensional building-block motif (echoes the logo mark) */}
        <g>
          <polygon points="330,150 380,124 430,150 380,176" fill="var(--color-blue)" />
          <polygon points="330,150 380,176 380,214 330,188" fill="var(--color-navy)" />
          <polygon points="430,150 380,176 380,214 430,188" fill="var(--color-blue-deep)" />
        </g>

        {/* Signal flow paths */}
        <g stroke="var(--color-blue)" strokeWidth="2" strokeLinecap="round">
          <path className="illu__flow" d="M100 115 C 100 250, 180 255, 180 255" />
          <path className="illu__flow" d="M180 255 C 300 255, 300 300, 360 300" />
          <path className="illu__flow" d="M360 300 C 410 300, 380 215, 380 195" />
        </g>

        {/* Connected agentic nodes */}
        <g>
          <circle className="illu__node" cx="100" cy="115" r="7" fill="var(--color-blue)" />
          <circle className="illu__node illu__node--b" cx="180" cy="255" r="9" fill="var(--color-blue-deep)" />
          <circle className="illu__node illu__node--c" cx="360" cy="300" r="7" fill="var(--color-blue)" />
          <circle className="illu__node illu__node--d" cx="380" cy="150" r="6" fill="var(--color-blue-light)" />
        </g>
      </svg>

      {/* Floating signal labels */}
      <div className="illu__card illu__card--1">
        <span className="dot" />
        Property Signal
      </div>
      <div className="illu__card illu__card--2">
        <span className="dot" />
        Market Context
      </div>
      <div className="illu__card illu__card--3">
        <span className="dot" />
        Decision Intelligence
      </div>
    </div>
  )
}
