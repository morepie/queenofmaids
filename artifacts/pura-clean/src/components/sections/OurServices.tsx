import { motion } from 'framer-motion';
import { SprayCan, Sofa, Refrigerator, Wind, Brush, Droplets } from 'lucide-react';

const services = [
  {
    icon: SprayCan,
    title: 'Kitchen Deep Clean',
    description: 'Counters, sinks, stovetops, and appliance exteriors scrubbed and sanitized to a shine.',
  },
  {
    icon: Sofa,
    title: 'Living Areas',
    description: 'Dusting, vacuuming, mopping, and tidying all common spaces so they feel welcoming.',
  },
  {
    icon: Droplets,
    title: 'Bathroom Sanitization',
    description: 'Toilets, showers, tubs, mirrors, and floors deep-cleaned with eco-friendly products.',
  },
  {
    icon: Refrigerator,
    title: 'Appliance Cleaning',
    description: 'Inside and out — oven, microwave, and refrigerator cleaned on our Premium plan.',
  },
  {
    icon: Wind,
    title: 'Dusting & Air Quality',
    description: 'Ceiling fans, vents, baseboards, and blinds dusted to keep your air fresh and clean.',
  },
  {
    icon: Brush,
    title: 'Floors & Surfaces',
    description: 'All hard floors mopped, carpets vacuumed, and surfaces wiped down throughout the home.',
  },
];

export default function OurServices() {
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
            From kitchens to bedrooms, we handle every corner of your home with care. Here's what a PuraClean visit covers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
