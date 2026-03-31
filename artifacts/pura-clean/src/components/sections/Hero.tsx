import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const platforms = [
  { name: 'Google', rating: 4.9 },
  { name: 'Yelp', rating: 4.5 },
  { name: 'Facebook', rating: 4.9 },
  { name: 'Thumbtack', rating: 4.8 },
  { name: 'Nextdoor', rating: 4.9 },
];

const trustBadges = [
  '14+ Years Trusted',
  '200% Happiness Guarantee',
  'Background-Checked & Insured',
];

function MiniStars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const w = size === 'md' ? 'w-5 h-5' : 'w-3 h-3';
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            w,
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i < rating
              ? "text-yellow-400 fill-yellow-400/50"
              : "text-yellow-400/30"
          )}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col pt-28 pb-0 md:pt-36 md:pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-teal/10 text-teal text-sm font-bold tracking-widest uppercase mb-5 border border-teal/20 shadow-sm">
              Phoenix Metro's Trusted Cleaning Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground leading-[1.1] mb-5">
              A Cleaner Home, <span className="text-primary block mt-1">Without the Hassle</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-7 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Professional, reliable house cleaning across the Phoenix metro area. From Scottsdale to Chandler, we make your home sparkle so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-base font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Get a Quote
              </button>
              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-card text-foreground text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-border flex items-center justify-center gap-2 group"
              >
                View Plans
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Shield, text: 'Insured & Bonded' },
                { icon: Sparkles, text: 'Happiness Guarantee' },
                { icon: CheckCircle, text: 'Vetted Cleaners' },
                { icon: Clock, text: 'Flexible Scheduling' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <img
                  src={import.meta.env.BASE_URL + "images/cleaners.png"}
                  alt="PuraClean professional house cleaners"
                  className="w-full h-auto object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">1,500+ Reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">14 Years Strong</p>
                    <p className="text-[10px] text-muted-foreground">Family owned</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
        className="relative z-10 w-full border-t border-border/60 bg-white/80 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <MiniStars rating={4.9} size="md" />
              <span className="text-2xl font-bold text-foreground">4.9/5</span>
              <span className="text-muted-foreground text-sm">from 1,500+ verified reviews</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {platforms.map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-1">
                  <span className="text-sm font-semibold text-foreground">{p.name}</span>
                  <div className="flex items-center gap-1.5">
                    <MiniStars rating={p.rating} />
                    <span className="text-xs font-medium text-muted-foreground">{p.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full border-t border-border pt-4 mt-1">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
