import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-4">
            <h3 className="text-2xl font-sans font-bold text-background">PuraClean</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Professional house cleaning for the Phoenix metro area. We bring the sparkle so you can enjoy your home.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById('memberships')?.scrollIntoView({ behavior: 'smooth' })} className="text-background/70 hover:text-secondary transition-colors text-sm">Memberships</button></li>
              <li><button onClick={() => document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' })} className="text-background/70 hover:text-secondary transition-colors text-sm">Service Areas</button></li>
              <li><button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="text-background/70 hover:text-secondary transition-colors text-sm">Reviews</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6 tracking-wider uppercase text-sm">Service Area</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Phoenix Metro Area<br/>Scottsdale, Tempe, Mesa, Chandler & more</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6 tracking-wider uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:6025551234" className="flex items-center gap-3 text-sm text-background/70 hover:text-secondary transition-colors group">
                  <Phone className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  (602) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@puraclean.com" className="flex items-center gap-3 text-sm text-background/70 hover:text-secondary transition-colors group">
                  <Mail className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  hello@puraclean.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} PuraClean. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-background/50 text-sm cursor-pointer hover:text-secondary transition-colors">Privacy Policy</span>
            <span className="text-background/50 text-sm cursor-pointer hover:text-secondary transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
