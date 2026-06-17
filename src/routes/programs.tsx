import { createFileRoute } from "@tanstack/react-router";
import ProgramsPage from "@/components/pages/ProgramsPage";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Embakasi Benedicta Academy" },
      { name: "description", content: "Kindergarten, Lower Primary and Junior Secondary programs delivered through the CBC curriculum." },
      { property: "og:title", content: "Programs at Embakasi Benedicta Academy" },
      { property: "og:description", content: "Comprehensive CBC education from age 3 to 14." },
    ],
  }),
  component: ProgramsPage,
});
