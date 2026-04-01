import { Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Link } from 'wouter';
import { dropdownServices } from '@/data/services';
import { metros } from '@/data/metros';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-background/10">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-background/80">Insured & Bonded</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-background/80">200% Happiness Guarantee</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-background/80">Flexible Scheduling</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-background/80">Background-Checked Teams</span>
          </div>
        </div>

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-1 space-y-4">
            <img
              src={`${base}/images/logo-white.png`}
              alt="Queen of Maids"
              className="h-7 w-auto"
            />
            <p className="text-background/60 text-sm leading-relaxed">
              Professional house cleaning across four major metro areas. We bring the sparkle so you can enjoy your home.
            </p>
            <div className="space-y-3 pt-2">
              <a href="tel:4806483441" className="flex items-center gap-2.5 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (480) 648-3441
              </a>
              <a href="mailto:contact@queenofmaids.com" className="flex items-center gap-2.5 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                contact@queenofmaids.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5">
              {dropdownServices.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`${base}/services/${s.slug}`}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Service Areas</h4>
            <ul className="space-y-4">
              {metros.map(metro => (
                <li key={metro.slug}>
                  <Link
                    href={`${base}/service-areas#metro-${metro.slug}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    {metro.name}, {metro.stateAbbr}
                  </Link>
                  <p className="text-background/40 text-xs mt-1 ml-5.5 pl-[22px]">
                    {metro.cities.slice(0, 4).map(c => c.name).join(', ')}
                    {metro.cities.length > 4 && ` +${metro.cities.length - 4} more`}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`${base}/memberships`} className="text-background/60 hover:text-primary transition-colors text-sm">
                  Memberships
                </Link>
              </li>
              <li>
                <Link href={`${base}/service-areas`} className="text-background/60 hover:text-primary transition-colors text-sm">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href={`${base}/reviews`} className="text-background/60 hover:text-primary transition-colors text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href={`${base}/services`} className="text-background/60 hover:text-primary transition-colors text-sm">
                  All Services
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase mt-8">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`${base}/memberships#faq`} className="text-background/60 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`${base}/memberships#comparison`} className="text-background/60 hover:text-primary transition-colors text-sm">
                  Compare Memberships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Get Started</h4>
            <p className="text-background/60 text-sm mb-4">
              Ready for a cleaner home? Get a free, no-obligation quote today.
            </p>
            <a
              href="tel:4806483441"
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Call for a Free Quote
            </a>
            <Link
              href={`${base}/memberships`}
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl border border-background/20 text-background/80 font-semibold text-sm hover:border-primary hover:text-primary transition-colors mt-3"
            >
              View Memberships
            </Link>
          </div>

        </div>

        <div className="py-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">
            &copy; {new Date().getFullYear()} Queen of Maids. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href={`${base}/privacy`} className="text-background/40 text-xs hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href={`${base}/terms`} className="text-background/40 text-xs hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
