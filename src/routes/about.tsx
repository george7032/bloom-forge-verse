import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/components/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Embakasi Benedicta Academy" },
      { name: "description", content: "Our mission, vision, story and leadership team at Embakasi Benedicta Academy in Utawala, Nairobi." },
      { property: "og:title", content: "About Embakasi Benedicta Academy" },
      { property: "og:description", content: "Founded in 2000 — nurturing 500+ families with joyful CBC education." },
    ],
  }),
  component: AboutPage,
});
