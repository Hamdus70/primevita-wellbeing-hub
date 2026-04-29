import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/primevita-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
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
            {nav.map(n => (
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
            <div className="flex flex-col px-4 py-3 gap-2">
              {nav.map(n => (
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
