import type { Metadata } from 'next';
import { VideoHero } from '@/components/portfolio/video/VideoHero';
import { VideoShowcase } from '@/components/portfolio/video/VideoShowcase';
import { VideoCapabilities } from '@/components/portfolio/video/VideoCapabilities';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Video Production',
  description:
    'Cinematic video production for commercials, brand films, and social content. From concept to final delivery.',
};

export default function VideoPortfolioPage() {
  return (
    <>
      <VideoHero />
      <VideoShowcase />
      <VideoCapabilities />
      <CTA />
    </>
  );
}
