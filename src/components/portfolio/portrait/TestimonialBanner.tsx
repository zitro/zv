'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

export function TestimonialBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-zitro-950/20 via-transparent to-zitro-950/20" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn direction="up">
          <div className="text-6xl text-zitro-500/30">&ldquo;</div>
          <blockquote className="mt-4 font-display text-2xl font-medium leading-relaxed text-white md:text-3xl">
            The portrait session was transformative. They didn&apos;t just take my
            photo—they captured the version of me I aspire to be. Best
            investment in my personal brand I&apos;ve ever made.
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-white">Alexandra C.</p>
            <p className="text-sm text-slate-400">CEO, TechVentures</p>
          </div>
        </FadeIn>

        {/* Booking CTA */}
        <FadeIn direction="up" delay={0.2}>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-zitro-500 px-8 py-4 font-semibold text-slate-950 transition-shadow hover:shadow-lg hover:shadow-zitro-500/25"
          >
            Book Your Session
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
