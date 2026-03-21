import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-sans font-bold text-background">Pura Drip</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Premium mobile IV therapy delivered directly to your door. Elevate your health, recovery, and wellness with our customized treatments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-background/70 hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link href="/treatments" className="text-background/70 hover:text-secondary transition-colors text-sm">IV Treatments</Link></li>
              <li><Link href="/memberships" className="text-background/70 hover:text-secondary transition-colors text-sm">Memberships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6 tracking-wider uppercase text-sm">Service Areas</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Arizona<br/>Phoenix, Scottsdale & Surrounding Areas</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Nevada<br/>Las Vegas Metropolitan Area</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>New York<br/>NYC & Boroughs</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6 tracking-wider uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:8554837471" className="flex items-center gap-3 text-sm text-background/70 hover:text-secondary transition-colors group">
                  <Phone className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  (855) 483-7471
                </a>
              </li>
              <li>
                <a href="mailto:hello@puradrip.com" className="flex items-center gap-3 text-sm text-background/70 hover:text-secondary transition-colors group">
                  <Mail className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  hello@puradrip.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Pura Drip. All rights reserved.
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
