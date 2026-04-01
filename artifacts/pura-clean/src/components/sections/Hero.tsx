import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

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
  const scrollToMemberships = () => {
    document.getElementById('memberships')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative flex flex-col pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden bg-background">
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full z-0 hidden md:block"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 30%, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black)',
          }}
        >
          <img
            src={`${base}/images/photos/living-space.webp`}
            alt="Clean bright living room"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl lg:max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                Your Trusted Cleaning Team
              </span>

              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white/50">
                <div className="flex gap-0.5 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">4.9/5</span>
                <span className="text-sm text-muted-foreground">(1,500+ Reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              A Cleaner Home,{' '}
              <br className="hidden sm:block" />
              <span className="text-primary">Without the Hassle.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-medium">
              Family-owned professional cleaning you can trust. We make your home sparkle so you can focus on what matters most.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a
                href="https://quote.queenofmaids.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={scrollToMemberships}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 hover:bg-white text-foreground border-2 border-border hover:border-primary/30 font-bold text-lg transition-all shadow-sm flex items-center justify-center"
              >
                View Memberships
              </button>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {[
                { icon: Shield, text: 'Insured & Bonded' },
                { icon: CheckCircle, text: '200% Happiness Guarantee' },
                { icon: Shield, text: 'Vetted Cleaners' },
                { icon: Clock, text: 'Flexible Scheduling' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 transition-all flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        className="bg-background"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
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
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
