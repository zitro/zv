'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

const footerLinks = {
  services: [
    { name: 'Commercial', href: '/portfolio/commercial' },
    { name: 'Fashion', href: '/portfolio/fashion' },
    { name: 'Product', href: '/portfolio/product' },
    { name: 'Portrait', href: '/portfolio/portrait' },
    { name: 'Boudoir', href: '/portfolio/boudoir' },
    { name: 'Video', href: '/portfolio/video' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/zitrovisuals' },
    { name: 'Vimeo', href: 'https://vimeo.com/zitrovisuals' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zitrovisuals' },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zitro-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <FadeIn direction="up" className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Mainlogo_Wh_wShadow.png"
                alt="Zitro Visuals"
                width={200}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Award-winning photography and videography studio. Featured in
              Vogue and trusted by brands worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:bg-zitro-500 hover:text-slate-950"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.name === 'Instagram' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {item.name === 'Vimeo' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                    </svg>
                  )}
                  {item.name === 'LinkedIn' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn direction="up" delay={0.1} className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zitro-500">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Company */}
          <FadeIn direction="up" delay={0.2} className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zitro-500">
              Company
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact */}
          <FadeIn direction="up" delay={0.3} className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zitro-500">
              Get in Touch
            </h3>
            <div className="mt-6 space-y-4">
              <p className="text-sm text-slate-400">
                Ready to create something extraordinary?
              </p>
              <a
                href="mailto:hello@zitrovisuals.com"
                className="block text-lg font-medium text-white transition-colors hover:text-zitro-400"
              >
                hello@zitrovisuals.com
              </a>
              <p className="text-sm text-slate-500">
                Los Angeles, CA
                <br />
                Available Worldwide
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Zitro Visuals. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
