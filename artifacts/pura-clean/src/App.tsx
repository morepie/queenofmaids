import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import OurServices from '@/components/sections/OurServices';
import HowToBook from '@/components/sections/HowToBook';
import CleaningPlans from '@/components/sections/CleaningPlans';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

function App() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <CleaningPlans />
      <OurServices />
      <HowToBook />
      <ServiceAreaMap />
      <Reviews />
      <FAQ />
      <CTA />
    </Layout>
  );
}

export default App;
