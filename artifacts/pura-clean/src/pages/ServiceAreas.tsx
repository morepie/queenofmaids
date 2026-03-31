import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CTA from '@/components/sections/CTA';

interface MetroArea {
  name: string;
  state: string;
  phone: string;
  email: string;
  center: [number, number];
  zoom: number;
  cities: { name: string; lat: number; lng: number }[];
}

const metros: MetroArea[] = [
  {
    name: 'Phoenix',
    state: 'Arizona',
    phone: '(602) 555-1234',
    email: 'phoenix@puraclean.com',
    center: [33.4484, -111.97],
    zoom: 10,
    cities: [
      { name: 'Phoenix', lat: 33.4484, lng: -112.074 },
      { name: 'Scottsdale', lat: 33.4942, lng: -111.9261 },
      { name: 'Tempe', lat: 33.4255, lng: -111.9400 },
      { name: 'Mesa', lat: 33.4152, lng: -111.8315 },
      { name: 'Chandler', lat: 33.3062, lng: -111.8413 },
      { name: 'Gilbert', lat: 33.3528, lng: -111.7890 },
      { name: 'Glendale', lat: 33.5387, lng: -112.1860 },
      { name: 'Peoria', lat: 33.5806, lng: -112.2374 },
      { name: 'Surprise', lat: 33.6292, lng: -112.3680 },
      { name: 'Queen Creek', lat: 33.2487, lng: -111.6343 },
      { name: 'Avondale', lat: 33.4356, lng: -112.3496 },
      { name: 'Goodyear', lat: 33.4353, lng: -112.3577 },
      { name: 'Fountain Hills', lat: 33.6117, lng: -111.7174 },
    ],
  },
  {
    name: 'Salt Lake City',
    state: 'Utah',
    phone: '(801) 555-2345',
    email: 'saltlake@puraclean.com',
    center: [40.7608, -111.891],
    zoom: 10,
    cities: [
      { name: 'Salt Lake City', lat: 40.7608, lng: -111.8910 },
      { name: 'Sandy', lat: 40.5649, lng: -111.8590 },
      { name: 'West Jordan', lat: 40.6097, lng: -111.9391 },
      { name: 'Provo', lat: 40.2338, lng: -111.6585 },
      { name: 'Orem', lat: 40.2969, lng: -111.6946 },
      { name: 'Draper', lat: 40.5246, lng: -111.8638 },
      { name: 'Murray', lat: 40.6668, lng: -111.8879 },
      { name: 'Cottonwood Heights', lat: 40.6197, lng: -111.8102 },
      { name: 'Holladay', lat: 40.6688, lng: -111.8246 },
      { name: 'South Jordan', lat: 40.5622, lng: -111.9296 },
      { name: 'Lehi', lat: 40.3916, lng: -111.8508 },
      { name: 'American Fork', lat: 40.3769, lng: -111.7952 },
    ],
  },
  {
    name: 'Las Vegas',
    state: 'Nevada',
    phone: '(702) 555-3456',
    email: 'lasvegas@puraclean.com',
    center: [36.1699, -115.1398],
    zoom: 11,
    cities: [
      { name: 'Las Vegas', lat: 36.1699, lng: -115.1398 },
      { name: 'Henderson', lat: 36.0395, lng: -114.9817 },
      { name: 'North Las Vegas', lat: 36.1989, lng: -115.1175 },
      { name: 'Summerlin', lat: 36.1731, lng: -115.3280 },
      { name: 'Spring Valley', lat: 36.1069, lng: -115.2450 },
      { name: 'Enterprise', lat: 36.0281, lng: -115.2400 },
      { name: 'Paradise', lat: 36.0970, lng: -115.1467 },
      { name: 'Whitney', lat: 36.1008, lng: -115.0362 },
      { name: 'Centennial Hills', lat: 36.2718, lng: -115.2495 },
      { name: 'Aliante', lat: 36.2847, lng: -115.1584 },
    ],
  },
  {
    name: 'Denver',
    state: 'Colorado',
    phone: '(720) 555-4567',
    email: 'denver@puraclean.com',
    center: [39.7392, -104.9903],
    zoom: 10,
    cities: [
      { name: 'Denver', lat: 39.7392, lng: -104.9903 },
      { name: 'Aurora', lat: 39.7294, lng: -104.8319 },
      { name: 'Lakewood', lat: 39.7047, lng: -105.0814 },
      { name: 'Arvada', lat: 39.8028, lng: -105.0875 },
      { name: 'Westminster', lat: 39.8367, lng: -105.0372 },
      { name: 'Thornton', lat: 39.8680, lng: -104.9719 },
      { name: 'Centennial', lat: 39.5791, lng: -104.8769 },
      { name: 'Highlands Ranch', lat: 39.5536, lng: -104.9689 },
      { name: 'Littleton', lat: 39.6133, lng: -105.0166 },
      { name: 'Parker', lat: 39.5186, lng: -104.7614 },
      { name: 'Castle Rock', lat: 39.3722, lng: -104.8561 },
      { name: 'Broomfield', lat: 39.9205, lng: -105.0867 },
    ],
  },
];

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              PuraClean proudly serves four major metro areas. Each location is staffed with trained, vetted cleaning professionals ready to make your home sparkle.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {metros.map((metro, i) => (
              <motion.div
                key={metro.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                    <MetroMap metro={metro} />
                  </div>
                </div>

                <div className={`flex flex-col gap-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-1">
                      {metro.name} <span className="text-primary">Metro</span>
                    </h2>
                    <p className="text-muted-foreground">{metro.state}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {metro.cities.map(city => (
                      <span
                        key={city.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80 font-medium"
                      >
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {city.name}
                      </span>
                    ))}
                  </div>

                  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                      Contact {metro.name} Office
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href={`tel:${metro.phone.replace(/\D/g, '')}`}
                        className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                      >
                        <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-teal" />
                        </div>
                        {metro.phone}
                      </a>
                      <a
                        href={`mailto:${metro.email}`}
                        className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                      >
                        <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-teal" />
                        </div>
                        {metro.email}
                      </a>
                    </div>
                    <a
                      href={`tel:${metro.phone.replace(/\D/g, '')}`}
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
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
