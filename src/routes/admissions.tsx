import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, Tbc } from "@/components/site/Section";
import { CtaGroup } from "@/components/site/CtaGroup";
import Faq from "@/components/site/Faq";
import EnquiryForm from "@/components/site/forms/EnquiryForm";
import VisitForm from "@/components/site/forms/VisitForm";
import ContactInfo from "@/components/site/ContactInfo";
import { school, SITE_URL, TBC } from "@/lib/school";
import heroImage from "@/assets/upper.jpeg";

const title = "Admissions — Embakasi Benedicta Academy, Utawala";
const description =
  "Enrol your child at Embakasi Benedicta Academy in Utawala. Follow our five-step admissions journey: enquire, visit, apply, assessment and enrolment.";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/admissions` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/admissions` }],
  }),
  component: AdmissionsPage,
});

const steps = [
  {
    n: "Step 1",
    t: "Make an enquiry",
    d: "Send us the enquiry form below, call or message us on WhatsApp. Our admissions team will respond with the information you need.",
  },
  {
    n: "Step 2",
    t: "Book a school visit",
    d: "Come and see the Academy for yourself. Meet the teachers, walk through the classrooms and ask every question you have.",
  },
  {
    n: "Step 3",
    t: "Submit an application",
    d: "Complete the application form and provide the required documents for your child's level.",
  },
  {
    n: "Step 4",
    t: "Placement assessment",
    d: "Learners sit a short placement assessment so that we can place them at the right level and plan the support they need.",
  },
  {
    n: "Step 5",
    t: "Enrolment",
    d: "Once a place is offered and accepted, we complete enrolment and welcome your family to the Academy.",
  },
];

const faqs = [
  {
    question: "When can I apply?",
    answer:
      "Enquiries are welcome throughout the year. Intake dates and available places for each term are confirmed by the admissions office — please contact us for the current position.",
  },
  {
    question: "What documents are required?",
    answer:
      "The exact document list for each level is confirmed by the admissions office. Parents are generally asked to provide the learner's birth certificate, a previous school report where applicable, and a parent or guardian identification document.",
  },
  {
    question: "Is there an assessment?",
    answer:
      "Yes. A short placement assessment helps us understand your child's current level so that teaching and support are matched to their needs. It is not an examination to pass or fail.",
  },
  {
    question: "What are the fees?",
    answer:
      "Fee information is issued directly by the Academy office on request. We do not publish fees on the website until they are confirmed for the current academic year.",
  },
  {
    question: "Do you offer boarding?",
    answer:
      "Boarding availability and eligibility are confirmed by the Academy. Please see the Boarding page and contact the admissions office for current details.",
  },
];

function AdmissionsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Admissions"
        title="Join the Embakasi Benedicta Academy family"
        description="A clear, supportive admissions journey from your first enquiry to your child's first day."
        image={heroImage}
        imageAlt="Learners at Embakasi Benedicta Academy"
        crumbs={[{ name: "Admissions" }]}
      >
        <CtaGroup />
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="How to join"
          title="The admissions journey"
          description="Five straightforward steps, with our admissions team beside you at every stage."
        />
        <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{s.n}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-foreground">Entry requirements</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Entry requirements for each level are set by the Academy.
            </p>
            <p className="mt-3">
              <Tbc>{TBC}</Tbc>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Required documents</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Learner's birth certificate</li>
              <li>Most recent school report, where applicable</li>
              <li>Parent or guardian identification document</li>
              <li>Passport-size photographs</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              The final list is confirmed by the admissions office: <Tbc>{TBC}</Tbc>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Fees and prospectus</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fee structures and the school prospectus are issued on request by the Academy office.
            </p>
            <p className="mt-3">
              <Tbc>{TBC}</Tbc>
            </p>
          </div>
        </div>
      </Section>

      <Section id="enquiry">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Step 1"
              title="Make an admissions enquiry"
              description="Tell us about your child and we will get back to you with the information you need."
            />
            <EnquiryForm />
          </div>
          <div id="visit">
            <SectionHeading
              align="left"
              eyebrow="Step 2"
              title="Book a school visit"
              description="Choose a date and time that suits you. We will confirm your visit by telephone or email."
            />
            <VisitForm />
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Speak with admissions</h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk? Call, message or email the Academy directly — we are here to help.
            </p>
            <CtaGroup variant="dark" className="mt-6" compact />
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <ContactInfo />
            <p className="sr-only">{school.name} admissions contact information</p>
          </div>
        </div>
      </Section>

      <Section>
        <Faq items={faqs} title="Admissions questions" />
      </Section>
    </Layout>
  );
}
