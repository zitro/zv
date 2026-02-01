import {
  Hero,
  PortfolioShowcase,
  FeaturedWork,
  Stats,
  Testimonials,
  CTA,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioShowcase />
      <FeaturedWork />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
