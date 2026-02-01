'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const galleryItems = [
  {
    id: 1,
    title: 'Nike Air Max Campaign',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    size: 'large',
  },
  {
    id: 2,
    title: 'Mercedes EQS Launch',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Chanel N°5',
    category: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Apple iPhone Pro',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80',
    size: 'large',
  },
  {
    id: 5,
    title: 'BMW i Series',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Rolex Submariner',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',
    size: 'small',
  },
  {
    id: 7,
    title: 'Porsche 911',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    size: 'large',
  },
  {
    id: 8,
    title: 'Gucci',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    size: 'small',
  },
];

export function CommercialGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              Selected Work
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Commercial <span className="text-gradient">Gallery</span>
            </h2>
          </div>
        </FadeIn>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <FadeIn
              key={item.id}
              direction="up"
              delay={0.05 * index}
              className={`${
                item.size === 'large'
                  ? 'sm:col-span-2 sm:row-span-2'
                  : item.size === 'medium'
                  ? 'sm:col-span-1 sm:row-span-2'
                  : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-zitro-400">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </motion.div>

                  {/* Expand button */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-zitro-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5 text-slate-950"
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
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
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

              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                <span className="text-sm font-medium text-zitro-400">
                  {selectedImage.category}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-zitro-500 hover:text-slate-950"
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
