'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const editorials = [
  {
    id: 1,
    title: 'Midnight Bloom',
    designer: 'Valentino',
    model: 'Bella H.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Urban Poetry',
    designer: 'Balenciaga',
    model: 'Kendall J.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Golden Hour',
    designer: 'Dior',
    model: 'Gigi H.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Neo Classic',
    designer: 'Chanel',
    model: 'Kaia G.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80',
  },
  {
    id: 5,
    title: 'Street Luxe',
    designer: 'Off-White',
    model: 'Naomi C.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80',
  },
];

export function EditorialShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section ref={containerRef} className="overflow-hidden bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
            Editorial Work
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            Recent <span className="text-gradient">Editorials</span>
          </h2>
        </FadeIn>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div style={{ x }} className="mt-16">
        <div className="flex gap-8 px-6 lg:px-8">
          {editorials.map((editorial, index) => (
            <FadeIn
              key={editorial.id}
              direction="up"
              delay={0.1 * index}
              className="flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="group relative w-[400px] cursor-pointer md:w-[500px]"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={editorial.image}
                    alt={editorial.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="500px"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Number */}
                  <div className="absolute right-6 top-6">
                    <span className="font-display text-6xl font-bold text-white/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="font-display text-3xl font-bold text-white">
                        {editorial.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300 backdrop-blur-sm">
                          {editorial.designer}
                        </span>
                        <span className="rounded-full bg-zitro-500/20 px-3 py-1 text-sm text-zitro-400">
                          {editorial.model}
                        </span>
                      </div>
                    </motion.div>

                    {/* View button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-6 flex items-center gap-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <span className="text-sm font-medium">View Editorial</span>
                      <svg
                        className="h-4 w-4"
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
                    </motion.div>
                  </div>

                  {/* Gold accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-zitro-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
