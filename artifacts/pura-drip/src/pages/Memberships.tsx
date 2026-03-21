import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemberships } from '@/hooks/use-app-data';
import { useBooking } from '@/context/BookingContext';
import { CheckCircle, ChevronDown, Award, Clock, DollarSign, CalendarHeart } from 'lucide-react';
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
    { q: "What treatments are covered in my membership?", a: "Each membership tier includes specific treatments. Classic covers basic hydration and recovery, while Myers includes our premium blends. See the specific plan details above for exact inclusions." },
    { q: "Do unused treatments roll over?", a: "To encourage consistent wellness, unused treatments do not roll over to the next month. We recommend booking your session in advance to ensure you get your monthly IV." },
    { q: "Can I share my membership?", a: "Our Duo plans allow you to share your treatments with a friend or family member at the same location. Standard individual plans cannot be shared." },
    { q: "What is the cancellation policy?", a: "All memberships require a minimum 3-month commitment to see true biological results. After the 3rd month, you may cancel at any time with no penalty by contacting our concierge team." }
  ];

  return (
    <div className="w-full bg-background pb-24">
      {/* HEADER */}
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

      {/* PLANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {isLoading ? (
          <div className="flex justify-center py-20"><div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <>
            {/* Classic Tier */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-24">
              <h2 className="text-4xl font-sans font-bold text-center mb-12">Classic Memberships</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {memberships?.classic.map((plan, i) => (
                  <div key={plan.name} className="bg-card rounded-3xl p-8 border border-border shadow-lg flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-2 bg-secondary group-hover:bg-primary transition-colors"></div>
                    <h3 className="text-2xl font-sans font-bold mb-4">{plan.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/mo</span>
                    </div>
                    <p className="text-sm font-semibold text-secondary mb-8 uppercase tracking-wider">{plan.ivsPerMonth} IV{plan.ivsPerMonth > 1 ? 's' : ''} per month</p>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                      {plan.choices.map((choice, j) => (
                        <li key={j} className="flex gap-3 text-muted-foreground text-sm">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                          <span>{choice}</span>
                        </li>
                      ))}
                      <li className="flex gap-3 text-muted-foreground text-sm font-medium pt-4 border-t border-border/50">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span>{plan.discount}</span>
                      </li>
                      <li className="flex gap-3 text-muted-foreground text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span>Priority booking</span>
                      </li>
                    </ul>
                    
                    <button onClick={openBookingModal} className="w-full py-4 rounded-xl bg-muted text-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors border border-border hover:border-transparent mt-auto">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Myers Tier */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-4xl font-sans font-bold text-center mb-12">Myers Memberships</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {memberships?.myers.map((plan, i) => (
                  <div key={plan.name} className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                    {/* Glow effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors"></div>
                    
                    <h3 className="text-2xl font-sans font-bold mb-4">{plan.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-primary-foreground/70 ml-2">/mo</span>
                    </div>
                    <p className="text-sm font-semibold text-secondary mb-8 uppercase tracking-wider">{plan.ivsPerMonth} IV{plan.ivsPerMonth > 1 ? 's' : ''} per month</p>
                    
                    <ul className="space-y-4 mb-10 flex-1 relative z-10">
                      {plan.choices.map((choice, j) => (
                        <li key={j} className="flex gap-3 text-primary-foreground/90 text-sm">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                          <span>{choice}</span>
                        </li>
                      ))}
                      <li className="flex gap-3 text-primary-foreground text-sm font-medium pt-4 border-t border-primary-foreground/20">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        <span>{plan.discount}</span>
                      </li>
                      <li className="flex gap-3 text-primary-foreground text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        <span>Priority booking</span>
                      </li>
                    </ul>
                    
                    <button onClick={openBookingModal} className="w-full py-4 rounded-xl bg-card text-foreground font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors mt-auto relative z-10">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </section>

      {/* WHY BECOME A MEMBER */}
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

      {/* FAQS */}
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
