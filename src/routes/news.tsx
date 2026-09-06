import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, Tbc } from "@/components/site/Section";
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

      <AdmissionsCta title="Want to be part of our community?" description="Enquire today or book a visit to the Academy." />
    </Layout>
  );
}
