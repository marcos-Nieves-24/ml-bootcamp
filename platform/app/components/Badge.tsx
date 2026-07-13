interface BadgeProps {
  icon: string;
  title: string;
  earned: boolean;
  locked: boolean;
  xpReward?: number;
}

export default function Badge({ icon, title, earned, locked, xpReward }: BadgeProps) {
  const isLocked = locked && !earned;
  
  return (
    <div className={`rounded-full p-4 flex flex-col items-center justify-center space-y-2 min-w-[100px] min-h-[100px] transition-opacity ${isLocked ? 'opacity-50' : ''} ${!isLocked ? 'bg-tertiary/10 border border-tertiary/30' : 'bg-surface-container border border-surface-container-high/30'}`}>
      <span className="material-symbols-outlined text-2xl" style={{ color: !isLocked ? 'var(--color-tertiary)' : 'var(--color-on-surface-variant)' }}>
        {isLocked ? 'lock' : icon}
      </span>
      <div className="text-center">
        <p className={`font-bold text-sm ${isLocked ? 'text-on-surface-variant' : 'text-on-surface'}`}>{title}</p>
        {xpReward && (
          <p className={`text-xs ${isLocked ? 'text-on-surface-variant' : 'text-tertiary'}`}>+{xpReward} XP</p>
        )}
      </div>
    </div>
  );
}