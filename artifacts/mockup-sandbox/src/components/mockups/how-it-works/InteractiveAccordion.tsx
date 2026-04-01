import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CalendarHeart, PiggyBank, Home, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const howItWorks = [
  { 
    step: 1, 
    title: 'Choose Your Clean', 
    description: 'Book a one-time deep clean or pick a weekly, biweekly, or monthly membership that matches your home size and cleaning preferences. Not sure which fits? Give us a call — we\'ll walk you through it.',
    icon: Home,
    color: 'from-fuchsia-400 to-purple-500',
    lightColor: 'bg-fuchsia-100 text-fuchsia-700'
  },
  { 
    step: 2, 
    title: 'Save Big on Your First Deep Clean', 
    description: 'Your first cleaning is always a deep clean — and members get it at a fraction of the regular price. Lock in your discounted rate from day one and start saving right away.',
    icon: PiggyBank,
    color: 'from-purple-500 to-violet-600',
    lightColor: 'bg-purple-100 text-purple-700'
  },
  { 
    step: 3, 
    title: 'Lock In Your Preferred Day', 
    description: 'Tell us which day works best. We\'ll reserve that slot for you every month, so your cleaning happens like clockwork — no rebooking required.',
    icon: CalendarHeart,
    color: 'from-violet-600 to-indigo-600',
    lightColor: 'bg-violet-100 text-violet-700'
  },
  { 
    step: 4, 
    title: 'Come Home to Clean', 
    description: 'That\'s it. Every month, our team arrives and takes care of everything. You focus on the things that matter — we\'ll keep your home spotless.',
    icon: Sparkles,
    color: 'from-indigo-600 to-[hsl(270,50%,36%)]',
    lightColor: 'bg-indigo-100 text-indigo-700'
  },
];

export function InteractiveAccordion() {
  const [activeStep, setActiveStep] = useState(1);

  const activeData = howItWorks.find(s => s.step === activeStep) || howItWorks[0];
  const ActiveIcon = activeData.icon;

  return (
    <section className="min-h-screen bg-[hsl(270,30%,97%)] p-4 sm:p-8 lg:p-12 font-sans flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(270,50%,36%)]/10 text-[hsl(270,50%,36%)] font-semibold text-sm tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            Getting Started
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(270,30%,20%)] tracking-tight">
            How Membership Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Accordion */}
          <div className="flex flex-col gap-4 relative z-10">
            {howItWorks.map((item) => {
              const isActive = activeStep === item.step;
              
              return (
                <div
                  key={item.step}
                  className={cn(
                    "group relative transition-all duration-300 rounded-2xl overflow-hidden",
                    isActive ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-purple-100" : "hover:bg-white/50"
                  )}
                >
                  {/* Left Active Border */}
                  <div 
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 rounded-l-2xl z-10",
                      isActive ? `bg-gradient-to-b ${item.color} opacity-100` : "bg-transparent opacity-0"
                    )}
                  />

                  <button
                    onClick={() => setActiveStep(item.step)}
                    className="w-full text-left p-6 sm:p-8 transition-all duration-300 pl-8 sm:pl-10"
                  >
                    <div className="flex items-center gap-6">
                      {/* Step Number Circle */}
                      <div className="relative flex-shrink-0">
                        {isActive && (
                          <motion.div
                            layoutId="active-step-pulse"
                            className={cn("absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-br", item.color)}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        <div 
                          className={cn(
                            "relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500",
                            isActive 
                              ? `bg-gradient-to-br ${item.color} text-white shadow-lg shadow-purple-200` 
                              : `${item.lightColor} opacity-70 group-hover:opacity-100`
                          )}
                        >
                          {isActive ? <CheckCircle2 className="w-6 h-6" /> : item.step}
                        </div>
                      </div>

                      <h3 className={cn(
                        "text-xl sm:text-2xl font-bold transition-colors duration-300",
                        isActive ? "text-[hsl(270,30%,20%)]" : "text-[hsl(270,30%,20%)]/70 group-hover:text-[hsl(270,30%,20%)]"
                      )}>
                        {item.title}
                      </h3>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-[hsl(270,30%,20%)]/80 leading-relaxed text-lg pl-[72px]">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Side: Visual Area */}
          <div className="relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden hidden lg:block sticky top-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "absolute inset-0 bg-gradient-to-br flex items-center justify-center",
                  activeData.color
                )}
              >
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

                {/* Central Icon */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="w-48 h-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl relative">
                    <ActiveIcon className="w-24 h-24 text-white drop-shadow-md" strokeWidth={1.5} />
                    
                    {/* Floating Step Badge */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-2xl font-bold text-[hsl(270,50%,36%)] border-4 border-transparent bg-clip-padding">
                      {activeData.step}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
