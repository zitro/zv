'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

export function CommercialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Video Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        >
          {/* Replace with actual video */}
          <source src="/videos/commercial-reel.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if no video */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <FadeIn direction="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-zitro-500/30 bg-zitro-500/10 px-4 py-2 text-sm text-zitro-400 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-zitro-500" />
            Commercial Portfolio
          </span>
        </FadeIn>

        <AnimatedText
          text="Campaigns That Move Markets"
          className="mt-8 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl"
          delay={0.2}
          as="h1"
        />

        <FadeIn direction="up" delay={0.5}>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            From Nike to Mercedes-Benz, we create visual stories that define
            brands and drive global campaigns reaching millions.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn direction="up" delay={0.7}>
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '50+', label: 'Global Brands' },
              { value: '200+', label: 'Campaigns' },
              { value: '25M+', label: 'Campaign Reach' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500">
              View Work
            </span>
            <svg
              className="h-6 w-6 text-zitro-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
