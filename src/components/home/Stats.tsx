'use client';

import { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Global Brands' },
  { value: 15, suffix: '', label: 'Years Experience' },
  { value: 25, suffix: 'M+', label: 'Campaign Reach' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  if (isInView) {
    spring.set(value);
  }

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-zitro-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-zitro-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} direction="up" delay={0.1 * index}>
              <div className="text-center">
                <div className="font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
