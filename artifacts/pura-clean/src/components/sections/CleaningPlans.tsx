import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { cleaningPlans } from '@/data/content';
import { cn } from '@/lib/utils';

export default function CleaningPlans() {
  return (
    <section id="memberships" className="py-20 md:py-28 bg-background" aria-label="Membership plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Memberships
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Choose Your Clean
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            All memberships include monthly service by our trained, background-checked professionals. Start with a 3-month commitment, then stay as long as you like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" role="list" aria-label="Cleaning plan options">
          {cleaningPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-primary/20 scale-[1.02]"
                  : "bg-card border border-border shadow-md"
              )}
              role="listitem"
              aria-label={`${plan.name} plan starting at $${plan.price} per ${plan.frequency}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn(
                  "text-xl font-bold mb-1",
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                )}>
                  {plan.name}
                </h3>
                <p className={cn(
                  "text-sm",
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={cn(
                  "text-xs font-medium uppercase tracking-wide block mb-1",
                  plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  Starting at
                </span>
                <span className={cn(
                  "text-4xl font-bold",
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                )}>
                  ${plan.price}
                </span>
                <span className={cn(
                  "text-sm ml-1",
                  plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  /{plan.frequency}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1" aria-label={`${plan.name} features`}>
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={cn(
                      "w-4 h-4 mt-0.5 shrink-0",
                      plan.popular ? "text-primary-foreground" : "text-teal"
                    )} aria-hidden="true" />
                    <span className={plan.popular ? "text-primary-foreground/90" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://quote.queenofmaids.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get a quote for ${plan.name} (opens in new tab)`}
                className={cn(
                  "w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 block text-center",
                  plan.popular
                    ? "bg-white text-primary shadow-md hover:shadow-lg"
                    : "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                )}
              >
                Get a Quote
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mt-10 rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-base font-bold text-foreground">
              Not ready for a plan? One-time cleans are available too.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              But plan members save up to 25% per clean and get priority scheduling.
            </p>
          </div>
          <a
            href="https://quote.queenofmaids.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a one-time clean (opens in new tab)"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Book One-Time Clean <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
