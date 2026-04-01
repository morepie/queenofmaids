import React from 'react';
import { CalendarCheck, Sparkles, Clock, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const howItWorks = [
  { 
    step: 1, 
    title: 'Choose Your Clean', 
    description: 'Book a one-time deep clean or pick a weekly, biweekly, or monthly membership that matches your home size and cleaning preferences. Not sure which fits? Give us a call — we\'ll walk you through it.',
    icon: CalendarCheck,
    gradient: 'from-fuchsia-500 to-purple-600',
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-600',
  },
  { 
    step: 2, 
    title: 'Save Big on Your First Deep Clean', 
    description: 'Your first cleaning is always a deep clean — and members get it at a fraction of the regular price. Lock in your discounted rate from day one and start saving right away.',
    icon: Sparkles,
    gradient: 'from-violet-500 to-indigo-600',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  { 
    step: 3, 
    title: 'Lock In Your Preferred Day', 
    description: 'Tell us which day works best. We\'ll reserve that slot for you every month, so your cleaning happens like clockwork — no rebooking required.',
    icon: Clock,
    gradient: 'from-purple-500 to-pink-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  { 
    step: 4, 
    title: 'Come Home to Clean', 
    description: 'That\'s it. Every month, our team arrives and takes care of everything. You focus on the things that matter — we\'ll keep your home spotless.',
    icon: Home,
    gradient: 'from-indigo-500 to-blue-600',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

export function VisualGrid() {
  return (
    <section className="min-h-screen p-8 py-24 bg-gradient-to-br from-[hsl(270,30%,97%)] via-white to-[hsl(270,30%,94%)] relative overflow-hidden flex flex-col justify-center">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-purple-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-fuchsia-300/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[hsl(270,50%,36%)]/10 text-[hsl(270,50%,36%)] font-semibold text-sm tracking-wide uppercase mb-6">
            Getting Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[hsl(270,30%,20%)] tracking-tight">
            How Membership Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-fuchsia-200 via-purple-300 to-indigo-200 rounded-full z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {howItWorks.map((step, index) => {
              const isEven = index % 2 !== 0; // 0-indexed, so index 1, 3 are "even" in visual order
              const Icon = step.icon;

              return (
                <div 
                  key={step.step} 
                  className={cn(
                    "relative flex flex-col pt-0 px-6 pb-10 rounded-[2rem] shadow-xl transition-all hover:-translate-y-2 duration-300 group mt-16 lg:mt-0",
                    isEven ? "bg-[hsl(270,30%,97%)] border border-purple-100/50" : "bg-white border border-transparent"
                  )}
                >
                  {/* Colorful Top Border */}
                  <div className={cn(
                    "absolute top-0 left-0 right-0 h-2 rounded-t-[2rem] bg-gradient-to-r opacity-90 group-hover:opacity-100 transition-opacity",
                    step.gradient
                  )} />

                  {/* Icon Area */}
                  <div className="relative z-10 flex justify-center -mt-14 mb-8">
                    <div className="relative">
                      {/* Progress marker on the line */}
                      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[116px] h-[116px] rounded-full bg-white shadow-sm -z-10" />
                      
                      {/* Progress filled circle on line */}
                      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] rounded-full bg-gradient-to-r from-purple-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 blur-md" />
                      
                      <div className={cn(
                        "w-[104px] h-[104px] rounded-full flex items-center justify-center shadow-lg ring-8 ring-white transition-transform duration-500 group-hover:scale-110",
                        step.iconBg
                      )}>
                        <Icon className={cn("w-10 h-10 transition-transform duration-500 group-hover:rotate-6", step.iconColor)} strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow flex flex-col items-center">
                    <div className="mb-5 flex flex-col items-center">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(270,50%,36%)] text-white font-bold text-base mb-4 shadow-md ring-4 ring-purple-50">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-[hsl(270,30%,20%)] leading-tight min-h-[56px] flex items-center justify-center px-2">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[hsl(270,30%,35%)] leading-relaxed text-[15px] flex-grow px-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
