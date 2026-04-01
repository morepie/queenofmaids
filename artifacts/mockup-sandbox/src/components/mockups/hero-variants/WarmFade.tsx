import React from "react";
import { Star, Shield, Clock, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function WarmFade() {
  return (
    <div className="relative min-h-screen w-full bg-[hsl(270,30%,97%)] overflow-hidden font-sans">
      {/* Background Image with Gradient Mask */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full z-0"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 30%, black)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black)"
        }}
      >
        <img 
          src="/__mockup/images/living-space.webp" 
          alt="Clean bright living room" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[hsl(270,50%,36%)]/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full min-h-screen flex flex-col justify-center py-20 lg:py-0">
        <div className="max-w-xl lg:max-w-2xl pt-12 lg:pt-0">
          
          {/* Badge & Social Proof */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(270,50%,36%)]/10 text-[hsl(270,50%,36%)] text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              Your Trusted Cleaning Team
            </span>
            
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white/50">
              <div className="flex gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-[hsl(270,30%,20%)]">4.9/5</span>
              <span className="text-sm text-[hsl(270,30%,20%)]/70">(1,500+ Reviews)</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[hsl(270,30%,20%)] leading-[1.15] mb-6 tracking-tight">
            A Cleaner Home, <br className="hidden sm:block" />
            <span className="text-[hsl(270,50%,36%)]">Without the Hassle.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-[hsl(270,30%,20%)]/80 mb-10 leading-relaxed max-w-lg font-medium">
            Family-owned professional cleaning across Phoenix, Salt Lake City, Las Vegas, and Denver. We make your home sparkle so you can focus on what matters most.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[hsl(270,50%,36%)] hover:bg-[hsl(270,50%,30%)] text-white font-bold text-lg shadow-lg shadow-[hsl(270,50%,36%)]/20 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 hover:bg-white text-[hsl(270,30%,20%)] border-2 border-[hsl(270,30%,85%)] hover:border-[hsl(270,50%,36%)]/30 font-bold text-lg transition-all shadow-sm flex items-center justify-center">
              View Memberships
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            {[
              { icon: Shield, text: "Insured & Bonded" },
              { icon: CheckCircle, text: "200% Happiness Guarantee" },
              { icon: Shield, text: "Vetted Cleaners" },
              { icon: Clock, text: "Flexible Scheduling" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[hsl(270,30%,90%)] flex items-center justify-center group-hover:scale-110 group-hover:border-[hsl(270,50%,36%)]/30 transition-all">
                  <item.icon className="w-5 h-5 text-[hsl(270,50%,36%)]" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-[hsl(270,30%,20%)]/80 group-hover:text-[hsl(270,30%,20%)] transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Decorative Bottom Left Blur */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[hsl(270,50%,36%)]/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
