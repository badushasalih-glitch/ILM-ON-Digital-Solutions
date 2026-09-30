'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: string;
  target: number;
  decimals: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  colorClass: string;
}

const stats: StatItem[] = [
  {
    id: 'resumes',
    target: 1200,
    decimals: 0,
    suffix: '+',
    label: 'ATS Resumes Delivered',
    sub: 'International Standard',
    colorClass: 'text-vivid-blue',
  },
  {
    id: 'shortlist',
    target: 98.4,
    decimals: 1,
    suffix: '%',
    label: 'Interview Shortlist Rate',
    sub: 'Verified Candidate Feedback',
    colorClass: 'text-vivid-blue',
  },
  {
    id: 'placements',
    target: 350,
    decimals: 0,
    suffix: '+',
    label: 'Gulf & Global Placements',
    sub: 'Dubai • Abu Dhabi • India',
    colorClass: 'text-teal-accent',
  },
  {
    id: 'rating',
    target: 4.9,
    decimals: 1,
    suffix: ' / 5.0',
    label: 'Verified Candidate Rating',
    sub: 'Over 850+ Direct Reviews',
    colorClass: 'text-dark-950',
  },
];

export default function StatisticsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Respect prefers-reduced-motion
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReduced) {
            setValues(stats.map((s) => s.target));
            return;
          }

          // Smooth requestAnimationFrame counter
          const duration = 1800; // 1.8 seconds smooth easing
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            // EaseOutExpo: 1 - Math.pow(2, -10 * progress)
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const nextValues = stats.map((s) => {
              return s.target * eased;
            });
            setValues(nextValues);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValues(stats.map((s) => s.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatValue = (stat: StatItem, current: number) => {
    if (!hasAnimated) {
      // Prior to trigger, display initial zero or standard start
      if (stat.decimals === 1) {
        return `0.0${stat.suffix || ''}`;
      }
      return `0${stat.suffix || ''}`;
    }

    let formattedNum: string;
    if (stat.decimals === 0) {
      formattedNum = Math.round(current).toLocaleString();
    } else {
      formattedNum = current.toFixed(stat.decimals);
    }

    return `${stat.prefix || ''}${formattedNum}${stat.suffix || ''}`;
  };

  return (
    <section ref={sectionRef} className="bg-surface-light border-y border-surface-border py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-white border border-surface-border shadow-card text-center transition-transform hover:-translate-y-0.5 duration-200"
            >
              <div className={`text-3xl sm:text-4xl font-extrabold ${stat.colorClass} tracking-tight tabular-nums`}>
                {formatValue(stat, values[i])}
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-600 mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
