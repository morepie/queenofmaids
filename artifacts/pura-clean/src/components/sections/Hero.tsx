import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, SprayCan, Home, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function Hero() {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-primary/10 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] rounded-full border-2 border-dashed border-primary/20" />
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-teal/20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-secondary/40 blur-sm" />
              <div className="absolute top-10 -left-6 w-10 h-10 rounded-full bg-muted/80 border border-primary/10" />
              <div className="absolute -bottom-1 right-6 w-14 h-14 rounded-full bg-primary/8 border border-primary/15" />
              <div className="absolute top-1/4 -right-4 w-3 h-3 rounded-full bg-teal/60" />
              <div className="absolute bottom-1/4 -left-2 w-2 h-2 rounded-full bg-primary/50" />
              <div className="absolute top-6 right-1/4 w-4 h-4 rounded-full bg-secondary/60" />

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-teal/10 flex items-center justify-center shadow-2xl border border-primary/10">
                  <div className="w-44 h-44 rounded-full bg-white/80 flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <Home className="w-16 h-16 text-primary mx-auto mb-2" strokeWidth={1.5} />
                      <SprayCan className="w-10 h-10 text-teal mx-auto -mt-1" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                className="absolute top-4 right-8 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Eco-Friendly</p>
                    <p className="text-[10px] text-muted-foreground">Safe products</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
                className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Insured & Bonded</p>
                    <p className="text-[10px] text-muted-foreground">100% protected</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
