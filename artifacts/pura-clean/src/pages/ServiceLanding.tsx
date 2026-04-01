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

  const pageTitle = `${service.title} Services | Queen of Maids`;
  const pageDescription = `Professional ${service.title.toLowerCase()} services from Queen of Maids. ${service.tagline} Vetted cleaners, flexible scheduling, and a 200% Happiness Guarantee.`;

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
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              About This Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What to Expect from Our {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  src={base + '/images/cleaner-kitchen.png'}
                  alt="Professional PuraClean cleaner at work in a modern kitchen"
                  className="w-full h-[260px] md:h-[320px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-gradient-to-br from-[hsl(355,60%,96%)] to-card rounded-2xl border border-border p-8 shadow-md">
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
                  {service.longDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 bg-white/80 rounded-xl p-3 border border-border/50"
                    >
                      <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-teal" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2 space-y-5"
            >
              <div className="bg-primary rounded-2xl p-6 shadow-lg text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">Key Benefits</h3>
                </div>
                <ul className="space-y-2.5">
                  {service.benefits.slice(0, 3).map(b => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-primary-foreground/90">
                      <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/70" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Perfect For</h3>
                </div>
                <ul className="space-y-2.5">
                  {service.idealFor.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-border">
                <img
                  src={base + '/images/cleaning-team.png'}
                  alt="PuraClean professional cleaning team"
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
              </div>

              <a
                href="tel:6025551234"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-teal text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Schedule Your {service.title}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Membership Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Choose Your Membership
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              All memberships include monthly service by our trained, background-checked professionals. Start with a 3-month commitment, then stay as long as you like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cleaningPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 flex flex-col",
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-primary/20 scale-[1.02]"
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

                <div className="mb-6">
                  <h3 className={cn("text-xl font-bold mb-1", plan.popular ? "text-primary-foreground" : "text-foreground")}>
                    {plan.name}
                  </h3>
                  <p className={cn("text-sm", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={cn("text-xs font-medium uppercase tracking-wide block mb-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
                    Starting at
                  </span>
                  <span className={cn("text-4xl font-bold", plan.popular ? "text-primary-foreground" : "text-foreground")}>
                    ${plan.price}
                  </span>
                  <span className={cn("text-sm ml-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
                    /month
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle className={cn("w-4 h-4 mt-0.5 shrink-0", plan.popular ? "text-primary-foreground" : "text-teal")} />
                      <span className={plan.popular ? "text-primary-foreground/90" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:6025551234"
                  className={cn(
                    "w-full py-3.5 rounded-full font-semibold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 block",
                    plan.popular
                      ? "bg-white text-primary shadow-md hover:shadow-lg"
                      : "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                  )}
                >
                  Get a Quote
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="text-base font-bold text-foreground">
                Not sure about a membership? Try a one-time clean first.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Members save on every visit and skip the initial deep-clean fee — but there's no pressure.
              </p>
            </div>
            <a
              href="tel:6025551234"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Book a One-Time Clean <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="mt-6 text-center">
            <a
              href={base + '/memberships'}
              onClick={(e) => { e.preventDefault(); setLocation(base + '/memberships'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Compare all memberships side-by-side &rarr;
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
