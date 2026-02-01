'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const featuredProjects = [
  {
    id: 1,
    title: 'Vogue Italia',
    category: 'Fashion Editorial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
    description: 'A stunning 12-page editorial exploring contemporary femininity through avant-garde fashion.',
  },
  {
    id: 2,
    title: 'Nike Air Max',
    category: 'Commercial Campaign',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    description: 'Global campaign featuring dynamic product photography and lifestyle imagery.',
  },
  {
    id: 3,
    title: 'Bobbi Brown',
    category: 'Product Photography',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80',
    description: 'Luxury beauty campaign showcasing the iconic Chanel aesthetic with modern sophistication.',
  },
  {
    id: 4,
    title: 'Mercedes-Benz',
    category: 'Automotive',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
    description: 'Cinematic automotive photography for the new EQS luxury electric vehicle launch.',
  },
];

export function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-900 py-32"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={featuredProjects[activeIndex].image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeIn direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                Selected Work
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Featured{' '}
                <span className="text-gradient">Projects</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="max-w-md text-lg text-slate-400">
              A selection of our most impactful collaborations with global
              brands and publications.
            </p>
          </FadeIn>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main featured image */}
          <FadeIn direction="left" className="lg:row-span-2">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featuredProjects[activeIndex].image}
                    alt={featuredProjects[activeIndex].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-medium text-zitro-400">
                      {featuredProjects[activeIndex].category}
                    </span>
                    <h3 className="mt-2 font-display text-4xl font-bold text-white">
                      {featuredProjects[activeIndex].title}
                    </h3>
                    <p className="mt-4 max-w-md text-slate-300">
                      {featuredProjects[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Year badge */}
              <div className="absolute right-6 top-6 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">
                  {featuredProjects[activeIndex].year}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Project list */}
          <div className="flex flex-col gap-4">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.id} direction="right" delay={0.1 * index}>
                <motion.button
                  onClick={() => setActiveIndex(index)}
                  className={`group relative w-full overflow-hidden rounded-xl p-6 text-left transition-all ${
                    activeIndex === index
                      ? 'bg-zitro-500/10 ring-1 ring-zitro-500/50'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-slate-500">
                        {project.category}
                      </span>
                      <h4 className="mt-1 font-display text-xl font-semibold text-white">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500">{project.year}</span>
                      <motion.div
                        className={`h-2 w-2 rounded-full transition-colors ${
                          activeIndex === index ? 'bg-zitro-500' : 'bg-slate-600'
                        }`}
                        animate={
                          activeIndex === index
                            ? { scale: [1, 1.5, 1] }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.5, repeat: activeIndex === index ? Infinity : 0 }}
                      />
                    </div>
                  </div>

                  {/* Progress bar */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-zitro-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      onAnimationComplete={() => {
                        if (activeIndex === featuredProjects.length - 1) {
                          setActiveIndex(0);
                        } else {
                          setActiveIndex(activeIndex + 1);
                        }
                      }}
                    />
                  )}
                </motion.button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
