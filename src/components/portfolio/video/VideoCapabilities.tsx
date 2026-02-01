'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

const capabilities = [
  {
    title: 'Pre-Production',
    items: ['Concept Development', 'Scriptwriting', 'Storyboarding', 'Location Scouting', 'Casting'],
  },
  {
    title: 'Production',
    items: ['4K/8K Cinema Cameras', 'Drone Footage', 'Gimbal & Steadicam', 'Professional Lighting', 'Live Sound'],
  },
  {
    title: 'Post-Production',
    items: ['Color Grading', 'Motion Graphics', 'VFX & Compositing', 'Sound Design', 'Music Licensing'],
  },
  {
    title: 'Delivery',
    items: ['Multiple Formats', 'Social Cuts', 'Broadcast Ready', 'Web Optimized', 'Archive Masters'],
  },
];

const equipment = [
  'RED V-Raptor 8K',
  'ARRI Alexa Mini',
  'Sony FX9',
  'DJI Inspire 3',
  'Zeiss Supreme Primes',
  'ARRI Signature Primes',
];

export function VideoCapabilities() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              Full Service
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Our <span className="text-gradient">Capabilities</span>
            </h2>
          </div>
        </FadeIn>

        {/* Capabilities grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, index) => (
            <FadeIn key={cap.title} direction="up" delay={0.1 * index}>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {cap.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <svg className="h-4 w-4 text-zitro-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Equipment showcase */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-20 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Cinema-Grade Equipment
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {equipment.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
