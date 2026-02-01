'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  onClick?: () => void;
}

export function ImageReveal({
  src,
  alt,
  className = '',
  aspectRatio = '3/4',
  priority = false,
  onClick,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      style={{ aspectRatio }}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Reveal overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-slate-950"
        initial={{ scaleX: 1 }}
        animate={isInView && isLoaded ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ transformOrigin: 'right' }}
      />

      {/* Gold accent line */}
      <motion.div
        className="absolute inset-y-0 left-0 z-20 w-1 bg-zitro-500"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* View indicator */}
      <motion.div
        className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        <span>View</span>
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
