import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { dropdownServices } from '@/data/services';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = location === base + '/' || location === base || location === '/';
  const isServicesPage = location.startsWith(base + '/services');
  const isServiceDetail = /\/services\/[^/]+$/.test(location);
  const isMemberships = location === base + '/memberships';
  const isServicesIndex = location === base + '/services' || location === base + '/services/';

  const useLightTheme = isServiceDetail && !isScrolled;
  const isServiceAreas = location === base + '/service-areas' || location === base + '/service-areas/';
  const isArticles = location.startsWith(base + '/articles');
  const isHelp = location === base + '/help' || location === base + '/help/';
  const alwaysWhiteBg = isMemberships || isServicesIndex || isServiceAreas || isArticles || isHelp;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const goHome = () => {
    setMobileOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLocation(base + '/');
    }
  };

  const navigate = (path: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setLocation(base + path);
  };

  const linkColor = useLightTheme ? 'text-white/90' : 'text-foreground/80';
  const linkHover = useLightTheme ? 'hover:text-white' : 'hover:text-primary';
  const linkActive = useLightTheme ? 'text-white font-bold' : 'text-primary';
  const hamburgerColor = useLightTheme ? 'text-white' : 'text-foreground';

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-border py-4"
          : alwaysWhiteBg
            ? "bg-white shadow-sm border-border py-4"
            : useLightTheme
              ? "bg-transparent py-6"
              : "py-6"
      )}
    >
      {!isScrolled && !useLightTheme && !alwaysWhiteBg && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent pointer-events-none" />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          <button onClick={goHome} className="flex items-center gap-2 group">
            <img
              src={`${base}/images/${useLightTheme ? 'logo-white.png' : 'logo-colored.png'}`}
              alt="Queen of Maids"
              className="h-[22px] w-auto transition-opacity duration-300"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigate('/services')}
                className={cn(
                  "text-sm font-semibold transition-colors flex items-center gap-1",
                  linkHover,
                  isServicesPage ? linkActive : linkColor
                )}
              >
                Services
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-card rounded-xl border border-border shadow-xl p-4"
                  >
                    <a
                      href={base + '/services'}
                      onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                      className="block px-3 py-2 rounded-lg text-sm font-bold text-foreground hover:bg-muted transition-colors mb-1"
                    >
                      View All Services
                    </a>
                    <hr className="border-border mb-2" />
                    <div className="grid grid-cols-2 gap-1">
                      {dropdownServices.map(s => (
                        <a
                          key={s.slug}
                          href={base + '/services/' + s.slug}
                          onClick={(e) => { e.preventDefault(); navigate('/services/' + s.slug); }}
                          className={cn(
                            "block px-3 py-2 rounded-lg text-sm transition-colors",
                            location === base + '/services/' + s.slug
                              ? "text-primary font-semibold bg-primary/5"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => navigate('/memberships')}
              className={cn(
                "text-sm font-semibold transition-colors",
                linkHover,
                location === base + '/memberships' ? linkActive : linkColor
              )}
            >
              Memberships
            </button>
            <button
              onClick={() => navigate('/service-areas')}
              className={cn(
                "text-sm font-semibold transition-colors",
                linkHover,
                location === base + '/service-areas' || location.startsWith(base + '/house-cleaning/')
                  ? linkActive : linkColor
              )}
            >
              Service Areas
            </button>
            <button
              onClick={() => navigate('/articles')}
              className={cn(
                "text-sm font-semibold transition-colors",
                linkHover,
                isArticles ? linkActive : linkColor
              )}
            >
              Articles
            </button>
            <button
              onClick={() => navigate('/help')}
              className={cn(
                "text-sm font-semibold transition-colors",
                linkHover,
                isHelp ? linkActive : linkColor
              )}
            >
              Help Center
            </button>
            <a
              href="https://quote.queenofmaids.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
                useLightTheme
                  ? "bg-white text-primary hover:bg-purple-50"
                  : "bg-primary text-primary-foreground"
              )}
            >
              Get a Quote
            </a>
          </nav>

          <div className="md:hidden">
            <button
              className={cn("p-2", hamburgerColor)}
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
            <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-colors text-foreground hover:bg-muted text-left flex items-center justify-between"
              >
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 flex flex-col gap-1 mb-1">
                      <button
                        onClick={() => navigate('/services')}
                        className="px-4 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-muted text-left"
                      >
                        View All Services
                      </button>
                      {dropdownServices.map(s => (
                        <button
                          key={s.slug}
                          onClick={() => navigate('/services/' + s.slug)}
                          className={cn(
                            "px-4 py-2.5 rounded-xl text-sm text-left transition-colors",
                            location === base + '/services/' + s.slug
                              ? "text-primary font-semibold"
                              : "text-foreground/70 hover:bg-muted"
                          )}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => navigate('/memberships')}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-colors text-foreground hover:bg-muted text-left"
              >
                Memberships
              </button>
              <button
                onClick={() => navigate('/service-areas')}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-colors text-foreground hover:bg-muted text-left"
              >
                Service Areas
              </button>
              <button
                onClick={() => navigate('/articles')}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-colors text-foreground hover:bg-muted text-left"
              >
                Articles
              </button>
              <button
                onClick={() => navigate('/help')}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-colors text-foreground hover:bg-muted text-left"
              >
                Help Center
              </button>
              <a
                href="https://quote.queenofmaids.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md w-full text-center block"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
