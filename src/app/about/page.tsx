import type { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Stats } from '@/components/home/Stats';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Zitro Visuals - award-winning photography studio with 15+ years of experience creating stunning visuals for global brands.',
};

const values = [
  {
    title: 'Artistic Excellence',
    description:
      'Every frame is crafted with meticulous attention to detail, blending technical precision with creative vision.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Client Partnership',
    description:
      'We believe in collaborative relationships, working closely with clients to understand and exceed their vision.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'Pushing creative boundaries with cutting-edge techniques while honoring timeless photographic principles.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Global Reach',
    description:
      'Based in Los Angeles, we serve clients worldwide, bringing our expertise to any location.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const clients = [
  'Vogue', 'Nike', 'Mercedes-Benz', 'Chanel', 'Apple', 'Louis Vuitton',
  'Gucci', 'BMW', 'Dior', 'Prada', 'Versace', 'Cartier',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-zitro-950/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeIn direction="up">
                <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                  Our Story
                </span>
              </FadeIn>

              <AnimatedText
                text="Creating Visual Magic Since 2009"
                className="mt-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                delay={0.2}
                as="h1"
              />

              <FadeIn direction="up" delay={0.4}>
                <p className="mt-6 text-lg leading-relaxed text-slate-400">
                  Zitro Visuals was founded with a singular vision: to create
                  photographs and films that don&apos;t just capture moments, but
                  tell stories that resonate across cultures and generations.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  Over 15 years, we&apos;ve had the privilege of working with the
                  world&apos;s most prestigious brands and publications, from Vogue
                  editorials to global advertising campaigns seen by millions.
                </p>
              </FadeIn>
            </div>

            <FadeIn direction="left" delay={0.3}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Behind the scenes at Zitro Visuals"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                What Drives Us
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} direction="up" delay={0.1 * index}>
                <div className="glass group rounded-2xl p-8 transition-all hover:bg-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zitro-500/10 text-zitro-500 transition-colors group-hover:bg-zitro-500 group-hover:text-slate-950">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Clients */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                Trusted By
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                World-Class <span className="text-gradient">Brands</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex h-20 w-40 items-center justify-center rounded-xl bg-white/5 px-6 transition-colors hover:bg-white/10"
                >
                  <span className="font-display text-xl font-semibold text-slate-400">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
