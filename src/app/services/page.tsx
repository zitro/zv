import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Professional photography and videography services including commercial campaigns, fashion editorials, product photography, portraits, and boudoir.',
};

const services = [
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description:
      'High-impact imagery for advertising campaigns, brand stories, and corporate communications that drive results.',
    features: [
      'Brand campaign photography',
      'Advertising imagery',
      'Corporate photography',
      'Lifestyle & editorial',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    href: '/portfolio/commercial',
  },
  {
    id: 'fashion',
    title: 'Fashion Photography',
    description:
      'Editorial and campaign work for fashion brands, magazines, and designers that captures the essence of style.',
    features: [
      'Editorial shoots',
      'Lookbooks & campaigns',
      'Runway coverage',
      'Designer collaborations',
    ],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    href: '/portfolio/fashion',
  },
  {
    id: 'product',
    title: 'Product Photography',
    description:
      'Stunning product imagery that showcases your offerings in their best light, from luxury goods to e-commerce.',
    features: [
      'E-commerce photography',
      'Luxury product shots',
      'Packshot & catalog',
      '360° product views',
    ],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    href: '/portfolio/product',
  },
  {
    id: 'portrait',
    title: 'Portrait Photography',
    description:
      'Professional portraits for executives, artists, and individuals seeking to make a lasting impression.',
    features: [
      'Executive headshots',
      'Artist & musician portraits',
      'Personal branding',
      'Environmental portraits',
    ],
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    href: '/portfolio/portrait',
  },
  {
    id: 'boudoir',
    title: 'Boudoir Photography',
    description:
      'Intimate and empowering photography that celebrates beauty, confidence, and self-expression.',
    features: [
      'Artistic boudoir',
      'Bridal boudoir',
      'Couples sessions',
      'Empowerment photography',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    href: '/portfolio/boudoir',
  },
  {
    id: 'video',
    title: 'Video Production',
    description:
      'Cinematic video content from commercials to brand films that tell compelling visual stories.',
    features: [
      'TV commercials',
      'Brand films',
      'Social media content',
      'Behind-the-scenes',
    ],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    href: '/portfolio/video',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We begin with an in-depth consultation to understand your vision, brand, and objectives.',
  },
  {
    step: '02',
    title: 'Concept',
    description:
      'Our creative team develops concepts, mood boards, and shot lists tailored to your needs.',
  },
  {
    step: '03',
    title: 'Production',
    description:
      'Professional execution with our expert team, state-of-the-art equipment, and attention to every detail.',
  },
  {
    step: '04',
    title: 'Delivery',
    description:
      'Expert post-production and timely delivery of assets ready for your campaigns.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-slate-950 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-zitro-950/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <FadeIn direction="up">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              What We Do
            </span>
          </FadeIn>

          <AnimatedText
            text="Services Tailored to Your Vision"
            className="mt-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            delay={0.2}
            as="h1"
          />

          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              From concept to final delivery, we offer comprehensive photography
              and videography services that bring your brand&apos;s story to life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeIn
                key={service.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                      {service.id}
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <svg
                            className="h-5 w-5 text-zitro-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="mt-8 inline-flex items-center gap-2 font-medium text-zitro-400 transition-colors hover:text-zitro-300"
                    >
                      View Portfolio
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
                    </Link>
                  </div>

                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                How We Work
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                Our <span className="text-gradient">Process</span>
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={0.1 * index}>
                <div className="relative">
                  <span className="font-display text-6xl font-bold text-zitro-500/20">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>

                  {index < process.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-px w-full bg-gradient-to-r from-zitro-500/50 to-transparent lg:block" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
