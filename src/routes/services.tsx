import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Stethoscope, Users, Activity, Heart, Pill, Brain, ArrowRight } from "lucide-react";
import nursing from "@/assets/service-nursing.jpg";
import caregiving from "@/assets/service-caregiving.jpg";
import physio from "@/assets/service-physio.jpg";
import hero from "@/assets/hero-care.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Caregiver Services — PrimeVita Health Services" },
      { name: "description", content: "Skilled nursing, personal caregiving, physiotherapy and specialised home-care programs delivered with clinical excellence." },
    ],
  }),
  component: Services,
});

type Service = {
  id: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  intro: string;
  dutiesHeading: string;
  duties: string[];
  closing?: string;
};

const services: Service[] = [
  {
    id: "skilled-nursing",
    img: nursing,
    icon: Stethoscope,
    title: "Skilled Nursing",
    intro: "This service is provided by Registered Nurses who are specially trained in domiciliary (home-based) care for those who require on-going medical care upon their discharge from the hospital.",
    dutiesHeading: "The nurses perform the following duties:",
    duties: [
      "Regularly monitor the vital signs of the client and be alert to any change in condition so as to act promptly and make necessary intervention",
      "Administer prescribed medication; observe desired effect, adverse reactions and side effects",
      "Assist with all Activities of Daily Living (ADL) like feeding, bathing, toileting, moving & handling",
      "Provide companionship and all other activities geared towards ensuring clients' comfort and dignity of life",
    ],
  },
  {
    id: "personal-caregiving",
    img: caregiving,
    icon: Users,
    title: "Carers — Personal Aides",
    intro: "This service is provided by personnel who have been trained to provide support for older adults, helping them maintain dignity and independence in the comfort of their own home.",
    dutiesHeading: "The carers / personal aides perform the following duties:",
    duties: [
      "Regularly monitor the vital signs of the client",
      "Assist with all Activities of Daily Living (ADL) like feeding, bathing, toileting, moving & handling, clients' laundry etc",
      "Accompanying clients during hospital visits",
      "Meal preparation",
      "Administering prescribed medication",
      "Provide companionship and ensure the general wellbeing of the clients",
    ],
  },
  {
    id: "physiotherapy",
    img: physio,
    icon: Activity,
    title: "Physiotherapy",
    intro: "Restorative, in-home therapy programs designed by certified physiotherapists to rebuild strength, mobility and confidence after illness, surgery or injury.",
    dutiesHeading: "Our physiotherapists deliver:",
    duties: [
      "Post-stroke and neurological rehabilitation",
      "Mobility, balance and strength training programs",
      "Pain management and post-operative recovery",
      "Fall prevention assessments and home exercise plans",
    ],
    closing: "Every plan is personalised, measurable and reviewed regularly to ensure steady progress.",
  },
];

const more = [
  { id: "post-operative", icon: Heart, title: "Post-Operative Care", desc: "Smooth recovery at home with monitored healing protocols and wound care." },
  { id: "chronic-care", icon: Pill, title: "Chronic Disease Management", desc: "Diabetes, hypertension and long-term care plans tailored to each client." },
  { id: "dementia-care", icon: Brain, title: "Dementia & Alzheimer's", desc: "Specialised memory care delivered with patience, structure and warmth." },
];

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero with diagonal slash inspired by reference */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          <img src={hero} alt="PrimeVita caregiver with client" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/40 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <p className="text-primary-glow text-sm font-semibold uppercase tracking-widest">Caregiver Services</p>
              <h1 className="mt-3 font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-balance">Care, in every form your family needs.</h1>
            </div>
          </div>
          {/* Diagonal green band */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-primary"
            style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0% 100%)" }}
          />
        </div>
      </section>

      {/* Service detail sections — image left, bullets right */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-32">
              <header className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex h-12 w-12 rounded-2xl bg-secondary text-primary items-center justify-center mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-deep text-balance">{s.title}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.intro}</p>
              </header>

              <div className={`relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Decorative soft blob behind image */}
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-soft blur-2xl opacity-70" />
                  <div className="rounded-[2rem] overflow-hidden shadow-soft border border-border/50">
                    <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-[420px] object-cover" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-deep">{s.dutiesHeading}</h3>
                  <ul className="mt-6 space-y-3">
                    {s.duties.map((d, k) => (
                      <li key={k} className="flex gap-3 text-foreground/85 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {s.closing && <p className="mt-6 text-muted-foreground leading-relaxed">{s.closing}</p>}
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
                  >
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Specialised programs */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">Specialised programs</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-deep text-balance">Care for life's most demanding chapters</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {more.map((m) => (
              <div key={m.id} id={m.id} className="scroll-mt-32 bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-glow transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center mb-4">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-deep">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
