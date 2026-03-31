import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SprayCan, Sparkles, Truck, CalendarClock, Home,
  Calendar, CalendarDays, CalendarCheck, ClipboardList, Settings
} from 'lucide-react';
import CTA from '@/components/sections/CTA';

const services = [
  {
    icon: SprayCan,
    slug: 'standard-cleaning',
    title: 'Standard Cleaning',
    tagline: 'The essentials, done right every time.',
    description: 'Our Standard Cleaning covers all the basics your home needs to stay fresh and tidy. We dust surfaces, vacuum and mop all floors, clean and sanitize bathrooms, wipe down kitchen counters and appliances, and take out trash. Perfect for homes that are already in good shape and just need regular upkeep.',
    includes: ['Dusting all reachable surfaces', 'Vacuuming & mopping floors', 'Bathroom cleaning & sanitization', 'Kitchen counter & sink wipe-down', 'Trash removal', 'General tidying'],
  },
  {
    icon: Sparkles,
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    tagline: 'A top-to-bottom reset for your home.',
    description: 'Our Deep Cleaning service goes beyond the surface. We scrub grout, clean inside appliances, detail baseboards, wipe light fixtures, deep-clean behind furniture, and tackle all the areas that get missed during regular cleaning. Ideal for first-time clients or homes that haven\'t been professionally cleaned in a while.',
    includes: ['Everything in Standard Cleaning', 'Inside oven & microwave', 'Baseboard & door frame detailing', 'Light fixture & ceiling fan dusting', 'Behind & under furniture', 'Cabinet exterior wipe-down', 'Window sill & track cleaning'],
  },
  {
    icon: Truck,
    slug: 'move-in-out-cleaning',
    title: 'Move In/Out Cleaning',
    tagline: 'Start fresh or leave it spotless.',
    description: 'Moving is stressful enough — let us handle the cleaning. Our Move In/Out service ensures every inch of the home is spotless, from inside closets and cabinets to appliance interiors and all flooring. Whether you\'re preparing a home for new tenants or moving into a new place, we\'ll make sure it\'s move-in ready.',
    includes: ['Full deep clean of all rooms', 'Inside all cabinets & closets', 'Inside refrigerator, oven & dishwasher', 'Window cleaning (interior)', 'Garage sweep (if applicable)', 'Baseboard & trim detailing', 'Light fixture cleaning'],
  },
  {
    icon: CalendarClock,
    slug: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    tagline: 'Consistent cleaning on your schedule.',
    description: 'Set it and forget it. Our Recurring Cleaning plans keep your home consistently clean with regularly scheduled visits. Choose weekly, biweekly, or monthly frequency — and enjoy savings over one-time bookings. We assign the same trusted cleaner to your home so they learn your preferences over time.',
    includes: ['Customizable frequency', 'Same cleaner assigned', 'Priority scheduling', 'Plan member discounts', 'Flexible rescheduling', 'All Standard Cleaning tasks'],
  },
  {
    icon: Home,
    slug: 'vacation-rental-cleaning',
    title: 'Vacation Rental Cleaning',
    tagline: '5-star turnover, every time.',
    description: 'Keep your Airbnb, VRBO, or vacation rental guest-ready with our turnover cleaning service. We handle linens, restock essentials, deep-clean kitchens and bathrooms, and make sure every detail is perfect for your next guest. Fast turnaround times to fit between bookings.',
    includes: ['Full property cleaning', 'Linen change & bed making', 'Restocking toiletries & supplies', 'Kitchen & appliance cleaning', 'Bathroom deep clean', 'Trash removal & dishwasher run', 'Checklist photo verification'],
  },
  {
    icon: Calendar,
    slug: 'monthly-cleaning',
    title: 'Monthly Cleaning',
    tagline: 'Once a month, thoroughly done.',
    description: 'Our Monthly Cleaning plan is perfect for homeowners who maintain their own home day-to-day but want a professional deep touch once a month. Each visit includes a thorough cleaning of all rooms with extra attention to detail — keeping your home in great shape without the weekly commitment.',
    includes: ['Thorough whole-home clean', 'Extra attention to detail areas', 'Baseboard & surface dusting', 'Bathroom & kitchen deep clean', 'Floor care throughout', 'Flexible date scheduling'],
  },
  {
    icon: CalendarDays,
    slug: 'biweekly-cleaning',
    title: 'Biweekly Cleaning',
    tagline: 'The sweet spot for most homes.',
    description: 'Our most popular frequency. Biweekly cleaning keeps your home consistently clean without overdoing it. Every two weeks, your assigned cleaner arrives and handles everything — dusting, mopping, bathrooms, kitchen, and more. Most clients find this is the perfect balance of clean and convenient.',
    includes: ['All Standard Cleaning tasks', 'Same cleaner each visit', 'Biweekly scheduling', 'Plan member pricing', 'Priority rebooking', 'Customizable task list'],
  },
  {
    icon: CalendarCheck,
    slug: 'weekly-cleaning',
    title: 'Weekly Cleaning',
    tagline: 'A spotless home, every single week.',
    description: 'For busy families, pet owners, or anyone who loves coming home to a perfectly clean house — our Weekly Cleaning plan is the ultimate convenience. Your cleaner visits the same day each week, handling all standard tasks plus any special requests. The most hands-off way to keep your home pristine.',
    includes: ['All Standard Cleaning tasks', 'Dedicated weekly cleaner', 'Best per-visit pricing', 'Priority scheduling', 'Custom preferences saved', 'Add-on services available'],
  },
  {
    icon: ClipboardList,
    slug: 'basic-cleaning',
    title: 'Basic Cleaning',
    tagline: 'Quick, efficient, and affordable.',
    description: 'Need a quick refresh without the full service? Our Basic Cleaning covers the high-traffic essentials — bathrooms, kitchen surfaces, and floors. Great for small apartments, between deeper cleans, or when you just need a helping hand. In and out, with visible results.',
    includes: ['Bathroom sanitization', 'Kitchen counters & sink', 'Floor vacuuming & mopping', 'Surface dusting', 'Trash removal', 'Quick tidy of living areas'],
  },
  {
    icon: Settings,
    slug: 'custom-cleanings',
    title: 'Custom Cleanings',
    tagline: 'Your home, your rules.',
    description: 'Have specific needs that don\'t fit a standard package? Our Custom Cleaning service lets you build your own cleaning plan. Tell us exactly which rooms, tasks, or areas you want us to focus on, and we\'ll tailor a visit just for you. Perfect for post-party cleanups, seasonal deep cleans, or unique requests.',
    includes: ['Choose specific rooms & tasks', 'Custom scheduling', 'Post-event cleanup', 'Seasonal deep clean', 'Organizing & decluttering add-on', 'Flexible pricing based on scope'],
  },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Cleaning Services for <span className="text-primary">Every Need</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From quick refreshes to full deep cleans, we offer a range of professional cleaning services across the Phoenix metro area. Every service comes with our 200% Happiness Guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 md:gap-16">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" as const }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-sm text-teal font-semibold">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="lg:col-span-5">
                    <hr className="border-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
