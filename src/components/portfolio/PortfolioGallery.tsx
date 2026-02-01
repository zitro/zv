'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'product', name: 'Product' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'boudoir', name: 'Boudoir' },
];

const portfolioItems = [
  {
    id: 1,
    category: 'commercial',
    title: 'Nike Air Max Campaign',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    aspectRatio: '4/5',
  },
  {
    id: 2,
    category: 'fashion',
    title: 'Vogue Italia Editorial',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 3,
    category: 'product',
    title: 'Chanel Beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    aspectRatio: '1/1',
  },
  {
    id: 4,
    category: 'portrait',
    title: 'Executive Portraits',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 5,
    category: 'fashion',
    title: 'Spring Collection',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    aspectRatio: '4/5',
  },
  {
    id: 6,
    category: 'commercial',
    title: 'Mercedes-Benz EQS',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    aspectRatio: '16/9',
  },
  {
    id: 7,
    category: 'boudoir',
    title: 'Intimate Moments',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 8,
    category: 'product',
    title: 'Luxury Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    aspectRatio: '1/1',
  },
  {
    id: 9,
    category: 'portrait',
    title: 'Artist Series',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    aspectRatio: '4/5',
  },
  {
    id: 10,
    category: 'fashion',
    title: 'Editorial Noir',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 11,
    category: 'commercial',
    title: 'Apple Product Launch',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80',
    aspectRatio: '16/9',
  },
  {
    id: 12,
    category: 'boudoir',
    title: 'Empowerment Series',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    aspectRatio: '4/5',
  },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category filters */}
        <FadeIn direction="up">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-zitro-500 text-slate-950'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="mb-6 break-inside-avoid"
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-xl"
                  style={{ aspectRatio: item.aspectRatio }}
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Gold accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-zitro-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-medium uppercase tracking-wider text-zitro-400">
                      {categories.find((c) => c.id === item.category)?.name}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <svg
                      className="h-5 w-5 text-white"
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
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image.replace('w=800', 'w=1600')}
                alt={selectedImage.title}
                width={1600}
                height={1200}
                className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                <span className="text-sm font-medium text-zitro-400">
                  {categories.find((c) => c.id === selectedImage.category)?.name}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-zitro-500 hover:text-slate-950"
                aria-label="Close lightbox"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
