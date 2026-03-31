import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews, aggregateRating } from '@/data/content';
import { cn } from '@/lib/utils';

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              What Our Clients Say
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Loved by Homeowners
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < Math.floor(aggregateRating.score)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-yellow-400/30"
                    )}
                  />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">{aggregateRating.score}</span>
              <span className="text-muted-foreground text-sm">({aggregateRating.totalReviews} reviews)</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100%-80rem)/2+1.5rem))] snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" as const }}
            className="min-w-[300px] max-w-[340px] flex-shrink-0 snap-start rounded-2xl bg-card border border-border p-6 shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {review.initials}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className={cn(
                    "w-4 h-4",
                    j < review.rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/30"
                  )}
                />
              ))}
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed flex-1">
              "{review.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
