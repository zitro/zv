import type { Metadata } from 'next';
import { FashionHero } from '@/components/portfolio/fashion/FashionHero';
import { EditorialShowcase } from '@/components/portfolio/fashion/EditorialShowcase';
import { MagazineFeatures } from '@/components/portfolio/fashion/MagazineFeatures';
import { FashionGallery } from '@/components/portfolio/fashion/FashionGallery';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Fashion Photography',
  description:
    'Editorial and campaign fashion photography. Featured in Vogue, Harper\'s Bazaar, and Elle. High-fashion imagery that defines style.',
};

export default function FashionPortfolioPage() {
  return (
    <>
      <FashionHero />
      <MagazineFeatures />
      <EditorialShowcase />
      <FashionGallery />
      <CTA />
    </>
  );
}
