import { createFileRoute } from "@tanstack/react-router";
import AcademicPage from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
import image from "@/assets/upper.jpeg";

const title = "Primary School in Utawala — Embakasi Benedicta Academy";
const description =
  "Primary education in Utawala with strong literacy and numeracy foundations, close learner support and character development.";

export const Route = createFileRoute("/academics/primary")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/primary` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/primary` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config = {
  name: "Primary School",
  image,
  intro:
    "Strong academic foundations, practical learning and character development for growing learners.",
  description: [
    "Our Primary School builds the foundations that everything else rests on: confident reading, sound numeracy, clear thinking and good habits of work.",
    "Lessons are active and practical. Learners ask questions, work in groups, present their thinking and take increasing responsibility for their own progress. Teachers track each learner closely and step in early where support is needed.",
  ],
  learningApproach: [
    "Daily reading and writing practice across the curriculum",
    "Practical, enquiry-based lessons rather than rote learning",
    "Continuous assessment used to guide teaching, not to label learners",
    "Group work, presentation and discussion to build communication",
    "Clear expectations for behaviour, effort and respect",
  ],
  learningAreas: [
    "English and literacy",
    "Kiswahili",
    "Mathematics",
    "Science and technology",
    "Social studies",
    "Religious education",
    "Creative arts",
    "Physical and health education",
  ],
  support: [
    "Early identification of learners who need extra help",
    "Targeted reading and numeracy support",
    "Remedial and enrichment sessions where appropriate",
    "Pastoral care and mentorship for every learner",
  ],
  facilities: ["Primary classrooms", "Library", "Outdoor grounds", "Amusement park"],
  coCurricular: ["Sports and games", "Clubs", "Music and drama", "Educational trips"],
  faqs: [
    {
      question: "Which grades does Primary School cover?",
      answer:
        "The grades offered at each level are confirmed by the Academy office. Please contact admissions for the current structure.",
    },
    {
      question: "How is learner progress assessed?",
      answer:
        "Teachers use continuous assessment throughout the term to guide teaching and to report progress to parents. The formal assessment arrangement is confirmed by the Academy.",
    },
    {
      question: "What support is there for a learner who is struggling?",
      answer:
        "Teachers identify difficulties early and provide targeted support, with regular communication to parents so that home and school work together.",
    },
    {
      question: "Can primary learners board?",
      answer:
        "Boarding availability by level is confirmed by the Academy. Please see the Boarding page and speak with admissions.",
    },
  ],
};
