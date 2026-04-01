import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLocation } from 'wouter';
import USMap from '@/components/USMap';
import { metros } from '@/data/metros';

export default function ServiceAreaMap() {
  const [, navigate] = useLocation();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <section id="service-areas" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
            Where We Clean
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Serving 4 Major Metro Areas
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional house cleaning across the Southwest. Click a metro area to explore our service cities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <USMap onMetroClick={(slug) => navigate(`${base}/house-cleaning/${slug}`)} />
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {metros.map(metro => (
            <a
              key={metro.slug}
              href={`${base}/house-cleaning/${metro.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`${base}/house-cleaning/${metro.slug}`);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground/80 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {metro.name}, {metro.stateAbbr}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
