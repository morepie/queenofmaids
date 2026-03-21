import { useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Clock, Droplets, ArrowLeft, CheckCircle, Beaker, Users, Star } from 'lucide-react';
import { treatments } from '@/data/content';
import { useBooking } from '@/context/BookingContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function TreatmentDetail() {
  const params = useParams<{ id: string }>();
  const { openBookingModal } = useBooking();
  const treatment = treatments.find(t => t.id === params.id);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Treatment Not Found</h1>
          <p className="text-muted-foreground mb-8">The treatment you're looking for doesn't exist.</p>
          <Link href="/treatments" className="text-primary font-semibold hover:underline">
            View All Treatments
          </Link>
        </div>
      </div>
    );
  }

  const relatedTreatments = treatments
    .filter(t => t.id !== treatment.id)
    .filter(t => t.uses.some(u => treatment.uses.includes(u)))
    .slice(0, 3);

  return (
    <div className="w-full bg-background">
      <div className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/treatments" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to All Treatments
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
            <div className="bg-secondary/20 rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              {treatment.popular && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-primary text-primary-foreground text-sm font-bold tracking-wider uppercase rounded-full shadow-lg z-10 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Popular
                </span>
              )}
              <img
                src={`${import.meta.env.BASE_URL}images/pura-iv-placeholder.png`}
                alt={treatment.name}
                className="relative z-10 w-full max-w-xs h-auto object-contain drop-shadow-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-card border border-border rounded-2xl p-4 text-center">
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground font-medium">Duration</p>
                <p className="text-sm font-bold text-foreground">{treatment.duration}</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4 text-center">
                <Droplets className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground font-medium">Volume</p>
                <p className="text-sm font-bold text-foreground">{treatment.volume}</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4 text-center">
                <Beaker className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground font-medium">Ingredients</p>
                <p className="text-sm font-bold text-foreground">{treatment.ingredients.length}</p>
              </div>
            </div>
          </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">{treatment.uses[0]}</span>
              <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mt-2 mb-3">
                {treatment.name}
              </h1>
              <p className="text-lg text-muted-foreground italic mb-6">{treatment.tagline}</p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-foreground">${treatment.price}</span>
              <span className="text-muted-foreground">per session</span>
            </motion.div>

            <motion.div variants={fadeIn}>
              <button
                onClick={openBookingModal}
                className="w-full sm:w-auto px-12 py-4 rounded-full bg-primary text-primary-foreground text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Book Now
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">About This Treatment</h2>
              <p className="text-muted-foreground leading-relaxed">{treatment.longDescription}</p>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <Beaker className="w-5 h-5 text-primary" />
                What's Inside
              </h2>
              <div className="space-y-3">
                {treatment.ingredients.map((ing, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{ing.name}</p>
                        <p className="text-sm text-muted-foreground mt-1">{ing.benefit}</p>
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {ing.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Ideal For
              </h2>
              <div className="flex flex-wrap gap-2">
                {treatment.idealFor.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-secondary/30 text-secondary-foreground text-sm font-medium rounded-full border border-secondary/50">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10 pt-8 border-t border-border">
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Ready to Book?</h3>
                <p className="text-muted-foreground text-sm mb-5">
                  Our registered nurses come to you — home, hotel, or office.
                </p>
                <button
                  onClick={openBookingModal}
                  className="px-10 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book {treatment.name} — ${treatment.price}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {relatedTreatments.length > 0 && (
        <section className="bg-card border-t border-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTreatments.map(t => (
                <Link
                  key={t.id}
                  href={`/treatments/${t.id}`}
                  className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-secondary/20 p-6 flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/pura-iv-placeholder.png`}
                      alt={t.name}
                      className="h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{t.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.description}</p>
                    <p className="text-primary font-bold mt-3">${t.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
