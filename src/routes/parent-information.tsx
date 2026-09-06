import { createFileRoute } from "@tanstack/react-router";
import { FileText, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, Tbc } from "@/components/site/Section";
import Faq from "@/components/site/Faq";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL, TBC } from "@/lib/school";
import heroImage from "@/assets/hero-7.jpeg";

const title = "Parent Information — Embakasi Benedicta Academy, Utawala";
const description =
  "Term dates, uniform and transport information, notices, newsletters, policies and downloads for parents at Embakasi Benedicta Academy.";

export const Route = createFileRoute("/parent-information")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/parent-information` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/parent-information` }],
  }),
  component: ParentInformationPage,
});

const sections = [
  { t: "School calendar", d: "Key dates for the academic year, including holidays and school events." },
  { t: "Term dates", d: "Opening and closing dates for each term." },
  { t: "Uniform information", d: "Uniform requirements, suppliers and expectations." },
  { t: "Transport information", d: "Transport arrangements, routes and pick-up points." },
  { t: "Parent notices", d: "Current notices and communications from the Academy." },
  { t: "Newsletters", d: "Termly newsletters covering school life and achievements." },
  { t: "School policies", d: "Policies covering behaviour, attendance, safeguarding and more." },
];

const faqs = [
  {
    question: "How does the Academy communicate with parents?",
    answer:
      "Through notices, newsletters, parent meetings and direct contact from the school office. Parents may also call, email or message the Academy at any time.",
  },
  {
    question: "Where can I find term dates?",
    answer:
      "Term dates are published on this page as soon as they are confirmed by the Academy for the current academic year.",
  },
  {
    question: "Who do I contact about my child's progress?",
    answer:
      "Start with your child's class teacher through the school office, who will arrange a meeting or a call.",
  },
  {
    question: "How do I report an absence?",
    answer:
      "Please inform the school office by telephone or WhatsApp as early as possible on the day of absence.",
  },
];

function ParentInformationPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="For Parents"
        title="Parent information"
        description="Everything parents need in one place — dates, notices, policies and downloads."
        image={heroImage}
        imageAlt="Parents and learners at Embakasi Benedicta Academy"
        crumbs={[{ name: "Parent Information" }]}
      />

      <Section>
        <SectionHeading
          title="Information for parents"
          description="Each section below is published as soon as the Academy confirms the details."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <div key={s.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <p className="mt-4">
                <Tbc>{TBC}</Tbc>
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="Downloadable documents"
          description="Forms, calendars and policy documents will be listed here with a title, category, date, description and download button."
        />
        <div className="mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <FileText aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="text-base text-muted-foreground">No documents have been published yet.</p>
          <p className="mt-4">
            <Tbc>{TBC}</Tbc>
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 text-center">
          <Lock aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Parent portal</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A secure parent portal for progress reports and school documents is planned. Access will
            be given only to registered parents once the Academy confirms the arrangement.
          </p>
          <p className="mt-4">
            <Tbc>{TBC}</Tbc>
          </p>
        </div>
      </Section>

      <Section muted>
        <Faq items={faqs} title="Parent questions" />
      </Section>

      <AdmissionsCta title="Need something you cannot find?" description="Contact the school office and we will help." />
    </Layout>
  );
}
