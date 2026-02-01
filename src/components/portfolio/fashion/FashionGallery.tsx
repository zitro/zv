'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const filters = [
  { id: 'all', name: 'All' },
  { id: 'editorial', name: 'Editorial' },
  { id: 'campaign', name: 'Campaign' },
  { id: 'runway', name: 'Runway' },
  { id: 'beauty', name: 'Beauty' },
];

const images = [
  { id: 1, category: 'editorial', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', title: 'Vogue Editorial' },
  { id: 2, category: 'campaign', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', title: 'Dior Campaign' },
  { id: 3, category: 'runway', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', title: 'Paris Fashion Week' },
  { id: 4, category: 'beauty', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80', title: 'Beauty Editorial' },
  { id: 5, category: 'editorial', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', title: 'Elle Feature' },
  { id: 6, category: 'campaign', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80', title: 'Chanel Spring' },
  { id: 7, category: 'runway', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', title: 'Milan Fashion Week' },
  { id: 8, category: 'beauty', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', title: 'Glossier Campaign' },
  { id: 9, category: 'editorial', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', title: "Harper's Bazaar" },
  { id: 10, category: 'campaign', image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80', title: 'Gucci Fall' },
  { id: 11, category: 'runway', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', title: 'New York Fashion Week' },
  { id: 12, category: 'beauty', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', title: 'Charlotte Tilbury' },
];

export function FashionGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                Gallery
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                Fashion <span className="text-gradient">Archive</span>
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-zitro-500 text-slate-950'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/0 transition-colors group-hover:bg-slate-950/40" />

                {/* Title */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs capitalize text-zitro-400">{item.category}</p>
                </div>

                {/* Expand icon */}
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image.replace('w=800', 'w=1400')}
                alt={selectedImage.title}
                width={1400}
                height={1800}
                className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                <p className="text-xs uppercase tracking-wider text-zitro-400">
                  {selectedImage.category}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-zitro-500 hover:text-slate-950"
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
