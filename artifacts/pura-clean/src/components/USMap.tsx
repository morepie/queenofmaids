import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { metros } from '@/data/metros';

interface USMapProps {
  onMetroClick: (slug: string) => void;
}

const ICON_W = 160;
const LABEL_H = 30;
const STEM_H = 8;
const DOT_H = 10;
const TOTAL_H = LABEL_H + STEM_H + DOT_H;

function createMetroIcon(name: string, isActive: boolean) {
  return L.divIcon({
    className: '',
    html: `
      <div style="width:${ICON_W}px;height:${TOTAL_H}px;display:flex;flex-direction:column;align-items:center;">
        <div style="
          background:hsl(270,50%,36%);
          color:white;
          font-family:Inter,system-ui,sans-serif;
          font-size:12px;
          font-weight:700;
          padding:6px 14px;
          border-radius:20px;
          white-space:nowrap;
          box-shadow:0 4px 12px rgba(91,45,142,0.4);
          border:2px solid white;
          cursor:pointer;
          transition:transform 0.2s;
          ${isActive ? 'transform:scale(1.1);' : ''}
        ">${name}</div>
        <div style="width:2px;height:${STEM_H}px;background:hsl(270,50%,36%);"></div>
        <div style="width:${DOT_H}px;height:${DOT_H}px;background:hsl(270,50%,36%);border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>
      </div>
    `,
    iconSize: [ICON_W, TOTAL_H],
    iconAnchor: [ICON_W / 2, TOTAL_H - DOT_H / 2],
  });
}

export default function USMap({ onMetroClick }: USMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [37.5, -109],
      zoom: 5,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
      dragging: true,
      doubleClickZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 8,
      minZoom: 4,
    }).addTo(map);

    metros.forEach(metro => {
      const icon = createMetroIcon(metro.name, false);
      const marker = L.marker(metro.center, { icon }).addTo(map);

      marker.on('click', () => {
        onMetroClick(metro.slug);
      });

      marker.on('mouseover', () => {
        marker.setIcon(createMetroIcon(metro.name, true));
      });

      marker.on('mouseout', () => {
        marker.setIcon(createMetroIcon(metro.name, false));
      });
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [onMetroClick]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border"
    />
  );
}
