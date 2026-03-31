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
