import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemberships } from '@/hooks/use-app-data';
import { useBooking } from '@/context/BookingContext';
import { CheckCircle, ChevronDown, Award, Clock, DollarSign, CalendarHeart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-border rounded-2xl bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <span className="font-sans font-bold text-lg text-foreground">{q}</span>
        <ChevronDown className={cn("w-5 h-5 text-primary transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50 mt-2">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Memberships() {
  const { data: memberships, isLoading } = useMemberships();
  const { openBookingModal } = useBooking();

  const faqs = [
    { q: "What treatments are covered in my membership?", a: "Each membership tier includes specific treatments. Basic covers hydration and recovery essentials, Plus adds popular drips like Hangover and Headache, and Premium unlocks our full menu including Myers Cocktail and specialty blends." },
    { q: "Do unused treatments roll over?", a: "To encourage consistent wellness, unused treatments do not roll over to the next month. We recommend booking your session in advance to ensure you get your monthly IV." },
    { q: "Can I upgrade my plan?", a: "Absolutely! You can upgrade your membership tier at any time. The price difference will be prorated for the current billing cycle. Contact our concierge team to make the switch." },
    { q: "What is the cancellation policy?", a: "All memberships require a minimum 3-month commitment to see true biological results. After the 3rd month, you may cancel at any time with no penalty by contacting our concierge team." }
  ];

  return (
    <div className="w-full bg-background pb-24">
      <section className="bg-card pt-40 pb-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-secondary font-bold tracking-widest uppercase mb-4 block">VIP Experience</span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-8">
              Invest In Your Wellness
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get rewarded for feeling your best. Choose from flexible, value-packed plans that make premium self-care effortless — month after month.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        {isLoading ? (
          <div className="flex justify-center py-20"><div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {memberships?.map((plan) => {
                const isPop = plan.popular;
                return (
                  <div
                    key={plan.name}
                    className={cn(
                      "rounded-3xl p-8 flex flex-col h-full transition-all duration-300 relative overflow-hidden group",
                      isPop
                        ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.03] z-10 border-2 border-primary"
                        : "bg-card border border-border shadow-lg hover:-translate-y-2 hover:shadow-2xl"
                    )}
                  >
                    {isPop && (
                      <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Most Popular
                      </div>
                    )}
                    {!isPop && <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary group-hover:bg-primary transition-colors"></div>}
                    {isPop && <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>}

                    <h3 className="text-2xl font-sans font-bold mb-4">{plan.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className={cn("ml-2", isPop ? "text-primary-foreground/70" : "text-muted-foreground")}>/mo</span>
                    </div>
                    <p className={cn(
                      "text-sm font-semibold mb-8 uppercase tracking-wider",
                      isPop ? "text-secondary" : "text-secondary"
                    )}>
                      {plan.ivsPerMonth} IV per month
                    </p>

                    <ul className={cn("space-y-3 mb-10 flex-1 relative z-10")}>
                      {plan.choices.map((choice, j) => (
                        <li key={j} className={cn("flex gap-3 text-sm", isPop ? "text-primary-foreground/90" : "text-muted-foreground")}>
                          <CheckCircle className={cn("w-5 h-5 shrink-0", isPop ? "text-secondary" : "text-secondary")} />
                          <span>{choice}</span>
                        </li>
                      ))}
                      <li className={cn(
                        "flex gap-3 text-sm font-medium pt-3 border-t",
                        isPop ? "text-primary-foreground border-primary-foreground/20" : "text-muted-foreground border-border/50"
                      )}>
                        <CheckCircle className={cn("w-5 h-5 shrink-0", isPop ? "text-secondary" : "text-primary")} />
                        <span>{plan.discount}</span>
                      </li>
                    </ul>

                    <button
                      onClick={openBookingModal}
                      className={cn(
                        "w-full py-4 rounded-xl font-bold transition-colors mt-auto relative z-10",
                        isPop
                          ? "bg-white text-primary hover:bg-secondary hover:text-secondary-foreground"
                          : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground border border-border hover:border-transparent"
                      )}
                    >
                      Select Plan
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </section>

      <section className="py-24 bg-card mt-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">Why Become a Member?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Better pricing. VIP perks. Total convenience. Making self-care seamless and smarter.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "Save $500+/Year", desc: "Members lock in our lowest rates and receive ongoing discounts on all extras." },
              { icon: Clock, title: "Priority Scheduling", desc: "Jump to the front of the line. We prioritize our members' booking requests." },
              { icon: Award, title: "No Initiation Fee", desc: "Start saving immediately. You only pay your flat monthly membership rate." },
              { icon: CalendarHeart, title: "Flexible Commitment", desc: "Only a 3-month minimum commitment, then cancel anytime if your needs change." }
            ].map((perk, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i*0.1 } } }} className="text-center p-6">
                <div className="w-16 h-16 bg-secondary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <perk.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-muted-foreground">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">Frequently Asked Questions</h2>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
