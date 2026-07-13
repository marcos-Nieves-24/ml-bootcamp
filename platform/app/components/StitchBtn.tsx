import React from 'react';

interface StitchBtnProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function StitchBtn({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button' 
}: StitchBtnProps) {
  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:bg-[#3525cd]',
    secondary: 'bg-surface-container-low text-on-surface border border-border-muted hover:bg-surface-container',
    ghost: 'text-primary hover:bg-primary-container'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`font-bold rounded-xl transition-all active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
