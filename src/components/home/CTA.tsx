'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Animated background shapes */}
      <motion.div
        style={{ y, rotate }}
        className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-zitro-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-zitro-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glass relative overflow-hidden rounded-3xl p-12 md:p-20">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zitro-500/20 via-transparent to-zitro-600/20" />

          {/* Noise texture */}
          <div className="noise absolute inset-0 rounded-3xl" />

          <div className="relative text-center">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-zitro-500/10 px-4 py-2 text-sm font-medium text-zitro-400">
                <span className="h-2 w-2 rounded-full bg-zitro-500 animate-pulse" />
                Ready to Start?
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Let&apos;s Create Something{' '}
                <span className="text-gradient">Extraordinary</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                Whether you&apos;re launching a global campaign or capturing intimate
                moments, we&apos;re here to bring your vision to life with artistry
                and precision.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <MagneticButton className="group relative overflow-hidden rounded-full bg-zitro-500 px-8 py-4 text-lg font-semibold text-slate-950 transition-all hover:shadow-2xl hover:shadow-zitro-500/25">
                  <Link href="/contact" className="relative z-10 flex items-center gap-2">
                    Book a Consultation
                    <motion.svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ x: 5 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </motion.svg>
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-zitro-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </MagneticButton>

                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 font-medium text-white transition-colors hover:text-zitro-400"
                >
                  <span>View Portfolio</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            {/* Contact info */}
            <FadeIn direction="up" delay={0.4}>
              <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-12 sm:flex-row sm:justify-center sm:gap-12">
                <a
                  href="mailto:hello@zitrovisuals.com"
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-5 w-5 text-zitro-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hello@zitrovisuals.com
                </a>
                <a
                  href="tel:+18002503814"
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-5 w-5 text-zitro-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  1-800-250-3814
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
