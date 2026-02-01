import type { Metadata } from 'next';
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our collection of commercial, fashion, product, portrait, and boudoir photography. Featured in Vogue and global campaigns.',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
    </>
  );
}
