import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Clock, Heart, Users, CalendarCheck, Percent } from 'lucide-react';
import CleaningPlans from '@/components/sections/CleaningPlans';
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

const benefits = [
  {
    icon: Percent,
    title: 'Save Up to 25%',
    description: 'Plan members pay less per clean compared to one-time bookings. The more frequently you clean, the more you save.',
  },
  {
    icon: Users,
    title: 'Same Cleaner Every Visit',
    description: 'We assign the same trusted, vetted cleaner to your home. They learn your preferences and treat your home like their own.',
  },
  {
    icon: CalendarCheck,
    title: 'Priority Scheduling',
    description: 'Plan members get first access to preferred time slots. Never worry about availability during busy seasons.',
  },
  {
    icon: Shield,
    title: 'Fully Insured & Bonded',
    description: 'Every cleaner is background-checked, insured, and bonded. Your home and belongings are protected on every visit.',
  },
  {
    icon: Heart,
    title: '200% Happiness Guarantee',
    description: "Not satisfied? We'll reclean for free. Still not happy? We'll refund your last clean — no questions asked.",
  },
  {
    icon: Clock,
    title: 'No Contracts, Cancel Anytime',
    description: "We earn your business every visit. No long-term contracts, no cancellation fees. Pause or cancel whenever you need.",
  },
];

const planFaqs = [
  {
    q: 'What\'s the difference between Partial and Full Clean?',
    a: 'Partial Clean focuses on high-traffic areas — kitchen, bathrooms, and floors. Full Clean covers your entire home top to bottom, including all bedrooms, living spaces, baseboards, and more.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. You can upgrade, downgrade, or change your plan at any time. Changes take effect on your next scheduled visit.',
  },
  {
    q: 'What if I need to skip a cleaning?',
    a: 'No problem. You can reschedule or skip a visit with at least 24 hours notice. No penalties or fees.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'Not at all. Most of our clients provide a key, garage code, or smart lock access. Your cleaner will lock up when they leave.',
  },
  {
    q: 'How does the 200% Happiness Guarantee work?',
    a: 'If you\'re not satisfied with any visit, let us know within 24 hours. We\'ll send a team back to reclean at no charge. If you\'re still not happy, we\'ll refund your last cleaning — no questions asked.',
  },
  {
    q: 'Are one-time cleans available without a plan?',
    a: 'Yes! One-time cleans are always available. However, plan members save up to 25% per visit and get priority scheduling.',
  },
];

export default function Plans() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Pricing & Plans
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose a biweekly plan that fits your home and budget. No contracts, no hidden fees, and every plan includes our 200% Happiness Guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      <CleaningPlans />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Compare Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What's Included in Each Plan
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
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Partial<br/><span className="text-primary font-bold">$99</span></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground bg-primary/5 rounded-t-xl">Full<br/><span className="text-primary font-bold">$149</span></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Premium<br/><span className="text-primary font-bold">$179</span></th>
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

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Why Choose a Plan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Benefits of Being a Plan Member
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Questions About Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {planFaqs.map((faq, i) => (
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
