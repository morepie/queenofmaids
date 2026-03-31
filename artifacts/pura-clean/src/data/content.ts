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
  {
    id: 9,
    name: 'Priya S.',
    initials: 'PS',
    rating: 5,
    date: 'Mar 2026',
    text: 'We booked a one-time deep clean before a family visit and were blown away. The house looked brand new. Signed up for the biweekly Full Clean the same day.',
  },
  {
    id: 10,
    name: 'Tom H.',
    initials: 'TH',
    rating: 4,
    date: 'Jan 2026',
    text: 'Solid cleaning crew. They showed up right on time and did a great job on our Mesa townhome. Only minor note — wish they could come weekly instead of biweekly!',
  },
  {
    id: 11,
    name: 'Lauren G.',
    initials: 'LG',
    rating: 5,
    date: 'Feb 2026',
    text: 'PuraClean is the only service I trust with my Scottsdale home. They use eco-friendly products, which is huge for me since I have two dogs and a toddler.',
  },
  {
    id: 12,
    name: 'Marcus J.',
    initials: 'MJ',
    rating: 5,
    date: 'Dec 2025',
    text: 'Excellent value for what you get. The Full Premium plan covers everything — even laundry! My Peoria house has never been this organized.',
  },
  {
    id: 13,
    name: 'Evelyn C.',
    initials: 'EC',
    rating: 5,
    date: 'Nov 2025',
    text: 'After trying three different cleaning companies in Glendale, PuraClean is the one that stuck. Consistent quality every single visit. Cannot recommend them enough.',
  },
  {
    id: 14,
    name: 'Ryan O.',
    initials: 'RO',
    rating: 4,
    date: 'Mar 2026',
    text: 'Really happy with our Partial Clean plan. Perfect for keeping things fresh between deeper cleans. The team is always polite and efficient.',
  },
  {
    id: 15,
    name: 'Samantha F.',
    initials: 'SF',
    rating: 5,
    date: 'Jan 2026',
    text: 'We hosted Thanksgiving and called PuraClean for a post-holiday cleanup. They handled the chaos like pros. Now we are loyal biweekly members in Surprise.',
  },
  {
    id: 16,
    name: 'Kevin D.',
    initials: 'KD',
    rating: 5,
    date: 'Feb 2026',
    text: 'I work from home in Tempe and having a clean workspace matters. PuraClean keeps my home office and the rest of the house immaculate. Five stars all the way.',
  },
  {
    id: 17,
    name: 'Angela V.',
    initials: 'AV',
    rating: 5,
    date: 'Dec 2025',
    text: 'The crew that comes to our Queen Creek home is fantastic. They remember our preferences and always go the extra mile. PuraClean is worth every penny.',
  },
  {
    id: 18,
    name: 'Daniel N.',
    initials: 'DN',
    rating: 4,
    date: 'Mar 2026',
    text: 'Good service at a fair price. We have the Full Clean plan for our Avondale house. The team is thorough and easy to communicate with through their scheduling system.',
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
