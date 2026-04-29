import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Stethoscope, Users, Activity, Heart, Pill, Brain, ArrowRight, Check } from "lucide-react";
import nursing from "@/assets/service-nursing.jpg";
import caregiving from "@/assets/service-caregiving.jpg";
import physio from "@/assets/service-physio.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PrimeVita Health Services" },
      { name: "description", content: "Skilled nursing, caregiving, physiotherapy and more, delivered in your home with clinical excellence." },
    ],
  }),
  component: Services,
});

const services = [
  { img: nursing, icon: Stethoscope, title: "Skilled Nursing", desc: "Licensed RNs and LPNs delivering hospital-grade care at home.", features: ["Wound & post-op care","IV therapy & infusions","Vital monitoring & charting","Medication management"] },
  { img: caregiving, icon: Users, title: "Personal Caregiving", desc: "Daily living support that preserves dignity and independence.", features: ["Bathing, grooming & dressing","Mobility & transfer assistance","Meal prep & nutrition","Companionship"] },
  { img: physio, icon: Activity, title: "Physiotherapy", desc: "Restorative therapy programs designed by certified specialists.", features: ["Post-stroke rehabilitation","Mobility & strength training","Pain management","Fall prevention"] },
];

const more = [
  { icon: Heart, title: "Post-Operative Care", desc: "Smooth recovery at home with monitored healing protocols." },
  { icon: Pill, title: "Chronic Disease Management", desc: "Diabetes, hypertension, and long-term care plans." },
  { icon: Brain, title: "Dementia & Alzheimer's", desc: "Specialized memory care with patience and structure." },
];

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Services</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-deep text-balance">Care, in every form your family needs.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From skilled medical care to gentle companionship — one trusted team, one integrated plan.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 space-y-20">
          {services.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-[2rem] overflow-hidden shadow-soft border border-border/50">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-[420px] object-cover" />
              </div>
              <div>
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="text-4xl font-semibold text-deep text-balance">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.features.map((f, k) => (
                    <li key={k} className="flex items-center gap-2 text-sm text-foreground/85">
                      <span className="h-6 w-6 rounded-full bg-secondary text-primary grid place-items-center"><Check className="h-3.5 w-3.5" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-deep text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
                  Request this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-semibold text-deep text-center text-balance">Specialized programs</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {more.map((m, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-glow transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-secondary text-primary grid place-items-center mb-4">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-deep">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
