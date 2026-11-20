import Link from "next/link";
import { ArrowRight, HardHat, Shield } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const TEASER_CARDS = [
  {
    icon: Shield,
    title: "General Liability",
    copy: "Third-party injury, damage to a client's property, and completed-operations claims that arrive months after the job is finished. The policy your contracts ask for.",
    href: "/commercial#general-liability",
    cta: "Coverage details",
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    copy: "Required by Arizona law for any employer with employees — including seasonal and part-time crews. Class-code review and subcontractor certificate guidance included.",
    href: "/commercial#workers-compensation",
    cta: "Coverage details",
  },
] as const;

export function CommercialTeaser() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-xl">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">
              For Businesses
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
              Commercial Lines for Contractors &amp; Businesses
            </h2>
            <p className="font-body text-muted max-w-2xl mx-auto">
              Roofers, HVAC and septic crews, builders, landscapers, lodges, shops, and outfitters working
              in Mormon Lake and Coconino County — general liability, workers&apos; comp, commercial auto,
              builder&apos;s risk, bonds, umbrella, and business owner&apos;s policies.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEASER_CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.05}>
              <Link
                href={card.href}
                className="group block h-full bg-white border border-border rounded-xl p-6 hover:border-forest-green hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-forest-green rounded-xl flex items-center justify-center mb-4 group-hover:bg-ember-orange transition-colors">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-bark text-base mb-2 leading-snug">{card.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-4">{card.copy}</p>
                <div className="flex items-center gap-1 text-forest-green group-hover:text-ember-orange transition-colors">
                  <span className="font-body text-xs font-bold">{card.cta}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </FadeIn>
          ))}

          <FadeIn delay={0.1}>
            <Link
              href="/commercial"
              className="group flex h-full flex-col justify-between bg-forest-green rounded-xl p-6 hover:bg-forest-green-dark transition-colors"
            >
              <div>
                <h3 className="font-heading font-bold text-white text-base mb-2 leading-snug">
                  All Commercial Coverage
                </h3>
                <p className="font-body text-sm text-white/75 leading-relaxed mb-4">
                  Commercial auto, builder&apos;s risk and tools coverage, Arizona ROC and performance bonds,
                  commercial umbrella, and business owner&apos;s policies — plus what your contracts will
                  require before the job starts.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-ember-orange group-hover:text-ember-orange-light transition-colors">
                <span className="font-body text-xs font-bold">View all commercial lines</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
