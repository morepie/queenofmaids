import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Services() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cleaning Services | Queen of Maids</title>
        <meta name="description" content="Browse all cleaning services from Queen of Maids including standard cleaning, deep cleaning, move in/out, recurring, and more. Serving Phoenix, Salt Lake City, Las Vegas, and Denver." />
        <meta property="og:title" content="Cleaning Services | Queen of Maids" />
        <meta property="og:description" content="Professional house cleaning services including deep cleaning, move in/out, recurring plans, and more. 200% happiness guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://queenofmaids.com/services" />
        <meta property="og:image" content="https://queenofmaids.com/opengraph.jpg" />
        <meta property="og:site_name" content="Queen of Maids" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cleaning Services | Queen of Maids" />
        <meta name="twitter:description" content="Professional house cleaning services. 200% happiness guarantee." />
        <meta name="twitter:image" content="https://queenofmaids.com/opengraph.jpg" />
        <link rel="canonical" href="https://queenofmaids.com/services" />
      </Helmet>
      <section
        className="relative pt-32 pb-14 md:pt-40 md:pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${base}/images/photos/cleaner-kitchen.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[hsl(270,50%,12%)]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/80 text-sm font-semibold mb-4 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Cleaning Services for <span className="text-purple-300">Every Need</span>
            </h1>
            <p className="text-white/75 max-w-2xl mx-auto text-lg">
              From quick refreshes to full deep cleans, we offer a range of professional cleaning services. Every service comes with our 200% Happiness Guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 md:gap-16">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" as const }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-sm text-teal font-semibold">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {service.description}
                  </p>
                  <a
                    href={base + '/services/' + service.slug}
                    onClick={(e) => { e.preventDefault(); setLocation(base + '/services/' + service.slug); }}
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:underline group"
                  >
                    Learn more about {service.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="lg:col-span-5">
                    <hr className="border-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
