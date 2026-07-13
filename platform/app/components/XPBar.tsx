interface XPBarProps {
  value: number;
  className?: string;
}

export default function XPBar({ value, className = "" }: XPBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));
  
  return (
    <div 
      className={`w-full h-6 rounded-full bg-surface-container relative ${className}`}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="h-full rounded-full bg-xp-blue flex items-center justify-center relative overflow-hidden"
        style={{ width: `${clampedValue}%` }}
      >
        {clampedValue > 10 && (
          <div className="text-white font-bold text-sm">
            {clampedValue > 0 && `${Math.round(clampedValue)}%`}
          </div>
        )}
      </div>
    </div>
  );
}