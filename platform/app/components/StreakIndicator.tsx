interface StreakIndicatorProps {
  days: number;
}

export default function StreakIndicator({ days }: StreakIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-orange-500 text-[20px]">
        local_fire_department
      </span>
      <span className="font-bold text-on-surface-variant">
        {days} días
      </span>
    </div>
  );
}