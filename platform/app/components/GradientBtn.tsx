interface GradientBtnProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function GradientBtn({ children, href, onClick, className = "" }: GradientBtnProps) {
  const baseClasses = "gradient-btn rounded-2xl px-8 py-3.5 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all duration-300";
  
  const content = (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}