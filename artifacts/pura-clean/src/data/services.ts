import {
  SprayCan, Sparkles, Truck, PackageOpen, CalendarClock, Home,
  Calendar, CalendarDays, CalendarCheck, ClipboardList, Settings, Clock
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceData {
  icon: LucideIcon;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  longDescription: string;
  benefits: string[];
  idealFor: string[];
  heroImage: string;
}

export const services: ServiceData[] = [
  {
    icon: SprayCan,
    slug: 'standard-cleaning',
    title: 'Standard Cleaning',
    tagline: 'The essentials, done right every time.',
    description: 'Our Standard Cleaning covers all the basics your home needs to stay fresh and tidy. We dust surfaces, vacuum and mop all floors, clean and sanitize bathrooms, wipe down kitchen counters and appliances, and take out trash. Perfect for homes that are already in good shape and just need regular upkeep.',
    includes: ['Dusting all reachable surfaces', 'Vacuuming & mopping floors', 'Bathroom cleaning & sanitization', 'Kitchen counter & sink wipe-down', 'Trash removal', 'General tidying'],
    longDescription: 'Our Standard Cleaning is the foundation of a well-maintained home. Each visit follows a detailed checklist to ensure nothing gets missed. Your dedicated cleaner will dust all reachable surfaces, vacuum carpets and rugs, mop hard floors, thoroughly clean and sanitize bathrooms, wipe down kitchen counters and appliances, empty trash bins, and do a general tidy of living spaces. This service is designed for homes that are in reasonable condition and need consistent upkeep to stay looking their best.',
    benefits: ['Consistent, reliable results every visit', 'Detailed checklist ensures nothing is missed', 'Eco-friendly, non-toxic products', 'Same dedicated cleaner each time', 'Flexible scheduling options'],
    idealFor: ['Busy professionals who need regular upkeep', 'Families maintaining a tidy home', 'Homes that are already in good shape', 'Anyone who wants more free time'],
    heroImage: 'clean-living-room.png',
  },
  {
    icon: Sparkles,
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    tagline: 'A top-to-bottom reset for your home.',
    description: 'Our Deep Cleaning service goes beyond the surface. We scrub grout, clean inside appliances, detail baseboards, wipe light fixtures, deep-clean behind furniture, and tackle all the areas that get missed during regular cleaning. Ideal for first-time clients or homes that haven\'t been professionally cleaned in a while.',
    includes: ['Everything in Standard Cleaning', 'Inside oven & microwave', 'Baseboard & door frame detailing', 'Light fixture & ceiling fan dusting', 'Behind & under furniture', 'Cabinet exterior wipe-down', 'Window sill & track cleaning'],
    longDescription: 'A Deep Cleaning is a comprehensive, top-to-bottom reset for your home. We go far beyond surface-level cleaning to tackle built-up grime, dust, and dirt in areas that regular cleaning doesn\'t reach. Our team scrubs grout lines, cleans inside your oven and microwave, details baseboards and door frames, dusts light fixtures and ceiling fans, cleans behind and under furniture, wipes down cabinet exteriors, and cleans window sills and tracks. This service is perfect as a first-time clean or seasonal refresh.',
    benefits: ['Reaches areas regular cleaning misses', 'Removes built-up grime and allergens', 'Perfect as a seasonal refresh', 'Makes ongoing maintenance easier', 'Leaves your home feeling brand new'],
    idealFor: ['First-time PuraClean clients', 'Homes not cleaned professionally recently', 'Seasonal or spring cleaning', 'Allergy sufferers wanting a thorough clean', 'Pre-event or post-renovation cleanup'],
    heroImage: 'cleaner-kitchen.png',
  },
  {
    icon: Clock,
    slug: 'one-time-cleaning',
    title: 'One Time Cleaning',
    tagline: 'A single visit that makes a big difference.',
    description: 'Don\'t need recurring service? No problem. Our One Time Cleaning delivers a thorough, professional clean in a single visit. Whether you\'re prepping for guests, recovering from a busy season, or just want your home refreshed — we\'ll handle everything from top to bottom without any commitment.',
    includes: ['Full home cleaning', 'Bathroom deep clean & sanitization', 'Kitchen thorough cleaning', 'All floors vacuumed & mopped', 'Dusting throughout', 'Trash removal', 'No contracts or commitments'],
    longDescription: 'Sometimes you just need one great clean. Our One Time Cleaning service delivers professional-grade results in a single visit with no strings attached. There\'s no recurring commitment, no subscription — just a thorough, top-to-bottom clean when you need it. We cover every room in your home with the same attention to detail as our recurring clients. Bathrooms are deep-cleaned and sanitized, kitchens get a thorough scrub, floors are vacuumed and mopped, and every surface is dusted. Many clients book a one-time clean and love it so much they sign up for recurring service.',
    benefits: ['No contracts or long-term commitment', 'Same professional quality as recurring service', 'Great way to try PuraClean risk-free', 'Perfect for special occasions', 'Backed by our 200% Happiness Guarantee'],
    idealFor: ['Preparing for guests or holidays', 'Post-party or event cleanup', 'Trying PuraClean for the first time', 'Between regular cleaning services', 'Seasonal home refreshes'],
    heroImage: 'clean-living-room.png',
  },
  {
    icon: CalendarClock,
    slug: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    tagline: 'Consistent cleaning on your schedule.',
    description: 'Set it and forget it. Our Recurring Cleaning memberships keep your home consistently clean with regularly scheduled visits. Choose weekly, biweekly, or monthly frequency — and enjoy savings over one-time bookings. We assign the same trusted cleaner to your home so they learn your preferences over time.',
    includes: ['Customizable frequency', 'Same cleaner assigned', 'Priority scheduling', 'Member discounts', 'Flexible rescheduling', 'All Standard Cleaning tasks'],
    longDescription: 'Our Recurring Cleaning service is the most popular way to keep your home consistently clean. Choose from weekly, biweekly, or monthly visits and enjoy the peace of mind that comes with knowing your home is always professionally maintained. We assign the same trusted, vetted cleaner to your home so they learn your layout, preferences, and priorities over time — meaning each visit gets better. Recurring clients enjoy lower per-visit rates, priority scheduling, and flexible rescheduling when life gets busy.',
    benefits: ['Lower per-visit pricing vs. one-time cleans', 'Same dedicated cleaner learns your home', 'Priority scheduling and rebooking', 'Flexible — pause, skip, or cancel anytime', 'Home stays consistently clean'],
    idealFor: ['Busy families and professionals', 'Dual-income households', 'Pet owners', 'Anyone who values consistent cleanliness', 'Homes that need regular maintenance'],
    heroImage: 'cleaning-team.png',
  },
  {
    icon: Truck,
    slug: 'move-in-cleaning',
    title: 'Move In Cleaning',
    tagline: 'Start fresh in your new home.',
    description: 'Moving into a new place? Our Move In Cleaning ensures your new home is spotless before you unpack. We clean every inch — inside cabinets and closets, all appliances, bathrooms, and every surface — so you can settle in with confidence knowing your space is perfectly clean.',
    includes: ['Full deep clean of all rooms', 'Inside all cabinets & closets', 'Inside refrigerator, oven & dishwasher', 'Window cleaning (interior)', 'Baseboard & trim detailing', 'Light fixture cleaning', 'Garage sweep (if applicable)'],
    longDescription: 'Moving into a new home should feel exciting, not stressful. Our Move In Cleaning service ensures your new space is completely spotless before you start unpacking. We go through every room with meticulous attention — cleaning inside all cabinets and closets, scrubbing and sanitizing bathrooms, cleaning inside the refrigerator, oven, and dishwasher, washing interior windows, detailing baseboards and trim, and sweeping the garage. You deserve to start fresh in a home that\'s truly clean, not just someone else\'s version of clean.',
    benefits: ['Move into a truly clean home', 'Every surface sanitized and refreshed', 'Inside all storage spaces cleaned', 'Appliances cleaned inside and out', 'Peace of mind from day one'],
    idealFor: ['New homeowners', 'Renters moving into a new apartment', 'Anyone relocating', 'Before furniture delivery', 'When you want a completely fresh start'],
    heroImage: 'cleaners.png',
  },
  {
    icon: PackageOpen,
    slug: 'move-out-cleaning',
    title: 'Move Out Cleaning',
    tagline: 'Leave it spotless, get your deposit back.',
    description: 'Moving out? Our Move Out Cleaning ensures you leave the property in pristine condition — helping you get your full security deposit back. We handle the deep cleaning of every room, inside all cabinets and appliances, and make sure the home looks better than when you moved in.',
    includes: ['Full deep clean of all rooms', 'Inside all cabinets & closets', 'Inside refrigerator, oven & dishwasher', 'Window cleaning (interior)', 'Baseboard & trim detailing', 'Light fixture cleaning', 'Wall spot cleaning'],
    longDescription: 'Our Move Out Cleaning is designed to help you leave your old home in perfect condition. Whether you\'re a renter trying to get your security deposit back or a homeowner preparing to sell, we\'ll deep-clean every inch of the property. Our team cleans inside all cabinets and closets, scrubs and sanitizes every bathroom, cleans inside all appliances, washes interior windows, details baseboards and trim, spot-cleans walls, and ensures every surface shines. Many of our clients report getting their full deposit back after our move-out service.',
    benefits: ['Maximize your security deposit return', 'Property left in showing condition', 'Every detail handled professionally', 'Stress-free moving experience', 'Landlord/property manager ready'],
    idealFor: ['Renters moving out', 'Homeowners selling a property', 'End of lease cleanings', 'Preparing a property for new tenants', 'Landlords between tenants'],
    heroImage: 'cleaners.png',
  },
  {
    icon: Home,
    slug: 'vacation-rental-cleaning',
    title: 'Vacation Rental Cleaning',
    tagline: '5-star turnover, every time.',
    description: 'Keep your Airbnb, VRBO, or vacation rental guest-ready with our turnover cleaning service. We handle linens, restock essentials, deep-clean kitchens and bathrooms, and make sure every detail is perfect for your next guest. Fast turnaround times to fit between bookings.',
    includes: ['Full property cleaning', 'Linen change & bed making', 'Restocking toiletries & supplies', 'Kitchen & appliance cleaning', 'Bathroom deep clean', 'Trash removal & dishwasher run', 'Checklist photo verification'],
    longDescription: 'Our Vacation Rental Cleaning service is built specifically for Airbnb, VRBO, and short-term rental hosts who need fast, reliable turnovers between guests. We don\'t just clean — we prepare your property for a 5-star experience. Our team changes all linens and makes beds hotel-style, restocks toiletries and supplies, deep-cleans kitchens and bathrooms, runs the dishwasher, removes all trash, and verifies everything against a detailed checklist with photos. We work within tight turnover windows and communicate proactively so you always know your property is guest-ready.',
    benefits: ['Fast turnaround between bookings', 'Checklist photo verification for hosts', 'Consistent 5-star guest experience', 'Linen and supply restocking included', 'Reliable team you can count on'],
    idealFor: ['Airbnb and VRBO hosts', 'Short-term rental property managers', 'Vacation home owners', 'Anyone renting on booking platforms', 'Multi-property hosts'],
    heroImage: 'clean-living-room.png',
  },
  {
    icon: Calendar,
    slug: 'monthly-cleaning',
    title: 'Monthly Cleaning',
    tagline: 'Once a month, thoroughly done.',
    description: 'Our Monthly Cleaning membership is perfect for homeowners who maintain their own home day-to-day but want a professional deep touch once a month. Each visit includes a thorough cleaning of all rooms with extra attention to detail — keeping your home in great shape without the weekly commitment.',
    includes: ['Thorough whole-home clean', 'Extra attention to detail areas', 'Baseboard & surface dusting', 'Bathroom & kitchen deep clean', 'Floor care throughout', 'Flexible date scheduling'],
    longDescription: 'Our Monthly Cleaning membership strikes the perfect balance for homeowners who handle day-to-day tidying but want a professional touch to keep things in top shape. Once a month, your dedicated cleaner arrives for a thorough cleaning that goes beyond the basics. We pay extra attention to detail areas — baseboards, door frames, light switches, and corners. Bathrooms and kitchens get a deeper clean, all floors are vacuumed and mopped, and surfaces throughout the home are dusted and wiped. It\'s the maintenance clean that keeps your home from ever getting too far behind.',
    benefits: ['Professional results without weekly visits', 'Prevents dirt and grime buildup', 'Affordable entry point for professional cleaning', 'Same cleaner learns your home', 'Flexible monthly scheduling'],
    idealFor: ['Self-maintaining homeowners', 'Budget-conscious households', 'Small homes and apartments', 'Anyone wanting a monthly refresh', 'Homes that stay relatively tidy'],
    heroImage: 'cleaner-kitchen.png',
  },
  {
    icon: CalendarDays,
    slug: 'biweekly-cleaning',
    title: 'Biweekly Cleaning',
    tagline: 'The sweet spot for most homes.',
    description: 'Our most popular frequency. Biweekly cleaning keeps your home consistently clean without overdoing it. Every two weeks, your assigned cleaner arrives and handles everything — dusting, mopping, bathrooms, kitchen, and more. Most clients find this is the perfect balance of clean and convenient.',
    includes: ['All Standard Cleaning tasks', 'Same cleaner each visit', 'Biweekly scheduling', 'Member pricing', 'Priority rebooking', 'Customizable task list'],
    longDescription: 'Biweekly cleaning is our most popular service frequency — and for good reason. Every two weeks, your dedicated cleaner arrives and handles a complete cleaning of your home. Dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, trash removal, and general tidying are all included. Your cleaner learns your home, your preferences, and your priorities, so each visit is tailored to you. Most families find that biweekly service keeps their home consistently clean and comfortable without the cost of weekly visits.',
    benefits: ['Most popular frequency for families', 'Great balance of cost and cleanliness', 'Home never gets too dirty between visits', 'Same cleaner builds familiarity', 'Flexible rescheduling when needed'],
    idealFor: ['Families with children', 'Working professionals', 'Homes with pets', 'Most standard-sized homes', 'Anyone wanting consistent cleanliness'],
    heroImage: 'cleaning-team.png',
  },
  {
    icon: CalendarCheck,
    slug: 'weekly-cleaning',
    title: 'Weekly Cleaning',
    tagline: 'A spotless home, every single week.',
    description: 'For busy families, pet owners, or anyone who loves coming home to a perfectly clean house — our Weekly Cleaning membership is the ultimate convenience. Your cleaner visits the same day each week, handling all standard tasks plus any special requests. The most hands-off way to keep your home pristine.',
    includes: ['All Standard Cleaning tasks', 'Dedicated weekly cleaner', 'Best per-visit pricing', 'Priority scheduling', 'Custom preferences saved', 'Add-on services available'],
    longDescription: 'Our Weekly Cleaning membership is the ultimate in home maintenance. Every week, on the same day, your dedicated cleaner arrives and handles everything — so you never have to think about cleaning again. All standard tasks are covered: dusting, vacuuming, mopping, bathrooms, kitchen, trash, and tidying. Plus, your cleaner saves your custom preferences and handles any special requests. Weekly clients enjoy our best per-visit pricing, priority scheduling, and first access to add-on services. It\'s the most hands-off way to enjoy a perfectly clean home.',
    benefits: ['Best per-visit pricing of any membership', 'Truly hands-off home maintenance', 'Home is always company-ready', 'Custom preferences remembered', 'Priority access to add-on services'],
    idealFor: ['Large families', 'Pet owners (especially multiple pets)', 'Home entertainers', 'Anyone who wants a spotless home always', 'High-traffic households'],
    heroImage: 'clean-living-room.png',
  },
  {
    icon: ClipboardList,
    slug: 'basic-cleaning',
    title: 'Basic Cleaning',
    tagline: 'Quick, efficient, and affordable.',
    description: 'Need a quick refresh without the full service? Our Basic Cleaning covers the high-traffic essentials — bathrooms, kitchen surfaces, and floors. Great for small apartments, between deeper cleans, or when you just need a helping hand. In and out, with visible results.',
    includes: ['Bathroom sanitization', 'Kitchen counters & sink', 'Floor vacuuming & mopping', 'Surface dusting', 'Trash removal', 'Quick tidy of living areas'],
    longDescription: 'Our Basic Cleaning is designed for speed and efficiency. We focus on the areas that matter most — bathrooms, kitchen surfaces, and floors — delivering visible results in less time than a full standard clean. Bathrooms are sanitized, kitchen counters and sinks are scrubbed, floors throughout are vacuumed and mopped, main surfaces are dusted, trash is removed, and living areas get a quick tidy. It\'s the perfect option for smaller spaces, between deeper cleans, or when you need a fast refresh before guests arrive.',
    benefits: ['Most affordable cleaning option', 'Fast in-and-out service', 'Focuses on high-impact areas', 'Perfect for smaller homes', 'Great between deeper cleans'],
    idealFor: ['Studio and one-bedroom apartments', 'Between regular deep cleans', 'Quick pre-guest refreshes', 'Budget-conscious homeowners', 'Minimalists who need less'],
    heroImage: 'cleaner-kitchen.png',
  },
  {
    icon: Settings,
    slug: 'custom-cleanings',
    title: 'Custom Cleanings',
    tagline: 'Your home, your rules.',
    description: 'Have specific needs that don\'t fit a standard package? Our Custom Cleaning service lets you build your own cleaning schedule. Tell us exactly which rooms, tasks, or areas you want us to focus on, and we\'ll tailor a visit just for you. Perfect for post-party cleanups, seasonal deep cleans, or unique requests.',
    includes: ['Choose specific rooms & tasks', 'Custom scheduling', 'Post-event cleanup', 'Seasonal deep clean', 'Organizing & decluttering add-on', 'Flexible pricing based on scope'],
    longDescription: 'Our Custom Cleaning service puts you in complete control. Instead of choosing from a set package, you tell us exactly what you need — and we build a cleaning schedule around it. Need just the bathrooms and kitchen done? We can do that. Want a post-party cleanup focusing on the living room and dining area? No problem. Need seasonal window washing and vent cleaning? We\'ve got you covered. Custom cleanings are quoted based on scope, and you can schedule them as a one-time visit or recurring service. It\'s cleaning on your terms.',
    benefits: ['Complete control over what gets cleaned', 'Pay only for what you need', 'Handles unique and unusual requests', 'Can be one-time or recurring', 'Flexible pricing based on scope'],
    idealFor: ['Post-party or event cleanup', 'Seasonal deep cleaning projects', 'Homes with specific focus areas', 'Anyone with unique cleaning needs', 'Organizing and decluttering assistance'],
    heroImage: 'cleaning-team.png',
  },
];

export const dropdownServices = [
  { slug: 'deep-cleaning', label: 'Deep Cleaning' },
  { slug: 'one-time-cleaning', label: 'One Time Cleaning' },
  { slug: 'recurring-cleaning', label: 'Recurring Cleaning' },
  { slug: 'move-in-cleaning', label: 'Move In Cleaning' },
  { slug: 'move-out-cleaning', label: 'Move Out Cleaning' },
  { slug: 'vacation-rental-cleaning', label: 'Vacation Rental Cleaning' },
  { slug: 'monthly-cleaning', label: 'Monthly Cleaning' },
  { slug: 'biweekly-cleaning', label: 'Biweekly Cleaning' },
  { slug: 'weekly-cleaning', label: 'Weekly Cleaning' },
];

export function findServiceBySlug(slug: string): ServiceData | null {
  return services.find(s => s.slug === slug) || null;
}
