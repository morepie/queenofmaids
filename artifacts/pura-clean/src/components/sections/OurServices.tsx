import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { useLocation } from 'wouter';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function OurServices() {
  const [, setLocation] = useLocation();

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From one-time deep cleans to weekly memberships, we have a cleaning solution for every home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.a
              key={service.slug}
              href={`${base}/services/${service.slug}`}
              onClick={(e) => { e.preventDefault(); setLocation(`${base}/services/${service.slug}`); }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" as const }}
              className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.tagline}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
