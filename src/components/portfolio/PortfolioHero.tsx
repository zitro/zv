'use client';

import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/ui/AnimatedText';

export function PortfolioHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-slate-950 pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zitro-950/20 to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
            Our Work
          </span>
        </motion.div>

        <AnimatedText
          text="Visual Stories That Inspire"
          className="mt-6 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          delay={0.2}
          as="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          A curated collection of our finest work across commercial, fashion,
          product, portrait, and boudoir photography.
        </motion.p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
