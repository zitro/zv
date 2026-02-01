'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const portraits = [
  { id: 1, name: 'Alexandra Chen', role: 'CEO, TechVentures', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80' },
  { id: 2, name: 'Marcus Williams', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
  { id: 3, name: 'Sofia Rodriguez', role: 'Recording Artist', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80' },
  { id: 4, name: 'James Thompson', role: 'Author & Speaker', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80' },
  { id: 5, name: 'Emily Park', role: 'Fashion Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80' },
  { id: 6, name: 'David Kim', role: 'Tech Entrepreneur', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80' },
  { id: 7, name: 'Olivia Martinez', role: 'Actress', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80' },
  { id: 8, name: 'Michael Brown', role: 'Investment Partner', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80' },
];

export function PortraitGallery() {
  const [selectedPortrait, setSelectedPortrait] = useState<typeof portraits[0] | null>(null);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Portrait <span className="text-gradient">Gallery</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of portraits featuring executives, artists, and
            individuals who trusted us to capture their essence.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portraits.map((portrait, index) => (
            <FadeIn key={portrait.id} direction="up" delay={0.05 * index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedPortrait(portrait)}
              >
                <Image
                  src={portrait.image}
                  alt={portrait.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay with info */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {portrait.name}
                  </h3>
                  <p className="mt-1 text-sm text-zitro-400">{portrait.role}</p>
                </div>

                {/* Always visible name */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 group-hover:opacity-0 transition-opacity">
                  <p className="text-sm font-medium text-white">{portrait.name}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPortrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedPortrait(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPortrait.image.replace('w=800', 'w=1200')}
                alt={selectedPortrait.name}
                width={1200}
                height={1600}
                className="h-auto max-h-[80vh] w-auto rounded-lg object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-slate-950 to-transparent p-6">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {selectedPortrait.name}
                </h3>
                <p className="text-zitro-400">{selectedPortrait.role}</p>
              </div>
              <button
                onClick={() => setSelectedPortrait(null)}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-zitro-500 hover:text-slate-950"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
