'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const images = [
  { id: 1, image: 'https://images.unsplash.com/photo-1616091216791-a5360a5fe084?w=800&q=80', style: 'Classic' },
  { id: 2, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80', style: 'Artistic' },
  { id: 3, image: 'https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?w=800&q=80', style: 'Romantic' },
  { id: 4, image: 'https://images.unsplash.com/photo-1622495966027-e0173192c728?w=800&q=80', style: 'Elegant' },
  { id: 5, image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', style: 'Bold' },
  { id: 6, image: 'https://images.unsplash.com/photo-1512484457149-266d165a4eca?w=800&q=80', style: 'Sensual' },
  { id: 7, image: 'https://images.unsplash.com/photo-1502767882403-636aee14f873?w=800&q=80', style: 'Intimate' },
  { id: 8, image: 'https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=800&q=80', style: 'Sultry' },
];

export function BoudoirGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Tasteful <span className="text-gradient">Artistry</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              A curated selection showcasing the elegance and empowerment of our
              boudoir sessions.
            </p>
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="group relative mb-6 cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={`Boudoir ${item.style}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Style badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                  >
                    {item.style}
                  </motion.div>

                  {/* Gold corner accent */}
                  <div className="absolute right-0 top-0 h-16 w-16">
                    <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-zitro-500/0 transition-colors group-hover:border-zitro-500" />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Inquiry CTA */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-slate-400">Interested in a private session?</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-zitro-500/50 bg-zitro-500/10 px-8 py-4 font-semibold text-zitro-400 transition-colors hover:bg-zitro-500 hover:text-slate-950"
            >
              Request Private Consultation
            </motion.a>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image.replace('w=800', 'w=1200')}
                alt={selectedImage.style}
                width={1200}
                height={1600}
                className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
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
