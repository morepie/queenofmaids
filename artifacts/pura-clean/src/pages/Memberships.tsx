import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Check, X, Star, ArrowRight, Sparkles, DollarSign,
  Crown, FileText, Users, CalendarClock
} from 'lucide-react';
import { cleaningPlans } from '@/data/content';
import { cn } from '@/lib/utils';
import CTA from '@/components/sections/CTA';

const comparisonFeatures = [
  { feature: 'Kitchen & Dining', partial: true, full: true, premium: true },
  { feature: 'All Bathrooms', partial: true, full: true, premium: true },
  { feature: 'All Bedrooms', partial: false, full: true, premium: true },
  { feature: 'Living Areas', partial: false, full: true, premium: true },
  { feature: 'Dusting & Vacuuming', partial: false, full: true, premium: true },
  { feature: 'Deep Detailing', partial: false, full: false, premium: true },
  { feature: 'Ceiling Fans & Vents', partial: false, full: false, premium: true },
  { feature: 'Priority Scheduling', partial: false, full: false, premium: true },
];

const howItWorks = [
  {
    step: 1,
    title: 'Choose Your Clean',
    description: 'Book a one-time deep clean or pick a monthly membership that matches your home size and cleaning preferences. Not sure which fits? Give us a call — we\'ll walk you through it.',
  },
  {
    step: 2,
    title: 'Save Big on Your First Deep Clean',
    description: 'Your first cleaning is always a deep clean — and members get it at a fraction of the regular price. Lock in your discounted rate from day one and start saving right away.',
  },
  {
    step: 3,
    title: 'Lock In Your Preferred Day',
    description: 'Tell us which day works best. We\'ll reserve that slot for you every month, so your cleaning happens like clockwork — no rebooking required.',
  },
  {
    step: 4,
    title: 'Come Home to Clean',
    description: 'That\'s it. Every month, our team arrives and takes care of everything. You focus on the things that matter — we\'ll keep your home spotless.',
  },
];

const whyMembership = [
  {
    icon: Sparkles,
    title: 'A Clean Home on Autopilot',
    description: 'Your home gets a full professional cleaning every month. No scheduling reminders, no back-and-forth — it just happens.',
  },
  {
    icon: DollarSign,
    title: 'Huge Savings from Day One',
    description: 'Your first visit is a thorough deep clean — and as a member, you pay a deeply discounted rate instead of the full price. Then keep saving month after month with discounted recurring cleanings.',
  },
  {
    icon: Crown,
    title: 'You Get VIP Treatment',
    description: 'Members are always first in line for scheduling, get a dedicated support contact, and receive our highest-tier service on every visit.',
  },
  {
    icon: FileText,
    title: 'Commitment-Light',
    description: 'We ask for a simple 3-month starter period so we can get to know your home. After that, you\'re free to cancel with 30 days notice — no penalties, no hassle.',
  },
  {
    icon: Users,
    title: 'Your Team Knows Your Home',
    description: 'We send the same cleaning crew every time. They learn your layout, your trouble spots, and your preferences — which means better results each visit.',
  },
  {
    icon: CalendarClock,
    title: 'One Less Thing to Manage',
    description: 'Your monthly cleaning is pre-scheduled and automatic. No phone calls, no emails, no mental overhead. It\'s the easiest upgrade to your routine.',
  },
];

const membershipFaqs = [
  {
    q: 'What\'s the difference between Partial, Full, and Premium memberships?',
    a: 'Partial focuses on high-impact zones — kitchen, bathrooms, and floors. Full covers every room in your home from top to bottom. Premium adds deep detailing, ceiling fans, vents, and priority scheduling on top of everything in Full.',
  },
  {
    q: 'Can I change my membership tier later?',
    a: 'Of course. Upgrade or downgrade whenever you\'d like — the change kicks in on your next scheduled cleaning.',
  },
  {
    q: 'What happens if I need to reschedule?',
    a: 'Just give us 24 hours notice and we\'ll move your appointment to another day that month. No fees, no questions.',
  },
  {
    q: 'Do I have to be home for the cleaning?',
    a: 'Nope. Most members share a key, garage code, or smart lock access. Your cleaning crew will secure everything when they\'re finished.',
  },
  {
    q: 'How does the 200% Happiness Guarantee work for members?',
    a: 'If any visit doesn\'t meet your expectations, contact us within 24 hours. We\'ll send a crew back to redo it at no charge. Still not right? We refund that month\'s cleaning — no questions asked.',
  },
  {
    q: 'Can I book one-time cleans without a membership?',
    a: 'Absolutely. One-time cleans are always available. That said, members save significantly per visit and get priority access to scheduling.',
  },
];

export default function Memberships() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Memberships & Pricing | Queen of Maids</title>
        <meta name="description" content="Choose your Queen of Maids membership — Partial, Full, or Premium monthly plans. Save big on your first deep clean and enjoy discounted recurring cleanings every month." />
      </Helmet>
      {/* HERO */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 overflow-hidden bg-gradient-to-br from-[hsl(270,40%,93%)] via-[hsl(270,25%,96%)] to-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Monthly Memberships
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Your Home, <span className="text-primary">Always Clean</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Join a monthly membership and get professional cleaning on autopilot. Save big on your first deep clean, enjoy discounted recurring cleanings, and never think about scheduling again.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW MEMBERSHIP WORKS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Getting Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How Membership Works
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Four simple steps from signup to a spotless home every month.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:hidden" />

            {howItWorks.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-5 mb-14 last:mb-0 md:gap-0"
                >
                  <div className={cn(
                    "hidden md:flex md:w-1/2 md:pr-10",
                    isLeft ? "justify-end" : "justify-end opacity-0 pointer-events-none"
                  )}>
                    {isLeft && (
                      <div className="text-right max-w-xs">
                        <h3 className="text-lg font-bold text-foreground mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 ring-4 ring-background">
                      {item.step}
                    </div>
                  </div>

                  <div className={cn(
                    "hidden md:flex md:w-1/2 md:pl-10",
                    !isLeft ? "justify-start" : "justify-start opacity-0 pointer-events-none"
                  )}>
                    {!isLeft && (
                      <div className="text-left max-w-xs">
                        <h3 className="text-lg font-bold text-foreground mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="md:hidden flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section id="memberships" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Membership Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Pick the Right Fit for Your Home
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              All memberships include monthly service by our trained, background-checked professionals. Start with a 3-month commitment, then stay as long as you like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cleaningPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 flex flex-col",
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-primary/20 scale-[1.02]"
                    : "bg-card border border-border shadow-md"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={cn("text-xl font-bold mb-1", plan.popular ? "text-primary-foreground" : "text-foreground")}>
                    {plan.name}
                  </h3>
                  <p className={cn("text-sm", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={cn("text-xs font-medium uppercase tracking-wide block mb-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
                    Starting at
                  </span>
                  <span className={cn("text-4xl font-bold", plan.popular ? "text-primary-foreground" : "text-foreground")}>
                    ${plan.price}
                  </span>
                  <span className={cn("text-sm ml-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
                    /month
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={cn("w-4 h-4 mt-0.5 shrink-0", plan.popular ? "text-primary-foreground" : "text-teal")} />
                      <span className={plan.popular ? "text-primary-foreground/90" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="https://quote.queenofmaids.com/" target="_blank" rel="noopener noreferrer" className={cn(
                  "w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 block text-center",
                  plan.popular
                    ? "bg-white text-primary shadow-md hover:shadow-lg"
                    : "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                )}>
                  Get a Quote
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="text-base font-bold text-foreground">
                Not sure about a membership? Try a one-time clean first.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Members save on every visit and skip the initial deep-clean fee — but there's no pressure.
              </p>
            </div>
            <a
              href="tel:6025551234"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Book a One-Time Clean <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Side-by-Side
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Compare Monthly Memberships
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 pr-4 text-sm font-semibold text-foreground w-1/2">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Partial<br/><span className="text-primary font-bold">From $99/mo</span></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground bg-primary/5 rounded-t-xl">Full<br/><span className="text-primary font-bold">From $149/mo</span></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Premium<br/><span className="text-primary font-bold">From $179/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="py-3 pr-4 text-sm text-foreground/80">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.partial ? <Check className="w-5 h-5 text-teal mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                    <td className="text-center py-3 px-4 bg-primary/5">
                      {row.full ? <Check className="w-5 h-5 text-teal mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.premium ? <Check className="w-5 h-5 text-teal mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* WHY MEMBERSHIP */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              The Member Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Go Monthly?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyMembership.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Membership Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {membershipFaqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-semibold text-sm hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform duration-200 text-xl">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
