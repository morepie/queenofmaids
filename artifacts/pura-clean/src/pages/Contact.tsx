import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock, MapPin, Shield, Heart, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { metros } from '@/data/metros';
import CTA from '@/components/sections/CTA';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Queen of Maids</title>
        <meta name="description" content="Get in touch with Queen of Maids. Call, email, or text us for house cleaning questions, quotes, scheduling, or support across Phoenix, Salt Lake City, Las Vegas, and Denver." />
        <link rel="canonical" href="https://queenofmaids.com/contact" />
      </Helmet>

      <section
        className="relative pt-32 pb-14 md:pt-40 md:pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${base}/images/photos/team-photo-2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
        aria-label="Contact us"
      >
        <div className="absolute inset-0 bg-[hsl(270,50%,12%)]/80" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/80 text-sm font-semibold mb-4 backdrop-blur-sm">
              We're Here to Help
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Get in <span className="text-purple-300">Touch</span>
            </h1>
            <p className="text-white/75 max-w-2xl mx-auto text-lg">
              Have a question, need a quote, or want to schedule a cleaning? Reach out by phone, email, or text — whatever is easiest for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" aria-label="Local office contact information">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
              Local Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Reach Your Local Office
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Each metro area has its own direct line. Call, text, or email the office closest to you for the fastest service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {metros.map((metro, i) => (
              <motion.div
                key={metro.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{metro.name} Metro</h3>
                    <p className="text-xs text-muted-foreground">{metro.state}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${metro.phone.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    aria-label={`Call ${metro.name} office at ${metro.phone}`}
                  >
                    <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                    {metro.phone}
                  </a>
                  <a
                    href={`sms:${metro.phone.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    aria-label={`Text ${metro.name} office at ${metro.phone}`}
                  >
                    <MessageSquare className="w-4 h-4 text-primary" aria-hidden="true" />
                    Text this number
                  </a>
                  <a
                    href={`mailto:${metro.email}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    aria-label={`Email ${metro.name} office at ${metro.email}`}
                  >
                    <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                    {metro.email}
                  </a>
                  <div className="inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
                    {metro.hours}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Serving {metro.cities.slice(0, 5).map(c => c.name).join(', ')}
                  {metro.cities.length > 5 && ` and ${metro.cities.length - 5} more`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" aria-label="Response time expectations">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              What to Expect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              We'll Get Back to You Fast
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We know your time is valuable. Here's what to expect when you reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Phone Calls',
                description: 'Answered live during business hours. If we miss your call, we\'ll return it the same day.',
                timing: 'Immediate – Same day',
              },
              {
                icon: Mail,
                title: 'Emails',
                description: 'We read every email and respond within one business day — usually much sooner.',
                timing: 'Within 1 business day',
              },
              {
                icon: MessageSquare,
                title: 'Text Messages',
                description: 'We monitor texts during business hours and reply as quickly as we can.',
                timing: 'Within a few hours',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {item.timing}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" aria-label="Common reasons to contact us">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              How Can We Help?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Here are some common reasons people reach out. Whatever you need, we're happy to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { text: 'Get a free cleaning quote' },
              { text: 'Schedule or reschedule a cleaning' },
              { text: 'Ask about our membership plans' },
              { text: 'Request a specific cleaner' },
              { text: 'Report a concern or give feedback' },
              { text: 'Ask about our service areas' },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background" aria-label="Our promises">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Family-Owned', desc: 'Real people who care about your experience, not a faceless call center.' },
              { icon: Shield, title: 'No Pressure', desc: 'We\'ll answer your questions honestly. No sales tactics, no runaround.' },
              { icon: Clock, title: 'Fast Response', desc: 'We value your time and get back to you as quickly as possible.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
