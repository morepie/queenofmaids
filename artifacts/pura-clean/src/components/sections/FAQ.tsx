import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Phoenix metro area including Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Queen Creek, Avondale, Goodyear, and Fountain Hills. If you\'re unsure whether we cover your area, give us a call and we\'ll let you know.',
  },
  {
    question: 'How does biweekly pricing work?',
    answer: 'Our listed prices are per visit on a biweekly (every two weeks) schedule. You\'re billed after each cleaning — no upfront contracts. You can pause or cancel anytime with at least 48 hours\' notice before your next scheduled visit.',
  },
  {
    question: 'Do you offer one-time or deep cleanings?',
    answer: 'Yes! In addition to our recurring biweekly plans, we offer one-time deep cleans for move-ins, move-outs, post-renovation, or special occasions. One-time pricing varies based on home size and condition — call us for a custom quote.',
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use eco-friendly, non-toxic cleaning products that are safe for kids, pets, and the environment. If you have specific product preferences or allergies, let us know and we\'ll accommodate your needs.',
  },
  {
    question: 'Are your cleaners background-checked and insured?',
    answer: 'Absolutely. Every member of our cleaning team undergoes a thorough background check and is fully insured and bonded. Your home and belongings are protected with every visit.',
  },
  {
    question: 'How long does a typical cleaning take?',
    answer: 'A Partial Clean typically takes 1.5–2 hours, a Full Clean takes 2–3 hours, and a Full Premium clean takes 3–4 hours. Times can vary depending on the size and condition of your home.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'Not at all. Many of our clients provide a key, garage code, or smart lock access so we can clean while they\'re at work or running errands. We treat every home with the utmost care and respect.',
  },
  {
    question: 'What if I\'m not satisfied with a cleaning?',
    answer: 'Your satisfaction is our priority. If something doesn\'t meet your expectations, contact us within 24 hours and we\'ll send our team back to make it right at no additional charge.',
  },
  {
    question: 'Can I customize what gets cleaned?',
    answer: 'Yes. While each plan covers specific areas, you can always add notes or special requests when booking. We\'re happy to focus on areas that matter most to you — just let your team know.',
  },
  {
    question: 'How do I reschedule or cancel a visit?',
    answer: 'You can reschedule or cancel by calling us or reaching out via email at least 48 hours before your scheduled cleaning. Last-minute cancellations (under 24 hours) may incur a small fee.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
      >
        <span className={cn(
          "text-base font-semibold transition-colors pr-4",
          isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
        )}>
          {question}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180 text-primary"
        )} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <p className="px-1 pb-5 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our cleaning services. Can't find what you're looking for? Give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          <div className="bg-card rounded-2xl border border-border shadow-sm px-6">
            {leftColumn.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="bg-card rounded-2xl border border-border shadow-sm px-6 mt-6 lg:mt-0">
            {rightColumn.map((faq, i) => {
              const globalIndex = i + midpoint;
              return (
                <FAQItem
                  key={globalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
