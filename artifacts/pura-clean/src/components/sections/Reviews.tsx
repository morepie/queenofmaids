import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { reviews, aggregateRating } from '@/data/content';
import { cn } from '@/lib/utils';

const COLS = 4;
const INITIAL_ROWS = 2;
const LOAD_MORE_ROWS = 2;

export default function Reviews() {
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const visibleCount = visibleRows * COLS;
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  const loadMore = () => {
    setVisibleRows(prev => prev + LOAD_MORE_ROWS);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What Our Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Loved by Your Neighbors
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1" role="img" aria-label={`${aggregateRating.score} out of 5 stars`}>
              {[...Array(5)].map((_, i) => {
                const fill = Math.min(1, Math.max(0, aggregateRating.score - i));
                if (fill >= 1) {
                  return <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />;
                }
                if (fill <= 0) {
                  return <Star key={i} className="w-5 h-5 text-yellow-400/30" aria-hidden="true" />;
                }
                return (
                  <span key={i} className="relative w-5 h-5" aria-hidden="true">
                    <Star className="w-5 h-5 text-yellow-400/30 absolute inset-0" />
                    <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </span>
                  </span>
                );
              })}
            </div>
            <span className="text-lg font-bold text-foreground">{aggregateRating.score}</span>
            <span className="text-muted-foreground text-sm">({aggregateRating.totalReviews} reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list" aria-label="Customer review cards">
          <AnimatePresence initial={false}>
            {visibleReviews.map((review, i) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i >= (visibleRows - LOAD_MORE_ROWS) * COLS ? (i % COLS) * 0.06 : 0), ease: "easeOut" as const }}
                className="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col"
                role="listitem"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs" aria-hidden="true">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 mb-2.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={cn(
                        "w-3.5 h-3.5",
                        j < review.rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/30"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/20 text-foreground font-semibold text-sm hover:bg-primary/5 transition-all duration-200"
            >
              View More Reviews
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
