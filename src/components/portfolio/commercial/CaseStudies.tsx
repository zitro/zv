'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const caseStudies = [
  {
    id: 1,
    client: 'Nike',
    campaign: 'Air Max 2024',
    challenge: 'Launch the next generation Air Max with imagery that captures both innovation and heritage.',
    results: ['300M+ impressions', '47% engagement increase', 'Featured in 12 countries'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    year: '2024',
  },
  {
    id: 2,
    client: 'Mercedes-Benz',
    campaign: 'EQS Launch',
    challenge: 'Position the luxury EV as the future of automotive excellence.',
    results: ['500M+ reach', 'Cannes Lions shortlist', '89% brand recall'],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
    year: '2024',
  },
  {
    id: 3,
    client: 'Sony',
    campaign: 'Alpha Camera',
    challenge: 'Showcase camera capabilities through stunning visual storytelling.',
    results: ['Global billboard campaign', '2.1B impressions', 'Emmy nomination'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
    year: '2023',
  },
  {
    id: 4,
    client: 'Chanel',
    campaign: 'N°5 Reimagined',
    challenge: 'Modernize an iconic fragrance for a new generation while honoring legacy.',
    results: ['Vogue cover feature', '180M+ views', 'CLIO Award winner'],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80',
    year: '2023',
  },
];

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="bg-slate-900 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
            Case Studies
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            Campaigns That <span className="text-gradient">Deliver</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Case study selector */}
          <div className="space-y-4">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.id} direction="right" delay={0.1 * index}>
                <motion.button
                  onClick={() => setActiveCase(index)}
                  className={`group relative w-full overflow-hidden rounded-xl p-6 text-left transition-all ${
                    activeCase === index
                      ? 'bg-zitro-500/10 ring-1 ring-zitro-500/50'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  whileHover={{ x: activeCase === index ? 0 : 8 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-500">{study.year}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-600" />
                        <span className="text-sm font-medium text-zitro-400">
                          {study.client}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">
                        {study.campaign}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                        {study.challenge}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: activeCase === index ? 45 : 0 }}
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/5"
                    >
                      <svg
                        className="h-5 w-5 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Active indicator */}
                  {activeCase === index && (
                    <motion.div
                      layoutId="activeCaseIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-zitro-500"
                    />
                  )}
                </motion.button>
              </FadeIn>
            ))}
          </div>

          {/* Case study detail */}
          <FadeIn direction="left" delay={0.3}>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={caseStudies[activeCase].image}
                      alt={caseStudies[activeCase].campaign}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                    {/* Client badge */}
                    <div className="absolute left-6 top-6 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                      <span className="font-semibold text-white">
                        {caseStudies[activeCase].client}
                      </span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="glass rounded-xl p-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zitro-500">
                      Results
                    </h4>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {caseStudies[activeCase].results.map((result, index) => (
                        <div
                          key={index}
                          className="rounded-lg bg-white/5 p-4 text-center"
                        >
                          <span className="text-sm font-medium text-white">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
