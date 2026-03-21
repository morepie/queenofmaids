import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTreatments } from '@/hooks/use-app-data';
import { TREATMENT_CATEGORIES, type TreatmentCategory } from '@/data/content';
import TreatmentCard, { SkeletonTreatmentCard } from '@/components/shared/TreatmentCard';
import { Droplets, Shield, Zap, Sparkles, HeartPulse, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const categoryIcons: Record<TreatmentCategory, typeof Droplets> = {
  'Hydration': Droplets,
  'Wellness': Shield,
  'Performance': Zap,
  'Beauty': Sparkles,
  'Relief': HeartPulse,
  'Specialty': Star,
};

const categoryDescriptions: Record<TreatmentCategory, string> = {
  'Hydration': 'Rehydrate and restore fluid balance',
  'Wellness': 'Comprehensive health and immune support',
  'Performance': 'Energy, endurance, and recovery',
  'Beauty': 'Skin, hair, and anti-aging',
  'Relief': 'Pain, nausea, and symptom relief',
  'Specialty': 'Targeted treatments for unique needs',
};

export default function Treatments() {
  const { data: treatments, isLoading } = useTreatments();
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | 'All'>('All');

  const filteredTreatments = useMemo(() => {
    if (!treatments) return [];
    if (activeCategory === 'All') return treatments;
    return treatments.filter(t => t.category === activeCategory);
  }, [treatments, activeCategory]);

  const categoryCounts = useMemo(() => {
    if (!treatments) return {};
    const counts: Record<string, number> = { All: treatments.length };
    for (const cat of TREATMENT_CATEGORIES) {
      counts[cat] = treatments.filter(t => t.category === cat).length;
    }
    return counts;
  }, [treatments]);

  return (
    <div className="w-full bg-background pb-24">
      <section className="bg-card pt-40 pb-20 border-b border-border text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">The Catalog</span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-8">
              Premium IV Blends
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our complete menu of scientifically formulated treatments. From rapid hydration to supreme cellular repair, find exactly what your body needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
            }`}
          >
            All{categoryCounts['All'] ? ` (${categoryCounts['All']})` : ''}
          </button>
          {TREATMENT_CATEGORIES.map(cat => {
            const Icon = categoryIcons[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat}{categoryCounts[cat] ? ` (${categoryCounts[cat]})` : ''}
              </button>
            );
          })}
        </div>

        {activeCategory !== 'All' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-muted-foreground mt-4 text-sm"
          >
            {categoryDescriptions[activeCategory]}
          </motion.p>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {isLoading 
              ? Array.from({ length: 9 }).map((_, i) => <SkeletonTreatmentCard key={i} />)
              : filteredTreatments.map((treatment, i) => (
                  <motion.div 
                    key={treatment.id} 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.4 }}
                  >
                    <TreatmentCard treatment={treatment} />
                  </motion.div>
                ))
            }
          </motion.div>
        </AnimatePresence>

        {!isLoading && filteredTreatments.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No treatments found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
