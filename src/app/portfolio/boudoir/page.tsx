import type { Metadata } from 'next';
import { BoudoirHero } from '@/components/portfolio/boudoir/BoudoirHero';
import { BoudoirGallery } from '@/components/portfolio/boudoir/BoudoirGallery';
import { BoudoirFAQ } from '@/components/portfolio/boudoir/BoudoirFAQ';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Boudoir Photography',
  description:
    'Intimate and empowering boudoir photography. Artistic, tasteful imagery that celebrates beauty, confidence, and self-expression.',
};

export default function BoudoirPortfolioPage() {
  return (
    <>
      <BoudoirHero />
      <BoudoirGallery />
      <BoudoirFAQ />
      <CTA />
    </>
  );
}
