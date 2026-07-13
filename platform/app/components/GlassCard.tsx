interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div className={`glass-card ${className} ${!hover ? 'pointer-events-none' : ''} ${hover ? '' : '[&]:opacity-100'}`}
         style={{ borderRadius: 'var(--border-radius-lg)' }}>{children}</div>
  );
}