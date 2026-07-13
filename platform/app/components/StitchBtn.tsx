import React from 'react';
import Link from 'next/link';

interface StitchBtnProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  href?: string;
}

export default function StitchBtn({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button',
  href
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

  const classes = `inline-flex items-center justify-center font-bold rounded-xl transition-all active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
