import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { useLocation } from 'wouter';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function OurServices() {
  const [, setLocation] = useLocation();

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30" aria-label="Our cleaning services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="flex-1 min-w-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-lg mb-10">
              From one-time deep cleans to weekly memberships, we have a cleaning solution for every home.
            </p>

            <nav aria-label="Cleaning services list">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {services.map((service, i) => (
                  <motion.a
                    key={service.slug}
                    href={`${base}/services/${service.slug}`}
                    onClick={(e) => { e.preventDefault(); setLocation(`${base}/services/${service.slug}`); }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="group flex items-center gap-3 py-3 px-3 -mx-3 rounded-xl hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <service.icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                      {service.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </nav>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[420px] xl:w-[480px] shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src={`${base}/images/photos/cleaner-kitchen.png`}
                alt="Professional cleaner wiping down a kitchen countertop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,50%,15%)]/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-white/90 text-lg font-semibold leading-snug">
                  Professional results, every time.
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Trusted by 1,500+ neighbors across 4 metro areas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
