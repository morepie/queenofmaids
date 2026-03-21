import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useBooking } from '@/context/BookingContext';
import { useTreatments, useTestimonials } from '@/hooks/use-app-data';
import TreatmentCard, { SkeletonTreatmentCard } from '@/components/shared/TreatmentCard';
import { Search, CalendarCheck, HeartPulse, Sparkles, Star, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { openBookingModal } = useBooking();
  const { data: treatments, isLoading: isTreatmentsLoading } = useTreatments();
  const { data: testimonials } = useTestimonials();

  // Pick top 6 treatments for the home page
  const featuredTreatments = treatments?.filter(t => t.popular).concat(treatments?.filter(t => !t.popular)).slice(0, 6);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(192,30%,92%)] via-[hsl(35,40%,95%)] to-background"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/40 text-primary text-sm font-bold tracking-widest uppercase mb-8 border border-secondary/50 shadow-sm">
                Premium Mobile IV Therapy
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground leading-[1.1] mb-8">
                Wellness Delivered <span className="text-primary block mt-2">To Your Door</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-medium">
                On-demand hydration, vitamins, and fast recovery delivered directly to your home, hotel, or office by registered nurses.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <button 
                  onClick={openBookingModal} 
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-primary-foreground text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                >
                  Book Your Treatment
                </button>
                <Link 
                  href="/treatments" 
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-card text-foreground text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-border flex items-center justify-center gap-2 group"
                >
                  Explore Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="hidden lg:flex items-center justify-center relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border-2 border-dashed border-primary/20"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/20 blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-secondary/40 blur-sm"></div>
                <div className="absolute top-12 -left-8 w-12 h-12 rounded-full bg-muted/80 border border-primary/10"></div>
                <div className="absolute -bottom-2 right-8 w-16 h-16 rounded-full bg-primary/8 border border-primary/15"></div>
                <div className="absolute top-1/4 -right-6 w-3 h-3 rounded-full bg-accent/60"></div>
                <div className="absolute bottom-1/4 -left-3 w-2 h-2 rounded-full bg-primary/50"></div>
                <div className="absolute top-8 right-1/4 w-4 h-4 rounded-full bg-secondary/60"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/iv-bag.png`} 
                  alt="Premium IV therapy bag" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl max-w-sm mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">Seamless Wellness</h2>
            <p className="text-xl text-muted-foreground">Four simple steps to feeling your absolute best, without leaving your location.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

            {[
              { icon: Search, title: "1. Choose", desc: "Browse our menu of 14 premium IV blends." },
              { icon: CalendarCheck, title: "2. Book", desc: "Schedule your preferred time and location." },
              { icon: HeartPulse, title: "3. Relax", desc: "A registered nurse arrives at your door." },
              { icon: Sparkles, title: "4. Revive", desc: "Feel instantly refreshed and energized." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeIn} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center mb-8 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-500 group-hover:scale-110">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-sans font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">Signature Blends</h2>
              <p className="text-xl text-muted-foreground">Expertly formulated treatments designed for targeted results and optimal hydration.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Link href="/treatments" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors text-lg group border-b-2 border-transparent hover:border-primary pb-1">
                View All 14 Treatments <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isTreatmentsLoading 
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonTreatmentCard key={i} />)
              : featuredTreatments?.map(treatment => (
                  <motion.div key={treatment.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
                    <TreatmentCard treatment={treatment} />
                  </motion.div>
                ))
            }
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-card border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">Client Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover why thousands trust Pura Drip for their ongoing wellness needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((t, i) => (
              <motion.div 
                key={t.id} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } } }}
                className="bg-background rounded-3xl p-10 shadow-lg border border-border relative"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-8 italic leading-relaxed">"{t.quote}"</p>
                <p className="font-sans font-bold text-xl text-primary">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-primary-foreground mb-8 drop-shadow-md">
              Ready to Feel Your Best?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Don't wait to restore your vitality. Book your premium IV therapy session today.
            </p>
            <button 
              onClick={openBookingModal} 
              className="px-12 py-5 rounded-full bg-card text-primary text-xl font-bold shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-secondary"
            >
              Schedule Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
