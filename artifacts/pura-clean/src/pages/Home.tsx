import { Helmet } from 'react-helmet-async';
import Hero from '@/components/sections/Hero';
import CleaningPlans from '@/components/sections/CleaningPlans';
import OurServices from '@/components/sections/OurServices';
import HowToBook from '@/components/sections/HowToBook';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import { organizationSchema, aggregateRatingSchema, faqSchema } from '@/lib/schema';

const homepageFaqs = [
  { q: 'How much does house cleaning cost?', a: 'Our monthly memberships start at $99/month for a Partial Clean (kitchen and bathrooms), $149/month for our most popular Full Clean (all rooms), and $179/month for Full Premium (all rooms plus deep detailing, ceiling fans, and priority scheduling). One-time deep cleans and specialty services are quoted based on home size.' },
  { q: "What's the difference between the three plans?", a: "The Partial Clean covers kitchen and bathrooms only. The Full Clean adds all bedrooms and living areas. The Full Premium plan adds deep detailing, ceiling fans, vents, and priority scheduling on top of everything in Full Clean. All plans are billed monthly and include our 200% Happiness Guarantee." },
  { q: "What's included in a standard cleaning?", a: "Every standard cleaning includes dusting all reachable surfaces, vacuuming and mopping all floors, full bathroom cleaning and sanitization, kitchen counter and appliance wipe-down, trash removal, and general tidying of living spaces. We follow a detailed checklist so nothing gets missed." },
  { q: "How does the 200% guarantee work?", a: "If you're not satisfied with any cleaning, call us within 24 hours and we'll send your team back to re-clean at no charge. If the redo still doesn't meet your expectations, we'll issue a full refund. That's our 200% Happiness Guarantee, no questions asked." },
  { q: 'Are your cleaners background-checked?', a: "Yes. Every Queen of Maids cleaner undergoes a thorough background check, identity verification, and in-person interview before being assigned to any home. All cleaners are fully insured and bonded, so your home and belongings are protected on every visit." },
  { q: 'Can I switch plans or cancel?', a: "Absolutely. Memberships start with a 3-month commitment, after which you can pause, downgrade, upgrade, or cancel anytime with at least 48 hours' notice before your next scheduled visit. We make it easy to adjust as your life changes." },
  { q: 'When am I charged?', a: "You're billed monthly, starting on your first cleaning date. Recurring charges happen on the same date each month. We accept all major credit cards and process payments securely." },
  { q: 'Do you bring your own supplies?', a: "Yes! Our teams bring all supplies and professional-grade equipment to every visit. If you have preferred products or allergies, just let us know and we'll accommodate." },
  { q: 'What areas do you serve?', a: "We currently serve four major metro areas: Phoenix, AZ (13 cities including Scottsdale, Tempe, Mesa, and Chandler), Salt Lake City, UT (12 cities including Sandy, Provo, and Draper), Las Vegas, NV (10 cities including Henderson and Summerlin), and Denver, CO (12 cities including Aurora, Lakewood, and Arvada). Visit our Service Areas page for the full list." },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>House Cleaning &amp; Maid Services | Queen of Maids</title>
        <meta name="description" content="Professional house cleaning starting at $99/month. Background-checked cleaners, 200% happiness guarantee. Serving Phoenix, Salt Lake City, Las Vegas &amp; Denver. Book in 60 seconds." />
        <meta property="og:title" content="House Cleaning &amp; Maid Services | Queen of Maids" />
        <meta property="og:description" content="Professional house cleaning starting at $99/month. 200% happiness guarantee. Book in 60 seconds." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://queenofmaids.com/" />
        <meta property="og:image" content="https://queenofmaids.com/opengraph.jpg" />
        <meta property="og:site_name" content="Queen of Maids" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="House Cleaning &amp; Maid Services | Queen of Maids" />
        <meta name="twitter:description" content="Professional house cleaning starting at $99/month. 200% happiness guarantee." />
        <meta name="twitter:image" content="https://queenofmaids.com/opengraph.jpg" />
        <link rel="canonical" href="https://queenofmaids.com/" />
      </Helmet>
      <SchemaMarkup schemas={[
        organizationSchema(),
        aggregateRatingSchema(),
        faqSchema(homepageFaqs),
      ]} />
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
