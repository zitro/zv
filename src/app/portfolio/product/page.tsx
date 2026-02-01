import type { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { ProductGallery } from '@/components/portfolio/product/ProductGallery';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Product Photography',
  description:
    'Stunning product photography for luxury brands and e-commerce. From packshots to lifestyle imagery that sells.',
};

const capabilities = [
  { title: 'E-commerce', description: 'Clean, conversion-focused product shots' },
  { title: 'Luxury', description: 'High-end imagery for premium brands' },
  { title: 'Food & Beverage', description: 'Appetizing visuals that sell' },
  { title: '360° Views', description: 'Interactive product experiences' },
];

export default function ProductPortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-zitro-950/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-zitro-500/30 bg-zitro-500/10 px-4 py-2 text-sm text-zitro-400">
                  Product Portfolio
                </span>
              </FadeIn>

              <AnimatedText
                text="Products That Sell Themselves"
                className="mt-8 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                delay={0.2}
                as="h1"
              />

              <FadeIn direction="up" delay={0.4}>
                <p className="mt-6 text-lg text-slate-400">
                  We transform products into visual stories that drive
                  conversions and build brand desire. From luxury goods to
                  everyday essentials.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {capabilities.map((cap) => (
                    <div key={cap.title} className="rounded-xl bg-white/5 p-4">
                      <h3 className="font-semibold text-white">{cap.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" delay={0.3}>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                    alt="Product photography"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-2xl bg-zitro-500/20 blur-2xl" />
                <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-zitro-600/10 blur-3xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProductGallery />
      <CTA />
    </>
  );
}
