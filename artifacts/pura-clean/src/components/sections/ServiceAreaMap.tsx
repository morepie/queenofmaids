import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { serviceCities } from '@/data/content';

const PHOENIX_CENTER: [number, number] = [33.4484, -111.9700];

function createPinIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="width:28px;height:28px;background:hsl(355,97%,69%);border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.25);"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: PHOENIX_CENTER,
      zoom: 10,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const icon = createPinIcon();

    serviceCities.forEach(city => {
      L.marker([city.lat, city.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong style="font-family:Inter,sans-serif;font-size:14px;">${city.name}</strong>`);
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <section id="service-areas" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
            Where We Clean
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Serving the Phoenix Metro Area
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From Surprise to Queen Creek, we cover the entire Valley. Click a pin to see our service cities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="rounded-2xl overflow-hidden shadow-xl border border-border"
        >
          <div ref={mapRef} className="w-full h-[400px] md:h-[500px]" />
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {serviceCities.map(city => (
            <span
              key={city.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80 font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {city.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
