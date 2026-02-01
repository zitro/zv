'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

export function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
      {/* Video background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
        >
          {/* Replace with actual showreel */}
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
        {/* Fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80)',
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
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Video Production
          </span>
        </FadeIn>

        <AnimatedText
          text="Stories in Motion"
          className="mt-8 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl"
          delay={0.2}
          as="h1"
        />

        <FadeIn direction="up" delay={0.5}>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            From 30-second commercials to feature-length brand films, we bring
            cinematic excellence to every frame.
          </p>
        </FadeIn>

        {/* Play button */}
        <FadeIn direction="up" delay={0.7}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-zitro-500 text-slate-950 shadow-2xl shadow-zitro-500/30"
          >
            <svg className="h-10 w-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
          <p className="mt-4 text-sm text-slate-500">Watch Showreel</p>
        </FadeIn>

        {/* Stats */}
        <FadeIn direction="up" delay={0.9}>
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            {[
              { value: '100+', label: 'Videos Produced' },
              { value: '1B+', label: 'Total Views' },
              { value: '4K/8K', label: 'Production' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
