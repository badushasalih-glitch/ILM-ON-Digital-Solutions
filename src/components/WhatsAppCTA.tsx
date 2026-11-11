'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_POLICIES } from '@/lib/pricing';

export interface WhatsAppCTAProps {
  desk?: 'india' | 'uae' | 'both';
  message?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill' | 'uae-gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export default function WhatsAppCTA({
  desk = 'india',
  message,
  label,
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
}: WhatsAppCTAProps) {
  const defaultMessage = 'Hello ILM-ON, I would like to consult about your career services.';
  const text = encodeURIComponent(message || defaultMessage);

  const phone =
    desk === 'uae'
      ? BUSINESS_POLICIES.contacts.uaeDesk.phone.replace('+', '')
      : BUSINESS_POLICIES.contacts.indiaDesk.phone.replace('+', '');

  const href = `https://wa.me/${phone}?text=${text}`;

  const defaultLabel =
    label ||
    (desk === 'uae'
      ? 'WhatsApp Dubai Desk'
      : desk === 'both'
      ? 'Chat on WhatsApp'
      : 'WhatsApp India Desk');

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-6 py-3.5 text-sm sm:text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-vivid-blue hover:bg-vivid-hover text-white shadow-sm hover:shadow transition-all',
    secondary:
      'bg-dark-950 hover:bg-vivid-blue text-white shadow-sm transition-all',
    outline:
      'bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all',
    pill:
      'bg-teal-accent/15 text-teal-accent hover:bg-teal-accent/25 border border-teal-accent/30 rounded-full transition-all',
    'uae-gold':
      'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm transition-all',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold rounded-xl transition-all ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span>{defaultLabel}</span>
      {showIcon && <ArrowRight className="w-4 h-4 shrink-0" />}
    </a>
  );
}
