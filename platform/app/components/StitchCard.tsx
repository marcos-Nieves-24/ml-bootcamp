import React from 'react';

interface StitchCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function StitchCard({ children, className = "", hover = true }: StitchCardProps) {
  const hoverClasses = hover
    ? "hover:border-primary/50 transition-colors"
    : "";
  return (
    <div className={`bg-white border border-border-muted rounded-xl shadow-sm p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
