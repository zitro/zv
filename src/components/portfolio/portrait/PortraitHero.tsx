'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

const portraits = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
];

export function PortraitHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-zitro-500/30 bg-zitro-500/10 px-4 py-2 text-sm text-zitro-400">
              Portrait Portfolio
            </span>
          </FadeIn>

          <AnimatedText
            text="Capturing Your Authentic Self"
            className="mx-auto mt-8 max-w-4xl font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            delay={0.2}
            as="h1"
          />

          <FadeIn direction="up" delay={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Every face tells a story. We specialize in portraits that reveal
              character, confidence, and authenticity.
            </p>
          </FadeIn>
        </div>

        {/* Portrait grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {portraits.map((src, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Portrait ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Gold border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl ring-2 ring-zitro-500 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Categories */}
        <FadeIn direction="up" delay={0.8}>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['Executive Headshots', 'Artist Portraits', 'Personal Branding', 'Editorial'].map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-slate-300"
              >
                {cat}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
