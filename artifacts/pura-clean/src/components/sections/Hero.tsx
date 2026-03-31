import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-6">
              Phoenix Metro's Trusted Cleaning Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            A Cleaner Home,{' '}
            <span className="text-primary">Without the Hassle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Professional, reliable house cleaning across the Phoenix metro area. From Scottsdale to Chandler, we make your home sparkle so you can focus on what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToPlans}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Cleaning Plans
            </button>
            <a
              href="tel:6025551234"
              className="px-8 py-4 rounded-full border-2 border-primary/20 text-foreground font-semibold text-base hover:bg-primary/5 transition-all duration-200"
            >
              Call (602) 555-1234
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" as const }}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Sparkles, text: 'Eco-Friendly Products' },
              { icon: Shield, text: 'Insured & Bonded' },
              { icon: Clock, text: 'Flexible Scheduling' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
