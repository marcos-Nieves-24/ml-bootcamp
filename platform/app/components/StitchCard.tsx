import React from 'react';

interface StitchCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glass';
}

export default function StitchCard({ children, className = "", hover = true, variant = 'glass' }: StitchCardProps) {
  const baseClasses = variant === 'glass' 
    ? 'glass-card p-6'
    : 'bg-white border border-border-muted rounded-xl shadow-sm p-6';
  
  const hoverClasses = variant === 'glass' && hover
    ? "hover:border-primary/50 transition-colors"
    : variant === 'default' && hover
    ? "hover:border-primary/50 transition-colors"
    : "";
  
  return (
    <div className={` ${baseClasses} ${hoverClasses} ${className}`}
         style={variant === 'glass' ? {} : {}}>
      {children}
    </div>
  );
}
