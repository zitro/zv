'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const categories = ['All', 'Luxury', 'Tech', 'Beauty', 'Food', 'Fashion'];

const products = [
  { id: 1, title: 'Rolex Submariner', category: 'Luxury', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80' },
  { id: 2, title: 'iPhone Pro', category: 'Tech', image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80' },
  { id: 3, title: 'Chanel Perfume', category: 'Beauty', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80' },
  { id: 4, title: 'Artisan Coffee', category: 'Food', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80' },
  { id: 5, title: 'Designer Handbag', category: 'Fashion', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80' },
  { id: 6, title: 'Smart Watch', category: 'Tech', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80' },
  { id: 7, title: 'Luxury Skincare', category: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80' },
  { id: 8, title: 'Fine Dining', category: 'Food', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80' },
  { id: 9, title: 'Diamond Ring', category: 'Luxury', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80' },
  { id: 10, title: 'Headphones', category: 'Tech', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80' },
  { id: 11, title: 'Sneakers', category: 'Fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
  { id: 12, title: 'Champagne', category: 'Food', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80' },
];

export function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-4xl font-bold text-white">
              Product <span className="text-gradient">Gallery</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-zitro-500 text-slate-950'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-800"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay with zoom effect */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === product.id ? 1 : 0,
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: hoveredId === product.id ? 1 : 0.8,
                      opacity: hoveredId === product.id ? 1 : 0,
                    }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zitro-500">
                      <svg className="h-8 w-8 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <p className="font-display text-xl font-semibold text-white">{product.title}</p>
                    <p className="mt-1 text-sm text-zitro-400">{product.category}</p>
                  </motion.div>
                </motion.div>

                {/* Bottom info bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{product.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
