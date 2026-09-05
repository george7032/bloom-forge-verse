import { createFileRoute } from "@tanstack/react-router";
import AcademicPage from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
import image from "@/assets/kindergarten.jpeg";

const title = "Kindergarten in Utawala — Embakasi Benedicta Academy";
const description =
  "A warm, play-rich kindergarten in Utawala where young learners build language, numeracy, confidence and social skills.";

export const Route = createFileRoute("/academics/kindergarten")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/kindergarten` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/kindergarten` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config = {
  name: "Kindergarten",
  image,
  intro:
    "A gentle, joyful first experience of school where young children feel safe, seen and excited to learn.",
  description: [
    "Kindergarten at Embakasi Benedicta Academy is where the love of learning begins. Our youngest learners settle into routines, make friends and discover that school is a place where they belong.",
    "Learning happens through play, songs, stories, movement and hands-on activity. Teachers observe each child closely and adjust their support so that no learner is rushed or left behind.",
  ],
  learningApproach: [
    "Play-based, hands-on activities that suit how young children learn",
    "Short, varied lessons with plenty of movement and rest",
    "Daily story time and oral language work to build vocabulary",
    "Small-group work so teachers can support each child individually",
    "Gentle routines that build independence and confidence",
  ],
  learningAreas: [
    "Language and communication",
    "Early literacy and reading readiness",
    "Early numeracy",
    "Creative arts and craft",
    "Music and movement",
    "Environmental awareness",
    "Psychomotor and physical play",
    "Social and emotional development",
  ],
  support: [
    "Close teacher observation of every child's progress",
    "Extra help with speech, language and early reading where needed",
    "Settling-in support for children new to school",
    "Regular feedback to parents on progress and next steps",
  ],
  facilities: ["Kindergarten classrooms", "Outdoor play areas", "Kids amusement park", "Library reading corner"],
  coCurricular: ["Music and movement", "Creative arts", "Outdoor play", "School celebrations"],
  faqs: [
    {
      question: "What age can my child start Kindergarten?",
      answer:
        "Entry ages and the grades offered are confirmed by the Academy office. Please contact admissions for the current arrangement.",
    },
    {
      question: "How do you help a child settle in?",
      answer:
        "New children are supported with predictable routines, a familiar teacher and gentle encouragement. We keep parents updated during the first weeks.",
    },
    {
      question: "Is there time for play?",
      answer:
        "Yes. Play is part of the learning, not a break from it — including supervised time in our outdoor spaces and amusement park.",
    },
    {
      question: "How will I know how my child is doing?",
      answer:
        "Teachers share regular updates with parents and are available to meet and discuss your child's progress.",
    },
  ],
};
