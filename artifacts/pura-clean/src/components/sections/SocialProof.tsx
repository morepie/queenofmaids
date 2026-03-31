import { motion } from 'framer-motion';
import { Star, Shield, Clock, Heart } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: '1,500+',
    label: '5-Star Reviews',
    accent: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: Clock,
    value: '14',
    label: 'Years in Business',
    accent: 'text-teal',
    bg: 'bg-teal/10',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Bonded & Insured',
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Heart,
    value: 'Family',
    label: 'Owned & Operated',
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
];

export default function SocialProof() {
  return (
    <section className="py-10 md:py-14 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.accent} ${stat.icon === Star ? 'fill-yellow-500' : ''}`} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
