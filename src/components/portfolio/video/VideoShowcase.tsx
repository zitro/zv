'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const categories = ['All', 'Commercials', 'Brand Films', 'Social', 'Music Videos'];

const videos = [
  {
    id: 1,
    title: 'Nike "Just Do It" Campaign',
    category: 'Commercials',
    duration: '0:60',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    views: '50M+',
  },
  {
    id: 2,
    title: 'Mercedes-Benz EQS Launch',
    category: 'Brand Films',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    views: '25M+',
  },
  {
    id: 3,
    title: 'Chanel N°5 - The Film',
    category: 'Commercials',
    duration: '1:30',
    thumbnail: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    views: '80M+',
  },
  {
    id: 4,
    title: 'Sony - Alpha Series',
    category: 'Social',
    duration: '0:30',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    views: '100M+',
  },
  {
    id: 5,
    title: 'Brand Story: Startup Origins',
    category: 'Brand Films',
    duration: '5:20',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    views: '2M+',
  },
  {
    id: 6,
    title: 'Artist - "Midnight" Official',
    category: 'Music Videos',
    duration: '4:15',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    views: '15M+',
  },
];

export function VideoShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? videos
    : videos.filter(v => v.category === activeCategory);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-4xl font-bold text-white">
              Featured <span className="text-gradient">Work</span>
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
            {filtered.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 transition-colors group-hover:bg-slate-950/60">
                    <motion.div
                      animate={{
                        scale: hoveredVideo === video.id ? 1.1 : 1,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-zitro-500 text-slate-950"
                    >
                      <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute right-3 top-3 rounded bg-slate-950/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {video.duration}
                  </div>

                  {/* Info */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                    <p className="text-xs text-zitro-400">{video.category}</p>
                    <h3 className="mt-1 font-semibold text-white">{video.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{video.views} views</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
