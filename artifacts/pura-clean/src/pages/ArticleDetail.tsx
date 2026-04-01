import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { useLocation } from 'wouter';
import { articles, articleCategories } from '@/data/articles';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function ArticleDetail() {
  const [location, setLocation] = useLocation();
  const slug = location.replace(base + '/articles/', '').replace(/\/$/, '');
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <button
            onClick={() => setLocation(base + '/articles')}
            className="text-primary font-semibold hover:underline"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  const Icon = article.icon;
  const categoryLabel = articleCategories.find(c => c.value === article.category)?.label;
  const relatedArticles = articles.filter(a => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | Queen of Maids</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 bg-gradient-to-b from-[hsl(270,30%,95%)] to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setLocation(base + '/articles')}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{categoryLabel}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span>{article.publishedDate}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-6 text-[16px]">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map(related => (
                  <a
                    key={related.slug}
                    href={`${base}/articles/${related.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setLocation(`${base}/articles/${related.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{related.readTime}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
