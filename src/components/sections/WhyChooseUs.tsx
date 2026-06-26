import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  { title: "Mountain Cabin Specialists", desc: "We understand wildfire WUI zones, seasonal vacancy clauses, snow load coverage, freeze damage, and bear damage — the risks that standard agents overlook." },
  { title: "Competitive Rates", desc: "Access to carriers that specialize in mountain and rural property insurance — not generalist carriers charging inflated rates for property they don't understand." },
  { title: "Seasonal Vacancy Expertise", desc: "Most Mormon Lake cabins sit vacant for months. We ensure your policy maintains full coverage year-round, not just when someone is at the cabin." },
  { title: "Licensed in All 50 States", desc: "Whether your property is in Arizona or you own cabins across multiple states, we can bind coverage wherever you need it." },
  { title: "Founded in 2005", desc: "Over 20 years serving property owners. We've navigated market cycles, carrier pullbacks, and post-fire coverage disruptions." },
  { title: "Claims Advocacy", desc: "When a claim happens on your cabin or property, we're your advocate — not hiding behind a carrier call center. Direct support from start to finish." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/mormonlake-cabin.jpg"
                alt="Mountain cabin in the Mormon Lake area surrounded by ponderosa pine forest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-transparent" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                Why Mormon Lake Property Owners Choose Us
              </h2>
              <p className="font-body text-muted leading-relaxed mb-8">
                We specialize in mountain and cabin insurance. That means we understand the unique risks of the Mormon Lake area and know which carriers write fair policies for high-elevation forest properties.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-bark text-sm mb-0.5">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
