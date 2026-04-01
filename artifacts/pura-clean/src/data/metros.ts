export interface CityData {
  name: string;
  lat: number;
  lng: number;
  slug: string;
}

export interface MetroArea {
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  phone: string;
  email: string;
  hours: string;
  center: [number, number];
  zoom: number;
  cities: CityData[];
  heroImage: string;
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function citiesWithSlugs(cities: { name: string; lat: number; lng: number }[]): CityData[] {
  return cities.map(c => ({ ...c, slug: slugify(c.name) }));
}

export const metros: MetroArea[] = [
  {
    name: 'Phoenix',
    slug: 'phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    phone: '(480) 648-3441',
    email: 'contact@queenofmaids.com',
    hours: 'Mon–Fri 8am to 5pm',
    center: [33.4484, -111.97],
    zoom: 10,
    heroImage: 'photos/kitchen.webp',
    cities: citiesWithSlugs([
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
    ]),
  },
  {
    name: 'Salt Lake City',
    slug: 'salt-lake-city',
    state: 'Utah',
    stateAbbr: 'UT',
    phone: '(385) 213-3150',
    email: 'contact@queenofmaids.com',
    hours: 'Mon–Fri 8am to 5pm',
    center: [40.7608, -111.891],
    zoom: 10,
    heroImage: 'photos/living-area.webp',
    cities: citiesWithSlugs([
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
    ]),
  },
  {
    name: 'Las Vegas',
    slug: 'las-vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    phone: '(702) 553-3809',
    email: 'contact@queenofmaids.com',
    hours: 'Mon–Fri 8am to 5pm',
    center: [36.1699, -115.1398],
    zoom: 11,
    heroImage: 'photos/bedroom.webp',
    cities: citiesWithSlugs([
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
    ]),
  },
  {
    name: 'Denver',
    slug: 'denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    phone: '(720) 555-4567',
    email: 'contact@queenofmaids.com',
    hours: 'Mon–Fri 8am to 5pm',
    center: [39.7392, -104.9903],
    zoom: 10,
    heroImage: 'photos/living-space.webp',
    cities: citiesWithSlugs([
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
    ]),
  },
];

export function findCityBySlug(citySlug: string): { metro: MetroArea; city: CityData } | null {
  for (const metro of metros) {
    const city = metro.cities.find(c => c.slug === citySlug);
    if (city) return { metro, city };
  }
  return null;
}

export function getAllCitySlugs(): string[] {
  return metros.flatMap(m => m.cities.map(c => c.slug));
}
