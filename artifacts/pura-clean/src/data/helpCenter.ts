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
    id: 'getting-started',
    title: 'Getting Started',
    icon: Home,
    description: 'Learn how Queen of Maids works, what areas we serve, and how to get started.',
    questions: [
      {
        q: 'How does Queen of Maids work?',
        a: 'Queen of Maids makes it easy to schedule a high-quality cleaning. Step 1: Choose and customize your home cleaning using our online booking form — enter details like square footage, bedrooms, bathrooms, and select the type of cleaning you need. Step 2: Book a date and time that works for you. Step 3: A vetted, experienced cleaning professional arrives at your home and completes the cleaning. Step 4: You receive a follow-up to make sure everything met your expectations.',
      },
      {
        q: 'How can I get a quote?',
        a: 'You can get a quote through our online quote and booking form at queenofmaids.com. Simply provide the information related to your home and the type of cleaning that you need, then a price quote will show on the "Booking Summary" section towards the end of the form. You can also give us a call to get a quote over the phone.',
      },
      {
        q: 'How does pricing work?',
        a: 'Quotes for Standard, Deep, and Move-in or Move-Out cleanings are based on: the entire square footage of the home, the number of bedrooms and bathrooms, the type of cleaning you need (standard vs heavy duty vs move in/out), and the add-on services you include. We use a flat-rate pricing model so you know exactly what you\'ll pay before your appointment.',
      },
      {
        q: 'What forms of payment are accepted?',
        a: 'All major credit cards and debit cards can be used to reserve and pay for your cleaning. Payment will only be collected on the day of your appointment. We are unable to create an appointment without a valid credit card at the time of booking. Cash, Venmo, PayPal, and checks are not accepted.',
      },
      {
        q: 'What areas do you cover?',
        a: 'Our expert cleaning teams provide house cleanings in: Arizona (Phoenix, Scottsdale, Chandler, and more), Utah (Salt Lake City, Park City, West Jordan, Sandy, and more), Colorado (Denver, Aurora, Lakewood, and more), and Nevada (Las Vegas, Henderson, Spring Valley, and more). Visit our Service Areas page for a complete listing of all the areas we serve.',
      },
      {
        q: 'Who are the cleaning professionals that work with Queen of Maids?',
        a: 'We exclusively work with contracted solo cleaners and contracted small cleaning companies. We only work with people and companies that have built their career around house cleaning, rather than employees doing house cleaning work on a temporary basis. This approach ensures we\'ve found the most talented and dedicated cleaners to serve your home.',
      },
      {
        q: 'How do I contact Queen of Maids?',
        a: 'You can reach your local team by phone during business hours (8 AM to 5 PM, Monday through Friday). Phoenix & Scottsdale: (480) 999-5044. Salt Lake City: (801) 477-7221. Las Vegas: (702) 903-2917. Denver: (720) 809-7784. You can also email us at contact@queenofmaids.com.',
      },
    ],
  },
  {
    id: 'booking',
    title: 'Booking a Service',
    icon: Calendar,
    description: 'How to book online, types of cleaning, add-ons, and pricing details.',
    questions: [
      {
        q: 'How do I book a cleaning online?',
        a: 'Booking online is simple: 1) Visit queenofmaids.com to use our online booking application. 2) Enter the details about your home (square footage, beds, baths, etc). 3) Select service options for your home. 4) Select an available date and time. 5) Enter your contact information and payment method. 6) Confirm your booking. Once confirmed, you\'ll receive a confirmation email with all the details.',
      },
      {
        q: 'What is the difference between Standard, Deep, and Move In/Out cleanings?',
        a: 'We offer three levels of service designed to suit the most common home cleaning needs. A Standard cleaning maintains your home\'s cleanliness with regular surface cleaning. A Deep cleaning goes further — inside appliances, behind furniture, baseboards, window tracks, and more. A Move In/Out cleaning covers every detail landlords and property managers check, including inside all cabinets, closets, and appliances.',
      },
      {
        q: 'What are add-on services and how do they work?',
        a: 'Add-on services are extra services you can include to customize your cleaning. For example: if you want a standard cleaning plus oven cleaning, add the "Inside Oven" add-on. If you need your fridge cleaned inside, add "Inside Fridge." Other popular add-ons include inside cabinets, inside windows, laundry, and organizing. Add-ons are priced individually and added to your base quote.',
      },
      {
        q: 'What is a "heavy duty" cleaning?',
        a: 'A heavy duty service includes the same checklist that you booked, but for home conditions that require more attention, supplies, and time. Heavy-duty is included for homes that have not been professionally cleaned in 2 or more months, have pet hair build-up, or have build-up on bathroom, kitchen, or floor surfaces. If heavy-duty conditions are found during a standard booking, an adjustment may apply.',
      },
      {
        q: 'Can my online quote change?',
        a: 'Yes, your quote can change, but if you completed your booking with accurate information, there is little reason for it to change. A quote change is typically only needed when a customer booked with inaccurate property details or did not include relevant information about the property condition. If an adjustment is needed, we\'ll contact you before proceeding.',
      },
      {
        q: 'When will my credit card be charged?',
        a: 'A credit card is required to make and reserve an appointment, but your card will not be charged until the day of your appointment.',
      },
      {
        q: 'I have a coupon code or gift code. How do I use it?',
        a: 'You can enter your coupon code or gift code when booking online during checkout. Please note that only one discount can be applied per cleaning, and a discount or coupon code can only be used once per household. If you have a Yelp code voucher, please include the six-digit voucher number in the comments section of your booking.',
      },
      {
        q: 'Can I book a cleaning for a vacation rental?',
        a: 'Of course! We love helping vacation rental owners. We know that having a quality cleaning plays a big part in receiving great guest ratings. Our vacation rental cleaning service includes full property cleaning, linen changes, supply restocking, and can work within tight turnover windows between guests.',
      },
    ],
  },
  {
    id: 'managing',
    title: 'Managing Appointments',
    icon: Clock,
    description: 'Rescheduling, cancellations, and what to do if plans change.',
    questions: [
      {
        q: 'I am no longer available for my appointment. What can I do?',
        a: 'We understand that sometimes things come up! You can update your appointment online at queenofmaids.com/book/update-booking/ to reschedule or make changes. You can also call or email us and our team will help you find a new date and time that works.',
      },
      {
        q: 'Are there any cancellation fees?',
        a: 'If you need to cancel or reschedule your appointment, you can do so online at queenofmaids.com/book/update-booking/. There is a late cancellation fee that is automatically charged if you cancel or reschedule your appointment with less than 24 hours notice. We recommend making changes as early as possible to avoid any fees.',
      },
      {
        q: 'I am not happy with my cleaning. What can be done?',
        a: 'If there are any issues with your service, please contact us immediately. We stand behind our work with our Service Guarantee — we\'ll send a team back to address any areas that didn\'t meet your expectations at no additional charge. Your satisfaction is our top priority.',
      },
      {
        q: 'Can I reschedule to a different date?',
        a: 'Yes. You can reschedule online at queenofmaids.com/book/update-booking/ or by contacting us directly. We just ask for at least 24 hours notice to avoid any late-change fees.',
      },
    ],
  },
  {
    id: 'day-of-service',
    title: 'Day of Service',
    icon: Sparkles,
    description: 'What to expect on cleaning day, tips for preparation, and FAQs.',
    questions: [
      {
        q: 'Do I need to be home during the cleaning?',
        a: 'No, you do not have to be home during the cleaning. You can simply provide entry and lock instructions via our online booking form, or you can send them via email, text, or by calling us. Many clients provide a key, garage code, or smart lock access.',
      },
      {
        q: 'How many cleaners will arrive for my appointment?',
        a: 'Either a solo cleaner or a team of two will arrive for your appointment. This depends on the availability of cleaners for your date and time, and the size of your home and type of cleaning. Generally, homes greater than 2,600 square feet usually have a team of two assigned.',
      },
      {
        q: 'How long will the cleaning take?',
        a: 'Average cleaning times are: Homes in good or average condition — 60 to 90 minutes per 1,000 sqft for a Standard Clean, 90 to 120 minutes per 1,000 sqft for a Deep or Move In/Out Clean. Homes in below-average condition or heavy-duty situations may take longer. Times also depend on the number of add-on services selected.',
      },
      {
        q: 'Should I leave a tip?',
        a: 'The price for a cleaning does not include a tip. Tipping is not required and the cleaning professionals do not expect a gratuity, but if you feel inclined to tip they would certainly appreciate it. You can tip in cash or contact us to add a tip to your card on file.',
      },
      {
        q: 'What are the dos and don\'ts for my cleaning appointment?',
        a: 'Dos: Pick up and organize personal items on surfaces so cleaners can focus on cleaning. Secure valuables and fragile items. Make sure pets are secured or inform us about pets in the home. Ensure electricity, hot water, and climate control are available. Don\'ts: Don\'t leave dirty dishes in the sink (unless you\'ve added that service). Don\'t block access to rooms that need cleaning. Don\'t forget to share entry instructions if you won\'t be home.',
      },
      {
        q: 'How can I leave a note for my cleaner(s)?',
        a: 'You can email us at contact@queenofmaids.com or call us, and one of our team members will add the note to your appointment. Notes can be helpful for finding locations of supplies, highlighting areas of focus, or sharing any special instructions.',
      },
      {
        q: 'What if my home has no electricity, hot water, or AC/heat?',
        a: 'In order for a cleaning to take place, the following conditions must be met: cleaners must be given access to the property during the booked appointment time, electricity and hot water must be on and functional, and air conditioning or heat must be available to provide a sustainable working environment. If these conditions are not met, the appointment may need to be rescheduled.',
      },
      {
        q: 'Do cleaners bring their own supplies?',
        a: 'Our cleaners come to your home equipped with standard cleaning supplies and tools to complete the level of cleaning selected during your booking. There are select items that a team may use from your home, such as a toilet brush for sanitary reasons and trash bags. If you have preferred products or supplies, let us know and we can accommodate.',
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
    id: 'trust-safety',
    title: 'Trust & Guarantee',
    icon: Shield,
    description: 'Our service guarantee, insurance coverage, and how we protect your home.',
    questions: [
      {
        q: 'What is the Queen of Maids Service Guarantee?',
        a: 'In the rare event the cleaning does not meet your expectations, we will do all we can to make it right. We offer two options: Option 1 — a complimentary re-clean of the specific areas that did not meet your standards, scheduled within 3 business days. Option 2 — if a re-clean is not feasible, we\'ll issue a credit or adjustment to your account. Please report any issues within 24 hours of your cleaning.',
      },
      {
        q: 'Are you insured and bonded?',
        a: 'Yes. Queen of Maids is fully insured and bonded. Your home and belongings are protected with every visit. In the unlikely event of accidental damage, contact us right away and we\'ll work with you to make it right.',
      },
      {
        q: 'What if something is damaged during a cleaning?',
        a: 'If anything is accidentally damaged during a cleaning, contact us right away. We\'ll work with you to make it right. Our insurance covers accidental damage caused by our team.',
      },
      {
        q: 'Will I get the same cleaner each visit?',
        a: 'That is always our goal. We assign a dedicated cleaner to your home so they can learn your space, preferences, and priorities. In most cases, you will see the same person every visit. However, life happens — if your regular cleaner is sick, on vacation, or unavailable, we have trained backup cleaners ready to step in so your appointment is never missed. If you ever want to request a different cleaner permanently, just let us know.',
      },
      {
        q: 'How do you handle keys and home access?',
        a: 'We have strict protocols for key management. All keys and access codes are stored securely and only accessible to your assigned cleaner. We never share your access information with anyone else.',
      },
    ],
  },
];
