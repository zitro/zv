'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';

const categories = [
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Brand Campaigns',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    href: '/portfolio/commercial',
  },
  {
    id: 'fashion',
    title: 'Fashion',
    subtitle: 'Editorial & Runway',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    href: '/portfolio/fashion',
  },
  {
    id: 'product',
    title: 'Product',
    subtitle: 'E-commerce & Luxury',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    href: '/portfolio/product',
  },
  {
    id: 'portrait',
    title: 'Portrait',
    subtitle: 'Personal & Professional',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    href: '/portfolio/portrait',
  },
  {
    id: 'boudoir',
    title: 'Boudoir',
    subtitle: 'Intimate & Artistic',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    href: '/portfolio/boudoir',
  },
];

export function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-950 py-32">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
            Our Expertise
          </span>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Explore Our{' '}
            <span className="text-gradient">Specialties</span>
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            From high-fashion editorials to intimate portraits, we bring
            artistic vision and technical excellence to every shoot.
          </p>
        </FadeIn>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div style={{ x }} className="mt-16">
        <div className="flex gap-6 px-6 lg:px-8">
          {categories.map((category, index) => (
            <FadeIn
              key={category.id}
              direction="up"
              delay={0.1 * index}
              className="flex-shrink-0"
            >
              <Link href={category.href} className="group block">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[500px] w-[350px] overflow-hidden rounded-2xl md:h-[600px] md:w-[400px]"
                >
                  {/* Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="400px"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Gold accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-zitro-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.span
                      className="text-sm font-medium text-zitro-400"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {category.subtitle}
                    </motion.span>
                    <h3 className="mt-2 font-display text-3xl font-bold text-white">
                      {category.title}
                    </h3>

                    {/* Arrow */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">View Gallery</span>
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

                  {/* Number */}
                  <div className="absolute right-6 top-6">
                    <span className="font-display text-6xl font-bold text-white/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </motion.div>

      {/* View all button */}
      <div className="mt-16 text-center">
        <FadeIn direction="up" delay={0.5}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-zitro-500/50 hover:bg-zitro-500/10"
          >
            View All Work
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
        </FadeIn>
      </div>
    </section>
  );
}
