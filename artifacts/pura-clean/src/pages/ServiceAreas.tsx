import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { metros, type MetroArea } from '@/data/metros';
import USMap from '@/components/USMap';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function createPinIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="width:24px;height:24px;background:hsl(355,97%,69%);border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.25);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });
}

function MetroMap({ metro }: { metro: MetroArea }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: metro.center,
      zoom: metro.zoom,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const icon = createPinIcon();

    metro.cities.forEach(city => {
      L.marker([city.lat, city.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong style="font-family:Inter,sans-serif;font-size:13px;">${city.name}</strong>`);
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [metro]);

  return <div ref={mapRef} className="w-full h-[350px]" />;
}

export default function ServiceAreas() {
  const [, setLocation] = useLocation();
  const [activeMetro, setActiveMetro] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const metroSlug = hash.replace('metro-', '');
      setActiveMetro(metroSlug);
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToMetro = (slug: string) => {
    setActiveMetro(slug);
    const el = document.getElementById(`metro-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Where We Clean
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Service Areas Across the <span className="text-primary">West</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              PuraClean proudly serves four major metro areas. Click a pin on the map to explore our coverage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <USMap onMetroClick={scrollToMetro} />

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {metros.map(metro => (
                <button
                  key={metro.slug}
                  onClick={() => scrollToMetro(metro.slug)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeMetro === metro.slug
                      ? 'bg-primary text-primary-foreground border-primary shadow-md'
                      : 'bg-card text-foreground/80 border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {metro.name}, {metro.stateAbbr}
                </button>
              ))}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => {
                  const el = document.getElementById('metro-sections');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Scroll to explore
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="metro-sections" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {metros.map((metro, i) => (
              <motion.div
                key={metro.name}
                id={`metro-${metro.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start scroll-mt-28"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                    <MetroMap metro={metro} />
                  </div>
                </div>

                <div className={`flex flex-col justify-center gap-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-1">
                      {metro.name} <span className="text-primary">Metro</span>
                    </h2>
                    <p className="text-muted-foreground">{metro.state}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {metro.cities.map(city => (
                      <a
                        key={city.name}
                        href={base + '/house-cleaning/' + city.slug}
                        onClick={(e) => { e.preventDefault(); setLocation(base + '/house-cleaning/' + city.slug); }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80 font-medium hover:border-primary hover:text-primary transition-colors cursor-pointer"
                      >
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {city.name}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`tel:${metro.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-teal" />
                      {metro.phone}
                    </a>
                    <span className="text-border">|</span>
                    <a
                      href={`mailto:${metro.email}`}
                      className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-teal" />
                      {metro.email}
                    </a>
                  </div>

                  <div>
                    <a
                      href={`tel:${metro.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                      Get a Quote in {metro.name}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
