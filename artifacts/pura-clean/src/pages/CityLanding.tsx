import { useEffect, useRef } from 'react';
import { useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, CheckCircle, Clock, Sparkles, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'wouter';
import { findCityBySlug } from '@/data/metros';
import { cleaningPlans } from '@/data/content';
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
      html: `<div style="width:28px;height:28px;background:hsl(355,97%,69%);border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.25);"></div>`,
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

const services = [
  'Standard House Cleaning',
  'Deep Cleaning',
  'Move In/Out Cleaning',
  'Recurring Cleaning',
  'Vacation Rental Cleaning',
  'Custom Cleanings',
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
  const pageTitle = `House Cleaning in ${city.name}, ${metro.stateAbbr} | PuraClean`;
  const pageDescription = `Professional house cleaning services in ${city.name}, ${metro.state}. Vetted cleaners, flexible scheduling, and a 200% Happiness Guarantee. Serving the ${metro.name} metro area for 14+ years.`;

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
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background" />
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
                <button
                  onClick={() => setLocation(base + '/plans')}
                  className="px-8 py-3.5 rounded-full bg-card text-foreground text-base font-bold shadow-lg border border-border flex items-center gap-2 group hover:-translate-y-1 transition-all duration-300"
                >
                  View Plans
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
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

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              House Cleaning Services in {city.name}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Whether you need a one-time deep clean or regular house cleaning in {city.name}, we have a service that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setLocation(base + '/services')}
              >
                <CheckCircle className="w-5 h-5 text-teal mb-2" />
                <p className="text-sm font-semibold text-foreground">{service}</p>
                <p className="text-xs text-muted-foreground mt-1">in {city.name}, {metro.stateAbbr}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              Cleaning Plans for {city.name} Homes
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              All plans include biweekly service. No contracts — cancel anytime.
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
            <button
              onClick={() => setLocation(base + '/plans')}
              className="text-sm font-semibold text-primary hover:underline"
            >
              View full plan comparison &rarr;
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why {city.name} Homeowners Choose PuraClean
              </h2>
              <div className="space-y-5">
                {[
                  { title: '14+ Years of Experience', desc: `We've been cleaning homes in the ${metro.name} metro area for over 14 years. We know what ${city.name} homeowners expect and we deliver every time.` },
                  { title: 'Vetted & Background-Checked', desc: 'Every cleaner on our team is thoroughly vetted, background-checked, insured, and bonded for your peace of mind.' },
                  { title: '200% Happiness Guarantee', desc: "Not happy with a clean? We'll come back and redo it for free. Still not satisfied? Full refund — no questions asked." },
                  { title: 'Same Cleaner Every Visit', desc: `Your assigned cleaner learns your ${city.name} home inside and out, so each visit is better than the last.` },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Get a Free Quote in {city.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Ready to experience the best house cleaning in {city.name}, {metro.stateAbbr}? Contact our {metro.name} office today.
              </p>
              <div className="flex flex-col gap-3 mb-5">
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
            </div>
          </div>
        </div>
      </section>

      {nearbyCities.length > 0 && (
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
              Also Serving Nearby {metro.name} Cities
            </h2>
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
