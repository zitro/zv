'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

const clients = [
  'Nike', 'Mercedes-Benz', 'Apple', 'Chanel', 'Louis Vuitton', 'BMW',
  'Gucci', 'Porsche', 'Dior', 'Prada', 'Cartier', 'Rolex',
  'Hermès', 'Burberry', 'Valentino', 'Versace', 'Fendi', 'Balenciaga',
];

export function ClientLogos() {
  return (
    <section className="overflow-hidden bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              Trusted By
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              World-Class <span className="text-gradient">Brands</span>
            </h2>
          </div>
        </FadeIn>

        {/* Infinite scroll logos */}
        <div className="relative mt-16">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-slate-950 to-transparent" />

          {/* First row - scrolls left */}
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex h-20 w-48 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 px-6 transition-colors hover:bg-white/10"
              >
                <span className="font-display text-xl font-semibold text-slate-400">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolls right */}
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="mt-6 flex gap-12"
          >
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map(
              (client, index) => (
                <div
                  key={`${client}-rev-${index}`}
                  className="flex h-20 w-48 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 px-6 transition-colors hover:bg-white/10"
                >
                  <span className="font-display text-xl font-semibold text-slate-400">
                    {client}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
