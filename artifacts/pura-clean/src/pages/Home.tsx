import { Helmet } from 'react-helmet-async';
import Hero from '@/components/sections/Hero';
import CleaningPlans from '@/components/sections/CleaningPlans';
import OurServices from '@/components/sections/OurServices';
import HowToBook from '@/components/sections/HowToBook';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>House Cleaning Maid Services | Queen of Maids</title>
        <meta name="description" content="Professional house cleaning and maid services across Phoenix, Salt Lake City, Las Vegas, and Denver. Vetted cleaners, flexible scheduling, and a 200% Happiness Guarantee." />
      </Helmet>
      <Hero />
      <CleaningPlans />
      <OurServices />
      <HowToBook />
      <ServiceAreaMap />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}
