'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const testimonials = [
  {
    id: 1,
    quote:
      'Zitro Visuals elevated our brand to new heights. Their attention to detail and creative vision exceeded all expectations.',
    author: 'Sarah C.',
    role: 'Creative Director, Nike',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 2,
    quote:
      'Working with Zitro was transformative. They understood our vision and brought it to life in ways we never imagined possible.',
    author: 'Marcus W.',
    role: 'Brand Manager, Mercedes-Benz',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    id: 3,
    quote:
      'The team\'s professionalism and artistic excellence made them our go-to partner for all major campaigns.',
    author: 'Emma T.',
    role: 'Editor-in-Chief, Vogue Italia',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="testimonial-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              Testimonials
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16">
          <div className="relative mx-auto max-w-4xl">
            {/* Quote mark */}
            <div className="absolute -left-8 -top-8 text-8xl font-serif text-zitro-500/20">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl">
                  {testimonials[activeIndex].quote}
                </p>

                <div className="mt-12 flex flex-col items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-zitro-500/50">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-slate-400">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-zitro-500 hover:bg-zitro-500/10"
                aria-label="Previous testimonial"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-zitro-500'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-zitro-500 hover:bg-zitro-500/10"
                aria-label="Next testimonial"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
