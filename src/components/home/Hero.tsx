'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import Link from 'next/link';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Smooth mouse tracking for gradient
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 100);
      mouseY.set((clientY / innerHeight) * 100);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Dynamic gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Animated shapes */}
      <motion.div
        style={{ y, scale }}
        className="absolute right-[10%] top-[15%] h-64 w-64 rounded-full bg-zitro-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute left-[5%] bottom-[20%] h-48 w-48 rounded-full bg-zitro-600/10 blur-3xl"
      />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zitro-500/30 bg-zitro-500/10 px-4 py-2 text-sm text-zitro-400">
            <span className="h-2 w-2 rounded-full bg-zitro-500 animate-pulse" />
            Featured in Vogue & Global Campaigns
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="max-w-5xl">
          <AnimatedText
            text="Crafting Visual Stories That"
            className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            delay={0.3}
            as="h1"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="font-display text-5xl font-bold leading-tight text-gradient sm:text-6xl md:text-7xl lg:text-8xl">
              Captivate the World
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 max-w-2xl text-lg text-slate-400 md:text-xl"
        >
          Award-winning commercial, fashion, and editorial photography.
          We transform brands into visual experiences that resonate globally.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton className="group relative overflow-hidden rounded-full bg-zitro-500 px-8 py-4 text-lg font-semibold text-slate-950 transition-all hover:shadow-2xl hover:shadow-zitro-500/25">
            <Link href="/portfolio" className="relative z-10 flex items-center gap-2">
              View Our Work
              <motion.svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ x: 5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
            <motion.div
              className="absolute inset-0 bg-zitro-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </MagneticButton>

          <MagneticButton className="group rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-zitro-500/50 hover:bg-zitro-500/10">
            <Link href="/contact" className="flex items-center gap-2">
              Start a Project
              <motion.span
                className="inline-block"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500">
              Scroll to explore
            </span>
            <div className="h-12 w-6 rounded-full border border-slate-700 p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-zitro-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
