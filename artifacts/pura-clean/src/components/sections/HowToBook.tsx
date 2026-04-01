import { motion } from 'framer-motion';
import { MousePointerClick, Phone, CalendarCheck } from 'lucide-react';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const steps = [
  {
    number: '1',
    icon: MousePointerClick,
    title: 'Choose Your Clean',
    description: 'Book a one-time deep clean or pick a monthly membership that fits your home and budget.',
  },
  {
    number: '2',
    icon: CalendarCheck,
    title: 'Schedule a Date',
    description: 'Select a date and time that works for you. We offer flexible scheduling throughout the week.',
  },
  {
    number: '3',
    icon: Phone,
    title: 'We Handle the Rest',
    description: 'Our vetted, insured team arrives on time and leaves your home sparkling clean.',
  },
];

export default function HowToBook() {
  const scrollToMemberships = () => {
    document.getElementById('memberships')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="how-to-book"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `url(${base}/images/photos/team-photo-1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[hsl(270,30%,12%)]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-semibold mb-4">
            Simple & Easy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How to Book
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Getting started is easy. Book online or give us a call and we'll take care of the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              className="text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 border-t-2 border-dashed border-white/20" />
              )}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Book Online</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Choose a membership below and we'll follow up within the hour to confirm your appointment.
            </p>
            <a
              href="https://quote.queenofmaids.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Memberships & Get a Quote
            </a>
          </div>

          <div className="w-full md:w-px h-px md:h-24 bg-white/20" />

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Prefer to Call?</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Speak with our friendly team directly. We're happy to answer any questions and schedule your cleaning over the phone.
            </p>
            <a
              href="tel:4806483441"
              className="mt-5 inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-white" />
              (480) 648-3441
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
