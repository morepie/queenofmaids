import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const EditorialSplit = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#f8f5fa] text-[#3b2b4d] font-sans overflow-hidden">
      {/* Left Content Half */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-24 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <img 
            src="/__mockup/images/logo-colored.png" 
            alt="Queen of Maids Logo" 
            className="h-10 w-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-xl flex-grow flex flex-col justify-center"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#5e2e8c]"></span>
            <span className="text-[#5e2e8c] text-sm font-semibold tracking-widest uppercase">
              Your Trusted Cleaning Team
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#3b2b4d] leading-[1.1] mb-8 tracking-tight"
          >
            A Cleaner Home, <br />
            <span className="text-[#5e2e8c] italic font-light">Without the Hassle.</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-[#3b2b4d]/70 mb-12 leading-relaxed font-light max-w-md"
          >
            Experience the luxury of a spotless space. We provide professional, reliable house cleaning across Phoenix, Salt Lake City, Las Vegas, and Denver.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 mb-16">
            <button className="px-8 py-4 bg-[#5e2e8c] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#4a2470] transition-colors duration-300 flex items-center justify-center gap-2 group">
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-[#3b2b4d]/20 text-[#3b2b4d] text-sm font-semibold tracking-wider uppercase hover:bg-[#3b2b4d]/5 transition-colors duration-300">
              View Memberships
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Trust Signals */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="pt-12 border-t border-[#3b2b4d]/10"
        >
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#5e2e8c] fill-[#5e2e8c]" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold block">4.9/5 Rating</span>
                <span className="text-[#3b2b4d]/60">1,500+ Reviews</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-[#3b2b4d]/70">
                <Shield className="w-4 h-4 text-[#5e2e8c]" />
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3b2b4d]/70">
                <Sparkles className="w-4 h-4 text-[#5e2e8c]" />
                <span>Happiness Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3b2b4d]/70">
                <CheckCircle className="w-4 h-4 text-[#5e2e8c]" />
                <span>Vetted Cleaners</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3b2b4d]/70">
                <Clock className="w-4 h-4 text-[#5e2e8c]" />
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image Half */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative"
      >
        <img 
          src="/__mockup/images/living-space.webp" 
          alt="Immaculate living space" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure the image sits nicely next to the light UI */}
        <div className="absolute inset-0 bg-black/5" />
      </motion.div>
    </div>
  );
};

export default EditorialSplit;