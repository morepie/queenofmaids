import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import CleaningPlans from '@/components/sections/CleaningPlans';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap';
import Reviews from '@/components/sections/Reviews';
import CTA from '@/components/sections/CTA';

function App() {
  return (
    <Layout>
      <Hero />
      <CleaningPlans />
      <ServiceAreaMap />
      <Reviews />
      <CTA />
    </Layout>
  );
}

export default App;
