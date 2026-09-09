import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, FileText, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, Tbc } from "@/components/site/Section";
import Faq from "@/components/site/Faq";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL, TBC } from "@/lib/school";
import heroImage from "@/assets/hero-9.jpeg";

const title = "News & Events — Embakasi Benedicta Academy, Utawala";
const description =
  "School news, announcements, term updates, achievements and upcoming events at Embakasi Benedicta Academy in Utawala.";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/news` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/news` }],
  }),
  component: NewsPage,
});

const categories = [
  "School News",
  "Announcements",
  "Activities",
  "Achievements",
  "Term Updates",
  "Events",
  "Educational Articles",
  "Photo Galleries",
];

const parentSections = [
  { t: "School calendar", d: "Key dates for the academic year, including holidays and school events." },
  { t: "Term dates", d: "Opening and closing dates for each term." },
  { t: "Uniform information", d: "Uniform requirements, suppliers and expectations." },
  { t: "Transport information", d: "Transport arrangements, routes and pick-up points." },
  { t: "Parent notices", d: "Current notices and communications from the Academy." },
  { t: "Newsletters", d: "Termly newsletters covering school life and achievements." },
  { t: "School policies", d: "Policies covering behaviour, attendance, safeguarding and more." },
];

const parentFaqs = [
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

function NewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Community"
        title="News and events"
        description="Current news, announcements and upcoming events from the Academy."
        image={heroImage}
        imageAlt="A school event at Embakasi Benedicta Academy"
        crumbs={[{ name: "News & Events" }]}
      />

      <Section>
        <SectionHeading
          title="Latest news and announcements"
          description="This page publishes only current items. Past items move to the news archive."
        />
        <div className="mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <CalendarDays aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="text-base text-muted-foreground">
            There are no current news items published yet. News, announcements and upcoming events
            will appear here as soon as the Academy supplies them.
          </p>
          <p className="mt-4">
            <Tbc>{TBC}</Tbc>
          </p>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="Categories"
          description="Every item published carries a title, date, category, featured image and, where relevant, an event date and photo gallery."
        />
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          title="News archive"
          description="Previous school news and past events are kept in the archive so that the homepage always shows what is current."
        />
        <div className="mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-base text-muted-foreground">The archive is currently empty.</p>
          <p className="mt-4">
            <Tbc>{TBC}</Tbc>
          </p>
        </div>
      </Section>

      <Section muted ariaLabel="Parent information">
        <SectionHeading
          eyebrow="For Parents"
          title="Parent information"
          description="Dates, notices, uniform and transport details and school policies, published as soon as the Academy confirms them."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {parentSections.map((s) => (
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

      <Section>
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

      <Section muted>
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

      <Section>
        <Faq items={parentFaqs} title="Parent questions" />
      </Section>

      <AdmissionsCta title="Want to be part of our community?" description="Enquire today or book a visit to the Academy." />
    </Layout>
  );
}
