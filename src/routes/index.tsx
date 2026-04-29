import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, ShieldCheck, Clock, Sparkles, Star, Quote, Stethoscope, Activity, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero-care.jpg";
import about from "@/assets/about-care.jpg";
import nursing from "@/assets/service-nursing.jpg";
import caregiving from "@/assets/service-caregiving.jpg";
import physio from "@/assets/service-physio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeVita Health Services — Premium Homecare & Nursing" },
      { name: "description", content: "Compassionate, expert homecare in your home. Skilled nursing, caregiving, and physiotherapy by PrimeVita Health Services." },
      { property: "og:title", content: "PrimeVita Health Services" },
      { property: "og:description", content: "Premium homecare delivered with compassion and clinical excellence." },
    ],
  }),
  component: Home,
});

const services = [
  { title: "Skilled Nursing", desc: "Licensed nurses delivering medical-grade care at home — wound care, IV, monitoring.", img: nursing, icon: Stethoscope },
  { title: "Personal Caregiving", desc: "Daily living support, mobility assistance, and companionship with dignity.", img: caregiving, icon: Users },
  { title: "Physiotherapy", desc: "Tailored rehabilitation that restores strength, mobility, and independence.", img: physio, icon: Activity },
];

const testimonials = [
  { name: "Adaeze O.", role: "Daughter of patient", text: "PrimeVita transformed my mother's recovery. Their nurses are warm, punctual, and deeply skilled." },
  { name: "Mr. Okafor", role: "Client, 72", text: "I feel cared for like family. The team listens, plans, and shows up — every single day." },
  { name: "Dr. Hannah I.", role: "Referring physician", text: "Reliable clinical standards and superb communication. I trust PrimeVita with my patients." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground border border-border">
              <Sparkles className="h-3.5 w-3.5" /> Trusted by 500+ families
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-deep text-balance leading-[1.05]">
              Care that feels like <em className="text-primary not-italic">family</em>, delivered with clinical precision.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              PrimeVita Health Services brings world-class homecare to your doorstep — skilled nurses, devoted caregivers, and certified physiotherapists, all under one trusted roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-glow hover:opacity-95 transition">
                Book a Free Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <Stat n="15+" label="Years of care" />
              <div className="h-10 w-px bg-border" />
              <Stat n="98%" label="Family satisfaction" />
              <div className="h-10 w-px bg-border" />
              <Stat n="24/7" label="On-call support" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-[3rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow border border-border/50">
              <img src={hero} alt="PrimeVita nurse caring for an elderly woman at home" width={1280} height={1280} className="w-full h-[560px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft p-4 border border-border flex items-center gap-3 max-w-[260px]">
              <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-deep">Live monitoring</div>
                <div className="text-xs text-muted-foreground">Real-time vitals & care notes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Licensed & Vetted", desc: "Every caregiver is background-checked, certified, and continually trained." },
            { icon: Clock, title: "On Your Schedule", desc: "From a few hours to round-the-clock — care plans that flex with your life." },
            { icon: HeartPulse, title: "Whole-Person Care", desc: "Medical, emotional, and social support built around the person, not the diagnosis." },
          ].map((v, i) => (
            <div key={i} className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-glow transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center text-primary mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-deep mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-deep max-w-2xl text-balance">A complete circle of care, designed around your loved one.</h2>
            </div>
            <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article key={i} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-card/95 backdrop-blur grid place-items-center text-primary shadow-soft">
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-glow border border-border/50">
              <img src={about} alt="PrimeVita care team with a patient" loading="lazy" width={1280} height={960} className="w-full h-[480px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-soft p-5 border border-border w-56">
              <div className="text-3xl font-display font-semibold text-primary">15+</div>
              <div className="text-xs text-muted-foreground mt-1">Years caring for families across Nigeria & beyond</div>
            </div>
          </div>
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">About PrimeVita</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-deep text-balance">Where compassion is a clinical standard.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We believe great care begins with great listening. Our multidisciplinary team — nurses, caregivers, physiotherapists, and care managers — designs every plan around the person, not a checklist. The result: better outcomes, calmer families, and homes that feel like sanctuaries again.
            </p>
            <ul className="mt-6 space-y-3">
              {["Personalized care plans reviewed weekly","Direct line to a dedicated care manager","Transparent pricing — no hidden fees"].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">Voices of Our Families</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-deep text-balance">Trusted in homes. Loved by families.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-card rounded-3xl p-7 border border-border shadow-soft relative">
                <Quote className="absolute -top-4 left-6 h-8 w-8 text-primary bg-background p-1.5 rounded-full" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-deep">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 md:p-16 text-primary-foreground shadow-glow">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-balance">Ready to bring care home?</h2>
                <p className="mt-4 text-primary-foreground/85 max-w-lg leading-relaxed">Talk to a care manager today. Free 30-minute consultation, no commitment.</p>
              </div>
              <div className="flex md:justify-end gap-3 flex-wrap">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3.5 text-sm font-semibold hover:opacity-95 transition">
                  Schedule Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+18005551234" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-display font-semibold text-deep">{n}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
