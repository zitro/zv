'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const features = [
  {
    id: 1,
    magazine: 'Vogue Italia',
    issue: 'March 2024',
    title: 'The New Romantics',
    pages: '12-page spread',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
  },
  {
    id: 2,
    magazine: 'Harper\'s Bazaar',
    issue: 'February 2024',
    title: 'Modern Glamour',
    pages: '8-page feature',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
  },
  {
    id: 3,
    magazine: 'Elle',
    issue: 'January 2024',
    title: 'Street to Runway',
    pages: 'Cover + 6 pages',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  },
  {
    id: 4,
    magazine: 'W Magazine',
    issue: 'December 2023',
    title: 'Art of Fashion',
    pages: '10-page editorial',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
  },
];

export function MagazineFeatures() {
  return (
    <section className="bg-slate-900 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              As Seen In
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Magazine <span className="text-gradient">Features</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Our work has graced the pages of the world&apos;s most prestigious
              fashion publications.
            </p>
          </div>
        </FadeIn>

        {/* Horizontal scroll */}
        <div className="mt-16 -mx-6 px-6 overflow-x-auto pb-8">
          <div className="flex gap-8" style={{ width: 'max-content' }}>
            {features.map((feature, index) => (
              <FadeIn key={feature.id} direction="up" delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative w-[320px] cursor-pointer"
                >
                  {/* Magazine cover */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800 shadow-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Magazine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Magazine header */}
                    <div className="absolute inset-x-0 top-0 p-6">
                      <div className="text-center">
                        <span className="font-display text-2xl font-bold text-white drop-shadow-lg">
                          {feature.magazine}
                        </span>
                        <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
                          {feature.issue}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                      <h3 className="font-display text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <span className="mt-2 inline-block rounded-full bg-zitro-500/20 px-3 py-1 text-xs font-medium text-zitro-400">
                        {feature.pages}
                      </span>
                    </div>

                    {/* Hover border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl ring-2 ring-zitro-500 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>

                  {/* Shadow effect */}
                  <div className="absolute -inset-4 -z-10 rounded-2xl bg-zitro-500/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
