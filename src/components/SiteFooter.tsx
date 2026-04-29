import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/primevita-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="PrimeVita logo" width={40} height={40} className="h-10 w-10 bg-background/10 rounded-lg p-1" />
            <span className="font-display text-xl font-semibold">PrimeVita</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">Premium homecare with the warmth of family and the precision of medicine.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-glow/30 grid place-items-center transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-glow">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-primary-glow">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-glow">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-glow">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Skilled Nursing</li>
            <li>Personal Caregiving</li>
            <li>Physiotherapy</li>
            <li>Companion Care</li>
            <li>Post-Operative Care</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-glow">Get in touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 12 Wellness Avenue, Lagos, Nigeria</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +1 (800) 555-1234</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@primevita.health</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} PrimeVita Health Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
