import { useEffect, useRef, useState } from 'react';
import { useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, CheckCircle, Clock, Sparkles, Phone, Mail, MapPin, ArrowRight, ChevronDown, Users, Calendar, Repeat, Award } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'wouter';
import { findCityBySlug } from '@/data/metros';
import { cleaningPlans, reviews, aggregateRating } from '@/data/content';
import { cn } from '@/lib/utils';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function CityMap({ lat, lng, cityName }: { lat: number; lng: number; cityName: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 12,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const icon = L.divIcon({
      className: '',
      html: `<div style="width:28px;height:28px;background:hsl(270,50%,36%);border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.25);"></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(`<strong style="font-family:Inter,sans-serif;">${cityName}</strong>`)
      .openPopup();

    mapInstance.current = map;
    return () => { map.remove(); mapInstance.current = null; };
  }, [lat, lng, cityName]);

  return <div ref={mapRef} className="w-full h-[300px] md:h-[400px]" />;
}

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-semibold text-sm text-foreground">{question}</span>
        <ChevronDown className={cn("w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

const services = [
  { name: 'Standard House Cleaning', desc: 'Regular upkeep for a consistently clean home' },
  { name: 'Deep Cleaning', desc: 'Thorough top-to-bottom cleaning of every room' },
  { name: 'Move In/Out Cleaning', desc: 'Get your deposit back or start fresh' },
  { name: 'Recurring Cleaning', desc: 'Weekly or monthly membership service' },
  { name: 'Vacation Rental Cleaning', desc: 'Turnover cleaning between guests' },
  { name: 'Custom Cleanings', desc: 'Tailored to your specific needs' },
];

const howItWorks = [
  { icon: Phone, title: 'Get a Free Quote', desc: 'Call us or request a quote online. We\'ll discuss your home and needs.' },
  { icon: Calendar, title: 'Schedule Your Clean', desc: 'Pick a date and time that works for you. Same-week availability.' },
  { icon: Users, title: 'Meet Your Cleaner', desc: 'Your vetted, background-checked cleaner arrives on time, every time.' },
  { icon: Sparkles, title: 'Enjoy Your Clean Home', desc: 'Come home to a spotless space. Backed by our 200% Happiness Guarantee.' },
];

export default function CityLanding() {
  const params = useParams<{ city: string }>();
  const [, setLocation] = useLocation();
  const result = findCityBySlug(params.city || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.city]);

  if (!result) {
    return (
      <section className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold">City not found</h1>
        <p className="text-muted-foreground mt-4">We couldn't find that service area.</p>
        <button
          onClick={() => setLocation(base + '/service-areas')}
          className="mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
        >
          View All Service Areas
        </button>
      </section>
    );
  }

  const { metro, city } = result;
  const nearbyCities = metro.cities.filter(c => c.slug !== city.slug);
  const pageTitle = `House Cleaning in ${city.name}, ${metro.stateAbbr} | Queen of Maids`;
  const pageDescription = `Professional house cleaning services in ${city.name}, ${metro.state}. Vetted cleaners, flexible scheduling, and a 200% Happiness Guarantee. Serving the ${metro.name} metro area for 14+ years.`;

  const cityReviews = reviews.slice(0, 6);

  const faqs = [
    {
      q: `How much does house cleaning cost in ${city.name}?`,
      a: `Our monthly memberships in ${city.name}, ${metro.stateAbbr} start at $99/month for a Partial Clean. Our most popular membership is the Full Clean at $149/month, which covers every room top to bottom. We also offer a Full Premium membership at $179/month with extras like deep detailing, ceiling fans, and priority scheduling. One-time deep cleans and move in/out cleans are quoted based on home size.`,
    },
    {
      q: `Do you provide cleaning supplies and equipment in ${city.name}?`,
      a: `Yes! Our ${city.name} cleaning teams bring all supplies and professional-grade equipment. We use eco-friendly, non-toxic cleaning products that are safe for kids, pets, and the environment. If you have preferred products you'd like us to use, just let us know.`,
    },
    {
      q: `Are your ${city.name} cleaners background-checked?`,
      a: `Absolutely. Every PuraClean cleaner serving ${city.name} and the ${metro.name} metro area undergoes a thorough background check, identity verification, and in-person interview. All cleaners are fully insured and bonded for your protection.`,
    },
    {
      q: `How do I schedule a house cleaning in ${city.name}?`,
      a: `Getting started is easy. Call our ${metro.name} office at ${metro.phone} or request a quote online. We'll discuss your home, your needs, and find a time that works for you. Most ${city.name} homes can be scheduled within the same week.`,
    },
    {
      q: `What is your cancellation policy for ${city.name} cleanings?`,
      a: `We understand things change. You can cancel or reschedule your ${city.name} cleaning with at least 24 hours' notice at no charge. Our memberships start with a 3-month commitment, then you can pause or cancel anytime.`,
    },
    {
      q: `What does your Happiness Guarantee cover in ${city.name}?`,
      a: `Our 200% Happiness Guarantee means if you're not satisfied with any cleaning in your ${city.name} home, we'll come back and redo it for free within 24 hours. If you're still not happy after the redo, we'll give you a full refund — no questions asked.`,
    },
    {
      q: `Do you offer one-time cleaning services in ${city.name}?`,
      a: `Yes! While many ${city.name} homeowners choose our monthly memberships, we also offer one-time deep cleans, move in/out cleans, post-construction cleans, and vacation rental turnovers. Call us for a custom quote based on your home size and needs.`,
    },
    {
      q: `Will I get the same cleaner each visit in ${city.name}?`,
      a: `Yes. We assign each ${city.name} home a dedicated cleaner who learns your space, preferences, and priorities. Consistency means better results with every visit. If you ever want to switch cleaners, just let us know — no questions asked.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={`https://puraclean.com/house-cleaning/${city.slug}`} />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(270,40%,93%)] via-[hsl(270,25%,96%)] to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-teal/10 text-teal text-sm font-bold tracking-widest uppercase mb-5 border border-teal/20">
                House Cleaning in {city.name}, {metro.stateAbbr}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-5">
                Professional House Cleaning in{' '}
                <span className="text-primary">{city.name}</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-7 max-w-xl leading-relaxed">
                Looking for reliable house cleaning in {city.name}, {metro.state}? PuraClean provides trusted, professional cleaning services with vetted cleaners, flexible scheduling, and a 200% Happiness Guarantee. Serving {city.name} and the greater {metro.name} metro area for over 14 years.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href={`tel:${metro.phone.replace(/\D/g, '')}`}
                  className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-base font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Get a Free Quote
                </a>
                <a
                  href={base + '/memberships'}
                  onClick={(e) => { e.preventDefault(); setLocation(base + '/memberships'); }}
                  className="px-8 py-3.5 rounded-full bg-card text-foreground text-base font-bold shadow-lg border border-border flex items-center gap-2 group hover:-translate-y-1 transition-all duration-300"
                >
                  View Memberships
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
                {[
                  { icon: Shield, text: 'Insured & Bonded' },
                  { icon: Sparkles, text: 'Happiness Guarantee' },
                  { icon: CheckCircle, text: 'Vetted Cleaners' },
                  { icon: Clock, text: 'Flexible Scheduling' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <CityMap lat={city.lat} lng={city.lng} cityName={city.name} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              How House Cleaning Works in {city.name}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Getting a clean home in {city.name} is easy. Here's how it works.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center relative">
                  <step.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE BANNER */}
      <section className="py-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <img
              src={base + '/images/clean-living-room.png'}
              alt={`Sparkling clean living room after professional house cleaning in ${city.name}`}
              className="w-full h-[220px] md:h-[320px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/20 to-transparent flex items-center">
              <div className="px-8 md:px-12 max-w-lg">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  Come Home to Clean
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Professional results your {city.name} home deserves. Every surface, every room — spotless.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              House Cleaning Services in {city.name}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Whether you need a one-time deep clean or regular house cleaning in {city.name}, we have a service that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.a
                key={service.name}
                href={base + '/services'}
                onClick={(e) => { e.preventDefault(); setLocation(base + '/services'); }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-teal mb-2" />
                <p className="text-sm font-semibold text-foreground">{service.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
                <p className="text-xs text-primary font-medium mt-2">in {city.name}, {metro.stateAbbr}</p>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={base + '/services'}
              onClick={(e) => { e.preventDefault(); setLocation(base + '/services'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all services in detail &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              Memberships for {city.name} Homes
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              All memberships include monthly service. Start with a 3-month commitment, then stay as long as you like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cleaningPlans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-2xl p-7 flex flex-col",
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-primary/20"
                    : "bg-card border border-border shadow-md"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-current" /> Most Popular in {city.name}
                    </span>
                  </div>
                )}
                <h3 className={cn("text-lg font-bold mb-1", plan.popular ? "text-primary-foreground" : "text-foreground")}>{plan.name}</h3>
                <div className="mb-4">
                  <span className={cn("text-xs font-medium uppercase tracking-wide block mb-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>Starting at</span>
                  <span className={cn("text-3xl font-bold", plan.popular ? "text-primary-foreground" : "text-foreground")}>${plan.price}</span>
                  <span className={cn("text-sm ml-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>/{plan.frequency}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.slice(0, 4).map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={cn("w-4 h-4 mt-0.5 shrink-0", plan.popular ? "text-primary-foreground" : "text-teal")} />
                      <span className={plan.popular ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${metro.phone.replace(/\D/g, '')}`}
                  className={cn(
                    "w-full py-3 rounded-full font-semibold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 block",
                    plan.popular
                      ? "bg-white text-primary shadow-md"
                      : "bg-primary text-primary-foreground shadow-md"
                  )}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={base + '/memberships'}
              onClick={(e) => { e.preventDefault(); setLocation(base + '/memberships'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all memberships &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
                Why PuraClean
              </span>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Why {city.name} Homeowners Choose PuraClean
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Award, title: '14+ Years of Experience', desc: `We've been cleaning homes in the ${metro.name} metro area for over 14 years. We know what ${city.name} homeowners expect and we deliver every time.` },
                  { icon: Shield, title: 'Vetted & Background-Checked', desc: `Every cleaner serving ${city.name} is thoroughly vetted, background-checked, insured, and bonded for your peace of mind.` },
                  { icon: Sparkles, title: '200% Happiness Guarantee', desc: `Not happy with a clean in your ${city.name} home? We'll come back and redo it for free. Still not satisfied? Full refund — no questions asked.` },
                  { icon: Repeat, title: 'Same Cleaner Every Visit', desc: `Your assigned cleaner learns your ${city.name} home inside and out, so each visit is better than the last.` },
                  { icon: Clock, title: 'Flexible Scheduling', desc: `We work around your schedule. Morning, afternoon, or evening — we'll find a time that works for your ${city.name} household.` },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-border"
              >
                <img
                  src={base + '/images/cleaning-team.png'}
                  alt={`PuraClean professional cleaning team serving ${city.name}`}
                  className="w-full h-[240px] md:h-[280px] object-cover"
                />
              </motion.div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Get a Free Quote in {city.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Ready to experience the best house cleaning in {city.name}, {metro.stateAbbr}? Contact our {metro.name} office today.
              </p>
              <div className="flex flex-col gap-3 mb-5">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <Clock className="w-4 h-4 text-teal" /> {metro.hours}
                </div>
                <a href={`tel:${metro.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-teal" /> {metro.phone}
                </a>
                <a href={`mailto:${metro.email}`} className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-teal" /> {metro.email}
                </a>
              </div>
              <a
                href={`tel:${metro.phone.replace(/\D/g, '')}`}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Call for a Free Quote
              </a>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">{aggregateRating.score}/5</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Rated {aggregateRating.score}/5 based on {aggregateRating.totalReviews.toLocaleString()}+ reviews from {metro.name} area homeowners
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Reviews
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              What {metro.name} Area Homeowners Say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < Math.floor(aggregateRating.score) ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/30"
                    )}
                  />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">{aggregateRating.score}</span>
              <span className="text-muted-foreground text-sm">({aggregateRating.totalReviews.toLocaleString()}+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card rounded-xl border border-border p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{review.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={cn(
                        "w-3.5 h-3.5",
                        j < review.rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/30"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2 className="text-3xl font-bold tracking-tight">
                House Cleaning FAQ for {city.name}, {metro.stateAbbr}
              </h2>
              <p className="mt-3 text-muted-foreground">
                Common questions about our cleaning services in {city.name}.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      {nearbyCities.length > 0 && (
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-center mb-3">
              Also Serving Nearby {metro.name} Cities
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
              PuraClean proudly serves homes across the entire {metro.name} metro area. Click any city below to learn more about our services there.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {nearbyCities.map(c => (
                <a
                  key={c.slug}
                  href={base + '/house-cleaning/' + c.slug}
                  onClick={(e) => { e.preventDefault(); setLocation(base + '/house-cleaning/' + c.slug); }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground/80 font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  House Cleaning in {c.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
