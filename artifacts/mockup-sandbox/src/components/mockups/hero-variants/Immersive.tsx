import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Immersive() {
  const platforms = [
    { name: 'Google', rating: 4.9 },
    { name: 'Yelp', rating: 4.5 },
    { name: 'Facebook', rating: 4.9 },
    { name: 'Thumbtack', rating: 4.8 },
    { name: 'Nextdoor', rating: 4.9 },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Insured & Bonded' },
    { icon: Sparkles, text: 'Happiness Guarantee' },
    { icon: CheckCircle, text: 'Vetted Cleaners' },
    { icon: Clock, text: 'Flexible Scheduling' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/__mockup/images/living-space.webp)' }}
      />
      
      {/* Deep Purple Overlay */}
      <div className="absolute inset-0 z-0 bg-[hsl(270,50%,15%)]/75 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-[hsl(270,50%,10%)]/90" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide mb-8">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Your Trusted Cleaning Team</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            The Luxury of a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">Pristine Home.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
            Experience the standard of clean you deserve. Professional, reliable house cleaning serving Phoenix, Salt Lake City, Las Vegas, and Denver.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[hsl(270,50%,36%)] text-base font-bold shadow-xl hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300">
              Get a Quote
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/30 text-base font-bold shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
              View Memberships
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Glassmorphism Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/20 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white font-bold text-2xl">4.9/5</div>
              </div>
              <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-white/80 text-sm text-center sm:text-left">
                <span className="font-semibold text-white">1,500+</span> verified reviews<br/>
                <span className="text-white/60">14+ Years Trusted</span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-purple-200" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
