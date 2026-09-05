import { createFileRoute } from "@tanstack/react-router";
import AcademicPage from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
import image from "@/assets/hero-6.jpeg";

const title = "Senior School in Utawala — Embakasi Benedicta Academy";
const description =
  "Senior School in Utawala focused on academic rigour, specialisation, career guidance and preparation for further study.";

export const Route = createFileRoute("/academics/senior")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/senior` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/senior` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config = {
  name: "Senior School",
  image,
  intro:
    "A mature, future-focused stage preparing learners for further study and the world of work.",
  description: [
    "Senior School learners work with greater independence and higher expectations. Teaching is rigorous, feedback is specific, and learners are supported to set and meet ambitious goals.",
    "Alongside academic work, learners receive guidance on pathways, careers and the choices that will shape their next steps.",
  ],
  learningApproach: [
    "Rigorous subject teaching with regular, specific feedback",
    "Structured revision, examination technique and study discipline",
    "Independent research and extended written work",
    "Career guidance and pathway counselling",
    "Leadership, mentorship and service within the school community",
  ],
  learningAreas: [
    "Languages",
    "Mathematics",
    "Sciences",
    "Humanities",
    "Technical and applied subjects",
    "Creative arts and sports",
  ],
  support: [
    "One-to-one academic mentorship",
    "Guidance and counselling",
    "Careers and pathway advice",
    "Progress reviews with learners and parents",
  ],
  facilities: ["Senior School classrooms", "Library and study spaces", "Sports grounds", "Campus grounds"],
  coCurricular: ["Sports", "Debate and public speaking", "Leadership roles", "Competitions", "Community service"],
  faqs: [
    {
      question: "Which Senior School pathways are offered?",
      answer:
        "The pathways and subject combinations available are confirmed by the Academy office. Please contact admissions for current details before making decisions.",
    },
    {
      question: "How are learners supported academically?",
      answer:
        "Through specific feedback, structured revision, mentorship and regular progress reviews with learners and parents.",
    },
    {
      question: "Is career guidance provided?",
      answer:
        "Yes. Learners receive guidance on subject choices, pathways and careers as they plan their next steps.",
    },
    {
      question: "Is boarding available for Senior School?",
      answer:
        "Boarding availability by level is confirmed by the Academy. Please see the Boarding page and speak with admissions.",
    },
  ],
};
