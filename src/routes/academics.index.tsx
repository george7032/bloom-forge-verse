import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { academicLevels, SITE_URL } from "@/lib/school";
import heroImage from "@/assets/upper.jpeg";
import kindergartenImg from "@/assets/kindergarten.jpeg";
import primaryImg from "@/assets/upper.jpeg";
import juniorImg from "@/assets/jss.jpeg";
import seniorImg from "@/assets/hero-6.jpeg";

const title = "Academics — Kindergarten to Senior School | Embakasi Benedicta Academy";
const description =
  "Explore Kindergarten, Primary School, Junior School and Senior School at Embakasi Benedicta Academy in Utawala, Nairobi.";

export const Route = createFileRoute("/academics/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics` }],
  }),
  component: AcademicsPage,
});

const images: Record<string, string> = {
  kindergarten: kindergartenImg,
  primary: primaryImg,
  junior: juniorImg,
  senior: seniorImg,
};

function AcademicsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Academics"
        title="Learning from Kindergarten to Senior School"
        description="Every stage of our academic programme is built around strong teaching, close learner support and steady character development."
        image={heroImage}
        imageAlt="Learners in class at Embakasi Benedicta Academy"
        crumbs={[{ name: "Academics" }]}
      />

      <Section>
        <SectionHeading
          title="Our academic levels"
          description="Choose a level to see how learning is organised, supported and assessed."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {academicLevels.map((level) => (
            <article key={level.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={images[level.slug]}
                  alt={`${level.name} learners at Embakasi Benedicta Academy`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{level.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{level.summary}</p>
                <p className="mt-3 text-sm font-medium text-primary">Learning focus: {level.focus}</p>
                <Link
                  to={level.to}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  Learn more
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <AdmissionsCta />
    </Layout>
  );
}
