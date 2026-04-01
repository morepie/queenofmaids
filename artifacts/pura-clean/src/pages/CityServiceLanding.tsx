import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Star, CheckCircle, ChevronDown, Phone, ArrowRight,
  MapPin, Shield, Sparkles, Clock, Users,
} from 'lucide-react';
import { findCityBySlug } from '@/data/metros';
import { findServiceBySlug } from '@/data/services';
import { cleaningPlans, reviews, aggregateRating } from '@/data/content';
import { cn } from '@/lib/utils';
import CTA from '@/components/sections/CTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-white/15 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-sm text-white">{question}</span>
        <ChevronDown className={cn('w-4 h-4 text-white/50 shrink-0 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          <p className="text-sm text-white/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function CityServiceLanding() {
  const params = useParams<{ city: string; service: string }>();
  const [, setLocation] = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cityResult = findCityBySlug(params.city || '');
  const service = findServiceBySlug(params.service || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.city, params.service]);

  if (!cityResult || !service) {
    return (
      <section className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-muted-foreground mt-4">We couldn't find that combination.</p>
        <button
          onClick={() => setLocation(base + '/')}
          className="mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
        >
          Go Home
        </button>
      </section>
    );
  }

  const { metro, city } = cityResult;
  const nearbyCities = metro.cities.filter(c => c.slug !== city.slug).slice(0, 8);

  const pageTitle = `${service.title} in ${city.name}, ${metro.stateAbbr} | Queen of Maids`;
  const pageDescription = `Professional ${service.title.toLowerCase()} in ${city.name}, ${metro.state}. Starting at $149. Background-checked cleaners. 200% happiness guarantee. Book online in 60 seconds.`;

  const faqs = [
    {
      q: `How much does ${service.title.toLowerCase()} cost in ${city.name}?`,
      a: `${service.title} pricing in ${city.name} depends on your home size. Monthly memberships start at $99/month (Partial Clean), $149/month (Full Clean), and $179/month (Full Premium). One-time ${service.title.toLowerCase()} visits are quoted based on square footage and specific needs. Call our ${metro.name} office at ${metro.phone} for a free quote.`,
    },
    {
      q: `What's included in ${service.title.toLowerCase()} in ${city.name}?`,
      a: `Our ${service.title.toLowerCase()} in ${city.name} includes: ${service.includes.join(', ')}. Every visit is backed by our 200% Happiness Guarantee — if you're not satisfied, we re-clean for free or give you a full refund.`,
    },
    {
      q: `Do you serve my ${city.name} neighborhood?`,
      a: `We serve all neighborhoods across ${city.name} and the broader ${metro.name} metro area, including ${nearbyCities.slice(0, 4).map(c => c.name).join(', ')}, and more. If you're unsure whether we cover your street, call us at ${metro.phone} and we'll confirm instantly.`,
    },
    {
      q: `How do I book ${service.title.toLowerCase()} in ${city.name}?`,
      a: `Booking is easy. Call our ${metro.name} office at ${metro.phone} or request a quote online. We'll discuss your home, your specific needs, and find a time that works. Most ${city.name} homes can be scheduled within the same week.`,
    },
    {
      q: `Can I start a recurring plan after my ${service.title.toLowerCase()}?`,
      a: `Absolutely. Many clients start with a ${service.title.toLowerCase()} and then transition to a monthly membership for ongoing maintenance. Members save on every visit and get priority scheduling. Ask about our membership discount when you book.`,
    },
    {
      q: `Are your ${city.name} cleaners background-checked?`,
      a: `Yes. Every Queen of Maids cleaner serving ${city.name} undergoes a thorough background check, identity verification, and in-person interview before joining our team. All cleaners are fully insured and bonded for your peace of mind.`,
    },
  ];

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://queenofmaids.com/house-cleaning/${city.slug}/${service.slug}`} />
        <meta property="og:image" content="https://queenofmaids.com/opengraph.jpg" />
        <meta property="og:site_name" content="Queen of Maids" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://queenofmaids.com/opengraph.jpg" />
        <link rel="canonical" href={`https://queenofmaids.com/house-cleaning/${city.slug}/${service.slug}`} />
      </Helmet>
      <SchemaMarkup schemas={[
        localBusinessSchema(metro, city),
        serviceSchema(service),
        faqSchema(faqs),
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/service-areas' },
          { name: `${city.name}, ${metro.stateAbbr}`, url: `/house-cleaning/${city.slug}` },
          { name: service.title, url: `/house-cleaning/${city.slug}/${service.slug}` },
        ]),
      ]} />

      {/* HERO */}
      <section className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${base}/images/${service.heroImage})` }}
        />
        <div className="absolute inset-0 z-0 bg-[hsl(270,50%,15%)]/75 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-[hsl(270,50%,10%)]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 flex-wrap">
              <a href={base + '/'} onClick={e => { e.preventDefault(); setLocation(base + '/'); }} className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href={base + '/service-areas'} onClick={e => { e.preventDefault(); setLocation(base + '/service-areas'); }} className="hover:text-white transition-colors">Locations</a>
              <span>/</span>
              <a href={base + '/house-cleaning/' + city.slug} onClick={e => { e.preventDefault(); setLocation(base + '/house-cleaning/' + city.slug); }} className="hover:text-white transition-colors">{city.name}, {metro.stateAbbr}</a>
              <span>/</span>
              <span className="text-white/80">{service.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Icon className="w-6 h-6 text-purple-200" />
              </div>
              <span className="text-sm font-bold text-white/80 uppercase tracking-widest">{service.tagline}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              {service.title} in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">{city.name}</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              {service.description} Serving {city.name} and the entire {metro.name} metro area.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://quote.queenofmaids.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-primary text-base font-bold shadow-xl hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
              </a>
              <a
                href={`tel:${metro.phone.replace(/\D/g, '')}`}
                className="px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/30 text-base font-bold shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {metro.phone}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-white">{aggregateRating.score}/5</span>
              <span className="text-sm text-white/70">({aggregateRating.totalReviews.toLocaleString()}+ reviews)</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3">
              {[
                { icon: Shield, text: 'Insured & Bonded' },
                { icon: Sparkles, text: '200% Happiness Guarantee' },
                { icon: CheckCircle, text: 'Background-Checked' },
                { icon: Clock, text: 'Flexible Scheduling' },
              ].map(({ icon: TrustIcon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <TrustIcon className="w-4 h-4 text-purple-200" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
                  {service.title} in {city.name}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  What's Included in Your {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.longDescription}
                </p>
              </div>

              <div className="bg-gradient-to-br from-[hsl(270,35%,95%)] to-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-base font-bold text-foreground mb-4">Service Checklist</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-teal" />
                      </div>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-base font-bold text-foreground mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PRICE CARD */}
            <div className="space-y-5">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wide mb-1">Starting at</p>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold">$149</span>
                  <span className="text-primary-foreground/70 text-sm mb-1">/month</span>
                </div>
                <p className="text-sm text-primary-foreground/80 mb-5">Full Clean membership — all rooms covered.</p>
                <a
                  href="https://quote.queenofmaids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-full bg-white text-primary font-bold text-sm text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Get a Free Quote
                </a>
                <p className="text-xs text-primary-foreground/60 mt-3 text-center">No commitment required to get a quote</p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                <h3 className="text-sm font-bold text-foreground mb-3">Perfect For</h3>
                <ul className="space-y-2">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`tel:${metro.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-teal text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call {metro.name}: {metro.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLEANING PLANS */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Membership Plans
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Save More with a Recurring Plan
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm">
              Start with a {service.title.toLowerCase()} and lock in a recurring membership for ongoing savings and priority scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cleaningPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn(
                  'relative rounded-2xl p-7 flex flex-col',
                  plan.popular
                    ? 'bg-primary text-primary-foreground shadow-xl ring-2 ring-primary/20 scale-[1.02]'
                    : 'bg-card border border-border shadow-md'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className={cn('text-lg font-bold mb-1', plan.popular ? 'text-primary-foreground' : 'text-foreground')}>
                  {plan.name}
                </h3>
                <p className={cn('text-sm mb-4', plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {plan.description}
                </p>
                <div className="mb-5">
                  <span className={cn('text-3xl font-bold', plan.popular ? 'text-primary-foreground' : 'text-foreground')}>
                    ${plan.price}
                  </span>
                  <span className={cn('text-sm ml-1', plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground')}>/month</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className={cn('w-4 h-4 mt-0.5 shrink-0', plan.popular ? 'text-primary-foreground' : 'text-teal')} />
                      <span className={plan.popular ? 'text-primary-foreground/90' : 'text-foreground/80'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://quote.queenofmaids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'block w-full py-3 rounded-full font-semibold text-sm text-center transition-all hover:-translate-y-0.5',
                    plan.popular ? 'bg-white text-primary shadow-md' : 'bg-primary text-primary-foreground shadow-md'
                  )}
                >
                  Get a Quote
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight">
              What {city.name} Residents Say
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-foreground">{aggregateRating.score}</span>
              <span className="text-muted-foreground text-sm">({aggregateRating.totalReviews.toLocaleString()}+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 6).map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card rounded-xl border border-border p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{review.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={cn('w-3 h-3', j < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/30')} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[hsl(270,50%,20%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {service.title} in {city.name}: Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map(c => (
                <a
                  key={c.slug}
                  href={base + '/house-cleaning/' + c.slug + '/' + service.slug}
                  onClick={e => { e.preventDefault(); setLocation(base + '/house-cleaning/' + c.slug + '/' + service.slug); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80 font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {service.title} in {c.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALSO SEE */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground font-medium">More in {city.name}:</span>
            <a
              href={base + '/house-cleaning/' + city.slug}
              onClick={e => { e.preventDefault(); setLocation(base + '/house-cleaning/' + city.slug); }}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              All Cleaning Services in {city.name} <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-border">|</span>
            <a
              href={base + '/services/' + service.slug}
              onClick={e => { e.preventDefault(); setLocation(base + '/services/' + service.slug); }}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              {service.title} Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
