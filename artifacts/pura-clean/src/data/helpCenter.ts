import { Calendar, DollarSign, Shield, Sparkles, Home, Clock, Users, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface HelpTopic {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  questions: { q: string; a: string }[];
}

export const helpTopics: HelpTopic[] = [
  {
    id: 'booking',
    title: 'Booking & Scheduling',
    icon: Calendar,
    description: 'How to book, reschedule, or cancel your cleaning appointments.',
    questions: [
      {
        q: 'How do I book a cleaning?',
        a: 'You can request a quote online at quote.queenofmaids.com or call us directly. We\'ll discuss your home size, cleaning needs, and preferred schedule, then get you on the calendar, usually within the same week.',
      },
      {
        q: 'How far in advance do I need to book?',
        a: 'We recommend booking at least 48 hours in advance for one-time cleans. Members with recurring service have a standing appointment, so no rebooking is needed.',
      },
      {
        q: 'Can I reschedule my cleaning?',
        a: 'Yes. Just give us at least 24 hours notice and we\'ll move your appointment to another day that works for you. No fees for rescheduling with proper notice.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'You can cancel with at least 24 hours notice at no charge. Last-minute cancellations (under 24 hours) may incur a small fee to compensate the cleaning team who was assigned to your home.',
      },
      {
        q: 'Do I need to be home during the cleaning?',
        a: 'Not at all. Many clients provide a key, garage code, or smart lock access so we can clean while they\'re away. We treat every home with the utmost care and respect.',
      },
      {
        q: 'What time will my cleaner arrive?',
        a: 'We provide a 2-hour arrival window for your cleaning. You\'ll receive a confirmation with your window the day before, and your cleaner will notify you when they\'re on their way.',
      },
    ],
  },
  {
    id: 'memberships',
    title: 'Memberships & Plans',
    icon: DollarSign,
    description: 'Everything about our cleaning plans, pricing, and membership benefits.',
    questions: [
      {
        q: 'What membership plans do you offer?',
        a: 'We offer three tiers: Partial Clean ($99/month), Full Clean ($149/month, our most popular), and Full Premium ($179/month). Each can be scheduled weekly, biweekly, or monthly.',
      },
      {
        q: 'Is there a contract or commitment?',
        a: 'We ask for a simple 3-month starter period so your dedicated cleaner can get to know your home. After that, you\'re free to cancel with 30 days notice. No penalties.',
      },
      {
        q: 'Can I change my plan or frequency?',
        a: 'Yes, anytime. Upgrade, downgrade, or change your frequency whenever you\'d like. The change takes effect on your next scheduled cleaning.',
      },
      {
        q: 'What\'s the difference between Partial, Full, and Premium?',
        a: 'Partial focuses on high-impact zones like kitchen, bathrooms, and floors. Full covers every room top to bottom. Premium adds deep detailing, ceiling fans, vents, and priority scheduling on top of everything in Full.',
      },
      {
        q: 'Do members get a discount on their first deep clean?',
        a: 'Yes. Your first cleaning is always a deep clean, and as a member, you pay a deeply discounted rate instead of the full one-time price. It\'s one of the biggest perks of membership.',
      },
      {
        q: 'Can I pause my membership?',
        a: 'Yes. If you\'re going on vacation or need to skip a month, just let us know and we\'ll pause your service. Your membership and pricing stay the same when you resume.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Cleaning Services',
    icon: Sparkles,
    description: 'Details about what\'s included in each type of cleaning service.',
    questions: [
      {
        q: 'What\'s included in a standard recurring clean?',
        a: 'A standard recurring clean includes all bathrooms, kitchen, floors (vacuumed and mopped), surface dusting, trash removal, and general tidying. The specific scope depends on your membership tier (Partial, Full, or Premium).',
      },
      {
        q: 'What\'s the difference between a standard clean and a deep clean?',
        a: 'A standard clean maintains your home\'s cleanliness. A deep clean goes further: inside appliances, behind furniture, baseboards, window tracks, grout scrubbing, and more. We recommend a deep clean every 3 to 6 months.',
      },
      {
        q: 'Do you offer move in/move out cleaning?',
        a: 'Yes. Our Move In and Move Out cleaning services cover every detail landlords and property managers check. We clean inside all cabinets, closets, and appliances, detail baseboards and trim, and ensure every surface is spotless.',
      },
      {
        q: 'Do you clean vacation rentals and Airbnbs?',
        a: 'Yes. Our Vacation Rental Cleaning service includes full property cleaning, linen changes, supply restocking, and checklist photo verification. We work within tight turnover windows between guests.',
      },
      {
        q: 'Can I customize what gets cleaned?',
        a: 'Absolutely. You can add notes or special requests when booking. We\'re happy to focus on specific areas that matter most to you. Your dedicated cleaner will remember your preferences for future visits.',
      },
      {
        q: 'How long does a typical cleaning take?',
        a: 'A Partial Clean typically takes 1.5 to 2 hours, a Full Clean takes 2 to 3 hours, and a Full Premium clean takes 3 to 4 hours. Times vary depending on your home\'s size and condition.',
      },
    ],
  },
  {
    id: 'trust-safety',
    title: 'Trust & Safety',
    icon: Shield,
    description: 'Background checks, insurance, and how we protect your home.',
    questions: [
      {
        q: 'Are your cleaners background-checked?',
        a: 'Yes. Every member of our cleaning team undergoes a thorough background check, identity verification, and in-person interview before being assigned to any home. We take your safety seriously.',
      },
      {
        q: 'Are you insured and bonded?',
        a: 'Yes. Queen of Maids is fully insured and bonded. Your home and belongings are protected with every visit.',
      },
      {
        q: 'What if something is damaged during a cleaning?',
        a: 'If anything is accidentally damaged during a cleaning, contact us right away. We\'ll work with you to make it right. Our insurance covers accidental damage caused by our team.',
      },
      {
        q: 'What cleaning products do you use?',
        a: 'We use eco-friendly, non-toxic cleaning products that are safe for kids, pets, and the environment. If you have specific product preferences or allergies, let us know and we\'ll accommodate.',
      },
      {
        q: 'Will I get the same cleaner each visit?',
        a: 'Yes. We assign a dedicated cleaner to your home who learns your space, preferences, and priorities. Consistency means better results with every visit.',
      },
      {
        q: 'How do you handle keys and home access?',
        a: 'We have strict protocols for key management. All keys and access codes are stored securely and only accessible to your assigned cleaner. We never share your access information.',
      },
    ],
  },
  {
    id: 'service-areas',
    title: 'Service Areas',
    icon: Home,
    description: 'Where we operate and how to check if we serve your neighborhood.',
    questions: [
      {
        q: 'What areas do you serve?',
        a: 'We serve four major metro areas: Phoenix, Salt Lake City, Las Vegas, and Denver. Each metro includes dozens of surrounding cities and suburbs.',
      },
      {
        q: 'How do I know if you serve my neighborhood?',
        a: 'Visit our Service Areas page to see all the cities we cover in each metro. If you don\'t see your city listed, give us a call. We may still be able to serve you.',
      },
      {
        q: 'Do you charge extra for certain areas?',
        a: 'No. Our pricing is the same across all service areas within each metro. Your quote is based on your home size and the services you choose, not your location.',
      },
      {
        q: 'Are you expanding to new cities?',
        a: 'We\'re always evaluating new markets. If you\'re in an area we don\'t currently serve, let us know. Customer interest helps us prioritize where to expand next.',
      },
    ],
  },
  {
    id: 'satisfaction',
    title: 'Satisfaction & Guarantee',
    icon: Users,
    description: 'How our 200% Happiness Guarantee works and what to do if you\'re not satisfied.',
    questions: [
      {
        q: 'What is your 200% Happiness Guarantee?',
        a: 'If you\'re not happy with any cleaning, contact us within 24 hours. We\'ll send a team back to redo it for free. If you\'re still not satisfied after the redo, we\'ll issue a full refund for that visit. No questions asked.',
      },
      {
        q: 'How do I report an issue with a cleaning?',
        a: 'Contact us within 24 hours of your cleaning by phone or email. Describe the areas that didn\'t meet your expectations and we\'ll schedule a redo at no charge.',
      },
      {
        q: 'Is there a limit on how many times I can use the guarantee?',
        a: 'No. The 200% Happiness Guarantee applies to every cleaning visit, whether it\'s a one-time clean or a recurring membership visit. There are no limits.',
      },
      {
        q: 'What if I want a different cleaner?',
        a: 'Just let us know. We\'ll assign a new dedicated cleaner to your home. No questions asked, and no impact on your service or scheduling.',
      },
    ],
  },
];
