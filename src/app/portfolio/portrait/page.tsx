import type { Metadata } from 'next';
import { PortraitHero } from '@/components/portfolio/portrait/PortraitHero';
import { PortraitGallery } from '@/components/portfolio/portrait/PortraitGallery';
import { TestimonialBanner } from '@/components/portfolio/portrait/TestimonialBanner';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Portrait Photography',
  description:
    'Professional portrait photography for executives, artists, and individuals. Headshots, personal branding, and artistic portraits.',
};

export default function PortraitPortfolioPage() {
  return (
    <>
      <PortraitHero />
      <PortraitGallery />
      <TestimonialBanner />
      <CTA />
    </>
  );
}
