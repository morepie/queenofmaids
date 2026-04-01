import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
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

  const categoryLabel = articleCategories.find(c => c.value === article.category)?.label;
  const relatedArticles = articles.filter(a => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | Queen of Maids</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {article.heroImage && (
        <div className="relative w-full h-[300px] md:h-[400px] mt-[72px]">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      <section className={article.heroImage ? "relative -mt-24 z-10 pb-10" : "relative pt-32 pb-10 md:pt-40 md:pb-14 bg-gradient-to-b from-[hsl(270,30%,95%)] to-background"}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={article.heroImage ? "bg-card rounded-2xl shadow-xl p-8 md:p-10" : ""}
          >
            <button
              onClick={() => setLocation(base + '/articles')}
              className={`inline-flex items-center gap-2 text-sm font-medium ${article.heroImage ? 'text-muted-foreground' : 'text-muted-foreground'} hover:text-primary transition-colors mb-6`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{categoryLabel}</span>
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
            {article.content.map((paragraph, i) => {
              if (paragraph.startsWith('# ') && !paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{paragraph.replace('# ', '')}</h2>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                return (
                  <div key={i} className="flex gap-2 mb-2 ml-4">
                    <span className="text-primary font-bold mt-0.5 shrink-0">&bull;</span>
                    <p className="text-foreground/80 leading-relaxed text-[16px]">{paragraph.replace(/^[-*] /, '')}</p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-foreground/80 leading-relaxed mb-6 text-[16px]">
                  {paragraph}
                </p>
              );
            })}
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
                    className="group rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all overflow-hidden"
                  >
                    {related.heroImage && (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={related.heroImage}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
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
