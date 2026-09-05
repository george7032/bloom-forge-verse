import { createFileRoute } from "@tanstack/react-router";
import AcademicPage from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
import image from "@/assets/jss.jpeg";

const title = "Junior School in Utawala — Embakasi Benedicta Academy";
const description =
  "Junior School in Utawala where learners grow into independent thinkers through science, technology, projects and leadership.";

export const Route = createFileRoute("/academics/junior")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/junior` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/junior` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config = {
  name: "Junior School",
  image,
  intro:
    "A stage of growing independence, deeper subject knowledge and real responsibility.",
  description: [
    "Junior School learners take a significant step forward. They study subjects in greater depth, manage longer pieces of work and begin to take charge of their own learning.",
    "Teachers combine strong subject teaching with guidance on study skills, organisation and personal responsibility, so that learners are ready for the demands of Senior School.",
  ],
  learningApproach: [
    "Subject specialist teaching with clear learning objectives",
    "Project work that develops research, planning and presentation",
    "Practical science and technology activities",
    "Study skills, revision technique and time management",
    "Leadership opportunities and service within the school",
  ],
  learningAreas: [
    "English",
    "Kiswahili",
    "Mathematics",
    "Integrated science",
    "Social studies",
    "Pre-technical and technical studies",
    "Religious education",
    "Creative arts and sports",
  ],
  support: [
    "Academic mentorship and progress reviews",
    "Guidance and counselling as learners move into adolescence",
    "Subject support clinics where needed",
    "Regular reporting and parent meetings",
  ],
  facilities: ["Junior School classrooms", "Library", "Sports grounds", "Campus grounds"],
  coCurricular: ["Sports teams", "Debate and public speaking", "Clubs and societies", "Competitions", "Educational trips"],
  faqs: [
    {
      question: "Which grades does Junior School cover?",
      answer:
        "The grades within Junior School are confirmed by the Academy office. Please contact admissions for the current structure.",
    },
    {
      question: "How do you prepare learners for Senior School?",
      answer:
        "Through subject depth, study skills, independent project work, mentorship and clear guidance on the choices ahead.",
    },
    {
      question: "Are there leadership opportunities?",
      answer:
        "Yes. Junior School learners take on responsibilities within the school and are encouraged to lead by example.",
    },
    {
      question: "Is boarding available at this level?",
      answer:
        "Boarding availability by level is confirmed by the Academy. Please see the Boarding page and speak with admissions.",
    },
  ],
};
