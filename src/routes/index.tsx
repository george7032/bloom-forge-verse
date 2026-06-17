import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Embakasi Benedicta Academy — A Nurturing Space for Young Minds" },
      { name: "description", content: "Quality CBC education combined with the first kids amusement park in Embakasi. Enroll your child for joyful learning today." },
      { property: "og:title", content: "Embakasi Benedicta Academy" },
      { property: "og:description", content: "Quality education and a kids amusement park in Embakasi, Nairobi." },
    ],
  }),
  component: HomePage,
});
