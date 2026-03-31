export interface CleaningPlan {
  id: string;
  name: string;
  price: number;
  frequency: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export interface Review {
  id: number;
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
}

export interface ServiceCity {
  name: string;
  lat: number;
  lng: number;
}

export const cleaningPlans: CleaningPlan[] = [
  {
    id: 'partial',
    name: 'Partial Clean',
    price: 99,
    frequency: 'biweekly',
    description: 'Essential cleaning for high-traffic areas',
    features: [
      'Kitchen counters & sink',
      'Bathroom sanitization',
      'Floors vacuumed & mopped',
      'Dusting of main surfaces',
      'Trash removal',
      'Quick tidy of living areas',
    ],
  },
  {
    id: 'full',
    name: 'Full Clean',
    price: 149,
    frequency: 'biweekly',
    popular: true,
    description: 'Comprehensive cleaning for the whole home',
    features: [
      'Everything in Partial Clean',
      'All rooms cleaned top to bottom',
      'Appliance exterior wipe-down',
      'Mirror & glass cleaning',
      'Baseboard dusting',
      'Bed making & linen straightening',
      'Interior door wipe-down',
    ],
  },
  {
    id: 'premium',
    name: 'Full Premium',
    price: 179,
    frequency: 'biweekly',
    description: 'White-glove service with extra attention to detail',
    features: [
      'Everything in Full Clean',
      'Inside oven & microwave cleaning',
      'Inside refrigerator cleaning',
      'Interior window cleaning',
      'Ceiling fan & vent dusting',
      'Cabinet front wipe-down',
      'Laundry wash, dry & fold (1 load)',
      'Organizing & declutter assist',
    ],
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah M.',
    initials: 'SM',
    rating: 5,
    date: 'Feb 2026',
    text: 'PuraClean has been amazing! My house is spotless every time they come. The team is friendly, professional, and always on time. I love coming home to a fresh, clean space.',
  },
  {
    id: 2,
    name: 'James K.',
    initials: 'JK',
    rating: 5,
    date: 'Jan 2026',
    text: "Best cleaning service in the Valley! We've tried several companies and PuraClean is hands down the most thorough. Worth every penny for the Full Premium plan.",
  },
  {
    id: 3,
    name: 'Maria L.',
    initials: 'ML',
    rating: 5,
    date: 'Mar 2026',
    text: 'I switched to PuraClean three months ago and the difference is night and day. They pay attention to the little details that other services miss. Highly recommend!',
  },
  {
    id: 4,
    name: 'David R.',
    initials: 'DR',
    rating: 5,
    date: 'Dec 2025',
    text: 'As a busy dad of three, having PuraClean come biweekly has been a game changer. The house stays clean and I get to spend more time with my kids instead of scrubbing floors.',
  },
  {
    id: 5,
    name: 'Ashley T.',
    initials: 'AT',
    rating: 4,
    date: 'Feb 2026',
    text: 'Great service overall. They always communicate ahead of time and are flexible with scheduling. My Scottsdale condo has never looked better.',
  },
  {
    id: 6,
    name: 'Robert P.',
    initials: 'RP',
    rating: 5,
    date: 'Jan 2026',
    text: 'PuraClean transformed our home in Gilbert. The premium plan includes oven and fridge cleaning which is such a nice touch. Professional crew every single time.',
  },
  {
    id: 7,
    name: 'Nicole W.',
    initials: 'NW',
    rating: 5,
    date: 'Mar 2026',
    text: "I've been using PuraClean for six months now. They're reliable, trustworthy, and do an excellent job. My Tempe apartment sparkles after every visit!",
  },
  {
    id: 8,
    name: 'Chris B.',
    initials: 'CB',
    rating: 5,
    date: 'Nov 2025',
    text: 'Moved to Chandler recently and found PuraClean through a neighbor. So glad I did — their attention to detail is unmatched. The team is incredibly respectful of our space.',
  },
];

export const serviceCities: ServiceCity[] = [
  { name: 'Phoenix', lat: 33.4484, lng: -112.0740 },
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
];

export const aggregateRating = {
  score: 4.9,
  totalReviews: 431,
};
