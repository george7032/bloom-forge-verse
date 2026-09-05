import { Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, Tbc } from "@/components/site/Section";
import { CtaGroup, AdmissionsCta } from "@/components/site/CtaGroup";
import Faq, { type FaqItem } from "@/components/site/Faq";
import { TBC } from "@/lib/school";

export type AcademicPageConfig = {
  name: string;
  image: string;
  intro: string;
  description: string[];
  learningApproach: string[];
  learningAreas: string[];
  support: string[];
  facilities: string[];
  coCurricular: string[];
  faqs: FaqItem[];
};

export default function AcademicPage({ config }: { config: AcademicPageConfig }) {
  return (
    <Layout>
      <PageHero
        eyebrow="Academics"
        title={config.name}
        description={config.intro}
        image={config.image}
        imageAlt={`Learners at ${config.name}, Embakasi Benedicta Academy`}
        crumbs={[{ name: "Academics", to: "/academics" }, { name: config.name }]}
      >
        <CtaGroup compact />
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              About {config.name}
            </h2>
            {config.description.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <h3 className="mt-10 text-xl font-bold text-foreground">Our learning approach</h3>
            <ul className="mt-4 space-y-2">
              {config.learningApproach.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-foreground">Learning areas</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {config.learningAreas.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-foreground">Learner support</h3>
            <ul className="mt-4 space-y-2">
              {config.support.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">At a glance</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-foreground">Grades offered</dt>
                  <dd className="mt-1">
                    <Tbc>{TBC}</Tbc>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Curriculum</dt>
                  <dd className="mt-1">
                    <Tbc>{TBC}</Tbc>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Assessment</dt>
                  <dd className="mt-1">
                    <Tbc>{TBC}</Tbc>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Day or boarding</dt>
                  <dd className="mt-1">
                    <Tbc>{TBC}</Tbc>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-muted-foreground">
                These details will be published as soon as the Academy confirms them.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">Facilities used</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {config.facilities.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                to="/facilities"
                className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                See our facilities
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">Co-curricular activities</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {config.coCurricular.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                to="/school-life"
                className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Explore school life
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="Working together with parents"
          description="Parents are partners in every stage of learning at the Academy."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            {
              t: "Regular communication",
              d: "Updates on progress, learning and school events so no parent is left guessing.",
            },
            {
              t: "Parent meetings",
              d: "Opportunities to meet teachers, review learner progress and agree on next steps.",
            },
            {
              t: "Learning at home",
              d: "Practical guidance on supporting reading, revision and character growth at home.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Faq items={config.faqs} />
      </Section>

      <AdmissionsCta
        title={`Join ${config.name} at Embakasi Benedicta Academy`}
        description="Send an enquiry, book a school visit or begin your application today."
      />
    </Layout>
  );
}
