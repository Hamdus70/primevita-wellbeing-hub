import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Heart, Award, Users, Sparkles, ArrowRight } from "lucide-react";
import about from "@/assets/about-care.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PrimeVita Health Services" },
      { name: "description", content: "PrimeVita combines clinical excellence with deep compassion. Meet the team redefining homecare." },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { icon: Heart, title: "Compassion", desc: "We treat every patient as if they were our own family." },
    { icon: Award, title: "Excellence", desc: "Clinical rigor, continual training, and measurable outcomes." },
    { icon: Users, title: "Partnership", desc: "We work with families, doctors, and you — never in isolation." },
    { icon: Sparkles, title: "Dignity", desc: "Every moment of care preserves choice, privacy, and respect." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Our Story</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-deep text-balance">A new standard for homecare.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded by clinicians and caregivers who believed homecare deserved better, PrimeVita exists to make exceptional care accessible — without ever losing the human touch.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-glow border border-border/50">
            <img src={about} alt="The PrimeVita team" loading="lazy" width={1280} height={960} className="w-full h-[520px] object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-deep text-balance">Care, reimagined from the ground up.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We started PrimeVita after watching too many families navigate fragmented, impersonal care. So we rebuilt the model: small care teams, dedicated managers, and a single integrated plan covering medical, emotional, and daily living needs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we serve hundreds of families with a team of nurses, caregivers, and therapists trained to a single standard — kindness, competence, consistency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-semibold text-deep text-center text-balance">What we stand for</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 border border-border shadow-soft text-center">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center mx-auto mb-4">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-semibold text-deep text-balance">Let's care for them, together.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-glow hover:opacity-95 transition">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
