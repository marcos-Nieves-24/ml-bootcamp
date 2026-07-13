"use client"

interface ProgressCircleProps {
  value: number
  size?: number
  color?: string
  strokeWidth?: number
}

export default function ProgressCircle({ value, size = 80, color = "var(--color-success-green)", strokeWidth = 8 }: ProgressCircleProps) {
  const clampedValue = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (clampedValue / 100) * circumference
  
  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--color-surface-container-high)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-stroke-dashoffset duration-300"
          style={{ transitionProperty: 'stroke-dashoffset' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-family-plus-jakarta-sans)' }}>{clampedValue}%</span>
      </div>
    </div>
  )
}