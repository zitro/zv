import type { Metadata } from 'next';
import { CommercialHero } from '@/components/portfolio/commercial/CommercialHero';
import { CaseStudies } from '@/components/portfolio/commercial/CaseStudies';
import { ClientLogos } from '@/components/portfolio/commercial/ClientLogos';
import { CommercialGallery } from '@/components/portfolio/commercial/CommercialGallery';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Commercial Photography',
  description:
    'High-impact commercial photography for global brands. Advertising campaigns, brand stories, and corporate imagery that drives results.',
};

export default function CommercialPortfolioPage() {
  return (
    <>
      <CommercialHero />
      <CaseStudies />
      <CommercialGallery />
      <ClientLogos />
      <CTA />
    </>
  );
}
