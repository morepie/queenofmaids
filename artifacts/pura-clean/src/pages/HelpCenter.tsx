import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { helpTopics } from '@/data/helpCenter';
import { cn } from '@/lib/utils';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function Accordion({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors",
          isOpen ? "bg-primary/5" : "bg-card hover:bg-muted/50"
        )}
      >
        <span className={cn("text-sm font-semibold", isOpen ? "text-primary" : "text-foreground")}>
          {question}
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 shrink-0 transition-transform duration-200",
          isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
        )} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 py-4 bg-card border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const results: { topicTitle: string; q: string; a: string }[] = [];
    helpTopics.forEach(topic => {
      topic.questions.forEach(faq => {
        if (faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query)) {
          results.push({ topicTitle: topic.title, ...faq });
        }
      });
    });
    return results;
  }, [searchQuery]);

  const displayedTopics = activeTopic
    ? helpTopics.filter(t => t.id === activeTopic)
    : helpTopics;

  return (
    <>
      <Helmet>
        <title>Help Center | Queen of Maids</title>
        <meta name="description" content="Find answers to common questions about Queen of Maids cleaning services, memberships, scheduling, pricing, and more." />
      </Helmet>

      <section className="relative pt-32 pb-6 md:pt-40 md:pb-6 bg-gradient-to-b from-[hsl(270,30%,95%)] to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              How Can We Help?
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Search for answers or browse by topic. Can't find what you need? Give us a call.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {searchResults !== null ? (
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm font-medium text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((result, i) => (
                  <Accordion
                    key={`search-${i}`}
                    question={result.q}
                    answer={result.a}
                    isOpen={openQuestions.has(`search-${i}`)}
                    onToggle={() => toggleQuestion(`search-${i}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No results found. Try a different search term.</p>
                <a
                  href="tel:6023131444"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Call us for help
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="py-5 md:py-6 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
                {helpTopics.map((topic, idx) => {
                  const Icon = topic.icon;
                  const isActive = activeTopic === topic.id;
                  const colorSchemes = [
                    { bg: 'bg-purple-50', iconBg: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200', hoverBorder: 'hover:border-purple-300' },
                    { bg: 'bg-blue-50', iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200', hoverBorder: 'hover:border-blue-300' },
                    { bg: 'bg-amber-50', iconBg: 'bg-amber-100', iconText: 'text-amber-600', border: 'border-amber-200', hoverBorder: 'hover:border-amber-300' },
                    { bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-300' },
                    { bg: 'bg-rose-50', iconBg: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200', hoverBorder: 'hover:border-rose-300' },
                    { bg: 'bg-indigo-50', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', border: 'border-indigo-200', hoverBorder: 'hover:border-indigo-300' },
                  ];
                  const scheme = colorSchemes[idx % colorSchemes.length];
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setActiveTopic(isActive ? null : topic.id)}
                      className={cn(
                        "flex flex-col items-center gap-2.5 p-5 rounded-2xl border transition-all duration-200 text-center",
                        isActive
                          ? "bg-primary/10 border-primary/30 shadow-md"
                          : `${scheme.bg} ${scheme.border} ${scheme.hoverBorder} hover:shadow-sm`
                      )}
                    >
                      <div className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center transition-colors",
                        isActive ? "bg-primary text-primary-foreground" : `${scheme.iconBg} ${scheme.iconText}`
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "text-xs font-semibold leading-tight",
                        isActive ? "text-primary" : "text-foreground"
                      )}>
                        {topic.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="max-w-3xl mx-auto">
                {displayedTopics.map(topic => {
                  const Icon = topic.icon;
                  return (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mb-12 last:mb-0"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-foreground">{topic.title}</h2>
                          <p className="text-xs text-muted-foreground">{topic.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        {topic.questions.map((faq, i) => (
                          <Accordion
                            key={`${topic.id}-${i}`}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openQuestions.has(`${topic.id}-${i}`)}
                            onToggle={() => toggleQuestion(`${topic.id}-${i}`)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-14 bg-muted/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is happy to help. Give us a call or request a free quote online.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:6023131444"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Call Us
                </a>
                <a
                  href="https://quote.queenofmaids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-200"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
