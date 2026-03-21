import { motion } from 'framer-motion';
import { useTreatments } from '@/hooks/use-app-data';
import TreatmentCard, { SkeletonTreatmentCard } from '@/components/shared/TreatmentCard';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Treatments() {
  const { data: treatments, isLoading } = useTreatments();

  return (
    <div className="w-full bg-background pb-24">
      {/* HEADER */}
      <section className="bg-card pt-40 pb-20 border-b border-border text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">The Catalog</span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-8">
              Premium IV Blends
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our complete menu of 14 scientifically formulated treatments. From rapid hydration to supreme cellular repair, find exactly what your body needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading 
            ? Array.from({ length: 9 }).map((_, i) => <SkeletonTreatmentCard key={i} />)
            : treatments?.map((treatment, i) => (
                <motion.div 
                  key={treatment.id} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: (i % 3) * 0.1, duration: 0.5 } } }}
                >
                  <TreatmentCard treatment={treatment} />
                </motion.div>
              ))
          }
        </div>
      </section>
    </div>
  );
}
