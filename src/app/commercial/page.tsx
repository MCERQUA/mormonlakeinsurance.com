import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  FileCheck,
  Hammer,
  HardHat,
  Phone,
  Shield,
  Truck,
  Umbrella,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import {
  COMMERCIAL_AUDIENCE,
  COMMERCIAL_FAQS,
  COMMERCIAL_INTRO,
  COMMERCIAL_LINES,
  COMMERCIAL_REQUIREMENTS,
} from "@/lib/commercial";

export const metadata: Metadata = {
  title: "Commercial Insurance for Contractors & Businesses",
  description: COMMERCIAL_INTRO.description,
  openGraph: {
    title: `Commercial Lines | ${SITE.name}`,
    description: COMMERCIAL_INTRO.description,
  },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, HardHat, Truck, Hammer, FileCheck, Umbrella, Building2,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function renderBody(content: string): React.ReactNode[] {
  return content
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, i) => (
      <p
        key={i}
        className="font-body text-sm text-muted leading-relaxed my-4"
        dangerouslySetInnerHTML={{
          __html: block.replace(/\n/g, " ").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    ));
}

export default function CommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <section className="bg-forest-green pt-24 pb-16">
          <div className="container-xl">
            <FadeIn>
              <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">
                {COMMERCIAL_INTRO.eyebrow}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-4 max-w-4xl">
                {COMMERCIAL_INTRO.title}
              </h1>
              <p className="font-body text-white/80 text-lg max-w-3xl">{COMMERCIAL_INTRO.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-ember-orange text-white px-8 py-4 rounded-lg font-body font-bold text-base hover:bg-ember-orange-dark transition-colors"
                >
                  Get a Commercial Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg font-body font-bold text-base hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="section-pad bg-warm-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <FadeIn>
                <h2 className="font-heading text-3xl text-bark font-bold mb-5">
                  Written for the Way Work Actually Happens Up Here
                </h2>
                <p className="font-body text-muted text-base leading-relaxed">{COMMERCIAL_INTRO.lede}</p>
              </FadeIn>

              <FadeIn direction="left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COMMERCIAL_AUDIENCE.map((a) => (
                    <div key={a.label} className="bg-white rounded-xl border border-border p-5">
                      <p className="font-heading font-bold text-bark text-sm mb-1.5">{a.label}</p>
                      <p className="font-body text-xs text-muted leading-relaxed">{a.detail}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-xl">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">
                  Commercial Coverage
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                  Seven Lines Most Contractors and Businesses Need
                </h2>
                <p className="font-body text-muted max-w-2xl mx-auto">
                  Some are required by Arizona law or by your contracts. Some only matter once a job or a
                  season goes wrong. We put the whole program together so nothing sits uncovered between policies.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMMERCIAL_LINES.map((line, i) => {
                const Icon = ICONS[line.icon] ?? Shield;
                return (
                  <FadeIn key={line.slug} delay={i * 0.05}>
                    <a
                      href={`#${line.slug}`}
                      className="group block h-full bg-warm-white border border-border rounded-xl p-6 hover:border-forest-green hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-forest-green rounded-xl flex items-center justify-center mb-4 group-hover:bg-ember-orange transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-bark text-base mb-2 leading-snug">{line.title}</h3>
                      <p className="font-body text-sm text-muted leading-relaxed mb-4">{line.short}</p>
                      <div className="flex items-center gap-1 text-forest-green group-hover:text-ember-orange transition-colors">
                        <span className="font-body text-xs font-bold">Coverage details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </a>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-warm-white">
          <div className="container-xl">
            <div className="space-y-16">
              {COMMERCIAL_LINES.map((line) => {
                const Icon = ICONS[line.icon] ?? Shield;
                return (
                  <div key={line.slug} id={line.slug} className="scroll-mt-24">
                    <FadeIn>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 bg-forest-green rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="font-heading text-2xl sm:text-3xl text-bark font-bold">{line.title}</h2>
                          </div>
                          <div className="border-l-4 border-forest-green pl-4">{renderBody(line.body)}</div>
                        </div>

                        <div className="bg-white rounded-2xl border border-border p-6 h-fit">
                          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-muted mb-4">
                            What&apos;s Covered
                          </h3>
                          <ul className="space-y-2.5">
                            {line.coverages.map((c) => (
                              <li key={c} className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-0.5" />
                                <span className="font-body text-sm text-bark leading-snug">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-xl">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">
                  Before the Job Starts
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                  What Your Contracts Will Ask You For
                </h2>
                <p className="font-body text-muted max-w-2xl mx-auto">
                  Most of what holds up a contractor at the start of a job is paperwork, not coverage.
                  These are the four that come up most often in this area.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMMERCIAL_REQUIREMENTS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="bg-warm-white border border-border rounded-xl p-6 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-ember-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-heading font-bold text-bark text-base mb-2">{r.title}</p>
                        <p className="font-body text-sm text-muted leading-relaxed">{r.detail}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-warm-white">
          <div className="container-xl max-w-4xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                  Commercial Insurance Questions
                </h2>
                <p className="font-body text-muted">
                  Straight answers on limits, requirements, and what these policies actually pay for.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {COMMERCIAL_FAQS.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 0.04}>
                  <div className="bg-white rounded-xl border border-border p-6">
                    <p className="font-body font-bold text-bark text-sm mb-2">{faq.q}</p>
                    <p className="font-body text-sm text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest-green py-20">
          <div className="container-xl text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold mb-4">
                Get a Commercial Quote
              </h2>
              <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Tell us the trades you work in, your payroll, your vehicles, and what your contracts require.
                We shop it across carriers that write construction and small business risk in Northern Arizona —
                and we can issue certificates the same day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-ember-orange text-white px-8 py-4 rounded-lg font-body font-bold text-base hover:bg-ember-orange-dark transition-colors"
                >
                  Get a Commercial Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg font-body font-bold text-base hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
