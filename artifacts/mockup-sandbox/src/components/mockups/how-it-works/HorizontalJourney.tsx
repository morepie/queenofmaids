import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Sparkles, Clock, Home, ArrowRight } from 'lucide-react';

const howItWorks = [
  {
    step: 1,
    title: 'Choose Your Clean',
    description: 'Book a one-time deep clean or pick a weekly, biweekly, or monthly membership that matches your home size and cleaning preferences. Not sure which fits? Give us a call — we\'ll walk you through it.',
    icon: CalendarCheck,
    gradient: 'from-purple-600 to-indigo-600',
    shadow: 'shadow-purple-500/30'
  },
  {
    step: 2,
    title: 'Save Big on Your First Deep Clean',
    description: 'Your first cleaning is always a deep clean — and members get it at a fraction of the regular price. Lock in your discounted rate from day one and start saving right away.',
    icon: Sparkles,
    gradient: 'from-fuchsia-600 to-purple-600',
    shadow: 'shadow-fuchsia-500/30'
  },
  {
    step: 3,
    title: 'Lock In Your Preferred Day',
    description: 'Tell us which day works best. We\'ll reserve that slot for you every month, so your cleaning happens like clockwork — no rebooking required.',
    icon: Clock,
    gradient: 'from-violet-600 to-purple-700',
    shadow: 'shadow-violet-500/30'
  },
  {
    step: 4,
    title: 'Come Home to Clean',
    description: 'That\'s it. Every month, our team arrives and takes care of everything. You focus on the things that matter — we\'ll keep your home spotless.',
    icon: Home,
    gradient: 'from-indigo-600 to-blue-600',
    shadow: 'shadow-indigo-500/30'
  },
];

export function HorizontalJourney() {
  return (
    <section className="min-h-screen bg-[hsl(270,30%,97%)] p-8 py-24 flex flex-col justify-center overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[hsl(270,50%,36%)] text-sm font-bold tracking-wide shadow-sm mb-6 uppercase"
          >
            Getting Started
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[hsl(270,30%,20%)] tracking-tight"
          >
            How Membership Works
          </motion.h2>
        </div>

        <div className="relative">
          {/* Desktop Dotted Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 border-t-4 border-dotted border-purple-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-8 shadow-xl ${item.shadow} transition-all duration-300 h-full flex flex-col justify-between`}
                >
                  {/* Giant Watermark Number */}
                  <div className="absolute -top-10 -right-4 text-[180px] font-black text-white/10 leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 shrink-0 relative z-10 border border-white/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm font-semibold mb-4 border border-white/20">
                      Step {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile Connecting Arrow */}
                  {index < howItWorks.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                      <ArrowRight className="w-6 h-6 text-purple-600 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
