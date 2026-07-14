interface LogoProps {
  size?: number
  showText?: boolean
}

export default function Logo({ size = 40, showText = true }: LogoProps) {
  const gradientId = `logo-gradient-${size}`
  const glowId = `logo-glow-${size}`

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#24E3F2" />
            <stop offset="100%" stopColor="#8A2EFF" />
          </linearGradient>

          <filter id={glowId}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        <g
          stroke={`url(#${gradientId})`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
        >
          <path d="M52 52 L102 92" />
          <path d="M52 52 L52 104" />
          <path d="M102 92 L128 128" />
          <path d="M52 104 L128 128" />
          <path d="M102 92 L52 156" />

          <path d="M204 52 L154 92" />
          <path d="M204 52 L204 104" />
          <path d="M154 92 L128 128" />
          <path d="M204 104 L128 128" />
          <path d="M154 92 L204 156" />

          <path d="M128 128 L52 204" />
          <path d="M128 128 L204 204" />

          <path d="M52 156 L102 204" />
          <path d="M204 156 L154 204" />

          <path d="M102 204 L128 178" />
          <path d="M154 204 L128 178" />

          <path d="M102 92 L154 92" />
          <path d="M52 156 L204 156" />
        </g>

        {/* Nodes */}
        <g fill={`url(#${gradientId})`}>
          <circle cx="52" cy="52" r="10" />
          <circle cx="102" cy="92" r="10" />
          <circle cx="52" cy="104" r="10" />

          <circle cx="204" cy="52" r="10" />
          <circle cx="154" cy="92" r="10" />
          <circle cx="204" cy="104" r="10" />

          <circle cx="128" cy="128" r="13" />

          <circle cx="52" cy="156" r="10" />
          <circle cx="204" cy="156" r="10" />

          <circle cx="52" cy="204" r="10" />
          <circle cx="102" cy="204" r="10" />

          <circle cx="154" cy="204" r="10" />
          <circle cx="204" cy="204" r="10" />

          <circle cx="128" cy="178" r="10" />
        </g>
      </svg>

      {showText && (
        <span
          className="text-xl font-bold"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: 'linear-gradient(135deg, #24E3F2, #8A2EFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ML Expedition
        </span>
      )}
    </div>
  )
}
