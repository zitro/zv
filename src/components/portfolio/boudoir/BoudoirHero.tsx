'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

export function BoudoirHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1566206091558-7f218b696731?w=1920&q=80"
          alt="Boudoir photography"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-zitro-500/30 bg-zitro-500/10 px-4 py-2 text-sm text-zitro-400">
              Boudoir Portfolio
            </span>
          </FadeIn>

          <AnimatedText
            text="Celebrate Your Beauty"
            className="mt-8 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            delay={0.2}
            as="h1"
          />

          <FadeIn direction="up" delay={0.5}>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Boudoir photography is more than images—it&apos;s an experience of
              empowerment, self-love, and celebrating the beauty that makes you
              uniquely you.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {['Empowerment', 'Artistic', 'Intimate', 'Tasteful'].map((word) => (
                <motion.span
                  key={word}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full bg-white/5 px-6 py-3 font-medium text-slate-300 backdrop-blur-sm"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn direction="up" delay={0.8}>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              {[
                { value: '500+', label: 'Sessions' },
                { value: '100%', label: 'Satisfaction' },
                { value: 'Private', label: 'Gallery Access' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-zitro-500/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-zitro-600/5 blur-3xl" />
    </section>
  );
}
