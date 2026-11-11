'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const hasSeenSplash = sessionStorage.getItem('ilmon_splash_seen');
    if (hasSeenSplash) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 900);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('ilmon_splash_seen', 'true');
    }, 1350);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0B1B3D] text-white flex flex-col items-center justify-center p-6 transition-all duration-500 ease-out select-none motion-reduce:hidden ${
        fading ? 'opacity-0 scale-[1.01] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="ILM-ON Digital Solutions Intro"
    >
      {/* Restrained radial depth backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,0,173,0.22)_0%,rgba(11,27,61,0.96)_58%,#060E21_100%)] pointer-events-none" />

      {/* Central Round Preloader */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0.88, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 flex items-center justify-center"
        >
          {/* Outer concentric bezel */}
          <div className="p-2.5 rounded-full border border-white/15 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            {/* Inner subtle ring framing the circular logo badge */}
            <div className="p-1.5 rounded-full border border-white/25 bg-[#1800AD]/35">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#1800AD] shadow-inner">
                <Image
                  src="/assets/brand/ilm-on-logo.png"
                  alt="ILM-ON Digital Solutions Official Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-contain p-2.5"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.85, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1.5"
        >
          <p className="font-serif-display italic text-lg sm:text-xl text-slate-100 tracking-wide font-normal">
            Career Acceleration &amp; Digital Growth
          </p>
          <div className="flex items-center justify-center gap-2 pt-0.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-300/80 font-semibold">
            <span>Dubai, UAE</span>
            <span className="w-1 h-1 rounded-full bg-sky-400" />
            <span>Kerala, India</span>
          </div>
        </motion.div>

        {/* Smooth minimal progress hairline */}
        <div className="w-24 h-[2px] bg-white/15 rounded-full mt-6 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0.15 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full origin-left bg-gradient-to-r from-[#0284F5] via-sky-300 to-[#0284F5]"
          />
        </div>
      </div>
    </div>
  );
}
