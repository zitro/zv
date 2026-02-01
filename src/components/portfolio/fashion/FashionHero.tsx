'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

const heroImages = [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
];

export function FashionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zitro-950/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text content */}
          <motion.div style={{ opacity }}>
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 rounded-full border border-zitro-500/30 bg-zitro-500/10 px-4 py-2 text-sm text-zitro-400">
                Fashion Portfolio
              </span>
            </FadeIn>

            <AnimatedText
              text="Where Style Meets Artistry"
              className="mt-8 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl"
              delay={0.2}
              as="h1"
            />

            <FadeIn direction="up" delay={0.5}>
              <p className="mt-6 max-w-lg text-lg text-slate-400">
                From the runways of Paris to the pages of Vogue, we capture the
                essence of fashion through a lens of artistic excellence.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Vogue', 'Harper\'s Bazaar', 'Elle', 'W Magazine'].map((pub) => (
                  <span
                    key={pub}
                    className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                  >
                    {pub}
                  </span>
                ))}
              </div>
            </FadeIn>
          </motion.div>

          {/* Parallax images */}
          <div className="relative h-[600px] lg:h-[700px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute left-0 top-0 w-[45%] z-10"
            >
              <FadeIn direction="left" delay={0.3}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={heroImages[0]}
                    alt="Fashion editorial"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute right-0 top-16 w-[50%] z-20"
            >
              <FadeIn direction="right" delay={0.4}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                  <Image
                    src={heroImages[1]}
                    alt="Fashion editorial"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Vogue badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-1">
                    <span className="font-display text-sm font-bold text-slate-950">
                      VOGUE
                    </span>
                  </div>
                </div>
              </FadeIn>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-0 left-[20%] w-[40%] z-30"
            >
              <FadeIn direction="up" delay={0.5}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-zitro-500/20">
                  <Image
                    src={heroImages[2]}
                    alt="Fashion editorial"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -right-20 top-1/2 h-64 w-64 rounded-full bg-zitro-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
