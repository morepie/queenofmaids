import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Plans', id: 'plans' },
    { name: 'Service Areas', id: 'service-areas' },
    { name: 'Reviews', id: 'reviews' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <span className="text-2xl font-sans font-bold text-primary group-hover:text-primary/80 transition-colors">
              PuraClean
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-semibold transition-colors hover:text-primary text-foreground/80"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('plans')}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get a Quote
            </button>
          </nav>

          <div className="md:hidden">
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-3 rounded-xl text-base font-semibold transition-colors text-foreground hover:bg-muted text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo('plans')}
                className="mt-4 px-4 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md w-full text-center"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
