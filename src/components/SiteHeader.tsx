import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/primevita-logo.png";

type NavItem = { to: "/" | "/about" | "/services" | "/contact"; label: string; hasDropdown?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { hash: "skilled-nursing", label: "Skilled Nursing" },
  { hash: "personal-caregiving", label: "Personal Caregiving" },
  { hash: "physiotherapy", label: "Physiotherapy" },
  { hash: "post-operative", label: "Post-Operative Care" },
  { hash: "chronic-care", label: "Chronic Disease Management" },
  { hash: "dementia-care", label: "Dementia & Alzheimer's" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-deep text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <span className="hidden sm:inline tracking-wide uppercase">PrimeVita Health Services · Compassion meets expertise</span>
          <a href="tel:+18005551234" className="flex items-center gap-2 font-medium hover:opacity-80">
            <Phone className="h-3.5 w-3.5" /> +1 (800) 555-1234
          </a>
        </div>
      </div>
      <div className="bg-background/80 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PrimeVita Health Services logo" width={44} height={44} className="h-11 w-11" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-deep">PrimeVita</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Health Services</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map(n => n.hasDropdown ? (
              <div key={n.to} className="relative group">
                <Link to={n.to} className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}>
                  {n.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-72 bg-card border border-border rounded-2xl shadow-glow overflow-hidden">
                    <div className="bg-gradient-primary px-5 py-3">
                      <p className="text-primary-foreground text-xs font-semibold uppercase tracking-widest">Caregiver Services</p>
                    </div>
                    <ul className="py-2">
                      {serviceLinks.map(s => (
                        <li key={s.hash}>
                          <Link to="/services" hash={s.hash} className="block px-5 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors">
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow">
              Book a Visit
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="flex flex-col px-4 py-3 gap-1">
              {nav.map(n => n.hasDropdown ? (
                <div key={n.to}>
                  <button onClick={() => setMobileServicesOpen(v => !v)} className="w-full flex items-center justify-between py-2 text-foreground/80">
                    {n.label} <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      <Link to="/services" onClick={() => setOpen(false)} className="py-1.5 text-sm text-primary font-medium">All services</Link>
                      {serviceLinks.map(s => (
                        <Link key={s.hash} to="/services" hash={s.hash} onClick={() => setOpen(false)} className="py-1.5 text-sm text-foreground/70">{s.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80">{n.label}</Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">Book a Visit</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
