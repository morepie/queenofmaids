import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, CheckCircle, ChevronDown, Phone, ArrowRight, Users, Target, Award, Sparkles } from 'lucide-react';
import { findServiceBySlug, services as allServices } from '@/data/services';
import { cleaningPlans, reviews, aggregateRating } from '@/data/content';
import { cn } from '@/lib/utils';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

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

export default function ServiceLanding() {
  const params = useParams<{ service: string }>();
  const [, setLocation] = useLocation();
  const service = findServiceBySlug(params.service || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.service]);

  if (!service) {
    return (
      <section className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p className="text-muted-foreground mt-4">We couldn't find that service.</p>
        <button
          onClick={() => setLocation(base + '/services')}
          className="mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
        >
          View All Services
        </button>
      </section>
    );
  }

  const Icon = service.icon;
  const otherServices = allServices.filter(s => s.slug !== service.slug).slice(0, 6);
  const serviceReviews = reviews.slice(0, 4);

  const pageTitle = `${service.title} Services | PuraClean`;
  const pageDescription = `Professional ${service.title.toLowerCase()} services from PuraClean. ${service.tagline} Vetted cleaners, flexible scheduling, and a 200% Happiness Guarantee.`;

  const faqs = [
    {
      q: `How much does ${service.title.toLowerCase()} cost?`,
      a: `Our ${service.title.toLowerCase()} pricing depends on the size of your home and specific needs. Monthly memberships start at $99/month for a Partial Clean, $149/month for our most popular Full Clean, and $179/month for Full Premium. One-time and specialty services are quoted based on home size and scope. Call us for a free, no-obligation quote.`,
    },
    {
      q: `What's included in your ${service.title.toLowerCase()} service?`,
      a: `Our ${service.title.toLowerCase()} includes: ${service.includes.join(', ')}. Every service is backed by our 200% Happiness Guarantee — if you're not satisfied, we'll redo it for free or give you a full refund.`,
    },
    {
      q: `How do I book a ${service.title.toLowerCase()}?`,
      a: `Booking is easy! Call us or request a quote online. We'll discuss your home, your specific needs, and find a time that works for your schedule. Most homes can be scheduled within the same week.`,
    },
    {
      q: `Do you bring your own cleaning supplies for ${service.title.toLowerCase()}?`,
      a: `Yes! Our cleaning teams bring all supplies and professional-grade equipment for every ${service.title.toLowerCase()} visit. We use eco-friendly, non-toxic products that are safe for kids, pets, and the environment. If you have preferred products, just let us know.`,
    },
    {
      q: `Are your cleaners background-checked?`,
      a: `Absolutely. Every PuraClean cleaner undergoes a thorough background check, identity verification, and in-person interview before they're assigned to any home. All cleaners are fully insured and bonded for your complete protection.`,
    },
    {
      q: `What if I'm not satisfied with my ${service.title.toLowerCase()}?`,
      a: `We stand behind our work with a 200% Happiness Guarantee. If you're not satisfied with any ${service.title.toLowerCase()} visit, we'll come back within 24 hours and redo it for free. If you're still not happy, we'll issue a full refund — no questions asked.`,
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
        <link rel="canonical" href={`https://puraclean.com/services/${service.slug}`} />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold text-teal uppercase tracking-widest">{service.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-5">
                Professional{' '}
                <span className="text-primary">{service.title}</span>{' '}
                Services
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-7 max-w-xl leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="tel:6025551234"
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

              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold">{aggregateRating.score}/5</span>
                <span className="text-xs text-muted-foreground">({aggregateRating.totalReviews.toLocaleString()}+ reviews)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-7 shadow-lg"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:6025551234"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Book {service.title}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DETAILED DESCRIPTION */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
                About This Service
              </span>
              <h2 className="text-3xl font-bold tracking-tight mb-5">
                What to Expect from Our {service.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                  <Target className="w-5 h-5 text-teal" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  Ideal For
                </h3>
                <ul className="space-y-3">
                  {service.idealFor.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              Memberships & Pricing
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
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className={cn("text-lg font-bold mb-1", plan.popular ? "text-primary-foreground" : "text-foreground")}>{plan.name}</h3>
                <div className="mb-4">
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
                  href="tel:6025551234"
                  className={cn(
                    "w-full py-3 rounded-full font-semibold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 block",
                    plan.popular ? "bg-white text-primary shadow-md" : "bg-primary text-primary-foreground shadow-md"
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

      {/* REVIEWS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Reviews
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Clients Say About {service.title}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceReviews.map((review, i) => (
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
                    <Star key={j} className={cn("w-3.5 h-3.5", j < review.rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/30")} />
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
                {service.title} — Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight">
              Explore Our Other Services
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              We offer a full range of professional cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherServices.map(s => (
              <a
                key={s.slug}
                href={base + '/services/' + s.slug}
                onClick={(e) => { e.preventDefault(); setLocation(base + '/services/' + s.slug); }}
                className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <s.icon className="w-5 h-5 text-teal mb-2" />
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.tagline}</p>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={base + '/services'}
              onClick={(e) => { e.preventDefault(); setLocation(base + '/services'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all services &rarr;
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
