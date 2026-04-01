import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { useLocation } from 'wouter';
import { articles, articleCategories } from '@/data/articles';
import { cn } from '@/lib/utils';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [, setLocation] = useLocation();

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Articles & Cleaning Tips | Queen of Maids</title>
        <meta name="description" content="Helpful articles, cleaning tips, and home care guides from Queen of Maids. Learn how to keep your home clean, choose the right cleaning plan, and more." />
      </Helmet>

      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 bg-gradient-to-b from-[hsl(270,30%,95%)] to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Knowledge Base
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Articles & Cleaning Tips
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical guides, tips, and advice to help you keep your home clean and get the most out of your cleaning service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {articleCategories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => {
              const Icon = article.icon;
              return (
                <motion.a
                  key={article.slug}
                  href={`${base}/articles/${article.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setLocation(`${base}/articles/${article.slug}`);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-2">
                        {articleCategories.find(c => c.value === article.category)?.label}
                      </span>
                      <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
